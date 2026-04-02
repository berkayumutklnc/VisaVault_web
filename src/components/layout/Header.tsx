"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/get-dictionary";

type HeaderDict = Dictionary["header"];

export function Header({ locale, dict }: { locale: Locale; dict: HeaderDict }) {
  const lp = `/${locale}`; // locale prefix

  const navLinks = [
    { label: dict.nav.solution, href: `${lp}#solution` },
    { label: dict.nav.howItWorks, href: `${lp}#how-it-works` },
    { label: dict.nav.security, href: `${lp}/security` },
    { label: dict.nav.pilot, href: `${lp}/pilot` },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_20px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className={`container-main flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14 md:h-16" : "h-16 md:h-18"}`}>
        {/* Logo */}
        <Link
          href={lp}
          className="flex items-center gap-2.5 font-heading font-bold text-xl text-brand-text"
          aria-label={dict.ariaHome}
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-accent text-brand-bg font-extrabold text-sm">
            V
          </span>
          <span>
            VisaVault{" "}
            <span className="text-brand-accent">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label={dict.ariaNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-brand-muted hover:text-brand-text transition-colors font-body"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Button href={`${lp}/demo`} size="sm">
            {dict.cta}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-brand-muted hover:text-brand-text"
          aria-label={mobileOpen ? dict.ariaMenuClose : dict.ariaMenuOpen}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="md:hidden bg-brand-bg/95 backdrop-blur-xl border-t border-white/[0.06]"
          aria-label={dict.ariaMobileNav}
        >
          <div className="container-main py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-brand-muted hover:text-brand-text transition-colors py-2 font-body"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <LanguageSwitcher locale={locale} />
            </div>
            <Button href={`${lp}/demo`} size="default" onClick={() => setMobileOpen(false)}>
              {dict.cta}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
