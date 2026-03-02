'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '@/types';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/use-translation';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl border-bold border-gray-700 bg-surface/50 backdrop-blur-sm transition-all duration-300',
        'hover:border-sky-500 hover:shadow-glow-blue'
      )}
    >
      {/* Project Image */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-gray-700 group-hover:border-sky-500/30 transition-colors">
        <div className="absolute inset-0 bg-background/40 mix-blend-overlay transition-opacity z-10 group-hover:opacity-0" />
        <Image
          src={project.imageUrl}
          alt={t(project.title)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-sky-500 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
              {project.category} {'//'} {project.year}
            </span>
            <span className={cn(
              "font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border",
              project.type === 'academic' 
                ? "text-purple-400 bg-purple-400/10 border-purple-400/20" 
                : "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
            )}>
              {t(`projects.types.${project.type}`)}
            </span>
          </div>
          <div className="flex gap-4">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-sky-500"
              >
                <Github size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 transition-colors hover:text-sky-500"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <h3 className="mb-4 font-space text-2xl font-extrabold leading-tight text-white transition-colors group-hover:text-sky-400">
          {t(project.title)}
        </h3>
        
        <p className="mb-6 text-sm leading-relaxed text-white/50 font-sans">
          {t(project.description)}
        </p>

        {/* Expandable Long Description */}
        {project.longDescription && (
          <div className="mb-8">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-controls={`desc-${project.id}`}
              className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-sky-500/60 hover:text-sky-500 transition-colors group/btn"
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={14} className="group-hover/btn:-translate-y-0.5 transition-transform" />
                  <span>{t('projects.actions.show_less')}</span>
                </>
              ) : (
                <>
                  <ChevronDown size={14} className="group-hover/btn:translate-y-0.5 transition-transform" />
                  <span>{t('projects.actions.show_more')}</span>
                </>
              )}
            </button>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  id={`desc-${project.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-xs leading-relaxed text-white/40 font-sans border-l-2 border-sky-500/20 pl-4">
                    {t(project.longDescription)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Technical Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="border border-white/5 bg-white/5 px-3 py-1 rounded-lg font-mono text-[9px] uppercase tracking-widest text-white/30 transition-colors group-hover:border-sky-500/20 group-hover:text-sky-500/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </motion.div>
  );
};
