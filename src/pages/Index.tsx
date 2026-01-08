import { ParallaxHero } from "@/components/landing/ParallaxHero";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { BiomesPreview } from "@/components/landing/BiomesPreview";
import { CTASection } from "@/components/landing/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ParallaxHero />
      <FeatureSection />
      <BiomesPreview />
      <CTASection />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Kinetic</span>
            <span className="text-xl font-bold text-cyan-glow">Codex</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Kinetic Codex. Master algorithms through motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
