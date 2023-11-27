import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { decodeJwt } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    const token = cookies().get("auth-token")!;

    if (!token) {
      return NextResponse.json(
        { error: "Missing credentials" },
        { status: 404 },
      );
    }

    const decodedToken = decodeJwt<{ session_id: string; id: string }>(
      token.value,
    );
    const session_id = decodedToken?.session_id;
    const id = decodedToken?.id;

    if (!session_id && !id) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (session_id) {
      const user = await fetch(
        `https://api.themoviedb.org/3/account?session_id=${session_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        },
      ).then((res) => res.json());

      return NextResponse.json(user, {
        status: 200,
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
