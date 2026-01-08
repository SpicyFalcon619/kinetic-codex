import { motion } from "framer-motion";
import { ArrowLeft, Pause, Play, RotateCcw, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Visualizer } from "@/components/simulation/Visualizer";
import { WebcamOverlay } from "@/components/simulation/WebcamOverlay";
import { useState } from "react";

const Simulation = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex-shrink-0 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground">Sorting Plains</span>
                <span className="text-xs text-muted-foreground">/</span>
                <span className="text-xs font-mono text-amber-active">Level 1-3</span>
              </div>
              <h1 className="text-lg font-semibold">Quick Divide</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => setIsPaused(!isPaused)}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <RotateCcw className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <HelpCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content - Split Layout */}
      <main className="flex-1 flex flex-col lg:flex-row p-6 gap-6 overflow-hidden">
        {/* Visualizer - Main Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 min-h-[400px] lg:min-h-0 p-6 rounded-2xl bg-card border border-border"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <Visualizer />
        </motion.div>

        {/* Webcam Overlay - Side Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-80 xl:w-96 p-6 rounded-2xl bg-card border border-border"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <WebcamOverlay />
        </motion.div>
      </main>

      {/* Progress Bar */}
      <footer className="flex-shrink-0 px-6 py-4 border-t border-border">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Progress</span>
          <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "35%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-glow to-amber-active"
            />
          </div>
          <span className="text-sm font-mono text-muted-foreground">35%</span>
        </div>
      </footer>
    </div>
  );
};

export default Simulation;
