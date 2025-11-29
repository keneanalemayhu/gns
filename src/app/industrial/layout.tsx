// @/app/industrial/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Industrial Chemicals in Ethiopia | Water Treatment, Food Processing, Paint Chemicals | GNS Trading",
  description:
    "High-grade industrial chemicals for water treatment, food and beverage processing, packaging additives, paint and plastic production, solvents, resins and more across Ethiopia.",
  keywords: [
    // Amharic keywords
    "የኢንዱስትሪ ኬሚካሎች ኢትዮጵያ",
    "የውሃ ማጣሪያ ኬሚካሎች ኢትዮጵያ",
    "ክሎሪን ፓውደር ኢትዮጵያ",
    "አሉሚኒየም ሰልፌት ኢትዮጵያ",
    "ካውስቲክ ሶዳ ኢትዮጵያ",
    "የምግብ ማቀነባበሪያ ኬሚካሎች ኢትዮጵያ",
    "የቀለም ኬሚካሎች ኢትዮጵያ",
    "የፕላስቲክ ተጨማሪዎች ኢትዮጵያ",
    "የኢንዱስትሪ አቅራቢ ኢትዮጵያ",

    // English keywords
    "industrial chemicals Ethiopia",
    "water treatment chemicals Ethiopia",
    "chlorine powder Ethiopia",
    "aluminum sulfate Ethiopia",
    "caustic soda Ethiopia",
    "food processing chemicals Ethiopia",
    "paint chemicals Ethiopia",
    "plastic additives Ethiopia",
    "industrial supplier Ethiopia",
  ],
  openGraph: {
    title: "Industrial Chemicals Supplier in Ethiopia | GNS Trading",
    description:
      "Reliable industrial chemicals sourced for Ethiopian industries — water treatment, manufacturing, food processing, plastics, packaging, and paint factories.",
    images: ["/logo.png"],
  },
};

export default function IndustrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
