import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { canAccessRoute, UserRole } from '@/lib/roles';

export async function middleware(request: NextRequest) {
  // Temporarily disable Supabase middleware until environment variables are properly set
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  
  if (!supabaseUrl || !supabaseKey || 
      supabaseUrl === 'your_project_url_here' || 
      supabaseKey === 'your_anon_key_here' ||
      !supabaseUrl.startsWith('http')) {
    return NextResponse.next();
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: '',
            ...options,
          });
        },
      },
    }
  );

  // Use getUser() instead of getSession() for better security
  const { data: { user }, error } = await supabase.auth.getUser();

  // Protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!user || error) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Check user role
    const { data: userProfile, error: profileError } = await supabase
      .from('users')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profileError || !userProfile) {
      console.log('Middleware: User profile not found', { 
        profileError: profileError?.message, 
        userId: user.id 
      });
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }

    // Check if user role is valid
    const validRoles: UserRole[] = ['super_admin', 'content_manager', 'donation_manager', 'event_manager', 'volunteer_coordinator', 'viewer'];
    if (!validRoles.includes(userProfile.role as UserRole)) {
      console.log('Middleware: Invalid user role', { 
        userRole: userProfile.role, 
        userId: user.id 
      });
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }

    // Check if user can access the specific route
    if (!canAccessRoute(userProfile.role as UserRole, request.nextUrl.pathname)) {
      console.log('Middleware: Route access denied', { 
        userRole: userProfile.role, 
        requestedRoute: request.nextUrl.pathname,
        userId: user.id 
      });
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
