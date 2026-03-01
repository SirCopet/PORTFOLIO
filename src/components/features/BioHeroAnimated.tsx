"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { sectionVariants, staggerContainer } from "@/lib/motion-variants";
import { ContactLinks } from "@/components/ui/ContactLinks";
import Image from "next/image";

export function BioHeroAnimated() {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-6 flex flex-col items-center text-center"
    >
      <div className="w-full flex flex-col items-center">
        {/* Profile and Name Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-4">
          {/* Profile Photo */}
          <motion.div 
            variants={sectionVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-colors duration-700" />
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-bold border-sky-500/20 overflow-hidden bg-surface flex items-center justify-center shadow-glow-blue/50 transition-all duration-500 group-hover:border-sky-500/40">
              <Image 
                src="/images/avatar.jpg" 
                alt={t('hero.name')} 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} className="flex flex-col items-center md:items-start">
            <h1 className="text-5xl md:text-7xl font-space font-extrabold text-white tracking-tighter leading-none uppercase">
              {t('hero.name')}
            </h1>
          </motion.div>
        </div>

        <motion.div variants={sectionVariants} className="space-y-4 flex flex-col items-center">
          <div className="space-y-2">
            <h2 className="text-lg md:text-xl font-mono text-sky-400/60 uppercase tracking-[0.2em] font-medium">
              {t('hero.role')}
            </h2>
            <div className="flex items-center justify-center space-x-2 opacity-60">
              <span className="h-px w-4 bg-sky-500/50" />
              <span className="text-sky-500 font-mono text-[10px] tracking-widest uppercase">
                {t('hero.location')}
              </span>
              <span className="h-px w-4 bg-sky-500/50" />
            </div>
          </div>
          <ContactLinks className="justify-center" />
        </motion.div>

        <motion.div variants={sectionVariants} className="pt-4 max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-white/50 leading-relaxed font-sans">
            {t('hero.intro')}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
