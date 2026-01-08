import { motion } from "framer-motion";
import { Camera, CameraOff, Keyboard, Hand } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const WebcamOverlay = () => {
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [controlMode, setControlMode] = useState<"gesture" | "keyboard">("gesture");

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="h-full flex flex-col"
    >
      {/* Mode Toggle */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium">Control Mode</span>
        <div className="flex rounded-lg bg-secondary p-1">
          <button
            onClick={() => setControlMode("gesture")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all ${
              controlMode === "gesture"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Hand className="w-4 h-4" />
            Gesture
          </button>
          <button
            onClick={() => setControlMode("keyboard")}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all ${
              controlMode === "keyboard"
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Keyboard className="w-4 h-4" />
            Keyboard
          </button>
        </div>
      </div>

      {/* Camera Feed Area */}
      <div className="flex-1 relative rounded-2xl overflow-hidden bg-void-deep border border-border">
        {cameraEnabled ? (
          <>
            {/* Placeholder for actual camera feed */}
            <div className="absolute inset-0 bg-void-deep flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-cyan-glow/30 flex items-center justify-center">
                  <Hand className="w-12 h-12 text-cyan-glow animate-pulse-glow" />
                </div>
                <p className="text-primary-foreground/80 text-sm">Gesture Recognition Active</p>
                <p className="text-primary-foreground/50 text-xs mt-1">Perform "The Pinch" to swap</p>
              </div>
            </div>

            {/* Gesture Indicator */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-void-soft/80 backdrop-blur-sm border border-cyan-glow/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-glow/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-glow animate-pulse" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Detected Gesture</p>
                  <p className="text-sm font-medium text-primary-foreground">Waiting...</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <CameraOff className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-sm mb-4">Camera disabled</p>
            <Button
              size="sm"
              onClick={() => setCameraEnabled(true)}
              className="bg-cyan-glow/10 text-cyan-glow border border-cyan-glow/30 hover:bg-cyan-glow/20"
            >
              <Camera className="w-4 h-4 mr-2" />
              Enable Camera
            </Button>
          </div>
        )}
      </div>

      {/* Keyboard Controls */}
      {controlMode === "keyboard" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 rounded-xl bg-secondary/50 border border-border"
        >
          <p className="text-sm font-medium mb-3">Keyboard Controls</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded bg-card border border-border font-mono text-xs">←</kbd>
              <span className="text-muted-foreground">Move Left</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded bg-card border border-border font-mono text-xs">→</kbd>
              <span className="text-muted-foreground">Move Right</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded bg-card border border-border font-mono text-xs">Space</kbd>
              <span className="text-muted-foreground">Swap</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded bg-card border border-border font-mono text-xs">R</kbd>
              <span className="text-muted-foreground">Reset</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
