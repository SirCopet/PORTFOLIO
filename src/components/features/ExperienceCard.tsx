'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types';
import { useTranslation } from '@/hooks/use-translation';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative flex flex-col p-6 md:p-8 rounded-3xl border-2 border-sky-500/50 bg-surface/30 backdrop-blur-sm transition-all duration-300 hover:border-sky-500 hover:shadow-glow-blue"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-400 bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20 shadow-glow-blue/20">
          {t(experience.period)}
        </span>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-space text-xl font-extrabold text-white leading-tight group-hover:text-sky-400 transition-colors uppercase tracking-tight">
          {t(experience.title)}
        </h3>
        
        <p className="text-sm font-mono font-medium text-sky-500/70 tracking-widest uppercase">
          {t(experience.company)}
        </p>
      </div>
    </motion.div>
  );
};
