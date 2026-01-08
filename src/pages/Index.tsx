import { ParallaxHero } from "@/components/landing/ParallaxHero";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { BiomesPreview } from "@/components/landing/BiomesPreview";
import { CTASection } from "@/components/landing/CTASection";
import { Crown, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ParallaxHero />
      <FeatureSection />
      <BiomesPreview />
      <CTASection />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t-2 border-border bg-card/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center">
              <Crown className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="text-xl font-display font-bold">Code</span>
              <span className="text-xl font-display font-bold text-gold ml-1">Kingdom</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground font-display">
            © 2026 Code Kingdom. Master algorithms through epic quests.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;