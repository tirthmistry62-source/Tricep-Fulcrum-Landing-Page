import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.tricep.fulcrum&pcampaignid=web_share";

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.18 1.07C2.76 1.3 2.5 1.75 2.5 2.31v19.38c0 .56.26 1.01.68 1.24l.1.06 10.86-10.86v-.25L3.28 1.01l-.1.06Z" fill="url(#gp-a)"/>
      <path d="m17.77 15.3-3.62-3.62v-.26l3.62-3.62.08.05 4.29 2.44c1.22.7 1.22 1.82 0 2.52l-4.29 2.44-.08.05Z" fill="url(#gp-b)"/>
      <path d="M17.85 15.25 14.14 11.5 3.18 22.46c.4.43 1.06.48 1.8.05l12.87-7.26" fill="url(#gp-c)"/>
      <path d="M17.85 8.75 4.98 1.49C4.24 1.06 3.58 1.11 3.18 1.54L14.14 12.5l3.71-3.75Z" fill="url(#gp-d)"/>
      <defs>
        <linearGradient id="gp-a" x1="13.3" y1="2.37" x2="-1.42" y2="17.09" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A0FF"/>
          <stop offset="1" stopColor="#00A0FF" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="gp-b" x1="23.04" y1="11.5" x2="2.21" y2="11.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD900"/>
          <stop offset="1" stopColor="#FFCE00" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="gp-c" x1="15.52" y1="13.8" x2="-4.51" y2="33.83" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3A44"/>
          <stop offset="1" stopColor="#C31162"/>
        </linearGradient>
        <linearGradient id="gp-d" x1="0.86" y1="-3.7" x2="9.87" y2="5.31" gradientUnits="userSpaceOnUse">
          <stop stopColor="#32A071"/>
          <stop offset="1" stopColor="#2DA771" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Features",   id: "features"   },
    { name: "Statistics", id: "statistics" },
    { name: "Journey",    id: "journey"    },
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

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mr-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Play Store button — always visible */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-primary/30 hover:border-primary/60 shadow-[0_0_15px_rgba(255,107,43,0.15)] hover:shadow-[0_0_25px_rgba(255,107,43,0.25)] transition-all font-medium px-4 py-2 text-sm"
          >
            <GooglePlayIcon className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Get on Play Store</span>
            <span className="sm:hidden">Download</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
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
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium w-full py-4 text-lg transition-colors"
              >
                <GooglePlayIcon className="w-5 h-5 shrink-0" />
                Get on Play Store
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
