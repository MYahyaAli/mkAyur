import type { Metadata } from "next";
import ServicesPage from "@/components/pages/services-page";

export const metadata: Metadata = {
  title: "Our Services | Ayurvedic Medical Center",
  description:
    "Discover our comprehensive range of authentic Ayurvedic treatments and premium spa services.",
};

export default function Services() {
  return <ServicesPage />;
}
