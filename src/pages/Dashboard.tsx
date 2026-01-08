import { motion } from "framer-motion";
import { ArrowLeft, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StatsHUD } from "@/components/dashboard/StatsHUD";
import { LevelPath } from "@/components/dashboard/LevelPath";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-semibold">The Wanderer's Path</h1>
              <p className="text-sm text-muted-foreground">Your journey through the Codex</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-secondary">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats HUD */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <StatsHUD />
        </motion.section>

        {/* Current Biome */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-8 rounded-full bg-amber-active" />
            <div>
              <p className="text-sm text-muted-foreground">Current Biome</p>
              <h2 className="text-2xl font-bold">The Sorting Plains</h2>
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
      </main>
    </div>
  );
};

export default Dashboard;
