"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLanguage } from "@/lib/i18n";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";
import logoImg from "@/assets/images/logo.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();
  const mounted = useMounted();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-muted animate-pulse"></div>
            <div className="h-6 w-40 bg-muted rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-4 w-16 bg-muted rounded animate-pulse"
                ></div>
              ))}
              <div className="h-10 w-32 bg-muted rounded animate-pulse"></div>
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 bg-muted rounded-full animate-pulse"></div>
                <div className="h-8 w-8 bg-muted rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <div className="h-8 w-8 bg-muted rounded-full animate-pulse"></div>
              <div className="h-8 w-8 bg-muted rounded-full animate-pulse"></div>
              <div className="h-8 w-8 bg-muted rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        isScrolled
          ? "bg-background/95 shadow-sm border-border/60"
          : "bg-background/80 border-border/40"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-full">
            <Image
              src={logoImg}
              alt="MK Kerala Ayurveda Logo"
              width={40}
              height={40}
              className="rounded-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span className="text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors duration-200">
            MK Kerala Ayurveda
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 hover:text-primary relative group",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200",
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </div>
          <Button
            asChild
            className="hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg"
          >
            <Link href="/contact">{t("nav.bookConsultation")}</Link>
          </Button>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open Menu"
                className="hover:bg-primary/10 transition-colors duration-200"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center justify-between mb-8">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image
                    src="/images/logo.jpg"
                    alt="MK Kerala Ayurveda Logo"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-lg font-semibold text-primary">
                    MK Kerala Ayurveda
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:bg-primary/10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col gap-6">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-all duration-200 hover:text-primary hover:translate-x-2 flex items-center gap-3 py-2",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-200",
                        pathname === item.href
                          ? "bg-primary"
                          : "bg-muted-foreground/30"
                      )}
                    />
                    {item.name}
                  </Link>
                ))}
                <div className="mt-6 pt-6 border-t border-border">
                  <Button
                    asChild
                    className="w-full hover:scale-[1.02] transition-transform duration-200"
                  >
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      {t("nav.bookConsultation")}
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
