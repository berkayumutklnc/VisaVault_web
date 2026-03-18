import Image from "next/image";

type ScreenshotFrameProps = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  device?: "desktop" | "mobile" | "panel";
  glow?: boolean;
  priority?: boolean;
};

export function ScreenshotFrame({
  src,
  alt,
  width = 1200,
  height = 750,
  className = "",
  device = "desktop",
  glow = false,
  priority = false,
}: ScreenshotFrameProps) {
  const frameBase = "overflow-hidden relative";
  const deviceStyles = {
    desktop: `${frameBase} rounded-xl border border-white/[0.06] bg-brand-surface shadow-screenshot`,
    mobile: `${frameBase} rounded-2xl border border-white/[0.08] bg-brand-surface shadow-screenshot max-w-[280px]`,
    panel: `${frameBase} rounded-xl border border-white/[0.06] bg-brand-surface shadow-card`,
  };

  return (
    <div className={`relative ${className}`}>
      {/* Glow backdrop */}
      {glow && (
        <div
          className="absolute -inset-8 rounded-3xl opacity-60 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(46,230,166,0.08) 0%, transparent 70%)",
          }}
        />
      )}

      <div className={deviceStyles[device]}>
        {/* Inner top-edge highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* Window bar for desktop/panel */}
        {(device === "desktop" || device === "panel") && (
          <div className="flex items-center gap-2 px-4 py-3 bg-brand-bg-deep/80 border-b border-white/[0.04]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]/70" />
            <span className="ml-3 text-[11px] text-brand-muted/40 font-body tracking-wide">
              app.visavaultai.com
            </span>
          </div>
        )}

        {/* Mobile status bar */}
        {device === "mobile" && (
          <div className="flex items-center justify-center py-2.5 bg-brand-bg-deep/80 border-b border-white/[0.04]">
            <span className="text-[11px] text-brand-muted/50 font-body font-medium tracking-wide">
              VisaVault AI
            </span>
          </div>
        )}

        {src ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto"
            quality={90}
            priority={priority}
          />
        ) : (
          <div
            className="w-full flex items-center justify-center text-brand-muted/30 text-sm font-body"
            style={{
              aspectRatio: `${width}/${height}`,
              background:
                "linear-gradient(180deg, rgba(15,29,53,0.8) 0%, rgba(4,8,22,0.9) 100%)",
            }}
            role="img"
            aria-label={alt}
          >
            {/* Simulated UI skeleton */}
            <div className="w-full h-full p-4 md:p-6 space-y-4 opacity-50">
              {/* Nav bar skeleton */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded bg-brand-accent/20" />
                <div className="w-24 h-3 rounded-full bg-white/[0.06]" />
                <div className="ml-auto flex gap-2">
                  <div className="w-16 h-3 rounded-full bg-white/[0.04]" />
                  <div className="w-16 h-3 rounded-full bg-white/[0.04]" />
                </div>
              </div>

              {device === "mobile" ? (
                /* Mobile skeleton */
                <div className="space-y-3">
                  <div className="w-full h-8 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                    <span className="text-[10px] text-brand-accent/60">Upload</span>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded bg-white/[0.02]">
                        <div className="w-8 h-8 rounded bg-white/[0.04] flex-shrink-0" />
                        <div className="flex-1 space-y-1">
                          <div className="w-3/4 h-2 rounded-full bg-white/[0.06]" />
                          <div className="w-1/2 h-1.5 rounded-full bg-white/[0.03]" />
                        </div>
                        <div className="w-12 h-4 rounded-full bg-brand-accent/15 flex items-center justify-center">
                          <span className="text-[8px] text-brand-accent/50">Ready</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Desktop skeleton */
                <div className="flex gap-4 h-full min-h-[200px]">
                  {/* Sidebar */}
                  <div className="w-1/4 space-y-2 hidden md:block">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`h-7 rounded-lg ${
                          i === 1
                            ? "bg-brand-accent/10 border border-brand-accent/20"
                            : "bg-white/[0.02]"
                        }`}
                      />
                    ))}
                  </div>
                  {/* Main content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-40 h-4 rounded-full bg-white/[0.06]" />
                      <div className="flex gap-2">
                        <div className="w-16 h-5 rounded-full bg-brand-accent/15" />
                        <div className="w-16 h-5 rounded-full bg-white/[0.04]" />
                      </div>
                    </div>
                    {/* Table rows */}
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.015] border border-white/[0.03]"
                      >
                        <div className="w-8 h-8 rounded bg-white/[0.04]" />
                        <div className="flex-1 space-y-1">
                          <div className="w-1/3 h-2.5 rounded-full bg-white/[0.06]" />
                          <div className="w-1/5 h-2 rounded-full bg-white/[0.03]" />
                        </div>
                        <div
                          className={`w-16 h-5 rounded-full ${
                            i <= 2
                              ? "bg-brand-accent/15"
                              : i === 3
                              ? "bg-amber-500/15"
                              : "bg-white/[0.04]"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
