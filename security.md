# Lab House Website Security Guide

## Overview

This document defines the security measures required for the Lab House website across three tiers: **Critical** (must-do before launch), **Important** (do in week 1-2), and **Ongoing** (continuous maintenance).

**Reality check:** No system is "100% secure." This document reduces realistic risk for a Next.js + Supabase + Vercel stack at small-business scale. It is not a substitute for a professional security audit if the business grows to handle sensitive financial or health data.

**Stack in scope:** Next.js 14, Supabase (PostgreSQL), Vercel, SendGrid.

---

## Priority Order (2-Week Timeline)

1. Supabase Row Level Security — 30 min
2. Zod validation on every API route — 1-2 hrs
3. Security headers in `next.config.js` — 10 min
4. Honeypot + CAPTCHA on forms — 1 hr
5. Everything else, as you go

---

## 🔴 CRITICAL — Before Launch, No Exceptions

### 1. Supabase Row Level Security (RLS)

**This is the single most common way small-business Supabase apps get their entire customer database scraped.**

Your Supabase anon key is public — it ships inside your frontend JavaScript bundle, visible to anyone via browser dev tools. Without RLS, anyone who finds that key can read, modify, or delete every row in every table, including customer names, emails, and phone numbers.

```sql
-- Enable RLS on every table
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Public can only INSERT (submit a form) — nothing else
CREATE POLICY "Public can submit quotes" ON quote_requests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can submit contacts" ON contacts
  FOR INSERT WITH CHECK (true);

-- Only authenticated admin role can read/update/delete
CREATE POLICY "Admin can read quotes" ON quote_requests
  FOR SELECT USING (auth.role() = 'admin');

CREATE POLICY "Admin can update quotes" ON quote_requests
  FOR UPDATE USING (auth.role() = 'admin');

-- email_logs and settings: admin-only, no public access at all
CREATE POLICY "Admin only - email_logs" ON email_logs
  FOR ALL USING (auth.role() = 'admin');

CREATE POLICY "Admin only - settings" ON settings
  FOR ALL USING (auth.role() = 'admin');
```

**Verify it's working:** In Supabase dashboard, try querying `quote_requests` using the anon key directly (not the service role key). You should only be able to INSERT, never SELECT.

### 2. Server-Side Validation (Never Trust the Browser)

Client-side validation is UX only. Anyone can bypass your HTML form and POST directly to your API with malicious payloads.

```typescript
import { z } from 'zod';

const quoteSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  phone: z.string().regex(/^\+?[0-9\s-]{7,15}$/),
  company: z.string().max(150).optional(),
  instrument_type: z.enum(['precision', 'thermal', 'electrical']),
  turnaround_preference: z.enum(['standard', 'express', 'rush']).optional(),
  message: z.string().max(1000).optional(),
});

// In every API route that accepts input:
export async function POST(request: Request) {
  const body = await request.json();
  const result = quoteSchema.safeParse(body);

  if (!result.success) {
    return Response.json(
      { error: 'Invalid input', details: result.error.flatten() },
      { status: 400 }
    );
  }

  const data = result.data; // now safe, typed, and validated
  // ... proceed
}
```

Apply this pattern to **every** API route that accepts a request body — `/api/quote-request`, `/api/contact`, and any admin routes.

### 3. Secrets Never Touch the Client

- `.env.local` must be in `.gitignore` — never committed to Git, ever, even in a private repo
- The Supabase **service role key** (bypasses RLS, full database access) only lives in server-side API routes — never imported into any client component
- All secrets (SendGrid API key, Supabase keys, JWT secret) are set as environment variables in the Vercel dashboard, not hardcoded
- Rotate any key immediately if it's ever exposed (committed by accident, pasted in a support ticket, etc.)

```bash
# .env.local (NEVER commit this file)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...          # OK to expose — public by design
SUPABASE_SERVICE_ROLE_KEY=eyJ...              # NEVER expose — server-only
SENDGRID_API_KEY=SG.xxxxx                      # NEVER expose — server-only
ADMIN_JWT_SECRET=xxxxx                         # NEVER expose — server-only
```

Rule of thumb: anything without the `NEXT_PUBLIC_` prefix must never be imported into a file that runs in the browser.

### 4. Rate Limiting + Bot Protection

**Rate limits (already specified in AGENT.md):**
- 5 quote requests per hour per IP address
- 1 quote request per 24 hours per email address

**Add CAPTCHA:**
Use Cloudflare Turnstile (free, privacy-friendly, mostly invisible to real users) on both the quote form and contact form.

```typescript
// Server-side verification in the API route
async function verifyTurnstile(token: string) {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  });
  const data = await res.json();
  return data.success;
}
```

**Add a honeypot field:**
A hidden input real users never see or fill. Bots that auto-fill every field will fill it. If it's non-empty, silently reject the submission (return a fake success so the bot doesn't learn).

```html
<!-- Hidden via CSS, not type="hidden" (bots specifically skip type=hidden) -->
<input
  type="text"
  name="website"
  style="position:absolute; left:-9999px;"
  tabindex="-1"
  autocomplete="off"
/>
```

```typescript
// Server-side check
if (body.website) {
  // Bot filled the honeypot — pretend success, do nothing
  return Response.json({ success: true }, { status: 201 });
}
```

### 5. Input Sanitization

Strip HTML/script tags from all free-text fields before storing or emailing them, even after Zod validation (validation checks shape, not malicious content).

```typescript
import sanitizeHtml from 'sanitize-html';

const cleanMessage = sanitizeHtml(data.message, {
  allowedTags: [],
  allowedAttributes: {},
});
```

This prevents stored XSS — where a malicious `<script>` submitted via the contact form gets rendered later in your admin dashboard and executes in the admin's browser.

---

## 🟠 IMPORTANT — Week 1-2

### 6. Security Headers

Add to `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;",
          },
        ],
      },
    ];
  },
};
```

| Header | Purpose |
| --- | --- |
| `X-Frame-Options: DENY` | Stops your site being loaded in an iframe (clickjacking) |
| `X-Content-Type-Options: nosniff` | Stops browsers guessing MIME types (drive-by download protection) |
| `Strict-Transport-Security` | Forces HTTPS, blocks downgrade attacks |
| `Content-Security-Policy` | Restricts which domains can load scripts/styles/fonts/images |
| `Permissions-Policy` | Disables browser features (camera, mic, location) you never use |

### 7. Admin Dashboard Authentication

Do not build a custom login system from scratch. Use **Supabase Auth** or **NextAuth.js**.

Requirements:
- Strong password policy enforced at signup (minimum 12 characters)
- Session expires after a period of inactivity (e.g., 2 hours)
- Multi-factor authentication (MFA) enabled for the admin account — Supabase Auth supports this natively
- **Server-side route protection** — check the session in middleware, not just hiding a button in the UI:

```typescript
// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data: { session } } = await supabase.auth.getSession();

  if (req.nextUrl.pathname.startsWith('/admin') && !session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return res;
}

export const config = {
  matcher: ['/admin/:path*'],
};
```

A button that's merely hidden in the UI but whose underlying API route has no server-side check is not protection — anyone can call the API route directly.

### 8. XSS Prevention

React escapes text content by default, which already covers most cases. The one rule that matters:

**Never use `dangerouslySetInnerHTML` with any string that originated from user input** (form submissions, URL parameters, database records that store user-submitted text). If this API is never used with untrusted data, XSS risk from rendering is effectively eliminated.

### 9. Email Authentication (SPF / DKIM / DMARC)

Without these DNS records, your quote confirmation emails will land in spam — and worse, anyone can spoof "contact@labhouse.net" convincingly.

- **SPF record** — authorizes SendGrid to send email on behalf of your domain
- **DKIM signing** — SendGrid provides the CNAME records to add to your DNS
- **DMARC policy** — tells receiving mail servers what to do with emails that fail SPF/DKIM

SendGrid's dashboard has a domain authentication wizard that generates the exact records to add — follow it before sending production email.

### 10. CORS Configuration

Restrict your API routes to only accept requests from your own domain:

```typescript
// In each API route
const allowedOrigin = 'https://labhouse.com';

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (origin !== allowedOrigin) {
    return Response.json({ error: 'Forbidden' }, { status: 403 });
  }
  // ... proceed
}
```

---

## 🟡 ONGOING — Continuous Maintenance

### 11. Dependency Scanning

Run before every deploy:

```bash
npm audit
npm audit fix
```

Enable **Dependabot** on the GitHub repository (free) — it automatically opens pull requests when a dependency has a known vulnerability.

### 12. Logging & Monitoring

- Log failed validation attempts, rate-limit triggers, and honeypot catches — patterns here reveal active attack attempts before they escalate
- Use **Sentry** (free tier available) for error tracking in production — alerts you to failures before a customer has to report them
- Review Supabase's built-in logs periodically for unusual query patterns

### 13. Data Minimization & Privacy Policy

- Publish an actual privacy policy page — required for a real business collecting customer PII, not optional
- Only collect fields you genuinely need (avoid "just in case" data collection)
- Define a retention policy — e.g., auto-delete or anonymize `quote_requests` records older than 2 years, especially ones marked "closed" with no follow-up

### 14. Backup & Recovery

- Confirm Supabase's automatic daily backups are enabled (available even on free/pro tiers with limited retention)
- Periodically test that a backup can actually be restored — an untested backup is not a backup
- Document the recovery steps in this file or in AGENT.md so anyone on the team can execute recovery if needed

### 15. Regular Review Cadence

| Frequency | Task |
| --- | --- |
| Every deploy | `npm audit`, review Dependabot PRs |
| Weekly | Check Sentry/error logs for anomalies |
| Monthly | Review Supabase auth logs, rotate any exposed credentials |
| Quarterly | Re-read this document, verify RLS policies still match table schema after any DB changes |

---

## What's Deliberately Out of Scope (For Now)

These are not needed at Lab House's current scale and would be over-engineering for a small business calibration site:

- **Web Application Firewall (WAF)** — Vercel's edge network already absorbs basic volumetric attacks; a dedicated WAF is overkill pre-scale
- **Third-party penetration testing** — valuable once handling higher-sensitivity data (financial, medical) or larger transaction volume, not necessary at launch
- **Multi-region failover / active-active architecture** — unnecessary complexity for current traffic expectations

Revisit this list if the business scales significantly, starts processing payments directly, or starts handling more sensitive data categories.

---

## Pre-Launch Security Checklist

- [ ] RLS enabled on all 4 Supabase tables, verified with anon key testing
- [ ] Zod (or equivalent) validation on every API route accepting input
- [ ] `.env.local` confirmed in `.gitignore`, not present in Git history
- [ ] Service role key only referenced in server-side files
- [ ] Rate limiting active (5/hr per IP, 1/24hr per email)
- [ ] Turnstile or hCaptcha added to quote + contact forms
- [ ] Honeypot field added to both forms
- [ ] Input sanitization applied to all free-text fields before storage/email
- [ ] Security headers configured in `next.config.js`
- [ ] Admin routes protected via middleware (server-side session check)
- [ ] MFA enabled on admin account
- [ ] SPF/DKIM/DMARC configured for the sending domain
- [ ] CORS restricted to production domain
- [ ] `npm audit` run with zero high/critical vulnerabilities
- [ ] Dependabot enabled on GitHub repo
- [ ] Privacy policy page published
- [ ] Supabase automatic backups confirmed active

---

**Last Updated:** July 2026
**Status:** Ready for implementation
**Related documents:** DESIGN.md, FONTS.md, AGENT.md, IMPLEMENTATION.md