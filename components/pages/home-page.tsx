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
import {
  Phone,
  Clock,
  MapPin,
  ArrowRight,
  Quote,
  Star,
  Leaf,
  Heart,
  Brain,
  TreesIcon as Lungs,
  StickerIcon as Stomach,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useMounted } from "@/hooks/use-mounted";
import { useEffect, useState, useRef } from "react";
import heroImage from "@/assets/images/treatment-3.jpg";
import aboutImage from "@/assets/images/treatment-6.jpg";
import contactImage from "@/assets/images/treatment-4.jpg";

export default function HomePage() {
  const { t } = useLanguage();
  const mounted = useMounted();
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (mounted) {
      setIsVisible(true);
    }
  }, [mounted]);

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 320 + 24; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 320 + 24; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition(); // Initial check
      return () => container.removeEventListener("scroll", checkScrollPosition);
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

  // Comprehensive treatment categories
  const treatmentCategories = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Pain Management",
      description:
        "Comprehensive care for chronic and lifestyle-related conditions",
      treatments: [
        "Arthritis (Osteoarthritis, Rheumatoid)",
        "Sciatica and Nerve Compression",
        "Back Pain (Lower and Upper)",
        "Knee Pain and Joint Degeneration",
        "Shoulder Pain and Frozen Shoulder",
      ],
      href: "/services/ayurvedic#pain-management",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Neurological & Functional Disorders",
      description:
        "Specialized care for neurological and mental health conditions",
      treatments: [
        "Paralysis (Hemiplegia, Paraplegia)",
        "Post-Stroke Rehabilitation",
        "Migraine & Chronic Headaches",
        "Insomnia & Sleep Disorders",
        "Stress, Anxiety & Emotional Balance",
      ],
      href: "/services/ayurvedic#neurological",
    },
    {
      icon: <Lungs className="h-8 w-8" />,
      title: "Respiratory & Allergic Conditions",
      description: "Natural treatments for breathing and allergic disorders",
      treatments: [
        "Asthma",
        "Allergic Rhinitis",
        "Sinusitis",
        "Seasonal & Food Allergies",
      ],
      href: "/services/ayurvedic#respiratory",
    },
    {
      icon: <Stomach className="h-8 w-8" />,
      title: "Gastrointestinal & Metabolic Health",
      description: "Holistic approach to digestive and metabolic wellness",
      treatments: [
        "Gastritis & Acid Reflux",
        "Constipation & Indigestion",
        "Diabetes Management",
        "Weight Management & Obesity",
        "Piles (Hemorrhoids)",
      ],
      href: "/services/ayurvedic#gastrointestinal",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Women & Children's Health",
      description: "Specialized care for women and pediatric health needs",
      treatments: [
        "Menstrual Irregularities (PCOS, PMS)",
        "Pre/Postnatal Care",
        "Pediatric Care & Immunity",
        "Growth & Development Support",
      ],
      href: "/services/ayurvedic#womens-health",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Skin & Hair Care + Spa Services",
      description: "Natural beauty treatments and luxury wellness experiences",
      treatments: [
        "Eczema & Psoriasis",
        "Acne & Skin Allergies",
        "Hair Fall & Scalp Conditions",
        "Luxury Spa Therapies",
        "Detoxification Programs",
      ],
      href: "/services/spa",
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
                <p className="text-xl sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
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

      {/* Comprehensive Treatment Categories */}
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
            <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
              Comprehensive Ayurvedic care for chronic, lifestyle, and systemic
              health conditions. Our holistic approach addresses the root causes
              of illness to promote complete healing and wellness.
            </p>
          </div>

          {/* Scrollable Treatment Cards with Arrow Navigation */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={scrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-3 transition-all duration-200 ${
                canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-3 transition-all duration-200 ${
                canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide mx-8"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
                {treatmentCategories.map((category, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-1000 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    } delay-${400 + index * 150}`}
                    style={{
                      width: "calc((100vw - 8rem) / 3.5)",
                      minWidth: "280px",
                      maxWidth: "320px",
                    }}
                  >
                    <Card className="h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 bg-primary border-primary/20 hover:border-primary/40">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-white">{category.icon}</div>
                          <CardTitle className="text-xl text-white group-hover:text-white/90 transition-colors">
                            {category.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-sm text-white/80">
                          {category.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="flex-1">
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-white/90 mb-3">
                            Key Treatments:
                          </p>
                          <ul className="space-y-2">
                            {category.treatments
                              .slice(0, 4)
                              .map((treatment, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm text-white/80"
                                >
                                  <span className="text-white text-xs mt-1">
                                    •
                                  </span>
                                  <span>{treatment}</span>
                                </li>
                              ))}
                            {category.treatments.length > 4 && (
                              <li className="text-sm text-white font-medium">
                                +{category.treatments.length - 4} more
                                conditions
                              </li>
                            )}
                          </ul>
                        </div>
                      </CardContent>

                      <CardFooter className="pt-4">
                        <Button
                          variant="ghost"
                          className="p-0 h-auto text-white hover:text-white/90 group/button hover:bg-transparent w-full justify-start"
                          asChild
                        >
                          <Link
                            href={category.href}
                            className="flex items-center gap-2"
                          >
                            Learn More
                            <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex justify-center mt-12 transform transition-all duration-1000 delay-1200 ${
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
                View All Treatment Categories
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
                <Card className="h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 bg-primary border-primary/20 hover:border-primary/40">
                  <CardContent className="pt-8 flex-1">
                    <div className="mb-6">
                      <Quote className="h-10 w-10 text-primary/30 mb-4 text-white" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-zinc-300 text-zinc-300"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground italic text-lg leading-relaxed text-white">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                  <CardFooter className="border-t pt-6 flex flex-col items-start space-y-1">
                    <p className="font-semibold text-primary text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground text-zinc-300">
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
                    <p className="text-muted-foreground">home@mkayur.lk</p>
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
                      90/10, Meetotamulla Road, Kollonnawa
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
