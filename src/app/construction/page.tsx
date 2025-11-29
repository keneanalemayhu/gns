/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// @/app/construction/page.tsx

'use client';
import Link from "next/link";
import { useT } from "@/lib/translate";

export default function ConstructionPage() {
  const t = useT();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
      {/* HERO */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg"
          alt={t("construction.hero.alt")}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            {t("construction.hero.title")}
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow">
            {t("construction.hero.subtitle")}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* ABOUT */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            {t("construction.about.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src="/construction/full.jpg"
                className="w-full h-full object-cover rounded-xl"
                alt={t("construction.about.imageAlt")}
              />
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>{t("construction.about.p1")}</p>
              <p>{t("construction.about.p2")}</p>
              <p>{t("construction.about.p3")}</p>
              <p>{t("construction.about.p4")}</p>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section>
          <h2 className="text-3xl font-bold mb-10">
            {t("construction.featured.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {t("construction.featured.items").map((item: any) => (
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
          <h2 className="text-3xl font-bold mb-6">
            {t("construction.categories.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* POWER TOOLS */}
            {[
              "powerTools",
              "safety",
              "electrical",
              "plumbing",
              "handTools",
              "painting",
            ].map((key) => {
              const cat = t(`construction.categories.${key}`);
              return (
                <div
                  key={key}
                  className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700"
                >
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {cat.images.map((src: string, i: number) => (
                      <img
                        key={i}
                        src={src}
                        className="h-24 w-full rounded-lg object-cover"
                      />
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{cat.title}</h3>

                  <ul className="list-disc ml-5 space-y-2 text-sm">
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
          <h2 className="text-3xl font-bold mb-4">{t("construction.cta.title")}</h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            {t("construction.cta.desc")}
          </p>

          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transition text-lg"
          >
            {t("construction.cta.button")}
          </Link>
        </section>
      </div>
    </main>
  );
}
