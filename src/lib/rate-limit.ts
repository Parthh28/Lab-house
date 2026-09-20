/**
 * In-memory rate limiter for API routes.
 *
 * Limits:
 *   - 5 requests per hour per IP address
 *   - 1 request per 24 hours per email address
 *
 * Note: This uses an in-memory Map, which resets on server restart.
 * For Vercel serverless, each cold start resets the map. This provides
 * basic protection; for production-grade rate limiting at scale,
 * consider Upstash Redis or Vercel KV.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number; // Unix timestamp in ms
}

const ipLimiter = new Map<string, RateLimitEntry>();
const emailLimiter = new Map<string, RateLimitEntry>();

const IP_LIMIT = 5;
const IP_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const EMAIL_LIMIT = 1;
const EMAIL_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

// Clean up expired entries every 10 minutes
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000;
let lastCleanup = Date.now();

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  for (const [key, entry] of ipLimiter) {
    if (now > entry.resetAt) ipLimiter.delete(key);
  }
  for (const [key, entry] of emailLimiter) {
    if (now > entry.resetAt) emailLimiter.delete(key);
  }
}

function checkLimit(
  limiter: Map<string, RateLimitEntry>,
  key: string,
  maxRequests: number,
  windowMs: number
): { allowed: boolean; retryAfterMs: number } {
  if (process.env.NODE_ENV === "development") {
    return { allowed: true, retryAfterMs: 0 };
  }

  cleanup();
  const now = Date.now();
  const entry = limiter.get(key);

  if (!entry || now > entry.resetAt) {
    // First request or window expired — reset
    limiter.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterMs: 0 };
  }

  if (entry.count >= maxRequests) {
    // Over the limit
    return { allowed: false, retryAfterMs: entry.resetAt - now };
  }

  // Under the limit — increment
  entry.count++;
  return { allowed: true, retryAfterMs: 0 };
}

export function checkIpRateLimit(ip: string) {
  return checkLimit(ipLimiter, ip, IP_LIMIT, IP_WINDOW_MS);
}

export function checkEmailRateLimit(email: string) {
  return checkLimit(
    emailLimiter,
    email.toLowerCase().trim(),
    EMAIL_LIMIT,
    EMAIL_WINDOW_MS
  );
}
