"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Clock, MapPin, ArrowRight, Quote } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useMounted } from "@/hooks/use-mounted";
import heroImage from "../../public/images/treatment-3.jpg";
import arthritisImage from "../../public/images/treatment-1.jpg";
import backpainImage from "../../public/images/treatment-5.jpg";
import spaImage from "../../public/images/treatment-7.jpg";
import aboutImage from "../../public/images/treatment-6.jpg";
import contactImage from "../../public/images/treatment-4.jpg";

export default function HomePage() {
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
    <main>
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-24 mx-5">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary">
                {t("home.hero.title")}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/services">
                    {t("home.hero.exploreTreatments")}
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">{t("home.hero.contactUs")}</Link>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src={heroImage || "/placeholder.svg"}
                alt="Authentic Ayurvedic Shirodhara treatment at MK Kerala Ayurveda"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-16 mx-5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              {t("home.treatments.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("home.treatments.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="h-full transition-all duration-200 hover:shadow-md">
              <div className="relative h-48 w-full">
                <Image
                  src={arthritisImage || "/placeholder.svg"}
                  alt="Arthritis Treatment"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{t("home.treatments.arthritis.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t("home.treatments.arthritis.description")}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary group"
                  asChild
                >
                  <Link
                    href="/services/ayurvedic#arthritis"
                    className="flex items-center gap-2"
                  >
                    {t("home.treatments.viewAll")}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="h-full transition-all duration-200 hover:shadow-md">
              <div className="relative h-48 w-full">
                <Image
                  src={backpainImage || "/placeholder.svg"}
                  alt="Back Pain Relief"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{t("home.treatments.backPain.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t("home.treatments.backPain.description")}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary group"
                  asChild
                >
                  <Link
                    href="/services/ayurvedic#back-pain"
                    className="flex items-center gap-2"
                  >
                    {t("home.treatments.viewAll")}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="h-full transition-all duration-200 hover:shadow-md">
              <div className="relative h-48 w-full">
                <Image
                  src={spaImage || "/placeholder.svg"}
                  alt="Luxury Spa Therapy"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle>{t("home.treatments.spa.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t("home.treatments.spa.description")}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary group"
                  asChild
                >
                  <Link
                    href="/services/spa"
                    className="flex items-center gap-2"
                  >
                    {t("home.treatments.viewAll")}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/services" className="flex items-center gap-2">
                {t("home.treatments.viewAll")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted py-16 mx-5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                {t("home.about.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("home.about.paragraph1")}
              </p>
              <p className="text-muted-foreground">
                {t("home.about.paragraph2")}
              </p>
              <div>
                <Button asChild>
                  <Link href="/about">{t("home.about.learnMore")}</Link>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src={aboutImage || "/placeholder.svg"}
                alt="Traditional Ayurvedic herbs and treatments used at our center"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 mx-5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              {t("home.testimonials.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("home.testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardContent className="pt-6 flex-1">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                <p className="text-muted-foreground italic">
                  "After years of suffering from chronic back pain, the
                  Ayurvedic treatments here have given me a new lease on life."
                </p>
              </CardContent>
              <CardFooter className="border-t pt-4 flex flex-col items-start">
                <p className="font-semibold">Kumara Perera</p>
                <p className="text-sm text-muted-foreground">Colombo</p>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardContent className="pt-6 flex-1">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                <p className="text-muted-foreground italic">
                  "The arthritis treatment program has significantly improved my
                  mobility. I can now enjoy activities I had given up on."
                </p>
              </CardContent>
              <CardFooter className="border-t pt-4 flex flex-col items-start">
                <p className="font-semibold">Priya Mendis</p>
                <p className="text-sm text-muted-foreground">Kandy</p>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardContent className="pt-6 flex-1">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                <p className="text-muted-foreground italic">
                  "Not only did the treatments help with my skin condition, but
                  the overall experience was deeply relaxing and rejuvenating."
                </p>
              </CardContent>
              <CardFooter className="border-t pt-4 flex flex-col items-start">
                <p className="font-semibold">Nimal Fernando</p>
                <p className="text-sm text-muted-foreground">Galle</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-muted py-16 mx-5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                {t("home.contact.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("home.contact.subtitle")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      {t("home.contact.contactInfo")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">+94 11 234 5678</p>
                    <p className="text-sm">info@mkayurveda.com</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      {t("home.contact.hours")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Monday - Saturday: 8am - 6pm</p>
                    <p className="text-sm">Sunday: 9am - 1pm</p>
                  </CardContent>
                </Card>

                <Card className="sm:col-span-2">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {t("home.contact.location")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">123 Ayurveda Road, Colombo 05</p>
                    <p className="text-sm">Sri Lanka</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Button asChild>
                  <Link href="/contact">{t("home.contact.contactUs")}</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src={contactImage || "/placeholder.svg"}
                alt="Shirodhara treatment at MK Kerala Ayurveda"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
