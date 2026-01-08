import { motion } from "framer-motion";
import { Crown, Shield, Sword, Star, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface CharacterCardProps {
  name?: string;
  title?: string;
  level?: number;
  xp?: number;
  xpToNext?: number;
}

export const CharacterCard = ({
  name = "Wanderer",
  title = "Code Knight",
  level = 12,
  xp = 2450,
  xpToNext = 3000,
}: CharacterCardProps) => {
  const progress = (xp / xpToNext) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative p-6 rounded-2xl bg-card border-2 border-gold/30 shadow-lg overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald/5 rounded-full blur-2xl" />

      <div className="relative flex items-start gap-5">
        {/* Avatar */}
        <div className="relative">
          <div className="w-20 h-20 rounded-xl gradient-gold flex items-center justify-center border-2 border-gold-dark/30 shadow-lg">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          {/* Level Badge */}
          <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-emerald border-2 border-card flex items-center justify-center">
            <span className="text-xs font-display font-bold text-primary-foreground">{level}</span>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-display font-bold">{name}</h3>
            <Crown className="w-4 h-4 text-gold" />
          </div>
          <p className="text-sm text-muted-foreground font-display mb-4">{title}</p>

          {/* XP Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Level Progress</span>
              <span className="font-display font-semibold text-gold">{xp.toLocaleString()} / {xpToNext.toLocaleString()} XP</span>
            </div>
            <div className="relative h-3 rounded-full bg-secondary overflow-hidden border border-border">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="absolute inset-y-0 left-0 gradient-gold rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="relative mt-6 pt-4 border-t border-border grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gold/10 text-gold mb-1">
            <Sword className="w-4 h-4" />
          </div>
          <p className="text-xs text-muted-foreground">Quests</p>
          <p className="text-lg font-display font-bold">24</p>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald/10 text-emerald mb-1">
            <Star className="w-4 h-4" />
          </div>
          <p className="text-xs text-muted-foreground">Stars</p>
          <p className="text-lg font-display font-bold">58</p>
        </div>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-streak/10 text-streak mb-1">
            <TrendingUp className="w-4 h-4" />
          </div>
          <p className="text-xs text-muted-foreground">Rank</p>
          <p className="text-lg font-display font-bold">#42</p>
        </div>
      </div>
    </motion.div>
  );
};