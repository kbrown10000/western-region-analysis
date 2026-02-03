import { NextResponse } from 'next/server';

const SITE_PASSWORD = process.env.SITE_PASSWORD || 'usdm2026';

export async function POST(request: Request) {
  const { password } = await request.json();

  if (password === SITE_PASSWORD) {
    const response = NextResponse.json({ success: true });
    
    // Set auth cookie - expires in 7 days
    response.cookies.set('site-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  }

  return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
}
