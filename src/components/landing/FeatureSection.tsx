import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Swords, GitBranch, Link, Route, Scroll, Gamepad2 } from "lucide-react";

const features = [
  {
    icon: Swords,
    title: "The Sorting Tournament",
    description: "Duel arrays in the arena! Swap elements with gestures to prove your sorting mastery.",
    color: "gold" as const,
  },
  {
    icon: GitBranch,
    title: "The Timeline Tavern",
    description: "Travel through Git branches. Merge timelines and resolve conflicts like a true wizard.",
    color: "emerald" as const,
  },
  {
    icon: Link,
    title: "The Chain Forge",
    description: "Craft and connect nodes in the ancient forge. Build linked lists with your hands.",
    color: "gold" as const,
  },
  {
    icon: Route,
    title: "The Pathfinder's Trail",
    description: "Navigate treacherous graphs. Find the shortest path through the enchanted forest.",
    color: "emerald" as const,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const FeatureSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald/10 border-2 border-emerald/30 mb-6">
            <Scroll className="w-4 h-4 text-emerald" />
            <span className="text-sm font-display font-medium text-emerald">Quest Mechanics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Master the <span className="text-gold text-glow-gold">Ancient Arts</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four legendary quests await. Use gesture magic to conquer algorithms 
            and earn your place among the Code Knights.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-card border-2 border-border hover:border-gold/40 transition-all duration-300 shadow-lg"
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                feature.color === "gold" ? "box-glow-gold" : "box-glow-emerald"
              }`} style={{ zIndex: -1 }} />

              <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center border-2 ${
                  feature.color === "gold" 
                    ? "bg-gold/10 text-gold border-gold/30" 
                    : "bg-emerald/10 text-emerald border-emerald/30"
                }`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Accessibility Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border-2 border-border shadow-md">
            <Gamepad2 className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              <span className="font-display font-medium">Dual Controls:</span> Use gestures or keyboard/mouse
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};