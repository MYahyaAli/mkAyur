import type { Metadata } from "next";
import { Suspense } from "react";
import SpaServicesPage from "@/components/pages/spa-services-page";

export const metadata: Metadata = {
  title: "Premium Luxury Spa Services | Ayurvedic Medical Center",
  description:
    "Indulgent spa experiences that combine traditional techniques with modern luxury for ultimate relaxation.",
};

export default function SpaServices() {
  return (
    <Suspense
      fallback={<div className="p-8 text-center text-muted">Loading...</div>}
    >
      <SpaServicesPage />
    </Suspense>
  );
}
