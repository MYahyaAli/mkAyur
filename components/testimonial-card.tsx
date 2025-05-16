"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
}

export function TestimonialCard({
  quote,
  author,
  location,
}: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardContent className="pt-6 flex-1">
        <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
        <p className="text-muted-foreground italic">{quote}</p>
      </CardContent>
      <CardFooter className="border-t pt-4 flex flex-col items-start">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </CardFooter>
    </Card>
  );
}
