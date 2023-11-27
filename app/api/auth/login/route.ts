import dbConnect from "@/lib/dbConnect";
import UserSchema from "@/models/User";
import { verify } from "argon2";
import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    const user = await UserSchema.findOne({ email }).select("+password");

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isValue = await verify(user.password, password);

    if (!isValue) {
      return NextResponse.json(
        { error: "Password is incorrect" },
        { status: 400 },
      );
    }

    const token = await new SignJWT({ id: user._id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1d")
      .setIssuedAt()
      .sign(new TextEncoder().encode(process.env.JWT_SECRET!));

    return NextResponse.json(
      { token },
      {
        status: 200,
        headers: {
          "Set-Cookie": `auth-token=${token}; path=/; HttpOnly; SameSite=Strict;`,
        },
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
