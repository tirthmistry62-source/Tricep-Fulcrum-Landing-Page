import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

function PhoneMockup() {
  return (
    <motion.div 
      className="relative w-[320px] h-[650px] rounded-[3rem] border-[8px] border-[#1a1a1a] bg-[#0a0a0c] shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(255,255,255,0.05)] overflow-hidden shrink-0 mx-auto"
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-[#1a1a1a] rounded-b-3xl z-20" />
      
      {/* Screen Content */}
      <div className="absolute inset-0 p-6 flex flex-col pt-12">
        <div className="flex justify-between items-center mb-8">
          <span className="text-white/50 text-sm font-medium">Today</span>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
        </div>

        {/* Big Counter */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 rounded-full border-4 border-white/5 flex items-center justify-center mb-8">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle 
                cx="96" cy="96" r="90" 
                fill="none" 
                stroke="url(#gradient)" 
                strokeWidth="8" 
                strokeDasharray="565" 
                strokeDashoffset="150"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B2B" />
                  <stop offset="100%" stopColor="#8A2BE2" />
                </linearGradient>
              </defs>
            </svg>
            <div className="text-center">
              <div className="text-6xl font-display font-bold tracking-tighter text-white">42</div>
              <div className="text-sm text-white/50 font-medium">/ 50 Reps</div>
            </div>
          </div>
          
          <div className="flex gap-4 w-full">
            <div className="flex-1 bg-white/5 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">12</div>
              <div className="text-xs text-white/50">Day Streak</div>
            </div>
            <div className="flex-1 bg-white/5 rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">840</div>
              <div className="text-xs text-white/50">Total</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Text */}
          <motion.div 
            style={{ y, opacity }}
            className="flex-1 max-w-2xl text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Now available on Android
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">
                Build the habit.<br />
                Own the streak.
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Tricep Fulcrum is the beautifully crafted, obsessively polished push-up tracker that actually keeps you going.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(255,107,43,0.3)] hover:shadow-[0_0_30px_rgba(255,107,43,0.5)] transition-all">
                  Download Free
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-lg h-14 px-8 bg-white/5 border-white/10 hover:bg-white/10 text-white backdrop-blur-sm">
                  Learn More
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground font-medium">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center overflow-hidden">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}&backgroundColor=transparent`} alt="avatar" className="w-full h-full opacity-50 grayscale" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex text-primary">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <span>Trusted by 10,000+ athletes</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex-1 relative perspective-1000 w-full flex justify-center"
          >
            {/* Glow Behind Phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
            <PhoneMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
