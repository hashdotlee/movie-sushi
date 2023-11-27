"use client";

import {
  FireIcon as FireOutline,
  ForwardIcon as ForwardOutline,
  HomeIcon as HomeOutline,
} from "@heroicons/react/24/outline";

import {
  FireIcon as FireSolid,
  ForwardIcon as ForwardSolid,
  HomeIcon as HomeSolid,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ isOpen }: { isOpen?: boolean }) {
  const menu = [
    {
      name: "Home",
      icon: HomeOutline,
      activeIcon: HomeSolid,
      href: "/",
    },
    {
      name: "Popular",
      icon: FireOutline,
      activeIcon: FireSolid,
      href: "/popular",
    },
    {
      name: "Upcoming",
      icon: ForwardOutline,
      activeIcon: ForwardSolid,
      href: "/upcoming",
    },
  ];
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname.endsWith(href);
  };

  return (
    <nav>
      <ul className="flex flex-col px-4 gap-2">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`flex p-4 transition-all rounded-2xl font-semibold text-base border-white/0 items-center gap-3
              ${
                isActive(item.href)
                  ? "text-zinc-900 bg-zinc-900/10 dark:text-zinc-50 dark:bg-zinc-50/20"
                  : "text-neutral-800 dark:text-neutral-100 hover:bg-zinc-900/10 dark:hover:bg-zinc-50/20"
              }
              `}
            >
              {isActive(item.href) ? (
                <item.activeIcon className="w-6 h-6 shrink-0" />
              ) : (
                <item.icon className="w-6 h-6 shrink-0" />
              )}
              <span className={`${isOpen ? "opacity-100" : "opacity-0"}`}>
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
