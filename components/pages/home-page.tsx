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
import { Phone, Clock, MapPin, ArrowRight, Quote, Star } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useMounted } from "@/hooks/use-mounted";
import { useEffect, useState } from "react";
import heroImage from "@/assets/images/treatment-3.jpg";
import arthritisImage from "@/assets/images/treatment-1.jpg";
import backpainImage from "@/assets/images/treatment-5.jpg";
import spaImage from "@/assets/images/treatment-7.jpg";
import aboutImage from "@/assets/images/treatment-6.jpg";
import contactImage from "@/assets/images/treatment-4.jpg";

export default function HomePage() {
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

  const treatments = [
    {
      image: arthritisImage,
      title: t("home.treatments.arthritis.title"),
      description: t("home.treatments.arthritis.description"),
      href: "/services/ayurvedic#arthritis",
      alt: "Arthritis Treatment",
    },
    {
      image: backpainImage,
      title: t("home.treatments.backPain.title"),
      description: t("home.treatments.backPain.description"),
      href: "/services/ayurvedic#back-pain",
      alt: "Back Pain Relief",
    },
    {
      image: spaImage,
      title: t("home.treatments.spa.title"),
      description: t("home.treatments.spa.description"),
      href: "/services/spa",
      alt: "Luxury Spa Therapy",
    },
  ];

  const testimonials = [
    {
      quote:
        "After years of suffering from chronic back pain, the Ayurvedic treatments here have given me a new lease on life.",
      name: "Kumara Perera",
      location: "Colombo",
      rating: 5,
    },
    {
      quote:
        "The arthritis treatment program has significantly improved my mobility. I can now enjoy activities I had given up on.",
      name: "Priya Mendis",
      location: "Kandy",
      rating: 5,
    },
    {
      quote:
        "Not only did the treatments help with my skin condition, but the overall experience was deeply relaxing and rejuvenating.",
      name: "Nimal Fernando",
      location: "Galle",
      rating: 5,
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-muted via-muted to-muted/80 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div
              className={`w-full lg:w-1/2 space-y-8 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                  {t("home.hero.title")}
                </h1>
                <p className="text-lg sm:text-sm text-muted-foreground leading-relaxed max-w-lg">
                  {t("home.hero.subtitle")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                >
                  <Link href="/services">
                    {t("home.hero.exploreTreatments")}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="hover:scale-105 transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href="/contact">{t("home.hero.contactUs")}</Link>
                </Button>
              </div>
            </div>
            <div
              className={`w-full lg:w-1/2 transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={heroImage || "/placeholder.svg"}
                  alt="Authentic Ayurvedic Shirodhara treatment at MK Kerala Ayurveda"
                  width={600}
                  height={400}
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              {t("home.treatments.title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              {t("home.treatments.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } delay-${400 + index * 200}`}
              >
                <Card className="h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border-border/50 hover:border-primary/20 overflow-hidden">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={treatment.image || "/placeholder.svg"}
                      alt={treatment.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-primary/80 transition-colors">
                      {treatment.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-base leading-relaxed">
                      {treatment.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-primary group/button hover:bg-transparent"
                      asChild
                    >
                      <Link
                        href={treatment.href}
                        className="flex items-center gap-2"
                      >
                        {t("home.treatments.viewAll")}
                        <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>

          <div
            className={`flex justify-center mt-12 transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <Button
              variant="outline"
              asChild
              size="lg"
              className="hover:scale-105 transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/services" className="flex items-center gap-2">
                {t("home.treatments.viewAll")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-br from-muted/50 via-muted to-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              className={`space-y-8 transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                  {t("home.about.title")}
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t("home.about.paragraph1")}
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t("home.about.paragraph2")}
                  </p>
                </div>
              </div>
              <div>
                <Button
                  asChild
                  size="lg"
                  className="hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                >
                  <Link href="/about">{t("home.about.learnMore")}</Link>
                </Button>
              </div>
            </div>
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={aboutImage || "/placeholder.svg"}
                  alt="Traditional Ayurvedic herbs and treatments used at our center"
                  width={600}
                  height={400}
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              {t("home.testimonials.title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              {t("home.testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } delay-${600 + index * 200}`}
              >
                <Card className="h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border-border/50 hover:border-primary/20">
                  <CardContent className="pt-8 flex-1">
                    <div className="mb-6">
                      <Quote className="h-10 w-10 text-primary/30 mb-4" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground italic text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                  <CardFooter className="border-t pt-6 flex flex-col items-start space-y-1">
                    <p className="font-semibold text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gradient-to-br from-muted/50 via-muted to-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div
              className={`lg:col-span-2 space-y-8 transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                  {t("home.contact.title")}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t("home.contact.subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-3 group-hover:text-primary/80 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                      {t("home.contact.contactInfo")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    <p className="text-muted-foreground">+94 11 234 5678</p>
                    <p className="text-muted-foreground">info@mkayurveda.com</p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-3 group-hover:text-primary/80 transition-colors">
                      <Clock className="h-5 w-5 text-primary" />
                      {t("home.contact.hours")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    <p className="text-muted-foreground">
                      Monday - Saturday: 8am - 6pm
                    </p>
                    <p className="text-muted-foreground">Sunday: 9am - 1pm</p>
                  </CardContent>
                </Card>

                <Card className="sm:col-span-2 group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-3 group-hover:text-primary/80 transition-colors">
                      <MapPin className="h-5 w-5 text-primary" />
                      {t("home.contact.location")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    <p className="text-muted-foreground">
                      123 Ayurveda Road, Colombo 05
                    </p>
                    <p className="text-muted-foreground">Sri Lanka</p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Button
                  asChild
                  size="lg"
                  className="hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                >
                  <Link href="/contact">{t("home.contact.contactUs")}</Link>
                </Button>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={contactImage || "/placeholder.svg"}
                  alt="Shirodhara treatment at MK Kerala Ayurveda"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
