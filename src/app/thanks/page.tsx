import type { Metadata } from "next";
import { generatePageMeta } from "@/lib/metadata";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = generatePageMeta({
  title: "Teşekkürler",
  description: "Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.",
  path: "/thanks",
  noIndex: true,
});

export default function ThanksPage() {
  return (
    <SectionWrapper>
      <div className="max-w-2xl mx-auto text-center py-12">
        {/* Success icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-accent/10 mb-8">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-brand-accent"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <h1 className="heading-1 mb-4">Talebiniz Alındı</h1>

        <p className="body-large mb-4">
          Mesajınız başarıyla iletildi. En kısa sürede sizinle iletişime
          geçeceğiz.
        </p>

        <p className="body-base mb-10">
          Genellikle 1–2 iş günü içinde yanıt veriyoruz. Acil bir konunuz
          varsa{" "}
          <a
            href="mailto:info@visavaultai.com"
            className="text-brand-accent hover:underline"
          >
            info@visavaultai.com
          </a>{" "}
          adresinden bize ulaşabilirsiniz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="secondary">
            Ana Sayfaya Dön
          </Button>
          <Button href="/pilot" variant="ghost">
            Pilot Programı İncele
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
