import { Resend } from "resend";
import type { QuoteRequestInput } from "./validators";
import { siteConfig } from "@/config/site.config";
import { supabase } from "@/lib/supabase";

const resendApiKey = process.env.RESEND_API_KEY;
const adminEmail = process.env.ADMIN_EMAIL || siteConfig.email;

console.log("[Email Service] Init:", {
  hasApiKey: !!resendApiKey,
  apiKeyPrefix: resendApiKey ? resendApiKey.substring(0, 8) + "..." : "MISSING",
  adminEmail,
});

const resend = resendApiKey && resendApiKey !== "your-resend-api-key"
  ? new Resend(resendApiKey)
  : null;

console.log("[Email Service] Resend client created:", !!resend);

export async function sendQuoteConfirmationEmails(
  data: QuoteRequestInput,
  quoteId: string,
  customerId: string
): Promise<{ success: boolean; error?: string }> {
  if (!resend) {
    // Graceful fallback during dev/demo without API keys
    console.log("[Email Service] Resend key not configured. Mocking email dispatch:", {
      to_customer: data.email,
      to_admin: adminEmail,
      quoteId,
      instrument: data.instrument_type,
    });
    return { success: true };
  }

  const isDev = process.env.NODE_ENV === "development";
  const fromAddress = isDev ? "contact@labhouse.net" : `${siteConfig.name} <${siteConfig.email}>`;

  console.log("[Email Service] Sending emails:", {
    isDev,
    fromAddress,
    toCustomer: data.email,
    toAdmin: adminEmail,
    quoteId,
  });

  // Helper function to log email to Supabase
  const logEmail = async (toEmail: string, subject: string, status: "sent" | "failed", errorMessage?: string) => {
    if (supabase) {
      try {
        await supabase.from("email_logs").insert({
          quote_id: quoteId,
          customer_id: customerId,
          to_email: toEmail,
          subject,
          status,
          error_message: errorMessage || null,
        });
      } catch (logErr) {
        console.error("[Email Service] Failed to log email to database:", logErr);
      }
    }
  };

  try {
    // 1. Send confirmation email to customer
    const customerResult = await resend.emails.send({
      from: fromAddress,
      to: [data.email],
      subject: `Quote Request Received — ${siteConfig.name}`,
      html: `
        <div style="font-family: 'Red Hat Text', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1F2937;">
          <div style="background-color: #0F766E; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; font-family: 'Red Hat Display', Arial, sans-serif;">Quote Request Received</h2>
          </div>
          <div style="padding: 24px; border: 1px solid #D1D5DB; border-top: none; border-radius: 0 0 8px 8px; background-color: #f8f9ff;">
            <p>Dear <strong>${data.name}</strong>,</p>
            <p>Thank you for reaching out to ${siteConfig.name} Calibration Services. We have successfully logged your quote request.</p>
            <p style="margin: 4px 0; font-size: 14px;">Your Customer ID: <strong>${customerId}</strong></p>
            
            <div style="background-color: white; border: 1px solid #D1D5DB; padding: 16px; border-radius: 6px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #0F766E; font-size: 16px;">Request Summary:</h3>
              <p style="margin: 4px 0; font-size: 14px;"><strong>Instrument Category:</strong> ${data.instrument_type.toUpperCase()}</p>
              ${data.company ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Company:</strong> ${data.company}</p>` : ""}
              ${data.message ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Notes / Scope:</strong> ${data.message}</p>` : ""}
            </div>

            <p style="background-color: #F0FDFA; border-left: 4px solid #0F766E; padding: 12px; font-size: 14px;">
              <strong>Our Guarantee:</strong> A dedicated ${siteConfig.accreditation} metrology engineer will review your specifications and contact you within <strong>2 hours</strong> with a detailed quote and turnaround schedule.
            </p>

            <p style="margin-top: 24px; font-size: 14px; color: #64748B;">
              Best regards,<br>
              <strong>The ${siteConfig.name} Metrology Team</strong><br>
              <a href="https://labhouse.net" style="color: #0F766E;">labhouse.net</a>
            </p>
          </div>
        </div>
      `,
    });
    console.log("[Email Service] Customer email result:", JSON.stringify(customerResult, null, 2));
    await logEmail(data.email, `Quote Request Received — ${siteConfig.name}`, "sent");

    // 2. Send alert email to Admin
    const adminResult = await resend.emails.send({
      from: fromAddress,
      to: [adminEmail],
      subject: `🚨 [NEW QUOTE] ${data.name} (${data.company || "Individual"}) — ${data.instrument_type.toUpperCase()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ddd;">
          <h3 style="color: #F97316;">New Calibration Quote Request</h3>
          <p><strong>Quote ID:</strong> ${quoteId}</p>
          <p><strong>Customer ID:</strong> ${customerId}</p>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
          <p><strong>Company:</strong> ${data.company || "N/A"}</p>
          <p><strong>Instrument Category:</strong> ${data.instrument_type}</p>
          <p><strong>Message/Notes:</strong></p>
          <blockquote style="background: #f4f4f4; padding: 10px; border-left: 3px solid #0F766E;">
            ${data.message || "No notes provided."}
          </blockquote>
        </div>
      `,
    });
    console.log("[Email Service] Admin email result:", JSON.stringify(adminResult, null, 2));
    await logEmail(adminEmail, `🚨 [NEW QUOTE] ${data.name} (${data.company || "Individual"}) — ${data.instrument_type.toUpperCase()}`, "sent");

    return { success: true };
  } catch (error: any) {
    console.error("[Email Service] ❌ Resend API Error:", JSON.stringify(error, null, 2));
    console.error("[Email Service] ❌ Error message:", error?.message);
    console.error("[Email Service] ❌ Error name:", error?.name);
    console.error("[Email Service] ❌ Full error:", error);
    
    await logEmail(data.email, "Multiple Emails", "failed", error?.message || "Failed to send emails");
    
    return { success: false, error: error?.message || "Failed to send emails" };
  }
}
