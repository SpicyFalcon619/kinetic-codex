import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Bar {
  value: number;
  isActive: boolean;
  isSwapping: boolean;
  isSorted: boolean;
}

export const Visualizer = () => {
  const [bars, setBars] = useState<Bar[]>([]);

  useEffect(() => {
    // Initialize with random values
    const initialBars = Array.from({ length: 12 }, () => ({
      value: Math.floor(Math.random() * 80) + 20,
      isActive: false,
      isSwapping: false,
      isSorted: false,
    }));
    setBars(initialBars);
  }, []);

  const getBarColor = (bar: Bar) => {
    if (bar.isSorted) return "bg-cyan-glow";
    if (bar.isSwapping) return "bg-amber-active";
    if (bar.isActive) return "bg-cyan-soft";
    return "bg-void-soft";
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Bubble Sort</h2>
          <p className="text-sm text-muted-foreground">Use "The Pinch" to swap adjacent elements</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-void-soft" />
            <span className="text-xs text-muted-foreground">Unsorted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-active" />
            <span className="text-xs text-muted-foreground">Swapping</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-glow" />
            <span className="text-xs text-muted-foreground">Sorted</span>
          </div>
        </div>
      </div>

      {/* Bars Visualization */}
      <div className="flex-1 flex items-end justify-center gap-2 p-8 bg-secondary/30 rounded-2xl border border-border">
        {bars.map((bar, index) => (
          <motion.div
            key={index}
            className={`w-12 rounded-t-lg ${getBarColor(bar)} transition-colors duration-200`}
            style={{ height: `${bar.value}%` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="w-full h-full flex items-end justify-center pb-2">
              <span className="text-xs font-mono text-primary-foreground/80">
                {bar.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
