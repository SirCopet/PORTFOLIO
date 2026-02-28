'use client';

import { useScrollSpy } from '@/hooks/use-scroll-spy';

export const ScrollSpyManager = () => {
  useScrollSpy(['hero', 'projects', 'contact'], 0.5);
  return null;
};
