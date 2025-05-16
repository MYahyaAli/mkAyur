import type { Metadata } from "next";
import AboutPage from "@/components/pages/about-page";

export const metadata: Metadata = {
  title: "About Our Center | Ayurvedic Medical Center",
  description:
    "Learn about our journey, philosophy, and commitment to authentic Ayurvedic healing.",
};

export default function About() {
  return <AboutPage />;
}
