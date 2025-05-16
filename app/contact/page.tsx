import type { Metadata } from "next";
import ContactPage from "@/components/pages/contact-page";

export const metadata: Metadata = {
  title: "Contact Us | Ayurvedic Medical Center",
  description:
    "Reach out to schedule a consultation or learn more about our treatments.",
};

export default function Contact() {
  return <ContactPage />;
}
