// @/app/en/layout.tsx

import type { Metadata } from "next";
import "../globals.css";
import Navigation from "@/components/common/Navigation_EN";
import Footer from "@/components/common/Footer_EN";

export const metadata: Metadata = {
  title:
    "GNS Trading | Solar, Construction, Medical & Industrial Chemical Supplier in Ethiopia",
  description:
    "GNS Trading supplies solar systems, construction tools, medical equipment, and industrial chemicals across Ethiopia. Reliable sourcing and nationwide delivery.",

  openGraph: {
    title:
      "GNS Trading | Solar, Construction, Medical & Industrial Chemical Supplier in Ethiopia",
    description:
      "Premium solar systems, construction tools, medical devices, and industrial chemicals for the Ethiopian market.",
    siteName: "GNS Trading",
    type: "website",
    locale: "en_US",
    images: [{ url: "/logo.png", width: 800, height: 800 }],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "GNS Trading | Solar, Construction, Medical & Industrial Chemical Supplier in Ethiopia",
    description:
      "Premium solar systems, medical equipment, construction materials, and industrial chemicals in Ethiopia.",
    images: ["/logo.png"],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">{children}</main>
      <Footer />
    </>
  );
}