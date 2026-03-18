# VisaVault AI — Marketing Website

Immigration law firms için belge toplama, AI destekli ön inceleme ve avukat kontrollü karar akışını tek platformda birleştiren marketing website.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **E-posta:** Resend
- **Deploy:** Vercel

## Proje Yapısı

```
src/
├── app/                        # Next.js App Router sayfalar
│   ├── layout.tsx             # Root layout (fontlar, metadata, header/footer)
│   ├── page.tsx               # Ana sayfa
│   ├── demo/page.tsx          # Demo talep sayfası
│   ├── pilot/page.tsx         # Pilot program sayfası
│   ├── security/page.tsx      # Güvenlik yaklaşımı
│   ├── privacy/page.tsx       # Gizlilik politikası
│   ├── terms/page.tsx         # Kullanım şartları
│   ├── thanks/page.tsx        # Form sonrası teşekkür
│   ├── not-found.tsx          # 404 sayfası
│   ├── sitemap.ts             # Dynamic sitemap
│   ├── robots.ts              # Robots.txt
│   └── api/
│       └── contact/route.ts   # Form submission API
├── components/
│   ├── home/                  # Ana sayfa section bileşenleri
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── ProductProof.tsx
│   │   ├── AttorneyControl.tsx
│   │   ├── Auditability.tsx
│   │   ├── PilotCTA.tsx
│   │   └── FAQ.tsx
│   ├── forms/
│   │   └── ContactForm.tsx    # Demo / Pilot form bileşeni
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── seo/
│   │   └── JsonLd.tsx         # Structured data bileşeni
│   └── ui/
│       ├── Button.tsx
│       ├── SectionWrapper.tsx
│       └── ScreenshotFrame.tsx
├── lib/
│   ├── metadata.ts            # SEO metadata helper
│   ├── structured-data.ts     # JSON-LD schema'ları
│   ├── resend.ts              # Resend e-posta helper
│   └── analytics.ts           # Analytics event helper
└── styles/
    └── globals.css            # Tailwind + custom styles
```

## Kurulum

```bash
# Bağımlılıkları yükle
npm install

# .env dosyasını oluştur
cp .env.example .env.local

# Geliştirme sunucusunu başlat
npm run dev
```

## Environment Variables

| Değişken | Açıklama | Zorunlu |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Site URL'i (canonical, OG, sitemap) | Evet |
| `RESEND_API_KEY` | Resend API anahtarı | Hayır* |
| `FROM_EMAIL` | Gönderici e-posta adresi | Hayır* |
| `CONTACT_TO_EMAIL` | Form bildirimlerinin gideceği adres | Hayır* |

*Resend API key olmadan formlar çalışır, e-posta gönderimi simüle edilir (console'a log yazılır).

## Build

```bash
npm run build
npm run start
```

## Vercel Deploy

1. GitHub'a push et
2. Vercel'de yeni proje oluştur ve repo'yu bağla
3. Environment variables'ları Vercel dashboard'dan tanımla
4. Deploy et

### Domain Ayarı

- Marketing site: `visavaultai.com` (root domain)
- Uygulama (ileride): `app.visavaultai.com` (subdomain)

Vercel dashboard'da:
1. Settings → Domains → `visavaultai.com` ekle
2. DNS kayıtlarını Vercel'in verdiği değerlerle güncelle

## Screenshot Kullanımı

`public/screenshots/` klasörüne gerçek ürün ekran görüntülerini ekleyin.

- `dashboard.png` — Ana dashboard görünümü
- `mobile-upload.png` — Müvekkil mobil belge yükleme
- `review-panel.png` — Avukat inceleme paneli

Desteklenen formatlar: WebP, PNG, AVIF. Next.js Image optimization otomatik çalışır.

ScreenshotFrame bileşeninde `src` prop'unu güncelleyin:
```tsx
<ScreenshotFrame
  src="/screenshots/dashboard.png"
  alt="VisaVault AI — Dosya yönetim paneli"
  device="desktop"
/>
```

## Analytics Entegrasyonu

`src/lib/analytics.ts` dosyasında `trackEvent` fonksiyonu yer alır. Mevcut halinde development console'a log yazar.

Production'da tercih ettiğiniz provider'ı (Plausible, PostHog, GA4 vb.) entegre etmek için bu fonksiyonu güncelleyin.

Öntanımlı event'ler:
- `demo_form_submit`
- `pilot_form_submit`
- `cta_click_demo`
- `cta_click_pilot`
- `faq_expand`

## Notlar

- Legal sayfalar (`/privacy`, `/terms`) başlangıç sürümüdür. Production öncesi hukuki inceleme önerilir.
- AI ön inceleme ifadeleri kasıtlı olarak kontrollü ve gerçekçi tutulmuştur.
- Site Türkçe'dir. i18n altyapısı kurulmamıştır ancak dosya yapısı gelecekte uyumludur.
