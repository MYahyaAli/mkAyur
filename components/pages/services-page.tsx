"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Leaf, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useMounted } from "@/hooks/use-mounted";
import { useState, useEffect } from "react";
import ayurTreatment from "../../public/images/treatment-4.jpg";
import spaTreatment from "../../public/images/treatment-7.jpg";

// Define types for the treatment data
type TreatmentItem = string | { name: string; description?: string };

export default function ServicesPage() {
  const { t } = useLanguage();
  const mounted = useMounted();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (mounted) {
      setIsVisible(true);
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="animate-pulse">
        <div className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="h-64 bg-muted-foreground/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  // Helper function to safely get treatments as an array
  const getTreatments = (key: string): TreatmentItem[] => {
    const treatments = t(key);
    // Check if treatments is an array
    if (Array.isArray(treatments)) {
      return treatments;
    }
    // If it's not an array, return an empty array to avoid errors
    console.warn(`Expected array for ${key}, got:`, treatments);
    return [];
  };

  // Render a treatment item with proper type checking
  const renderTreatmentItem = (treatment: TreatmentItem, index: number) => {
    // If treatment is an object with name property
    if (
      typeof treatment === "object" &&
      treatment !== null &&
      "name" in treatment
    ) {
      return (
        <li
          key={index}
          className="flex items-start gap-3 group transition-all duration-300 hover:translate-x-1"
        >
          <span className="text-primary text-lg mt-0.5 group-hover:scale-125 transition-transform duration-300">
            •
          </span>
          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {treatment.name}
          </span>
        </li>
      );
    }

    // If treatment is a string
    return (
      <li
        key={index}
        className="flex items-start gap-3 group transition-all duration-300 hover:translate-x-1"
      >
        <span className="text-primary text-lg mt-0.5 group-hover:scale-125 transition-transform duration-300">
          •
        </span>
        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {treatment}
        </span>
      </li>
    );
  };

  // Get treatments arrays safely
  const ayurvedicTreatments = getTreatments("services.ayurvedic.treatments");
  const spaTreatments = getTreatments("services.spa.treatments");

  const services = [
    {
      image: ayurTreatment,
      icon: Leaf,
      title: t("services.ayurvedic.title"),
      description: t("services.ayurvedic.description"),
      treatments: ayurvedicTreatments,
      buttonText: t("services.ayurvedic.exploreButton"),
      href: "/services/ayurvedic",
      alt: "Ayurvedic treatments",
      delay: "delay-300",
    },
    {
      image: spaTreatment,
      icon: Sparkles,
      title: t("services.spa.title"),
      description: t("services.spa.description"),
      treatments: spaTreatments,
      buttonText: t("services.spa.exploreButton"),
      href: "/services/spa",
      alt: "Luxury spa treatments",
      delay: "delay-500",
    },
  ];

  return (
    <main className="flex-1 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted via-muted to-muted/80 w-full py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex flex-col items-center justify-center text-center max-w-4xl mx-auto transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              {t("services.title")}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {t("services.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } ${service.delay}`}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-500 flex flex-col h-full group">
                  <div className="relative h-[300px] w-full overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-lg inline-flex items-center gap-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <service.icon className="h-5 w-5" />
                        <span className="font-medium">{service.title}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-8">
                      <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 group-hover:text-primary/80 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 flex-1">
                      {service.treatments.map((treatment, i) =>
                        renderTreatmentItem(treatment, i)
                      )}
                    </ul>
                    <div className="mt-auto">
                      <Button
                        className="w-full h-12 hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
                        asChild
                      >
                        <Link
                          href={service.href}
                          className="flex items-center justify-center gap-2"
                        >
                          {service.buttonText}
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-muted/50 via-muted to-muted/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 leading-tight">
              {t("services.cta.title") || "Ready to Experience Our Services?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("services.cta.description") ||
                "Book a consultation with our experts to discuss your wellness needs and create a personalized treatment plan."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="/contact">
                  {t("services.cta.bookButton") || "Book a Consultation"}
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link href="/contact">
                  {t("services.cta.contactButton") || "Contact Us"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
