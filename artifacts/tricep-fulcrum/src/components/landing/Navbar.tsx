import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    
    // If not on home page, go home first
    if (location !== "/") {
      setLocation("/");
      // Need a slight delay to allow rendering before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }
    
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Features", id: "features" },
    { name: "Statistics", id: "statistics" },
    { name: "Journey", id: "journey" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/60 backdrop-blur-xl border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 group outline-none"
        >
          <img
            src="/tf-logo.png"
            alt="Tricep Fulcrum"
            className="w-10 h-10 rounded-xl object-cover shadow-[0_0_20px_rgba(200,150,30,0.35)] group-hover:shadow-[0_0_32px_rgba(200,150,30,0.55)] transition-shadow"
          />
          <span className="font-display font-semibold text-lg tracking-tight hidden sm:block">
            Tricep Fulcrum
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none"
              >
                {link.name}
              </button>
            ))}
          </div>
          
          <Button 
            onClick={() => scrollToSection("download")}
            className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-primary/30 hover:border-primary/60 shadow-[0_0_15px_rgba(255,107,43,0.15)] hover:shadow-[0_0_25px_rgba(255,107,43,0.25)] transition-all font-medium px-6 gap-2"
          >
            <Play className="w-4 h-4 fill-primary text-primary" />
            Get on Play Store
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-lg font-medium text-left py-3 border-b border-white/5 text-muted-foreground hover:text-foreground outline-none"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("download")}
                className="mt-4 rounded-full bg-primary hover:bg-primary/90 text-white font-medium w-full py-6 text-lg"
              >
                Get on Play Store
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
