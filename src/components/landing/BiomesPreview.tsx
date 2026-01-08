import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Lock, Unlock } from "lucide-react";

const biomes = [
  {
    id: 1,
    name: "The Sorting Plains",
    description: "Master bubble, selection, and quick sort through gesture-driven swaps.",
    status: "unlocked" as const,
    color: "cyan",
    concepts: ["Bubble Sort", "Selection Sort", "Quick Sort"],
  },
  {
    id: 2,
    name: "The Git Nexus",
    description: "Navigate branches, resolve conflicts, and merge timelines.",
    status: "unlocked" as const,
    color: "amber",
    concepts: ["Branching", "Merging", "Rebasing"],
  },
  {
    id: 3,
    name: "The Chain Depths",
    description: "Traverse linked lists, insert nodes, and reverse chains.",
    status: "locked" as const,
    color: "cyan",
    concepts: ["Singly Linked", "Doubly Linked", "Circular"],
  },
  {
    id: 4,
    name: "The Graph Expanse",
    description: "Explore BFS, DFS, and pathfinding algorithms.",
    status: "locked" as const,
    color: "amber",
    concepts: ["BFS", "DFS", "Dijkstra"],
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Four <span className="text-amber-active text-glow-amber">Biomes</span> to Conquer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each realm presents unique challenges. Restore order to the digital chaos 
            and unlock the secrets within.
          </p>
        </motion.div>

        {/* Biomes List */}
        <motion.div
          ref={ref}
          className="space-y-4"
        >
          {biomes.map((biome, index) => (
            <motion.div
              key={biome.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                biome.status === "unlocked"
                  ? "bg-card border-border hover:border-cyan-glow/30 cursor-pointer"
                  : "bg-muted/30 border-border/50"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Biome Number */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center font-mono text-2xl font-bold ${
                  biome.status === "unlocked"
                    ? biome.color === "cyan"
                      ? "bg-cyan-glow/10 text-cyan-glow"
                      : "bg-amber-active/10 text-amber-active"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {String(biome.id).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`text-xl font-semibold ${
                      biome.status === "locked" ? "text-muted-foreground" : ""
                    }`}>
                      {biome.name}
                    </h3>
                    {biome.status === "unlocked" ? (
                      <Unlock className="w-4 h-4 text-cyan-glow" />
                    ) : (
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                  <p className={`mb-4 ${
                    biome.status === "locked" ? "text-muted-foreground/60" : "text-muted-foreground"
                  }`}>
                    {biome.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {biome.concepts.map((concept) => (
                      <span
                        key={concept}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          biome.status === "unlocked"
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-muted/50 text-muted-foreground/50"
                        }`}
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                {biome.status === "unlocked" && (
                  <div className="flex-shrink-0">
                    <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-cyan-glow group-hover:translate-x-1 transition-all" />
                  </div>
                )}
              </div>

              {/* Locked Overlay */}
              {biome.status === "locked" && (
                <div className="absolute inset-0 rounded-2xl bg-background/50 backdrop-blur-[1px] flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                    Complete previous biome to unlock
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
