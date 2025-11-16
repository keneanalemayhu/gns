// @/components/common/Navigation.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { LanguageToggle } from "@/components/common/LanguageToggle";

const navLinks = [
  { name: "Solar", href: "/solar" },
  { name: "Construction", href: "#" },
  { name: "Medical", href: "#" },
  { name: "Industrial Chemicals", href: "#" },
];

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-white/70 dark:bg-black/40 border-b border-white/10 dark:border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <Link href="/" className="text-xl font-semibold">
          GNS Trading
        </Link>

        {/* CENTER — NAV LINKS */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
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

        {/* RIGHT — THEME + LANGUAGE TOGGLES */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
