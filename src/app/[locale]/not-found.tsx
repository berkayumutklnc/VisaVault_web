import { getDictionary } from "@/lib/get-dictionary";
import { Button } from "@/components/ui/Button";

export default async function NotFound() {
  // In Next.js App Router, not-found doesn't receive params.
  // Default to English; middleware will have set the cookie for next visit.
  const dict = await getDictionary("en");
  const n = dict.notFound;

  return (
    <section className="section-padding">
      <div className="container-main text-center py-12">
        <p className="text-7xl font-heading font-extrabold text-brand-accent/20 mb-6">
          {n.code}
        </p>
        <h1 className="heading-2 mb-4">{n.heading}</h1>
        <p className="body-large max-w-md mx-auto mb-10">{n.body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/en">{n.ctaHome}</Button>
          <Button href="/en/demo" variant="secondary">
            {n.ctaDemo}
          </Button>
        </div>
      </div>
    </section>
  );
}
