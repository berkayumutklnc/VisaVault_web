import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";

export function AttorneyControl() {
  return (
    <SectionWrapper id="attorney-control">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Message */}
        <div>
          <Reveal>
            <span className="eyebrow mb-6 inline-block">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline -mt-0.5 mr-1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Avukat Kontrolü
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="heading-2 mb-6">
              AI Ön İnceleme Yapar,{" "}
              <span className="text-brand-accent">Son Karar Avukata Aittir</span>
            </h2>
          </Reveal>

          <div className="space-y-5">
            {[
              {
                title: "AI, Belgeleri Ön İnceler",
                desc: "Yapay zeka, yüklenen belgeleri kontrol eder ve olası eksiklikleri, uyumsuzlukları işaretler. Bu bir ön filtreleme katmanıdır.",
              },
              {
                title: "Avukat, Kendi Değerlendirmesini Yapar",
                desc: "Avukat, AI ön incelemesini referans alır ancak kendi bağımsız değerlendirmesini yaparak belge hakkında nihai kararı verir.",
              },
              {
                title: "Hiçbir Otomatik Karar Yok",
                desc: "Sistem hiçbir belgeyi otomatik olarak onaylamaz veya reddetmez. Her belge mutlaka bir avukatın incelemesinden geçer.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i + 2, 4) as 0 | 1 | 2 | 3 | 4}>
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent/[0.08] border border-brand-accent/[0.15] flex items-center justify-center transition-colors group-hover:bg-brand-accent/[0.15]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-accent">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-brand-text mb-1">
                      {item.title}
                    </h3>
                    <p className="body-base">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: Visual flow card */}
        <Reveal delay={2}>
          <div className="card p-8 lg:p-10 relative overflow-hidden">
            {/* Top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />

            <div className="space-y-4">
              {/* AI Review step */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-accent-cool/10 border border-brand-accent-cool/20 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent-cool">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-accent-cool">AI Ön İnceleme</p>
                  <p className="text-sm text-brand-muted mt-1">
                    &quot;Pasaport belgesi yüklendi. Geçerlilik tarihi uyumlu. İmza alanı kontrol edilmeli.&quot;
                  </p>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center py-1">
                <div className="w-px h-6 bg-gradient-to-b from-brand-accent-cool/30 to-brand-accent/30" />
              </div>

              {/* Attorney review step */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-accent/[0.03] border border-brand-accent/20">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-accent">Avukat Kararı</p>
                  <p className="text-sm text-brand-muted mt-1">
                    &quot;İmza alanını inceledim, belge kabul edildi. Müvekkile bilgilendirme gönderildi.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
