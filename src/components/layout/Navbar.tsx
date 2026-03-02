'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store/use-app-store';
import { cn } from '@/lib/utils';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';
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

  const navItems = NAV_ITEMS.map(item => ({
    ...item,
    name: t(`nav.${item.id}`)
  }));

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md py-4 border-b border-primary-500/20 shadow-lg' 
          : 'bg-transparent py-6 border-b border-transparent'
      )}
    >
      <nav className="container mx-auto px-6 flex justify-end items-center" aria-label="Navegació principal">
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
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary-500 shadow-glow-primary"
                    initial={false}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 250, 
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
              className="flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-primary-500 transition-colors uppercase tracking-widest px-2 py-1 rounded-md border border-white/5 bg-white/5 focus:outline-none focus:border-primary-500"
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
                  className="absolute top-full right-0 mt-2 bg-surface border border-primary-500/20 rounded-xl overflow-hidden shadow-2xl min-w-[100px]"
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
                        "w-full px-4 py-2 text-left text-xs font-mono uppercase transition-colors hover:bg-primary-500/10",
                        language === lang ? "text-primary-500 bg-primary-500/5" : "text-white/40"
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
                    activeSection === item.id ? 'text-primary-500' : 'text-white/50'
                  )}
                >
                  <span className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeSection === item.id ? "bg-primary-500 shadow-glow-primary" : "bg-white/10"
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
