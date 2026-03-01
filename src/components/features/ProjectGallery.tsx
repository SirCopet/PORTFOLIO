'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { cn } from '@/lib/utils';
import { sectionVariants, staggerContainer } from '@/lib/motion-variants';
import { useTranslation } from '@/hooks/use-translation';
import { projects } from '@/data/projects';

export const ProjectGallery = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-32 bg-black">
      <motion.div
        className="container mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <motion.div variants={sectionVariants} className="mb-20 text-center"> 
          <h2 className="mb-4 text-5xl font-space font-extrabold tracking-tight text-white uppercase">
            {t.projects.title}
          </h2>
          <div className="h-1.5 w-24 bg-sky-500 shadow-glow-blue mx-auto rounded-full" />
          <p className="mt-8 max-w-2xl mx-auto text-white/50 text-lg leading-relaxed font-sans">
            {t.projects.description}
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <motion.div 
          variants={sectionVariants}
          className={cn(
            "grid gap-12",
            "grid-cols-1", // Mobile
            "md:grid-cols-2", // Tablet
            "lg:grid-cols-3" // Desktop
          )}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
