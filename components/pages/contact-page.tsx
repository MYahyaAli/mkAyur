"use client";

import type React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useState, type FormEvent } from "react";
import { useMounted } from "@/hooks/use-mounted";

export default function ContactPage() {
  const { t } = useLanguage();
  const mounted = useMounted();
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
              {t("contact.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {t("contact.getInTouch.title")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("contact.getInTouch.subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      {t("contact.getInTouch.phone")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">+94 11 234 5678</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mon-Sat: 8am - 6pm
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      {t("contact.getInTouch.email")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">info@ayurvedicenter.lk</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("contact.getInTouch.responseTime")}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      {t("contact.getInTouch.hours")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Monday - Saturday: 8am - 6pm</p>
                    <p className="text-sm">Sunday: 9am - 1pm</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {t("contact.getInTouch.address")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">123 Ayurveda Road, Colombo 05</p>
                    <p className="text-sm">Sri Lanka</p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Map location"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm border">
              <h2 className="text-2xl font-bold mb-2">
                {t("contact.form.title")}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t("contact.form.subtitle")}
              </p>

              {submitSuccess && (
                <div className="bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 p-4 rounded-lg mb-4 text-sm">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">
                      {t("contact.form.firstName")}
                    </Label>
                    <Input
                      id="first-name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder={t("contact.form.firstName")}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">
                      {t("contact.form.lastName")}
                    </Label>
                    <Input
                      id="last-name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder={t("contact.form.lastName")}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.form.email")}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("contact.form.phone")}
                  />
                </div>

                <div className="space-y-2">
                  <Label>{t("contact.form.inquiryType")}</Label>
                  <RadioGroup
                    value={formData.inquiryType}
                    onValueChange={handleRadioChange}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="consultation" id="consultation" />
                      <Label htmlFor="consultation" className="mb-0">
                        {t("contact.form.consultation")}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="treatment" id="treatment" />
                      <Label htmlFor="treatment" className="mb-0">
                        {t("contact.form.treatmentInfo")}
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="mb-0">
                        {t("contact.form.other")}
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.form.messagePlaceholder")}
                    required
                    className="min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : t("contact.form.submit")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
