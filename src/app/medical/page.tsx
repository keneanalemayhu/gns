/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// @/app/medical/page.tsx

import Link from "next/link";

export default function MedicalPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
      {/* HERO */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg"
          alt="Medical Equipment"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Medical Equipment & Supplies
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow">
            Reliable diagnostic devices, patient-care equipment, consumables,
            and lab essentials for hospitals, clinics, pharmacies & NGOs across
            Ethiopia.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* ABOUT + IMAGE GRID */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            About Our Medical Division
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 4 images */}
            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://images.pexels.com/photos/6129040/pexels-photo-6129040.jpeg"
                className="h-40 w-full rounded-xl object-cover"
                alt="Diagnostic Devices"
              />
              <img
                src="https://images.pexels.com/photos/8376177/pexels-photo-8376177.jpeg"
                className="h-40 w-full rounded-xl object-cover"
                alt="Medical PPE"
              />
              <img
                src="https://images.pexels.com/photos/4226117/pexels-photo-4226117.jpeg"
                className="h-40 w-full rounded-xl object-cover"
                alt="Hospital Equipment"
              />
              <img
                src="https://images.pexels.com/photos/8460044/pexels-photo-8460044.jpeg"
                className="h-40 w-full rounded-xl object-cover"
                alt="Laboratory Work"
              />
            </div>

            {/* About text */}
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                GNS Trading supplies high-quality medical equipment sourced from
                certified global manufacturers. We serve hospitals, clinics,
                pharmacies, diagnostic labs, NGOs, and home-care providers
                across Ethiopia.
              </p>
              <p>
                Our catalogue includes diagnostic devices, PPE, consumables,
                oxygen systems, patient-care equipment, and lab essentials.
              </p>
              <p>
                We focus on reliability, affordability, and fast delivery —
                ensuring our customers receive medical products they can trust.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section>
          <h2 className="text-3xl font-bold mb-10">
            Featured Medical Products
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Product 1 */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border dark:border-neutral-700 shadow-sm">
              <img
                src="https://images.pexels.com/photos/6129040/pexels-photo-6129040.jpeg"
                className="h-48 w-full rounded-lg object-cover mb-4"
                alt="Thermometer"
              />
              <h3 className="text-xl font-semibold mb-2">
                Digital Thermometer
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Fast-reading, accurate thermometers suitable for clinics and
                hospitals.
              </p>
            </div>

            {/* Product 2 */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border dark:border-neutral-700 shadow-sm">
              <img
                src="https://images.pexels.com/photos/8376177/pexels-photo-8376177.jpeg"
                className="h-48 w-full rounded-lg object-cover mb-4"
                alt="BP Monitor"
              />
              <h3 className="text-xl font-semibold mb-2">
                Blood Pressure Monitor
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                High-precision BP monitors for accurate patient diagnosis.
              </p>
            </div>

            {/* Product 3 */}
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border dark:border-neutral-700 shadow-sm">
              <img
                src="https://images.pexels.com/photos/8460044/pexels-photo-8460044.jpeg"
                className="h-48 w-full rounded-lg object-cover mb-4"
                alt="Lab Equipment"
              />
              <h3 className="text-xl font-semibold mb-2">Laboratory Set</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Essential equipment for diagnostic laboratories and research
                centers.
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Certified Equipment",
                desc: "All medical devices meet international safety and testing standards.",
              },
              {
                title: "Wide Healthcare Catalogue",
                desc: "Diagnostics, patient care, PPE, consumables, lab devices & more.",
              },
              {
                title: "Trusted by Hospitals & NGOs",
                desc: "Reliable supply to public/private hospitals and humanitarian organizations.",
              },
              {
                title: "Fast Delivery Nationwide",
                desc: "Efficient logistics to Addis Ababa and all regions.",
              },
            ].map((i) => (
              <div
                key={i.title}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700"
              >
                <h3 className="text-xl font-semibold mb-2">{i.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {i.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORIES WITH IMAGES */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Medical Equipment Categories
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Diagnostic Devices",
                images: [
                  "https://images.pexels.com/photos/6129040/pexels-photo-6129040.jpeg",
                  "https://images.pexels.com/photos/4226117/pexels-photo-4226117.jpeg",
                ],
                items: [
                  "Digital Thermometers",
                  "Blood Pressure Monitors",
                  "Glucometers",
                  "Pulse Oximeters",
                  "Stethoscopes",
                ],
              },
              {
                title: "Patient Care",
                images: [
                  "https://images.pexels.com/photos/8460044/pexels-photo-8460044.jpeg",
                  "https://images.pexels.com/photos/3993214/pexels-photo-3993214.jpeg",
                ],
                items: [
                  "Nebulizers",
                  "Suction Machines",
                  "Oxygen Concentrators",
                  "Wheelchairs",
                  "Hospital Beds",
                ],
              },
              {
                title: "Consumables",
                images: [
                  "https://images.pexels.com/photos/8376177/pexels-photo-8376177.jpeg",
                  "https://images.pexels.com/photos/3957985/pexels-photo-3957985.jpeg",
                ],
                items: [
                  "Examination Gloves",
                  "Surgical Gloves",
                  "Syringes",
                  "Alcohol Swabs",
                  "Test Strips",
                ],
              },
              {
                title: "Infection Control",
                images: [
                  "https://images.pexels.com/photos/3957985/pexels-photo-3957985.jpeg",
                  "https://images.pexels.com/photos/8376171/pexels-photo-8376171.jpeg",
                ],
                items: [
                  "Masks",
                  "Sanitizers",
                  "Disinfectants",
                  "Disposable Gowns",
                  "Face Masks",
                ],
              },
              {
                title: "Laboratory Basics",
                images: [
                  "https://images.pexels.com/photos/8460044/pexels-photo-8460044.jpeg",
                  "https://images.pexels.com/photos/4226117/pexels-photo-4226117.jpeg",
                ],
                items: [
                  "Test Kits",
                  "Sample Cups",
                  "Centrifuge Machines",
                  "Microscopes",
                ],
              },
            ].map((cat) => (
              <div
                key={cat.title}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl border dark:border-neutral-700 shadow-sm"
              >
                {/* Image row */}
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
                  {cat.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">Need Medical Supplies?</h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Contact us for quotations, availability, and bulk orders. We deliver
            reliably to hospitals, clinics, pharmacies & NGOs nationwide.
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
