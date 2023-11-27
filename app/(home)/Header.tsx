"use client";

import useProfile from "@/api/useProfile";
import SlidePage from "@/app/components/SlidePage";
import {
  Bars3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const profile = useProfile();
  const router = useRouter();
  return (
    <>
      <header className="px-4 left-0 backdrop-blur-2xl dark:bg-zinc-900/80 bg-transparent absolute z-50 w-full top-0 h-header items-center flex gap-3 justify-between">
        <div className="flex items-center gap-2">
          <Bars3Icon
            className="w-6 h-6 md:hidden dark:text-zinc-200 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <span
            role="button"
            onClick={() => router.back()}
            className="p-1 bg-gray-200 border rounded-full dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-400 dark:border-zinc-700 hidden md:block"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </span>
          <span
            role="button"
            onClick={() => router.forward()}
            className="p-1 bg-gray-200 border rounded-full dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-400 dark:border-zinc-700 hidden md:block"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </span>
        </div>
        <SearchBar />

        <div className="flex py-1 px-4 bg-gray-200 dark:text-zinc-200 dark:bg-transparent rounded-2xl gap-4 items-center">
          {!profile ? (
            <>
              <Link
                href="https://www.themoviedb.org/signup"
                className=" font-semibold"
              >
                Sign up
              </Link>
              <Link
                href="/login"
                className="bg-zinc-900 text-neutral-300 px-4 py-2 rounded-lg font-semibold"
              >
                Log in
              </Link>
            </>
          ) : (
            <>
              <p className="hidden lg:block">
                Hi,{" "}
                <span className="font-semibold text-gray-800 dark:text-zinc-200">
                  {profile?.username}
                </span>{" "}
              </p>
              <Image
                src="/default_avatar.svg"
                width={40}
                height={40}
                alt="avatar"
              />
            </>
          )}
        </div>
      </header>
      <SlidePage isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex items-center gap-2 p-8">
          <Link
            href="/"
            className="uppercase dark:text-zinc-200 font-bold leading-3"
          >
            Movie Friends
          </Link>
        </div>
        <div className="mt-3">
          <Nav isOpen />
        </div>
      </SlidePage>
    </>
  );
}
