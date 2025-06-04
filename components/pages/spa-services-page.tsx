"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useMounted } from "@/hooks/use-mounted";

export default function SpaServicesPage() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const scrollToId = searchParams.get("scrollTo");
  const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const mounted = useMounted();

  useEffect(() => {
    if (scrollToId && scrollRefs.current[scrollToId]) {
      scrollRefs.current[scrollToId]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [scrollToId, mounted]);

  const spaServices = [
    {
      id: "herbal-massage",
      title: "Herbal Oil Massages",
      description:
        "Relaxing massages with medicinal herbal oils to rejuvenate body and mind.",
      details:
        "Our signature herbal oil massages use specially prepared medicinal oils infused with therapeutic herbs. These massages help relieve muscle tension, improve circulation, and promote deep relaxation while nourishing the skin and tissues.",
      image: "/images/treatment-5.png",
    },
    {
      id: "shirodhara",
      title: "Shirodhara Treatment",
      description:
        "Therapeutic oil flow treatment for deep relaxation and mental clarity.",
      details:
        "Shirodhara is a deeply relaxing treatment where warm herbal oil is continuously poured over the forehead in a rhythmic pattern. This therapy calms the mind, improves mental clarity, reduces anxiety, and helps with insomnia and stress-related conditions.",
      image: "/images/treatment-3.png",
    },
    {
      id: "detox",
      title: "Detoxification Programs",
      description:
        "Comprehensive programs to cleanse the body and restore natural balance.",
      details:
        "Our detoxification programs include a series of specialized treatments, herbal preparations, and dietary guidance designed to eliminate toxins, improve organ function, and restore the body's natural balance. Programs can be customized based on individual needs.",
      image: "/images/treatment-6.png",
    },
    {
      id: "stress-relief",
      title: "Stress Relief Therapies",
      description:
        "Targeted treatments to alleviate stress and promote mental clarity.",
      details:
        "Our stress relief therapies combine relaxing massages, aromatherapy, sound healing, and meditation techniques to calm the nervous system, release tension, and promote mental clarity. These treatments provide both immediate relief and long-term resilience to stress.",
      image: "/images/treatment-7.png",
    },
    {
      id: "beauty",
      title: "Beauty Treatments",
      description:
        "Natural facial and body treatments for radiant, healthy skin.",
      details:
        "Our beauty treatments use natural herbs, oils, and traditional formulations to enhance skin health and appearance. From rejuvenating facials to body polishes, these treatments nourish the skin from within for a natural, radiant glow.",
      image: "/images/treatment-2.png",
    },
    {
      id: "couples",
      title: "Couples Spa Packages",
      description:
        "Shared wellness experiences for couples to relax and reconnect.",
      details:
        "Our couples spa packages offer a shared wellness experience in a private, luxurious setting. These packages include synchronized massages, aromatherapy, and relaxation time, creating the perfect opportunity to unwind together and strengthen your connection.",
      image: "/images/treatment-1.png",
    },
  ];

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
    <main className="flex-1">
      <section className="bg-muted w-full py-16">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t("services.spa.title")}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {t("services.spa.description")}
            </p>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              asChild
            >
              <Link href="/services">
                <ArrowLeft className="h-4 w-4" />
                {t("services.backToServices")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="space-y-8">
            {spaServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                ref={(el) => {
                  scrollRefs.current[service.id] = el;
                }}
                className="bg-card rounded-lg overflow-hidden shadow-sm border scroll-mt-20"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-[250px]">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Sparkles className="h-8 w-8 text-primary mb-4" />
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {service.details}
                    </p>
                    <Button asChild>
                      <Link href="/contact">{t("services.bookButton")}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
