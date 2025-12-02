// @/app/am/construction/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "የግንባታ መሣሪያዎች በኢትዮጵያ | ኃይል ያላቸው መሣሪያዎች፣ የእጅ መሣሪያዎች | ጂ.ኤን.ኤስ ትሬዲንግ",
  description:
    "ለኮንትራክተሮች፣ ለግንባታ ባለሙያዎች፣ ለቧንቧ ሰራተኞች እና ለኤሌክትሪሻኖች በኢትዮጵያ ውስጥ ዋና ዋና የግንባታ መሣሪያዎችና ቁሳቁሶች። ኃይል ያላቸው መሣሪያዎች፣ የእጅ መሣሪያዎች፣ የደህንነት አልባሳት እና ሌሎችም።",
  openGraph: {
    title: "የግንባታ መሣሪያዎች በኢትዮጵያ | ጂ.ኤን.ኤስ ትሬዲንግ",
    description:
      "ለኢትዮጵያ ገበያ ከውጭ የገቡ ከፍተኛ ጥራት ያላቸው የግንባታ መሣሪያዎችና ቁሳቁሶች።",
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
