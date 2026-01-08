import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ParallaxHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const midgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] overflow-hidden"
    >
      {/* Background Layer - Grid Pattern */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-50"
      />

      {/* Floating Orbs - Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-cyan-glow/5 blur-3xl animate-pulse-glow" />
        <div className="absolute top-40 right-[15%] w-96 h-96 rounded-full bg-amber-active/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-[20%] w-72 h-72 rounded-full bg-cyan-glow/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
      </motion.div>

      {/* Midground Layer - Geometric Elements */}
      <motion.div style={{ y: midgroundY }} className="absolute inset-0">
        <svg className="absolute top-32 left-[5%] w-40 h-40 text-cyan-glow/20" viewBox="0 0 100 100">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        <svg className="absolute top-60 right-[10%] w-32 h-32 text-amber-active/20" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
        </svg>
        <svg className="absolute bottom-60 left-[15%] w-24 h-24 text-cyan-glow/15" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Main Content - Foreground */}
      <motion.div
        style={{ y: foregroundY, opacity }}
        className="sticky top-0 h-screen flex flex-col items-center justify-center px-6"
      >
        <motion.div
          style={{ y: textY }}
          className="text-center max-w-4xl"
        >
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-glow" />
            <span className="text-sm font-medium text-muted-foreground">Immersive Learning Experience</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">Kinetic</span>
            <br />
            <span className="text-cyan-glow text-glow-cyan">Codex</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Master algorithms through motion. Transform abstract concepts into 
            muscle memory with gesture-driven learning.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => navigate("/dashboard")}
              className="group relative px-8 py-6 text-lg font-semibold bg-void-deep text-primary-foreground hover:bg-void-soft transition-all duration-300 box-glow-cyan"
            >
              <span className="relative z-10 flex items-center gap-2">
                Begin the Pilgrimage
                <Sparkles className="w-5 h-5 group-hover:text-amber-active transition-colors" />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-cyan-glow" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
