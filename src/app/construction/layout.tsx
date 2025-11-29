// @/app/construction/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Tools in Ethiopia | Power Tools, Hand Tools | GNS Trading",
  description:
    "Premium construction tools and equipment for contractors, builders, plumbers, and electricians in Ethiopia. Power tools, hand tools, safety gear, and more.",
  keywords: [
    // Amharic keywords
    "ግንባታ ኢትዮጵያ",
    "የግንባታ መሣሪያዎች ኢትዮጵያ",
    "ኃይል ያላቸው መሣሪያዎች አዲስ አበባ",
    "የብየዳ መሣሪያዎች ኢትዮጵያ",
    "የቧንቧ መሣሪያዎች ኢትዮጵያ",
    "የሃርድዌር አቅራቢ ኢትዮጵያ",

    // English keywords
    "construction Ethiopia",
    "construction tools Ethiopia",
    "power tools Addis Ababa",
    "welding tools Ethiopia",
    "plumbing tools Ethiopia",
    "hardware supplier Ethiopia",
  ],
  openGraph: {
    title: "Construction Equipment in Ethiopia | GNS Trading",
    description:
      "High-quality construction tools and equipment imported for the Ethiopian market.",
    images: ["/logo.png"],
  },
};

export default function ConstructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
