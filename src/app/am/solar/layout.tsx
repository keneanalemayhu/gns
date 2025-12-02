// @/app/am/solar/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "የሶላር ስርዓቶች በኢትዮጵያ | የፀሐይ ፓነሎች፣ ኢንቨርተሮች፣ ባትሪዎች | ጂ.ኤን.ኤስ ትሬዲንግ",
  description:
    "ከፍተኛ ጥራት ያላቸው የሶላር ፓነሎች፣ ኢንቨርተሮች፣ ባትሪዎች እና ከግሪድ-ውጪ/ከግሪድ-ጋር የተገናኙ ስርዓቶች ለኢትዮጵያ። በጂ.ኤን.ኤስ ትሬዲንግ የቀረቡ አስተማማኝ የሶላር መፍትሄዎች።",
  openGraph: {
    title: "የሶላር ስርዓቶች በኢትዮጵያ | ጂ.ኤን.ኤስ ትሬዲንግ",
    description:
      "ለኢትዮጵያ ገበያ የሶላር ፓነሎች፣ ኢንቨርተሮች እና የተሟሉ የሶላር ስርዓቶች።",
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
