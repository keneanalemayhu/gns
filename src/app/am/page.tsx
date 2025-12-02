/* eslint-disable @next/next/no-img-element */
// @/app/am/page.tsx

"use client";
import Link from "next/link";

export default function AmHomePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">

      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/hero.png"
          alt="የጂ.ኤን.ኤስ ትሬዲንግ ዋና ገጽ ምስል"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            ንግድን ማቅለል ዋጋን ማጎልበት
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            ለኢትዮጵያ እያደገ ያለ ገበያ የተገነቡ ጥራት ያላቸውን የሶላር ስሪቶችን፣
            የግንባታ መሣሪያዎች፣ የህክምና መሣሪያዎች እና የኢንዱስትሪ ኬሚካሎችን
            ማስመጣት እና ማቅረብ።
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* WHAT WE DO */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-8">
            ምን እንሰራለን
          </h2>

          <p className="text-lg max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-300 mb-12">
            ጂ.ኤን.ኤስ ትሬዲንግ በኢትዮጵያ ውስጥ በፍጥነት እያደገ ያለ አስመጪ እና 
            አከፋፋይ ነው—ለቢዝነሶች፣ ለኤንጂኦዎች፣ ለኮንትራክተሮች እና 
            ለግል ገዢዎች የሶላር ስሪቶችን፣ የግንባታ ማሽነሪዎችን፣ የሕክምና 
            መሣሪያዎችን እና የኢንዱስትሪ ኬሚካል ምርቶችን ያቀርባል።
          </p>

          <div className="grid md:grid-cols-3 gap-10 place-items-center">

            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border dark:border-neutral-700 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">ዓለም አቀፍ ምንጭ ፍለጋ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                ከፍተኛ ጥራት ያላቸውን ምርቶች በተወዳዳሪ ዋጋ ለማስጠበቅ፣ በዓለም ዙሪያ ካሉ ታማኝ አምራቾች ጋር እንተባበራለን።
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border dark:border-neutral-700 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">ማስመጣት እና ሎጂስቲክስ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                ንብረቶችን በፍጥነት ወደ አዲስ አበባ እና ክልል ገበያዎች ማድረስ።
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border dark:border-neutral-700 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">ጅምላ እና ችርቻሮ አቅርቦት</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                ለግለሰብ ደንበኞች እና ለብዛት ገዢዎች ተስማሚ አቅርቦት።
              </p>
            </div>

          </div>
        </section>

        {/* DIVISIONS */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">የእኛ ክፍሎች</h2>

          <div className="grid md:grid-cols-4 gap-10">

            {/* SOLAR */}
            <Link
              href="/am/solar"
              className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border dark:border-neutral-700 shadow-sm hover:shadow-xl transition"
            >
              <div className="h-40 w-full rounded-lg mb-4 overflow-hidden">
                <img
                  src="/solar.jpg"
                  alt="የሶላር ክፍል"
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">የሶላር</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                ፓነሎች • ባትሪዎች • ኢንቨርተሮች • መጫኛ
              </p>
            </Link>

            {/* Other divisions */}
            <Link
              href="/am/construction"
              className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border dark:border-neutral-700 shadow-sm hover:shadow-xl transition"
            >
              <div className="h-40 w-full rounded-lg mb-4 overflow-hidden">
                <img src="/construction.png" alt="ግንባታ" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">የግንባታ መሣሪያዎች</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                ማደባለቂያዎች • ማጨቂያዎች/መጠቅጠቂያዎች • የኃይል መሣሪያዎች • መበየጃ ማሽኖች
              </p>
            </Link>

            <Link
              href="/am/medical"
              className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border dark:border-neutral-700 shadow-sm hover:shadow-xl transition"
            >
              <div className="h-40 w-full rounded-lg mb-4 overflow-hidden">
                <img src="/medical.jpg" alt="ሕክምና" className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">የሕክምና መሣሪያዎች</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Diagnostics • የላብ መሣሪያዎች • የደህንነት አቅርቦቶች
              </p>
            </Link>

            <Link
              href="/am/industrial"
              className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border dark:border-neutral-700 shadow-sm hover:shadow-xl transition"
            >
              <div className="h-40 w-full rounded-lg mb-4 overflow-hidden">
                <img
                  src="/industrial_chemicals.jpg"
                  alt="የኢንዱስትሪ ኬሚካሎች"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">የኢንዱስትሪ ኬሚካሎች</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                የውሃ ማጣሪያ • የቀለም • የፕላስቲክ ኬሚካሎች
              </p>
            </Link>

          </div>
        </section>

        {/* PROCESS */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-10">እንዴት እንሰራለን</h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              ["1. ማስመጣት", "የሶላር ምርቶችን በቀጥታ ከአምራቾች እናመጣለን።"],
              ["2. ክሊራንስ", "እቃዎች በደህና እና በሰዓቱ ኢትዮጵያ መድረሳቸውን እናረጋግጣለን።"],
              ["3. ማዋቀር", "ተስማሚ ማሸጊያ እና አቀማመጥ እናዘጋጃለን።"],
              ["4. መሸጥ", "በመላው ኢትዮጵያ ለደንበኞች እናቀርባለን።"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border dark:border-neutral-700"
              >
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST */}
        <section className="mt-32 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            የእርስዎ ታማኝ የኢትዮጵያ አቅራቢ
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            ጠንካራ የፋብሪካዎች እና የሎጂስቲክስ አጋሮች ኔትዎርክ በመጠቀም፣ ፈጣን አቅርቦትን
            እና ከፍተኛ ጥራት እናረጋግጣለን።
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            ግልጽ ንግድ እና ረጅም ጊዜ ሽርክናዎችን እናምናለን።
          </p>
        </section>

      </div>
    </main>
  );
}
