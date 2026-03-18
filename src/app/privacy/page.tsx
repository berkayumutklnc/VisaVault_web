import type { Metadata } from "next";
import { generatePageMeta } from "@/lib/metadata";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = generatePageMeta({
  title: "Gizlilik Politikası",
  description:
    "VisaVault AI gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi.",
  path: "/privacy",
});

// TODO: Final legal review recommended before production launch.

export default function PrivacyPage() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-1 mb-4">Gizlilik Politikası</h1>
        <p className="body-base mb-10">
          Son güncelleme: Mart 2026
        </p>

        <div className="prose-custom space-y-10">
          <section>
            <h2 className="heading-3 mb-3">1. Genel Bakış</h2>
            <p className="body-base">
              VisaVault AI (&quot;Platform&quot;, &quot;biz&quot;), kullanıcılarının
              gizliliğine önem verir. Bu gizlilik politikası, web sitemiz
              (visavaultai.com) ve platformumuz aracılığıyla toplanan kişisel
              verilerin nasıl işlendiğini açıklar.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-3">2. Toplanan Veriler</h2>
            <p className="body-base mb-3">
              Aşağıdaki bilgiler, iletişim formları ve platform kullanımı
              sırasında toplanabilir:
            </p>
            <ul className="list-disc pl-6 space-y-2 body-base">
              <li>Ad, soyad ve iletişim bilgileri (e-posta adresi)</li>
              <li>Hukuk bürosu veya şirket adı</li>
              <li>Mesleki rol bilgisi</li>
              <li>İş hacmine ilişkin genel bilgiler</li>
              <li>Form aracılığıyla iletilen mesajlar ve notlar</li>
              <li>Web sitesi kullanım verileri (çerezler, sayfa ziyareti gibi teknik bilgiler)</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-3 mb-3">3. Verilerin Kullanım Amacı</h2>
            <p className="body-base mb-3">Toplanan veriler şu amaçlarla kullanılır:</p>
            <ul className="list-disc pl-6 space-y-2 body-base">
              <li>Demo ve pilot program taleplerinin işlenmesi</li>
              <li>İletişim ve bilgilendirme</li>
              <li>Hizmet kalitesinin iyileştirilmesi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-3 mb-3">4. Verilerin Paylaşımı</h2>
            <p className="body-base">
              Kişisel verileriniz, açık onayınız olmadan üçüncü taraflarla
              pazarlama amacıyla paylaşılmaz. Veriler, hizmet sağlayıcılarımız
              (e-posta gönderim servisi, hosting sağlayıcısı gibi) tarafından
              yalnızca hizmet sunumu amacıyla işlenebilir. Bu sağlayıcılar,
              verileri kendi amaçları için kullanmamaları yönünde
              yükümlülüklerle bağlıdır.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-3">5. Veri Güvenliği</h2>
            <p className="body-base">
              Kişisel verilerinizin korunması için uygun teknik ve
              organizasyonel önlemler alınır. Veriler güvenli sunucularda
              saklanır ve erişim yetkileri sınırlandırılır. Ancak, internet
              üzerinden yapılan hiçbir iletimin mutlak güvenliği garanti
              edilemez.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-3">6. Çerezler</h2>
            <p className="body-base">
              Web sitemiz, temel işlevselliği sağlamak için teknik çerezler
              kullanabilir. Analitik veya pazarlama çerezleri kullanılması
              durumunda ayrıca bilgilendirme yapılır ve gerekli onaylar
              alınır.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-3">7. Haklarınız</h2>
            <p className="body-base mb-3">
              İlgili veri koruma mevzuatı kapsamında aşağıdaki haklara
              sahipsiniz:
            </p>
            <ul className="list-disc pl-6 space-y-2 body-base">
              <li>Verilerinize erişim talep etme</li>
              <li>Verilerinizin düzeltilmesini veya silinmesini isteme</li>
              <li>Veri işlenmesine itiraz etme</li>
              <li>Veri taşınabilirliği talep etme</li>
            </ul>
            <p className="body-base mt-3">
              Bu haklarınızı kullanmak için{" "}
              <a
                href="mailto:privacy@visavaultai.com"
                className="text-brand-accent hover:underline"
              >
                privacy@visavaultai.com
              </a>{" "}
              adresinden bize ulaşabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-3">8. Değişiklikler</h2>
            <p className="body-base">
              Bu gizlilik politikası zaman zaman güncellenebilir.
              Değişiklikler bu sayfada yayımlanır. Önemli değişikliklerde
              ek bilgilendirme yapılabilir.
            </p>
          </section>

          <section>
            <h2 className="heading-3 mb-3">9. İletişim</h2>
            <p className="body-base">
              Gizlilik politikamızla ilgili sorularınız için{" "}
              <a
                href="mailto:privacy@visavaultai.com"
                className="text-brand-accent hover:underline"
              >
                privacy@visavaultai.com
              </a>{" "}
              adresinden bize ulaşabilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
}
