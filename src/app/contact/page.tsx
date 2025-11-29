/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @/app/contact/page.tsx

"use client";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { useT } from "@/lib/translate";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const t = useT();

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
        toast.error(t("contact.form.badResponse"));
        setLoading(false);
        return;
      }

      if (data.status === "success") {
        toast.success(t("contact.form.success"));
        form.reset();
      } else {
        toast.error(data.message || t("contact.form.error"));
      }
    } catch (err) {
      toast.error(t("contact.form.unexpected"));
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
            {t("contact.hero.title")}
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200 drop-shadow">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* CONTACT INFO */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("contact.getInTouchTitle")}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* PHONE */}
            <ContactCard
              icon={<PhoneCall className="w-7 h-7 text-blue-600" />}
              title={t("contact.cards.phone.title")}
              content={t("contact.cards.phone.content")}
            />

            {/* EMAIL */}
            <ContactCard
              icon={<Mail className="w-7 h-7 text-blue-600" />}
              title={t("contact.cards.email.title")}
              content={t("contact.cards.email.content")}
            />

            {/* ADDRESS */}
            <ContactCard
              icon={<MapPin className="w-7 h-7 text-blue-600" />}
              title={t("contact.cards.address.title")}
              content={t("contact.cards.address.content")}
            />
          </div>
        </section>

        {/* CONTACT FORM */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-center">
            {t("contact.form.sectionTitle")}
          </h2>

          <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 p-10 rounded-xl shadow-sm border dark:border-neutral-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <InputField
                label={t("contact.form.nameLabel")}
                name="name"
                type="text"
                placeholder={t("contact.form.namePlaceholder")}
                required
              />

              {/* EMAIL */}
              <InputField
                label={t("contact.form.emailLabel")}
                name="email"
                type="email"
                placeholder={t("contact.form.emailPlaceholder")}
                required
              />

              {/* MESSAGE */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium">
                  {t("contact.form.messageLabel")}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="p-3 rounded-lg bg-gray-100 dark:bg-neutral-700 border dark:border-neutral-600 outline-none"
                  placeholder={t("contact.form.messagePlaceholder")}
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
                    {t("contact.form.sending")}
                  </span>
                ) : (
                  t("contact.form.submit")
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
