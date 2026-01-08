import { motion } from "framer-motion";
import { Crown, Medal, Trophy, Users } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  xp: number;
  level: number;
  isCurrentUser?: boolean;
}

const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "DragonSlayer", xp: 12450, level: 25 },
  { rank: 2, name: "CodeWizard", xp: 11200, level: 23 },
  { rank: 3, name: "ByteKnight", xp: 10800, level: 22 },
  { rank: 42, name: "Wanderer", xp: 2450, level: 12, isCurrentUser: true },
  { rank: 43, name: "AlgoHero", xp: 2300, level: 11 },
];

export const LeaderboardCard = () => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-gold" />;
      case 2:
        return <Medal className="w-5 h-5 text-stone" />;
      case 3:
        return <Trophy className="w-5 h-5 text-streak" />;
      default:
        return <span className="text-sm font-display font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number, isCurrentUser?: boolean) => {
    if (isCurrentUser) return "bg-gold/10 border-gold/30";
    switch (rank) {
      case 1:
        return "bg-gold/5 border-gold/20";
      case 2:
        return "bg-stone/5 border-stone/20";
      case 3:
        return "bg-streak/5 border-streak/20";
      default:
        return "bg-card border-border";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="p-6 rounded-2xl bg-card border-2 border-border shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-royal/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-royal" />
          </div>
          <div>
            <h3 className="font-display font-semibold">Leaderboard</h3>
            <p className="text-xs text-muted-foreground">Weekly Rankings</p>
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-3">
        {leaderboard.map((entry, index) => (
          <motion.div
            key={entry.rank}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex items-center gap-4 p-3 rounded-xl border-2 transition-all ${getRankBg(entry.rank, entry.isCurrentUser)} ${
              entry.isCurrentUser ? "ring-2 ring-gold/20" : ""
            }`}
          >
            {/* Rank */}
            <div className="w-8 flex items-center justify-center">
              {getRankIcon(entry.rank)}
            </div>

            {/* Avatar placeholder */}
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-sm ${
              entry.isCurrentUser ? "gradient-gold text-primary-foreground" : "bg-secondary text-secondary-foreground"
            }`}>
              {entry.name.charAt(0)}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className={`font-display font-semibold truncate ${entry.isCurrentUser ? "text-gold" : ""}`}>
                {entry.name}
                {entry.isCurrentUser && <span className="text-xs text-muted-foreground ml-2">(You)</span>}
              </p>
              <p className="text-xs text-muted-foreground">Level {entry.level}</p>
            </div>

            {/* XP */}
            <div className="text-right">
              <p className="font-display font-bold">{entry.xp.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">XP</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Separator for ranking gap */}
      {leaderboard.some(e => e.rank > 3 && leaderboard.some(e2 => e2.rank <= 3)) && (
        <div className="my-3 flex items-center gap-2 px-3">
          <div className="flex-1 border-t border-dashed border-border" />
          <span className="text-xs text-muted-foreground">•••</span>
          <div className="flex-1 border-t border-dashed border-border" />
        </div>
      )}
    </motion.div>
  );
};