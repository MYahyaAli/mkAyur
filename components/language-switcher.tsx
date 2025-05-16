"use client";

import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
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
        <div className="h-4 w-4 rounded-full bg-muted"></div>
        <span className="sr-only">Switch language</span>
      </Button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4" />
        <span className="sr-only">Switch language</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-card border border-border z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              className={cn(
                "w-full text-left px-4 py-2 text-sm hover:bg-muted",
                language === "en" ? "font-bold text-primary" : "text-foreground"
              )}
              onClick={() => {
                setLanguage("en");
                setIsOpen(false);
              }}
              role="menuitem"
            >
              {t("language.en")}
            </button>
            <button
              className={cn(
                "w-full text-left px-4 py-2 text-sm hover:bg-muted",
                language === "si" ? "font-bold text-primary" : "text-foreground"
              )}
              onClick={() => {
                setLanguage("si");
                setIsOpen(false);
              }}
              role="menuitem"
            >
              {t("language.si")}
            </button>
            <button
              className={cn(
                "w-full text-left px-4 py-2 text-sm hover:bg-muted",
                language === "ta" ? "font-bold text-primary" : "text-foreground"
              )}
              onClick={() => {
                setLanguage("ta");
                setIsOpen(false);
              }}
              role="menuitem"
            >
              {t("language.ta")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
