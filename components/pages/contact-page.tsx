"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useState, useEffect, type FormEvent } from "react";
import { useMounted } from "@/hooks/use-mounted";

export default function ContactPage() {
  const { t } = useLanguage();
  const mounted = useMounted();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "consultation",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (mounted) {
      setIsVisible(true);
    }
  }, [mounted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      inquiryType: "consultation",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
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

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.getInTouch.phone"),
      primary: "(011) 253 2891",
      secondary: "Mon-Sat: 8am - 6pm",
    },
    {
      icon: Mail,
      title: t("contact.getInTouch.email"),
      primary: "home@mkayur.lk",
      secondary: t("contact.getInTouch.responseTime"),
    },
    {
      icon: Clock,
      title: t("contact.getInTouch.hours"),
      primary: "Monday - Saturday: 8am - 6pm",
      secondary: "Sunday: 9am - 1pm",
    },
    {
      icon: MapPin,
      title: t("contact.getInTouch.address"),
      primary: "90/10, Meetotamulla Road, Kollonnawa",
      secondary: "Sri Lanka",
    },
  ];

  const inquiryTypes = [
    { value: "consultation", label: t("contact.form.consultation") },
    { value: "treatment", label: t("contact.form.treatmentInfo") },
    { value: "other", label: t("contact.form.other") },
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              {t("contact.title")}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div
              className={`space-y-8 transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary leading-tight">
                  {t("contact.getInTouch.title")}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t("contact.getInTouch.subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border-border/50 hover:border-primary/20 transform ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    } delay-${400 + index * 100}`}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-3 group-hover:text-primary/80 transition-colors">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1">
                      <p className="font-medium text-foreground">
                        {info.primary}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.secondary}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Section */}
              <div
                className={`transform transition-all duration-1000 delay-800 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3960.630873841439!2d79.88234987499662!3d6.934644993065291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTYnMDQuNyJOIDc5wrA1MycwNS43IkU!5e0!3m2!1sen!2slk!4v1751386606373!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="transition-transform duration-700 group-hover:scale-105"
                    title="MK Kerala Ayurveda Location"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <Card className="shadow-2xl border-border/50 hover:border-primary/20 transition-all duration-500">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-primary">
                    {t("contact.form.title")}
                  </CardTitle>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t("contact.form.subtitle")}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {submitSuccess && (
                    <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 p-4 rounded-xl flex items-center gap-3 animate-in slide-in-from-top-2 duration-500">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <p className="font-medium">
                        Thank you for your message! We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="first-name"
                          className="text-sm font-medium"
                        >
                          {t("contact.form.firstName")}
                        </Label>
                        <Input
                          id="first-name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder={t("contact.form.firstName")}
                          required
                          className="h-12 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="last-name"
                          className="text-sm font-medium"
                        >
                          {t("contact.form.lastName")}
                        </Label>
                        <Input
                          id="last-name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder={t("contact.form.lastName")}
                          required
                          className="h-12 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        {t("contact.form.email")}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("contact.form.email")}
                        required
                        className="h-12 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        {t("contact.form.phone")}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t("contact.form.phone")}
                        className="h-12 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="space-y-4">
                      <Label className="text-sm font-medium">
                        {t("contact.form.inquiryType")}
                      </Label>
                      <RadioGroup
                        value={formData.inquiryType}
                        onValueChange={handleRadioChange}
                        className="space-y-3"
                      >
                        {inquiryTypes.map((type) => (
                          <div
                            key={type.value}
                            className="flex items-center space-x-3"
                          >
                            <RadioGroupItem
                              value={type.value}
                              id={type.value}
                              className="transition-all duration-200"
                            />
                            <Label
                              htmlFor={type.value}
                              className="text-sm font-medium cursor-pointer hover:text-primary transition-colors"
                            >
                              {type.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        {t("contact.form.message")}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("contact.form.messagePlaceholder")}
                        required
                        className="min-h-[120px] resize-none transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full h-12 hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          {t("contact.form.submit")}
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
