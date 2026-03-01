"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { BioHeroAnimated } from "./BioHeroAnimated";

export function BioHero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center border-bold border-sky-500/50 rounded-3xl p-8 md:p-20 bg-surface/30 shadow-glow-blue transition-[border-color,shadow] hover:border-sky-500 duration-500">
        <BioHeroAnimated />
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
