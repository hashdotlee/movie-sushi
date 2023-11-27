import dbConnect from "@/lib/dbConnect";
import { SignJWT } from "jose";
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

    console.log(session);

    const token = await new SignJWT({ session_id: session.session_id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1d")
      .setIssuedAt()
      .sign(new TextEncoder().encode(process.env.JWT_SECRET!));

    return NextResponse.json(
      {
        token,
      },
      {
        status: 200,
        headers: {
          "Set-Cookie": `auth-token=${token}; path=/; HttpOnly; SameSite=Strict;`,
        },
      },
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
