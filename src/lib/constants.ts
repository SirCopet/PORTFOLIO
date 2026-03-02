export const SECTIONS = {
  HERO: 'hero',
  PROJECTS: 'projects',
} as const;

export const SECTION_IDS = Object.values(SECTIONS);

export const NAV_ITEMS = [
  { name: 'Inici', id: SECTIONS.HERO },
  { name: 'Projectes', id: SECTIONS.PROJECTS },
];
