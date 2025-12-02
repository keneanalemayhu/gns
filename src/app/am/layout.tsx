// @/app/am/layout.tsx

import type { Metadata } from "next";
import "../globals.css";
import Navigation from "@/components/common/Navigation_AM";
import Footer from "@/components/common/Footer_AM";

export const metadata: Metadata = {
  title: "ጂ.ኤን.ኤስ ትሬዲንግ | የፀሐይ ኃይል፣ ግንባታ፣ ሕክምናና ኢንዱስትሪ ኬሚካሎች አቅራቢ",
  description:
    "ጂ.ኤን.ኤስ ትሬዲንግ በኢትዮጵያ ውስጥ የፀሐይ ኃይል ስርዓቶች፣ የግንባታ መሣሪያዎች፣ የሕክምና መሣሪያዎች፣ እና የኢንዱስትሪ ኬሚካሎች አስመጪ እና አቅራቢ ናት።",

  openGraph: {
    title: "ጂ.ኤን.ኤስ ትሬዲንግ | ታማኝ የንግድ አቅራቢ በኢትዮጵያ",
    description:
      "ከፍተኛ ጥራት ያላቸው የፀሐይ ኃይል፣ የግንባታ መሣሪያዎች፣ የሕክምና መሣሪያዎች፣ እና የኢንዱስትሪ ኬሚካሎች አቅርቦት።",
    siteName: "GNS Trading",
    type: "website",
    locale: "am_ET",
    images: [{ url: "/logo.png", width: 800, height: 800 }],
  },

  twitter: {
    card: "summary_large_image",
    title: "ጂ.ኤን.ኤስ ትሬዲንግ | የኢትዮጵያ ንግድ አቅራቢ",
    description:
      "የፀሐይ ኃይል፣ የሕክምና መሣሪያዎች፣ የግንባታ መሣሪያዎች፣ እና የኢንዱስትሪ ኬሚካሎች አስመጪ እና አቅራቢ።",
    images: ["/logo.png"],
  },
};

export default function AmLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">{children}</main>
      <Footer />
    </>
  );
}