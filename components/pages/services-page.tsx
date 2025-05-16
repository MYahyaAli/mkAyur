"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Leaf, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useMounted } from "@/hooks/use-mounted";
import ayurTreatment from "../../public/images/treatment-4.jpg";
import spaTreatment from "../../public/images/spa-treatment.jpg";

export default function ServicesPage() {
  const { t } = useLanguage();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div className="animate-pulse">
        <div className="bg-muted py-16">
          <div className="container">
            <div className="h-64 bg-muted-foreground/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-1 mx-5">
      <section className="bg-muted w-full py-16">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t("services.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("services.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-sm border flex flex-col h-full">
              <div className="relative h-[250px] w-full">
                <Image
                  src={ayurTreatment || "/placeholder.svg"}
                  alt="Ayurvedic treatments"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-6">
                  <Leaf className="h-10 w-10 text-primary mb-4" />
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {t("services.ayurvedic.title")}
                  </h2>
                  <p className="text-muted-foreground">
                    {t("services.ayurvedic.description")}
                  </p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6 flex-1">
                  {t("services.ayurvedic.treatments").map(
                    (treatment: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-muted-foreground">
                          {treatment}
                        </span>
                      </li>
                    )
                  )}
                </ul>
                <div className="mt-auto">
                  <Button className="w-full" asChild>
                    <Link
                      href="/services/ayurvedic"
                      className="flex items-center justify-center gap-2"
                    >
                      {t("services.ayurvedic.exploreButton")}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden shadow-sm border flex flex-col h-full">
              <div className="relative h-[250px] w-full">
                <Image
                  src={spaTreatment || "/placeholder.svg"}
                  alt="Luxury spa treatments"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-6">
                  <Sparkles className="h-10 w-10 text-primary mb-4" />
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {t("services.spa.title")}
                  </h2>
                  <p className="text-muted-foreground">
                    {t("services.spa.description")}
                  </p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6 flex-1">
                  {t("services.spa.treatments").map(
                    (treatment: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-muted-foreground">
                          {treatment}
                        </span>
                      </li>
                    )
                  )}
                </ul>
                <div className="mt-auto">
                  <Button className="w-full" asChild>
                    <Link
                      href="/services/spa"
                      className="flex items-center justify-center gap-2"
                    >
                      {t("services.spa.exploreButton")}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
