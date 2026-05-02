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
    description: 'Angular · React · Vue · TypeScript · RxJS · NgRx · HTML · HTML5 · SCSS · CSS · Flutter',
    level: 95
  },
  {
    icon: '◈',
    name: 'Backend',
    description: 'Spring Boot · Node.js · Python - Flask · Express · REST APIs · Microservicios · PHP · .NET',
    level: 90
  },
  {
    icon: '🔗',
    name: 'Integración de Sistemas',
    description: 'Microservicios · APIs REST · Integración frontend-backend · Arquitectura distribuida',
    level: 90
  },
  {
    icon: '▣',
    name: 'Bases de datos',
    description: 'PostgreSQL · MySQL · Oracle · SQL Server · MongoDB Atlas · Redis · Kafka · Firebase RealTime Database · Firebase Authentication',
    level: 88
  },
  {
    icon: '◎',
    name: 'Cloud & DevOps',
    description: 'Azure · AWS · Docker · Jenkins · CI/CD · GitHub Actions · Bitbucket · ArgoCD',
    level: 85
  },
  {
    icon: '🛡️',
    name: 'Seguridad',
    description: 'OWASP ZAP · Azure AD B2C · Autenticación · Autorización · Buenas prácticas OWASP',
    level: 80
  },
  {
    icon: '⬟',
    name: 'Calidad de Software',
    description: 'SonarQube · Jest · Jasmine · Karma · Postman · BlackDuck · Checkmarx',
    level: 85
  },
  {
    icon: '◇',
    name: 'Arquitectura',
    description: 'Microservicios · Clean Architecture · SOLID · REST APIs · MVC',
    level: 85
  }
];
