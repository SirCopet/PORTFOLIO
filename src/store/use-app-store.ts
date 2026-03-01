import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SECTIONS } from '@/lib/constants';

type Language = 'ca' | 'es' | 'en';

interface AppState {
  activeSection: string;
  language: Language;
  setActiveSection: (section: string) => void;
  setLanguage: (lang: Language) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      activeSection: SECTIONS.HERO,
      language: 'ca',
      setActiveSection: (section) => set({ activeSection: section }),
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({ language: state.language }),
    }
  )
);
