// @/components/common/Footer_EN.tsx

'use client';
import Link from "next/link";

export default function Footer_EN() {
  return (
    <footer className="mt-32 bg-black text-gray-300 dark:bg-white dark:text-gray-800 pt-16 pb-10 border-t border-white/10 dark:border-gray-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        <div>
          <h2 className="text-2xl font-bold mb-4 text-white dark:text-black">
            GNS Trading PLC
          </h2>

          <p className="text-sm text-gray-300 dark:text-gray-700">
            Leading supplier of solar systems, construction tools, medical equipment, 
            and industrial chemicals across Ethiopia.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li><Link href="/en/solar">Solar</Link></li>
            <li><Link href="/en/construction">Construction</Link></li>
            <li><Link href="/en/medical">Medical</Link></li>
            <li><Link href="/en/industrial">Industrial</Link></li>
            <li><Link href="/en/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white dark:text-black">
            Contact
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-gray-400">Phone</span><br />
              <a href="tel:+251911220468" className="hover:text-blue-400">
                +251 91 122 0468
              </a>
            </li>

            <li>
              <span className="text-gray-400">Email</span><br />
              <a href="mailto:contact@gnstradingplc.com" className="hover:text-blue-400 break-all">
                contact@gnstradingplc.com
              </a>
            </li>

            <li>
              <span className="text-gray-400">Address</span><br />
              Addis Abeba, Ethiopia
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <ul className="space-y-6 text-sm">
            <li>
              <span className="text-gray-400">WhatsApp</span><br />
              <a href="https://wa.me/251911220468" target="_blank" className="hover:text-green-400">
                +251 91 122 0468
              </a>
            </li>

            <li>
              <span className="text-gray-400">Telegram</span><br />
              <a href="https://t.me/+251911220468" target="_blank" className="hover:text-blue-400">
                +251 91 122 0468
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t text-center text-xs text-gray-500">
        © {new Date().getFullYear()} GNS Trading PLC — All Rights Reserved
      </div>
    </footer>
  );
}
