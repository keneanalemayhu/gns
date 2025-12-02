/* eslint-disable @next/next/no-img-element */
// @/app/am/solar/page.tsx

'use client';
import Link from "next/link";

export default function SolarPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
      {/* HERO */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/solar/solar_panel.png"
          alt="የሶላር ፓነሎች"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            የሶላር መፍትሄዎች
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow">
            ለቤቶች፣ ለቢዝነሶች፣ ለእርሻ ቦታዎች እና ለኤሌክትሪክ መኪናዎች (EV) ኃይል መሙያ ጣቢያዎች ከፍተኛ ብቃት ያላቸው የሶላር ስርዓቶች።
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* ABOUT */}
        <section>
          <h2 className="text-3xl font-bold mb-6">ስለ ጂ.ኤን.ኤስ ትሬዲንግ</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="w-full h-72 rounded-xl overflow-hidden">
              <img
                src="/solar/solar_install.jpg"
                alt="የሶላር ተከላ ቡድን"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                እኛ በጂ.ኤን.ኤስ ትሬዲንግ፣ የወደፊቱን ኃይል የሚያቀብሉ
                ከፍተኛ ጥራት ያላቸውን የሶላር መፍትሄዎችን በማቅረብ ቁርጠኞች ነን።
              </p>
              <p>
                ተልዕኳችን የሶላርን ለሁሉም ሰው ተደራሽ፣ በተመጣጣኝ ዋጋ
                እና ዘላቂ ማድረግ ነው።
              </p>
              <p>
                ጂ.ኤን.ኤስ ትሬዲንግ በኢትዮጵያ ውስጥ የሶላር ኢንዱስትሪ
                ውስጥ የታመነ አጋርዎ ነው።
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section>
          <h2 className="text-3xl font-bold mb-6">እኛን ለምን ይመርጣሉ?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "ጥራት ያላቸው ምርቶች",
                desc: "ከታመኑ ዓለም አቀፍ አቅራቢዎች የተገኙ ፓነሎች እና መሣሪያዎች።",
              },
              {
                title: "የባለሙያ ተከላ እና ጥገና",
                desc: "የተረጋገጡ ባለሙያዎች የፍጥነት እና ማስተማር አገልግሎት።",
              },
              {
                title: "ዘላቂነት",
                desc: "ወደ ታዳሽ እና ንጹህ ኃይል የሚመራ አፈጻጸም።",
              },
              {
                title: "ተመጣጣኝ ዋጋ",
                desc: "ዋጋ ቆጣቢ ፓኬጆች እና ከፍተኛ አፈጻጸም ያላቸው ስርዓቶች።",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CATALOGUE */}
        <section>
          <h2 className="text-3xl font-bold mb-6">የሶላር ምርት ዝርዝር</h2>

          <div className="space-y-10 text-lg leading-relaxed">
            <p>
              የሶላር ፓነሎች፣ መገጣጠሚያ ስርዓቶች፣ ኢንቨርተሮች እና ባትሪዎች
              የሚካተቱ የተሟላ ዝርዝር።
            </p>

            <ul className="list-disc ml-6 space-y-2">
              {[
                "የሶላር ፓነሎች",
                "የመገጣጠሚያ ስርዓቶች",
                "የተዳፋት ጣሪያ መገጣጠሚያ",
                "የEV መኪና ማቆሚያ ስርዓት",
                "ምሥራቅ-ምዕራብ መሬት ስርዓት",
                "ኢንቨርተሮች እና ባትሪዎች",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* OUR PRODUCTS */}
        <section>
          <h2 className="text-3xl font-bold mb-10">የእኛ ምርቶች</h2>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* TILT ROOF */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 shadow-sm p-6">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src="/solar/solar_tilt.png"
                  alt="የሶላር ተዳፋት ጣሪያ"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">
                የሶላር ተዳፋት ጣሪያ መገጣጠሚያ
              </h3>

              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>ለመኖሪያ እና ለንግድ ሕንፃዎች ተስማሚ</li>
                <li>አንግል የሚስተካከል</li>
                <li>አሉሚኒየም ቁሳቁስ</li>
                <li>ከ10°–30° የሚስተካከል</li>
              </ul>
            </div>

            {/* EV CARPORT */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 shadow-sm p-6">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <img
                  src="/solar/car_port.png"
                  alt="የሶላር መኪና ማቆሚያ መገጣጠሚያ"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/solar/car_port2.png"
                  alt="የሶላር መኪና ማቆሚያ አማራጭ እይታ"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">
                የሶላር መኪና ማቆሚያ መገጣጠሚያ (EV Carport)
              </h3>

              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>ሁለት ተግባር — ጥላ + ኃይል ማመንጨት</li>
                <li>የአሉሚኒየም ፍሬም</li>
                <li>ፈጣን ተከላ</li>
                <li>የተሽከርካሪ ጥበቃ</li>
              </ul>
            </div>

            {/* EAST-WEST */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 shadow-sm p-6">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <img
                  src="/solar/east_west.png"
                  alt="ምሥራቅ-ምዕራብ መሬት ስርዓት"
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/solar/east_west2.jpg"
                  alt="ምሥራቅ-ምዕራብ መሬት ስርዓት አማራጭ"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">
                ምሥራቅ-ምዕራብ የመሬት መገጣጠሚያ
              </h3>

              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>የተከፈቱ እርሻ ቦታዎች ላይ ተስማሚ</li>
                <li>የምሥራቅ-ምዕራብ አቅጣጫ ጥራት</li>
                <li>ፈጣን ተከላ</li>
                <li>የጋለቫናይዝድ ብረት</li>
              </ul>
            </div>
          </div>
        </section>

        {/* INVERTERS */}
        <section>
          <h2 className="text-3xl font-bold mb-6">ኢንቨርተሮች እና ባትሪዎች</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="grid grid-cols-2 gap-3">
              <div className="w-full h-72 rounded-xl overflow-hidden">
                <img
                  src="/solar/battery.png"
                  alt="የሶላር ባትሪ"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full h-72 rounded-xl overflow-hidden">
                <img
                  src="/solar/inverter.png"
                  alt="የሶላር ኢንቨርተር"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <ul className="list-disc ml-6 space-y-3 text-lg leading-relaxed">
              <li>በሌሊት የኃይል አሠራር ይደግፋል</li>
              <li>በተለያዩ ሞዴሎች ይገኛል</li>
              <li>ሊቲየም ባትሪ + ንጹህ-ሳይን ኢንቨርተር</li>
            </ul>
          </div>
        </section>

        {/* SERVICES */}
        <section>
          <h2 className="text-3xl font-bold mb-6">የእኛ አገልግሎቶች</h2>

          <p className="text-lg">
            ተከላ፣ ጥገና እና የስርዓት እቅድ የሚያካትቱ ሙሉ የሶላር መፍትሄዎች።
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-4">የተከላ አገልግሎቶች</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>ብጁ ንድፍ እና የስርዓት እቅድ</li>
                <li>የተረጋገጠ ቴክኒሻን ተከላ</li>
                <li>የአካባቢ ደንቦች መከበር</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-4">የጥገና አገልግሎች</h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>መደበኛ ፍተሻዎች</li>
                <li>የፓነል ጽዳት</li>
                <li>ችግር መፍታት እና አስፈላጊ ጥገና</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section>
          <h2 className="text-3xl font-bold mb-6">ቁልፍ ነጥቦች</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "ሙሉ አገልግሎት — አቅርቦት፣ ተከላ እና ድጋፍ",
              "በዘላቂነት ላይ ትኩረት",
              "ዝቅተኛ የካርበን አሻራ",
              "የሰለጠኑ የሶላር ባለሙያዎች",
            ].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl border dark:border-neutral-700 shadow-sm"
              >
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">የሶላር አቅርቦቶች ያስፈልግዎታል?</h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            ለዋጋ ጥያቄዎች፣ ለመገኘት እና ለጅምላ ትዕዛዞች ያግኙን።
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
