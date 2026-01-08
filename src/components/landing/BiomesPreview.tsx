import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Lock, Unlock, Shield, Scroll } from "lucide-react";

const guilds = [
  {
    id: 1,
    name: "The Sorting Guild",
    description: "Join the elite sorters. Master bubble, selection, and quick sort through epic duels.",
    status: "unlocked" as const,
    color: "gold",
    quests: ["Bubble Duel", "Selection Arena", "Quick Conquest"],
    icon: "⚔️",
  },
  {
    id: 2,
    name: "The Timeline Keepers",
    description: "Guardians of version history. Navigate branches and merge timelines.",
    status: "unlocked" as const,
    color: "emerald",
    quests: ["Branch Path", "Merge Magic", "Rebase Ritual"],
    icon: "🕰️",
  },
  {
    id: 3,
    name: "The Chain Smiths",
    description: "Master blacksmiths of linked structures. Forge unbreakable node chains.",
    status: "locked" as const,
    color: "gold",
    quests: ["Single Link", "Double Bond", "Circle Chain"],
    icon: "🔗",
  },
  {
    id: 4,
    name: "The Pathfinders",
    description: "Legendary explorers of graph territories. Find paths through any maze.",
    status: "locked" as const,
    color: "emerald",
    quests: ["BFS Journey", "DFS Descent", "Dijkstra's Trail"],
    icon: "🗺️",
  },
];

export const BiomesPreview = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Choose Your <span className="text-emerald text-glow-emerald">Guild</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four legendary guilds await your membership. Complete quests, 
            earn XP, and unlock new territories.
          </p>
        </motion.div>

        {/* Guilds List */}
        <motion.div
          ref={ref}
          className="space-y-5"
        >
          {guilds.map((guild, index) => (
            <motion.div
              key={guild.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 ${
                guild.status === "unlocked"
                  ? "bg-card border-border hover:border-gold/40 cursor-pointer shadow-lg"
                  : "bg-muted/30 border-border/50"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Guild Emblem */}
                <div className={`flex-shrink-0 w-20 h-20 rounded-xl flex items-center justify-center text-4xl border-2 ${
                  guild.status === "unlocked"
                    ? guild.color === "gold"
                      ? "bg-gold/10 border-gold/30"
                      : "bg-emerald/10 border-emerald/30"
                    : "bg-muted border-muted"
                }`}>
                  {guild.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`text-xl font-display font-semibold ${
                      guild.status === "locked" ? "text-muted-foreground" : ""
                    }`}>
                      {guild.name}
                    </h3>
                    {guild.status === "unlocked" ? (
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald/10 border border-emerald/30">
                        <Unlock className="w-3 h-3 text-emerald" />
                        <span className="text-xs font-display text-emerald">Open</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted border border-border">
                        <Lock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs font-display text-muted-foreground">Locked</span>
                      </div>
                    )}
                  </div>
                  <p className={`mb-4 ${
                    guild.status === "locked" ? "text-muted-foreground/60" : "text-muted-foreground"
                  }`}>
                    {guild.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {guild.quests.map((quest) => (
                      <span
                        key={quest}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-display ${
                          guild.status === "unlocked"
                            ? "bg-secondary border border-border text-secondary-foreground"
                            : "bg-muted/50 text-muted-foreground/50"
                        }`}
                      >
                        <Scroll className="w-3 h-3" />
                        {quest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                {guild.status === "unlocked" && (
                  <div className="flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </div>
                )}
              </div>

              {/* Locked Overlay */}
              {guild.status === "locked" && (
                <div className="absolute inset-0 rounded-2xl bg-background/60 backdrop-blur-[2px] flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border-2 border-border text-muted-foreground text-sm font-display shadow-md">
                    <Shield className="w-4 h-4" />
                    Complete previous guild to unlock
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};