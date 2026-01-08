import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crown, Sword, Shield, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-emerald/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        {/* Crown Icon */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 border-2 border-gold/30 mb-8"
        >
          <Crown className="w-10 h-10 text-gold" />
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
          Your Kingdom
          <br />
          <span className="text-gold text-glow-gold">Awaits</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Rise from apprentice to grand master. Earn XP, collect achievements, 
          and become a legend of the Code Kingdom.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => navigate("/dashboard")}
            className="group px-10 py-7 text-lg font-display font-semibold gradient-gold text-primary-foreground hover:opacity-90 transition-all duration-300 box-glow-gold rounded-xl border-2 border-gold-dark/30"
          >
            <span className="flex items-center gap-3">
              <Sword className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Enter the Kingdom
              <Shield className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/simulation")}
            className="px-10 py-7 text-lg font-display font-semibold border-2 border-border hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 rounded-xl"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold" />
              Try a Quest
            </span>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};