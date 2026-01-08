import { motion } from "framer-motion";
import { Lock, Check, Play, Star, Scroll, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Level {
  id: string;
  name: string;
  guild: string;
  status: "completed" | "current" | "locked";
  xOffset: number;
  xp: number;
  stars?: number;
}

const levels: Level[] = [
  { id: "1-1", name: "Bubble Duel", guild: "Sorting Guild", status: "completed", xOffset: -80, xp: 100, stars: 3 },
  { id: "1-2", name: "Selection Arena", guild: "Sorting Guild", status: "completed", xOffset: 60, xp: 150, stars: 2 },
  { id: "1-3", name: "Quick Conquest", guild: "Sorting Guild", status: "current", xOffset: -40, xp: 200 },
  { id: "2-1", name: "Branch Path", guild: "Timeline Keepers", status: "locked", xOffset: 80, xp: 250 },
  { id: "2-2", name: "Merge Magic", guild: "Timeline Keepers", status: "locked", xOffset: -60, xp: 300 },
  { id: "2-3", name: "Rebase Ritual", guild: "Timeline Keepers", status: "locked", xOffset: 30, xp: 350 },
  { id: "3-1", name: "Single Link", guild: "Chain Smiths", status: "locked", xOffset: -90, xp: 400 },
  { id: "3-2", name: "Double Bond", guild: "Chain Smiths", status: "locked", xOffset: 50, xp: 450 },
];

export const LevelPath = () => {
  const navigate = useNavigate();

  const getNodeStyles = (status: Level["status"]) => {
    switch (status) {
      case "completed":
        return "bg-emerald text-primary-foreground border-emerald-bright";
      case "current":
        return "gradient-gold text-primary-foreground border-gold-bright animate-pulse-glow";
      case "locked":
        return "bg-muted text-muted-foreground border-border";
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
      {/* Path Line - Winding Road */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[300px]"
        viewBox="0 0 300 900"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Stone path effect */}
        <path
          d="M150 0 Q 60 100 150 200 Q 240 300 150 400 Q 60 500 150 600 Q 240 700 150 800 Q 60 900 150 1000"
          stroke="hsl(var(--border))"
          strokeWidth="24"
          strokeLinecap="round"
          className="opacity-40"
        />
        <path
          d="M150 0 Q 60 100 150 200 Q 240 300 150 400 Q 60 500 150 600 Q 240 700 150 800 Q 60 900 150 1000"
          stroke="hsl(var(--parchment-dark))"
          strokeWidth="18"
          strokeLinecap="round"
          strokeDasharray="12 8"
          className="opacity-60"
        />
      </svg>

      {/* Level Nodes */}
      <div className="relative space-y-24">
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
              className={`group relative flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 ${
                level.status === "locked"
                  ? "cursor-not-allowed"
                  : "cursor-pointer hover:scale-105"
              }`}
            >
              {/* Quest Scroll Card */}
              <div className={`absolute inset-0 rounded-2xl bg-card border-2 shadow-lg transition-all ${
                level.status === "current" 
                  ? "border-gold/50 box-glow-gold" 
                  : level.status === "completed"
                  ? "border-emerald/30"
                  : "border-border opacity-60"
              }`} />

              {/* Node Circle */}
              <div
                className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-3 transition-all duration-300 ${getNodeStyles(level.status)}`}
              >
                {getNodeIcon(level.status)}
                
                {/* Pulse Ring for Current */}
                {level.status === "current" && (
                  <div className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-40" />
                )}
              </div>

              {/* Level Info */}
              <div className={`relative z-10 text-left ${level.status === "locked" ? "opacity-50" : ""}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-display text-muted-foreground uppercase tracking-wide">{level.guild}</span>
                  {level.status === "current" && (
                    <Crown className="w-3 h-3 text-gold animate-bounce-gentle" />
                  )}
                </div>
                <h3 className={`font-display font-semibold text-lg ${
                  level.status === "current" ? "text-gold" : ""
                }`}>
                  {level.name}
                </h3>
                
                {/* XP & Stars */}
                <div className="flex items-center gap-3 mt-2">
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Scroll className="w-3 h-3" />
                    +{level.xp} XP
                  </span>
                  {level.status === "completed" && level.stars && (
                    <div className="flex gap-0.5">
                      {[1, 2, 3].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= level.stars! ? "text-gold fill-gold" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};