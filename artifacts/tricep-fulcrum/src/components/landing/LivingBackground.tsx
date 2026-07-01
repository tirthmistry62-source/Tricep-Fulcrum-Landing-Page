import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LivingBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Drifting Orbs - Simplified for Mobile */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[60px] md:blur-[100px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(138,43,226,1) 0%, rgba(0,0,0,0) 70%)',
        }}
        animate={{
          x: mousePos.x * -50,
          y: mousePos.y * -50,
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-[0.15]"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,43,1) 0%, rgba(0,0,0,0) 70%)',
        }}
        animate={{
          x: mousePos.x * 30,
          y: mousePos.y * 30,
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] rounded-full mix-blend-screen filter blur-[90px] md:blur-[130px] opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle, rgba(65,105,225,1) 0%, rgba(0,0,0,0) 70%)',
        }}
        animate={{
          x: mousePos.x * 40,
          y: mousePos.y * -20,
          scale: [0.95, 1.05, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
