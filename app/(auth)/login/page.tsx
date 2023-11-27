"use client";

import useLogin from "@/hooks/useLogin";
import useRequestToken from "@/hooks/useRequestToken";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const redirectURL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_APP_URL
    : "http://localhost:3000/login/tmdb";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, isSuccess } = useRequestToken();
  const router = useRouter();

  const { login, isPending } = useLogin(() => {
    toast.success("Logged in successfully");
    router.push("/");
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <Head>
        <title>MovieFriends | Login</title>
      </Head>
      <div className="p-4 items-center justify-center w-screen max-w-4xl mx-auto flex gap-8">
        <Image
          src="/login_banner.png"
          width={0}
          height={0}
          sizes="100vw"
          className="md:block md:w-3/5 h-auto aspect-square hidden rounded-2xl"
          alt="Logo"
        />
        <div className="flex flex-col gap-2 md:w-2/5 w-full max-w-lg">
          <div>
            <span className="text-gray-800 text-lg">Welcome.</span>
            <br />
            <Link href="/" className="text-4xl font-semibold">
              {" "}
              MovieFriends
            </Link>
          </div>
          <p className="text-gray-500">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className="flex flex-col gap-3">
            <label htmlFor="Email" className="text-gray-500">
              <input
                id="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-2 py-4 focus:outline-none border w-full rounded-lg text-gray-800 shadow-sm"
              />
            </label>

            <label htmlFor="password" className="text-gray-500">
              <input
                id="password"
                placeholder="Password"
                className="px-2 py-4 focus:outline-none border text-gray-800 w-full rounded-lg shadow-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </label>
          </div>
          <button
            className={`px-4 hover:bg-gray-700 transition py-3 bg-gray-900 text-white rounded-lg font-semibold
            ${isPending ? "opacity-50 cursor-not-allowed" : ""}
            `}
            onClick={() => {
              login({ email, password });
            }}
          >
            Log In
          </button>
          <div className="flex gap-2 text-gray-600 text-sm items-center">
            <div className="bg-gray-200 w-full h-px"></div>
            <div>OR</div>
            <div className="bg-gray-200 w-full h-px"></div>
          </div>
          <button
            className="px-4 py-3 text-gray-900 bg-gray-200 rounded-lg font-semibold"
            onClick={() => {
              if (isSuccess && token)
                router.push(
                  `https://www.themoviedb.org/authenticate/${token.request_token}?redirect_to=${redirectURL}/tmdb`,
                );
            }}
          >
            Log In with TMDB
          </button>
          <span className="text-gray-500 text-sm">
            Don&lsquo;t have an account?{" "}
            <Link href="/signup" className="text-blue-700 text-sm">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
