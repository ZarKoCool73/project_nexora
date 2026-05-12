export type ProjectTier = | 'hero' | 'featured' | 'standard' | 'minor';
export type ProjectCategory = | 'banking' | 'telecom' | 'government' | 'ai' | 'enterprise' | 'personal';
export type ProjectComplexity = | 'high' | 'medium' | 'low';
export type ProjectRole = | 'frontend' | 'backend' | 'fullstack' | 'architecture';
export type ProjectSize = | 'featured' | 'regular' | 'half';
export type ProjectMethodology = | 'scrum' | 'kanban' | 'agile';
export type ProjectStatus = | 'En producción' | 'Completado' | 'En mantenimiento' | 'Archivado';
export type ArchitectureNodeType = | 'frontend' | 'backend' | 'database' | 'queue' | 'security' | 'ai' | 'cloud'
  | 'integration' | 'gateway' | 'testing';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ArchitectureNode {
  id: string;
  title: string;
  type: ArchitectureNodeType;
  connections?: string[];
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  desc: string;
  impact?: string;
  context?: string;
  stack: string;
  tags: string[];
  tier: ProjectTier;
  category: ProjectCategory;
  complexity: ProjectComplexity;
  role: ProjectRole;
  size: ProjectSize;
  featuredOrder?: number;
  year: number;
  duration: string;
  highlightMetrics?: string[];
  responsibilities?: string[];
  achievements?: string[];
  features?: string[];
  metrics?: ProjectMetric[];
  techHighlights?: string[];
  methodology?: string;
  status?: string;
  teamSize?: number;
  gallery?: string[];
  companyLogo?: string;
  companyName?: string;
  clientLogo?: string;
  clientName?: string;
  url?: string;
  architectureFlow?: ArchitectureNode[];
  experienceId: string;
}

export interface ProjectFilterState {
  search: string;
  tags: string[];
  stacks: string[];
  years: number[];
  categories?: ProjectCategory[];
  complexities?: ProjectComplexity[];
  roles?: ProjectRole[];
  status?: ProjectStatus[];
}

export const PROJECTS: Project[] = [

  // ─────────────────────────────────────────────
  // IDM TECHNOLOGY — Scotiabank
  // ─────────────────────────────────────────────

  {
    id: '1',
    title: 'SMS-CONSUMER – Scotiabank',
    desc: 'Servicio batch backend orientado al consumo paralelo de colas AS400 e integración distribuida mediante Kafka para procesamiento financiero empresarial.',
    impact: 'Optimización de procesamiento batch mediante paralelización de consumo AS400 y modernización backend sobre Java 25.',
    context: 'IDM Technology · Scotiabank · 2026',

    // Core tecnológico del proyecto
    stack: 'Spring Boot · Java 25 · Kafka',

    // Herramientas de soporte: calidad, CI/CD, seguridad
    tags: ['SonarQube', 'Jenkins', 'ArgoCD', 'BlackDuck', 'Checkmarx', 'CI/CD'],

    tier: 'hero',
    category: 'banking',
    complexity: 'high',
    role: 'backend',
    featuredOrder: 1,
    size: 'featured',
    year: 2026,
    duration: '4 Meses',
    methodology: 'SCRUM',
    status: 'En producción',
    teamSize: 2,

    highlightMetrics: ['Kafka', 'AS400', 'Java 25', 'Hexagonal Architecture'],

    responsibilities: [
      'Optimización de procesamiento batch backend',
      'Integración y consumo paralelo de colas AS400',
      'Implementación de mensajería distribuida con Kafka',
      'Participación en despliegues automatizados CI/CD',
      'Generación de reportes SAST y DAST del proyecto'
    ],

    achievements: [
      'Reducción de tiempos de procesamiento batch',
      'Modernización tecnológica hacia Java 25',
      'Optimización de integración con sistemas legacy AS400',
      'Implementación de arquitectura backend escalable'
    ],

    features: [
      'Procesamiento batch paralelo',
      'Integración AS400',
      'Mensajería distribuida con Kafka',
      'Arquitectura Hexagonal'
    ],

    techHighlights: [
      'Java 25',
      'Kafka Messaging',
      'Hexagonal Architecture',
      'Batch Processing'
    ],

    metrics: [
      {label: 'Mensajería', value: 'Kafka'},
      {label: 'Arquitectura', value: 'Hexagonal'},
      {label: 'Core Banking', value: 'AS400'}
    ],

    architectureFlow: [
      {
        id: 'as400-layer',
        title: 'AS400',
        type: 'integration',
        description: 'Sistema legacy financiero para consumo batch.',
        connections: ['kafka-layer']
      },
      {
        id: 'kafka-layer',
        title: 'Kafka',
        type: 'queue',
        description: 'Mensajería distribuida para procesamiento de eventos.',
        connections: ['spring-layer']
      },
      {
        id: 'spring-layer',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Motor backend para procesamiento batch empresarial.'
      }
    ],

    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_SB.svg',
    clientName: 'Scotiabank',
    experienceId: 'idm-technology'
  },

  {
    id: '2',
    title: 'Validation-Listener – Scotiabank',
    desc: 'Listener backend distribuido orientado al procesamiento eficiente de colas AS400 e integración de eventos mediante Kafka y Redis.',
    impact: 'Reducción de tiempos de respuesta y optimización de integración backend mediante procesamiento distribuido.',
    context: 'IDM Technology · Scotiabank · 2026',

    stack: 'Spring Boot · Kafka · Redis',

    tags: ['Jenkins', 'ArgoCD', 'CI/CD', 'SonarQube'],

    tier: 'hero',
    category: 'banking',
    complexity: 'high',
    role: 'backend',
    featuredOrder: 2,
    size: 'featured',
    year: 2026,
    duration: '4 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 6,

    highlightMetrics: ['Redis', 'Kafka', 'AS400', 'Distributed Systems'],

    responsibilities: [
      'Desarrollo de listener backend distribuido',
      'Consumo e integración de colas AS400',
      'Procesamiento de eventos mediante Kafka',
      'Optimización de rendimiento usando Redis como caché distribuido',
      'Implementación de despliegues automatizados'
    ],

    achievements: [
      'Optimización de tiempos de respuesta backend',
      'Mejora de integración con sistemas legacy AS400',
      'Implementación de procesamiento distribuido con Kafka',
      'Fortalecimiento de arquitectura backend escalable'
    ],

    features: [
      'Procesamiento de eventos distribuido',
      'Consumo de colas AS400',
      'Caché distribuido con Redis',
      'Mensajería con Kafka',
      'Arquitectura backend escalable'
    ],

    techHighlights: [
      'Kafka Event Processing',
      'Redis Distributed Cache',
      'AS400 Integration',
      'Distributed Systems'
    ],

    metrics: [
      {label: 'Mensajería', value: 'Kafka'},
      {label: 'Caché', value: 'Redis'},
      {label: 'Integración', value: 'AS400'}
    ],

    architectureFlow: [
      {
        id: 'as400-source',
        title: 'AS400',
        type: 'integration',
        description: 'Fuente de eventos y colas legacy.',
        connections: ['kafka-events']
      },
      {
        id: 'kafka-events',
        title: 'Kafka',
        type: 'queue',
        description: 'Mensajería distribuida para procesamiento backend.',
        connections: ['spring-listener']
      },
      {
        id: 'spring-listener',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Listener backend para procesamiento de eventos.',
        connections: ['redis-cache']
      },
      {
        id: 'redis-cache',
        title: 'Redis',
        type: 'database',
        description: 'Caché distribuido para optimización de consultas.'
      }
    ],

    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_SB.svg',
    clientName: 'Scotiabank',
    experienceId: 'idm-technology'
  },

  {
    id: '6',
    title: 'GESINTEL – Scotiabank',
    desc: 'Sistema financiero orientado a la validación de personas PEP y entidades financieras mediante servicios empresariales backend y frontend React.',
    impact: 'Fortalecimiento de validaciones financieras y modernización tecnológica del sistema.',
    context: 'IDM Technology · Scotiabank · 2026',

    stack: 'React · Spring Boot',

    tags: ['SonarQube', 'Jenkins', 'ArgoCD', 'Postman', 'CI/CD'],

    tier: 'featured',
    category: 'banking',
    complexity: 'medium',
    role: 'fullstack',
    size: 'half',
    year: 2026,
    duration: '4 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 5,

    highlightMetrics: ['PEP Validation', 'Spring Boot', 'React', 'Financial Security'],

    responsibilities: [
      'Desarrollo de componentes frontend empresariales con React',
      'Implementación de servicios backend con Spring Boot',
      'Integración de validaciones financieras PEP',
      'Optimización de flujos de validación y consumo de APIs',
      'Participación en pipelines CI/CD y aseguramiento de calidad'
    ],

    achievements: [
      'Reducción de tiempos de validación financiera',
      'Modernización tecnológica del sistema legacy',
      'Mejora de estabilidad y mantenibilidad backend'
    ],

    features: [
      'Validación PEP',
      'Dashboard React empresarial',
      'APIs financieras con Spring Boot',
      'Integración de servicios desacoplados'
    ],

    techHighlights: [
      'PEP Validation Engine',
      'React + Spring Boot',
      'Financial Services',
      'REST API Integration'
    ],

    metrics: [
      {label: 'Dominio', value: 'Financial'},
      {label: 'Disponibilidad', value: '99.9%'},
      {label: 'Validación', value: 'PEP'}
    ],

    architectureFlow: [
      {
        id: 'react-ui',
        title: 'React',
        type: 'frontend',
        description: 'Interfaz empresarial para gestión de validaciones.',
        connections: ['spring-services']
      },
      {
        id: 'spring-services',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Motor de validación financiera PEP.',
        connections: ['financial-db']
      },
      {
        id: 'financial-db',
        title: 'Oracle DB',
        type: 'database',
        description: 'Persistencia de datos financieros.'
      }
    ],

    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_SB.svg',
    clientName: 'Scotiabank',
    experienceId: 'idm-technology'
  },

  {
    id: '7',
    title: 'BFF – Scotiabank',
    desc: 'Backend For Frontend orientado a la orquestación de servicios empresariales y desacoplamiento de arquitecturas backend bancarias.',
    impact: 'Optimización de consumo de APIs y mejora de mantenibilidad de servicios bancarios.',
    context: 'IDM Technology · Scotiabank · 2026',

    stack: 'Spring Boot · Hexagonal Architecture',

    tags: ['Jenkins', 'ArgoCD', 'CI/CD', 'SonarQube'],

    tier: 'featured',
    category: 'banking',
    complexity: 'medium',
    role: 'backend',
    size: 'half',
    year: 2026,
    duration: '4 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 4,

    highlightMetrics: ['BFF Pattern', 'API Gateway', 'Hexagonal Architecture', 'Banking'],

    responsibilities: [
      'Implementación de Backend For Frontend empresarial',
      'Orquestación de servicios financieros distribuidos',
      'Desacoplamiento de APIs backend mediante BFF',
      'Diseño de arquitectura hexagonal',
      'Automatización de despliegues CI/CD'
    ],

    achievements: [
      'Reducción de complejidad de integración frontend-backend',
      'Mejora de mantenibilidad de microservicios',
      'Optimización de consumo de APIs bancarias'
    ],

    features: [
      'Patrón BFF',
      'API Gateway',
      'Orquestación de servicios',
      'Arquitectura Hexagonal'
    ],

    techHighlights: [
      'BFF Pattern',
      'Hexagonal Architecture',
      'Service Orchestration',
      'API Decoupling'
    ],

    metrics: [
      {label: 'Patrón', value: 'BFF'},
      {label: 'Arquitectura', value: 'Hexagonal'},
      {label: 'Integración', value: 'Enterprise APIs'}
    ],

    architectureFlow: [
      {
        id: 'bff-gateway',
        title: 'BFF Layer',
        type: 'gateway',
        description: 'Capa de orquestación y desacoplamiento de servicios.',
        connections: ['spring-backend']
      },
      {
        id: 'spring-backend',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Servicios backend con arquitectura hexagonal.',
        connections: ['microservices']
      },
      {
        id: 'microservices',
        title: 'Microservicios',
        type: 'integration',
        description: 'Servicios distribuidos del dominio bancario.'
      }
    ],

    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_SB.svg',
    clientName: 'Scotiabank',
    experienceId: 'idm-technology'
  },

  {
    id: '8',
    title: 'Validation-API – Scotiabank',
    desc: 'API empresarial REST orientada a validaciones financieras y procesamiento backend para entidades y personas PEP.',
    impact: 'Mejora de rendimiento y estabilidad mediante optimización de servicios backend financieros.',
    context: 'IDM Technology · Scotiabank · 2026',

    stack: 'Spring Boot',

    tags: ['SonarQube', 'Jenkins', 'Postman', 'CI/CD'],

    tier: 'featured',
    category: 'banking',
    complexity: 'medium',
    role: 'backend',
    size: 'half',
    year: 2026,
    duration: '4 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 4,

    highlightMetrics: ['REST API', 'Validation Services', 'Spring Boot', 'Financial Systems'],

    responsibilities: [
      'Desarrollo de APIs REST empresariales con Spring Boot',
      'Implementación de validaciones financieras backend',
      'Optimización de rendimiento en servicios REST',
      'Integración con motores de validación PEP',
      'Soporte a pipelines CI/CD'
    ],

    achievements: [
      'Incremento de estabilidad de servicios financieros',
      'Optimización de tiempos de respuesta backend',
      'Mejora de mantenibilidad de APIs empresariales'
    ],

    features: [
      'REST API empresarial',
      'Motor de validación financiera',
      'Servicios backend desacoplados',
      'Integración con sistema PEP'
    ],

    techHighlights: [
      'Spring Boot REST',
      'Validation Engine',
      'Financial Backend',
      'API Performance'
    ],

    metrics: [
      {label: 'API', value: 'REST'},
      {label: 'Backend', value: 'Spring Boot'},
      {label: 'Dominio', value: 'Financial'}
    ],

    architectureFlow: [
      {
        id: 'rest-api',
        title: 'REST API',
        type: 'gateway',
        description: 'Capa de entrada para validaciones financieras.',
        connections: ['spring-services']
      },
      {
        id: 'spring-services',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Lógica de negocio y motor de validaciones.',
        connections: ['pep-engine']
      },
      {
        id: 'pep-engine',
        title: 'PEP Engine',
        type: 'integration',
        description: 'Motor de validación de personas y entidades PEP.'
      }
    ],

    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_SB.svg',
    clientName: 'Scotiabank',
    experienceId: 'idm-technology'
  },

  {
    id: '20',
    title: 'MAIL-CONSUMER – Scotiabank',
    desc: 'Servicio batch orientado al consumo y procesamiento de colas AS400 para integración de servicios bancarios backend mediante Kafka.',
    impact: 'Optimización de procesamiento batch y automatización de integración de servicios críticos bancarios.',
    context: 'IDM Technology · Scotiabank · 2026',

    stack: 'Spring Boot · Kafka · AS400',

    tags: ['Jenkins', 'ArgoCD', 'CI/CD', 'SonarQube'],

    tier: 'minor',
    category: 'banking',
    complexity: 'medium',
    role: 'backend',
    size: 'half',
    year: 2026,
    duration: '4 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 4,

    highlightMetrics: ['Kafka', 'AS400', 'Batch Processing', 'Banking'],

    responsibilities: [
      'Desarrollo de servicios batch backend',
      'Consumo e integración de colas AS400',
      'Procesamiento automatizado de eventos con Kafka',
      'Integración con servicios bancarios críticos',
      'Soporte y monitoreo de procesos backend'
    ],

    achievements: [
      'Optimización de consumo de colas empresariales',
      'Automatización de procesamiento backend',
      'Integración de servicios bancarios críticos',
      'Mejora de estabilidad operativa'
    ],

    features: [
      'Batch Processing',
      'Integración AS400',
      'Mensajería Kafka',
      'Procesamiento automatizado'
    ],

    techHighlights: [
      'Kafka Batch Consumer',
      'AS400 Integration',
      'Spring Boot Batch',
      'Banking Systems'
    ],

    metrics: [
      {label: 'Mensajería', value: 'Kafka'},
      {label: 'Core Banking', value: 'AS400'},
      {label: 'Backend', value: 'Spring Boot'}
    ],

    architectureFlow: [
      {
        id: 'as400-layer',
        title: 'AS400',
        type: 'integration',
        description: 'Integración con sistemas core bancarios.',
        connections: ['kafka-layer']
      },
      {
        id: 'kafka-layer',
        title: 'Kafka',
        type: 'queue',
        description: 'Mensajería y procesamiento de eventos batch.',
        connections: ['batch-consumer']
      },
      {
        id: 'batch-consumer',
        title: 'Spring Boot Batch',
        type: 'backend',
        description: 'Servicio batch encargado del procesamiento de colas.'
      }
    ],

    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_SB.svg',
    clientName: 'Scotiabank',
    experienceId: 'idm-technology'
  },

  // ─────────────────────────────────────────────
  // INDRA PERÚ — CLARO
  // ─────────────────────────────────────────────

  {
    id: '4',
    title: 'Botón de Pago – CLARO',
    desc: 'Plataforma empresarial orientada a la integración y procesamiento seguro de pagos digitales mediante arquitectura Full Stack con patrón BFF y validaciones de seguridad OWASP.',
    impact: 'Incremento de confiabilidad, seguridad y estabilidad en flujos empresariales de pagos digitales.',
    context: 'INDRA PERÚ · CLARO · 2025',

    stack: 'Angular · Spring Boot · BFF',

    tags: ['OWASP ZAP', 'Mockito', 'Jest', 'SonarQube', 'CI/CD'],

    tier: 'hero',
    category: 'telecom',
    complexity: 'high',
    role: 'fullstack',
    featuredOrder: 4,
    size: 'featured',
    year: 2025,
    duration: '12 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 9,

    highlightMetrics: ['OWASP Security', 'BFF Pattern', 'Spring Boot', 'Enterprise Payments'],

    responsibilities: [
      'Desarrollo Full Stack de módulos de pagos',
      'Integración de servicios empresariales y APIs REST',
      'Validación de vulnerabilidades mediante OWASP ZAP',
      'Implementación de pruebas unitarias con Mockito y Jest',
      'Control de calidad con SonarQube'
    ],

    achievements: [
      'Optimización de flujo de pagos empresariales',
      'Fortalecimiento de seguridad backend con OWASP',
      'Reducción de incidencias técnicas',
      'Mejora de mantenibilidad y estabilidad'
    ],

    features: [
      'Procesamiento de pagos digitales',
      'Patrón BFF para desacoplamiento',
      'Validaciones de seguridad OWASP',
      'Integración REST APIs',
      'Pruebas automatizadas'
    ],

    techHighlights: [
      'OWASP Security',
      'BFF Architecture',
      'Angular + Spring Boot',
      'Payment Processing'
    ],

    metrics: [
      {label: 'Seguridad', value: 'OWASP'},
      {label: 'Arquitectura', value: 'BFF'},
      {label: 'Backend', value: 'Spring Boot'}
    ],

    architectureFlow: [
      {
        id: 'angular-payments',
        title: 'Angular',
        type: 'frontend',
        description: 'Interfaz de pagos empresarial.',
        connections: ['bff-layer']
      },
      {
        id: 'bff-layer',
        title: 'BFF',
        type: 'gateway',
        description: 'Orquestación y desacoplamiento de servicios de pago.',
        connections: ['spring-payments']
      },
      {
        id: 'spring-payments',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Servicios backend de procesamiento de pagos.',
        connections: ['owasp-security']
      },
      {
        id: 'owasp-security',
        title: 'OWASP ZAP',
        type: 'security',
        description: 'Validación de vulnerabilidades y seguridad.'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_CLARO.svg',
    clientName: 'CLARO',
    experienceId: 'indra'
  },

  {
    id: '12',
    title: 'WEB INCIDENTES – CLARO',
    desc: 'Sistema web orientado a la gestión y seguimiento de incidencias operativas, implementando arquitectura Full Stack con patrón BFF y validaciones de seguridad empresarial.',
    impact: 'Modernización tecnológica y optimización del flujo de atención de incidencias.',
    context: 'INDRA PERÚ · CLARO · 2025',

    stack: 'Angular · Spring Boot · BFF',

    tags: ['OWASP ZAP', 'Jest', 'SonarQube', 'CI/CD'],

    tier: 'featured',
    category: 'telecom',
    complexity: 'medium',
    role: 'fullstack',
    size: 'half',
    year: 2025,
    duration: '8 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 6,

    highlightMetrics: ['Incident Management', 'OWASP Security', 'BFF', 'Enterprise Platform'],

    responsibilities: [
      'Desarrollo Full Stack de módulos operativos',
      'Integración de servicios backend mediante BFF',
      'Implementación de pruebas técnicas con Jest',
      'Validación de vulnerabilidades con OWASP ZAP',
      'Optimización de flujos de gestión de incidencias'
    ],

    achievements: [
      'Modernización de sistema operativo empresarial',
      'Optimización de gestión de incidencias',
      'Implementación de validaciones de seguridad',
      'Mejora de mantenibilidad y rendimiento'
    ],

    features: [
      'Gestión de incidencias operativas',
      'Patrón BFF',
      'Validaciones de seguridad',
      'Pruebas automatizadas'
    ],

    techHighlights: [
      'Angular + Spring Boot',
      'BFF Architecture',
      'OWASP Security',
      'Jest Testing'
    ],

    metrics: [
      {label: 'Seguridad', value: 'OWASP'},
      {label: 'Arquitectura', value: 'BFF'},
      {label: 'Frontend', value: 'Angular'}
    ],

    architectureFlow: [
      {
        id: 'angular-client',
        title: 'Angular',
        type: 'frontend',
        description: 'Interfaz para gestión de incidencias.',
        connections: ['bff-layer']
      },
      {
        id: 'bff-layer',
        title: 'BFF',
        type: 'gateway',
        description: 'Orquestación de servicios empresariales.',
        connections: ['spring-services']
      },
      {
        id: 'spring-services',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Lógica de negocio para gestión de incidencias.',
        connections: ['owasp-layer']
      },
      {
        id: 'owasp-layer',
        title: 'OWASP ZAP',
        type: 'security',
        description: 'Análisis de vulnerabilidades de seguridad.'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_CLARO.svg',
    clientName: 'CLARO',
    experienceId: 'indra'
  },

  {
    id: '16',
    title: 'PCD – CLARO',
    desc: 'Sistema empresarial orientado al control documental y trazabilidad de procesos operativos corporativos con patrón BFF.',
    impact: 'Mejora de trazabilidad documental y optimización de flujos empresariales.',
    context: 'INDRA PERÚ · CLARO · 2025',

    stack: 'Angular · Spring Boot · BFF',

    tags: ['OWASP ZAP', 'Jest', 'SonarQube', 'CI/CD'],

    tier: 'standard',
    category: 'telecom',
    complexity: 'medium',
    role: 'fullstack',
    size: 'half',
    year: 2025,
    duration: '8 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 6,

    highlightMetrics: ['Document Control', 'BFF', 'OWASP', 'Enterprise'],

    responsibilities: [
      'Desarrollo full stack empresarial',
      'Implementación de control documental corporativo',
      'Integración BFF para desacoplamiento backend',
      'Aplicación de validaciones OWASP',
      'Optimización de trazabilidad documental'
    ],

    achievements: [
      'Mejora de trazabilidad operativa',
      'Fortalecimiento de seguridad empresarial',
      'Optimización de procesos documentales'
    ],

    features: [
      'Control documental',
      'Trazabilidad operativa',
      'Patrón BFF',
      'Seguridad OWASP'
    ],

    techHighlights: [
      'Angular + Spring Boot',
      'OWASP Security',
      'BFF Architecture',
      'Document Control'
    ],

    metrics: [
      {label: 'Arquitectura', value: 'BFF'},
      {label: 'Seguridad', value: 'OWASP'},
      {label: 'Frontend', value: 'Angular'}
    ],

    architectureFlow: [
      {
        id: 'angular-client',
        title: 'Angular',
        type: 'frontend',
        description: 'Interfaz de control documental.',
        connections: ['bff-layer']
      },
      {
        id: 'bff-layer',
        title: 'BFF',
        type: 'gateway',
        description: 'Orquestación y desacoplamiento de servicios.',
        connections: ['spring-services']
      },
      {
        id: 'spring-services',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Lógica de control y trazabilidad documental.',
        connections: ['doc-engine']
      },
      {
        id: 'doc-engine',
        title: 'Document Engine',
        type: 'integration',
        description: 'Motor de control documental corporativo.'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_CLARO.svg',
    clientName: 'CLARO',
    experienceId: 'indra'
  },

  {
    id: '21',
    title: 'Botón de Pago (BFF) – CLARO',
    desc: 'Backend For Frontend orientado a la orquestación de servicios de pagos empresariales y consumo seguro de APIs para plataformas de CLARO.',
    impact: 'Mejora de seguridad, integración y mantenibilidad en procesos de pagos mediante capa BFF en Node.js.',
    context: 'INDRA PERÚ · CLARO · 2026',

    stack: 'Node.js · REST APIs',

    tags: ['SonarQube', 'Jest', 'CI/CD'],

    tier: 'minor',
    category: 'telecom',
    complexity: 'medium',
    role: 'backend',
    size: 'half',
    year: 2026,
    duration: '4 Meses',
    methodology: 'agile',
    status: 'Completado',
    teamSize: 5,

    highlightMetrics: ['BFF Pattern', 'Node.js', 'Payments', 'Security'],

    responsibilities: [
      'Desarrollo de BFF para servicios de pagos',
      'Integración y consumo de APIs empresariales',
      'Implementación de validaciones y seguridad backend',
      'Corrección de observaciones técnicas',
      'Análisis de calidad con SonarQube'
    ],

    achievements: [
      'Optimización de integración de servicios de pagos',
      'Mejora de seguridad backend',
      'Participación en arquitectura BFF con Node.js',
      'Reducción de observaciones de calidad'
    ],

    features: [
      'BFF en Node.js',
      'Orquestación de pagos',
      'Integración REST APIs',
      'Validaciones backend'
    ],

    techHighlights: [
      'Node.js BFF',
      'Payment Integration',
      'API Orchestration',
      'Backend Security'
    ],

    metrics: [
      {label: 'Arquitectura', value: 'BFF'},
      {label: 'Backend', value: 'Node.js'},
      {label: 'Seguridad', value: 'API Validation'}
    ],

    architectureFlow: [
      {
        id: 'bff-node',
        title: 'Node.js BFF',
        type: 'backend',
        description: 'Capa de orquestación y seguridad de servicios de pago.',
        connections: ['payments-api']
      },
      {
        id: 'payments-api',
        title: 'Payment APIs',
        type: 'integration',
        description: 'Servicios empresariales de procesamiento de pagos.'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_CLARO.svg',
    clientName: 'CLARO',
    experienceId: 'indra'
  },

  {
    id: '22',
    title: 'WEB INCIDENTES (BFF) – CLARO',
    desc: 'Backend For Frontend en Node.js orientado a la integración y orquestación de servicios empresariales para plataformas internas de CLARO.',
    impact: 'Mejora en la integración y centralización de servicios backend, reduciendo complejidad entre frontend y microservicios.',
    context: 'INDRA PERÚ · CLARO · 2026',

    stack: 'Node.js · REST APIs',

    tags: ['Jest', 'SonarQube', 'CI/CD'],

    tier: 'minor',
    category: 'telecom',
    complexity: 'medium',
    role: 'backend',
    size: 'half',
    year: 2026,
    duration: '4 Meses',
    methodology: 'agile',
    status: 'Completado',
    teamSize: 5,

    highlightMetrics: ['BFF Architecture', 'Node.js', 'REST APIs', 'CI/CD'],

    responsibilities: [
      'Desarrollo y mantenimiento de BFF en Node.js',
      'Integración y consumo de servicios empresariales',
      'Implementación de lógica de orquestación backend',
      'Corrección y levantamiento de observaciones técnicas',
      'Implementación y corrección de pruebas unitarias'
    ],

    achievements: [
      'Optimización de integración frontend-backend',
      'Centralización de servicios empresariales',
      'Mejora en mantenibilidad del backend',
      'Participación en procesos CI/CD'
    ],

    features: [
      'BFF en Node.js',
      'Integración REST APIs',
      'Orquestación de microservicios',
      'Testing backend'
    ],

    techHighlights: [
      'Node.js BFF',
      'REST APIs',
      'Microservices Integration',
      'CI/CD Pipelines'
    ],

    metrics: [
      {label: 'Arquitectura', value: 'BFF'},
      {label: 'Backend', value: 'Node.js'},
      {label: 'Integración', value: 'REST APIs'}
    ],

    architectureFlow: [
      {
        id: 'bff-node',
        title: 'Node.js BFF',
        type: 'backend',
        description: 'Capa de orquestación e integración de servicios empresariales.',
        connections: ['microservices-layer']
      },
      {
        id: 'microservices-layer',
        title: 'Enterprise Services',
        type: 'integration',
        description: 'Microservicios y APIs empresariales integradas.'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_CLARO.svg',
    clientName: 'CLARO',
    experienceId: 'indra'
  },

  // ─────────────────────────────────────────────
  // INDRA PERÚ / MINSAIT — INTEGRATEL
  // ─────────────────────────────────────────────

  {
    id: '9',
    title: 'Expediente Virtual – INTEGRATEL',
    desc: 'Desarrollo de módulos frontend en Angular para sistema de expedientes digitales con autenticación empresarial Azure AD B2C.',
    impact: 'Reducción de incidencias y mejora de estabilidad en entornos productivos.',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',

    stack: 'Angular · Azure AD B2C',

    tags: ['Jasmine', 'Karma', 'SonarQube'],

    tier: 'featured',
    category: 'telecom',
    complexity: 'medium',
    role: 'frontend',
    size: 'half',
    year: 2024,
    duration: '4 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 5,

    highlightMetrics: ['Angular', 'Azure AD B2C', 'Unit Testing', 'Enterprise Frontend'],

    responsibilities: [
      'Desarrollo de módulos frontend en Angular',
      'Integración con Azure AD B2C',
      'Corrección de incidencias productivas',
      'Implementación de pruebas unitarias con Jasmine/Karma',
      'Optimización de experiencia de usuario'
    ],

    achievements: [
      'Reducción de incidencias en producción',
      'Mejora de estabilidad del frontend',
      'Optimización de autenticación empresarial con Azure AD'
    ],

    features: [
      'Módulos Angular empresariales',
      'Autenticación Azure AD B2C',
      'Gestión de expedientes digitales',
      'Pruebas unitarias'
    ],

    techHighlights: [
      'Angular Enterprise',
      'Azure AD B2C',
      'Jasmine/Karma Testing',
      'Frontend Scalable'
    ],

    metrics: [
      {label: 'Frontend', value: 'Angular'},
      {label: 'Auth', value: 'Azure AD B2C'},
      {label: 'Testing', value: 'Jasmine/Karma'}
    ],

    architectureFlow: [
      {
        id: 'angular-app',
        title: 'Angular',
        type: 'frontend',
        description: 'Módulos de expedientes digitales.',
        connections: ['azure-auth']
      },
      {
        id: 'azure-auth',
        title: 'Azure AD B2C',
        type: 'security',
        description: 'Autenticación y autorización empresarial.',
        connections: ['document-modules']
      },
      {
        id: 'document-modules',
        title: 'Document Modules',
        type: 'frontend',
        description: 'Módulos de gestión documental.'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
    experienceId: 'minsait'
  },

  {
    id: '10',
    title: 'PACIFYC – INTEGRATEL',
    desc: 'Plataforma empresarial Full Stack orientada a la gestión y optimización de procesos internos corporativos con mejoras evolutivas.',
    impact: 'Optimización y modernización de procesos internos mediante una arquitectura escalable y mantenible.',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',

    stack: 'Angular · Spring Boot · PL/SQL',

    tags: ['Mockito', 'SonarQube', 'CI/CD'],

    tier: 'featured',
    category: 'enterprise',
    complexity: 'medium',
    role: 'fullstack',
    size: 'regular',
    year: 2024,
    duration: '8 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 7,

    highlightMetrics: ['Enterprise Platform', 'Spring Boot', 'PL/SQL', 'Process Optimization'],

    responsibilities: [
      'Desarrollo de funcionalidades frontend y backend',
      'Integración de servicios empresariales',
      'Optimización de consultas PL/SQL',
      'Implementación de pruebas con Mockito',
      'Control de calidad mediante SonarQube'
    ],

    achievements: [
      'Optimización de procesos internos empresariales',
      'Modernización tecnológica de plataforma corporativa',
      'Mejora de mantenibilidad y estabilidad'
    ],

    features: [
      'Gestión empresarial interna',
      'Integración Angular + Spring Boot',
      'Consultas optimizadas PL/SQL',
      'Pruebas unitarias backend'
    ],

    techHighlights: [
      'Angular Enterprise',
      'Spring Boot APIs',
      'PL/SQL Optimization',
      'Mockito Testing'
    ],

    metrics: [
      {label: 'Arquitectura', value: 'Full Stack'},
      {label: 'Backend', value: 'Spring Boot'},
      {label: 'Base de Datos', value: 'PL/SQL'}
    ],

    architectureFlow: [
      {
        id: 'angular-ui',
        title: 'Angular',
        type: 'frontend',
        description: 'Interfaz empresarial de gestión interna.',
        connections: ['spring-api']
      },
      {
        id: 'spring-api',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Servicios backend empresariales.',
        connections: ['plsql-db']
      },
      {
        id: 'plsql-db',
        title: 'PL/SQL',
        type: 'database',
        description: 'Base de datos corporativa optimizada.'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
    experienceId: 'minsait'
  },

  {
    id: '11',
    title: 'SISTEC – INTEGRATEL',
    desc: 'Sistema empresarial Full Stack orientado a la optimización operativa y mantenimiento evolutivo de procesos corporativos con Oracle.',
    impact: 'Mejora de procesos internos y evolución tecnológica de plataforma empresarial.',
    context: 'INDRA PERÚ · INTEGRATEL · 2025',

    stack: 'Angular · Spring Boot · Oracle · PL/SQL',

    tags: ['Mockito', 'SonarQube', 'CI/CD'],

    tier: 'featured',
    category: 'enterprise',
    complexity: 'medium',
    role: 'fullstack',
    size: 'regular',
    year: 2025,
    duration: '10 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 8,

    highlightMetrics: ['Oracle', 'Enterprise', 'Spring Boot', 'Operational Optimization'],

    responsibilities: [
      'Implementación de funcionalidades frontend y backend',
      'Mantenimiento evolutivo de plataforma empresarial',
      'Optimización de consultas Oracle y PL/SQL',
      'Integración de APIs y servicios backend',
      'Implementación de pruebas con Mockito'
    ],

    achievements: [
      'Optimización de procesos corporativos',
      'Mejora de rendimiento operativo',
      'Evolución de arquitectura empresarial',
      'Integración de servicios backend escalables'
    ],

    features: [
      'Sistema empresarial interno',
      'Integración Oracle DB',
      'Arquitectura Full Stack',
      'Mantenimiento evolutivo'
    ],

    techHighlights: [
      'Oracle Database',
      'Spring Boot',
      'Angular Architecture',
      'PL/SQL Enterprise'
    ],

    metrics: [
      {label: 'Database', value: 'Oracle'},
      {label: 'Arquitectura', value: 'Full Stack'},
      {label: 'Backend', value: 'Spring Boot'}
    ],

    architectureFlow: [
      {
        id: 'angular-ui',
        title: 'Angular',
        type: 'frontend',
        description: 'Interfaz empresarial corporativa.',
        connections: ['spring-api']
      },
      {
        id: 'spring-api',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Servicios backend con lógica empresarial.',
        connections: ['oracle-db']
      },
      {
        id: 'oracle-db',
        title: 'Oracle DB',
        type: 'database',
        description: 'Base de datos Oracle con PL/SQL optimizado.'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
    experienceId: 'minsait'
  },

  {
    id: '13',
    title: 'Jerarquía de Ventas – INTEGRATEL',
    desc: 'Sistema empresarial Full Stack orientado a la gestión jerárquica y administración de estructuras comerciales y operativas.',
    impact: 'Optimización de procesos comerciales y mejora de organización jerárquica empresarial.',
    context: 'INDRA PERÚ · INTEGRATEL · 2025',

    stack: 'Angular · React · Spring Boot · Oracle',

    tags: ['Jasmine', 'Karma', 'SonarQube', 'CI/CD'],

    tier: 'featured',
    category: 'telecom',
    complexity: 'medium',
    role: 'fullstack',
    size: 'half',
    year: 2025,
    duration: '8 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 6,

    highlightMetrics: ['Sales Hierarchy', 'Angular', 'React', 'Enterprise'],

    responsibilities: [
      'Desarrollo de interfaces frontend empresariales con Angular y React',
      'Integración de servicios backend con Spring Boot',
      'Gestión de estructuras jerárquicas comerciales',
      'Implementación de pruebas unitarias',
      'Optimización de procesos comerciales'
    ],

    achievements: [
      'Digitalización de estructuras comerciales',
      'Optimización de procesos jerárquicos',
      'Integración Full Stack empresarial'
    ],

    features: [
      'Gestión jerárquica de ventas',
      'Interfaces Angular y React',
      'Backend Spring Boot',
      'Base de datos Oracle'
    ],

    techHighlights: [
      'Angular + React',
      'Spring Boot',
      'Oracle DB',
      'Sales Hierarchy'
    ],

    metrics: [
      {label: 'Frontend', value: ''},
      {label: 'Backend', value: 'Spring Boot'},
      {label: 'Database', value: 'Oracle'}
    ],

    architectureFlow: [
      {
        id: 'angular-ui',
        title: 'Angular',
        type: 'frontend',
        description: 'Módulos de gestión jerárquica.',
        connections: ['spring-api']
      },
      {
        id: 'react-ui',
        title: 'React',
        type: 'frontend',
        description: 'Componentes de visualización comercial.',
        connections: ['spring-api']
      },
      {
        id: 'spring-api',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Servicios de lógica comercial y jerarquías.',
        connections: ['oracle-db']
      },
      {
        id: 'oracle-db',
        title: 'Oracle DB',
        type: 'database',
        description: 'Persistencia de estructuras comerciales.'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
    experienceId: 'minsait'
  },

  {
    id: '14',
    title: 'Expediente Virtual – Bandeja SAR',
    desc: 'Módulo empresarial Full Stack orientado a la gestión documental y administración de bandejas SAR para procesos corporativos.',
    impact: 'Optimización del flujo documental y mejora de gestión interna empresarial.',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',

    stack: 'Angular · Spring Boot',

    tags: ['Mockito', 'Karma', 'Figma', 'SonarQube'],

    tier: 'standard',
    category: 'enterprise',
    complexity: 'medium',
    role: 'fullstack',
    size: 'regular',
    year: 2024,
    duration: '4 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 5,

    highlightMetrics: ['SAR', 'Angular', 'Spring Boot', 'Document Workflow'],

    responsibilities: [
      'Desarrollo de módulos documentales empresariales',
      'Integración frontend y backend con Angular y Spring Boot',
      'Optimización de flujos de bandejas SAR',
      'Participación en pruebas y validaciones funcionales',
      'Coordinación con diseño UI mediante Figma'
    ],

    achievements: [
      'Optimización del flujo documental corporativo',
      'Mejora de tiempos de gestión interna',
      'Reducción de incidencias operativas'
    ],

    features: [
      'Gestión documental SAR',
      'Administración de bandejas',
      'Interfaces empresariales',
      'Integración Angular + Spring Boot'
    ],

    techHighlights: [
      'Angular Enterprise',
      'Spring Boot',
      'SAR Workflow',
      'Document Management'
    ],

    metrics: [
      {label: 'Frontend', value: 'Angular'},
      {label: 'Backend', value: 'Spring Boot'},
      {label: 'Dominio', value: 'Documental'}
    ],

    architectureFlow: [
      {
        id: 'angular-ui',
        title: 'Angular',
        type: 'frontend',
        description: 'Interfaz de gestión de bandejas SAR.',
        connections: ['spring-services']
      },
      {
        id: 'spring-services',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Servicios de procesamiento documental.',
        connections: ['sar-engine']
      },
      {
        id: 'sar-engine',
        title: 'SAR Engine',
        type: 'integration',
        description: 'Motor de gestión de bandejas SAR.'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
    experienceId: 'minsait'
  },

  {
    id: '15',
    title: 'SIVADAC – INTEGRATEL',
    desc: 'Sistema frontend orientado a la validación documental y optimización de procesos internos mediante interfaces empresariales modernas en Angular.',
    impact: 'Reducción de errores operativos y mejora del flujo de validación documental.',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',

    stack: 'Angular',

    tags: ['Karma', 'Figma', 'SonarQube'],

    tier: 'standard',
    category: 'enterprise',
    complexity: 'medium',
    role: 'frontend',
    size: 'regular',
    year: 2024,
    duration: '8 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 5,

    highlightMetrics: ['Document Validation', 'Angular', 'Frontend', 'SonarQube'],

    responsibilities: [
      'Desarrollo frontend empresarial con Angular',
      'Implementación de interfaces para validación documental',
      'Integración con flujos internos empresariales',
      'Optimización de experiencia de usuario',
      'Aplicación de estándares de calidad con SonarQube'
    ],

    achievements: [
      'Reducción de errores operativos',
      'Mejora del flujo documental interno',
      'Optimización de experiencia de usuario empresarial'
    ],

    features: [
      'Validación documental',
      'Interfaces empresariales Angular',
      'Gestión de procesos internos',
      'UX optimizado'
    ],

    techHighlights: [
      'Angular Enterprise',
      'Document Validation',
      'SonarQube Quality',
      'Frontend Architecture'
    ],

    metrics: [
      {label: 'Frontend', value: 'Angular'},
      {label: 'Quality', value: 'SonarQube'},
      {label: 'Dominio', value: 'Validation'}
    ],

    architectureFlow: [
      {
        id: 'angular-app',
        title: 'Angular',
        type: 'frontend',
        description: 'Interfaces de validación documental.',
        connections: ['validation-modules']
      },
      {
        id: 'validation-modules',
        title: 'Validation Modules',
        type: 'integration',
        description: 'Módulos de validación y flujos documentales.'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
    experienceId: 'minsait'
  },

  // ─────────────────────────────────────────────
  // CLOUDCOMPUTING PERÚ — RENIEC
  // ─────────────────────────────────────────────

  {
    id: '3',
    title: 'SIGED – RENIEC',
    desc: 'Sistema institucional de gestión documental orientado a la administración, seguimiento y digitalización de procesos internos de RENIEC mediante arquitectura Full Stack empresarial.',
    impact: 'Modernización tecnológica y optimización de procesos documentales institucionales de alta concurrencia.',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',

    stack: 'Angular · React · Spring Boot · PL/SQL',

    tags: ['Angular Material', 'Jenkins', 'SonarQube', 'CI/CD'],

    tier: 'hero',
    category: 'government',
    complexity: 'high',
    role: 'fullstack',
    featuredOrder: 3,
    size: 'featured',
    year: 2023,
    duration: '8 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 8,

    highlightMetrics: ['Government System', 'Spring Boot', 'Angular', 'React'],

    responsibilities: [
      'Desarrollo de módulos frontend y backend',
      'Implementación de interfaces empresariales con Angular y React',
      'Integración de servicios REST con Spring Boot',
      'Optimización de consultas PL/SQL',
      'Control de calidad y análisis de código con SonarQube'
    ],

    achievements: [
      'Digitalización de procesos documentales institucionales',
      'Optimización de estabilidad y mantenibilidad del sistema',
      'Implementación de arquitectura Full Stack empresarial',
      'Mejora de rendimiento en procesos críticos'
    ],

    features: [
      'Gestión documental institucional',
      'Seguimiento de expedientes',
      'Integración REST APIs',
      'Interfaces empresariales responsivas'
    ],

    techHighlights: [
      'Angular Material',
      'Spring Boot APIs',
      'PL/SQL Optimization',
      'Government Architecture'
    ],

    metrics: [
      {label: 'Arquitectura', value: 'Full Stack'},
      {label: 'Frontend', value: ''},
      {label: 'Backend', value: 'Spring Boot'}
    ],

    architectureFlow: [
      {
        id: 'angular-ui',
        title: 'Angular',
        type: 'frontend',
        description: 'Interfaz principal de gestión documental.',
        connections: ['spring-api']
      },
      {
        id: 'react-ui',
        title: 'React',
        type: 'frontend',
        description: 'Módulos complementarios de visualización.',
        connections: ['spring-api']
      },
      {
        id: 'spring-api',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Servicios backend institucionales.',
        connections: ['plsql-db']
      },
      {
        id: 'plsql-db',
        title: 'PL/SQL',
        type: 'database',
        description: 'Base de datos institucional de RENIEC.'
      }
    ],

    companyLogo: '/imagen/LOGO_CC.svg',
    companyName: 'CloudComputing Perú S.A.C.',
    clientLogo: '/imagen/LOGO_RENIEC.svg',
    clientName: 'RENIEC',
    experienceId: 'cloudComputing'
  },

  {
    id: '17',
    title: 'Mesa de Partes Virtual – RENIEC',
    desc: 'Sistema institucional Full Stack orientado a la recepción y gestión documental digital para procesos administrativos gubernamentales.',
    impact: 'Digitalización y optimización de procesos documentales institucionales.',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',

    stack: 'Angular · React · Spring Boot',

    tags: ['Bootstrap', 'Jenkins', 'SonarQube', 'CI/CD'],

    tier: 'standard',
    category: 'government',
    complexity: 'medium',
    role: 'fullstack',
    size: 'regular',
    year: 2023,
    duration: '7 Meses',
    methodology: 'agile',
    status: 'En producción',
    teamSize: 6,

    highlightMetrics: ['Digital Process', 'Government', 'Angular', 'Spring Boot'],

    responsibilities: [
      'Desarrollo full stack para sistema gubernamental',
      'Implementación de módulos documentales digitales',
      'Integración frontend con Angular y React',
      'Desarrollo backend con Spring Boot',
      'Optimización de procesos administrativos'
    ],

    achievements: [
      'Digitalización de procesos institucionales',
      'Optimización de gestión documental',
      'Mejora de eficiencia administrativa'
    ],

    features: [
      'Mesa de Partes Digital',
      'Gestión Documental',
      'Recepción Virtual',
      'Procesos Institucionales'
    ],

    techHighlights: [
      'Angular + React',
      'Spring Boot',
      'Government Systems',
      'Digital Transformation'
    ],

    metrics: [
      {label: 'Sector', value: 'Government'},
      {label: 'Backend', value: 'Spring Boot'},
      {label: 'Frontend', value: ''}
    ],

    architectureFlow: [
      {
        id: 'angular-ui',
        title: 'Angular',
        type: 'frontend',
        description: 'Interfaz de recepción y gestión documental.',
        connections: ['spring-services']
      },
      {
        id: 'react-ui',
        title: 'React',
        type: 'frontend',
        description: 'Módulos complementarios.',
        connections: ['spring-services']
      },
      {
        id: 'spring-services',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Servicios de procesamiento institucional.',
        connections: ['government-db']
      },
      {
        id: 'government-db',
        title: 'Oracle DB',
        type: 'database',
        description: 'Base de datos gubernamental.'
      }
    ],

    companyLogo: '/imagen/LOGO_CC.svg',
    companyName: 'CloudComputing Perú S.A.C.',
    clientLogo: '/imagen/LOGO_RENIEC.svg',
    clientName: 'RENIEC',
    experienceId: 'cloudComputing'
  },

  {
    id: '18',
    title: 'Módulo Usuario Final – RENIEC',
    desc: 'Módulo Full Stack orientado a la gestión y experiencia de usuario para plataformas institucionales de RENIEC, con enfoque en accesibilidad, usabilidad y rendimiento.',
    impact: 'Mejora de experiencia de usuario y optimización de funcionalidades para plataformas gubernamentales de alta concurrencia.',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',

    stack: 'Angular · React · Spring Boot · PL/SQL',

    tags: ['Mockito', 'SonarQube', 'Jenkins', 'CI/CD'],

    tier: 'standard',
    category: 'government',
    complexity: 'medium',
    role: 'fullstack',
    size: 'regular',
    year: 2023,
    duration: '8 Meses',
    methodology: 'agile',
    status: 'Completado',
    teamSize: 6,

    highlightMetrics: ['UX Improvement', 'Government Systems', 'Spring Boot', 'Angular'],

    responsibilities: [
      'Desarrollo de funcionalidades frontend y backend',
      'Implementación de interfaces con Angular y React',
      'Integración de servicios backend con Spring Boot',
      'Optimización de experiencia de usuario',
      'Implementación de pruebas con Mockito'
    ],

    achievements: [
      'Mejora de accesibilidad y experiencia de usuario',
      'Optimización de rendimiento en módulos institucionales',
      'Integración Full Stack para plataformas gubernamentales'
    ],

    features: [
      'Gestión de usuarios finales',
      'Interfaces responsivas',
      'Integración REST APIs',
      'Módulo institucional escalable'
    ],

    techHighlights: [
      'Angular + React',
      'Spring Boot APIs',
      'PL/SQL',
      'Government Platforms'
    ],

    metrics: [
      {label: 'Arquitectura', value: 'Full Stack'},
      {label: 'Frontend', value: ''},
      {label: 'Backend', value: 'Spring Boot'}
    ],

    architectureFlow: [
      {
        id: 'frontend-ui',
        title: 'Angular / React',
        type: 'frontend',
        description: 'Interfaces de usuario gubernamentales.',
        connections: ['spring-api']
      },
      {
        id: 'spring-api',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Servicios backend institucionales.',
        connections: ['plsql-db']
      },
      {
        id: 'plsql-db',
        title: 'PL/SQL',
        type: 'database',
        description: 'Persistencia de datos institucionales.'
      }
    ],

    companyLogo: '/imagen/LOGO_CC.svg',
    companyName: 'CloudComputing Perú S.A.C.',
    clientLogo: '/imagen/LOGO_RENIEC.svg',
    clientName: 'RENIEC',
    experienceId: 'cloudComputing'
  },

  {
    id: '19',
    title: 'Migración SIGED a JBoss – RENIEC',
    desc: 'Proyecto de migración tecnológica del sistema SIGED hacia infraestructura JBoss, participando en la adaptación de servicios, validaciones técnicas y despliegues controlados.',
    impact: 'Modernización de infraestructura tecnológica y mejora de estabilidad operativa para sistemas institucionales.',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',

    stack: 'Spring Boot · JBoss · Angular',

    tags: ['Jenkins', 'CI/CD', 'SonarQube'],

    tier: 'standard',
    category: 'government',
    complexity: 'medium',
    role: 'backend',
    size: 'half',
    year: 2023,
    duration: '8 Meses',
    methodology: 'agile',
    status: 'Completado',
    teamSize: 5,

    highlightMetrics: ['JBoss Migration', 'Infrastructure', 'CI/CD', 'Backend Modernization'],

    responsibilities: [
      'Participación en migración tecnológica hacia JBoss',
      'Adaptación y validación de servicios backend',
      'Soporte en despliegues y validaciones técnicas',
      'Integración continua mediante Jenkins',
      'Corrección de incidencias post-migración'
    ],

    achievements: [
      'Modernización de infraestructura institucional',
      'Mejora de estabilidad operativa',
      'Optimización de servicios backend migrados'
    ],

    features: [
      'Migración a JBoss',
      'Despliegues automatizados',
      'Integración CI/CD',
      'Servicios backend escalables'
    ],

    techHighlights: [
      'JBoss Application Server',
      'Spring Boot Migration',
      'CI/CD Jenkins',
      'Infrastructure Modernization'
    ],

    metrics: [
      {label: 'Infraestructura', value: 'JBoss'},
      {label: 'Automatización', value: 'CI/CD'},
      {label: 'Backend', value: 'Spring Boot'}
    ],

    architectureFlow: [
      {
        id: 'spring-services',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Servicios backend adaptados para JBoss.',
        connections: ['jboss-server']
      },
      {
        id: 'jboss-server',
        title: 'JBoss',
        type: 'cloud',
        description: 'Servidor de aplicaciones institucional.',
        connections: ['cicd-pipeline']
      },
      {
        id: 'cicd-pipeline',
        title: 'CI/CD Jenkins',
        type: 'testing',
        description: 'Automatización de despliegues y validaciones.'
      }
    ],

    companyLogo: '/imagen/LOGO_CC.svg',
    companyName: 'CloudComputing Perú S.A.C.',
    clientLogo: '/imagen/LOGO_RENIEC.svg',
    clientName: 'RENIEC',
    experienceId: 'cloudComputing'
  },

  // ─────────────────────────────────────────────
  // PROYECTOS IA / TESIS / PERSONAL
  // ─────────────────────────────────────────────

  {
    id: '5',
    title: 'Sistema Inteligente de Lenguaje de Señas – UA',
    desc: 'Sistema inteligente de reconocimiento de lenguaje de señas en tiempo real utilizando inteligencia artificial, visión computacional y procesamiento gestual.',
    impact: 'Implementación funcional de reconocimiento gestual mediante IA para apoyo a la comunicación inclusiva.',
    context: 'TESIS · Universidad Autónoma del Perú · 2025',

    stack: 'Angular · Flask · Node.js · TensorFlow',

    tags: ['Keras', 'MediaPipe', 'OpenCV', 'MongoDB Atlas', 'Python'],

    tier: 'hero',
    category: 'ai',
    complexity: 'high',
    role: 'fullstack',
    featuredOrder: 5,
    size: 'featured',
    year: 2025,
    duration: '6 Meses',
    methodology: 'agile',
    status: 'Completado',
    teamSize: 1,

    highlightMetrics: ['TensorFlow', 'OpenCV', 'MediaPipe', 'Real-Time AI'],

    responsibilities: [
      'Entrenamiento y validación de modelos IA con TensorFlow/Keras',
      'Procesamiento de video en tiempo real con OpenCV',
      'Integración Full Stack entre IA y aplicación web',
      'Desarrollo de APIs backend con Flask',
      'Implementación frontend interactivo con Angular'
    ],

    achievements: [
      'Implementación de inferencia en tiempo real',
      'Reconocimiento gestual mediante IA',
      'Integración de visión computacional',
      'Desarrollo de tesis funcional y escalable'
    ],

    features: [
      'Reconocimiento de señas en tiempo real',
      'Procesamiento con MediaPipe',
      'Clasificación IA con TensorFlow',
      'Interfaz web interactiva'
    ],

    techHighlights: [
      'Computer Vision',
      'Deep Learning',
      'TensorFlow/Keras',
      'MediaPipe Realtime'
    ],

    metrics: [
      {label: 'IA', value: 'TensorFlow'},
      {label: 'Procesamiento', value: 'Tiempo Real'},
      {label: 'Visión', value: 'MediaPipe + OpenCV'}
    ],

    architectureFlow: [
      {
        id: 'camera-input',
        title: 'Camera Input',
        type: 'integration',
        description: 'Captura de video en tiempo real.',
        connections: ['mediapipe-ai']
      },
      {
        id: 'mediapipe-ai',
        title: 'MediaPipe',
        type: 'ai',
        description: 'Detección y extracción de puntos gestuales.',
        connections: ['tensorflow-ai']
      },
      {
        id: 'tensorflow-ai',
        title: 'TensorFlow',
        type: 'ai',
        description: 'Clasificación y reconocimiento de señas.',
        connections: ['flask-api']
      },
      {
        id: 'flask-api',
        title: 'Flask API',
        type: 'backend',
        description: 'Backend de procesamiento e integración web.'
      }
    ],

    companyLogo: '/imagen/LOGO_UA.svg',
    companyName: 'Universidad Autónoma del Perú',
    clientLogo: '/imagen/FOTO.svg',
    clientName: 'Diego Gonzalez',
    experienceId: 'TESIS'
  },

  {
    id: '23',
    title: 'Plataforma de Gestión de Apuestas Deportivas',
    desc: 'Sistema Full Stack para la gestión, centralización y monitoreo de apuestas deportivas, permitiendo administrar eventos, registros y seguimiento de operaciones.',
    impact: 'Automatización y centralización de procesos deportivos mediante una arquitectura web escalable.',
    context: 'Proyecto Personal · 2025',

    stack: 'Angular · Node.js · MongoDB Atlas',

    tags: ['Jasmine', 'Karma', 'REST API'],

    tier: 'minor',
    category: 'personal',
    complexity: 'medium',
    role: 'fullstack',
    size: 'half',
    year: 2025,
    duration: '4 Meses',
    methodology: 'agile',
    status: 'Completado',
    teamSize: 1,

    highlightMetrics: ['MongoDB Atlas', 'REST APIs', 'Full Stack', 'Node.js'],

    responsibilities: [
      'Desarrollo frontend interactivo con Angular',
      'Implementación de APIs REST con Node.js',
      'Diseño y modelado de datos en MongoDB Atlas',
      'Integración frontend-backend',
      'Implementación de pruebas unitarias'
    ],

    achievements: [
      'Centralización de operaciones deportivas',
      'Automatización de gestión de registros y eventos',
      'Arquitectura Full Stack escalable',
      'Optimización de consultas en MongoDB Atlas'
    ],

    features: [
      'Gestión de apuestas deportivas',
      'Registro y seguimiento de eventos',
      'Persistencia MongoDB Atlas',
      'Interfaz responsiva'
    ],

    techHighlights: [
      'Angular Architecture',
      'Node.js REST APIs',
      'MongoDB Atlas',
      'Unit Testing'
    ],

    metrics: [
      {label: 'Arquitectura', value: 'Full Stack'},
      {label: 'Backend', value: 'Node.js'},
      {label: 'Base de Datos', value: 'MongoDB Atlas'}
    ],

    architectureFlow: [
      {
        id: 'angular-frontend',
        title: 'Angular',
        type: 'frontend',
        description: 'Interfaz de gestión y monitoreo de apuestas.',
        connections: ['node-api']
      },
      {
        id: 'node-api',
        title: 'Node.js API',
        type: 'backend',
        description: 'Lógica de negocio y APIs REST.',
        connections: ['mongodb']
      },
      {
        id: 'mongodb',
        title: 'MongoDB Atlas',
        type: 'database',
        description: 'Persistencia de datos deportivos en la nube.'
      }
    ],

    companyLogo: '/imagen/FOTO.svg',
    companyName: 'Diego Gonzalez',
    experienceId: 'personal'
  },

  {
    id: '24',
    title: 'Detección Inteligente de Mascarillas mediante IA',
    desc: 'Sistema de visión computacional capaz de detectar el uso correcto de mascarillas en tiempo real mediante inteligencia artificial y procesamiento de video.',
    impact: 'Proyecto ganador en Expotec 2021 por innovación tecnológica aplicada a Computer Vision e Inteligencia Artificial.',
    context: 'Universidad Autónoma del Perú · 2021',

    stack: 'Python · Flask · Angular · TensorFlow',

    tags: ['OpenCV', 'Keras', 'Computer Vision', 'Deep Learning'],

    tier: 'minor',
    category: 'ai',
    complexity: 'medium',
    role: 'fullstack',
    size: 'half',
    year: 2021,
    duration: '4 Meses',
    methodology: 'agile',
    status: 'Completado',
    teamSize: 1,

    highlightMetrics: ['Real-Time Detection', 'Computer Vision', 'TensorFlow', 'Expotec 2021'],

    responsibilities: [
      'Desarrollo frontend con Angular',
      'Implementación de backend API con Flask',
      'Procesamiento y análisis de video en tiempo real',
      'Integración de modelos de inteligencia artificial',
      'Entrenamiento y validación de modelos de detección'
    ],

    achievements: [
      'Ganador de Expotec 2021',
      'Implementación de inferencia en tiempo real',
      'Integración Full Stack entre IA y aplicación web',
      'Detección automática con visión computacional'
    ],

    features: [
      'Detección facial en tiempo real',
      'Clasificación de uso de mascarilla',
      'Procesamiento con OpenCV',
      'Frontend responsivo e interactivo'
    ],

    techHighlights: [
      'TensorFlow/Keras Model',
      'OpenCV Image Processing',
      'Flask Backend',
      'Realtime AI Detection'
    ],

    metrics: [
      {label: 'Modelo IA', value: 'TensorFlow/Keras'},
      {label: 'Procesamiento', value: 'Tiempo Real'},
      {label: 'Premio', value: 'Expotec 2021'}
    ],

    architectureFlow: [
      {
        id: 'angular-frontend',
        title: 'Angular',
        type: 'frontend',
        description: 'Interfaz de visualización y captura de video.',
        connections: ['flask-api']
      },
      {
        id: 'flask-api',
        title: 'Flask API',
        type: 'backend',
        description: 'Backend de procesamiento e inferencia IA.',
        connections: ['tensorflow-model']
      },
      {
        id: 'tensorflow-model',
        title: 'TensorFlow',
        type: 'ai',
        description: 'Modelo de detección y clasificación.',
        connections: ['opencv-processing']
      },
      {
        id: 'opencv-processing',
        title: 'OpenCV',
        type: 'integration',
        description: 'Procesamiento de imágenes y frames en tiempo real.'
      }
    ],

    companyLogo: '/imagen/LOGO_UA.svg',
    companyName: 'Universidad Autónoma del Perú',
    clientLogo: '/imagen/FOTO.svg',
    clientName: 'Diego Gonzalez',
    experienceId: 'personal'
  },

  // ─────────────────────────────────────────────
  // DINET
  // ─────────────────────────────────────────────

  {
    id: '25',
    title: 'Sistema Empresarial de Operaciones Logísticas',
    desc: 'Plataforma corporativa orientada a la gestión operativa, atención de incidencias y optimización de procesos logísticos internos mediante soporte técnico y mejoras funcionales.',
    impact: 'Optimización de rendimiento y estabilidad operativa mediante refactorización de código y mejora de consultas SQL en procesos críticos.',
    context: 'DINET Operador Logístico · 2024',

    stack: '.NET · SQL Server · JavaScript',

    tags: ['Soporte TI', 'Tickets', 'Optimización SQL'],

    tier: 'minor',
    category: 'enterprise',
    complexity: 'medium',
    role: 'frontend',
    size: 'half',
    year: 2024,
    duration: '3 Meses',
    methodology: 'scrum',
    status: 'Completado',
    teamSize: 4,

    highlightMetrics: ['SQL Optimization', 'Incident Resolution', 'Enterprise Support', 'Logistics'],

    responsibilities: [
      'Atención y resolución de incidencias mediante sistema de tickets',
      'Optimización de consultas SQL para mejorar tiempos de respuesta',
      'Refactorización de módulos internos',
      'Análisis de flujos logísticos y operativos',
      'Capacitación funcional a usuarios finales'
    ],

    achievements: [
      'Mejora del rendimiento de procesos internos',
      'Optimización de estabilidad operativa',
      'Reducción de incidencias recurrentes',
      'Soporte continuo a operaciones críticas'
    ],

    features: [
      'Gestión de incidencias operativas',
      'Optimización de consultas SQL',
      'Monitoreo de operaciones internas',
      'Soporte funcional a usuarios'
    ],

    techHighlights: [
      'SQL Server Optimization',
      '.NET Enterprise',
      'Logistics Systems',
      'Performance Improvement'
    ],

    metrics: [
      {label: 'Base de Datos', value: 'SQL Server'},
      {label: 'Backend', value: '.NET'},
      {label: 'Enfoque', value: 'Optimización'}
    ],

    architectureFlow: [
      {
        id: 'frontend-modules',
        title: 'Frontend .NET',
        type: 'frontend',
        description: 'Módulos orientados a soporte y operaciones internas.',
        connections: ['backend-services']
      },
      {
        id: 'backend-services',
        title: 'Enterprise Services',
        type: 'backend',
        description: 'Servicios de lógica operativa logística.',
        connections: ['sql-server']
      },
      {
        id: 'sql-server',
        title: 'SQL Server',
        type: 'database',
        description: 'Base de datos para procesos logísticos optimizados.'
      }
    ],

    companyLogo: '/imagen/LOGO_DINET.svg',
    companyName: 'DINET Operador Logístico',
    clientLogo: '/imagen/FOTO.svg',
    clientName: 'Diego Gonzalez',
    experienceId: 'dinet'
  }

];
