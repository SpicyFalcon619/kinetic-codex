import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Crown, Sword, Shield } from "lucide-react";
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
      {/* Background Layer - Castle Silhouettes */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        {/* Distant Mountains/Castles */}
        <svg className="absolute bottom-0 w-full h-[400px] text-parchment-dark/30" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path d="M0,400 L0,200 L100,180 L120,100 L140,180 L200,160 L300,180 L350,80 L360,180 L450,150 L550,170 L600,60 L610,170 L700,150 L800,180 L850,90 L860,180 L950,160 L1050,180 L1100,70 L1110,180 L1200,150 L1300,170 L1350,100 L1360,180 L1440,160 L1440,400 Z" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Floating Banners & Shields */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[8%] w-20 h-28 gradient-gold rounded-t-lg banner-ribbon opacity-60"
        />
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-40 right-[12%] w-16 h-24 bg-emerald rounded-t-lg banner-ribbon opacity-50"
        />
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-60 left-[25%] w-14 h-20 bg-ruby/60 rounded-t-lg banner-ribbon opacity-40"
        />
      </motion.div>

      {/* Midground Layer - Decorative Elements */}
      <motion.div style={{ y: midgroundY }} className="absolute inset-0">
        <Shield className="absolute top-40 left-[6%] w-20 h-20 text-gold/20" />
        <Sword className="absolute top-52 right-[8%] w-16 h-16 text-stone/20 rotate-45" />
        <Crown className="absolute bottom-60 left-[18%] w-14 h-14 text-gold/15" />
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
          {/* Crown Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/90 backdrop-blur-sm border-2 border-gold/30 mb-8 shadow-lg"
          >
            <Crown className="w-5 h-5 text-gold animate-bounce-gentle" />
            <span className="text-sm font-display font-medium text-foreground">A Royal Quest Awaits</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-wide mb-6"
          >
            <span className="text-foreground">Code</span>
            <br />
            <span className="text-gold text-glow-gold">Kingdom</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Embark on epic quests to master algorithms. Join guilds, complete challenges,
            and rise through the ranks of the realm!
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
              className="group relative px-10 py-7 text-lg font-display font-semibold gradient-gold text-primary-foreground hover:opacity-90 transition-all duration-300 box-glow-gold rounded-xl border-2 border-gold-dark/30"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Sword className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Begin Your Quest
                <Shield className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
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
          <span className="text-sm text-muted-foreground font-display">Explore the Realm</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-gold" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};