import type { Metadata } from "next";
import HomePage from "@/components/pages/home-page";

export const metadata: Metadata = {
  title:
    "Ayurvedic Medical Center | Authentic Ayurvedic Treatments in Sri Lanka",
  description:
    "Experience authentic Ayurvedic treatments for holistic wellness and healing at our premier center in Sri Lanka.",
};

export default function Home() {
  return <HomePage />;
}
