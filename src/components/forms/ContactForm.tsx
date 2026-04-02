"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/get-dictionary";

type FormDict = Dictionary["form"];

type FormData = {
  name: string;
  company: string;
  email: string;
  role: string;
  caseVolume: string;
  message: string;
  _honeypot: string;
};

type FormType = "demo" | "pilot";

const initialData: FormData = {
  name: "",
  company: "",
  email: "",
  role: "",
  caseVolume: "",
  message: "",
  _honeypot: "",
};

export function ContactForm({
  formType = "demo",
  locale,
  dict,
}: {
  formType?: FormType;
  locale: Locale;
  dict: FormDict;
}) {
  const [data, setData] = useState<FormData>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Honeypot check
    if (data._honeypot) return;

    // Basic validation
    if (!data.name.trim() || !data.email.trim() || !data.company.trim()) {
      setError(dict.errorRequired);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setError(dict.errorEmail);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType, locale }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || dict.errorGeneric);
      }

      router.push(`/${locale}/thanks`);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : dict.errorGeneric
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full bg-brand-bg/80 border border-white/[0.08] rounded-xl px-4 py-3.5 text-brand-text placeholder:text-brand-muted/40 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent/40 transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot - hidden from users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact_website">Website</label>
        <input
          type="text"
          id="contact_website"
          name="_honeypot"
          value={data._honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">
            {dict.name} <span className="text-brand-danger">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={data.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder={dict.namePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-brand-text mb-2">
            {dict.company} <span className="text-brand-danger">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={data.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder={dict.companyPlaceholder}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
            {dict.email} <span className="text-brand-danger">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={data.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder={dict.emailPlaceholder}
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-brand-text mb-2">
            {dict.role}
          </label>
          <select
            id="role"
            name="role"
            value={data.role}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">{dict.selectPlaceholder}</option>
            {dict.roleOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="caseVolume" className="block text-sm font-medium text-brand-text mb-2">
          {dict.caseVolume}
        </label>
        <select
          id="caseVolume"
          name="caseVolume"
          value={data.caseVolume}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">{dict.selectPlaceholder}</option>
          {dict.volumeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">
          {dict.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={data.message}
          onChange={handleChange}
          className={inputClasses}
          placeholder={dict.messagePlaceholder}
        />
      </div>

      {error && (
        <div
          className="p-3 rounded-lg bg-brand-danger/10 border border-brand-danger/30 text-brand-danger text-sm"
          role="alert"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-accent text-brand-bg font-semibold px-6 py-4 rounded-xl hover:bg-brand-accent-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-[0_0_20px_rgba(46,230,166,0.15)] hover:shadow-[0_0_30px_rgba(46,230,166,0.25)]"
      >
        {loading
          ? dict.submitting
          : formType === "demo"
          ? dict.submitDemo
          : dict.submitPilot}
      </button>

      <p className="text-xs text-brand-muted text-center">
        {dict.disclaimer}
      </p>
    </form>
  );
}
