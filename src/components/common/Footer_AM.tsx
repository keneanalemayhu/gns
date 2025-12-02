// @/components/common/Footer_AM.tsx

'use client';
import Link from "next/link";

export default function Footer_AM() {
  return (
    <footer className="mt-32 bg-black text-gray-300 dark:bg-white dark:text-gray-800 pt-16 pb-10 border-t border-white/10 dark:border-gray-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white dark:text-black">
            ጂ.ኤን.ኤስ ትሬዲንግ
          </h2>

          <p className="text-sm leading-relaxed text-gray-300 dark:text-gray-700">
            ከፍተኛ ጥራት ያላቸው የሶላር፣ የግንባታ፣ የሕክምና መሣሪያዎች እና የኢንዱስትሪ
            ኬሚካሎች አቅራቢ በኢትዮጵያ።
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white dark:text-black">
            ቅርብ አገናኞች
          </h3>

          <ul className="space-y-2 text-sm">
            <li><Link href="/am/solar" className="hover:text-blue-400">ሶላር</Link></li>
            <li><Link href="/am/construction" className="hover:text-blue-400">ግንባታ</Link></li>
            <li><Link href="/am/medical" className="hover:text-blue-400">ሕክምና</Link></li>
            <li><Link href="/am/industrial" className="hover:text-blue-400">ኢንዱስትሪ</Link></li>
            <li><Link href="/am/contact" className="hover:text-blue-400">አግኙን</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white dark:text-black">
            እኛን ያግኙ
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-gray-400">ስልክ</span><br />
              <a href="tel:+251911220468" className="hover:text-blue-400">
                +251 91 122 0468
              </a>
            </li>

            <li>
              <span className="text-gray-400">ኢሜል</span><br />
              <a href="mailto:contact@gnstradingplc.com" className="hover:text-blue-400 break-all">
                contact@gnstradingplc.com
              </a>
            </li>

            <li>
              <span className="text-gray-400">አድራሻ</span><br />
              አዲስ አበባ፣ ኢትዮጵያ
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white dark:text-black">
            ማህበራዊ ሚዲያ
          </h3>

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

      <div className="mt-12 pt-6 border-t border-white/10 dark:border-gray-300 text-center text-xs text-gray-500 dark:text-gray-600">
        © {new Date().getFullYear()} GNS Trading PLC — ሁሉም መብቶች ተጠብቀዋል
      </div>
    </footer>
  );
}
