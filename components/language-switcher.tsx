"use client";

import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const mounted = useMounted();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <div className="h-4 w-4 rounded-full bg-muted animate-pulse"></div>
        <span className="sr-only">Switch language</span>
      </Button>
    );
  }

  const languages = [
    { code: "en", name: t("language.en"), flag: "🇺🇸" },
    { code: "si", name: t("language.si"), flag: "🇱🇰" },
    { code: "ta", name: t("language.ta"), flag: "🇱🇰" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "h-9 px-3 gap-2 hover:bg-primary/10 transition-all duration-200",
          isOpen && "bg-primary/10"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline text-sm font-medium">
          {currentLanguage?.flag}
        </span>
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
        <span className="sr-only">Switch language</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-card border border-border/50 z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200">
          <div className="py-2" role="menu" aria-orientation="vertical">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={cn(
                  "w-full text-left px-4 py-3 text-sm hover:bg-muted/50 transition-all duration-200 flex items-center justify-between group",
                  language === lang.code &&
                    "bg-primary/5 text-primary font-medium"
                )}
                onClick={() => {
                  setLanguage(lang.code as "en" | "si" | "ta");
                  setIsOpen(false);
                }}
                role="menuitem"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{lang.flag}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    {lang.name}
                  </span>
                </div>
                {language === lang.code && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
