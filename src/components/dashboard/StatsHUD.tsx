import { motion } from "framer-motion";
import { Flame, Target, Clock, Trophy } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  label: string;
  value: string | number;
  color: "cyan" | "amber";
}

const stats: Stat[] = [
  { icon: Flame, label: "Streak", value: "7 days", color: "amber" },
  { icon: Target, label: "Accuracy", value: "94%", color: "cyan" },
  { icon: Clock, label: "Time Today", value: "45m", color: "cyan" },
  { icon: Trophy, label: "XP", value: "2,450", color: "amber" },
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
          className="relative p-4 rounded-xl bg-card border-2 border-border shadow-md"
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              stat.color === "cyan"
                ? "bg-cyan-glow/10 text-cyan-glow"
                : "bg-amber-active/10 text-amber-active"
            }`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-lg font-bold">{stat.value}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
