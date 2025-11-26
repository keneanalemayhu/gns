// @/app/contact/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact GNS Trading | Solar, Construction & Medical Supplier in Ethiopia",
  description:
    "Get in touch with GNS Trading for solar systems, construction tools, medical devices and industrial solutions in Ethiopia.",
  keywords: [
    "contact GNS Trading",
    "GNS Trading Ethiopia",
    "solar supplier Ethiopia",
    "construction supplier Ethiopia"
  ],
  openGraph: {
    title: "Contact GNS Trading",
    description:
      "Reach out to GNS Trading for product inquiries, quotations, and partnerships.",
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
