"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { sectionVariants, staggerContainer } from "@/lib/motion-variants";
import { ContactLinks } from "@/components/ui/ContactLinks";
import Image from "next/image";

export function BioHeroAnimated() {
  const { t, language } = useTranslation();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex flex-col items-center text-center"
    >
      <div className="w-full p-6 md:p-10 lg:p-12 bg-gradient-to-br from-primary-500/10 to-transparent border-t-2 border-primary-500">
        <div className="w-full flex flex-col items-center">
          {/* Profile and Name Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-12">
            {/* Profile Photo */}
            <motion.div
              variants={sectionVariants}
              className="relative group z-10"
            >
              <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-colors duration-700" />
              <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-primary-500/80 overflow-hidden bg-surface flex items-center justify-center transition-all duration-500 group-hover:border-primary-500">
                <Image
                  src="/images/avatar.jpg"
                  alt={t('hero.name')}
                  fill
                  className="object-cover transition-all duration-700"
                  priority
                />
              </div>
            </motion.div>
            <motion.div variants={sectionVariants} className="flex flex-col items-center md:items-start">
              <h1 className="text-4xl md:text-6xl font-space font-extrabold text-white tracking-tighter leading-[0.9] uppercase text-center md:text-left">
                {t('hero.name').split(' ').map((word: string, i: number) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>
            </motion.div>
          </div>

          <motion.div variants={sectionVariants} className="space-y-4 flex flex-col items-center w-full">
            <div className="space-y-3">
              <h2 className="text-base md:text-xl font-mono text-primary-400 uppercase tracking-[0.2em] font-black text-center">
                {t('hero.role')}
              </h2>
              <div className="flex items-center justify-center space-x-3 opacity-60">
                <span className="h-px w-6 bg-primary-500/50" />
                <span className="text-primary-500 font-mono text-[10px] tracking-widest uppercase">
                  {t('hero.location')}
                </span>
                <span className="h-px w-6 bg-primary-500/50" />
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <ContactLinks className="justify-center" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
