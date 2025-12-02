/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// @/app/am/medical/page.tsx

'use client';
import Link from "next/link";

export default function MedicalPage() {
  const featuredItems = [
    {
      title: "ዲጂታል ቴርሞሜትር",
      desc: "ለክሊኒኮችና ለሆስፒታሎች ተስማሚ የሆኑ ፈጣን ንባብ ያላቸው፣ ትክክለኛ ቴርሞሜትሮች።",
      img: "/medical/thermometers.jpg",
      alt: "ቴርሞሜትር",
    },
    {
      title: "የደም ግፊት መቆጣጠሪያ (Blood Pressure Monitor)",
      desc: "ለትክክለኛ የሕሙማን ምርመራ ከፍተኛ ትክክለኛነት ያላቸው የደም ግፊት መቆጣጠሪያዎች።",
      img: "/medical/bpm.jpg",
      alt: "የደም ግፊት መቆጣጠሪያ",
    },
    {
      title: "የላብራቶሪ ስብስብ",
      desc: "ለምርመራ ላብራቶሪዎች እና ለምርምር ማዕከላት አስፈላጊ መሣሪያዎች።",
      img: "/medical/lab.jpg",
      alt: "የላብራቶሪ መሣሪያዎች",
    },
  ];

  const categories = {
    diagnostic: {
      title: "የምርመራ መሣሪያዎች",
      images: ["/medical/thermometers.jpg", "/medical/glucometers.jpg"],
      items: [
        "ዲጂታል ቴርሞሜትሮች",
        "የደም ግፊት መቆጣጠሪያዎች",
        "ግሉኮሜትሮች",
        "Pulse Oximeters",
        "Stethoscopes",
      ],
    },

    patientCare: {
      title: "የሕሙማን እንክብካቤ",
      images: ["/medical/patient_care.jpg", "/medical/random.jpg"],
      items: [
        "ኔቡላይዘሮች (Nebulizers)",
        "የመምጠጫ ማሽኖች (Suction Machines)",
        "የኦክስጂን ማጎሪያዎች (Oxygen Concentrators)",
        "ተሽከርካሪ ወንበሮች (Wheelchairs)",
        "የሆስፒታል አልጋዎች",
      ],
    },

    consumables: {
      title: "ፍጆታ ዕቃዎች",
      images: ["/medical/consumables.jpg", "/medical/consumables_2.jpg"],
      items: [
        "የምርመራ ጓንቶች",
        "የቀዶ ጥገና ጓንቶች",
        "መርፌዎች (Syringes)",
        "የአልኮል መጥረጊያዎች",
        "የሙከራ ማሰሪያዎች",
      ],
    },

    infectionControl: {
      title: "የበሽታ መከላከል",
      images: [
        "/medical/infection_control.jpg",
        "https://images.pexels.com/photos/8376171/pexels-photo-8376171.jpeg",
      ],
      items: [
        "ጭምብሎች",
        "ማምከኛዎች (Sanitizers)",
        "ፀረ-ተባይ መድሃኒቶች (Disinfectants)",
        "ሊጣሉ የሚችሉ ጋውኖች (Disposable Gowns)",
        "የፊት ጭምብሎች",
      ],
    },

    labBasics: {
      title: "የላብራቶሪ መሠረታዊ ነገሮች",
      images: ["/medical/centrifuge_machines.jpg", "/medical/microscope.jpg"],
      items: [
        "የሙከራ ዕቃዎች",
        "የናሙና ኩባያዎች",
        "የማሽከርከር ማሽኖች (Centrifuge Machines)",
        "ማይክሮስኮፖች",
      ],
    },
  };

  type CategoryKeys = keyof typeof categories;

  const categoryOrder: CategoryKeys[] = [
    "diagnostic",
    "patientCare",
    "consumables",
    "infectionControl",
    "labBasics",
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
      {/* HERO */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/medical.jpg"
          alt="የሕክምና መሣሪያዎች"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            የሕክምና መሣሪያዎችና አቅርቦቶች
          </h1>

          <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow">
            ለሆስፒታሎች፣ ክሊኒኮች፣ ፋርማሲዎች እና በመላው ኢትዮጵያ ለሚገኙ ግብረሰናይ ድርጅቶች (NGOs)
            አስተማማኝ የምርመራ መሳሪያዎች፣ የሕሙማን እንክብካቤ መሣሪያዎች፣ ፍጆታ ዕቃዎች እና የላብራቶሪ መሠረታዊ ነገሮች።
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

        {/* ABOUT */}
        <section>
          <h2 className="text-3xl font-bold mb-6">ስለ ሕክምና ክፍላችን</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-md">
              <img
                src="/medical/about.jpg"
                alt="የሕክምና መሣሪያዎች"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                ጂ.ኤን.ኤስ ትሬዲንግ ከተረጋገጡ ዓለም አቀፍ አምራቾች የሚመጡ ከፍተኛ ጥራት ያላቸውን
                የሕክምና መሣሪያዎች ያቀርባል። በኢትዮጵያ ውስጥ ለሆስፒታሎች፣ ለክሊኒኮች፣ ለፋርማሲዎች፣
                ለምርመራ ላብራቶሪዎች፣ ለግብረሰናይ ድርጅቶች እና ለቤት ውስጥ እንክብካቤ ሰጪዎች
                አገልግሎት እንሰጣለን።
              </p>

              <p>
                የእኛ የምርት ዝርዝር የምርመራ መሳሪያዎችን፣ የግል መከላከያ አልባሳት (PPE)፣
                ፍጆታ ዕቃዎች፣ የኦክስጂን ስርዓቶች፣ የሕሙማን እንክብካቤ መሣሪያዎች እና የላብራቶሪ
                መሠረታዊ ነገሮችን ያካትታል።
              </p>

              <p>
                በአስተማማኝነት፣ በተመጣጣኝ ዋጋ እና በፍጥነት አቅርቦት ላይ እናተኩራለን—ደንበኞቻችን
                ሊተማመኑባቸው የሚችሉ የሕክምና ምርቶችን መቀበላቸውን እናረጋግጣለን።
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section>
          <h2 className="text-3xl font-bold mb-10">ተለይተው የቀረቡ የሕክምና ምርቶች</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredItems.map((item) => (
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

        {/* WHY CHOOSE US */}
        <section>
          <h2 className="text-3xl font-bold mb-6">እኛን ለምን ይመርጣሉ?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "የተረጋገጡ መሣሪያዎች",
                desc: "ሁሉም የሕክምና መሣሪያዎች ዓለም አቀፍ የደህንነት እና የሙከራ ደረጃዎችን ያሟላሉ።",
              },
              {
                title: "ሰፊ የጤና እንክብካቤ ዝርዝር",
                desc: "ምርመራ፣ የሕሙማን እንክብካቤ፣ የግል መከላከያ አልባሳት፣ ፍጆታ ዕቃዎች፣ የላብራቶሪ መሣሪያዎች እና ሌሎችም።",
              },
              {
                title: "በሆስፒታሎች እና በግብረሰናይ ድርጅቶች የታመኑ",
                desc: "ለመንግሥት/ለግል ሆስፒታሎች እና ለሰብአዊ መብት ተሟጋች ድርጅቶች አስተማማኝ አቅርቦት።",
              },
              {
                title: "ፈጣን አቅርቦት በመላ አገሪቱ",
                desc: "ወደ አዲስ አበባ እና ወደ ሁሉም ክልሎች ቀልጣፋ ሎጂስቲክስ።",
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

        {/* CATEGORIES */}
        <section>
          <h2 className="text-3xl font-bold mb-6">የሕክምና መሣሪያዎች ምድቦች</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categoryOrder.map((key) => {
              const cat = categories[key];

              return (
                <div
                  key={key}
                  className="bg-white dark:bg-neutral-800 p-6 rounded-xl border dark:border-neutral-700 shadow-sm"
                >
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <img
                      src={cat.images[0]}
                      className="h-24 w-full rounded-lg object-cover"
                    />
                    <img
                      src={cat.images[1]}
                      className="h-24 w-full rounded-lg object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{cat.title}</h3>

                  <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {cat.items.map((item: string) => (
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
            የሕክምና አቅርቦቶች ያስፈልግዎታል?
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            ለዋጋ ጥያቄዎች፣ ለመገኘት እና ለጅምላ ትዕዛዞች ያግኙን። በመላ አገሪቱ ለሆስፒታሎች፣ ክሊኒኮች፣
            ፋርማሲዎች እና ለግብረሰናይ ድርጅቶች አስተማማኝ አቅርቦት እናደርጋለን።
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
