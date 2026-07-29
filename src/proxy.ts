import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware for admin route protection.
 *
 * Current behavior (no admin portal yet):
 *   - Redirects all /admin/* requests to /login
 *
 * Future behavior (once Supabase Auth is set up):
 *   - Check session via Supabase Auth
 *   - Only redirect if no valid session exists
 *   - Uncomment the Supabase auth check below when ready
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes — redirect to login if not authenticated
  if (pathname.startsWith("/admin")) {
    // ────────────────────────────────────────────────────────
    // TODO: When Supabase Auth is set up, replace the redirect
    // below with a session check:
    //
    // import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
    //
    // const res = NextResponse.next();
    // const supabase = createMiddlewareClient({ req: request, res });
    // const { data: { session } } = await supabase.auth.getSession();
    //
    // if (!session) {
    //   return NextResponse.redirect(new URL('/login', request.url));
    // }
    // return res;
    // ────────────────────────────────────────────────────────

    // For now: always redirect to login (no admin portal yet)
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
