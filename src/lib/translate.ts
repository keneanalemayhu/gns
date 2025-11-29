/* eslint-disable @typescript-eslint/no-explicit-any */
// @/lib/translate.ts

'use client';
import { useLanguage } from "@/components/context/LanguageContext";
import { translations } from "@/translations";

export function useT() {
  const { language } = useLanguage();
  const dict = translations[language];

  function t(path: string): any {
    return path.split(".").reduce((obj, key) => (obj as any)?.[key], dict as any);
  }

  return t;
}
