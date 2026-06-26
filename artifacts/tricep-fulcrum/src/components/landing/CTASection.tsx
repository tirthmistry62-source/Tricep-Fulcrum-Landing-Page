import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function CTASection() {
  return (
    <section id="download" className="py-32 relative z-10 overflow-hidden">
      {/* Background Gradient Spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
            Start your streak today.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of athletes building their push-up habit with Tricep Fulcrum. Free on Google Play.
          </p>

          <a 
            href="#" 
            className="inline-flex items-center gap-4 px-8 py-5 rounded-3xl bg-card/60 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 shadow-[0_0_30px_rgba(255,107,43,0.1)] hover:shadow-[0_0_50px_rgba(255,107,43,0.2)] group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 fill-primary text-primary" />
            </div>
            <div className="text-left">
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">GET IT ON</div>
              <div className="text-xl font-bold font-display leading-none text-white">Google Play</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
