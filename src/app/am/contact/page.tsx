/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @/app/am/contact/page.tsx

"use client";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { IconBrandTelegram, IconBrandWhatsapp } from "@tabler/icons-react";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactPage_AM() {
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
        toast.error("ሰርቨሩ ያልተጠበቀ ምላሽ ሰጥቷል።");
        setLoading(false);
        return;
      }

      if (data.status === "success") {
        toast.success("መልዕክቱ በተሳካ ሁኔታ ተልኳል!");
        form.reset();
      } else {
        toast.error(data.message || "መልዕክት መላክ አልተሳካም።");
      }
    } catch {
      toast.error("ያልተጠበቀ የሰርቨር ስህተት");
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
            ያግኙን
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow">
            ለምርመራዎች፣ ለዋጋ ጥያቄዎች፣ ለሽርክና እና ለምርት መረጃ እባክዎ ያግኙን።
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

        {/* CONTACT INFO */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* PHONE */}
            <ContactCard
              href="tel:+251911220468"
              icon={<PhoneCall className="w-7 h-7 text-blue-600" />}
              title="ስልክ"
              content="+251 91 122 0468"
            />

            {/* EMAIL */}
            <ContactCard
              href="mailto:contact@gnstradingplc.com"
              icon={<Mail className="w-7 h-7 text-blue-600" />}
              title="ኢሜይል"
              content="contact@gnstradingplc.com"
            />

            {/* ADDRESS */}
            <ContactCard
              href=""
              icon={<MapPin className="w-7 h-7 text-blue-600" />}
              title="አድራሻ"
              content="አዲስ አበባ, ኢትዮጵያ"
            />

            {/* TELEGRAM */}
            <ContactCard
              href="https://t.me/+251911220468"
              icon={<IconBrandTelegram className="w-7 h-7 text-blue-600" />}
              title="ቴሌግራም"
              content="+251 91 122 0468"
            />

            {/* WECHAT */}
            <ContactCard
              image="/wechat-qr.jpg"
              title="ዊቻት"
              content=""
            />

            {/* WHATSAPP */}
            <ContactCard
              href="https://wa.me/+251911220468"
              icon={<IconBrandWhatsapp className="w-7 h-7 text-blue-600" />}
              title="ዋትሳፕ"
              content="+251 91 122 0468"
            />

          </div>
        </section>

        {/* CONTACT FORM */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-center">
            መልዕክት ይላኩልን
          </h2>

          <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 p-10 rounded-xl shadow-sm border dark:border-neutral-700">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <InputField
                label="የእርስዎ ስም"
                name="name"
                type="text"
                placeholder="ስምዎን ያስገቡ"
                required
              />

              {/* EMAIL */}
              <InputField
                label="ኢሜይል አድራሻ"
                name="email"
                type="email"
                placeholder="ኢሜይልዎን ያስገቡ"
                required
              />

              {/* MESSAGE */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium">መልዕክት</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-700 border dark:border-neutral-600 outline-none"
                  placeholder="እንዴት ልንረዳዎ እንችላለን?"
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
                    በመላክ ላይ...
                  </span>
                ) : (
                  "መልዕክት ላክ"
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
  image,
  title,
  content,
  href,
}: {
  icon?: React.ReactNode;
  image?: string;
  title: string;
  content: React.ReactNode;
  href?: string;
}) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`
        bg-white dark:bg-neutral-800 p-8 rounded-xl border dark:border-neutral-700 shadow-sm 
        text-center transition 
        hover:shadow-lg hover:-translate-y-1 
        flex flex-col items-center justify-between
        ${href ? "cursor-pointer" : ""}
        ${image ? "h-[330px]" : "h-[220px]"} 
      `}
    >
      <div className="flex flex-col items-center gap-y-3">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full max-w-[190px] mx-auto rounded-lg object-contain"
          />
        ) : (
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/10">
            {icon}
          </div>
        )}

        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{content}</p>
    </Wrapper>
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
