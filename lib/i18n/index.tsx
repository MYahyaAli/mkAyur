"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import enTranslations from "./translations/en.json";
import siTranslations from "./translations/si.json";
import taTranslations from "./translations/ta.json";
import { useMounted } from "@/hooks/use-mounted";

type Language = "en" | "si" | "ta";

type TranslationsType = {
  [key: string]: any;
};

const translations: Record<Language, TranslationsType> = {
  en: enTranslations,
  si: siTranslations,
  ta: taTranslations,
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const mounted = useMounted();

  useEffect(() => {
    if (!mounted) return;

    try {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage && ["en", "si", "ta"].includes(savedLanguage)) {
        setLanguageState(savedLanguage);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, [mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (mounted) {
      try {
        localStorage.setItem("language", lang);
      } catch (error) {
        console.error("Error setting localStorage:", error);
      }
    }
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }

    return value !== undefined ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
