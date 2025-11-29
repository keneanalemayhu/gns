/* eslint-disable @typescript-eslint/no-explicit-any */
// @/components/common/Footer.tsx

'use client';
import Link from "next/link";
import { useT } from "@/lib/translate";

export default function Footer() {
  const t = useT();

  const quickLinks = t("footer.quickLinks.items");

  return (
    <footer
      className="
        mt-32 
        bg-black
        text-gray-300 
        dark:bg-white
        dark:text-gray-800
        pt-16 pb-10
        border-t border-white/10 dark:border-gray-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* COMPANY INFO */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white dark:text-black">
            {t("footer.companyName")}
          </h2>

          <p className="text-sm leading-relaxed text-gray-300 dark:text-gray-700">
            {t("footer.companyDescription")}
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white dark:text-black">
            {t("footer.quickLinks.title")}
          </h3>

          <ul className="space-y-2 text-sm">
            {quickLinks.map((item: any) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-blue-400 dark:hover:text-blue-600"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white dark:text-black">
            {t("footer.contact.title")}
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-gray-400 dark:text-gray-600">
                {t("footer.contact.phoneLabel")}
              </span>
              <br />
              <a
                href="tel:+251911220468"
                className="hover:text-blue-400 dark:hover:text-blue-600"
              >
                +251 91 122 0468
              </a>
            </li>

            <li>
              <span className="text-gray-400 dark:text-gray-600">
                {t("footer.contact.emailLabel")}
              </span>
              <br />
              <a
                href="mailto:contact@gnstradingplc.com"
                className="hover:text-blue-400 dark:hover:text-blue-600 break-all"
              >
                contact@gnstradingplc.com
              </a>
            </li>

            <li>
              <span className="text-gray-400 dark:text-gray-600">
                {t("footer.contact.addressLabel")}
              </span>
              <br />
              {t("footer.contact.address")}
            </li>
          </ul>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white dark:text-black">
            {t("footer.social.title")}
          </h3>

          <ul className="space-y-6 text-sm">

            {/* WHATSAPP */}
            <li className="flex items-start gap-3">
              <div className="flex flex-col">
                <span className="text-gray-400 dark:text-gray-600">
                  {t("footer.social.whatsapp")}
                </span>
                <a
                  href="https://wa.me/251911220468"
                  target="_blank"
                  className="hover:text-green-400 dark:hover:text-green-600 text-gray-300 dark:text-gray-700"
                >
                  +251 91 122 0468
                </a>
              </div>
            </li>

            {/* TELEGRAM */}
            <li className="flex items-start gap-3">
              <div className="flex flex-col">
                <span className="text-gray-400 dark:text-gray-600">
                  {t("footer.social.telegram")}
                </span>
                <a
                  href="https://t.me/+251911220468"
                  target="_blank"
                  className="hover:text-blue-400 dark:hover:text-blue-600 text-gray-300 dark:text-gray-700"
                >
                  +251 91 122 0468
                </a>
              </div>
            </li>

            {/* PHONE */}
            <li className="flex items-start gap-3">
              <div className="flex flex-col">
                <span className="text-gray-400 dark:text-gray-600">
                  {t("footer.social.phone")}
                </span>
                <a
                  href="tel:+251911220468"
                  className="hover:text-blue-300 dark:hover:text-blue-600 text-gray-300 dark:text-gray-700"
                >
                  +251 91 122 0468
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 pt-6 border-t border-white/10 dark:border-gray-300 text-center text-xs text-gray-500 dark:text-gray-600">
        © {new Date().getFullYear()} {t("footer.companyName")} {t("footer.copyright.suffix")}
      </div>
    </footer>
  );
}
