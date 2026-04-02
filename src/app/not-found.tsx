import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
        <section className="section-padding flex-1 flex items-center">
          <div className="container-main text-center py-12">
            <p className="text-7xl font-heading font-extrabold text-brand-accent/20 mb-6">
              404
            </p>
            <h1 className="heading-2 mb-4">Page Not Found</h1>
            <p className="body-large max-w-md mx-auto mb-10">
              The page you&apos;re looking for doesn&apos;t exist or may have been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/en">Back to Homepage</Button>
              <Button href="/en/demo" variant="secondary">
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
