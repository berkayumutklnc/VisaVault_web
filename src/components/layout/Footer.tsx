import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/get-dictionary";

type FooterDict = Dictionary["footer"];

export function Footer({ locale, dict }: { locale: Locale; dict: FooterDict }) {
  const lp = `/${locale}`;

  const footerLinks = {
    product: [
      { label: dict.navSolution, href: `${lp}#solution` },
      { label: dict.navHowItWorks, href: `${lp}#how-it-works` },
      { label: dict.navSecurity, href: `${lp}/security` },
    ],
    program: [
      { label: dict.navDemo, href: `${lp}/demo` },
      { label: dict.navPilot, href: `${lp}/pilot` },
    ],
    legal: [
      { label: dict.navPrivacy, href: `${lp}/privacy` },
      { label: dict.navTerms, href: `${lp}/terms` },
    ],
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-brand-bg" role="contentinfo">
      {/* Top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/10 to-transparent" />

      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href={lp}
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
              {dict.description}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-heading font-semibold text-xs text-brand-muted/50 mb-4 uppercase tracking-widest">
              {dict.product}
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
              {dict.getStarted}
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
              {dict.legal}
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
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-brand-muted/50">
            &copy; {new Date().getFullYear()} VisaVault AI. {dict.copyright}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-brand-muted/50">
            <span className="font-medium text-brand-muted/70">Berkay Umut KILINÇ — Founder</span>
            <span className="hidden sm:inline">·</span>
            <Link href="mailto:berkay@visavaultai.com" className="hover:text-brand-text transition-colors">
              berkay@visavaultai.com
            </Link>
            <span className="hidden sm:inline">·</span>
            <Link href="tel:+905541790203" className="hover:text-brand-text transition-colors">
              +90 (554) 179 02 03
            </Link>
            <span className="hidden sm:inline">·</span>
            <Link
              href="https://www.linkedin.com/in/visavault-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-text transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
