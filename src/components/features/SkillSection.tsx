'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { useTranslation } from '@/hooks/use-translation';
import { staggerContainer, sectionVariants } from '@/lib/motion-variants';
import { useMemo, useState, useEffect } from 'react';

// Move sub-components OUTSIDE to prevent unmounting on re-render
const SkillBadge = ({ name, color, t }: { name: string, color: string, t: (k: string) => string }) => {
  const translatedName = t(`skills.items.${name}`) === `skills.items.${name}` 
    ? name 
    : t(`skills.items.${name}`);

  return (
    <motion.div
      variants={sectionVariants}
      className="group relative"
      whileHover={{ y: -2 }}
    >
      <span
        className="px-3 py-1.5 rounded-xl border text-[10px] md:text-xs font-mono font-bold transition-all duration-300 cursor-default flex items-center gap-2"
        style={{
          color: color,
          borderColor: `${color}4D`,
          backgroundColor: `${color}0D`,
        }}
      >
        <span 
          className="w-1.5 h-1.5 rounded-full" 
          style={{ backgroundColor: color }}
        />
        {translatedName}
      </span>
      <div 
        className="absolute inset-0 blur-md opacity-0 group-hover:opacity-20 transition-opacity rounded-full"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

const SkillGroup = ({ title, items, t }: { title: string, items: typeof skills, t: (k: string) => string }) => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <h3 className="text-[10px] font-mono text-primary-400/60 tracking-widest uppercase font-black">
        {title}
      </h3>
      <div className="h-px flex-1 bg-primary-500/10" />
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((skill) => (
        <SkillBadge key={skill.name} name={skill.name} color={skill.color} t={t} />
      ))}
    </div>
  </div>
);

export function SkillSection() {
  const { t, language } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { softwareSkills, hardwareSkills, otherSkills } = useMemo(() => {
    return {
      softwareSkills: skills.filter(s => s.category === 'Software'),
      hardwareSkills: skills.filter(s => s.category === 'Hardware'),
      otherSkills: skills.filter(s => s.category === 'Others')
    };
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      key={language} // FORCE clean re-render on language change to fix animation sync
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full"
    >
      <motion.div variants={sectionVariants} className="flex items-center gap-4 mb-6">
        <h2 className="font-space text-sm font-black text-primary-400/80 tracking-[0.2em] uppercase">
          {t('skills.title')}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-primary-500/30 to-transparent" />
      </motion.div>

      <div className="relative w-full border-2 border-primary-500/50 rounded-3xl p-8 md:p-12 bg-surface/30 hover:shadow-glow-primary transition-[border-color,shadow] hover:border-primary-500 duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 blur-[100px] -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <SkillGroup title={t('skills.software')} items={softwareSkills} t={t} />
          <SkillGroup title={t('skills.hardware')} items={hardwareSkills} t={t} />
          <SkillGroup title={t('skills.others')} items={otherSkills} t={t} />
        </div>
      </div>
    </motion.div>
  );
}
