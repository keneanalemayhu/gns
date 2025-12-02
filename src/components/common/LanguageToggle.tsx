// @/components/common/LanguageToggle.tsx

"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLanguage } from "@/components/context/LanguageContext";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  function toggleLanguage() {
    const newLang = language === "am" ? "en" : "am";
    setLanguage(newLang);

    document.cookie = `gns-lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;

    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLang;

    router.push("/" + segments.join("/"));
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-10 w-10 font-semibold text-sm"
      onClick={toggleLanguage}
      title="Switch Language"
    >
      {language === "am" ? "EN" : "አማ"}
    </Button>
  );
}
