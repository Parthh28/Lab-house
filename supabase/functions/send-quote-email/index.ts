// @ts-nocheck
// supabase/functions/send-quote-email/index.ts
// ─────────────────────────────────────────────
// Supabase Edge Function: receives a quote form submission,
// saves it to `quote_requests`, sends a confirmation email
// to the customer + a notification to the admin via Resend,
// and logs both sends to `email_logs`.
//
// Deploy: supabase functions deploy send-quote-email --no-verify-jwt
// (--no-verify-jwt because public visitors submit quotes without auth)
//
// Required secrets (set via `supabase secrets set`):
//   RESEND_API_KEY        — your Resend API key
//   ADMIN_EMAIL           — admin inbox for notifications
//   SUPABASE_URL          — auto-provided by Supabase
//   SUPABASE_SERVICE_ROLE_KEY — auto-provided (needed to bypass RLS for insert)
// ─────────────────────────────────────────────

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ── CORS headers (allow your site's origin) ──
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// ── Validation helpers ──
function validatePayload(data: Record<string, unknown>) {
  const errors: Record<string, string> = {};

  const name = String(data.name ?? "").trim();
  if (!name || name.length < 2) errors.name = "Full Name must be at least 2 characters.";

  const company = String(data.company_name ?? "").trim();
  if (!company || company.length < 2) errors.company_name = "Company name is required.";

  const email = String(data.email ?? "").trim();
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRe.test(email)) errors.email = "Please provide a valid email address.";

  const phone = String(data.phone ?? "").trim();
  if (!phone || phone.length < 6) errors.phone = "Please provide a valid phone number.";

  const instrumentType = String(data.instrument_type ?? "").trim();
  if (!instrumentType) errors.instrument_type = "Please select an instrument category.";

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    sanitized: { name, company_name: company, email, phone, instrument_type: instrumentType, message: String(data.message ?? "").trim() },
  };
}

// ── Generate a customer ID ──
function generateCustomerId(): string {
  const suffix = Math.floor(10000 + Math.random() * 90000);
  return `CUST-${suffix}`;
}

// ── Send email via Resend ──
async function sendEmail(
  apiKey: string,
  { to, subject, html }: { to: string; subject: string; html: string },
): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Lab House <noreply@labhouse.net>",
        to: [to],
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Resend error:", res.status, body);
      return { success: false, error: `Resend ${res.status}: ${body}` };
    }

    return { success: true };
  } catch (err) {
    console.error("Resend fetch error:", err);
    return { success: false, error: String(err) };
  }
}

// ── HTML Escaping helper ──
function escapeHtml(str: string): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ── Email templates ──
function customerConfirmationHtml(name: string, customerId: string, instrumentType: string): string {
  const safeName = escapeHtml(name);
  const safeId = escapeHtml(customerId);
  const safeType = escapeHtml(instrumentType);
  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Roboto,sans-serif;background:#f8f9ff;">
  <div style="max-width:560px;margin:32px auto;background:#fff;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden;">
    <div style="background:#0F766E;padding:28px 32px;">
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">Lab House</h1>
      <p style="margin:4px 0 0;color:#99F6E4;font-size:13px;">ISO 2017 NABL Accredited Laboratory</p>
    </div>
    <div style="padding:32px;">
      <h2 style="margin:0 0 8px;color:#121c2a;font-size:20px;">Thank you, ${safeName}!</h2>
      <p style="color:#475569;font-size:14px;line-height:1.7;margin:0 0 20px;">
        We've received your quote request for <strong>${safeType}</strong>. Our metrology team will review your requirements and respond within <strong>2 hours</strong> during business hours.
      </p>
      <div style="background:#F0FDFA;border:1px solid #99F6E4;border-radius:12px;padding:16px;text-align:center;margin-bottom:24px;">
        <span style="display:block;font-size:11px;color:#475569;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Your Customer ID</span>
        <span style="font-family:monospace;font-size:20px;font-weight:700;color:#0F766E;">${safeId}</span>
      </div>
      <p style="color:#475569;font-size:13px;line-height:1.6;margin:0;">
        Please save this Customer ID for future reference. If you have any urgent requirements, call us at <strong>+91 9326050186</strong>.
      </p>
    </div>
    <div style="padding:16px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;text-align:center;">
      <p style="margin:0;color:#94a3b8;font-size:11px;">© ${new Date().getFullYear()} Lab House · ISO/IEC 17025:2017 · NABL CC-4341</p>
    </div>
  </div>
</body></html>`;
}

function adminNotificationHtml(data: Record<string, string>, customerId: string): string {
  const safeId = escapeHtml(customerId);
  const safeName = escapeHtml(data.name);
  const safeCompany = escapeHtml(data.company_name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone);
  const safeType = escapeHtml(data.instrument_type);
  const safeMessage = escapeHtml(data.message);
  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Roboto,sans-serif;background:#f8f9ff;">
  <div style="max-width:560px;margin:32px auto;background:#fff;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden;">
    <div style="background:#EA580C;padding:24px 32px;">
      <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700;">🔔 New Quote Request</h1>
    </div>
    <div style="padding:28px 32px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px 0;color:#64748b;width:130px;">Customer ID</td><td style="padding:8px 0;font-weight:600;color:#0F766E;font-family:monospace;">${safeId}</td></tr>
        <tr><td style="padding:8px 0;color:#64748b;">Name</td><td style="padding:8px 0;font-weight:600;color:#121c2a;">${safeName}</td></tr>
        <tr><td style="padding:8px 0;color:#64748b;">Company</td><td style="padding:8px 0;font-weight:600;color:#121c2a;">${safeCompany}</td></tr>
        <tr><td style="padding:8px 0;color:#64748b;">Email</td><td style="padding:8px 0;"><a href="mailto:${safeEmail}" style="color:#0F766E;font-weight:600;">${safeEmail}</a></td></tr>
        <tr><td style="padding:8px 0;color:#64748b;">Phone</td><td style="padding:8px 0;"><a href="tel:${safePhone}" style="color:#0F766E;font-weight:600;">${safePhone}</a></td></tr>
        <tr><td style="padding:8px 0;color:#64748b;">Service</td><td style="padding:8px 0;font-weight:600;color:#121c2a;">${safeType}</td></tr>
        ${safeMessage ? `<tr><td style="padding:8px 0;color:#64748b;vertical-align:top;">Details</td><td style="padding:8px 0;color:#334155;line-height:1.6;">${safeMessage}</td></tr>` : ""}
      </table>
    </div>
    <div style="padding:16px 32px;background:#FFF7ED;border-top:1px solid #FED7AA;text-align:center;">
      <p style="margin:0;color:#9a3412;font-size:12px;font-weight:600;">⚡ Target response: within 2 hours</p>
    </div>
  </div>
</body></html>`;
}

// ── Main handler ──
Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();

    // ── Honeypot check ──
    if (body.website) {
      // Silently accept but do nothing (bot detected)
      return new Response(
        JSON.stringify({ success: true, message: "Quote request received", customerId: "CUST-00000" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // ── Validate ──
    const { valid, errors, sanitized } = validatePayload(body);
    if (!valid) {
      return new Response(
        JSON.stringify({ error: "Validation failed", fieldErrors: errors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // ── Init Supabase (service role to bypass RLS for insert) ──
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // ── Duplicate check (same email in last 24h) ──
    const twentyFourHoursAgo = new Date(Date.now() - 86_400_000).toISOString();
    const { data: existing } = await supabase
      .from("quote_requests")
      .select("id")
      .eq("email", sanitized.email)
      .gte("created_at", twentyFourHoursAgo)
      .limit(1)
      .maybeSingle();

    if (existing) {
      return new Response(
        JSON.stringify({ error: "You've already submitted a quote request in the last 24 hours. Our team will contact you soon." }),
        { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // ── Generate customer ID & insert ──
    const customerId = generateCustomerId();

    const insertRecord = {
      ...sanitized,
      company: sanitized.company_name, // Support existing schema column
      company_name: sanitized.company_name,
      customer_id: customerId,
    };

    const { data: quote, error: insertError } = await supabase
      .from("quote_requests")
      .insert([insertRecord])
      .select("id, customer_id")
      .single();

    if (insertError) {
      console.error("DB insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to save your request. Please try again.", details: insertError.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // ── Send emails (best-effort, don't fail the request) ──
    const resendKey = Deno.env.get("RESEND_API_KEY");
    const adminEmail = Deno.env.get("ADMIN_EMAIL") || "mehtaparth2020@gmail.com";

    if (resendKey) {
      // Customer confirmation
      const customerResult = await sendEmail(resendKey, {
        to: sanitized.email,
        subject: `Quote Request Received — ${customerId} | Lab House`,
        html: customerConfirmationHtml(sanitized.name, customerId, sanitized.instrument_type),
      });

      // Log customer email
      await supabase.from("email_logs").insert([{
        quote_id: quote.id,
        customer_id: customerId,
        to_email: sanitized.email,
        subject: `Quote Request Received — ${customerId}`,
        status: customerResult.success ? "sent" : "failed",
        error_message: customerResult.error || null,
      }]);

      // Admin notification
      const adminResult = await sendEmail(resendKey, {
        to: adminEmail,
        subject: `🔔 New Quote: ${sanitized.name} — ${sanitized.instrument_type}`,
        html: adminNotificationHtml(sanitized, customerId),
      });

      // Log admin email
      await supabase.from("email_logs").insert([{
        quote_id: quote.id,
        customer_id: customerId,
        to_email: adminEmail,
        subject: `New Quote: ${sanitized.name} — ${sanitized.instrument_type}`,
        status: adminResult.success ? "sent" : "failed",
        error_message: adminResult.error || null,
      }]);
    } else {
      console.warn("RESEND_API_KEY not set — skipping emails");
    }

    // ── Success ──
    return new Response(
      JSON.stringify({ success: true, message: "Quote request received", customerId }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Unhandled error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again later." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
