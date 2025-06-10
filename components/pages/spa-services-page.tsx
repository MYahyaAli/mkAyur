"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, Users, Star, ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useMounted } from "@/hooks/use-mounted";
import { useState, useEffect } from "react";

export default function SpaServicesPage() {
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

  const spaServices = [
    {
      id: "aromatherapy-massage",
      title: "Aromatherapy Massage",
      description:
        "Indulge in a deeply relaxing massage using premium essential oils that soothe your mind and rejuvenate your body.",
      duration: "60-90 minutes",
      price: "From $120",
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "Stress relief",
        "Improved circulation",
        "Muscle relaxation",
        "Mental clarity",
      ],
      rating: 4.9,
      popular: true,
    },
    {
      id: "hot-stone-therapy",
      title: "Hot Stone Therapy",
      description:
        "Experience the healing power of heated volcanic stones that melt away tension and promote deep relaxation.",
      duration: "75 minutes",
      price: "From $150",
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "Deep muscle relief",
        "Improved blood flow",
        "Stress reduction",
        "Pain relief",
      ],
      rating: 4.8,
      popular: false,
    },
    {
      id: "facial-rejuvenation",
      title: "Facial Rejuvenation",
      description:
        "Revitalize your skin with our signature facial treatment using natural ingredients and advanced techniques.",
      duration: "60 minutes",
      price: "From $100",
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "Skin hydration",
        "Anti-aging",
        "Pore cleansing",
        "Natural glow",
      ],
      rating: 4.9,
      popular: true,
    },
    {
      id: "couples-retreat",
      title: "Couples Retreat Package",
      description:
        "Share a blissful spa experience with your loved one in our private couples suite with synchronized treatments.",
      duration: "2 hours",
      price: "From $300",
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "Private suite",
        "Synchronized treatments",
        "Champagne service",
        "Romantic ambiance",
      ],
      rating: 5.0,
      popular: true,
    },
    {
      id: "body-wrap",
      title: "Detoxifying Body Wrap",
      description:
        "Purify and nourish your skin with our detoxifying body wrap using natural herbs and minerals.",
      duration: "90 minutes",
      price: "From $130",
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "Skin detoxification",
        "Improved texture",
        "Hydration",
        "Relaxation",
      ],
      rating: 4.7,
      popular: false,
    },
    {
      id: "reflexology",
      title: "Therapeutic Reflexology",
      description:
        "Restore balance and promote healing through targeted pressure point therapy on your feet and hands.",
      duration: "45 minutes",
      price: "From $80",
      image: "/placeholder.svg?height=400&width=600",
      benefits: [
        "Improved circulation",
        "Stress relief",
        "Better sleep",
        "Pain reduction",
      ],
      rating: 4.8,
      popular: false,
    },
  ];

  const packages = [
    {
      title: "Wellness Day Package",
      description:
        "A complete day of relaxation including massage, facial, and body treatment",
      duration: "4 hours",
      price: "From $350",
      services: [
        "Aromatherapy Massage",
        "Facial Rejuvenation",
        "Body Wrap",
        "Healthy Lunch",
      ],
    },
    {
      title: "Weekend Retreat",
      description:
        "Two-day wellness experience with accommodation and multiple treatments",
      duration: "2 days",
      price: "From $800",
      services: [
        "Accommodation",
        "3 Spa Treatments",
        "Yoga Sessions",
        "Healthy Meals",
      ],
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
            <div className="p-4 bg-primary/10 rounded-full mb-6">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Premium Spa Services
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Indulge in luxurious spa treatments that combine traditional
              techniques with modern wellness practices for ultimate relaxation
              and rejuvenation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 leading-tight">
              Our Signature Treatments
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Each treatment is carefully designed to provide you with the
              ultimate spa experience, using only the finest natural ingredients
              and expert techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaServices.map((service, index) => (
              <div
                key={service.id}
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } delay-${300 + index * 100}`}
              >
                <Card className="h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border-border/50 hover:border-primary/20 overflow-hidden">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {service.popular && (
                        <Badge className="bg-primary/90 text-primary-foreground">
                          Popular
                        </Badge>
                      )}
                      <Badge
                        variant="secondary"
                        className="bg-white/90 text-foreground"
                      >
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {service.rating}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-lg font-semibold transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {service.price}
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-primary/80 transition-colors">
                      {service.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {service.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        1-2 people
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">
                        Benefits:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button
                      className="w-full hover:scale-[1.02] transition-all duration-200"
                      asChild
                    >
                      <Link href={`/contact?service=${service.id}`}>
                        Book Treatment
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-gradient-to-br from-muted/50 via-muted to-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 leading-tight">
              Wellness Packages
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Combine multiple treatments for a comprehensive wellness
              experience at special package rates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${
                  900 + index * 200
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <Card className="h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border-border/50 hover:border-primary/20">
                  <CardHeader className="pb-6">
                    <div className="flex justify-between items-start mb-4">
                      <CardTitle className="text-2xl group-hover:text-primary/80 transition-colors">
                        {pkg.title}
                      </CardTitle>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {pkg.price}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-base leading-relaxed">
                      {pkg.description}
                    </CardDescription>
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">
                        Includes:
                      </h4>
                      <ul className="space-y-2">
                        {pkg.services.map((service, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-muted-foreground">
                              {service}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      className="w-full hover:scale-[1.02] transition-all duration-200"
                      asChild
                    >
                      <Link
                        href={`/contact?package=${pkg.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        Book Package
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 delay-1100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 leading-tight">
              Ready to Relax and Rejuvenate?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Book your spa experience today and let our expert therapists help
              you achieve the ultimate state of relaxation and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="/contact">
                  <Phone className="h-4 w-4 mr-2" />
                  Book Now
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <Link href="/services">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
