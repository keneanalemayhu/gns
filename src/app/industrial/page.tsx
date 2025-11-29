/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// @/app/industrial/page.tsx

'use client';
import Link from "next/link";
import { useT } from "@/lib/translate";

export default function IndustrialPage() {
  const t = useT();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
      {/* HERO */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/industrial/industrial_chemicals.jpg"
          alt={t("industrial.hero.alt")}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            {t("industrial.hero.title")}
          </h1>

          <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow">
            {t("industrial.hero.subtitle")}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* ABOUT SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            {t("industrial.about.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-md">
              <img
                src="/industrial/hero.jpg"
                alt={t("industrial.about.imageAlt")}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>{t("industrial.about.p1")}</p>
              <p>{t("industrial.about.p2")}</p>
              <p>{t("industrial.about.p3")}</p>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section>
          <h2 className="text-3xl font-bold mb-10">
            {t("industrial.featured.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {t("industrial.featured.items").map((item: any) => (
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

        {/* CATEGORIES */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            {t("industrial.categories.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 place-items-center">
            {["waterTreatment", "paintPlastic"].map((key) => {
              const cat = t(`industrial.categories.${key}`);

              return (
                <div
                  key={key}
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
                    {cat.items.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">{t("industrial.cta.title")}</h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            {t("industrial.cta.desc")}
          </p>

          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transition text-lg"
          >
            {t("industrial.cta.button")}
          </Link>
        </section>
      </div>
    </main>
  );
}
