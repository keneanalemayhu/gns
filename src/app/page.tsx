/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// @/app/page.tsx

'use client';
import Link from "next/link";
import { useT } from "@/lib/translate";

export default function HomePage() {
  const t = useT();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/hero.png"
          alt={t("homepage.hero.alt")}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            {t("homepage.hero.title")}
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            {t("homepage.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* WHAT WE DO */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t("homepage.whatWeDo.title")}
          </h2>

          <p className="text-lg max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-300 mb-12">
            {t("homepage.whatWeDo.description")}
          </p>

          <div className="grid md:grid-cols-3 gap-10 place-items-center">
            {t("homepage.whatWeDo.items").map((item: any) => (
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
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("homepage.divisions.title")}
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            {/* SOLAR */}
            <Link
              href="/solar"
              className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border dark:border-neutral-700 shadow-sm hover:shadow-xl transition"
            >
              <div className="h-40 w-full rounded-lg mb-4 overflow-hidden">
                <img
                  src="/solar.jpg"
                  alt={t("homepage.divisions.solar.alt")}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {t("homepage.divisions.solar.title")}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("homepage.divisions.solar.desc")}
              </p>
            </Link>

            {/* OTHER DIVISIONS */}
            {t("homepage.divisions.items").map((item: any) => (
              <Link
                key={item.name}
                href={item.href}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border dark:border-neutral-700 shadow-sm hover:shadow-xl transition"
              >
                <div className="h-40 w-full rounded-lg mb-4 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-10">
            {t("homepage.process.title")}
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {t("homepage.process.steps").map((step: any) => (
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
            {t("homepage.trust.title")}
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t("homepage.trust.body1")}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            {t("homepage.trust.body2")}
          </p>
        </section>
      </div>
    </main>
  );
}
