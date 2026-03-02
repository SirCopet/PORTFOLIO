'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types';
import { useTranslation } from '@/hooks/use-translation';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const { t } = useTranslation();

  const companyLinks: Record<string, string> = {
    worldline: 'https://worldline.com',
    degree: 'https://www.salleurl.edu',
  };

  const link = companyLinks[experience.id];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative flex flex-col p-6 md:p-8 rounded-3xl border-2 border-primary-500/80 bg-surface/30 backdrop-blur-sm transition-all duration-300 hover:border-primary-500 hover:shadow-glow-primary"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-400 bg-primary-500/10 px-4 py-1.5 rounded-full border border-primary-500/20 font-bold">
          {t(experience.period)}
        </span>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-space text-xl font-extrabold text-white leading-tight group-hover:text-primary-400 transition-colors uppercase tracking-tight">
          {t(experience.title)}
        </h3>
        
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-sm font-mono font-bold text-primary-500/70 tracking-widest uppercase hover:text-primary-400 transition-colors"
          >
            {t(experience.company)}
          </a>
        ) : (
          <p className="text-sm font-mono font-medium text-primary-500/70 tracking-widest uppercase">
            {t(experience.company)}
          </p>
        )}
      </div>
    </motion.div>
  );
};
