/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// @/app/en/industrial/page.tsx

'use client';
import Link from "next/link";

export default function IndustrialPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">

      {/* HERO */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/industrial/industrial_chemicals.jpg"
          alt="Industrial Chemicals"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Industrial & Chemical Supply
          </h1>

          <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow">
            High-grade industrial chemicals for water treatment, food processing,
            manufacturing, packaging, paint production, plastics, and more.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

        {/* ABOUT SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-6">About Our Chemical Division</h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="w-full h-80 rounded-xl overflow-hidden shadow-md">
              <img
                src="/industrial/hero.jpg"
                alt="Industrial Chemicals"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                GNS Trading supplies a wide range of industrial-grade chemicals sourced
                from trusted global manufacturers. We support factories, water purification
                plants, food producers, packaging industries, paint factories, and plastic
                manufacturers across Ethiopia.
              </p>

              <p>
                Our chemicals meet strict international quality standards, ensuring safety,
                performance, and efficiency in all industrial applications.
              </p>

              <p>
                With fast delivery and competitive pricing, GNS Trading remains a reliable
                partner for all industrial chemical sourcing needs.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section>
          <h2 className="text-3xl font-bold mb-10">Featured Industrial Chemicals</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Chlorine Powder",
                desc: "Used widely in water treatment, disinfection, and purification processes.",
                img: "/industrial/chlorine_powder.jpg",
                alt: "Chlorine Powder",
              },
              {
                title: "Aluminum Sulfate",
                desc: "Essential coagulant for water purification & industrial processing.",
                img: "/industrial/aluminum_sulfate.jpg",
                alt: "Aluminum Sulfate",
              },
              {
                title: "Caustic Soda (NaOH)",
                desc: "High-purity sodium hydroxide for manufacturing, cleaning, and refining.",
                img: "/industrial/naoh.jpg",
                alt: "Caustic Soda",
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

                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Industrial Chemical Categories</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 place-items-center">
            {[
              {
                key: "waterTreatment",
                title: "Water Treatment Chemicals",
                images: [
                  "/industrial/chlorine_powder.jpg",
                  "/industrial/aluminum_sulfate.jpg",
                ],
                items: [
                  "Chlorine Powder",
                  "Aluminum Sulfate (Alum)",
                  "Caustic Soda (NaOH)",
                ],
              },

              {
                key: "paintPlastic",
                title: "Paint & Plastic Chemicals",
                images: [
                  "/industrial/resins.jpg",
                  "/industrial/colorants.jpg",
                ],
                items: ["Resins", "Colorants", "Solvents"],
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
          <h2 className="text-3xl font-bold mb-4">Need Industrial Chemicals?</h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Contact us for quotations, tech sheets, and bulk industrial orders.
            We deliver nationwide to factories, water plants, and processing facilities.
          </p>

          <Link
            href="/en/contact"
            className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transition text-lg"
          >
            Contact Us Today
          </Link>
        </section>

      </div>
    </main>
  );
}
