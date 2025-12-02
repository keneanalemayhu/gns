/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// @/app/en/construction/page.tsx

'use client';
import Link from "next/link";

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">

      {/* HERO */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg"
          alt="Construction Equipment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Construction Equipment Supply
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow">
            High-quality tools, safety gear, electrical supplies, plumbing items,
            and professional accessories for Ethiopia’s construction sector.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

        {/* ABOUT */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            About Our Construction Division
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/construction/full.jpg"
                className="w-full h-full object-cover rounded-xl"
                alt="Construction Work"
              />
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                GNS Trading supplies a full range of construction tools and equipment
                sourced from trusted manufacturers in China, Turkey, and Europe.
              </p>
              <p>
                We provide durable tools for contractors, builders, plumbers,
                electricians, welders, and hardware shops across Ethiopia.
              </p>
              <p>
                From power tools to safety gear, we focus on dependable quality and
                fast delivery.
              </p>
              <p>
                Our mission is to help Ethiopia’s construction industry grow using
                premium, affordable and reliable tools designed for African working
                conditions.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section>
          <h2 className="text-3xl font-bold mb-10">
            Featured Construction Products
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Electric Drill",
                desc: "High-power drilling tools built for daily job-site usage.",
                img: "/construction/drill.jpg",
              },
              {
                title: "Angle Grinder",
                desc: "Cutting & grinding tool suitable for steel, stone and concrete.",
                img: "/construction/angle_grinder.jpg",
              },
              {
                title: "Welding Machine",
                desc: "Professional welding tools built for steel fabrication work.",
                img: "https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700"
              >
                <img
                  src={item.img}
                  className="h-48 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Construction Equipment Categories</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* POWER TOOLS */}
            {[
              {
                key: "powerTools",
                title: "Power Tools",
                images: [
                  "/construction/angle_grinder.jpg",
                  "/construction/power_tools.jpg",
                ],
                items: ["Drills", "Angle Grinders", "Welders / Welding Machines"],
              },

              {
                key: "safety",
                title: "Safety & PPE",
                images: [
                  "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
                  "https://images.pexels.com/photos/2566472/pexels-photo-2566472.jpeg",
                ],
                items: ["Helmets", "Work Gloves", "Reflective Vests"],
              },

              {
                key: "electrical",
                title: "Electrical Supplies",
                images: [
                  "/construction/switches.webp",
                  "/construction/extension.png",
                ],
                items: ["Switches & Sockets", "LED Bulbs", "Extension Cables"],
              },

              {
                key: "plumbing",
                title: "Plumbing & Fittings",
                images: [
                  "/construction/pvc_ppr.webp",
                  "/construction/pipe.webp",
                ],
                items: ["PVC / PPR Fittings", "Valves", "Pipe Accessories"],
              },

              {
                key: "handTools",
                title: "Hand Tools",
                images: [
                  "/construction/hammers.jpg",
                  "/construction/screwdrivers_wrenches.jpg",
                ],
                items: ["Hammers", "Screwdrivers / Wrenches", "Levels & Trowels"],
              },

              {
                key: "painting",
                title: "Painting Accessories",
                images: [
                  "/construction/roller_tray.jpg",
                  "/construction/brush.jpg",
                ],
                items: ["Rollers & Trays", "Brushes", "Painter's Tape"],
              },
            ].map((cat) => (
              <div
                key={cat.key}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700"
              >
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {cat.images.map((src, i) => (
                    <img
                      key={i}
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
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">Need Construction Supplies?</h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Contact us for quotations, availability, and bulk orders.
            We deliver reliably to contractors, builders, hardware shops & project
            sites nationwide.
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
