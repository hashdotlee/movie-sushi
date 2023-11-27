"use client";

import useProfile from "@/hooks/useProfile";
import { ArrowLeftOnRectangleIcon, Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import useWindowSize from "@/lib/useWindowSize";
import SlidePage from "../components/SlidePage";

export default function Sidebar() {
  const profile = useProfile();
  const [isOpen, setIsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [width] = useWindowSize();
  const isMobile = width < 1400;

  const handleResize = () => {
    if (isMobile && !collapsed) {
      setCollapsed(true);
    } else if (!isMobile && !collapsed) {
      setCollapsed(true);
    } else if (!isMobile && collapsed) {
      setCollapsed(false);
    } else if (isMobile && collapsed) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isMobile) {
      setCollapsed((prev) => (!prev ? true : prev));
    } else if (!isMobile) {
      setCollapsed((prev) => (prev ? false : prev));
    }
  }, [isMobile]);

  return (
    <>
      <div
        className={`rounded-md md:block hidden flex-shrink-0 flex-grow-0 ${
          !collapsed ? "w-sidebar" : "w-[88px]"
        } transition-all duration-100 bg-gray-100 dark:bg-zinc-900`}
      >
        <aside className={"flex-col w-full h-full flex"}>
          <div>
            <div className="flex px-8 py-6 gap-4 items-center">
              <button
                className="dark:text-zinc-200 shrink-0 w-6 h-6 truncate"
                onClick={() => handleResize()}
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
              <Link
                href="/"
                className={`uppercase whitespace-nowrap tracking-wide font-bold dark:text-zinc-50 leading-3
                ${!collapsed ? "opacity-100" : "opacity-0"}
              `}
              >
                MovieFriends
              </Link>
            </div>
            <Nav isOpen={!collapsed} />
          </div>
          <div className="mt-auto font-semibold text-gray-500">
            {profile && (
              <Link
                href="/logout"
                className="p-4  flex justify-center w-full items-center gap-3"
              >
                <ArrowLeftOnRectangleIcon className="w-6 h-6 shrink-0" />
                <span
                  className={`${
                    !collapsed ? "opacity-100" : "opacity-0 hidden"
                  } truncate`}
                >
                  Log out
                </span>
              </Link>
            )}
          </div>
        </aside>
      </div>
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
