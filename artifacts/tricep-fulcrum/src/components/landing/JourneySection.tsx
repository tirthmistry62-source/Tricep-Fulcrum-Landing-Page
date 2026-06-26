import { motion } from "framer-motion";

const phases = [
  {
    num: "01",
    title: "The Idea",
    desc: "Noticed no app truly focused on the push-up habit. Everything was cluttered and generic. We needed something built for consistency."
  },
  {
    num: "02",
    title: "Design & Development",
    desc: "Eight months of crafting every screen, every animation, every interaction. Obsessing over the perfect dark mode and tactile feedback."
  },
  {
    num: "03",
    title: "Testing & Polish",
    desc: "Hundreds of test sessions, obsessive detail refinement. Ensuring the app felt blazing fast and never interrupted the workout flow."
  },
  {
    num: "04",
    title: "Launch",
    desc: "Published on Google Play Store. The community response exceeded every expectation, proving the need for a dedicated, premium tracker."
  }
];

export function JourneySection() {
  return (
    <section id="journey" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            The Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            How we built the ultimate push-up tracker.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col md:flex-row gap-8 relative items-start ${
                  i % 2 === 0 ? "md:flex-row-reverse text-left md:text-right" : "text-left"
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-white/5 flex items-center justify-center text-primary font-bold font-display z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {phase.num}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-24 md:px-12 ${i % 2 === 0 ? "md:pr-12 md:pl-0" : ""}`}>
                  <div className="p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-white/5 hover:bg-card/60 transition-colors">
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
