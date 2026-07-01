import { motion, Variants } from "framer-motion";
import { Activity, Flame, Medal, Target, BarChart2, Zap, History, Palette, Layers, Star } from "lucide-react";
import { SectionReveal, RevealItem } from "./SectionReveal";

const features = [
  { icon: Activity,  title: "Workout Tracking",      description: "Log every session with precision and detail." },
  { icon: Layers,    title: "Lifetime Counter",       description: "Watch your total reps grow over your entire fitness journey." },
  { icon: Flame,     title: "Streak System",          description: "Daily and weekly streaks that motivate consistency." },
  { icon: Medal,     title: "Achievements & Badges",  description: "Unlock premium rewards as you hit new milestones." },
  { icon: Target,    title: "Goals & Milestones",     description: "Set daily or weekly targets to push your limits." },
  { icon: BarChart2, title: "Rich Analytics",         description: "Visualize charts, trends, and personal records." },
  { icon: Zap,       title: "Performance Insights",   description: "Rest day detection and peak performance patterns." },
  { icon: History,   title: "Workout History",        description: "A complete, searchable log of every past session." },
  { icon: Palette,   title: "Customizable Themes",    description: "Beautifully crafted dark themes built right in." },
  { icon: Star,      title: "Intuitive UX",           description: "Zero learning curve. Open the app and just go." },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 lg:py-32 relative z-10">
      <div className="container mx-auto px-6">

        <SectionReveal className="text-center max-w-3xl mx-auto mb-10 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Built for consistency
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Everything you need to build the habit.
          </h2>
          <p className="text-xl text-muted-foreground">
            No fluff. No distractions. Just powerful tools designed to keep you moving forward, day after day.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0, margin: "0px 0px 100px 0px" }}
              className="group p-4 lg:p-6 rounded-3xl bg-card/40 backdrop-blur-md border border-white/5 hover:bg-card/60 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,107,43,0.08)] relative overflow-hidden"
              style={{ willChange: "transform, opacity, filter" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500 relative z-10">
                <feature.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 relative z-10 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
