import dbConnect from "@/lib/dbConnect";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { requestToken } = await req.json();

    if (!requestToken) {
      return NextResponse.json(
        { error: "Request token is required" },
        { status: 400 },
      );
    }

    const session = await fetch(
      "https://api.themoviedb.org/3/authentication/session/new",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        body: JSON.stringify({
          request_token: requestToken,
        }),
      },
    ).then((res) => res.json());

    const token = await new SignJWT({ session_id: session.session_id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1d")
      .setIssuedAt()
      .sign(new TextEncoder().encode(process.env.JWT_SECRET!));

    cookies().set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      domain:
        process.env.NODE_ENV == "production" ? ".vercel.app" : "localhost",
      path: "/",
    });

    return NextResponse.json(
      {
        token,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
