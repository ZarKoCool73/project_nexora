export interface Skill {
  icon: string;
  name: string;
  description: string;
  level: number;
  techs: Tech[];
}

export interface Tech {
  name: string;
  icon: string;
  level: number;
  years: number;
}

export const skills: Skill[] = [
  {
    icon: '⬡',
    name: 'Frontend',
    description: 'Angular · React · TypeScript · UI/UX',
    level: 95,
    techs: [
      { name: 'Angular', icon: '🅰️', level: 95, years: 3 },
      { name: 'React', icon: '⚛️', level: 85, years: 2 },
      { name: 'TypeScript', icon: 'TS', level: 92, years: 3 },
      { name: 'SCSS', icon: '🎨', level: 90, years: 3 },
      { name: 'RxJS', icon: '🔄', level: 88, years: 2 }
    ]
  },

  {
    icon: '◈',
    name: 'Backend',
    description: 'Node.js · Spring Boot · APIs · Microservicios',
    level: 90,
    techs: [
      { name: 'Node.js', icon: '🟢', level: 90, years: 3 },
      { name: 'Spring Boot', icon: '🌱', level: 88, years: 2 },
      { name: 'Flask', icon: '🐍', level: 80, years: 2 },
      { name: 'Express', icon: '🚂', level: 85, years: 3 },
      { name: 'REST APIs', icon: '🔗', level: 92, years: 3 }
    ]
  },

  {
    icon: '🔗',
    name: 'Integración de Sistemas',
    description: 'APIs · Microservicios · Arquitectura distribuida',
    level: 90,
    techs: [
      { name: 'Microservicios', icon: '⚙️', level: 90, years: 2 },
      { name: 'API Gateway', icon: '🚪', level: 85, years: 2 },
      { name: 'Integración FE-BE', icon: '🔄', level: 92, years: 3 },
      { name: 'Arquitectura distribuida', icon: '🌐', level: 85, years: 2 }
    ]
  },

  {
    icon: '▣',
    name: 'Bases de datos',
    description: 'SQL · NoSQL · Modelado · Performance',
    level: 88,
    techs: [
      { name: 'PostgreSQL', icon: '🐘', level: 88, years: 3 },
      { name: 'MongoDB', icon: '🍃', level: 90, years: 3 },
      { name: 'MySQL', icon: '🐬', level: 85, years: 2 },
      { name: 'Redis', icon: '⚡', level: 80, years: 2 },
      { name: 'Kafka', icon: '📡', level: 75, years: 1 }
    ]
  },

  {
    icon: '◎',
    name: 'Cloud & DevOps',
    description: 'CI/CD · Contenedores · Cloud',
    level: 85,
    techs: [
      { name: 'Docker', icon: '🐳', level: 85, years: 2 },
      { name: 'AWS', icon: '☁️', level: 80, years: 2 },
      { name: 'Azure', icon: '🔷', level: 80, years: 2 },
      { name: 'Jenkins', icon: '🤖', level: 85, years: 2 },
      { name: 'GitHub Actions', icon: '⚡', level: 82, years: 2 }
    ]
  },

  {
    icon: '🛡️',
    name: 'Seguridad',
    description: 'Autenticación · OWASP · Protección de APIs',
    level: 80,
    techs: [
      { name: 'JWT', icon: '🔑', level: 85, years: 3 },
      { name: 'OAuth2', icon: '🔐', level: 80, years: 2 },
      { name: 'OWASP', icon: '🛡️', level: 78, years: 2 },
      { name: 'Azure AD B2C', icon: '🔷', level: 75, years: 1 }
    ]
  },

  {
    icon: '⬟',
    name: 'Calidad de Software',
    description: 'Testing · Análisis estático · QA',
    level: 85,
    techs: [
      { name: 'Jasmine', icon: '🧪', level: 85, years: 3 },
      { name: 'Karma', icon: '⚙️', level: 85, years: 3 },
      { name: 'Jest', icon: '🃏', level: 80, years: 2 },
      { name: 'SonarQube', icon: '📊', level: 88, years: 2 },
      { name: 'Postman', icon: '📮', level: 90, years: 3 }
    ]
  },

  {
    icon: '◇',
    name: 'Arquitectura',
    description: 'Clean Architecture · SOLID · Diseño de sistemas',
    level: 85,
    techs: [
      { name: 'Clean Architecture', icon: '🏗️', level: 85, years: 2 },
      { name: 'SOLID', icon: '📐', level: 88, years: 3 },
      { name: 'MVC', icon: '🧩', level: 85, years: 3 },
      { name: 'Patrones de diseño', icon: '🧠', level: 82, years: 2 }
    ]
  }
];
