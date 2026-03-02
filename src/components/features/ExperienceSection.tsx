'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { ExperienceCard } from './ExperienceCard';
import { useTranslation } from '@/hooks/use-translation';
import { sectionVariants, staggerContainer } from '@/lib/motion-variants';

export const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col gap-6 w-full"
    >
      <motion.div variants={sectionVariants} className="flex items-center gap-4 mb-6">
        <h2 className="font-space text-sm font-black text-sky-400/80 tracking-[0.2em] uppercase">
          {t('experience.title')}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-sky-500/30 to-transparent" />
      </motion.div>

      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <motion.div key={exp.id} variants={sectionVariants}>
            <ExperienceCard experience={exp} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
