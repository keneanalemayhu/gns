/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// @/app/am/industrial/page.tsx

'use client';
import Link from "next/link";

export default function IndustrialPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
      {/* HERO */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/industrial/industrial_chemicals.jpg"
          alt="የኢንዱስትሪ ኬሚካሎች"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            የኢንዱስትሪ እና ኬሚካል አቅርቦት
          </h1>

          <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow">
            ለ ውሃ ማጣሪያ፣ ለምግብ ማቀነባበሪያ፣ ለማምረቻ፣ ለማሸግ፣ ለቀለም ምርት፣ ለፕላስቲኮች እና ለሌሎችም ከፍተኛ ደረጃ ያላቸው የኢንዱስትሪ ኬሚካሎች።
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* ABOUT SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-6">ስለ ኬሚካል ክፍላችን</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-md">
              <img
                src="/industrial/hero.jpg"
                alt="የኢንዱስትሪ ኬሚካሎች"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>ጂ.ኤን.ኤስ ትሬዲንግ ከታመኑ ዓለም አቀፍ አምራቾች የሚመጡ ሰፋፊ የኢንዱስትሪ ደረጃ ያላቸው ኬሚካሎችን ያቀርባል።</p>
              <p>በኢትዮጵያ ውስጥ ፋብሪካዎችን፣ የውሃ ማጥለያ ተቋማትን፣ የምግብ አምራቾችን፣ የማሸጊያ ኢንዱስትሪዎችን፣ የቀለም ፋብሪካዎችን እና የፕላስቲክ አምራቾችን እንደግፋለን።</p>
              <p>የእኛ ኬሚካሎች ጥብቅ የዓለም አቀፍ የጥራት ደረጃዎችን ያሟላሉ፤ ይህም በሁሉም የኢንዱስትሪ አጠቃቀሞች ውስጥ ደህንነትን፣ አፈጻጸምን እና ቅልጥፍናን ያረጋግጣል።</p>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section>
          <h2 className="text-3xl font-bold mb-10">ተለይተው የቀረቡ የኢንዱስትሪ ኬሚካሎች</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "ክሎሪን ፓውደር",
                desc: "በውሃ ማጣሪያ፣ በበሽታ መከላከል እና በማንጻት ሂደቶች ውስጥ በሰፊው ጥቅም ላይ ይውላል።",
                img: "/industrial/chlorine_powder.jpg",
                alt: "ክሎሪን ፓውደር",
              },
              {
                title: "አሉሚኒየም ሰልፌት",
                desc: "ለ ውሃ ማንጻት እና ለኢንዱስትሪ ማቀነባበሪያ አስፈላጊ የሆነ ኮአጉላንት።",
                img: "/industrial/aluminum_sulfate.jpg",
                alt: "አሉሚኒየም ሰልፌት",
              },
              {
                title: "ካውስቲክ ሶዳ (NaOH)",
                desc: "ለማምረቻ፣ ለማጽዳት እና ለማጥራት ከፍተኛ ንጽህና ያለው ሶዲየም ሃይድሮክሳይድ።",
                img: "/industrial/naoh.jpg",
                alt: "ካውስቲክ ሶዳ",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl border dark:border-neutral-700 shadow-sm"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-48 w-full rounded-lg object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section>
          <h2 className="text-3xl font-bold mb-6">የኢንዱስትሪ ኬሚካል ምድቦች</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 place-items-center">
            {[
              {
                key: "waterTreatment",
                title: "የውሃ ማጣሪያ ኬሚካሎች",
                images: [
                  "/industrial/chlorine_powder.jpg",
                  "/industrial/aluminum_sulfate.jpg",
                ],
                items: ["ክሎሪን ፓውደር", "አሉሚኒየም ሰልፌት", "ካውስቲክ ሶዳ (NaOH)"],
              },
              {
                key: "paintPlastic",
                title: "የቀለም እና የፕላስቲክ ኬሚካሎች",
                images: ["/industrial/resins.jpg", "/industrial/colorants.jpg"],
                items: ["ሬዚኖች", "ቀለሞች", "ሶልቬንቶች"],
              },
            ].map((cat) => (
              <div
                key={cat.key}
                className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-md border dark:border-neutral-700 w-full max-w-xl"
              >
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <img
                    src={cat.images[0]}
                    className="h-32 w-full rounded-lg object-cover"
                  />
                  <img
                    src={cat.images[1]}
                    className="h-32 w-full rounded-lg object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-4">{cat.title}</h3>

                <ul className="list-disc ml-6 space-y-2 text-base">
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">
            የኢንዱስትሪ ኬሚካሎች ያስፈልጎታል?
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            ለዋጋ ጥያቄዎች፣ ለቴክኒካል መረጃዎች እና ለጅምላ የኢንዱስትሪ ትዕዛዞች ያግኙን። በመላ አገሪቱ ለፋብሪካዎች፣ ለውሃ ተቋማት እና ለማቀነባበሪያ ተቋማት አቅርቦት እናደርጋለን።
          </p>

          <Link
            href="/am/contact"
            className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transition text-lg"
          >
            ዛሬውኑ ያግኙን
          </Link>
        </section>
      </div>
    </main>
  );
}
