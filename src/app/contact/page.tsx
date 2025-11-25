// @/app/contact/page.tsx

import { PhoneCall, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
      {/* HERO */}
      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
        {/* <img
          src="/contact_hero.png"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}

        <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow">
            Get in touch for inquiries, quotations, partnerships, and product
            information.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* CONTACT INFO */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* PHONE */}
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl border dark:border-neutral-700 shadow-sm text-center">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-blue-600/10">
                <PhoneCall className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">
                +251 91 122 0468
              </p>
            </div>

            {/* EMAIL */}
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl border dark:border-neutral-700 shadow-sm text-center">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-blue-600/10">
                <Mail className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">
                contact@gnstradingplc.com
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                sales@gnstradingplc.com
              </p>
            </div>

            {/* OFFICE */}
            <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl border dark:border-neutral-700 shadow-sm text-center">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-blue-600/10">
                <MapPin className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Office Address</h3>
              <p className="text-gray-600 dark:text-gray-300">
                General Winget, Addis Ababa Ethiopia
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-center">
            Send Us a Message
          </h2>

          <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 p-10 rounded-xl shadow-sm border dark:border-neutral-700">
            <form
              action="/contact.php"
              method="POST"
              className="space-y-6"
            >
              {/* NAME */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-700 outline-none border dark:border-neutral-600"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-700 outline-none border dark:border-neutral-600"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-700 outline-none border dark:border-neutral-600"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* MAP SECTION */}
        {/* <section>
          <h2 className="text-3xl font-bold text-center mb-6">
            Find Us on the Map
          </h2>

          <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg border dark:border-neutral-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5202.134422177871!2d38.714241076111705!3d9.056636991005831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDMnMjMuOSJOIDM4wrA0MycwMC41IkU!5e1!3m2!1sen!2set!4v1763811063577!5m2!1sen!2set"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section> */}
      </div>
    </main>
  );
}
