import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple password - change this or use env var SITE_PASSWORD
const SITE_PASSWORD = process.env.SITE_PASSWORD || 'usdm2026';

export function middleware(request: NextRequest) {
  // Skip auth for the login page and API routes
  if (request.nextUrl.pathname === '/login' || request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  // Check for auth cookie
  const authCookie = request.cookies.get('site-auth');
  
  if (authCookie?.value === 'authenticated') {
    return NextResponse.next();
  }

  // Redirect to login
  const loginUrl = new URL('/login', request.url);
  loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api/).*)',
  ],
};
