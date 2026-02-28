'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { cn } from '@/lib/utils';
import { sectionVariants, staggerContainer } from '@/lib/motion-variants';

export const ProjectGallery = () => {
  return (
    <section id="projects" className="py-24">
      <motion.div 
        className="container mx-auto px-6 md:px-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div variants={sectionVariants} className="mb-16">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-white uppercase">
            Projectes Seleccionats
          </h2>
          <div className="h-1 w-12 bg-pcb-green shadow-glow-green" />
          <p className="mt-6 max-w-2xl text-white/60">
            Una mostra de sistemes desenvolupats amb rigor tècnic, des de hardware de RF 
            fins a acceleradors d&apos;IA i sistemes embebits d&apos;alta precisió.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <motion.div 
          variants={sectionVariants}
          className={cn(
            "grid gap-8",
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
