import { Skill } from '@/types';

export const skills: Skill[] = [
  // Software
  { name: 'C', color: '#3b82f6', category: 'Software' }, // Blue
  { name: 'Java', color: '#ef4444', category: 'Software' }, // Red
  { name: 'Python', color: '#facc15', category: 'Software' }, // Yellow
  { name: 'VHDL', color: '#a855f7', category: 'Software' }, // Purple
  { name: 'Assembly', color: '#9ca3af', category: 'Software' }, // Gray
  { name: 'Matlab', color: '#ea580c', category: 'Software' }, // Orange
  { name: 'SQL', color: '#38bdf8', category: 'Software' }, // Sky
  { name: 'Angular', color: '#dc2626', category: 'Software' }, // Red-600
  { name: 'Spring', color: '#10b981', category: 'Software' }, // Emerald

  // Hardware
  { name: 'Circuit Design', color: '#2dd4bf', category: 'Hardware' }, // Teal
  { name: 'PCBs', color: '#16a34a', category: 'Hardware' }, // Green
  { name: 'Component Analysis', color: '#6366f1', category: 'Hardware' }, // Indigo
  { name: 'Radiofrequency', color: '#f43f5e', category: 'Hardware' }, // Rose

  // Others
  { name: 'CCNA', color: '#2563eb', category: 'Others' }, // Blue-600
  { name: 'Swagger', color: '#4ade80', category: 'Others' }, // Green-400
  { name: 'REST APIs', color: '#06b6d4', category: 'Others' }, // Cyan
  { name: 'Artificial Intelligence', color: '#d946ef', category: 'Others' }, // Fuchsia
  { name: 'AI', color: '#d946ef', category: 'Others' },
  { name: 'BMAD', color: '#0ea5e9', category: 'Others' }, // Sky-500
  { name: 'Hardware', color: '#f59e0b', category: 'Hardware' }, // Amber
  { name: 'Microcontroller', color: '#10b981', category: 'Hardware' }, // Emerald
  { name: 'Verilog', color: '#8b5cf6', category: 'Software' }, // Violet
  { name: 'Altium Designer', color: '#fb923c', category: 'Hardware' }, // Orange
  { name: 'RF Simulation', color: '#f43f5e', category: 'Hardware' }, // Rose
];

export const getSkillColor = (name: string): string | null => {
  const skill = skills.find(s => s.name.toLowerCase() === name.toLowerCase());
  return skill ? skill.color : null;
};
