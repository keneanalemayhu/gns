// @/components/context/LanguageContext.tsx

"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

export type Language = "en" | "am";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("jireh-language");

    if (stored === "en" || stored === "am") {
      queueMicrotask(() => {
        setLanguage(stored);
        document.documentElement.lang = stored;
      });
    }
  }, []);

  const updateLanguage = useCallback((newLanguage: Language) => {
    localStorage.setItem("jireh-language", newLanguage);
    document.documentElement.lang = newLanguage;
    setLanguage(newLanguage);
  }, []);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: updateLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
