export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  stack: string;
  year: number;
  type: 'featured' | 'regular' | 'half';
  url?: string;
}
