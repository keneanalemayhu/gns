// @/app/am/industrial/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "የኢንዱስትሪ ኬሚካሎች በኢትዮጵያ | የውሃ ማጣሪያ፣ የምግብ ማቀነባበሪያ፣ የቀለም ኬሚካሎች | ጂ.ኤን.ኤስ ትሬዲንግ",
  description:
    "ለ ውሃ ማጣሪያ፣ ለምግብ እና መጠጥ ማቀነባበሪያ፣ ለማሸጊያ ተጨማሪዎች፣ ለቀለም እና ለፕላስቲክ ምርት፣ ለሶልቬንቶች፣ ለሬዚኖች እና ለመሳሰሉት በመላው ኢትዮጵያ ከፍተኛ ደረጃ ያላቸው የኢንዱስትሪ ኬሚካሎች።",
  openGraph: {
    title: "የኢንዱስትሪ ኬሚካሎች አቅራቢ በኢትዮጵያ | ጂ.ኤን.ኤስ ትሬዲንግ",
    description:
      "ለኢትዮጵያ ኢንዱስትሪዎች አስተማማኝ የኢንዱስትሪ ኬሚካሎች — የውሃ ማጣሪያ፣ ማምረቻ፣ ምግብ ማቀነባበሪያ፣ ፕላስቲኮች፣ ማሸግ እና የቀለም ፋብሪካዎች።",
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
