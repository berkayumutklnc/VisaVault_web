import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-main text-center py-12">
        <p className="text-7xl font-heading font-extrabold text-brand-accent/20 mb-6">
          404
        </p>
        <h1 className="heading-2 mb-4">Sayfa Bulunamadı</h1>
        <p className="body-large max-w-md mx-auto mb-10">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/">Ana Sayfaya Dön</Button>
          <Button href="/demo" variant="secondary">
            Demo Talep Et
          </Button>
        </div>
      </div>
    </section>
  );
}
