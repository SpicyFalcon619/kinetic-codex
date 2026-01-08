import { motion } from "framer-motion";
import { ArrowLeft, Settings, Shield, Crown, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StatsHUD } from "@/components/dashboard/StatsHUD";
import { LevelPath } from "@/components/dashboard/LevelPath";
import { CharacterCard } from "@/components/dashboard/CharacterCard";
import { LeaderboardCard } from "@/components/dashboard/LeaderboardCard";
import { DailyQuestCard } from "@/components/dashboard/DailyQuestCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-lg border-b-2 border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="rounded-xl border-2 border-border hover:border-gold/30">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center">
                <Map className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-display font-semibold">Kingdom Map</h1>
                <p className="text-sm text-muted-foreground">Your quest journey</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-xl border-2 border-border hover:border-gold/30">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl gradient-gold">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats HUD */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <StatsHUD />
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Quest Path */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Guild */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl bg-card border-2 border-gold/30 shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-3xl border-2 border-gold/30">
                  ⚔️
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-display uppercase tracking-wide">Current Guild</p>
                  <h2 className="text-2xl font-display font-bold text-gold">The Sorting Guild</h2>
                </div>
                <div className="ml-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald/10 border border-emerald/30">
                  <Crown className="w-4 h-4 text-emerald" />
                  <span className="text-sm font-display font-semibold text-emerald">2/3 Quests</span>
                </div>
              </div>
            </motion.section>

            {/* Level Path */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <LevelPath />
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <CharacterCard />
            <DailyQuestCard />
            <LeaderboardCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;