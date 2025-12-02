// @/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";

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
    "GNS Trading — Simplifying Trade, Amplifying Value. Supplier of solar systems, construction equipment, medical devices, and industrial chemicals across Ethiopia.",

  openGraph: {
    title:
      "GNS Trading | Solar, Construction, Medical & Industrial Chemical Supplier in Ethiopia",
    description:
      "GNS Trading supplies solar systems, construction equipment, medical devices, and industrial chemicals across Ethiopia.",
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
      "Premium solar systems, construction equipment, medical devices, and industrial chemicals for the Ethiopian market.",
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

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
