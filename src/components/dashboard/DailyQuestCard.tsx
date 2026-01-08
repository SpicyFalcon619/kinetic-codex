import { motion } from "framer-motion";
import { Scroll, Clock, Gem, CheckCircle2, Circle, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface DailyQuest {
  id: string;
  title: string;
  progress: number;
  total: number;
  reward: number;
  completed: boolean;
}

const dailyQuests: DailyQuest[] = [
  { id: "1", title: "Complete 3 sorting challenges", progress: 2, total: 3, reward: 50, completed: false },
  { id: "2", title: "Achieve 90% accuracy", progress: 1, total: 1, reward: 30, completed: true },
  { id: "3", title: "Practice for 15 minutes", progress: 10, total: 15, reward: 40, completed: false },
];

export const DailyQuestCard = () => {
  const completedQuests = dailyQuests.filter(q => q.completed).length;
  const totalReward = dailyQuests.reduce((acc, q) => acc + q.reward, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="p-6 rounded-2xl bg-card border-2 border-border shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
            <Scroll className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="font-display font-semibold">Daily Quests</h3>
            <p className="text-xs text-muted-foreground">{completedQuests}/{dailyQuests.length} completed</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground font-display">12h left</span>
        </div>
      </div>

      {/* Quest List */}
      <div className="space-y-4">
        {dailyQuests.map((quest, index) => (
          <motion.div
            key={quest.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            className={`p-4 rounded-xl border-2 transition-all ${
              quest.completed 
                ? "bg-emerald/5 border-emerald/30" 
                : "bg-secondary/50 border-border hover:border-gold/30"
            }`}
          >
            <div className="flex items-start gap-3">
              {/* Checkbox */}
              <div className="mt-0.5">
                {quest.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald" />
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className={`text-sm font-medium ${quest.completed ? "line-through text-muted-foreground" : ""}`}>
                  {quest.title}
                </p>
                
                {!quest.completed && (
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Progress</span>
                      <span>{quest.progress}/{quest.total}</span>
                    </div>
                    <Progress value={(quest.progress / quest.total) * 100} className="h-1.5" />
                  </div>
                )}
              </div>

              {/* Reward */}
              <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                quest.completed ? "bg-emerald/10" : "bg-gem/10"
              }`}>
                <Gem className={`w-3.5 h-3.5 ${quest.completed ? "text-emerald" : "text-gem"}`} />
                <span className={`text-xs font-display font-semibold ${quest.completed ? "text-emerald" : "text-gem"}`}>
                  +{quest.reward}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bonus Reward */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-4 p-4 rounded-xl bg-gold/5 border-2 border-gold/20 border-dashed"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-display">Complete all for bonus</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gold/10">
            <Gem className="w-4 h-4 text-gold" />
            <span className="text-sm font-display font-bold text-gold">+100</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};