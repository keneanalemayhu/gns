/* eslint-disable @next/next/no-img-element */
// @/app/solar/page.tsx

import Link from "next/link";

export default function SolarPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
      {/* HERO */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="/solar/solar_panel.png"
          alt="Solar Panels"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark/Light Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Solar Energy Solutions
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow">
            High-efficiency solar systems for homes, businesses, farms, and EV
            charging stations.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* ABOUT */}
        <section>
          <h2 className="text-3xl font-bold mb-6">About GNS Trading</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image Placeholder */}
            <div className="w-full h-72 rounded-xl overflow-hidden">
              <img
                src="/solar/solar_install.jpg"
                alt="Solar Installation Team"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                At GNS Trading, we are committed to providing high-quality solar
                solutions that power the future. As a leading supplier of solar
                panels and related equipment, we serve homes, businesses, and
                agricultural sectors by helping them harness renewable energy.
              </p>
              <p>
                Our mission is to make solar power accessible, affordable, and
                sustainable for everyone. With strong supplier networks and deep
                local market knowledge, we deliver reliable products, expert
                installation, and ongoing maintenance.
              </p>
              <p>
                Whether you&rsquo;re reducing energy bills or improving energy
                independence, GNS Trading is your trusted partner in Ethiopia’s
                solar industry.
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality Products",
                desc: "Panels & equipment from trusted global suppliers ensuring long-lasting efficiency.",
              },
              {
                title: "Expert Installation & Maintenance",
                desc: "Certified professionals ensure your system operates at peak performance.",
              },
              {
                title: "Sustainability",
                desc: "Helping customers transition to clean, renewable energy solutions.",
              },
              {
                title: "Affordable Solutions",
                desc: "Cost-effective packages that reduce bills without compromising quality.",
              },
            ].map((item) => (
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

        <section>
          <h2 className="text-3xl font-bold mb-6">Solar Product Catalogue</h2>

          <div className="space-y-10 text-lg leading-relaxed">
            <p>
              We supply a full range of solar panels, mounting systems,
              inverters, and batteries for residential, commercial, and
              agricultural installations.
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Solar Panels:</strong> High-efficiency panels for homes,
                businesses & farms.
              </li>
              <li>
                <strong>Mounting Systems:</strong> Roof-mounted, ground-mounted
                & carport systems.
              </li>
              <li>
                <strong>Apartments & Malls:</strong> Adjustable tilt-roof
                systems for maximum efficiency.
              </li>
              <li>
                <strong>EV Charging Stations:</strong> Aluminum carport mounting
                structures.
              </li>
              <li>
                <strong>Farming Systems:</strong> East-West ground-mounting
                structures.
              </li>
              <li>
                <strong>Inverters & Batteries:</strong> High-performance storage
                systems for reliable backup.
              </li>
            </ul>
          </div>
        </section>

        {/* PRODUCT CARDS */}
        <section>
          <h2 className="text-3xl font-bold mb-10">Our Products</h2>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* SOLAR TILT ROOF */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 shadow-sm p-6">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src="/solar/solar_tilt.png"
                  alt="Solar Tilt Roof Mount"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Solar Tilt Roof Mount (Apartments & Malls)
              </h3>
              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>Ideal for residential & commercial buildings.</li>
                <li>
                  <strong>Key Features:</strong> Adjustable angle,
                  weather-resistant, low maintenance.
                </li>
                <li>
                  <strong>Benefits:</strong> Higher energy production, lower
                  electricity costs.
                </li>
                <li>
                  <strong>Specs:</strong> Aluminum material, 10°–30° adjustable
                  tilt.
                </li>
              </ul>
            </div>

            {/* EV CARPORT */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 shadow-sm p-6">
              {/* IMAGES ROW */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="w-full h-40 rounded-lg overflow-hidden">
                  <img
                    src="/solar/car_port.png"
                    alt="Solar Carport Mounting System"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-40 rounded-lg overflow-hidden">
                  <img
                    src="/solar/car_port2.png"
                    alt="Solar Carport Mounting System Alternative View"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-2">
                Solar Carport Mounting System (EV Stations)
              </h3>

              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>Perfect for EV charging stations with carport shading.</li>
                <li>Dual-function shelter + renewable energy generation.</li>
                <li>
                  <strong>Key Features:</strong> Strong aluminum frame, fast
                  installation.
                </li>
                <li>
                  <strong>Benefits:</strong> Grid reduction, vehicle protection,
                  sustainability.
                </li>
                <li>
                  <strong>Specs:</strong> High-strength aluminum, customizable
                  capacity.
                </li>
              </ul>
            </div>

            {/* EAST-WEST FARM SYSTEM */}
            <div className="bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-700 shadow-sm p-6">
              {/* IMAGES ROW */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="w-full h-40 rounded-lg overflow-hidden">
                  <img
                    src="/solar/east_west.png"
                    alt="East-West Ground Mounting System"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-40 rounded-lg overflow-hidden">
                  <img
                    src="/solar/east_west2.jpg"
                    alt="East-West Ground Mounting System Alternate View"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-2">
                East-West Ground Mounting System (Farms)
              </h3>

              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>Optimized for open farmland solar installations.</li>
                <li>East-West orientation maximizes energy capture.</li>
                <li>
                  <strong>Key Features:</strong> Corrosion-resistant, fast
                  installation.
                </li>
                <li>
                  <strong>Benefits:</strong> Reduced farm energy costs & energy
                  independence.
                </li>
                <li>
                  <strong>Specs:</strong> Galvanized steel & aluminum,
                  ground-mounted.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* INVERTERS & BATTERIES */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Inverters & Batteries</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="grid grid-cols-2 gap-3">
              <div className="w-full h-72 rounded-xl overflow-hidden">
                <img
                  src="/solar/battery.png"
                  alt="Solar Battery"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full h-72 rounded-xl overflow-hidden">
                <img
                  src="/solar/inverter.png"
                  alt="Solar Inverter"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <ul className="list-disc ml-6 space-y-3 text-lg leading-relaxed">
              <li>Ensures efficient operation during non-sunny hours.</li>
              <li>Multiple models available depending on load consumption.</li>
              <li>High-performance lithium batteries & pure-sine inverters.</li>
            </ul>
          </div>
        </section>

        {/* SERVICES */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <div className="space-y-4 text-lg">
            <p>
              We provide full-service solar solutions — installation,
              maintenance, and system planning — delivered by a certified team
              of engineers and technicians.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-4">
                Installation Services
              </h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>Customized design & system planning.</li>
                <li>Certified technician installation.</li>
                <li>Compliance with local regulations & standards.</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border dark:border-neutral-700">
              <h3 className="text-xl font-semibold mb-4">
                Maintenance Services
              </h3>
              <ul className="list-disc ml-5 space-y-2">
                <li>Regular inspections & performance checks.</li>
                <li>Cleaning & panel servicing.</li>
                <li>Troubleshooting + repairs when needed.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* KEY HIGHLIGHTS */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Key Highlights</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Full-Service Solutions — supply, installation & support",
              "Sustainability Focus — lower carbon footprint",
              "Expert Team — trained solar professionals",
            ].map((text) => (
              <div
                key={text}
                className="bg-white dark:bg-neutral-800 p-6 rounded-xl border dark:border-neutral-700 shadow-sm"
              >
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">Need Medical Supplies?</h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Contact us for quotations, availability, and bulk orders. We deliver
            reliably to hospitals, clinics, pharmacies & NGOs nationwide.
          </p>

          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transition text-lg"
          >
            Contact Us Today
          </Link>
        </section>
      </div>
    </main>
  );
}
