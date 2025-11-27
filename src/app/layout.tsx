// @/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gnstradingplc.com"),
  title:
    "GNS Trading | Solar, Construction, Medical & Industrial Chemical Supplier in Ethiopia",
  description:
    "GNS Trading — Simplifying Trade, Amplifying Value. Supplier of solar systems, construction tools, medical equipment, and industrial chemicals for water treatment, food processing, manufacturing, and paint/plastics in Ethiopia.",
  keywords: [
    // Brand
    "GNS Trading",
    "GNS Trading Ethiopia",
    "GNS Trading PLC",
    "GNS solar Ethiopia",
    "GNS construction Ethiopia",
    "GNS medical Ethiopia",
    "GNS industrial chemicals Ethiopia",

    // Solar
    "solar Ethiopia",
    "solar Addis Ababa",
    "solar panels Ethiopia",
    "solar panels Addis Ababa",
    "solar energy Ethiopia",
    "solar system installation Ethiopia",
    "off-grid solar Ethiopia",
    "on-grid solar Ethiopia",
    "solar inverter Ethiopia",
    "solar battery Ethiopia",
    "solar suppliers Ethiopia",
    "renewable energy Ethiopia",
    "PV systems Ethiopia",
    "Ethiopia solar distributor",
    "East Africa solar equipment",

    // Construction (broad)
    "construction Ethiopia",
    "construction Addis Ababa",
    "construction tools Ethiopia",
    "industrial tools Ethiopia",
    "power tools Ethiopia",
    "Ethiopia hardware supplier",
    "building materials Ethiopia",
    "contractor tools Ethiopia",
    "hand tools Ethiopia",
    "construction equipment Ethiopia",
    "welding equipment Ethiopia",
    "plumbing tools Ethiopia",
    "electrician tools Ethiopia",
    "hardware importer Ethiopia",

    // Medical (broad)
    "medical equipment Ethiopia",
    "medical supplies Ethiopia",
    "hospital equipment Ethiopia",
    "diagnostic devices Ethiopia",
    "clinical equipment Ethiopia",
    "Ethiopia medical devices",
    "medical importer Ethiopia",
    "healthcare equipment Ethiopia",

    // Industrial Chemicals (NEW)
    "industrial chemicals Ethiopia",
    "chlorine powder Ethiopia",
    "aluminum sulfate Ethiopia",
    "caustic soda Ethiopia",
    "water treatment chemicals Ethiopia",
    "food processing chemicals Ethiopia",
    "industrial solvents Ethiopia",
    "paint chemicals Ethiopia",
    "plastic additives Ethiopia",
    "resins Ethiopia",
    "colorants Ethiopia",
    "packaging additives Ethiopia",
    "chemical importer Ethiopia",
    "Ethiopia industrial raw materials",

    // General trade + imports
    "Ethiopia import company",
    "Ethiopia equipment importer",
    "industrial solutions Ethiopia",
    "Ethiopia trading company",
    "international sourcing Ethiopia",
    "Addis Ababa industrial supplies",
    "Ethiopian business suppliers",

    // Geographic targeting
    "Addis Ababa",
    "Ethiopia",
    "East Africa",
    "East African suppliers",
    "Ethiopian distributors",
    "Addis Ababa suppliers",

    // Motto
    "Simplifying Trade Amplifying Value",
  ],

  openGraph: {
    title:
      "GNS Trading | Solar, Construction, Medical & Industrial Chemical Supplier in Ethiopia",
    description:
      "GNS Trading supplies solar systems, construction equipment, medical devices, and industrial chemicals across Ethiopia. High-quality products, reliable sourcing, nationwide delivery.",
    siteName: "GNS Trading",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "GNS Trading Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "GNS Trading | Solar, Construction, Medical & Industrial Chemical Supplier in Ethiopia",
    description:
      "Premium solar systems, construction tools, medical devices and industrial chemicals for the Ethiopian market.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GNS Trading PLC",
              url: "https://gnstradingplc.com",
              logo: "https://gnstradingplc.com/logo.png",
              slogan: "Simplifying Trade, Amplifying Value",
              description:
                "Supplier of solar systems, construction tools, medical equipment, and industrial solutions in Ethiopia.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Addis Ababa",
                addressCountry: "Ethiopia",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+251911220468",
                  contactType: "customer service",
                  areaServed: "ET",
                },
              ],
              sameAs: [
                "https://wa.me/251911220468",
                "https://t.me/+251911220468",
              ],
            }),
          }}
        />

        <Providers>
          <Navigation />
          <main className="pt-24">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
