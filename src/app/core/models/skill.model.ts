export interface FlatTech {
  name: string;
  icon: string;
  level: number;
  years: number;
  category: string;
}

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
    description: 'Angular · React · Vue · Flutter · TypeScript · UI/UX',
    level: 95,
    techs: [
      { name: 'Angular', icon: '🅰️', level: 95, years: 5 },
      { name: 'TypeScript', icon: 'TS', level: 93, years: 5 },
      { name: 'RxJS', icon: '🔄', level: 90, years: 4 },
      { name: 'CSS', icon: '🎨', level: 88, years: 4 },
      { name: 'SCSS', icon: '🎨', level: 88, years: 4 },
      { name: 'React', icon: '⚛️', level: 75, years: 3 },
      { name: 'Vue', icon: '🧩', level: 70, years: 2 },
      { name: 'Flutter', icon: '📱', level: 65, years: 2 }
    ]
  },

  {
    icon: '◈',
    name: 'Backend',
    description: 'Spring Boot · Python · Node.js · APIs · Microservicios',
    level: 90,
    techs: [
      {name: 'Spring Boot', icon: '🌱', level: 92, years: 4},
      {name: 'Node.js', icon: '🟢', level: 94, years: 4},
      {name: 'Flask', icon: '🐍', level: 88, years: 3},
      {name: 'Express', icon: '🚂', level: 85, years: 3},
      {name: 'REST APIs', icon: '🔗', level: 92, years: 3},
      {name: 'Java', icon: '☕', level: 90, years: 4}
    ]
  },

  {
    icon: '🔗',
    name: 'Integración & Event-Driven',
    description: 'APIs · Mensajería · Microservicios · Sistemas distribuidos',
    level: 90,
    techs: [
      {name: 'Kafka', icon: '📡', level: 75, years: 1},
      {name: 'Redis', icon: '⚡', level: 80, years: 2},
      {name: 'AS400', icon: '💻', level: 75, years: 1},
      {name: 'Microservicios', icon: '⚙️', level: 90, years: 3},
      {name: 'API Gateway', icon: '🚪', level: 85, years: 2},
      {name: 'Orquestación de servicios', icon: '🔄', level: 90, years: 2},
      {name: 'Arquitectura Hexagonal', icon: '⬢', level: 85, years: 2}
    ]
  },

  {
    icon: '▣',
    name: 'Bases de datos',
    description: 'SQL · NoSQL · Modelado · Optimización',
    level: 88,
    techs: [
      {name: 'PostgreSQL', icon: '🐘', level: 88, years: 3},
      {name: 'MongoDB Atlas', icon: '🍃', level: 90, years: 3},
      {name: 'MySQL', icon: '🐬', level: 85, years: 3},
      {name: 'Oracle', icon: '🟥', level: 78, years: 2},
      {name: 'Firebase Realtime Database', icon: '🗄️', level: 83, years: 2},
      {name: 'Firebase Authentication', icon: '🔐', level: 83, years: 2}
    ]
  },

  {
    icon: '◎',
    name: 'Cloud & DevOps',
    description: 'CI/CD · Cloud · Contenedores · GitOps',
    level: 88,
    techs: [
      {name: 'Docker', icon: '🐳', level: 85, years: 2},
      {name: 'AWS', icon: '☁️', level: 80, years: 1},
      {name: 'Azure', icon: '🔷', level: 80, years: 1},
      {name: 'Jenkins', icon: '🤖', level: 85, years: 3},
      {name: 'ArgoCD', icon: '🚀', level: 80, years: 1},
      {name: 'GitHub Actions', icon: '⚡', level: 78, years: 1},
      {name: 'Bitbucket', icon: '🪣', level: 88, years: 3},
      {name: 'GitOps', icon: '🔁', level: 80, years: 1}
    ]
  },

  {
    icon: '🛡️',
    name: 'Seguridad & DevSecOps',
    description: 'SAST · DAST · SCA · Autenticación · OWASP ZAP',
    level: 85,
    techs: [
      {name: 'Black Duck (SCA)', icon: '🧩', level: 78, years: 1},
      {name: 'Checkmarx (SAST)', icon: '🔍', level: 78, years: 1},
      {name: 'JWT', icon: '🔑', level: 85, years: 3},
      {name: 'OAuth2', icon: '🔐', level: 80, years: 2},
      {name: 'OWASP ZAP', icon: '🛡️', level: 78, years: 2},
      {name: 'Azure AD B2C', icon: '🔷', level: 75, years: 1}
    ]
  },

  {
    icon: '⬟',
    name: 'Calidad de Software',
    description: 'Testing · QA · Análisis estático',
    level: 88,
    techs: [
      {name: 'SonarQube', icon: '📊', level: 90, years: 3},
      {name: 'Postman', icon: '📮', level: 90, years: 3},
      {name: 'Jasmine - Karma', icon: '🧪', level: 89, years: 4},
      {name: 'Jest', icon: '🃏', level: 80, years: 3},
      {name: 'Patron AAA', icon: '🃏', level: 80, years: 3},
    ]
  },

  {
    icon: '◇',
    name: 'Arquitectura',
    description: 'Clean Architecture · SOLID · Diseño de sistemas',
    level: 85,
    techs: [
      {name: 'Clean Architecture', icon: '🏗️', level: 85, years: 3},
      {name: 'Arquitectura Hexagonal', icon: '⬢', level: 85, years: 2},
      {name: 'SOLID', icon: '📐', level: 88, years: 3},
      {name: 'DDD', icon: '🧠', level: 75, years: 1},
      {name: 'Patrones de diseño', icon: '🧩', level: 82, years: 2}
    ]
  },

  {
    icon: '📋',
    name: 'ALM & Productividad',
    description: 'Agile · Gestión · Documentación',
    level: 85,
    techs: [
      {name: 'JIRA', icon: '📊', level: 90, years: 3},
      {name: 'Confluence', icon: '📚', level: 88, years: 2},
      {name: 'Scrum', icon: '🔄', level: 85, years: 3}
    ]
  }
];
