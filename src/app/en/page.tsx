/* eslint-disable @next/next/no-img-element */
// @/app/en/page.tsx

"use client";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function HomePage_EN() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">

      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/hero.png"
          alt="GNS Trading Hero Image"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Simplifying Trade Amplifying Value
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Importing and supplying high-quality Solar Systems, Construction
            Equipments, Medical Equipment, and Industrial Chemicals — built for
            Ethiopia’s growing market.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* WHAT WE DO */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>

          <p className="text-lg max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-300 mb-12">
            GNS Trading is a fast-growing importer and distributor in Ethiopia —
            supplying solar energy systems, construction equipments, medical
            equipment, and industrial chemical products to businesses, NGOs,
            contractors, and private buyers.
          </p>

          <div className="grid md:grid-cols-3 gap-10 place-items-center">
            {[
              {
                title: "Global Sourcing",
                desc: "We partner with trusted manufacturers across the world, to secure high-quality products at competitive prices.",
              },
              {
                title: "Import & Logistics",
                desc: "We handle shipping, customs clearance, and local transport — delivering goods quickly and safely to Addis and regional buyers.",
              },
              {
                title: "Wholesale & Retail Supply",
                desc: "We supply both bulk purchasers and individual clients, ensuring reliable stock availability and flexible order quantities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border dark:border-neutral-700 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DIVISIONS */}

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Divisions</h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                name: "Solar Energy",
                desc: "Panels • Batteries • Inverters • Mounting • Installation",
                img: "/solar.jpg",
                href: "/en/solar",
              },
              {
                name: "Construction Equipments",
                desc: "Mixers • Compactors • Power tools • Welding machines",
                img: "/construction.png",
                href: "/en/construction",
              },
              {
                name: "Medical Equipments",
                desc: "Diagnostics • Lab equipment • Safety supplies",
                img: "/medical.jpg",
                href: "/en/medical",
              },
              {
                name: "Industrial Chemicals",
                desc: "Water Treatment Chemicals • Paint & Plastic Chemicals",
                img: "/industrial_chemicals.jpg",
                href: "/en/industrial",
              },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative bg-white dark:bg-neutral-800 p-6 rounded-2xl border dark:border-neutral-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="h-40 w-full rounded-lg mb-4 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  {item.desc}
                </p>

                {/* The "Clickable" cue */}
                <div className="mt-auto flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-10">How We Work</h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                step: "1. Import",
                desc: "We import ready-made, off-the-shelf solar products, equipment, and supplies directly from trusted international manufacturers.",
              },
              {
                step: "2. Clearance",
                desc: "Our team manages customs clearance, logistics, and secure transportation to ensure products arrive safely and on time in Ethiopia.",
              },
              {
                step: "3. Configure",
                desc: "Once products arrive, we inspect, configure, and prepare them for the local market — ensuring compatibility, packaging, and proper setup.",
              },
              {
                step: "4. Sell",
                desc: "We supply high-quality solar products and equipment directly to customers, businesses, wholesalers, and retailers across Ethiopia.",
              },
            ].map((step) => (
              <div
                key={step.step}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border dark:border-neutral-700"
              >
                <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="mt-32 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Your Trusted Ethiopian Supplier
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            With a strong network of factories, freight companies, and logistics
            partners, GNS Trading ensures fast delivery, quality assurance, and
            fair pricing. Whether you’re a private buyer, contractor, business,
            NGO, or reseller — we deliver reliable products with professional
            support.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            We believe in transparent trade, quality products, and long-term
            partnerships.
          </p>
        </section>
      </div>
    </main>
  );
}
