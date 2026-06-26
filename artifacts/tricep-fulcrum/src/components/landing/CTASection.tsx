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

function BoxingGlove({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  const gradId = isLeft ? "glv-l" : "glv-r";
  const bandId = isLeft ? "band-l" : "band-r";

  return (
    <svg
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: isLeft ? "scaleX(-1)" : "none" }}
    >
      {/* Main glove body */}
      <path
        d="M12 42 Q8 28 14 18 Q20 8 32 7 L56 7 Q66 7 71 18 Q77 30 72 44 L67 68 Q64 76 55 78 L24 78 Q15 76 12 68 Z"
        fill={`url(#${gradId})`}
      />
      {/* Knuckle ridge */}
      <path d="M22 16 Q37 10 52 16" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M24 24 Q37 18 52 24" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Thumb */}
      <path d="M10 35 Q4 32 5 24 Q6 16 14 18" fill={`url(#${gradId})`} stroke="none"/>
      {/* Wrist band */}
      <rect x="16" y="73" width="48" height="24" rx="9" fill={`url(#${bandId})`}/>
      {/* Band stripe */}
      <rect x="16" y="82" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.12)"/>
      {/* Shine on glove */}
      <ellipse cx="38" cy="22" rx="14" ry="7" fill="rgba(255,255,255,0.10)" style={{ transform: "rotate(-15deg)", transformOrigin: "38px 22px" }}/>
      <defs>
        <linearGradient id={gradId} x1="10" y1="7" x2="72" y2="97" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFA040"/>
          <stop offset="55%" stopColor="#E05500"/>
          <stop offset="100%" stopColor="#991F00"/>
        </linearGradient>
        <linearGradient id={bandId} x1="16" y1="73" x2="64" y2="97" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#CC3A00"/>
          <stop offset="100%" stopColor="#7A1800"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

const GLOVE_SPARKS = [
  { bottom: "5%",  left: "20%", size: 5, delay: 0    },
  { bottom: "15%", left: "50%", size: 7, delay: 0.3  },
  { bottom: "0%",  left: "70%", size: 4, delay: 0.6  },
  { bottom: "20%", left: "35%", size: 5, delay: 0.9  },
];

function GloveFire() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {GLOVE_SPARKS.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            bottom: s.bottom,
            left: s.left,
            width: s.size,
            height: s.size,
            background: "radial-gradient(circle, rgba(255,150,20,1), rgba(255,60,0,0.4))",
            filter: `blur(${s.size / 3}px)`,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -60],
            opacity: [0.9, 0],
            scale: [1, 0.2],
          }}
          transition={{
            duration: 1.4,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
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

          {/* Boxing gloves row */}
          <div className="flex items-end justify-center gap-6 mb-[-28px] relative z-10 select-none">
            {/* Left glove */}
            <motion.div
              className="relative w-24 h-28"
              style={{ transformOrigin: "bottom center", willChange: "transform" }}
              animate={{ rotate: [-28, 12, -28] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
            >
              <GloveFire />
              {/* Fire glow under glove */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full"
                style={{ background: "radial-gradient(ellipse, rgba(255,100,10,0.55) 0%, transparent 70%)", filter: "blur(6px)" }}
                animate={{ scaleX: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
              <BoxingGlove side="left" />
            </motion.div>

            {/* Right glove */}
            <motion.div
              className="relative w-24 h-28"
              style={{ transformOrigin: "bottom center", willChange: "transform" }}
              animate={{ rotate: [28, -12, 28] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
            >
              <GloveFire />
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full"
                style={{ background: "radial-gradient(ellipse, rgba(255,100,10,0.55) 0%, transparent 70%)", filter: "blur(6px)" }}
                animate={{ scaleX: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <BoxingGlove side="right" />
            </motion.div>
          </div>

          {/* Card */}
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
