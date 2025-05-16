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

  return (
    <Card className="flex flex-col h-full transition-all duration-200 hover:shadow-md">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          className="p-0 h-auto text-primary group"
          asChild
        >
          <Link href={link} className="flex items-center gap-2">
            {t("home.treatments.viewAll")}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
