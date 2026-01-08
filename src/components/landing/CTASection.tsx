import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-glow/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-amber-active/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Begin Your
          <br />
          <span className="text-cyan-glow text-glow-cyan">Pilgrimage</span>?
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          The Codex awaits. Restore order to the digital realm and 
          master the algorithms that power our world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => navigate("/dashboard")}
            className="group px-8 py-6 text-lg font-semibold bg-void-deep text-primary-foreground hover:bg-void-soft transition-all duration-300 box-glow-cyan"
          >
            <span className="flex items-center gap-2">
              Enter the Codex
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/simulation")}
            className="px-8 py-6 text-lg font-semibold border-border hover:border-cyan-glow/50 hover:bg-cyan-glow/5 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Try Demo
            </span>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
