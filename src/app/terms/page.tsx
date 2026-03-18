import type { Metadata } from "next";
import { generatePageMeta } from "@/lib/metadata";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = generatePageMeta({
  title: "Kullanım Şartları",
  description:
    "VisaVault AI kullanım şartları. Platformun kullanımına ilişkin koşullar ve kurallar.",
  path: "/terms",
});

// TODO: Final legal review recommended before production launch.

export default function TermsPage() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-1 mb-4">Kullanım Şartları</h1>
        <p className="body-base mb-10">
          Son güncelleme: Mart 2026
        </p>

        <div className="prose-custom space-y-10">
          <section>
            <h2 className="heading-3 mb-3">1. Kabul</h2>
            <p className="body-base">
              Bu web sitesini (visavaultai.com) veya VisaVault AI platformunu
              kullanarak aşağıdaki kullanım şartlarını kabul etmiş
              sayılırsınız. Bu şartları kabul etmiyorsanız, siteyi ve
              platformu kullanmamanız gerekmektedir.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-3">2. Hizmet Tanımı</h2>
            <p className="body-base">
              VisaVault AI, göçmenlik hukuku alanında çalışan hukuk büroları
              için belge toplama, AI destekli ön inceleme ve avukat kontrollü
              karar akışı sunan bir dijital platformdur. Platform, hukuki
              danışmanlık hizmeti sunmaz ve avukat-müvekkil ilişkisini
              değiştirmez.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-3">3. AI Ön İnceleme Hakkında</h2>
            <p className="body-base">
              Platformdaki AI bileşeni yalnızca ön inceleme desteği sağlar.
              AI tarafından üretilen notlar, öneriler ve işaretlemeler bilgi
              amaçlıdır ve hukuki tavsiye niteliği taşımaz. Belgeler
              hakkındaki nihai kararlar her zaman yetkili avukat tarafından
              verilmelidir. VisaVault AI, AI çıktılarının doğruluğu veya
              tamlığı konusunda garanti vermez.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-3">4. Kullanıcı Sorumlulukları</h2>
            <ul className="list-disc pl-6 space-y-2 body-base">
              <li>Hesap bilgilerinizin gizliliğini korumakla yükümlüsünüz.</li>
              <li>Platformu yalnızca yasal amaçlarla kullanmalısınız.</li>
              <li>Yüklediğiniz belgelerin doğruluğundan siz sorumlusunuz.</li>
              <li>Platformu kötüye kullanma, tersine mühendislik yapma veya güvenlik açığı aramaya yönelik faaliyetler yasaktır.</li>
              <li>AI çıktılarını bağımsız olarak doğrulamak avukatın sorumluluğundadır.</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-3 mb-3">5. Fikri Mülkiyet</h2>
            <p className="body-base">
              Platform, web sitesi ve içerikleri (yazılım, tasarım, metinler,
              grafikler) VisaVault AI&apos;a aittir ve telif hakkı ile
              korunmaktadır. İçeriklerin izinsiz kopyalanması, dağıtılması
              veya ticari amaçla kullanılması yasaktır.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-3">6. Sorumluluk Sınırı</h2>
            <p className="body-base">
              VisaVault AI, platformun kesintisiz veya hatasız çalışacağını
              garanti etmez. Platform kullanımından kaynaklanan doğrudan veya
              dolaylı zararlardan sorumluluğumuz, ilgili mevzuat tarafından
              izin verilen azami ölçüde sınırlıdır. Hukuki kararların
              sorumluluğu her zaman ilgili avukat veya hukuk bürosuna aittir.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-3">7. Hizmet Değişiklikleri</h2>
            <p className="body-base">
              Platformun özelliklerini, fiyatlandırmasını veya kullanım
              şartlarını önceden bildirmek kaydıyla değiştirme hakkımız
              saklıdır. Önemli değişikliklerde kullanıcılara bilgilendirme
              yapılır.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-3">8. Hesap Sonlandırma</h2>
            <p className="body-base">
              Kullanım şartlarının ihlali durumunda hesabınızı askıya alma
              veya sonlandırma hakkımızı saklı tutuyoruz. Bu durumda
              tarafınıza bilgilendirme yapılır.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-3">9. Uygulanacak Hukuk</h2>
            <p className="body-base">
              Bu kullanım şartları, yürürlükteki mevzuata tabi olarak
              yorumlanır. Uyuşmazlıkların çözümünde yetkili mahkemeler
              geçerlidir.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-3">10. İletişim</h2>
            <p className="body-base">
              Kullanım şartlarıyla ilgili sorularınız için{" "}
              <a
                href="mailto:legal@visavaultai.com"
                className="text-brand-accent hover:underline"
              >
                legal@visavaultai.com
              </a>{" "}
              adresinden bize ulaşabilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
}
