import { motion } from "framer-motion";
import { Flame, Target, Clock, Trophy, Crown, Gem, Star } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  label: string;
  value: string | number;
  color: "gold" | "emerald" | "streak" | "gem";
  sublabel?: string;
}

const stats: Stat[] = [
  { icon: Flame, label: "Streak", value: "7", sublabel: "days", color: "streak" },
  { icon: Target, label: "Accuracy", value: "94%", color: "emerald" },
  { icon: Crown, label: "Level", value: "12", sublabel: "Knight", color: "gold" },
  { icon: Gem, label: "Gems", value: "2,450", color: "gem" },
];

export const StatsHUD = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative p-5 rounded-2xl bg-card border-2 border-border shadow-lg hover:border-gold/30 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 ${
              stat.color === "streak"
                ? "bg-streak/10 text-streak border-streak/30"
                : stat.color === "emerald"
                ? "bg-emerald/10 text-emerald border-emerald/30"
                : stat.color === "gem"
                ? "bg-gem/10 text-gem border-gem/30"
                : "bg-gold/10 text-gold border-gold/30"
            }`}>
              <stat.icon className={`w-6 h-6 ${stat.color === "streak" ? "animate-flame" : ""}`} />
            </div>
            <div>
              <p className="text-xs font-display text-muted-foreground uppercase tracking-wide">{stat.label}</p>
              <div className="flex items-baseline gap-1">
                <p className="text-2xl font-display font-bold">{stat.value}</p>
                {stat.sublabel && (
                  <span className="text-sm text-muted-foreground">{stat.sublabel}</span>
                )}
              </div>
            </div>
          </div>
          
          {/* Decorative corner */}
          <div className={`absolute top-2 right-2 w-2 h-2 rounded-full opacity-60 ${
            stat.color === "streak"
              ? "bg-streak"
              : stat.color === "emerald"
              ? "bg-emerald"
              : stat.color === "gem"
              ? "bg-gem"
              : "bg-gold"
          }`} />
        </motion.div>
      ))}
    </motion.div>
  );
};