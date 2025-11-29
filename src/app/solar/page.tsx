/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// @/app/solar/page.tsx

'use client';
import Link from "next/link";
import { useT } from "@/lib/translate";

export default function SolarPage() {
  const t = useT();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
      {/* HERO */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/solar/solar_panel.png"
          alt={t("solar.hero.alt")}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            {t("solar.hero.title")}
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow">
            {t("solar.hero.subtitle")}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* ABOUT */}
        <section>
          <h2 className="text-3xl font-bold mb-6">{t("solar.about.title")}</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="w-full h-72 rounded-xl overflow-hidden">
              <img
                src="/solar/solar_install.jpg"
                alt={t("solar.about.imageAlt")}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>{t("solar.about.p1")}</p>
              <p>{t("solar.about.p2")}</p>
              <p>{t("solar.about.p3")}</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section>
          <h2 className="text-3xl font-bold mb-6">{t("solar.whyChooseUs.title")}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t("solar.whyChooseUs.items").map((item: any) => (
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
          <h2 className="text-3xl font-bold mb-6">{t("solar.catalogue.title")}</h2>

          <div className="space-y-10 text-lg leading-relaxed">
            <p>{t("solar.catalogue.p1")}</p>

            <ul className="list-disc ml-6 space-y-2">
              {t("solar.catalogue.items").map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* OUR PRODUCTS */}
        <section>
          <h2 className="text-3xl font-bold mb-10">{t("solar.ourProducts.title")}</h2>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* SOLAR TILT ROOF */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 shadow-sm p-6">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src="/solar/solar_tilt.png"
                  alt={t("solar.ourProducts.tiltRoof.imageAlt")}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">
                {t("solar.ourProducts.tiltRoof.title")}
              </h3>

              <ul className="list-disc ml-5 space-y-2 text-sm">
                {t("solar.ourProducts.tiltRoof.items").map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* EV CARPORT */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 shadow-sm p-6">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <img
                  src="/solar/car_port.png"
                  alt={t("solar.ourProducts.evCarport.alt1")}
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/solar/car_port2.png"
                  alt={t("solar.ourProducts.evCarport.alt2")}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">
                {t("solar.ourProducts.evCarport.title")}
              </h3>

              <ul className="list-disc ml-5 space-y-2 text-sm">
                {t("solar.ourProducts.evCarport.items").map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* EAST-WEST */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 shadow-sm p-6">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <img
                  src="/solar/east_west.png"
                  alt={t("solar.ourProducts.eastWest.alt1")}
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="/solar/east_west2.jpg"
                  alt={t("solar.ourProducts.eastWest.alt2")}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">
                {t("solar.ourProducts.eastWest.title")}
              </h3>

              <ul className="list-disc ml-5 space-y-2 text-sm">
                {t("solar.ourProducts.eastWest.items").map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* INVERTERS & BATTERIES */}
        <section>
          <h2 className="text-3xl font-bold mb-6">{t("solar.inverters.title")}</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="grid grid-cols-2 gap-3">
              <div className="w-full h-72 rounded-xl overflow-hidden">
                <img
                  src="/solar/battery.png"
                  alt={t("solar.inverters.altBattery")}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full h-72 rounded-xl overflow-hidden">
                <img
                  src="/solar/inverter.png"
                  alt={t("solar.inverters.altInverter")}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <ul className="list-disc ml-6 space-y-3 text-lg leading-relaxed">
              {t("solar.inverters.items").map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICES */}
        <section>
          <h2 className="text-3xl font-bold mb-6">{t("solar.services.title")}</h2>

          <p className="text-lg">{t("solar.services.p1")}</p>

          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-4">
                {t("solar.services.installation.title")}
              </h3>
              <ul className="list-disc ml-5 space-y-2">
                {t("solar.services.installation.items").map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-4">
                {t("solar.services.maintenance.title")}
              </h3>
              <ul className="list-disc ml-5 space-y-2">
                {t("solar.services.maintenance.items").map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section>
          <h2 className="text-3xl font-bold mb-6">{t("solar.highlights.title")}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t("solar.highlights.items").map((item: string) => (
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
          <h2 className="text-3xl font-bold mb-4">{t("solar.cta.title")}</h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            {t("solar.cta.desc")}
          </p>

          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transition text-lg"
          >
            {t("solar.cta.button")}
          </Link>
        </section>
      </div>
    </main>
  );
}
