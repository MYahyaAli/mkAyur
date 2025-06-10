"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useState } from "react";
import type { ReactNode } from "react";

interface TreatmentCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string;
}

export function TreatmentCard({
  title,
  description,
  icon,
  link = "/services",
}: TreatmentCardProps) {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="flex flex-col h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border-border/50 hover:border-primary/20 cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-4">
        <div
          className={`mb-4 p-3 bg-primary/10 rounded-lg inline-block transition-all duration-300 ${
            isHovered ? "bg-primary/20 scale-110" : ""
          }`}
        >
          {icon}
        </div>
        <CardTitle
          className={`text-xl text-primary transition-all duration-300 ${
            isHovered ? "text-primary/80" : ""
          }`}
        >
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-4">
        <Button
          variant="ghost"
          className="p-0 h-auto text-primary group/button hover:bg-transparent"
          asChild
        >
          <Link href={link} className="flex items-center gap-2">
            {t("home.treatments.viewAll")}
            <ArrowRight
              className={`h-4 w-4 transition-transform duration-300 ${
                isHovered ? "translate-x-1" : ""
              }`}
            />
          </Link>
        </Button>
      </CardFooter>
      <div
        className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-primary/40 transition-all duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </Card>
  );
}
