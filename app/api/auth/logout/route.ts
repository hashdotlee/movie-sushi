import { AuthRequest } from "@/middleware";
import { decodeJwt } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: AuthRequest) {
  try {
    const token = req.cookies.get("auth-token")!;
    const decodedToken = decodeJwt<{ session_id: string; id: string }>(
      token.value,
    );
    const loginURL = req.nextUrl.clone();
    loginURL.pathname = "/login";

    const session_id = decodedToken?.session_id;

    if (!session_id) {
      cookies().delete("auth-token");
      return NextResponse.redirect(loginURL);
    }

    await fetch("https://api.themoviedb.org/3/authentication/session", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        session_id: session_id,
      }),
    });

    cookies().delete("auth-token");
    return NextResponse.redirect(loginURL);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
