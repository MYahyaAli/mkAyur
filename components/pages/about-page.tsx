"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Leaf } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useMounted } from "@/hooks/use-mounted";
import { useEffect, useState } from "react";
import aboutImage from "@/assets/images/treatment-6.jpg";
import profile from "@/assets/images/dp.jpg";

export default function AboutPage() {
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              {t("about.title")}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {t("about.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div
              className={`lg:col-span-3 space-y-6 transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">
                {t("about.story.title")}
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t("about.story.paragraph1")}
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t("about.story.paragraph2")}
                </p>
              </div>
            </div>
            <div
              className={`lg:col-span-2 transform transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={aboutImage || "/placeholder.svg"}
                  alt="Our Ayurvedic Medical Center building and facilities"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gradient-to-br from-muted/50 via-muted to-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center max-w-3xl mx-auto mb-16 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
              {t("about.philosophy.title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("about.philosophy.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: t("about.philosophy.holistic.title"),
                description: t("about.philosophy.holistic.description"),
                delay: "delay-500",
              },
              {
                icon: CheckCircle2,
                title: t("about.philosophy.authentic.title"),
                description: t("about.philosophy.authentic.description"),
                delay: "delay-700",
              },
              {
                icon: Users,
                title: t("about.philosophy.personalized.title"),
                description: t("about.philosophy.personalized.description"),
                delay: "delay-900",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-500 group transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } ${item.delay}`}
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-primary/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center max-w-3xl mx-auto mb-16 transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
              {t("about.team.title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("about.team.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 text-center p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-500 group transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } delay-${600 + index * 200}`}
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={profile || "/placeholder.svg"}
                    alt={t(`about.team.members.${index}.name`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-primary/80 transition-colors">
                  {t(`about.team.members.${index}.name`)}
                </h3>
                <p className="text-muted-foreground mb-4 font-medium">
                  {t(`about.team.members.${index}.role`)}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`about.team.members.${index}.bio`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="bg-gradient-to-br from-muted/50 via-muted to-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div
              className={`lg:col-span-2 order-2 lg:order-1 transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={aboutImage || "/placeholder.svg"}
                  alt="Our facility"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div
              className={`lg:col-span-3 space-y-6 order-1 lg:order-2 transform transition-all duration-1000 delay-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">
                {t("about.facility.title")}
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t("about.facility.paragraph1")}
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t("about.facility.paragraph2")}
                </p>
              </div>
              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                >
                  <Link href="/contact">
                    {t("about.facility.scheduleVisit")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
