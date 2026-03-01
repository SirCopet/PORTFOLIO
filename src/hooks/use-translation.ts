'use client';

import { useAppStore } from '@/store/use-app-store';
import { translations } from '@/lib/i18n';

export const useTranslation = () => {
  const language = useAppStore((state) => state.language);
  
  const t = (key: string) => {
    const keys = key.split('.');
    let current: any = translations[language];
    
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        return key; // Retorna la clau si no troba la traducció
      }
    }
    
    return current;
  };

  return { t, language };
};
