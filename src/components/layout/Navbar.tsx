'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store/use-app-store';
import { cn } from '@/lib/utils';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS, SECTIONS } from '@/lib/constants';
import { useTranslation } from '@/hooks/use-translation';

export const Navbar = () => {
  const activeSection = useAppStore((state) => state.activeSection);
  const language = useAppStore((state) => state.language);
  const setLanguage = useAppStore((state) => state.setLanguage);
  const { t } = useTranslation();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: SECTIONS.HERO, name: t('nav.hero') },
    { id: SECTIONS.PROJECTS, name: t('nav.projects') },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-sky-500/10 shadow-lg' 
          : 'bg-transparent py-6 border-b border-transparent'
      )}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center" aria-label="Navegació principal">
        {/* Logo / Brand */}
        <button 
          onClick={() => scrollToSection(SECTIONS.HERO)}
          className="text-2xl font-space font-extrabold tracking-tighter text-white group flex items-center gap-1"
          aria-label="Tornar a l'inici"
        >
          MARTÍ<span className="text-sky-500 group-hover:animate-pulse">_</span>
        </button>

        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-10 relative">
            {navItems.map((item) => (
              <li key={item.id} className="relative flex items-center">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    'text-[13px] font-space font-bold tracking-widest uppercase transition-all duration-300 relative z-10 py-1.5 px-2',
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-white/40 hover:text-white/80'
                  )}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.name}
                </button>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-sky-500 shadow-glow-blue"
                    initial={false}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 350, 
                      damping: 30,
                      mass: 1 
                    }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setIsLangOpen(false);
              }}
              aria-expanded={isLangOpen}
              aria-haspopup="listbox"
              className="flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-sky-500 transition-colors uppercase tracking-widest px-2 py-1 rounded-md border border-white/5 bg-white/5 focus:outline-none focus:border-sky-500"
            >
              <Globe size={14} />
              {language}
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  role="listbox"
                  className="absolute top-full right-0 mt-2 bg-surface border border-sky-500/20 rounded-xl overflow-hidden shadow-2xl min-w-[100px]"
                >
                  {(['ca', 'es', 'en'] as const).map((lang) => (
                    <button
                      key={lang}
                      role="option"
                      aria-selected={language === lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLangOpen(false);
                      }}
                      className={cn(
                        "w-full px-4 py-2 text-left text-xs font-mono uppercase transition-colors hover:bg-sky-500/10",
                        language === lang ? "text-sky-500 bg-sky-500/5" : "text-white/40"
                      )}
                    >
                      {lang === 'ca' ? 'CAT' : lang === 'es' ? 'ESP' : 'ENG'}   
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/80 hover:text-white transition-colors p-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Tancar menú" : "Obrir menú"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/5 px-6 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="py-10 flex flex-col gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    'text-2xl font-space font-bold text-left tracking-wider uppercase transition-colors flex items-center gap-4',
                    activeSection === item.id ? 'text-sky-500' : 'text-white/50'
                  )}
                >
                  <span className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeSection === item.id ? "bg-sky-500 shadow-glow-blue" : "bg-white/10"
                  )} />
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
