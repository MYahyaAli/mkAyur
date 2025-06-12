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
import {
  Leaf,
  Clock,
  Target,
  Heart,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useMounted } from "@/hooks/use-mounted";
import { useState, useEffect } from "react";

import spaFacial from "@/assets/images/spaFacial.jpg";
import spaJacuzzi from "@/assets/images/spaJaqquzi.jpg";
import spaFootMassage from "@/assets/images/spaFootMassage.jpg";
import spaHeadMassage from "@/assets/images/spaHeadMassage.jpg";

export default function AyurvedicTreatmentsPage() {
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
      id: "panchakarma",
      title: "Panchakarma Detoxification",
      description:
        "A comprehensive five-step detoxification and rejuvenation program that cleanses the body of toxins and restores natural balance.",
      duration: "7-21 days",
      conditions: [
        "Chronic fatigue",
        "Digestive issues",
        "Stress",
        "Toxin buildup",
      ],
      image: spaFacial,
      benefits: [
        "Complete detox",
        "Improved immunity",
        "Mental clarity",
        "Renewed energy",
      ],
      intensity: "Intensive",
      popular: true,
    },
    {
      id: "shirodhara",
      title: "Shirodhara Therapy",
      description:
        "A deeply relaxing treatment where warm herbal oil is continuously poured over the forehead to calm the nervous system.",
      duration: "45-60 minutes",
      conditions: ["Anxiety", "Insomnia", "Stress", "Headaches"],
      image: spaJacuzzi,
      benefits: [
        "Deep relaxation",
        "Better sleep",
        "Stress relief",
        "Mental peace",
      ],
      intensity: "Gentle",
      popular: true,
    },
    {
      id: "abhyanga",
      title: "Abhyanga Full Body Massage",
      description:
        "Traditional Ayurvedic oil massage using warm herbal oils to improve circulation and eliminate toxins from the body.",
      duration: "60-90 minutes",
      conditions: [
        "Muscle tension",
        "Poor circulation",
        "Fatigue",
        "Joint stiffness",
      ],
      image: spaJacuzzi,
      benefits: [
        "Improved circulation",
        "Muscle relaxation",
        "Skin nourishment",
        "Stress reduction",
      ],
      intensity: "Moderate",
      popular: false,
    },
    {
      id: "kizhi",
      title: "Kizhi Herbal Poultice",
      description:
        "Therapeutic treatment using heated herbal poultices to reduce inflammation and improve joint mobility.",
      duration: "45-60 minutes",
      conditions: [
        "Arthritis",
        "Joint pain",
        "Muscle stiffness",
        "Inflammation",
      ],
      image: spaFootMassage,
      benefits: [
        "Pain relief",
        "Reduced inflammation",
        "Improved mobility",
        "Muscle relaxation",
      ],
      intensity: "Moderate",
      popular: true,
    },
    {
      id: "nasya",
      title: "Nasya Nasal Therapy",
      description:
        "Specialized treatment involving medicated oils administered through the nasal passages to treat respiratory and neurological conditions.",
      duration: "30-45 minutes",
      conditions: ["Sinusitis", "Allergies", "Headaches", "Respiratory issues"],
      image: spaHeadMassage,
      benefits: [
        "Clear breathing",
        "Reduced allergies",
        "Headache relief",
        "Mental clarity",
      ],
      intensity: "Gentle",
      popular: false,
    },
    {
      id: "udvartana",
      title: "Udvartana Herbal Scrub",
      description:
        "Invigorating herbal powder massage that helps reduce excess weight, improves skin texture, and enhances circulation.",
      duration: "45-60 minutes",
      conditions: [
        "Weight management",
        "Poor circulation",
        "Skin issues",
        "Cellulite",
      ],
      image: spaFacial,
      benefits: [
        "Weight reduction",
        "Improved skin",
        "Better circulation",
        "Detoxification",
      ],
      intensity: "Moderate",
      popular: false,
    },
  ];

  const consultationProcess = [
    {
      step: 1,
      title: "Initial Consultation",
      description:
        "Comprehensive assessment of your constitution, health history, and current concerns",
      duration: "60 minutes",
    },
    {
      step: 2,
      title: "Personalized Treatment Plan",
      description:
        "Custom treatment protocol designed specifically for your unique needs and goals",
      duration: "Varies",
    },
    {
      step: 3,
      title: "Treatment Sessions",
      description:
        "Regular therapy sessions with our experienced Ayurvedic practitioners",
      duration: "Ongoing",
    },
    {
      step: 4,
      title: "Lifestyle Guidance",
      description:
        "Dietary recommendations and lifestyle modifications to support your healing journey",
      duration: "Continuous",
    },
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Gentle":
        return "bg-green-100 text-green-800 border-green-200";
      case "Moderate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Intensive":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

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
              <Leaf className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Authentic Ayurvedic Treatments
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Experience the ancient wisdom of Ayurveda through our traditional
              therapies designed to restore balance, promote healing, and
              enhance your overall well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
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
              Traditional Healing Therapies
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Our treatments are based on authentic Ayurvedic principles, using
              traditional methods passed down through generations of healers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={treatment.id}
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } delay-${300 + index * 100}`}
              >
                <Card className="h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border-border/50 hover:border-primary/20 overflow-hidden">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={treatment.image || "/placeholder.svg"}
                      alt={treatment.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {treatment.popular && (
                        <Badge className="bg-primary/90 text-primary-foreground">
                          Popular
                        </Badge>
                      )}
                      <Badge
                        variant="outline"
                        className={`${getIntensityColor(
                          treatment.intensity
                        )} border`}
                      >
                        {treatment.intensity}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-lg font-semibold transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <Clock className="h-3 w-3 inline mr-1" />
                      {treatment.duration}
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-primary/80 transition-colors">
                      {treatment.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Target className="h-4 w-4" />
                      <span>Duration: {treatment.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {treatment.description}
                    </CardDescription>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary flex items-center gap-2">
                        <Heart className="h-4 w-4" />
                        Helps with:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {treatment.conditions.map((condition, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {condition}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-primary">
                        Benefits:
                      </h4>
                      <ul className="space-y-1">
                        {treatment.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-3 w-3 text-primary" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      className="w-full hover:scale-[1.02] transition-all duration-200"
                      asChild
                    >
                      <Link href={`/contact?treatment=${treatment.id}`}>
                        Book Consultation
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
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
              Your Healing Journey
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Our comprehensive approach ensures you receive personalized care
              tailored to your unique constitution and health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationProcess.map((step, index) => (
              <div
                key={step.step}
                className={`transform transition-all duration-1000 delay-${
                  900 + index * 100
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <Card className="h-full text-center group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <span className="text-xl font-bold text-primary">
                        {step.step}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary/80 transition-colors">
                      {step.title}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">
                      {step.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
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
            className={`max-w-3xl mx-auto text-center transform transition-all duration-1000 delay-1300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 leading-tight">
              Begin Your Ayurvedic Healing Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Schedule a consultation with our experienced Ayurvedic
              practitioners to discover which treatments are best suited for
              your unique needs and health goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="/contact">
                  <Phone className="h-4 w-4 mr-2" />
                  Book Consultation
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
