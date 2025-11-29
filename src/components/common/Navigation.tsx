/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// @/components/common/Navigation.tsx

"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import { useT } from "@/lib/translate";

export default function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const t = useT();
  const navItems = t("navigation.items");

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-white/70 dark:bg-black/40 border-b border-white/10 dark:border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT — LOGO + TITLE */}
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span>{t("navigation.brand")}</span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item: any) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition ${
                path === item.href
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

        {/* MOBILE — HAMBURGER */}
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

            {/* MOBILE LINKS */}
            {navItems.map((item: any) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium ${
                  path === item.href
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* MOBILE TOGGLES */}
            <div className="flex items-center gap-4 pt-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
