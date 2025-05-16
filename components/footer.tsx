"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useMounted } from "@/hooks/use-mounted";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <footer className="w-full border-t border-border bg-muted py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 w-32 bg-muted-foreground/20 rounded"></div>
                <div className="space-y-2">
                  {[1, 2, 3].map((j) => (
                    <div
                      key={j}
                      className="h-4 w-full bg-muted-foreground/20 rounded"
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center">
            <div className="h-4 w-64 mx-auto bg-muted-foreground/20 rounded"></div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full border-t border-border bg-muted py-12">
      <div className="container mx-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="MK Kerala Ayurveda Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-lg font-semibold text-primary">
                MK Kerala Ayurveda
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:info@mkayurveda.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-primary mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-primary mb-4">
              {t("footer.treatments")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/ayurvedic"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("services.ayurvedic.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/spa"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("services.spa.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ayurvedic#arthritis"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("home.treatments.arthritis.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ayurvedic#back-pain"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("home.treatments.backPain.title")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-primary mb-4">
              {t("footer.contactUs")}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  123 Ayurveda Road, Colombo 05, Sri Lanka
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  +94 11 234 5678
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  info@mkayurveda.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MK Kerala Ayurveda. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
