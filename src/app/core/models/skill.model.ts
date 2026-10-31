
import { EXPERIENCE } from './experience.model';

export interface Tech {
  name: string;
  icon: string;
  level: number;
  experienceIds: string[];
}

export interface Skill {
  icon: string;
  name: string;
  description: string;
  level: number;
  techs: Tech[];
}

export interface FlatTech extends Tech {
  category: string;
  experienceMonths: number;
  experienceLabel: string;
}

export const skills: Skill[] = [

  // =====================================================
  // 1. FRONTEND
  // =====================================================
  {
    icon: '⬡',
    name: 'Frontend',
    description: 'Angular · React · Vue · Flutter · TypeScript · UI/UX',
    level: 95,
    techs: [
      {
        name: 'Angular',
        icon: '🅰️',
        level: 95,
        experienceIds: [
          'cloudComputing',
          'minsait',
          'indra',
          'banco-alfin'
        ]
      },
      {
        name: 'TypeScript',
        icon: 'TS',
        level: 93,
        experienceIds: [
          'cloudComputing',
          'minsait',
          'indra',
          'idm-technology',
          'banco-alfin'
        ]
      },
      {
        name: 'RxJS',
        icon: '🔄',
        level: 90,
        experienceIds: [
          'minsait',
          'indra',
          'banco-alfin'
        ]
      },
      {
        name: 'CSS',
        icon: '🎨',
        level: 88,
        experienceIds: [
          'cloudComputing',
          'minsait',
          'indra',
          'banco-alfin'
        ]
      },
      {
        name: 'SCSS',
        icon: '🎨',
        level: 88,
        experienceIds: [
          'cloudComputing',
          'minsait',
          'indra',
          'banco-alfin'
        ]
      },
      {
        name: 'React',
        icon: '⚛️',
        level: 75,
        experienceIds: [
          'cloudComputing',
          'minsait',
          'idm-technology'
        ]
      },
      {
        name: 'Vue',
        icon: '🧩',
        level: 70,
        experienceIds: [
          'cloudComputing'
        ]
      },
      {
        name: 'Flutter',
        icon: '📱',
        level: 65,
        experienceIds: [
          'cloudComputing'
        ]
      }
    ]
  },

  // =====================================================
  // 2. BACKEND
  // =====================================================
  {
    icon: '◈',
    name: 'Backend',
    description: 'Spring Boot · Python · Node.js · APIs · Microservicios',
    level: 90,
    techs: [
      {
        name: 'Spring Boot',
        icon: '🌱',
        level: 92,
        experienceIds: [
          'minsait',
          'indra',
          'idm-technology'
        ]
      },
      {
        name: 'Node.js',
        icon: '🟢',
        level: 94,
        experienceIds: [
          'cloudComputing',
          'minsait'
        ]
      },
      {
        name: 'Flask',
        icon: '🐍',
        level: 88,
        experienceIds: []
      },
      {
        name: 'Express',
        icon: '🚂',
        level: 85,
        experienceIds: [
          'cloudComputing',
          'minsait'
        ]
      },
      {
        name: 'REST APIs',
        icon: '🔗',
        level: 92,
        experienceIds: [
          'cloudComputing',
          'minsait',
          'indra',
          'idm-technology',
          'banco-alfin'
        ]
      },
      {
        name: 'Java',
        icon: '☕',
        level: 90,
        experienceIds: [
          'minsait',
          'indra',
          'idm-technology'
        ]
      }
    ]
  },

  // =====================================================
  // 3. INTEGRACIÓN & EVENT-DRIVEN
  // =====================================================
  {
    icon: '🔗',
    name: 'Integración & Event-Driven',
    description: 'APIs · Mensajería · Microservicios · Sistemas distribuidos',
    level: 90,
    techs: [
      {
        name: 'Kafka',
        icon: '📡',
        level: 75,
        experienceIds: [
          'idm-technology'
        ]
      },
      {
        name: 'Redis',
        icon: '⚡',
        level: 80,
        experienceIds: [
          'idm-technology'
        ]
      },
      {
        name: 'AS400',
        icon: '💻',
        level: 75,
        experienceIds: [
          'idm-technology'
        ]
      },
      {
        name: 'Microservicios',
        icon: '⚙️',
        level: 90,
        experienceIds: [
          'minsait',
          'indra',
          'idm-technology'
        ]
      },
      {
        name: 'API Gateway',
        icon: '🚪',
        level: 85,
        experienceIds: [
          'minsait',
          'indra',
          'idm-technology'
        ]
      },
      {
        name: 'Orquestación de servicios',
        icon: '🔄',
        level: 90,
        experienceIds: [
          'minsait',
          'idm-technology'
        ]
      },
      {
        name: 'Arquitectura Hexagonal',
        icon: '⬢',
        level: 85,
        experienceIds: [
          'idm-technology'
        ]
      }
    ]
  },

  // =====================================================
  // 4. BASES DE DATOS
  // =====================================================
  {
    icon: '▣',
    name: 'Bases de datos',
    description: 'SQL · NoSQL · Modelado · Optimización',
    level: 88,
    techs: [
      {
        name: 'PostgreSQL',
        icon: '🐘',
        level: 88,
        experienceIds: []
      },
      {
        name: 'MongoDB Atlas',
        icon: '🍃',
        level: 90,
        experienceIds: []
      },
      {
        name: 'MySQL',
        icon: '🐬',
        level: 85,
        experienceIds: [
          'cloudComputing'
        ]
      },
      {
        name: 'Oracle',
        icon: '🟥',
        level: 78,
        experienceIds: [
          'cloudComputing',
          'dinet',
          'minsait'
        ]
      },
      {
        name: 'Firebase Realtime Database',
        icon: '🗄️',
        level: 83,
        experienceIds: [
          'cloudComputing'
        ]
      },
      {
        name: 'Firebase Authentication',
        icon: '🔐',
        level: 83,
        experienceIds: [
          'cloudComputing'
        ]
      }
    ]
  },

  // =====================================================
  // 5. CLOUD & DEVOPS
  // =====================================================
  {
    icon: '◎',
    name: 'Cloud & DevOps',
    description: 'CI/CD · Cloud · Contenedores · GitOps',
    level: 88,
    techs: [
      {
        name: 'Docker',
        icon: '🐳',
        level: 85,
        experienceIds: [
          'idm-technology'
        ]
      },
      {
        name: 'AWS',
        icon: '☁️',
        level: 80,
        experienceIds: []
      },
      {
        name: 'Azure',
        icon: '🔷',
        level: 80,
        experienceIds: [
          'minsait'
        ]
      },
      {
        name: 'Jenkins',
        icon: '🤖',
        level: 85,
        experienceIds: [
          'minsait'
        ]
      },
      {
        name: 'ArgoCD',
        icon: '🚀',
        level: 80,
        experienceIds: [
          'idm-technology'
        ]
      },
      {
        name: 'Dynatrace',
        icon: '🔍',
        level: 80,
        experienceIds: []
      },
      {
        name: 'New Relic',
        icon: '📈',
        level: 80,
        experienceIds: []
      },
      {
        name: 'GitHub Actions',
        icon: '⚡',
        level: 78,
        experienceIds: []
      },
      {
        name: 'Bitbucket',
        icon: '🪣',
        level: 88,
        experienceIds: [
          'minsait',
          'indra'
        ]
      },
      {
        name: 'GitOps',
        icon: '🔁',
        level: 80,
        experienceIds: [
          'idm-technology'
        ]
      }
    ]
  },

  // =====================================================
  // 6. SEGURIDAD & DEVSECOPS
  // =====================================================
  {
    icon: '🛡️',
    name: 'Seguridad & DevSecOps',
    description: 'SAST · DAST · SCA · Autenticación · OWASP',
    level: 85,
    techs: [
      {
        name: 'Black Duck (SCA)',
        icon: '🧩',
        level: 78,
        experienceIds: [
          'idm-technology'
        ]
      },
      {
        name: 'Checkmarx (SAST)',
        icon: '🔍',
        level: 78,
        experienceIds: [
          'idm-technology'
        ]
      },
      {
        name: 'JWT',
        icon: '🔑',
        level: 85,
        experienceIds: [
          'minsait',
          'indra',
          'idm-technology'
        ]
      },
      {
        name: 'OAuth2',
        icon: '🔐',
        level: 80,
        experienceIds: [
          'minsait'
        ]
      },
      {
        name: 'OWASP ZAP',
        icon: '🛡️',
        level: 78,
        experienceIds: [
          'indra'
        ]
      },
      {
        name: 'Azure AD B2C',
        icon: '🔷',
        level: 75,
        experienceIds: [
          'minsait'
        ]
      }
    ]
  },

  // =====================================================
  // 7. CALIDAD DE SOFTWARE
  // =====================================================
  {
    icon: '⬟',
    name: 'Calidad de Software',
    description: 'Testing · QA · Análisis estático · Automatización',
    level: 88,
    techs: [
      {
        name: 'SonarQube',
        icon: '📊',
        level: 90,
        experienceIds: [
          'minsait',
          'indra'
        ]
      },
      {
        name: 'Postman',
        icon: '📮',
        level: 90,
        experienceIds: [
          'cloudComputing',
          'minsait',
          'indra',
          'idm-technology',
          'banco-alfin'
        ]
      },
      {
        name: 'Jasmine - Karma',
        icon: '🧪',
        level: 89,
        experienceIds: [
          'minsait',
          'indra',
          'banco-alfin'
        ]
      },
      {
        name: 'Jest',
        icon: '🃏',
        level: 80,
        experienceIds: [
          'idm-technology'
        ]
      },
      {
        name: 'Patrón AAA',
        icon: '🃏',
        level: 80,
        experienceIds: [
          'minsait',
          'indra',
          'banco-alfin'
        ]
      }
    ]
  },

  // =====================================================
  // 8. ARQUITECTURA
  // =====================================================
  {
    icon: '◇',
    name: 'Arquitectura',
    description: 'Clean Architecture · SOLID · Diseño de sistemas',
    level: 85,
    techs: [
      {
        name: 'Clean Architecture',
        icon: '🏗️',
        level: 85,
        experienceIds: [
          'idm-technology'
        ]
      },
      {
        name: 'Arquitectura Hexagonal',
        icon: '⬢',
        level: 85,
        experienceIds: [
          'idm-technology'
        ]
      },
      {
        name: 'SOLID',
        icon: '📐',
        level: 88,
        experienceIds: [
          'minsait',
          'indra',
          'idm-technology',
          'banco-alfin'
        ]
      },
      {
        name: 'DDD',
        icon: '🧠',
        level: 75,
        experienceIds: [
          'idm-technology'
        ]
      },
      {
        name: 'Patrones de diseño',
        icon: '🧩',
        level: 82,
        experienceIds: [
          'minsait',
          'indra',
          'idm-technology',
          'banco-alfin'
        ]
      }
    ]
  },

  // =====================================================
  // 9. ALM & PRODUCTIVIDAD
  // =====================================================
  {
    icon: '📋',
    name: 'ALM & Productividad',
    description: 'Agile · Gestión · Documentación · Colaboración',
    level: 85,
    techs: [
      {
        name: 'JIRA',
        icon: '📊',
        level: 90,
        experienceIds: [
          'minsait',
          'indra',
          'idm-technology',
          'banco-alfin'
        ]
      },
      {
        name: 'Confluence',
        icon: '📚',
        level: 88,
        experienceIds: [
          'minsait',
          'idm-technology'
        ]
      },
      {
        name: 'Scrum',
        icon: '🔄',
        level: 85,
        experienceIds: [
          'minsait',
          'indra',
          'idm-technology',
          'banco-alfin'
        ]
      }
    ]
  }

];
