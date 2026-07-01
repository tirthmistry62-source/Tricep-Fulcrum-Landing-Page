import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ value, duration = 2 }: { value: number, duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [hasTriggered, setHasTriggered] = useState(false);
  
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });
  
  const display = useTransform(spring, (current) => {
    return Math.floor(current).toLocaleString();
  });

  useEffect(() => {
    if (isInView && !hasTriggered) {
      setHasTriggered(true);
      spring.set(value);
    }
  }, [isInView, hasTriggered, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function StatisticsSection() {
  const stats = [
    { value: 10000, suffix: "+", label: "Push-ups tracked on launch day" },
    { value: 365, suffix: "d", label: "Streak possible" },
    { value: 50, suffix: "+", label: "Achievements to unlock" },
    { value: 12, suffix: "", label: "Unique themes" },
    { value: 4.9, suffix: "★", label: "Average rating", isFloat: true },
  ];

  return (
    <section id="statistics" className="py-12 lg:py-32 relative z-10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }} />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0, margin: "0px 0px 300px 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
              className="flex flex-col items-center text-center space-y-2 lg:space-y-4"
            >
              <div className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tighter drop-shadow-[0_0_15px_rgba(255,107,43,0.3)]">
                {stat.isFloat ? (
                  <span>{stat.value}</span>
                ) : (
                  <AnimatedCounter value={stat.value} />
                )}
                {stat.suffix}
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium max-w-[150px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
