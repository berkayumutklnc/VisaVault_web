import Link from "next/link";

const footerLinks = {
  product: [
    { label: "Çözüm", href: "/#solution" },
    { label: "Nasıl Çalışır", href: "/#how-it-works" },
    { label: "Güvenlik", href: "/security" },
  ],
  program: [
    { label: "Demo Talep Et", href: "/demo" },
    { label: "Pilot Program", href: "/pilot" },
  ],
  legal: [
    { label: "Gizlilik Politikası", href: "/privacy" },
    { label: "Kullanım Şartları", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-brand-bg" role="contentinfo">
      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/10 to-transparent" />

      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-heading font-bold text-lg text-brand-text mb-4"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-accent text-brand-bg font-extrabold text-xs">
                V
              </span>
              <span>
                VisaVault <span className="text-brand-accent">AI</span>
              </span>
            </Link>
            <p className="text-sm text-brand-muted/70 max-w-xs leading-relaxed">
              Immigration law firms için belge toplama, AI destekli ön inceleme
              ve avukat kontrollü karar akışını tek platformda birleştirir.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-heading font-semibold text-xs text-brand-muted/50 mb-4 uppercase tracking-widest">
              Ürün
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-brand-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program */}
          <div>
            <h3 className="font-heading font-semibold text-xs text-brand-muted/50 mb-4 uppercase tracking-widest">
              Başlayın
            </h3>
            <ul className="space-y-3">
              {footerLinks.program.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-brand-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-xs text-brand-muted/50 mb-4 uppercase tracking-widest">
              Yasal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-brand-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted/50">
            &copy; {new Date().getFullYear()} VisaVault AI. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-brand-muted/50">
            <Link href="mailto:info@visavaultai.com" className="hover:text-brand-text transition-colors">
              info@visavaultai.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
