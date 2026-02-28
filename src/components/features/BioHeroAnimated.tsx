"use client";

import { motion } from "framer-motion";
import type { BioData } from "@/data/bio";
import { sectionVariants, staggerContainer } from "@/lib/motion-variants";

interface BioHeroAnimatedProps {
  bioData: BioData;
  actions: React.ReactNode;
}

export function BioHeroAnimated({ bioData, actions }: BioHeroAnimatedProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={sectionVariants} className="flex items-center space-x-2">
        <span className="h-px w-8 bg-pcb-green shadow-glow-green" />
        <span className="text-pcb-green font-mono text-xs tracking-widest uppercase">
          {bioData.systemStatus} {'//'} {bioData.location}
        </span>
      </motion.div>

      <motion.div variants={sectionVariants} className="space-y-2">
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
          {bioData.name.toUpperCase()}
          <span className="text-solder-gold">_</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-mono text-pcb-green/80 uppercase tracking-[0.2em] font-medium">
          {bioData.role}
        </h2>
      </motion.div>

      <motion.div variants={sectionVariants} className="pt-4 max-w-2xl">
        <p className="text-lg md:text-xl text-white/50 leading-relaxed">
          {bioData.intro}
        </p>
      </motion.div>

      <motion.div variants={sectionVariants}>
        {actions}
      </motion.div>
    </motion.div>
  );
}
