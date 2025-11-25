/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// @/app/construction/page.tsx

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
            High-quality tools, safety gear, electrical supplies, plumbing
            items, and professional accessories for Ethiopia’s construction
            sector.
          </p>
        </div>
      </section>


      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

        {/* ABOUT SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-6">About Our Construction Division</h2>

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
                GNS Trading supplies a full range of construction tools and equipment sourced
                from trusted manufacturers in China, Turkey, and Europe.
              </p>
              <p>
                We provide durable tools for contractors, builders, plumbers, electricians,
                welders, and hardware shops across Ethiopia.
              </p>
              <p>
                From power tools to safety gear, we focus on dependable quality and fast delivery.
              </p>
              <p>
                Our mission is to help Ethiopia’s construction industry grow using premium,
                affordable and reliable tools designed for African working conditions.
              </p>
            </div>

          </div>
        </section>

        {/* FEATURED PRODUCT GRID */}
        <section>
          <h2 className="text-3xl font-bold mb-10">Featured Construction Products</h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Product 1 */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <img
                src="/construction/drill.webp"
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Electric Drill</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">High-power drilling tools built for daily job-site usage.</p>
            </div>

            {/* Product 2 */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <img
                src="/construction/angle_grinder.jpg"
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Angle Grinder</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Cutting & grinding tool suitable for steel, stone and concrete.</p>
            </div>

            {/* Product 3 */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <img
                src="https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg"
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Welding Machine</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Professional welding tools built for steel fabrication work.</p>
            </div>

          </div>
        </section>


        {/* CATEGORIES */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Construction Equipment Categories</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* CATEGORY: POWER TOOLS */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <img src="/construction/angle_grinder.jpg" className="h-24 w-full rounded-lg object-cover" />
                <img src="/construction/power_tools.jpg" className="h-24 w-full rounded-lg object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Power Tools</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>Drills</li>
                <li>Angle Grinders</li>
                <li>Welders / Welding Machines</li>
              </ul>
            </div>

            {/* CATEGORY: SAFETY & PPE */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg" className="h-24 w-full rounded-lg object-cover" />
                <img src="https://images.pexels.com/photos/2566472/pexels-photo-2566472.jpeg" className="h-24 w-full rounded-lg object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety & PPE</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>Helmets</li>
                <li>Work Gloves</li>
                <li>Reflective Vests</li>
              </ul>
            </div>

            {/* CATEGORY: ELECTRICAL SUPPLIES */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <img src="/construction/switches.webp" className="h-24 w-full rounded-lg object-cover" />
                <img src="/construction/extension.png" className="h-24 w-full rounded-lg object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Electrical Supplies</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>Switches & Sockets</li>
                <li>LED Bulbs</li>
                <li>Extension Cables</li>
              </ul>
            </div>

            {/* CATEGORY: PLUMBING */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <img src="/construction/pvc_ppr.webp" className="h-24 w-full rounded-lg object-cover" />
                <img src="/construction/pipe.webp" className="h-24 w-full rounded-lg object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Plumbing & Fittings</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>PVC / PPR Fittings</li>
                <li>Valves</li>
                <li>Pipe Accessories</li>
              </ul>
            </div>

            {/* CATEGORY: HAND TOOLS */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <img src="/construction/hammers.jpg" className="h-24 w-full rounded-lg object-cover" />
                <img src="/construction/screwdrivers_wrenches.jpg" className="h-24 w-full rounded-lg object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hand Tools</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>Hammers</li>
                <li>Screwdrivers / Wrenches</li>
                <li>Levels & Trowels</li>
              </ul>
            </div>

            {/* CATEGORY: PAINTING ACCESSORIES */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <img src="/construction/roller_tray.jpg" className="h-24 w-full rounded-lg object-cover" />
                <img src="/construction/brush.jpg" className="h-24 w-full rounded-lg object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Painting Accessories</h3>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>Rollers & Trays</li>
                <li>Brushes</li>
                <li>Painter&apos;s Tape</li>
              </ul>
            </div>

          </div>
        </section>


        {/* CTA SECTION */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">Need Construction Supplies?</h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Contact us for quotations, availability, and bulk orders. We deliver
            reliably to contractors, builders, hardware shops & project sites nationwide.
          </p>

          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transition text-lg"
          >
            Contact Us Today
          </Link>
        </section>

      </div>

    </main>
  );
}
