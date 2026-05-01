// src/app/core/models/portfolio.models.ts

export interface Skill {
  icon:  string;
  name:  string;
  tags:  string[];
  level: number; // 0–100
}

export interface Project {
  id:          string;
  title:       string;
  description: string;
  chips:       string[];
  stack:       string;
  year:        number;
  url?:        string;
  repoUrl?:    string;
  size:        'featured' | 'regular' | 'half';
  highlight?:  boolean;
}

export interface Job {
  period:      string;
  role:        string;
  company:     string;
  description: string;
  tags?:       string[];
}

export interface Stat {
  value:  number;
  suffix: string;
  label:  string;
}

export interface ContactLink {
  label:  string;
  value:  string;
  href:   string;
  arrow:  '↗' | '↓' | '→';
  isNew?: boolean;
}

export type Theme = 'dark' | 'light';
