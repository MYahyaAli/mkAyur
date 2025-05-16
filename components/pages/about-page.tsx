"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Leaf } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useMounted } from "@/hooks/use-mounted";
import aboutImage from "../../public/images/treatment-6.jpg";

export default function AboutPage() {
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
    <main className="flex-1">
      <section className="bg-muted w-full py-16">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t("about.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("about.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 mx-5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                {t("about.story.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("about.story.paragraph1")}
              </p>
              <p className="text-muted-foreground">
                {t("about.story.paragraph2")}
              </p>
            </div>
            <div className="md:col-span-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={aboutImage || "/placeholder.svg"}
                alt="Our Ayurvedic Medical Center building and facilities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 mx-5">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              {t("about.philosophy.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("about.philosophy.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <Leaf className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">
                {t("about.philosophy.holistic.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("about.philosophy.holistic.description")}
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">
                {t("about.philosophy.authentic.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("about.philosophy.authentic.description")}
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-3">
                {t("about.philosophy.personalized.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("about.philosophy.personalized.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 mx-5">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              {t("about.team.title")}
            </h2>
            <p className="text-muted-foreground">{t("about.team.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-sm border text-center p-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Dr. Rajitha Perera"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("about.team.members.0.name")}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("about.team.members.0.role")}
              </p>
              <p className="text-muted-foreground">
                {t("about.team.members.0.bio")}
              </p>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm border text-center p-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Dr. Amali Silva"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("about.team.members.1.name")}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("about.team.members.1.role")}
              </p>
              <p className="text-muted-foreground">
                {t("about.team.members.1.bio")}
              </p>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm border text-center p-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Dr. Nimal Jayawardena"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("about.team.members.2.name")}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("about.team.members.2.role")}
              </p>
              <p className="text-muted-foreground">
                {t("about.team.members.2.bio")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 mx-5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Our facility"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-3 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                {t("about.facility.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("about.facility.paragraph1")}
              </p>
              <p className="text-muted-foreground">
                {t("about.facility.paragraph2")}
              </p>
              <div className="mt-6">
                <Button asChild>
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
