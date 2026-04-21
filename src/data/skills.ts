import { Skill } from '@/types';

export const skills: Skill[] = [
  // Software — Systems/HDL Languages
  { name: 'C', color: '#818cf8', category: 'Software' },
  { name: 'Assembly', color: '#818cf8', category: 'Software' },
  { name: 'VHDL', color: '#818cf8', category: 'Software' },

  // Software — General Purpose Languages
  { name: 'Java', color: '#60a5fa', category: 'Software' },
  { name: 'Python', color: '#60a5fa', category: 'Software' },
  { name: 'Matlab', color: '#60a5fa', category: 'Software' },

  // Software — Frameworks
  { name: 'Angular', color: '#34d399', category: 'Software' },
  { name: 'Spring', color: '#34d399', category: 'Software' },

  // Software — Database
  { name: 'SQL', color: '#38bdf8', category: 'Software' },

  // Hardware — Design
  { name: 'Circuit Design', color: '#fb923c', category: 'Hardware' },
  { name: 'PCBs', color: '#fb923c', category: 'Hardware' },
  { name: 'FPGA', color: '#fb923c', category: 'Hardware' },

  // Hardware — RF & Analysis
  { name: 'Radiofrequency', color: '#f87171', category: 'Hardware' },

  // Hardware — Lab
  { name: 'Oscilloscope', color: '#c084fc', category: 'Hardware' },
  { name: 'Spectrum Analyzer', color: '#c084fc', category: 'Hardware' },
  { name: 'Vector Network Analyzer', color: '#c084fc', category: 'Hardware' },

  // Others — Networking & APIs
  { name: 'CCNA', color: '#2dd4bf', category: 'Others' },
  { name: 'REST APIs', color: '#2dd4bf', category: 'Others' },

  // Others — Dev Tools
  { name: 'Swagger', color: '#94a3b8', category: 'Others' },

  // Others — AI / ML
  { name: 'Artificial Intelligence', color: '#e879f9', category: 'Others' },
];

export const getSkillColor = (name: string): string | null => {
  const skill = skills.find(s => s.name.toLowerCase() === name.toLowerCase());
  return skill ? skill.color : null;
};
