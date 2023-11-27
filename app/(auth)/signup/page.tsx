"use client";

import useSignup from "@/api/useSignup";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useSignup(() => router.push("/login"));

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 items-center justify-center w-screen md:max-w-4xl mx-auto flex gap-8">
        <Image
          src="/login_banner.png"
          width={0}
          height={0}
          sizes="100vw"
          className="md:block w-3/5 h-auto aspect-square hidden rounded-2xl"
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
            <label htmlFor="username" className="text-gray-500">
              <input
                id="username"
                placeholder="Username"
                className="px-2 border py-4 focus:outline-none w-full rounded-lg text-gray-800 shadow-sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>

            <label htmlFor="Email" className="text-gray-500">
              <input
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="px-2 py-4 focus:outline-none border w-full rounded-lg text-gray-800 shadow-sm"
              />
            </label>

            <label htmlFor="password" className="text-gray-500">
              <input
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-2 py-4 focus:outline-none border text-gray-800 w-full rounded-lg shadow-sm"
                type="password"
              />
            </label>
          </div>
          <button
            className="px-4 py-3 bg-gray-900 text-white rounded-lg font-semibold"
            onClick={() => {
              signup({ username, email, password });
            }}
          >
            Sign Up
          </button>
          <span className="text-gray-500 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-700 text-sm">
              Log in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
