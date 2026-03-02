"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { BioHeroAnimated } from "./BioHeroAnimated";
import { ExperienceSection } from "./ExperienceSection";
import { SkillSection } from "./SkillSection";

export function BioHero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black">
      <div className="w-full max-w-6xl flex flex-col gap-10 md:gap-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <BioHeroAnimated />
          <ExperienceSection />
        </div>
        
        <SkillSection />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-sky-500 cursor-pointer"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
