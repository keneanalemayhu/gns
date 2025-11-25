/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @/app/contact/page.tsx

"use client";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        body: formData,
        cache: "no-store",
      });

      let data: any;

      try {
        data = await response.json();
      } catch {
        toast.error("Server returned an unexpected response.");
        setLoading(false);
        return;
      }

      if (data.status === "success") {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (err) {
      toast.error("Unexpected server error");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
      {/* HERO */}
      <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
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
            <ContactCard
              icon={<PhoneCall className="w-7 h-7 text-blue-600" />}
              title="Phone"
              content="+251 91 122 0468"
            />

            {/* EMAIL */}
            <ContactCard
              icon={<Mail className="w-7 h-7 text-blue-600" />}
              title="Email"
              content={
                <>
                  contact@gnstradingplc.com <br />
                  sales@gnstradingplc.com
                </>
              }
            />

            {/* OFFICE */}
            <ContactCard
              icon={<MapPin className="w-7 h-7 text-blue-600" />}
              title="Office Address"
              content="General Winget, Addis Ababa Ethiopia"
            />
          </div>
        </section>

        {/* CONTACT FORM */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-center">
            Send Us a Message
          </h2>

          <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 p-10 rounded-xl shadow-sm border dark:border-neutral-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <InputField
                label="Your Name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />

              {/* EMAIL */}
              <InputField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />

              {/* MESSAGE */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-700 border dark:border-neutral-600 outline-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg disabled:bg-blue-400"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}


function ContactCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl border dark:border-neutral-700 shadow-sm text-center">
      <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-blue-600/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{content}</p>
    </div>
  );
}

function InputField({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-700 border dark:border-neutral-600 outline-none"
      />
    </div>
  );
}
