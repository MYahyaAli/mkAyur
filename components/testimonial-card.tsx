"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { useState } from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating?: number;
}

export function TestimonialCard({
  quote,
  author,
  location,
  rating = 5,
}: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="flex flex-col h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border-border/50 hover:border-primary/20 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="pt-8 flex-1 relative">
        <div className="mb-6">
          <Quote
            className={`h-10 w-10 text-primary/30 mb-4 transition-all duration-300 ${
              isHovered ? "scale-110 text-primary/50" : ""
            }`}
          />
          <div className="flex gap-1 mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 fill-yellow-400 text-yellow-400 transition-all duration-200 ${
                  isHovered ? "scale-110" : ""
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
        </div>
        <p
          className={`text-muted-foreground italic text-lg leading-relaxed transition-all duration-300 ${
            isHovered ? "text-foreground" : ""
          }`}
        >
          "{quote}"
        </p>
        <div
          className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-primary/40 transition-all duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </CardContent>
      <CardFooter className="border-t pt-6 flex flex-col items-start space-y-1">
        <p
          className={`font-semibold text-primary transition-all duration-300 ${
            isHovered ? "text-primary/80" : ""
          }`}
        >
          {author}
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          <div className="w-2 h-2 bg-primary/60 rounded-full" />
          {location}
        </p>
      </CardFooter>
    </Card>
  );
}
