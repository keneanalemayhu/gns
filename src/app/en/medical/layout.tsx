// @/app/en/medical/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Equipment in Ethiopia | Diagnostic & Clinical Devices | GNS Trading",
  description:
    "Reliable medical equipment and clinical devices for hospitals, clinics, and laboratories in Ethiopia. Quality assured medical supplies.",
  openGraph: {
    title: "Medical Equipment Supplier in Ethiopia | GNS Trading",
    description:
      "Medical devices and equipment imported for the Ethiopian healthcare sector.",
    images: ["/logo.png"],
  },
};

export default function MedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
