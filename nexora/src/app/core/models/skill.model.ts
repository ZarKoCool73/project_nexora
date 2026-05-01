export interface Skill {
  icon: string;
  name: string;
  description: string;
  level: number;
}

export const skills: Skill[] = [
  {
    icon: '⬡',
    name: 'Frontend',
    description: '· Angular · React · VueJS · TypeScript · SCSS · RxJS · NgRx · HTML5 · CSS3',
    level: 95
  },
  {
    icon: '◈',
    name: 'Backend',
    description: '· Spring Boot · Node.js · Express · Spring Boot · REST APIs · Microservicios',
    level: 90
  },
  {
    icon: '▣',
    name: 'Bases de datos',
    description: '· PostgreSQL · MySQL · MongoDB · Redis · Firebase',
    level: 88
  },
  {
    icon: '◎',
    name: 'Cloud & DevOps',
    description: '· AWS (básico-intermedio) · Docker · CI/CD · Jenkins · GitHub Actions · ArgoCD',
    level: 82
  },
  {
    icon: '⬟',
    name: 'Arquitectura',
    description: '· Microservicios · Clean Architecture · SOLID · MVC · APIs REST',
    level: 85
  },
  {
    icon: '◇',
    name: 'Testing & QA',
    description: '· Jasmine · Karma · Postman · Unit Testing · Integración básica',
    level: 80
  }
];
