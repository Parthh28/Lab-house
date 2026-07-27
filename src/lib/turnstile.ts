/**
 * Cloudflare Turnstile server-side verification.
 *
 * To activate:
 *   1. Create a free Cloudflare account at https://dash.cloudflare.com
 *   2. Go to Turnstile → Add site → get your site key and secret key
 *   3. Add to .env.local:
 *        NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-site-key
 *        TURNSTILE_SECRET_KEY=your-secret-key
 *   4. Add the Turnstile widget to your form component (client-side)
 *
 * When TURNSTILE_SECRET_KEY is not set, verification is skipped
 * and all requests are allowed through (current behavior).
 */

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/**
 * Verify a Turnstile token from the client.
 * Returns true if verification passes or if Turnstile is not configured.
 */
export async function verifyTurnstile(
  token: string | undefined | null
): Promise<{ success: boolean; error?: string }> {
  // If Turnstile is not configured, skip verification
  if (!TURNSTILE_SECRET) {
    console.log(
      "[Turnstile] Secret key not configured — skipping verification"
    );
    return { success: true };
  }

  // If Turnstile IS configured but no token was provided, reject
  if (!token) {
    return { success: false, error: "CAPTCHA verification required" };
  }

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: TURNSTILE_SECRET,
        response: token,
      }),
    });

    const data = await res.json();
    if (data.success) {
      return { success: true };
    }
    return {
      success: false,
      error: "CAPTCHA verification failed. Please try again.",
    };
  } catch (error) {
    console.error("[Turnstile] Verification request failed:", error);
    // Fail open in case of network issues — don't block legitimate users
    return { success: true };
  }
}
