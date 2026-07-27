import { NextResponse } from "next/server";
import { quoteRequestSchema } from "@/lib/validators";
import { supabase } from "@/lib/supabase";
import { sendQuoteConfirmationEmails } from "@/lib/email";
import { sanitizeFields } from "@/lib/sanitize";
import { checkIpRateLimit, checkEmailRateLimit } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import type { QuoteRequestResponse } from "@/types/forms";

// CORS: Only allow requests from the production domain (and localhost in dev)
const ALLOWED_ORIGINS = [
  "https://labhouse.com",
  "https://www.labhouse.com",
  "https://labhouse.net",
  "https://www.labhouse.net",
  ...(process.env.NODE_ENV === "development" ? ["http://localhost:3000"] : []),
];

export async function POST(request: Request) {
  try {
    // ── 0. CORS Origin Check ──
    const origin = request.headers.get("origin");
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json(
        { success: false, error: "Forbidden" },
        { status: 403 }
      );
    }

    // ── 1. Rate Limiting (IP-based) ──
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
    const ipCheck = checkIpRateLimit(ip);
    if (!ipCheck.allowed) {
      return NextResponse.json<QuoteRequestResponse>(
        {
          success: false,
          error: "Too many requests. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil(ipCheck.retryAfterMs / 1000)),
          },
        }
      );
    }

    const body = await request.json();

    // ── 2. Honeypot Check ──
    // If the hidden "website" field is filled, it's a bot — fake success
    if (body.website) {
      return NextResponse.json<QuoteRequestResponse>(
        {
          success: true,
          message:
            "Submitted successfully! Our metrology team will contact you within 2 hours with a detailed quote.",
          quote_id: `LH-${Date.now().toString(36).toUpperCase()}`,
          customer_id: `CUST-${Date.now().toString(36).toUpperCase().slice(-4)}`,
        },
        { status: 201 }
      );
    }

    // ── 3. Turnstile CAPTCHA Verification ──
    const turnstileResult = await verifyTurnstile(body.turnstileToken);
    if (!turnstileResult.success) {
      return NextResponse.json<QuoteRequestResponse>(
        {
          success: false,
          error: turnstileResult.error || "CAPTCHA verification failed.",
        },
        { status: 400 }
      );
    }

    // ── 4. Zod Server-Side Validation ──
    const validationResult = quoteRequestSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of validationResult.error.issues) {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      }
      return NextResponse.json<QuoteRequestResponse>(
        {
          success: false,
          error: "Validation failed. Please verify your form inputs.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    // ── 5. Rate Limiting (Email-based) ──
    const emailCheck = checkEmailRateLimit(validationResult.data.email);
    if (!emailCheck.allowed) {
      return NextResponse.json<QuoteRequestResponse>(
        {
          success: false,
          error:
            "A quote request with this email was already submitted recently. Please wait 24 hours or call us directly.",
        },
        { status: 429 }
      );
    }

    // ── 6. Input Sanitization ──
    // Strip HTML tags from all string fields to prevent stored XSS
    const data = sanitizeFields(validationResult.data);

    let quoteId = `LH-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const customerId = `CUST-${Date.now().toString(36).toUpperCase().slice(-4)}${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // ── 7. Save to Supabase (if configured) ──
    if (supabase) {
      const { data: inserted, error: insertError } = (await supabase
        .from("quote_requests")
        .insert({
          customer_id: customerId,
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          instrument_type: data.instrument_type,
          message: data.message || null,
          status: "pending",
        })
        .select("id")
        .single()) as { data: { id: string } | null; error: any };

      if (insertError) {
        console.error("[Supabase Insert Error]:", insertError);
        return NextResponse.json<QuoteRequestResponse>(
          {
            success: false,
            error:
              "Failed to save quote request to database. Please try again or call our hotline.",
          },
          { status: 500 }
        );
      }

      if (inserted?.id) {
        quoteId = inserted.id;
      }
    } else {
      console.log(
        "[Supabase Helper] Database not configured. Running in demo mode with ID:",
        quoteId,
        "Customer ID:",
        customerId
      );
    }

    // ── 8. Dispatch Emails via Resend ──
    await sendQuoteConfirmationEmails(data, quoteId, customerId);

    // ── 9. Return Success ──
    return NextResponse.json<QuoteRequestResponse>(
      {
        success: true,
        message:
          "Submitted successfully! Our metrology team will contact you within 2 hours with a detailed quote.",
        quote_id: quoteId,
        customer_id: customerId,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("[POST /api/quote-request Error]:", err);
    return NextResponse.json<QuoteRequestResponse>(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
