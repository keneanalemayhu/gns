// @/app/am/contact/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ጂኤንኤስ ትሬዲንግን ያግኙ | የሶላር፣ ግንባታ እና ሕክምና አቅራቢ በኢትዮጵያ",
  description:
    "በኢትዮጵያ ለሶላር ስርዓቶች፣ ለግንባታ መሣሪያዎች፣ ለሕክምና መሣሪያዎች እና ለኢንዱስትሪ መፍትሄዎች ጂ.ኤን.ኤስ ትሬዲንግን ያግኙ።",
  openGraph: {
    title: "ጂኤንኤስ ትሬዲንግን ያግኙ",
    description:
      "ለምርት ጥያቄዎች፣ ለዋጋ አቅርቦቶች እና ለሽርክና ግንኙነቶች ጂኤንኤስ ትሬዲንግን ያነጋግሩ።",
    images: ["/logo.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}