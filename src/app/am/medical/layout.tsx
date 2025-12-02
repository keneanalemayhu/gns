// @/app/am/medical/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "የሕክምና መሣሪያዎች በኢትዮጵያ | የምርመራ እና ክሊኒካዊ መሣሪያዎች | ጂ.ኤን.ኤስ ትሬዲንግ",
  description:
    "ለሆስፒታሎች፣ ለክሊኒኮች እና ለላብራቶሪዎች በኢትዮጵያ ውስጥ አስተማማኝ የሕክምና መሣሪያዎችና ክሊኒካዊ መሣሪያዎች። ጥራታቸው የተረጋገጠ የሕክምና አቅርቦቶች።",
  openGraph: {
    title: "የሕክምና መሣሪያዎች አቅራቢ በኢትዮጵያ | ጂ.ኤን.ኤስ ትሬዲንግ",
    description:
      "ለኢትዮጵያ የጤና እንክብካቤ ዘርፍ ከውጭ የገቡ የሕክምና መሣሪያዎችና ቁሳቁሶች።",
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
