import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.tricep.fulcrum&pcampaignid=web_share";

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.18 1.07C2.76 1.3 2.5 1.75 2.5 2.31v19.38c0 .56.26 1.01.68 1.24l.1.06 10.86-10.86v-.25L3.28 1.01l-.1.06Z" fill="url(#cta-gp-a)"/>
      <path d="m17.77 15.3-3.62-3.62v-.26l3.62-3.62.08.05 4.29 2.44c1.22.7 1.22 1.82 0 2.52l-4.29 2.44-.08.05Z" fill="url(#cta-gp-b)"/>
      <path d="M17.85 15.25 14.14 11.5 3.18 22.46c.4.43 1.06.48 1.8.05l12.87-7.26" fill="url(#cta-gp-c)"/>
      <path d="M17.85 8.75 4.98 1.49C4.24 1.06 3.58 1.11 3.18 1.54L14.14 12.5l3.71-3.75Z" fill="url(#cta-gp-d)"/>
      <defs>
        <linearGradient id="cta-gp-a" x1="13.3" y1="2.37" x2="-1.42" y2="17.09" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A0FF"/><stop offset="1" stopColor="#00A0FF" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="cta-gp-b" x1="23.04" y1="11.5" x2="2.21" y2="11.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD900"/><stop offset="1" stopColor="#FFCE00" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="cta-gp-c" x1="15.52" y1="13.8" x2="-4.51" y2="33.83" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3A44"/><stop offset="1" stopColor="#C31162"/>
        </linearGradient>
        <linearGradient id="cta-gp-d" x1="0.86" y1="-3.7" x2="9.87" y2="5.31" gradientUnits="userSpaceOnUse">
          <stop stopColor="#32A071"/><stop offset="1" stopColor="#2DA771" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CTASection() {
  return (
    <section id="download" className="py-32 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <SectionReveal className="max-w-3xl mx-auto">
          <div className="relative p-10 md:p-14 rounded-3xl bg-card/40 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.4)] overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none rounded-3xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
                Start your streak today.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                Join thousands of athletes building their push-up habit with Tricep Fulcrum. Free on Google Play.
              </p>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 hover:border-primary/50 transition-all duration-300 shadow-[0_0_20px_rgba(255,107,43,0.1)] hover:shadow-[0_0_40px_rgba(255,107,43,0.25)] group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GooglePlayIcon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">GET IT ON</div>
                  <div className="text-xl font-bold font-display leading-none text-white">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
