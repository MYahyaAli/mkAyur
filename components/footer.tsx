"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useMounted } from "@/hooks/use-mounted";
import logoImg from "@/assets/images/logo.jpg";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <footer className="w-full border-t border-white/20 bg-primary py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 w-32 bg-white/20 rounded animate-pulse"></div>
                <div className="space-y-2">
                  {[1, 2, 3].map((j) => (
                    <div
                      key={j}
                      className="h-4 w-full bg-white/20 rounded animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <div className="h-4 w-64 mx-auto bg-white/20 rounded animate-pulse"></div>
          </div>
        </div>
      </footer>
    );
  }

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/mk.ayurveda.2025",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ayurvedamk?igsh=MWhoOW45OGppajgwZA%3D%3D",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:home@mkayur.lk", label: "Email" },
  ];

  const quickLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const treatmentLinks = [
    { name: t("services.ayurvedic.title"), href: "/services/ayurvedic" },
    { name: t("services.spa.title"), href: "/services/spa" },
    {
      name: t("home.treatments.arthritis.title"),
      href: "/services/ayurvedic#arthritis",
    },
    {
      name: t("home.treatments.backPain.title"),
      href: "/services/ayurvedic#back-pain",
    },
  ];

  const phoneNumbers = [
    { number: "(011) 253 2891", type: "Main Line" },
    { number: "(011) 253 0238", type: "Reception" },
    { number: "(075) 669 1733", type: "Whatsapp" },
    { number: "(075) 376 9556", type: "Mobile" },
  ];

  return (
    <footer className="w-full border-t border-white/20 bg-primary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative overflow-hidden rounded-full">
                <Image
                  src={logoImg || "/placeholder.svg"}
                  alt="MK Kerala Ayurveda Logo"
                  width={50}
                  height={50}
                  className="rounded-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-lg font-semibold text-white group-hover:text-white/90 transition-colors font-cormorant">
                MK Kerala Ayurveda
              </span>
            </Link>
            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-white hover:text-primary transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-white/60 rounded-full group-hover:bg-white transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              {t("footer.treatments")}
            </h3>
            <ul className="space-y-3">
              {treatmentLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-white/60 rounded-full group-hover:bg-white transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              {t("footer.contactUs")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                  <MapPin className="h-4 w-4 text-white flex-shrink-0" />
                </div>
                <span className="text-sm text-white/80 leading-relaxed">
                  90/10, Meetotamulla Road, Kollonnawa
                </span>
              </li>

              {/* Phone Numbers Section */}
              <li className="flex items-start gap-3 group">
                <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Phone className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
                </div>
                <div className="space-y-2">
                  {phoneNumbers.map((phone, index) => (
                    <div key={index} className="flex flex-col">
                      <a
                        href={`tel:${phone.number.replace(/[^\d+]/g, "")}`}
                        className="text-sm text-white/80 hover:text-white transition-colors duration-200"
                      >
                        {phone.number}
                      </a>
                      <span className="text-xs text-white/60">
                        {phone.type}
                      </span>
                    </div>
                  ))}
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="p-1.5 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Mail className="h-4 w-4 text-white flex-shrink-0" />
                </div>
                <a
                  href="mailto:home@mkayur.lk"
                  className="text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  home@mkayur.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/80">
            © {currentYear} MK Kerala Ayurveda. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
