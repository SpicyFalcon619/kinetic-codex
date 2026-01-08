import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Hand, GitBranch, Link, Route, Zap, Eye } from "lucide-react";

const features = [
  {
    icon: Hand,
    title: "The Pinch",
    description: "Sort arrays with intuitive pinch gestures. Feel the swap, learn the algorithm.",
    color: "cyan" as const,
  },
  {
    icon: GitBranch,
    title: "The Merge",
    description: "Master Git branching through hand movements. Merge conflicts become tangible.",
    color: "amber" as const,
  },
  {
    icon: Link,
    title: "The Chain",
    description: "Navigate linked lists by connecting nodes with your fingertips.",
    color: "cyan" as const,
  },
  {
    icon: Route,
    title: "The Path",
    description: "Traverse graphs by tracing paths through gesture recognition.",
    color: "amber" as const,
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-glow/10 border border-cyan-glow/20 mb-6">
            <Zap className="w-4 h-4 text-cyan-glow" />
            <span className="text-sm font-medium text-cyan-glow">Gesture Mechanics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Learn Through <span className="text-cyan-glow">Motion</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four distinct gesture mechanics transform abstract algorithms into intuitive movements.
            Your body becomes the interface.
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
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-cyan-glow/30 transition-all duration-300"
              style={{
                boxShadow: "var(--shadow-card)",
              }}
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                feature.color === "cyan" ? "box-glow-cyan" : "box-glow-amber"
              }`} style={{ zIndex: -1 }} />

              <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                  feature.color === "cyan" 
                    ? "bg-cyan-glow/10 text-cyan-glow" 
                    : "bg-amber-active/10 text-amber-active"
                }`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-glow transition-colors">
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
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border">
            <Eye className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              <span className="font-medium">Dual Mode Control:</span> Switch to keyboard/mouse anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
