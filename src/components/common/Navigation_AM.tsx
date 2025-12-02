/* eslint-disable @next/next/no-img-element */
// @/components/common/Navigation_AM.tsx

"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { LanguageToggle } from "@/components/common/LanguageToggle";

export default function Navigation_AM() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "ሶላር", href: "/am/solar" },
    { name: "ግንባታ", href: "/am/construction" },
    { name: "ሕክምና", href: "/am/medical" },
    { name: "ኢንዱስትሪ", href: "/am/industrial" },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-white/70 dark:bg-black/40 border-b border-white/10 dark:border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/am" className="flex items-center gap-2 text-xl font-semibold">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span>ጂ.ኤን.ኤስ ትሬዲንግ</span>
        </Link>

        {/* ALWAYS-VISIBLE TOGGLES (LEFT OF HAMBURGER) */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${path === item.href
                  ? "text-blue-600 dark:text-blue-400"
                  : "hover:text-blue-600 dark:hover:text-blue-400"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP TOGGLES */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-6 h-0.5 bg-black dark:bg-white" />
          <span className="w-6 h-0.5 bg-black dark:bg-white" />
          <span className="w-6 h-0.5 bg-black dark:bg-white" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-5 pt-2 bg-white/90 dark:bg-black/80 border-t border-white/10 dark:border-white/20">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium ${path === item.href
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-800 dark:text-gray-200"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
