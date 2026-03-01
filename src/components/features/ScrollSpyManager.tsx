'use client';

import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { SECTION_IDS } from '@/lib/constants';

export const ScrollSpyManager = () => {
  useScrollSpy(SECTION_IDS, 0.1);
  return null;
};
