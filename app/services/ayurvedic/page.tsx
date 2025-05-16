import type { Metadata } from "next";
import AyurvedicTreatmentsPage from "@/components/pages/ayurvedic-treatments-page";

export const metadata: Metadata = {
  title: "Ayurvedic Treatments | Ayurvedic Medical Center",
  description:
    "Authentic Ayurvedic therapies based on ancient wisdom to address various health concerns.",
};

export default function AyurvedicTreatments() {
  return <AyurvedicTreatmentsPage />;
}
