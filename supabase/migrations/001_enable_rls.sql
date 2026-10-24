-- ============================================================
-- Lab House — Row Level Security (RLS) Migration
-- ============================================================
-- Run this in your Supabase SQL Editor:
--   Dashboard → SQL Editor → New query → Paste → Run
--
-- What this does:
--   1. Enables RLS on quote_requests (the only table that exists right now)
--   2. Allows public users to INSERT only (submit forms)
--   3. Allows authenticated admin to read/update/delete
--
-- ⚠️  SUPERSEDED: The SELECT/UPDATE/DELETE policies below used
--   auth.role() = 'authenticated' which grants access to ANY signed-in
--   user, not just the admin.  Migration 002_restrict_admin_only.sql
--   drops these and replaces them with app_metadata-based admin checks.
--
-- When you create contacts, email_logs, or settings tables later,
-- come back and run the policies at the bottom of this file.
-- ============================================================

-- ═══════════════════════════════════════════════════════
-- quote_requests (EXISTS NOW — run this)
-- ═══════════════════════════════════════════════════════

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Public can only INSERT (submit a form) — nothing else
DROP POLICY IF EXISTS "Public can submit quotes" ON quote_requests;
CREATE POLICY "Public can submit quotes" ON quote_requests
  FOR INSERT WITH CHECK (true);

-- Only authenticated users can read/update/delete
-- ⚠️  SUPERSEDED by 002_restrict_admin_only.sql (admin-only via app_metadata)
DROP POLICY IF EXISTS "Admin can read quotes" ON quote_requests;
CREATE POLICY "Admin can read quotes" ON quote_requests
  FOR SELECT USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Admin can update quotes" ON quote_requests;
CREATE POLICY "Admin can update quotes" ON quote_requests
  FOR UPDATE USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Admin can delete quotes" ON quote_requests;
CREATE POLICY "Admin can delete quotes" ON quote_requests
  FOR DELETE USING (auth.role() = 'authenticated');


-- ═══════════════════════════════════════════════════════
-- FUTURE TABLES — Run these AFTER you create each table
-- ═══════════════════════════════════════════════════════

-- ── contacts ──
-- ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Public can submit contacts" ON contacts
--   FOR INSERT WITH CHECK (true);
-- CREATE POLICY "Admin can read contacts" ON contacts
--   FOR SELECT USING (auth.role() = 'authenticated');
-- CREATE POLICY "Admin can update contacts" ON contacts
--   FOR UPDATE USING (auth.role() = 'authenticated');
-- CREATE POLICY "Admin can delete contacts" ON contacts
--   FOR DELETE USING (auth.role() = 'authenticated');

-- ── email_logs (EXISTS NOW — run this) ──
CREATE TABLE IF NOT EXISTS email_logs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  quote_id text,
  customer_id text,
  to_email text NOT NULL,
  subject text NOT NULL,
  status text NOT NULL CHECK (status IN ('sent', 'failed')),
  error_message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;
-- ⚠️  SUPERSEDED by 002_restrict_admin_only.sql (admin-only via app_metadata)
DROP POLICY IF EXISTS "Admin only - email_logs" ON email_logs;
CREATE POLICY "Admin only - email_logs" ON email_logs
  FOR ALL USING (auth.role() = 'authenticated');

-- ── settings ──
-- ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Admin only - settings" ON settings
--   FOR ALL USING (auth.role() = 'authenticated');
