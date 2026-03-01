export type ProjectCategory = 'IA' | 'RF' | 'Hardware' | 'Software' | 'Backend' | 'Embedded';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: ProjectCategory;
  year: string;
}
