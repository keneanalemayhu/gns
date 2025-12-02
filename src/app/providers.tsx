// @/app/providers.tsx

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";
import { Toaster as SonnerToaster } from "sonner";
import { LanguageProvider } from "@/components/context/LanguageContext";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="jireh-theme"
      themes={["light", "dark", "system"]}
      {...props}
    >
      <LanguageProvider>
        {children}

        <SonnerToaster
          position="bottom-right"
          expand={false}
          richColors
          closeButton
        />
      </LanguageProvider>
    </NextThemesProvider>
  );
}
