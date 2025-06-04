"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useMounted } from "@/hooks/use-mounted";

export default function AyurvedicTreatmentsPage() {
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

  const treatments = [
    {
      id: "arthritis",
      title: "Arthritis Treatment",
      description:
        "Traditional therapies to reduce inflammation and improve joint mobility.",
      details:
        "Our specialized arthritis treatment combines herbal oils, therapeutic massages, and internal medications to address joint inflammation, stiffness, and pain. The treatment aims to improve mobility and reduce discomfort through natural methods.",
      image: "/images/treatment-1.png",
    },
    {
      id: "back-pain",
      title: "Back Pain Relief",
      description:
        "Specialized massages and herbal applications to alleviate chronic back pain.",
      details:
        "Our back pain treatment program includes targeted massages, herbal poultices, and specialized therapies to address muscle tension, spinal alignment issues, and nerve compression. The treatment provides both immediate relief and long-term healing.",
      image: "/images/treatment-5.png",
    },
    {
      id: "skin-diseases",
      title: "Skin Disease Treatment",
      description:
        "Effective therapies for psoriasis, eczema, and other skin conditions.",
      details:
        "Our holistic approach to skin disorders combines internal purification, external applications, and dietary guidance to address conditions like psoriasis, eczema, and other dermatological issues. We focus on treating the root causes rather than just the symptoms.",
      image: "/images/treatment-2.png",
    },
    {
      id: "shirodhara",
      title: "Shirodhara Treatment",
      description:
        "Relaxing therapy where warm oil is poured over the forehead to calm the mind.",
      details:
        "Shirodhara is a deeply relaxing treatment where warm herbal oil is continuously poured over the forehead in a rhythmic pattern. This therapy calms the mind, improves mental clarity, reduces anxiety, and helps with insomnia and stress-related conditions.",
      image: "/images/treatment-3.png",
    },
    {
      id: "respiratory",
      title: "Respiratory Conditions",
      description:
        "Treatments for asthma, sinusitis, and other breathing disorders.",
      details:
        "Our respiratory treatment protocols include herbal steam inhalation, specialized chest massages, internal medications, and breathing exercises to address conditions like asthma, sinusitis, and chronic respiratory issues.",
      image: "/images/treatment-4.png",
    },
    {
      id: "diabetes",
      title: "Diabetes Management",
      description:
        "Holistic approach to managing blood sugar levels and preventing complications.",
      details:
        "Our diabetes management program combines herbal medications, dietary guidance, lifestyle modifications, and therapeutic treatments to help regulate blood sugar levels naturally and prevent diabetes-related complications.",
      image: "/images/treatment-7.png",
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
              {t("services.ayurvedic.title")}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {t("services.ayurvedic.description")}
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
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                id={treatment.id}
                ref={(el) => {
                  scrollRefs.current[treatment.id] = el;
                }}
                className="bg-card rounded-lg overflow-hidden shadow-sm border scroll-mt-20"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-[250px]">
                    <Image
                      src={treatment.image || "/placeholder.svg"}
                      alt={treatment.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Leaf className="h-8 w-8 text-primary mb-4" />
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      {treatment.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {treatment.description}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {treatment.details}
                    </p>
                    <Button asChild>
                      <Link href="/contact">{t("services.inquireButton")}</Link>
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
