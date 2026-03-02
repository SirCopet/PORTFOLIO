'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { useTranslation } from '@/hooks/use-translation';
import { staggerContainer, sectionVariants } from '@/lib/motion-variants';

export function SkillSection() {
  const { t } = useTranslation();

  // Group skills by category
  const softwareSkills = skills.filter(s => s.category === 'Software');
  const hardwareSkills = skills.filter(s => s.category === 'Hardware');
  const otherSkills = skills.filter(s => s.category === 'Others');

  const SkillBadge = ({ name, color }: { name: string, color: string }) => (
    <motion.div
      variants={sectionVariants}
      className="group relative"
      whileHover={{ y: -2 }}
    >
      <span
        className="px-3 py-1.5 rounded-xl border text-[10px] md:text-xs font-mono font-bold transition-all duration-300 cursor-default flex items-center gap-2"
        style={{
          color: color,
          borderColor: `${color}4D`, // 30% opacity
          backgroundColor: `${color}0D`, // 5% opacity
        }}
      >
        <span 
          className="w-1.5 h-1.5 rounded-full" 
          style={{ backgroundColor: color }}
        />
        {name}
      </span>
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 blur-md opacity-0 group-hover:opacity-20 transition-opacity rounded-full"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );

  const SkillGroup = ({ title, items }: { title: string, items: typeof skills }) => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h3 className="text-[10px] font-mono text-sky-400/60 tracking-widest uppercase font-black">
          {title}
        </h3>
        <div className="h-px flex-1 bg-sky-500/10" />
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} color={skill.color} />
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full"
    >
      {/* Section Title - ARA FORA DEL CONTORN */}
      <motion.div variants={sectionVariants} className="flex items-center gap-4 mb-6">
        <h2 className="font-space text-sm font-black text-sky-400/80 tracking-[0.2em] uppercase">
          {t('skills.title')}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-sky-500/30 to-transparent" />
      </motion.div>

      {/* Contenedor amb estil Bio */}
      <div className="relative w-full border-2 border-sky-500/50 rounded-3xl p-8 md:p-12 bg-surface/30 hover:shadow-glow-blue transition-[border-color,shadow] hover:border-sky-500 duration-500 overflow-hidden">
        {/* Decorative gradient background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 blur-[100px] -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <SkillGroup title={t('skills.software')} items={softwareSkills} />
          <SkillGroup title={t('skills.hardware')} items={hardwareSkills} />
          <SkillGroup title={t('skills.others')} items={otherSkills} />
        </div>
      </div>
    </motion.div>
  );
}
