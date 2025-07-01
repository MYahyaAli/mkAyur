import type React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MK Kerala Ayurveda | Authentic Ayurvedic Treatments",
  description:
    "Experience authentic ayurvedic treatments for arthritis, back pain, skin diseases, and more at MK Kerala Ayurveda in Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorantGaramond.variable} ${poppins.variable}`}
    >
      <body>
        <ThemeProvider defaultTheme="light" enableSystem>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
