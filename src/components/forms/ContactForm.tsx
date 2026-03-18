"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

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

const roleOptions = [
  "Kurucu Avukat / Partner",
  "Kıdemli Avukat",
  "Avukat",
  "Legal Operations",
  "Danışman",
  "Diğer",
];

const volumeOptions = [
  "1–10 dosya",
  "10–30 dosya",
  "30–100 dosya",
  "100+ dosya",
];

export function ContactForm({ formType = "demo" }: { formType?: FormType }) {
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
      setError("Lütfen zorunlu alanları doldurun.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setError("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Bir hata oluştu. Lütfen tekrar deneyin.");
      }

      router.push("/thanks");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Bir hata oluştu. Lütfen tekrar deneyin."
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
            Ad Soyad <span className="text-brand-danger">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={data.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Adınız Soyadınız"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-brand-text mb-2">
            Hukuk Bürosu / Şirket <span className="text-brand-danger">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={data.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Büro veya şirket adı"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
            E-posta <span className="text-brand-danger">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={data.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="ornek@buronuz.com"
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-brand-text mb-2">
            Rol
          </label>
          <select
            id="role"
            name="role"
            value={data.role}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Seçiniz</option>
            {roleOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="caseVolume" className="block text-sm font-medium text-brand-text mb-2">
          Aylık Yaklaşık Dosya Hacmi
        </label>
        <select
          id="caseVolume"
          name="caseVolume"
          value={data.caseVolume}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Seçiniz</option>
          {volumeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">
          Kısa Not
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={data.message}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Varsa eklemek istediğiniz kısa bir not..."
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
          ? "Gönderiliyor..."
          : formType === "demo"
          ? "Demo Talep Et"
          : "Pilot Başvurusu Gönder"}
      </button>

      <p className="text-xs text-brand-muted text-center">
        Bilgileriniz gizli tutulur ve üçüncü taraflarla paylaşılmaz.
      </p>
    </form>
  );
}
