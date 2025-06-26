"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  ArrowLeft,
  Phone,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useMounted } from "@/hooks/use-mounted";
import { useState, useEffect } from "react";

import Massages from "@/assets/images/spa-menu-massages.jpg";
import BodyRituals from "@/assets/images/spa-menu-body.jpg";
import FootRituals from "@/assets/images/spa-menu-foot.jpg";
import HeadRituals from "@/assets/images/spa-menu-head.jpg";
import FaceRituals from "@/assets/images/spa-menu-face-rituals.jpg";
import BeautynGroom from "@/assets/images/spa-menu-beauty.jpg";
import Hydro from "@/assets/images/spa-menu-hydro.jpg";

export default function SpaServicesPage() {
  const { t } = useLanguage();
  const mounted = useMounted();
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  useEffect(() => {
    if (mounted) {
      setIsVisible(true);
    }
  }, [mounted]);

  const spaCategories = [
    {
      id: "signature-massages",
      title: "Special Massages",
      description:
        "Premium therapeutic massages combining traditional techniques with modern wellness",
      image: Massages,
      services: [
        {
          name: "Deep Tissue Massage",
          description:
            "Therapeutic massage targeting deep muscle layers to release chronic tension and improve mobility.",
          duration: "90 min",
          price: "13,200",
          benefits: [
            "Deep muscle relief",
            "Improved flexibility",
            "Tension release",
          ],
        },
        {
          name: "Hot Stone Massage",
          description:
            "Soothing massage combining Ayurvedic techniques with heated basalt stones for deep relaxation.",
          duration: "90 min",
          price: "11,900",
          benefits: [
            "Deep relaxation",
            "Improved circulation",
            "Stress relief",
          ],
        },
        {
          name: "Swedish Bliss Massage",
          description:
            "Classic full-body massage with Ayurvedic essence using flowing strokes and rhythmic techniques.",
          duration: "90 min",
          price: "14,200",
          benefits: [
            "Full body relaxation",
            "Stress relief",
            "Improved circulation",
          ],
        },
      ],
    },
    {
      id: "body-rituals",
      title: "Body Rituals",
      description:
        "Luxurious full-body treatments for complete rejuvenation and wellness",
      image: BodyRituals,
      services: [
        {
          name: "Aromatherapy Massage",
          description:
            "Full-body massage with medicated aromatic oils blending Ayurvedic techniques.",
          duration: "90 min",
          price: "13,200",
          benefits: [
            "Aromatherapy benefits",
            "Stress relief",
            "Muscle relaxation",
          ],
        },
        {
          name: "Royal Body Ritual",
          description:
            "Luxurious massage with Ayurvedic oils concluding with a full-body steam bath.",
          duration: "120 min",
          price: "16,600",
          benefits: [
            "Complete relaxation",
            "Detoxification",
            "Royal experience",
          ],
        },
        {
          name: "Royal Body Scrub",
          description:
            "Full-body exfoliating massage using therapeutic herbal powders and Ayurvedic techniques.",
          duration: "120 min",
          price: "16,000",
          benefits: ["Skin exfoliation", "Detoxification", "Skin renewal"],
        },
      ],
    },
    {
      id: "foot-rituals",
      title: "Foot Rituals",
      description:
        "Specialized foot therapies for relaxation and therapeutic benefits",
      image: FootRituals,
      services: [
        {
          name: "Signature Aromatic Foot Therapy",
          description:
            "Herbal foot bath, revitalizing scrub, and extended massage with aromatic oils.",
          duration: "90 min",
          price: "7,200",
          benefits: [
            "Deep relaxation",
            "Improved circulation",
            "Stress relief",
          ],
        },
        {
          name: "Royal Foot Therapy",
          description:
            "Ultimate foot care with herbal bath, scrub, massage, and extended reflexology session.",
          duration: "90 min",
          price: "7,500",
          benefits: [
            "Reflexology benefits",
            "Energy flow",
            "Complete foot care",
          ],
        },
        {
          name: "Calming Foot Therapy For Sleep",
          description:
            "Sleep-promoting ritual with specialized herbal foot bath and gentle massage.",
          duration: "90 min",
          price: "8,200",
          benefits: ["Better sleep", "Deep relaxation", "Stress relief"],
        },
      ],
    },
    {
      id: "head-hair-rituals",
      title: "Head & Hair Rituals",
      description:
        "Therapeutic treatments for scalp, hair, and upper body relaxation",
      image: HeadRituals,
      services: [
        {
          name: "Signature Head Massage",
          description:
            "Therapeutic head massage with Ayurvedic oils for scalp nourishment and stress relief.",
          duration: "30 min",
          price: "5,000",
          benefits: ["Scalp nourishment", "Stress relief", "Hair health"],
        },
        {
          name: "Head, Neck & Shoulders Ritual",
          description:
            "Specialized massage focusing on marma and chakra points for complete relaxation.",
          duration: "45 min",
          price: "5,500",
          benefits: [
            "Tension relief",
            "Chakra balancing",
            "Complete relaxation",
          ],
        },
        {
          name: "Hair Therapy",
          description:
            "Specialized treatment with herb-infused oils and masks for hair growth and scalp health.",
          duration: "45 min",
          price: "5,600",
          benefits: ["Hair growth", "Scalp health", "Dandruff control"],
        },
      ],
    },
    {
      id: "facial-rituals",
      title: "Facial Rituals",
      description:
        "Comprehensive facial treatments for all skin types and concerns",
      image: FaceRituals,
      services: [
        {
          name: "Signature Face Ritual",
          description:
            "Eight-step holistic facial blending ancient wisdom with modern skincare.",
          duration: "60 min",
          price: "11,000",
          benefits: ["8-step treatment", "Glowing skin", "Inner calm"],
        },
        {
          name: "Anti Acne Face Ritual",
          description:
            "Specialized treatment for acne-prone skin using customized herbs and oils.",
          duration: "60 min",
          price: "11,000",
          benefits: ["Acne treatment", "Skin purification", "Oil control"],
        },
        {
          name: "Anti Aging Face Ritual",
          description:
            "Advanced treatment to reduce signs of aging and promote youthful skin.",
          duration: "60 min",
          price: "12,200",
          benefits: ["Anti-aging", "Skin firming", "Wrinkle reduction"],
        },
        {
          name: "Skin Energizing (For Men)",
          description:
            "Facial treatment specially designed for men's skin needs and concerns.",
          duration: "60 min",
          price: "11,000",
          benefits: ["Men's skincare", "Skin energizing", "Deep cleansing"],
        },
        {
          name: "Deep Hydration for Dry Skin",
          description:
            "Intensive hydrating treatment for dry and dehydrated skin.",
          duration: "60 min",
          price: "11,500",
          benefits: [
            "Deep hydration",
            "Skin nourishment",
            "Moisture restoration",
          ],
        },
        {
          name: "Oil Control / Balancing",
          description:
            "Balancing treatment for oily and combination skin types.",
          duration: "60 min",
          price: "10,500",
          benefits: ["Oil control", "Skin balancing", "Pore refinement"],
        },
        {
          name: "Skin Glow Booster",
          description:
            "Revitalizing treatment to restore natural glow to dull, tired skin.",
          duration: "60 min",
          price: "13,500",
          benefits: ["Skin brightening", "Glow enhancement", "Radiance boost"],
        },
      ],
    },
    {
      id: "beauty-grooming",
      title: "Beauty & Grooming",
      description: "Essential beauty treatments for hands and feet",
      image: BeautynGroom,
      services: [
        {
          name: "Manicure",
          description:
            "Professional nail care with cuticle treatment, shaping, and polish application.",
          duration: "45 min",
          price: "5,000",
          benefits: ["Nail care", "Hand beautification", "Cuticle treatment"],
        },
        {
          name: "Pedicure",
          description:
            "Complete foot care including nail treatment, callus removal, and foot massage.",
          duration: "45 min",
          price: "5,000",
          benefits: ["Foot care", "Nail beautification", "Callus removal"],
        },
      ],
      addOns: [
        { name: "Nail Polish", price: "700" },
        { name: "Herbal Soak", price: "700" },
        { name: "Nail Strengthening", price: "700" },
      ],
    },
    {
      id: "hydro-therapy",
      title: "Hydro Therapy",
      description: "Therapeutic water-based treatments for ultimate relaxation",
      image: Hydro,
      services: [
        {
          name: "Hydro Therapy",
          description:
            "Therapeutic water treatment harnessing warmth and flow to relax muscles and restore balance.",
          duration: "60 min",
          price: "9,000",
          benefits: [
            "Muscle relaxation",
            "Improved circulation",
            "Stress relief",
            "Detoxification",
          ],
        },
      ],
    },
  ];

  const nextPage = () => {
    if (currentPage < spaCategories.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex !== currentPage) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(pageIndex);
        setIsTransitioning(false);
      }, 150);
    }
  };

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

  const currentCategory = spaCategories[currentPage];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-background py-16 lg:py-20 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Button
              variant="ghost"
              className="mb-8 text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href="/services" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Link>
            </Button>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6 tracking-tight">
              Soul Tree Spa & Wellness
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Authentic Ayurvedic-inspired treatments combining ancient wisdom
              with modern luxury
            </p>
          </div>
        </div>
      </section>

      {/* Menu Book Interface */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Navigation Tabs */}
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-full overflow-hidden">
                <div className="overflow-x-auto scrollbar-hide">
                  <div className="flex gap-2 p-1 bg-muted/50 rounded-lg border border-border min-w-max mx-auto">
                    {spaCategories.map((category, index) => (
                      <button
                        key={category.id}
                        onClick={() => goToPage(index)}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                          currentPage === index
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground hover:bg-background"
                        }`}
                      >
                        {category.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Menu Card */}
            <Card className="overflow-hidden shadow-lg border-2 border-border bg-card">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                  {/* Left Side - Menu Image */}
                  <div className="relative bg-muted/30 flex items-center justify-center p-8">
                    <div
                      className={`relative w-full max-w-md transition-all duration-300 cursor-zoom-in ${
                        isTransitioning
                          ? "opacity-0 scale-95"
                          : "opacity-100 scale-100"
                      }`}
                      onClick={() => setIsImageZoomed(true)}
                    >
                      <Image
                        src={currentCategory.image || "/placeholder.svg"}
                        alt={`${currentCategory.title} menu`}
                        width={400}
                        height={500}
                        className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Services List */}
                  <div className="flex flex-col">
                    {/* Category Header */}
                    <div className="p-8 border-b border-border bg-card">
                      <div
                        className={`transition-all duration-300 ${
                          isTransitioning
                            ? "opacity-0 translate-y-4"
                            : "opacity-100 translate-y-0"
                        }`}
                      >
                        <h2 className="text-3xl font-light text-foreground mb-2 tracking-tight">
                          {currentCategory.title}
                        </h2>
                        <p className="text-muted-foreground">
                          {currentCategory.description}
                        </p>
                      </div>
                    </div>

                    {/* Services List */}
                    <div className="flex-1 overflow-y-auto max-h-[500px] bg-gradient-to-b from-muted/20 to-muted/30">
                      <div
                        className={`p-8 space-y-6 transition-all duration-300 ${
                          isTransitioning
                            ? "opacity-0 translate-y-4"
                            : "opacity-100 translate-y-0"
                        }`}
                      >
                        {currentCategory.services.map(
                          (service, serviceIndex) => (
                            <div
                              key={serviceIndex}
                              className="border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-primary/80 to-primary/90 hover:from-primary/85 hover:to-primary/95 shadow-md hover:shadow-lg"
                            >
                              <div className="space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                  <h3 className="text-xl font-medium text-white">
                                    {service.name}
                                  </h3>
                                  <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center gap-1 text-white/80">
                                      <Clock className="h-4 w-4" />
                                      {service.duration}
                                    </div>
                                    <div className="font-semibold text-white bg-white/20 px-2 py-1 rounded">
                                      Rs. {service.price}
                                    </div>
                                  </div>
                                </div>

                                <p className="text-white/90 leading-relaxed text-sm">
                                  {service.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                  {service.benefits.map((benefit, i) => (
                                    <Badge
                                      key={i}
                                      className="bg-white/20 text-white hover:bg-white/30 border-white/30 text-xs font-normal"
                                    >
                                      {benefit}
                                    </Badge>
                                  ))}
                                </div>

                                <div className="pt-2">
                                  <Button
                                    size="sm"
                                    className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 hover:text-primary"
                                    asChild
                                  >
                                    <Link
                                      href={`/contact?service=${service.name
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                    >
                                      Book Now
                                      <ChevronRight className="h-4 w-4 ml-1" />
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )
                        )}

                        {/* Add-ons */}
                        {currentCategory.addOns && (
                          <div className="mt-6 p-4 bg-primary/70 rounded-lg border border-primary/40">
                            <h3 className="text-lg font-medium text-white mb-3">
                              Add-ons
                            </h3>
                            <div className="grid grid-cols-1 gap-2">
                              {currentCategory.addOns.map((addon, i) => (
                                <div
                                  key={i}
                                  className="flex justify-between items-center p-2 bg-white/20 rounded border border-white/30"
                                >
                                  <span className="text-sm font-medium text-white">
                                    {addon.name}
                                  </span>
                                  <span className="text-sm text-white/80 font-medium">
                                    Rs. {addon.price}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                onClick={prevPage}
                disabled={currentPage === 0}
                className="flex items-center gap-2 border-border hover:bg-muted"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Page {currentPage + 1} of {spaCategories.length}
                </span>
              </div>

              <Button
                variant="outline"
                onClick={nextPage}
                disabled={currentPage === spaCategories.length - 1}
                className="flex items-center gap-2 border-border hover:bg-muted"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted/30 py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-light text-foreground tracking-tight">
              Ready to Book Your Treatment?
            </h2>
            <p className="text-muted-foreground">
              Contact us to schedule your personalized spa experience
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Phone className="h-4 w-4 mr-2" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-muted"
                asChild
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      {isImageZoomed && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsImageZoomed(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setIsImageZoomed(false)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Image
              src={currentCategory.image || "/placeholder.svg"}
              alt={`${currentCategory.title} menu - enlarged view`}
              width={800}
              height={1000}
              className="max-h-[calc(100vh-2rem)] w-auto object-contain rounded-lg shadow-2xl cursor-zoom-out"
              onClick={() => setIsImageZoomed(false)}
            />
          </div>
        </div>
      )}
    </main>
  );
}
