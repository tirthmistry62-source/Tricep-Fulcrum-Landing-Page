import { Navbar } from "@/components/landing/Navbar";
import { LivingBackground } from "@/components/landing/LivingBackground";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { StatisticsSection } from "@/components/landing/StatisticsSection";
import { JourneySection } from "@/components/landing/JourneySection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Tricep Fulcrum — Build Your Push-Up Habit";
  }, []);

  return (
    <div className="min-h-[100dvh] w-full relative overflow-x-hidden selection:bg-primary/30">
      <LivingBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatisticsSection />
        <JourneySection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
