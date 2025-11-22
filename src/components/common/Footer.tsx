// @/components/common/Footer.tsx

export default function Footer() {
  return (
    <footer
      className="
        mt-32 
        bg-black          /* Light mode background = black */
        text-gray-300 
        dark:bg-white     /* Dark mode background = white */
        dark:text-gray-800
        pt-16 pb-10
        border-t border-white/10 dark:border-gray-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* COMPANY INFO */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white dark:text-black">
            GNS Trading
          </h2>

          <p className="text-sm leading-relaxed text-gray-300 dark:text-gray-700">
            Importing and supplying high-quality solar systems, construction equipment,
            medical devices, and industrial chemicals across Ethiopia. Reliable products,
            trusted partners, and professional service.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white dark:text-black">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/solar" className="hover:text-blue-400 dark:hover:text-blue-600">
                Solar Division
              </a>
            </li>
            <li>
              <a href="/construction" className="hover:text-blue-400 dark:hover:text-blue-600">
                Construction Equipments
              </a>
            </li>
            <li>
              <a href="/medical" className="hover:text-blue-400 dark:hover:text-blue-600">
                Medical Equipments
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-blue-400 dark:hover:text-blue-600">
                Industrial Chemicals
              </a>
            </li> */}
            <li>
              <a href="/contact" className="hover:text-blue-400 dark:hover:text-blue-600">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white dark:text-black">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-gray-400 dark:text-gray-600">Phone:</span>
              <br />
              <a
                href="tel:+251911220468"
                className="hover:text-blue-400 dark:hover:text-blue-600"
              >
                +251 91 122 0468
              </a>
            </li>
            <li>
              <span className="text-gray-400 dark:text-gray-600">Email:</span>
              <br />
              <a
                href="mailto:info@gnstradingplc.com"
                className="hover:text-blue-400 dark:hover:text-blue-600 break-all"
              >
                info@gnstradingplc.com
              </a>
            </li>
            <li>
              <span className="text-gray-400 dark:text-gray-600">Address:</span>
              <br />
              Addis Ababa, Ethiopia
            </li>
          </ul>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white dark:text-black">
            Connect With Us
          </h3>

          <ul className="space-y-6 text-sm">

            {/* WHATSAPP */}
            <li className="flex items-start gap-3">
              <div className="flex flex-col">
                <span className="text-gray-400 dark:text-gray-600">WhatsApp</span>
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
                <span className="text-gray-400 dark:text-gray-600">Telegram</span>
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
                <span className="text-gray-400 dark:text-gray-600">Phone</span>
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
        © {new Date().getFullYear()} GNS Trading — All rights reserved.
      </div>
    </footer>
  );
}
