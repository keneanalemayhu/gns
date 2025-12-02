/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// @/app/am/construction/page.tsx

'use client';
import Link from "next/link";

export default function ConstructionPage() {
  const featuredItems = [
    {
      title: "የኤሌክትሪክ ድሪል (Electric Drill)",
      desc: "ለዕለታዊ የሥራ ቦታ አገልግሎት የተገነቡ ከፍተኛ ኃይል ያላቸው የመቆፈሪያ መሣሪያዎች።",
      img: "/construction/drill.jpg",
    },
    {
      title: "አንግል ግራይንደር (Angle Grinder)",
      desc: "ለብረት፣ ለድንጋይ እና ለኮንክሪት ተስማሚ የሆነ የመቁረጫ እና የማጥራት መሣሪያ።",
      img: "/construction/angle_grinder.jpg",
    },
    {
      title: "የብየዳ ማሽን (Welding Machine)",
      desc: "ለብረት ሥራ (steel fabrication) የተገነቡ ሙያዊ የብየዳ መሣሪያዎች።",
      img: "https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg",
    },
  ];

  const categories = {
    powerTools: {
      title: "ኃይል ያላቸው መሣሪያዎች",
      images: ["/construction/angle_grinder.jpg", "/construction/power_tools.jpg"],
      items: ["ድሪሎች (Drills)", "አንግል ግራይንደሮች (Angle Grinders)", "ብየዳ ማሽኖች"],
    },

    safety: {
      title: "ደህንነት እና የግል መከላከያ አልባሳት (PPE)",
      images: [
        "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
        "https://images.pexels.com/photos/2566472/pexels-photo-2566472.jpeg",
      ],
      items: [
        "የራስ ቁር (Helmets)",
        "የሥራ ጓንቶች",
        "አንጸባራቂ ልብሶች (Reflective Vests)",
      ],
    },

    electrical: {
      title: "የኤሌክትሪክ አቅርቦቶች",
      images: ["/construction/switches.webp", "/construction/extension.png"],
      items: ["መቀየሪያዎች እና ሶኬቶች", "ኤል.ኢ.ዲ. አምፖሎች", "ኤክስቴንሽን ኬብሎች"],
    },

    plumbing: {
      title: "ቧንቧ እና መገጣጠሚያዎች (Fittings)",
      images: ["/construction/pvc_ppr.webp", "/construction/pipe.webp"],
      items: ["ፒ.ቪ.ሲ/ፒ.ፒ.አር መገጣጠሚያዎች", "ቫልቮች", "የቧንቧ መለዋወጫዎች"],
    },

    handTools: {
      title: "የእጅ መሣሪያዎች",
      images: [
        "/construction/hammers.jpg",
        "/construction/screwdrivers_wrenches.jpg",
      ],
      items: [
        "መዶሻዎች",
        "ስክሩድራይቨሮች / መንጃዎች (Wrenches)",
        "ደረጃ መለኪያ (Levels) እና ማንኪያ (Trowels)",
      ],
    },

    painting: {
      title: "የቀለም መለዋወጫዎች",
      images: ["/construction/roller_tray.jpg", "/construction/brush.jpg"],
      items: ["ሮለሮች እና ትሬይ", "ብሩሾች", "የቀለም ቀጂ ቴፕ"],
    },
  };

  const categoryOrder: (keyof typeof categories)[] = [
    "powerTools",
    "safety",
    "electrical",
    "plumbing",
    "handTools",
    "painting",
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
      {/* HERO */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg"
          alt="የግንባታ መሣሪያዎች"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            የግንባታ መሣሪያዎች አቅርቦት
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow">
            ለኢትዮጵያ ግንባታ ዘርፍ ከፍተኛ ጥራት ያላቸው መሣሪያዎች፣ የደህንነት አልባሳት፣ የኤሌክትሪክ አቅርቦቶች፣ የቧንቧ እቃዎች እና ሙያዊ መገልገያዎች።
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* ABOUT */}
        <section>
          <h2 className="text-3xl font-bold mb-6">ስለ ግንባታ ክፍላችን</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/construction/full.jpg"
                className="w-full h-full object-cover rounded-xl"
                alt="የግንባታ ሥራ"
              />
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                ጂ.ኤን.ኤስ ትሬዲንግ ከቻይና፣ ቱርክ እና አውሮፓ ከታመኑ አምራቾች የሚመጡ ሙሉ የግንባታ መሣሪያዎችን እና
                ቁሳቁሶችን ያቀርባል።
              </p>
              <p>
                በመላው ኢትዮጵያ ለኮንትራክተሮች፣ ለግንባታ ባለሙያዎች፣ ለቧንቧ ሰራተኞች፣ ለኤሌክትሪሻኖች፣ ለብየዳ
                ባለሙያዎች እና ለሃርድዌር ሱቆች ዘላቂ መሣሪያዎችን እናቀርባለን።
              </p>
              <p>
                ከኃይል መሣሪያዎች እስከ ደህንነት አልባሳት ድረስ፣ በአስተማማኝ ጥራት እና በፍጥነት አቅርቦት ላይ
                እናተኩራለን።
              </p>
              <p>
                ተልዕኳችን ለዓፍሪካ የሥራ ሁኔታዎች ተብለው የተሠሩ ዋና ዋና፣ ተመጣጣኝ እና አስተማማኝ መሣሪያዎችን
                በመጠቀም የኢትዮጵያ ግንባታ ኢንዱስትሪ እንዲያድግ መርዳት ነው።
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section>
          <h2 className="text-3xl font-bold mb-10">ተለይተው የቀረቡ የግንባታ ምርቶች</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredItems.map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700"
              >
                <img
                  src={item.img}
                  className="h-48 w-full object-cover rounded-lg mb-4"
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
          <h2 className="text-3xl font-bold mb-6">የግንባታ መሣሪያዎች ምድቦች</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categoryOrder.map((key) => {
              const cat = categories[key];

              return (
                <div
                  key={key}
                  className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700"
                >
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {cat.images.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        className="h-24 w-full rounded-lg object-cover"
                      />
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{cat.title}</h3>

                  <ul className="list-disc ml-5 space-y-2 text-sm">
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">
            የግንባታ አቅርቦቶች ያስፈልግዎታል?
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            ለዋጋ ጥያቄዎች፣ ለመገኘት እና ለጅምላ ትዕዛዞች ያግኙን። በመላ አገሪቱ
            ለኮንትራክተሮች፣ ለግንባታ ባለሙያዎች፣ ለሃርድዌር ሱቆች እና ለፕሮጀክት ቦታዎች
            አስተማማኝ አቅርቦት እናደርጋለን።
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
