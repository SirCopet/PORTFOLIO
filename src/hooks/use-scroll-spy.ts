'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/store/use-app-store';

export const useScrollSpy = (sectionIds: string[], threshold = 0.5) => {
  const setActiveSection = useAppStore((state) => state.setActiveSection);

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [sectionIds, threshold, setActiveSection]);
};
