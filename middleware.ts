import { JWTPayload, jwtVerify } from "jose";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export interface AuthRequest extends NextRequest {
  user?: JWTPayload & { session_id?: string; id?: string };
}

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const token = cookies().get("auth-token");
  const loginURL = request.nextUrl.clone();
  loginURL.pathname = "/login";
  if (!token) {
    return NextResponse.redirect(loginURL);
  }

  try {
    const isValid = await jwtVerify<{ session_id?: string; id?: string }>(
      token.value,
      new TextEncoder().encode(process.env.JWT_SECRET!),
    ).then((res) => res.payload);
    const isExpired = isValid.exp && Date.now() >= isValid.exp * 1000;

    if (!isValid || isExpired) {
      return NextResponse.redirect(loginURL);
    }
    (request as AuthRequest).user = isValid;
  } catch (error) {
    return NextResponse.redirect(loginURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - auth (auth routes)
     */
    "/((?!_next/static|_next/image|favicon.ico|login|signup|api/auth).*)",
  ],
};
