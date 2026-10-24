-- ============================================================
-- Lab House — Create quote_requests table (if not already done)
-- ============================================================
-- Run this BEFORE 001_enable_rls.sql and 002_restrict_admin_only.sql
-- if the table doesn't exist yet.
--
-- If you already created it via the Supabase dashboard, this is
-- safe to run — CREATE TABLE IF NOT EXISTS will no-op.
-- ============================================================

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company_name text NOT NULL,
  instrument_type text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'contacted', 'quoted', 'closed')),
  created_at timestamptz DEFAULT now()
);

-- Index for duplicate-check query (email + recent created_at)
CREATE INDEX IF NOT EXISTS idx_quote_requests_email_created
  ON quote_requests (email, created_at DESC);
