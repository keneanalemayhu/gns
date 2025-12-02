// @/app/en/solar/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Systems in Ethiopia | Solar Panels, Inverters, Batteries | GNS Trading",
  description:
    "High-quality solar panels, inverters, batteries, and off-grid/on-grid systems for Ethiopia. Reliable solar energy solutions provided by GNS Trading.",
  openGraph: {
    title: "Solar Systems in Ethiopia | GNS Trading",
    description:
      "Solar panels, inverters, and complete solar systems for the Ethiopian market.",
    images: ["/logo.png"],
  },
};

export default function SolarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
