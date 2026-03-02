'use client';

import { useEffect, useRef } from 'react';
import { useAppStore } from '@/store/use-app-store';

export const useScrollSpy = (sectionIds: string[], threshold = 0.2) => {
  const setActiveSection = useAppStore((state) => state.setActiveSection);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect existing observer if any
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create a single observer for all elements
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: '-20% 0px -40% 0px'
      }    );

    const observer = observerRef.current;

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, threshold, setActiveSection]);
};
