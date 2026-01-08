import { motion } from "framer-motion";
import { Lock, Check, Play, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Level {
  id: string;
  name: string;
  biome: string;
  status: "completed" | "current" | "locked";
  xOffset: number;
}

const levels: Level[] = [
  { id: "1-1", name: "Bubble Basics", biome: "Sorting Plains", status: "completed", xOffset: -100 },
  { id: "1-2", name: "Selection Sweep", biome: "Sorting Plains", status: "completed", xOffset: 80 },
  { id: "1-3", name: "Quick Divide", biome: "Sorting Plains", status: "current", xOffset: -60 },
  { id: "2-1", name: "Branch Flow", biome: "Git Nexus", status: "locked", xOffset: 100 },
  { id: "2-2", name: "Merge Mastery", biome: "Git Nexus", status: "locked", xOffset: -80 },
  { id: "2-3", name: "Rebase Realm", biome: "Git Nexus", status: "locked", xOffset: 40 },
  { id: "3-1", name: "Node Links", biome: "Chain Depths", status: "locked", xOffset: -120 },
  { id: "3-2", name: "Double Bind", biome: "Chain Depths", status: "locked", xOffset: 60 },
];

export const LevelPath = () => {
  const navigate = useNavigate();

  const getNodeStyles = (status: Level["status"]) => {
    switch (status) {
      case "completed":
        return "bg-cyan-glow text-void-deep";
      case "current":
        return "bg-amber-active text-void-deep animate-pulse-glow";
      case "locked":
        return "bg-muted text-muted-foreground";
    }
  };

  const getNodeIcon = (status: Level["status"]) => {
    switch (status) {
      case "completed":
        return <Check className="w-6 h-6" />;
      case "current":
        return <Play className="w-6 h-6" />;
      case "locked":
        return <Lock className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative py-12">
      {/* Path Line */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[300px]"
        viewBox="0 0 300 800"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M150 0 Q 50 100 150 200 Q 250 300 150 400 Q 50 500 150 600 Q 250 700 150 800"
          stroke="hsl(var(--border))"
          strokeWidth="3"
          strokeDasharray="8 8"
          className="opacity-50"
        />
      </svg>

      {/* Level Nodes */}
      <div className="relative space-y-20">
        {levels.map((level, index) => (
          <motion.div
            key={level.id}
            initial={{ opacity: 0, x: level.xOffset > 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-center"
            style={{ marginLeft: level.xOffset }}
          >
            <button
              onClick={() => level.status !== "locked" && navigate("/simulation")}
              disabled={level.status === "locked"}
              className={`group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                level.status === "locked"
                  ? "cursor-not-allowed"
                  : "cursor-pointer hover:scale-105"
              }`}
            >
              {/* Node Circle */}
              <div
                className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${getNodeStyles(level.status)} ${
                  level.status === "current" ? "box-glow-amber" : level.status === "completed" ? "box-glow-cyan" : ""
                }`}
              >
                {getNodeIcon(level.status)}
                
                {/* Pulse Ring for Current */}
                {level.status === "current" && (
                  <div className="absolute inset-0 rounded-full border-2 border-amber-active animate-ping opacity-50" />
                )}
              </div>

              {/* Level Info */}
              <div className={`text-left ${level.status === "locked" ? "opacity-50" : ""}`}>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-muted-foreground">{level.biome}</span>
                  {level.status === "current" && (
                    <Sparkles className="w-3 h-3 text-amber-active" />
                  )}
                </div>
                <h3 className={`font-semibold ${
                  level.status === "current" ? "text-amber-active" : ""
                }`}>
                  {level.name}
                </h3>
              </div>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
