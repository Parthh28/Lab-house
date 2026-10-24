-- ============================================================
-- Lab House — Restrict quote & email-log access to verified admin
-- ============================================================
-- PROBLEM:  The 001 migration allowed ANY authenticated user
--           (auth.role() = 'authenticated') to SELECT / UPDATE /
--           DELETE quote_requests and to have full access to
--           email_logs.  That means anyone who signs up via
--           Supabase Auth gets admin-level read/write access.
--
-- FIX:      Replace those policies so that only users whose JWT
--           contains  app_metadata.is_admin = true  can access
--           the data.
--
-- HOW TO MARK A USER AS ADMIN (one-time, do this first):
--   Option A — Supabase Dashboard:
--     Authentication → Users → select user → "Edit user" (⋮ menu)
--     → set Raw App Meta Data to:  {"is_admin": true}
--
--   Option B — SQL Editor:
--     UPDATE auth.users
--     SET raw_app_meta_data = raw_app_meta_data || '{"is_admin": true}'::jsonb
--     WHERE email = 'mehtaparth2020@gmail.com';
--
-- After marking the admin, run this migration in SQL Editor.
-- ============================================================

-- ═══════════════════════════════════════════════════════════
-- Helper: reusable function so every policy isn't duplicating
-- the same JSONB extraction.
-- ═══════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT coalesce(
    (auth.jwt() -> 'app_metadata' ->> 'is_admin')::boolean,
    false
  );
$$;

-- Grant execute to authenticated (needed for RLS evaluation)
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;


-- ═══════════════════════════════════════════════════════════
-- quote_requests — drop old permissive policies, add strict ones
-- ═══════════════════════════════════════════════════════════

-- Drop the old "any authenticated" policies created in 001
DROP POLICY IF EXISTS "Admin can read quotes"   ON quote_requests;
DROP POLICY IF EXISTS "Admin can update quotes"  ON quote_requests;
DROP POLICY IF EXISTS "Admin can delete quotes"  ON quote_requests;
DROP POLICY IF EXISTS "Verified admin can read quotes" ON quote_requests;
DROP POLICY IF EXISTS "Verified admin can update quotes" ON quote_requests;
DROP POLICY IF EXISTS "Verified admin can delete quotes" ON quote_requests;
-- Also drop any insecure permissive dashboard policies
DROP POLICY IF EXISTS "Allow public select"     ON quote_requests;
DROP POLICY IF EXISTS "Allow public insert"     ON quote_requests;

-- New admin-only policies
CREATE POLICY "Verified admin can read quotes" ON quote_requests
  FOR SELECT USING (public.is_admin());

CREATE POLICY "Verified admin can update quotes" ON quote_requests
  FOR UPDATE USING (public.is_admin());

CREATE POLICY "Verified admin can delete quotes" ON quote_requests
  FOR DELETE USING (public.is_admin());

-- NOTE: The public INSERT policy from 001 ("Public can submit quotes")
-- is intentionally left in place — unauthenticated visitors must still
-- be able to submit quote request forms.


-- ═══════════════════════════════════════════════════════════
-- email_logs — replace the blanket "authenticated" policy
-- ═══════════════════════════════════════════════════════════

DROP POLICY IF EXISTS "Admin only - email_logs" ON email_logs;
DROP POLICY IF EXISTS "Verified admin only - email_logs" ON email_logs;

CREATE POLICY "Verified admin only - email_logs" ON email_logs
  FOR ALL USING (public.is_admin());


-- ═══════════════════════════════════════════════════════════
-- FUTURE TABLES — templates for contacts & settings
-- ═══════════════════════════════════════════════════════════

-- ── contacts (uncomment after creating the table) ──
-- DROP POLICY IF EXISTS "Admin can read contacts"   ON contacts;
-- DROP POLICY IF EXISTS "Admin can update contacts"  ON contacts;
-- DROP POLICY IF EXISTS "Admin can delete contacts"  ON contacts;
-- CREATE POLICY "Verified admin can read contacts" ON contacts
--   FOR SELECT USING (public.is_admin());
-- CREATE POLICY "Verified admin can update contacts" ON contacts
--   FOR UPDATE USING (public.is_admin());
-- CREATE POLICY "Verified admin can delete contacts" ON contacts
--   FOR DELETE USING (public.is_admin());

-- ── settings (uncomment after creating the table) ──
-- DROP POLICY IF EXISTS "Admin only - settings" ON settings;
-- CREATE POLICY "Verified admin only - settings" ON settings
--   FOR ALL USING (public.is_admin());
