'use client';

import { useAppStore } from '@/store/use-app-store';
import { translations } from '@/lib/i18n';

export const useTranslation = () => {
  const language = useAppStore((state) => state.language);
  const t = translations[language];

  return { t, language };
};
