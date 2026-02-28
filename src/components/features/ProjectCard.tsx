'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const isGreen = project.category === 'IA' || project.category === 'Hardware';
  const accentColor = isGreen ? 'text-pcb-green' : 'text-solder-gold';
  const borderColor = isGreen ? 'border-pcb-green/30' : 'border-solder-gold/30';
  const hoverGlow = isGreen ? 'hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]' : 'hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]';

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-sm border bg-surface transition-all duration-300',
        borderColor,
        hoverGlow
      )}
    >
      {/* Project Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <div className="absolute inset-0 bg-background/20 mix-blend-overlay transition-opacity group-hover:opacity-0" />
        {/* Placeholder for images not yet created */}
        <div className="flex h-full w-full items-center justify-center bg-background/50 text-xs font-mono text-foreground/30 uppercase tracking-widest">
          {project.title} IMAGE
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className={cn('font-mono text-[10px] uppercase tracking-wider', accentColor)}>
            {project.category} {'//'} {project.year}
          </span>
          <div className="flex gap-3">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/50 transition-colors hover:text-pcb-green"
              >
                <Github size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/50 transition-colors hover:text-solder-gold"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <h3 className="mb-3 font-mono text-lg leading-tight text-foreground transition-colors group-hover:text-pcb-green">
          {project.title}
        </h3>
        
        <p className="mb-6 flex-1 text-sm leading-relaxed text-foreground/60">
          {project.description}
        </p>

        {/* Technical Tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="border border-foreground/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-tighter text-foreground/40 transition-colors group-hover:border-pcb-green/20 group-hover:text-pcb-green/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent trace */}
      <div className={cn('h-[1px] w-0 transition-all duration-500 group-hover:w-full', isGreen ? 'bg-pcb-green' : 'bg-solder-gold')} />
    </motion.div>
  );
};
