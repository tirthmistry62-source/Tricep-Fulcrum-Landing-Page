import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { Code2, Dumbbell, Trophy, Zap } from "lucide-react";

const phases = [
  {
    num: "01",
    title: "The Spark",
    desc: "Noticed a clear gap — no app truly dedicated to tracking push-ups with depth and intention. Everything felt cluttered, generic, or built for a different purpose. The idea was simple: build the tool that should have already existed."
  },
  {
    num: "02",
    title: "Building the Foundation",
    desc: "Development began in earnest — navigating countless errors, dead ends, and rebuilds. Each obstacle sharpened the architecture. After weeks of iteration, the core structure finally clicked into place."
  },
  {
    num: "03",
    title: "Polish & Refinement",
    desc: "With the foundation solid, focus shifted to craft. Every animation, every transition, every screen was refined until it matched the original vision — a premium experience that felt as good as it performed."
  },
  {
    num: "04",
    title: "First Rejection",
    desc: "The first Google Play Store submission was rejected — insufficient testing coverage flagged by the review team. A setback, not a stop. The testing suite was improved, the gaps were closed, and the app was resubmitted with confidence."
  },
  {
    num: "05",
    title: "Live on Google Play",
    desc: "Five months of relentless work culminated in a successful launch. Tricep Fulcrum is now live on the Google Play Store. The journey continues — feedback is welcomed, and the app will keep evolving."
  }
];

export function JourneySection() {
  return (
    <section id="journey" className="py-20 lg:py-32 relative z-10">
      <div className="container mx-auto px-6">

        <SectionReveal className="text-center max-w-3xl mx-auto mb-10 lg:mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            The Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            Five months of relentless building — from an idea to the Play Store.
          </p>
        </SectionReveal>

        {/* Developer Card */}
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "none" }}
          whileInView={{ opacity: 1, y: 0, filter: "none" }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "transform, opacity, filter" }}
          className="max-w-3xl mx-auto mb-12 lg:mb-24"
        >
          <div className="relative p-6 md:p-10 rounded-3xl bg-card/40 backdrop-blur-md border border-white/8 overflow-hidden">
            {/* Subtle gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 pointer-events-none rounded-3xl" />

            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              {/* Avatar / Logo */}
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-[0_0_24px_rgba(200,150,30,0.25)]">
                  <img src="/tf-logo.png" alt="Tirth M" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                  Meet the Developer
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                  Tirth M
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founder of <span className="text-white font-medium">Stryke Labs</span> and the developer behind Tricep Fulcrum. A teenager driven by curiosity across tech, AI, and software development — Tirth likes to build tools that solve real problems, not imaginary ones.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 text-sm text-muted-foreground">
                    <Code2 className="w-4 h-4 text-primary shrink-0" />
                    Tech &amp; AI Enthusiast
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 text-sm text-muted-foreground">
                    <Dumbbell className="w-4 h-4 text-primary shrink-0" />
                    Fitness Tech Builder
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 text-sm text-muted-foreground">
                    <Trophy className="w-4 h-4 text-primary shrink-0" />
                    State &amp; Asia Open Karate Champion
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 text-sm text-muted-foreground">
                    <Zap className="w-4 h-4 text-primary shrink-0" />
                    Founder, Stryke Labs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28, filter: "none" }}
                whileInView={{ opacity: 1, y: 0, filter: "none" }}
                viewport={{ once: true, amount: 0.01 }}
                transition={{ duration: 1.0, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: "transform, opacity, filter" }}
                className={`flex flex-col md:flex-row gap-8 relative items-start ${
                  i % 2 === 0 ? "md:flex-row-reverse text-left md:text-right" : "text-left"
                }`}
              >
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center text-primary font-bold font-display text-sm z-10 shadow-[0_0_20px_rgba(255,107,43,0.15)]">
                  {phase.num}
                </div>

                {/* Card */}
                <div className={`w-full md:w-1/2 pl-24 md:px-12 ${i % 2 === 0 ? "md:pr-12 md:pl-0" : ""}`}>
                  <div className="p-6 md:p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-white/5 hover:bg-card/60 hover:border-white/10 transition-all duration-500">
                    <h3 className="text-2xl font-bold mb-4 font-display text-white">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
