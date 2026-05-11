export type ProjectTier = | 'hero' | 'featured' | 'standard' | 'minor';
export type ProjectCategory = | 'banking' | 'telecom' | 'government' | 'ai' | 'enterprise' | 'personal';
export type ProjectComplexity = | 'high' | 'medium' | 'low';
export type ProjectRole = | 'frontend' | 'backend' | 'fullstack' | 'architecture';
export type ProjectSize = | 'featured' | 'regular' | 'half';
export type ProjectMethodology =
  | 'scrum'
  | 'kanban'
  | 'agile';

export type ProjectStatus =
  | 'production'
  | 'completed'
  | 'maintenance'
  | 'archived';

export type ArchitectureNodeType =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'queue'
  | 'security'
  | 'ai'
  | 'cloud'
  | 'integration'
  | 'gateway'
  | 'testing';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ArchitectureNode {

  id: string;

  title: string;

  type: ArchitectureNodeType;

  /**
   * IDs de los nodos conectados
   * para representar flujos de arquitectura.
   */
  connections?: string[];

  /**
   * Información opcional
   * para mostrar detalles técnicos.
   */
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

  /**
   * Métricas rápidas destacadas
   * para cards o badges.
   */
  highlightMetrics?: string[];

  /**
   * Responsabilidades principales.
   */
  responsibilities?: string[];

  /**
   * Logros o resultados obtenidos.
   */
  achievements?: string[];

  /**
   * Funcionalidades importantes.
   */
  features?: string[];

  /**
   * KPIs o métricas técnicas.
   */
  metrics?: ProjectMetric[];

  /**
   * Tecnologías o conceptos destacados.
   */
  techHighlights?: string[];

  /**
   * Metodología usada en el proyecto.
   */
  methodology?: ProjectMethodology;

  /**
   * Estado actual del proyecto.
   */
  status?: ProjectStatus;

  /**
   * Cantidad de integrantes del equipo.
   */
  teamSize?: number;

  /**
   * Galería de imágenes/screenshots.
   */
  gallery?: string[];

  /**
   * Logos e información corporativa.
   */
  companyLogo?: string;

  companyName?: string;

  clientLogo?: string;

  clientName?: string;

  /**
   * URL del proyecto/demo/repositorio.
   */
  url?: string;

  /**
   * Arquitectura técnica del proyecto.
   */
  architectureFlow?: ArchitectureNode[];

  /**
   * Relación con experiencia laboral.
   */
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

  {
    id: '1',

    title: 'SMS-CONSUMER – Scotiabank',

    desc: 'Servicio batch backend orientado al consumo paralelo de colas AS400 e integración distribuida mediante Kafka y Redis para procesamiento financiero empresarial.',

    impact: 'Optimización de procesamiento batch mediante paralelización de consumo AS400 y modernización backend sobre Java 25.',

    context: 'IDM Technology · Scotiabank · 2026',

    stack: 'Spring Boot · Java 25 · Kafka · Redis',

    tags: [
      'AS400',
      'Kafka',
      'Redis',
      'Java 25',
      'SonarQube',
      'CI/CD',
      'Jenkins',
      'ArgoCD',
      'Hexagonal Architecture',
      'Batch Processing'
    ],

    tier: 'hero',

    category: 'banking',

    complexity: 'high',

    role: 'backend',

    featuredOrder: 1,

    size: 'featured',

    year: 2026,

    duration: '4 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 6,

    highlightMetrics: [
      'Kafka',
      'AS400',
      'Java 25',
      'Hexagonal Architecture'
    ],

    responsibilities: [
      'Optimización de procesamiento batch backend',
      'Integración y consumo paralelo de colas AS400',
      'Implementación de mensajería distribuida con Kafka',
      'Uso de Redis para optimización y cache distribuido',
      'Participación en despliegues automatizados CI/CD'
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
      'Cache distribuido con Redis',
      'Arquitectura Hexagonal'
    ],

    techHighlights: [
      'Java 25',
      'Kafka Messaging',
      'Redis Distributed Cache',
      'Hexagonal Architecture',
      'Spring Boot'
    ],

    metrics: [
      {
        label: 'Mensajería',
        value: 'Kafka'
      },
      {
        label: 'Cache',
        value: 'Redis'
      },
      {
        label: 'Arquitectura',
        value: 'Hexagonal'
      }
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
        description: 'Motor backend para procesamiento batch empresarial.',
        connections: ['redis-layer']
      },

      {
        id: 'redis-layer',
        title: 'Redis',
        type: 'database',
        description: 'Cache distribuido para optimización de rendimiento.'
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

    tags: [
      'AS400',
      'Redis',
      'Kafka',
      'CI/CD',
      'Jenkins',
      'ArgoCD',
      'Distributed Systems',
      'Backend'
    ],

    tier: 'hero',

    category: 'banking',

    complexity: 'high',

    role: 'backend',

    featuredOrder: 2,

    size: 'featured',

    year: 2026,

    duration: '4 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 6,

    highlightMetrics: [
      'Redis',
      'Kafka',
      'AS400',
      'Distributed Cache'
    ],

    responsibilities: [
      'Desarrollo de listener backend distribuido',
      'Consumo e integración de colas AS400',
      'Procesamiento de eventos mediante Kafka',
      'Optimización de rendimiento usando Redis',
      'Implementación de despliegues automatizados'
    ],

    achievements: [
      'Optimización de tiempos de respuesta backend',
      'Mejora de integración con sistemas legacy',
      'Implementación de procesamiento distribuido',
      'Fortalecimiento de arquitectura backend escalable'
    ],

    features: [
      'Procesamiento de eventos',
      'Consumo distribuido de colas',
      'Integración con AS400',
      'Cache distribuido con Redis',
      'Arquitectura backend escalable'
    ],

    techHighlights: [
      'Kafka',
      'Redis',
      'Spring Boot',
      'Distributed Processing',
      'AS400 Integration'
    ],

    metrics: [
      {
        label: 'Mensajería',
        value: 'Kafka'
      },
      {
        label: 'Cache',
        value: 'Redis'
      },
      {
        label: 'Integración',
        value: 'AS400'
      }
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
        connections: ['listener-backend']
      },

      {
        id: 'listener-backend',
        title: 'Spring Boot',
        type: 'backend',
        description: 'Listener backend para procesamiento de eventos.',
        connections: ['redis-cache']
      },

      {
        id: 'redis-cache',
        title: 'Redis',
        type: 'database',
        description: 'Cache distribuido para optimización de consultas.'
      }
    ],

    companyLogo: '/imagen/LOGO_IDM.svg',

    companyName: 'IDM Technology',

    clientLogo: '/imagen/LOGO_SB.svg',

    clientName: 'Scotiabank',

    experienceId: 'idm-technology'
  },

  {
    id: '3',

    title: 'SIGED – RENIEC',

    desc: 'Sistema institucional de gestión documental orientado a la administración, seguimiento y digitalización de procesos internos de RENIEC mediante arquitectura Full Stack empresarial.',

    impact: 'Modernización tecnológica y optimización de procesos documentales institucionales de alta concurrencia.',

    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',

    stack: 'Angular · React · Spring Boot · PL/SQL',

    tags: [
      'Angular',
      'React',
      'Spring Boot',
      'PL/SQL',
      'Angular Material',
      'Jenkins',
      'SonarQube',
      'Government System'
    ],

    tier: 'hero',

    category: 'government',

    complexity: 'high',

    role: 'fullstack',

    featuredOrder: 3,

    size: 'featured',

    year: 2023,

    duration: '8 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 8,

    highlightMetrics: [
      'Spring Boot',
      'Angular',
      'React',
      'Government System'
    ],

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
      'Integración de servicios REST',
      'Interfaces empresariales responsivas',
      'Arquitectura escalable'
    ],

    techHighlights: [
      'Angular Material',
      'Spring Boot APIs',
      'PL/SQL',
      'Jenkins CI/CD',
      'Government Architecture'
    ],

    metrics: [
      {
        label: 'Arquitectura',
        value: 'Full Stack'
      },
      {
        label: 'Frontend',
        value: 'Angular/React'
      },
      {
        label: 'Backend',
        value: 'Spring Boot'
      }
    ],

    architectureFlow: [
      {
        id: 'angular-ui',
        title: 'Angular',
        type: 'frontend',
        connections: ['spring-api']
      },

      {
        id: 'react-ui',
        title: 'React',
        type: 'frontend',
        connections: ['spring-api']
      },

      {
        id: 'spring-api',
        title: 'Spring Boot',
        type: 'backend',
        connections: ['plsql-db']
      },

      {
        id: 'plsql-db',
        title: 'PL/SQL',
        type: 'database'
      }
    ],

    companyLogo: '/imagen/LOGO_CC.svg',

    companyName: 'CloudComputing Perú S.A.C.',

    clientLogo: '/imagen/LOGO_RENIEC.svg',

    clientName: 'RENIEC',

    experienceId: 'cloudComputing'
  },

  {
    id: '4',

    title: 'Botón de Pago – CLARO',

    desc: 'Plataforma empresarial orientada a la integración y procesamiento seguro de pagos digitales mediante arquitectura Full Stack y validaciones de seguridad.',

    impact: 'Incremento de confiabilidad, seguridad y estabilidad en flujos empresariales de pagos digitales.',

    context: 'INDRA PERÚ · CLARO · 2025',

    stack: 'Angular · Spring Boot · BFF',

    tags: [
      'Angular',
      'Spring Boot',
      'OWASP ZAP',
      'Mockito',
      'Jest',
      'SonarQube',
      'CI/CD',
      'Payments'
    ],

    tier: 'hero',

    category: 'telecom',

    complexity: 'high',

    role: 'fullstack',

    featuredOrder: 4,

    size: 'featured',

    year: 2025,

    duration: '12 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 9,

    highlightMetrics: [
      'OWASP',
      'Payments',
      'Spring Boot',
      'Enterprise Security'
    ],

    responsibilities: [
      'Desarrollo Full Stack de módulos de pagos',
      'Integración de servicios empresariales y APIs REST',
      'Validación de vulnerabilidades mediante OWASP ZAP',
      'Implementación de pruebas unitarias y testing',
      'Control de calidad con SonarQube'
    ],

    achievements: [
      'Optimización de flujo de pagos empresariales',
      'Fortalecimiento de seguridad backend',
      'Reducción de incidencias técnicas',
      'Mejora de mantenibilidad y estabilidad'
    ],

    features: [
      'Procesamiento de pagos',
      'Arquitectura BFF',
      'Validaciones de seguridad',
      'Integración REST APIs',
      'Pruebas automatizadas'
    ],

    techHighlights: [
      'OWASP Security',
      'Spring Boot',
      'Angular',
      'Enterprise Payments',
      'CI/CD'
    ],

    metrics: [
      {
        label: 'Seguridad',
        value: 'OWASP'
      },
      {
        label: 'Arquitectura',
        value: 'BFF + Full Stack'
      },
      {
        label: 'Backend',
        value: 'Spring Boot'
      }
    ],

    architectureFlow: [
      {
        id: 'angular-payments',
        title: 'Angular',
        type: 'frontend',
        connections: ['bff-layer']
      },

      {
        id: 'bff-layer',
        title: 'BFF',
        type: 'gateway',
        connections: ['spring-payments']
      },

      {
        id: 'spring-payments',
        title: 'Spring Boot',
        type: 'backend',
        connections: ['owasp-security']
      },

      {
        id: 'owasp-security',
        title: 'OWASP',
        type: 'security'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',

    companyName: 'INDRA PERÚ',

    clientLogo: '/imagen/LOGO_CLARO.svg',

    clientName: 'CLARO',

    experienceId: 'indra'
  },

  {
    id: '5',

    title: 'Sistema Inteligente de Lenguaje de Señas – UA',

    desc: 'Sistema inteligente de reconocimiento de lenguaje de señas en tiempo real utilizando inteligencia artificial, visión computacional y procesamiento gestual.',

    impact: 'Implementación funcional de reconocimiento gestual mediante IA para apoyo a la comunicación inclusiva.',

    context: 'TESIS · Universidad Autónoma del Perú · 2025',

    stack: 'Angular · Flask · Node.js · TensorFlow',

    tags: [
      'TensorFlow',
      'Keras',
      'MediaPipe',
      'OpenCV',
      'MongoDB Atlas',
      'Computer Vision',
      'Artificial Intelligence'
    ],

    tier: 'hero',

    category: 'ai',

    complexity: 'high',

    role: 'fullstack',

    featuredOrder: 5,

    size: 'featured',

    year: 2025,

    duration: '6 Meses',

    methodology: 'agile',

    status: 'completed',

    teamSize: 1,

    highlightMetrics: [
      'TensorFlow',
      'OpenCV',
      'MediaPipe',
      'Real-Time AI'
    ],

    responsibilities: [
      'Entrenamiento y validación de modelos IA',
      'Procesamiento de video en tiempo real',
      'Integración Full Stack entre IA y aplicación web',
      'Desarrollo de APIs backend con Flask',
      'Implementación frontend interactivo'
    ],

    achievements: [
      'Implementación de inferencia en tiempo real',
      'Reconocimiento gestual mediante IA',
      'Integración de visión computacional',
      'Desarrollo de tesis funcional y escalable'
    ],

    features: [
      'Reconocimiento de señas',
      'Captura de video en tiempo real',
      'Procesamiento mediante MediaPipe',
      'Clasificación IA con TensorFlow',
      'Interfaz web interactiva'
    ],

    techHighlights: [
      'Computer Vision',
      'Deep Learning',
      'TensorFlow',
      'MediaPipe',
      'Realtime Detection'
    ],

    metrics: [
      {
        label: 'IA',
        value: 'TensorFlow'
      },
      {
        label: 'Procesamiento',
        value: 'Tiempo Real'
      },
      {
        label: 'Arquitectura',
        value: 'Full Stack + AI'
      }
    ],

    architectureFlow: [
      {
        id: 'camera-input',
        title: 'Camera',
        type: 'integration',
        connections: ['mediapipe-ai']
      },

      {
        id: 'mediapipe-ai',
        title: 'MediaPipe',
        type: 'ai',
        connections: ['tensorflow-ai']
      },

      {
        id: 'tensorflow-ai',
        title: 'TensorFlow',
        type: 'ai',
        connections: ['flask-api']
      },

      {
        id: 'flask-api',
        title: 'Flask API',
        type: 'backend'
      }
    ],

    companyLogo: '/imagen/LOGO_UA.svg',

    companyName: 'Universidad Autónoma del Perú',

    clientLogo: '/imagen/FOTO.svg',

    clientName: 'Diego Gonzalez',

    experienceId: 'TESIS'
  },

  {
    id: '6',

    title: 'GESINTEL – Scotiabank',

    desc: 'Sistema financiero orientado a la validación de personas PEP y entidades financieras mediante servicios empresariales backend.',

    impact: 'Fortalecimiento de validaciones financieras y modernización tecnológica del sistema.',

    context: 'IDM Technology · Scotiabank · 2026',

    stack: 'React · Spring Boot',

    tags: [
      'React',
      'Spring Boot',
      'SonarQube',
      'CI/CD',
      'Jenkins',
      'Postman',
      'PEP Validation'
    ],

    tier: 'featured',

    category: 'banking',

    complexity: 'medium',

    role: 'fullstack',

    size: 'half',

    year: 2026,

    duration: '4 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 5,

    highlightMetrics: [
      'PEP Validation',
      'Spring Boot',
      'React',
      'Financial Security'
    ],

    responsibilities: [
      'Desarrollo de componentes frontend empresariales utilizando React',
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
      'PEP Validation',
      'Financial Validation',
      'Enterprise APIs',
      'React Dashboard',
      'Backend Services'
    ],

    techHighlights: [
      'Arquitectura empresarial financiera',
      'Integración React + Spring Boot',
      'Validaciones backend desacopladas',
      'Automatización CI/CD'
    ],

    metrics: [
      {
        label: 'Arquitectura',
        value: 'Enterprise'
      },
      {
        label: 'Disponibilidad',
        value: '99.9%'
      },
      {
        label: 'Dominio',
        value: 'Financial'
      }
    ],

    architectureFlow: [
      {
        id: 'react-ui',
        title: 'React',
        type: 'frontend',
        connections: ['validation-engine']
      },

      {
        id: 'validation-engine',
        title: 'Validation Engine',
        type: 'backend',
        connections: ['spring-services']
      },

      {
        id: 'spring-services',
        title: 'Spring Boot',
        type: 'backend',
        connections: ['financial-db']
      },

      {
        id: 'financial-db',
        title: 'Database',
        type: 'database'
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

    desc: 'Backend For Frontend orientado a la orquestación de servicios empresariales y desacoplamiento de arquitecturas backend.',

    impact: 'Optimización de consumo de APIs y mejora de mantenibilidad de servicios bancarios.',

    context: 'IDM Technology · Scotiabank · 2026',

    stack: 'Spring Boot · Hexagonal Architecture',

    tags: [
      'Spring Boot',
      'Hexagonal Architecture',
      'CI/CD',
      'Jenkins',
      'BFF',
      'API Gateway'
    ],

    tier: 'featured',

    category: 'banking',

    complexity: 'medium',

    role: 'backend',

    size: 'half',

    year: 2026,

    duration: '4 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 4,

    highlightMetrics: [
      'BFF',
      'API Gateway',
      'Hexagonal Architecture',
      'Banking'
    ],

    responsibilities: [
      'Implementación de Backend For Frontend empresarial',
      'Orquestación de servicios financieros distribuidos',
      'Desacoplamiento de APIs backend',
      'Diseño de arquitectura hexagonal',
      'Automatización de despliegues CI/CD'
    ],

    achievements: [
      'Reducción de complejidad de integración frontend',
      'Mejora de mantenibilidad de microservicios',
      'Optimización de consumo de APIs bancarias'
    ],

    features: [
      'BFF Architecture',
      'API Gateway',
      'Service Orchestration',
      'Hexagonal Design'
    ],

    techHighlights: [
      'Arquitectura Hexagonal',
      'Desacoplamiento backend',
      'Orquestación empresarial',
      'Servicios financieros escalables'
    ],

    metrics: [
      {
        label: 'Pattern',
        value: 'BFF'
      },
      {
        label: 'Arquitectura',
        value: 'Hexagonal'
      },
      {
        label: 'Integración',
        value: 'Enterprise APIs'
      }
    ],

    architectureFlow: [
      {
        id: 'frontend-apps',
        title: 'Frontend Apps',
        type: 'frontend',
        connections: ['bff-gateway']
      },

      {
        id: 'bff-gateway',
        title: 'BFF',
        type: 'gateway',
        connections: ['spring-backend']
      },

      {
        id: 'spring-backend',
        title: 'Spring Boot',
        type: 'backend',
        connections: ['microservices']
      },

      {
        id: 'microservices',
        title: 'Microservices',
        type: 'integration'
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

    desc: 'API empresarial orientada a validaciones financieras y procesamiento backend para entidades y personas PEP.',

    impact: 'Mejora de rendimiento y estabilidad mediante optimización de servicios backend financieros.',

    context: 'IDM Technology · Scotiabank · 2026',

    stack: 'Spring Boot',

    tags: [
      'Spring Boot',
      'REST API',
      'SonarQube',
      'CI/CD',
      'Jenkins',
      'Validation Services'
    ],

    tier: 'featured',

    category: 'banking',

    complexity: 'medium',

    role: 'backend',

    size: 'half',

    year: 2026,

    duration: '4 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 4,

    highlightMetrics: [
      'REST API',
      'Validation Services',
      'Spring Boot',
      'Financial Systems'
    ],

    responsibilities: [
      'Desarrollo de APIs REST empresariales',
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
      'REST API',
      'Validation Engine',
      'Financial Services',
      'Enterprise Backend'
    ],

    techHighlights: [
      'Servicios REST empresariales',
      'Backend desacoplado',
      'Integración financiera',
      'Optimización de performance'
    ],

    metrics: [
      {
        label: 'API Type',
        value: 'REST'
      },
      {
        label: 'Backend',
        value: 'Spring Boot'
      },
      {
        label: 'Dominio',
        value: 'Financial'
      }
    ],

    architectureFlow: [
      {
        id: 'client-apps',
        title: 'Clients',
        type: 'frontend',
        connections: ['rest-api']
      },

      {
        id: 'rest-api',
        title: 'REST API',
        type: 'gateway',
        connections: ['spring-services']
      },

      {
        id: 'spring-services',
        title: 'Spring Boot',
        type: 'backend',
        connections: ['validation-engine']
      },

      {
        id: 'validation-engine',
        title: 'Validation Engine',
        type: 'integration'
      }
    ],

    companyLogo: '/imagen/LOGO_IDM.svg',

    companyName: 'IDM Technology',

    clientLogo: '/imagen/LOGO_SB.svg',

    clientName: 'Scotiabank',

    experienceId: 'idm-technology'
  },
  {
    id: '9',

    title: 'Expediente Virtual – INTEGRATEL',

    desc: 'Desarrollo de módulos frontend para sistema de expedientes digitales orientado a procesos documentales empresariales.',

    impact: 'Reducción de incidencias y mejora de estabilidad en entornos productivos.',

    context: 'INDRA PERÚ · INTEGRATEL · 2024',

    stack: 'Angular · Azure AD B2C',

    tags: [
      'Angular',
      'Azure AD B2C',
      'Jasmine',
      'Karma',
      'SonarQube',
      'Frontend'
    ],

    tier: 'featured',

    category: 'telecom',

    complexity: 'medium',

    role: 'frontend',

    size: 'half',

    year: 2024,

    duration: '4 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 5,

    highlightMetrics: [
      'Angular',
      'Azure AD',
      'Testing',
      'Enterprise Frontend'
    ],

    responsibilities: [
      'Desarrollo de módulos frontend en Angular',
      'Integración con Azure AD B2C',
      'Corrección de incidencias productivas',
      'Implementación de pruebas unitarias',
      'Optimización de experiencia de usuario'
    ],

    achievements: [
      'Reducción de incidencias en producción',
      'Mejora de estabilidad del frontend',
      'Optimización de autenticación empresarial'
    ],

    features: [
      'Enterprise Frontend',
      'Authentication',
      'Digital Documents',
      'Angular Modules'
    ],

    techHighlights: [
      'Angular enterprise',
      'Azure AD B2C',
      'Testing con Jasmine/Karma',
      'Frontend escalable'
    ],

    metrics: [
      {
        label: 'Frontend',
        value: 'Angular'
      },
      {
        label: 'Auth',
        value: 'Azure AD'
      },
      {
        label: 'Testing',
        value: 'Jasmine'
      }
    ],

    architectureFlow: [
      {
        id: 'angular-app',
        title: 'Angular',
        type: 'frontend',
        connections: ['azure-auth']
      },

      {
        id: 'azure-auth',
        title: 'Azure AD',
        type: 'security',
        connections: ['document-modules']
      },

      {
        id: 'document-modules',
        title: 'Modules',
        type: 'frontend',
        connections: ['testing-layer']
      },

      {
        id: 'testing-layer',
        title: 'Testing',
        type: 'testing'
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

    desc: 'Plataforma empresarial orientada a la gestión y optimización de procesos internos corporativos, implementando funcionalidades Full Stack y mejoras evolutivas para entornos empresariales.',

    impact: 'Optimización y modernización de procesos internos mediante una arquitectura escalable y mantenible.',

    context: 'INDRA PERÚ · INTEGRATEL · 2024',

    stack: 'Angular · Spring Boot · PL/SQL',

    tags: [
      'Angular',
      'Spring Boot',
      'PL/SQL',
      'Mockito',
      'SonarQube',
      'Enterprise',
      'Full Stack'
    ],

    tier: 'featured',

    category: 'enterprise',

    complexity: 'medium',

    role: 'fullstack',

    size: 'regular',

    year: 2024,

    duration: '8 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 7,

    highlightMetrics: [
      'Enterprise Platform',
      'Spring Boot',
      'PL/SQL',
      'Process Optimization'
    ],

    responsibilities: [
      'Desarrollo de funcionalidades frontend y backend',
      'Integración de servicios empresariales',
      'Optimización de consultas y procesos PL/SQL',
      'Implementación de pruebas técnicas',
      'Control de calidad mediante SonarQube'
    ],

    achievements: [
      'Optimización de procesos internos empresariales',
      'Modernización tecnológica de plataforma corporativa',
      'Implementación de arquitectura Full Stack',
      'Mejora de mantenibilidad y estabilidad'
    ],

    features: [
      'Gestión empresarial interna',
      'Integración frontend/backend',
      'Arquitectura escalable',
      'Pruebas unitarias',
      'Validaciones empresariales'
    ],

    techHighlights: [
      'Angular Enterprise',
      'Spring Boot APIs',
      'PL/SQL Optimization',
      'SonarQube',
      'Mockito Testing'
    ],

    metrics: [
      {
        label: 'Arquitectura',
        value: 'Full Stack'
      },
      {
        label: 'Backend',
        value: 'Spring Boot'
      },
      {
        label: 'Base de Datos',
        value: 'PL/SQL'
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

    desc: 'Sistema empresarial orientado a la optimización operativa y mantenimiento evolutivo de procesos corporativos, implementando soluciones Full Stack escalables.',

    impact: 'Mejora de procesos internos y evolución tecnológica de plataforma empresarial.',

    context: 'INDRA PERÚ · INTEGRATEL · 2025',

    stack: 'Angular · Spring Boot · Oracle · PL/SQL',

    tags: [
      'Angular',
      'Spring Boot',
      'Oracle',
      'PL/SQL',
      'Mockito',
      'Enterprise',
      'Full Stack'
    ],

    tier: 'featured',

    category: 'enterprise',

    complexity: 'medium',

    role: 'fullstack',

    size: 'regular',

    year: 2025,

    duration: '10 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 8,

    highlightMetrics: [
      'Oracle',
      'Enterprise',
      'Spring Boot',
      'Operational Optimization'
    ],

    responsibilities: [
      'Implementación de funcionalidades frontend y backend',
      'Mantenimiento evolutivo de plataforma empresarial',
      'Optimización de consultas Oracle y PL/SQL',
      'Integración de APIs y servicios backend',
      'Implementación de pruebas técnicas'
    ],

    achievements: [
      'Optimización de procesos corporativos',
      'Mejora de rendimiento operativo',
      'Evolución de arquitectura empresarial',
      'Integración de servicios backend escalables'
    ],

    features: [
      'Sistema empresarial interno',
      'Integración Oracle',
      'Arquitectura Full Stack',
      'Mantenimiento evolutivo',
      'Procesos empresariales escalables'
    ],

    techHighlights: [
      'Oracle Database',
      'Spring Boot',
      'Angular Architecture',
      'PL/SQL',
      'Enterprise Systems'
    ],

    metrics: [
      {
        label: 'Database',
        value: 'Oracle'
      },
      {
        label: 'Arquitectura',
        value: 'Full Stack'
      },
      {
        label: 'Backend',
        value: 'Spring Boot'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',

    companyName: 'INDRA PERÚ',

    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',

    clientName: 'INTEGRATEL',

    experienceId: 'minsait'
  },

  {
    id: '12',

    title: 'WEB INCIDENTES – CLARO',

    desc: 'Sistema web orientado a la gestión y seguimiento de incidencias operativas, implementando arquitectura Full Stack y validaciones de seguridad empresarial.',

    impact: 'Modernización tecnológica y optimización del flujo de atención de incidencias.',

    context: 'INDRA PERÚ · CLARO · 2025',

    stack: 'Angular · Spring Boot · BFF',

    tags: [
      'Angular',
      'Spring Boot',
      'BFF',
      'OWASP ZAP',
      'Jest',
      'Incident Management',
      'Full Stack'
    ],

    tier: 'featured',

    category: 'telecom',

    complexity: 'medium',

    role: 'fullstack',

    size: 'half',

    year: 2025,

    duration: '8 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 6,

    highlightMetrics: [
      'Incident Management',
      'OWASP Security',
      'BFF',
      'Enterprise Platform'
    ],

    responsibilities: [
      'Desarrollo Full Stack de módulos operativos',
      'Integración de servicios backend y BFF',
      'Implementación de pruebas técnicas con Jest',
      'Validación de vulnerabilidades con OWASP ZAP',
      'Optimización de flujos de incidencias'
    ],

    achievements: [
      'Modernización de sistema operativo empresarial',
      'Optimización de gestión de incidencias',
      'Implementación de validaciones de seguridad',
      'Mejora de mantenibilidad y rendimiento'
    ],

    features: [
      'Gestión de incidencias',
      'Arquitectura BFF',
      'Validaciones de seguridad',
      'Pruebas automatizadas',
      'Integración backend empresarial'
    ],

    techHighlights: [
      'OWASP ZAP',
      'Angular',
      'Spring Boot',
      'BFF Architecture',
      'Jest Testing'
    ],

    metrics: [
      {
        label: 'Seguridad',
        value: 'OWASP'
      },
      {
        label: 'Arquitectura',
        value: 'BFF + Full Stack'
      },
      {
        label: 'Frontend',
        value: 'Angular'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',

    companyName: 'INDRA PERÚ',

    clientLogo: '/imagen/LOGO_CLARO.svg',

    clientName: 'CLARO',

    experienceId: 'indra'
  },

  {
    id: '13',

    title: 'Jerarquía de Ventas – INTEGRATEL',

    desc: 'Sistema empresarial orientado a la gestión jerárquica y administración de estructuras comerciales y operativas.',

    impact: 'Optimización de procesos comerciales y mejora de organización jerárquica empresarial.',

    context: 'INDRA PERÚ · INTEGRATEL · 2025',

    stack: 'Angular · React · Spring Boot · Oracle',

    tags: [
      'Angular',
      'React',
      'Spring Boot',
      'Oracle',
      'Jasmine',
      'Karma',
      'Enterprise'
    ],

    tier: 'featured',

    category: 'telecom',

    complexity: 'medium',

    role: 'fullstack',

    size: 'half',

    year: 2025,

    duration: '8 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 6,

    highlightMetrics: [
      'Sales Hierarchy',
      'Angular',
      'React',
      'Enterprise'
    ],

    responsibilities: [
      'Desarrollo de interfaces frontend empresariales',
      'Integración de servicios backend',
      'Gestión de estructuras jerárquicas',
      'Implementación de pruebas unitarias',
      'Optimización de procesos comerciales'
    ],

    achievements: [
      'Digitalización de estructuras comerciales',
      'Optimización de procesos jerárquicos',
      'Integración Full Stack empresarial',
      'Mejora de experiencia operativa'
    ],

    features: [
      'Gestión jerárquica',
      'Interfaces empresariales',
      'Integración backend',
      'Pruebas frontend',
      'Procesos comerciales escalables'
    ],

    techHighlights: [
      'Angular',
      'React',
      'Spring Boot',
      'Oracle',
      'Enterprise Systems'
    ],

    metrics: [
      {
        label: 'Frontend',
        value: 'Angular/React'
      },
      {
        label: 'Backend',
        value: 'Spring Boot'
      },
      {
        label: 'Database',
        value: 'Oracle'
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

    desc: 'Módulo empresarial orientado a la gestión documental y administración de bandejas SAR para procesos corporativos.',

    impact: 'Optimización del flujo documental y mejora de gestión interna empresarial.',

    context: 'INDRA PERÚ · INTEGRATEL · 2024',

    stack: 'Angular · Spring Boot',

    tags: [
      'Angular',
      'Spring Boot',
      'Mockito',
      'Karma',
      'Figma',
      'Document Management'
    ],

    tier: 'standard',

    category: 'enterprise',

    complexity: 'medium',

    role: 'fullstack',

    size: 'regular',

    year: 2024,

    duration: '4 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 5,

    highlightMetrics: [
      'SAR',
      'Angular',
      'Spring Boot',
      'Document Workflow'
    ],

    responsibilities: [
      'Desarrollo de módulos documentales empresariales',
      'Integración frontend y backend con Angular y Spring Boot',
      'Optimización de flujos de bandejas SAR',
      'Participación en pruebas y validaciones funcionales',
      'Coordinación con equipos de análisis y diseño UI'
    ],

    achievements: [
      'Optimización del flujo documental corporativo',
      'Mejora de tiempos de gestión interna',
      'Reducción de incidencias operativas'
    ],

    features: [
      'Gestión documental',
      'Bandejas SAR',
      'Administración de procesos',
      'Interfaces empresariales'
    ],

    techHighlights: [
      'Angular Enterprise',
      'Spring Boot',
      'Document Workflow',
      'Corporate Systems'
    ],

    metrics: [
      {
        label: 'Frontend',
        value: 'Angular'
      },
      {
        label: 'Backend',
        value: 'Spring Boot'
      },
      {
        label: 'Dominio',
        value: 'Documental'
      }
    ],

    architectureFlow: [
      {
        id: 'angular-ui',
        title: 'Angular',
        type: 'frontend',
        connections: ['spring-services']
      },

      {
        id: 'spring-services',
        title: 'Spring Boot',
        type: 'backend',
        connections: ['document-engine']
      },

      {
        id: 'document-engine',
        title: 'SAR Engine',
        type: 'integration',
        connections: ['database-node']
      },

      {
        id: 'database-node',
        title: 'Database',
        type: 'database'
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

    desc: 'Sistema orientado a la validación documental y optimización de procesos internos mediante interfaces empresariales modernas.',

    impact: 'Reducción de errores operativos y mejora del flujo de validación documental.',

    context: 'INDRA PERÚ · INTEGRATEL · 2024',

    stack: 'Angular',

    tags: [
      'Angular',
      'Figma',
      'Karma',
      'SonarQube',
      'Frontend',
      'Document Validation'
    ],

    tier: 'standard',

    category: 'enterprise',

    complexity: 'medium',

    role: 'frontend',

    size: 'regular',

    year: 2024,

    duration: '8 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 5,

    highlightMetrics: [
      'Document Validation',
      'Angular',
      'Frontend',
      'SonarQube'
    ],

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
      'Frontend empresarial',
      'Gestión de procesos',
      'Interfaces modernas'
    ],

    techHighlights: [
      'Angular Enterprise',
      'SonarQube',
      'Frontend Architecture',
      'Document Validation'
    ],

    metrics: [
      {
        label: 'Frontend',
        value: 'Angular'
      },
      {
        label: 'Quality',
        value: 'SonarQube'
      },
      {
        label: 'Dominio',
        value: 'Validation'
      }
    ],

    architectureFlow: [
      {
        id: 'angular-app',
        title: 'Angular',
        type: 'frontend',
        connections: ['validation-modules']
      },

      {
        id: 'validation-modules',
        title: 'Validation',
        type: 'integration',
        connections: ['quality-layer']
      },

      {
        id: 'quality-layer',
        title: 'SonarQube',
        type: 'testing'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',

    companyName: 'INDRA PERÚ',

    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',

    clientName: 'INTEGRATEL',

    experienceId: 'minsait'
  },

  {
    id: '16',

    title: 'PCD – CLARO',

    desc: 'Sistema empresarial orientado al control documental y trazabilidad de procesos operativos corporativos.',

    impact: 'Mejora de trazabilidad documental y optimización de flujos empresariales.',

    context: 'INDRA PERÚ · CLARO · 2025',

    stack: 'Angular · Spring Boot · BFF',

    tags: [
      'Angular',
      'Spring Boot',
      'BFF',
      'OWASP ZAP',
      'Jest',
      'Document Control'
    ],

    tier: 'standard',

    category: 'telecom',

    complexity: 'medium',

    role: 'fullstack',

    size: 'half',

    year: 2025,

    duration: '8 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 6,

    highlightMetrics: [
      'Document Control',
      'BFF',
      'OWASP',
      'Enterprise'
    ],

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
      'BFF Integration',
      'Enterprise Security',
      'Operational Traceability'
    ],

    techHighlights: [
      'Angular + Spring Boot',
      'OWASP Security',
      'BFF Architecture',
      'Enterprise Systems'
    ],

    metrics: [
      {
        label: 'Arquitectura',
        value: 'BFF'
      },
      {
        label: 'Seguridad',
        value: 'OWASP'
      },
      {
        label: 'Frontend',
        value: 'Angular'
      }
    ],

    architectureFlow: [
      {
        id: 'angular-client',
        title: 'Angular',
        type: 'frontend',
        connections: ['bff-layer']
      },

      {
        id: 'bff-layer',
        title: 'BFF',
        type: 'gateway',
        connections: ['spring-services']
      },

      {
        id: 'spring-services',
        title: 'Spring Boot',
        type: 'backend',
        connections: ['document-engine']
      },

      {
        id: 'document-engine',
        title: 'Document Engine',
        type: 'integration'
      }
    ],

    companyLogo: '/imagen/LOGO_INDRA.svg',

    companyName: 'INDRA PERÚ',

    clientLogo: '/imagen/LOGO_CLARO.svg',

    clientName: 'CLARO',

    experienceId: 'indra'
  },

  {
    id: '17',

    title: 'Mesa de Partes Virtual – RENIEC',

    desc: 'Sistema institucional orientado a la recepción y gestión documental digital para procesos administrativos gubernamentales.',

    impact: 'Digitalización y optimización de procesos documentales institucionales.',

    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',

    stack: 'Angular · React · Spring Boot',

    tags: [
      'Angular',
      'React',
      'Spring Boot',
      'Bootstrap',
      'Government',
      'Digital Process'
    ],

    tier: 'standard',

    category: 'government',

    complexity: 'medium',

    role: 'fullstack',

    size: 'regular',

    year: 2023,

    duration: '7 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 6,

    highlightMetrics: [
      'Digital Process',
      'Government',
      'Angular',
      'Spring Boot'
    ],

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
      'Procesos Institucionales',
      'Recepción Virtual'
    ],

    techHighlights: [
      'Government Systems',
      'Angular + React',
      'Spring Boot',
      'Digital Transformation'
    ],

    metrics: [
      {
        label: 'Sector',
        value: 'Government'
      },
      {
        label: 'Backend',
        value: 'Spring Boot'
      },
      {
        label: 'Frontend',
        value: 'Angular + React'
      }
    ],

    architectureFlow: [
      {
        id: 'angular-ui',
        title: 'Angular',
        type: 'frontend',
        connections: ['react-layer']
      },

      {
        id: 'react-layer',
        title: 'React',
        type: 'frontend',
        connections: ['spring-services']
      },

      {
        id: 'spring-services',
        title: 'Spring Boot',
        type: 'backend',
        connections: ['government-db']
      },

      {
        id: 'government-db',
        title: 'Database',
        type: 'database'
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

    desc: 'Desarrollo de módulo orientado a la gestión y experiencia de usuario para plataformas institucionales de RENIEC, implementando funcionalidades frontend y backend enfocadas en accesibilidad, usabilidad y rendimiento.',

    impact: 'Mejora de experiencia de usuario y optimización de funcionalidades para plataformas gubernamentales de alta concurrencia.',

    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',

    stack: 'Angular · React · Spring Boot · PL/SQL',

    tags: [
      'Angular',
      'React',
      'Spring Boot',
      'PL/SQL',
      'Mockito',
      'Government',
      'Full Stack'
    ],

    tier: 'standard',

    category: 'government',

    complexity: 'medium',

    role: 'fullstack',

    size: 'regular',

    year: 2023,

    duration: '8 Meses',

    methodology: 'agile',

    status: 'completed',

    teamSize: 6,

    highlightMetrics: [
      'UX Improvement',
      'Government Systems',
      'Spring Boot',
      'Angular'
    ],

    responsibilities: [
      'Desarrollo de funcionalidades frontend y backend',
      'Implementación de interfaces utilizando Angular y React',
      'Integración de servicios backend con Spring Boot',
      'Optimización de experiencia de usuario',
      'Implementación y validación de pruebas técnicas'
    ],

    achievements: [
      'Mejora de accesibilidad y experiencia de usuario',
      'Optimización de rendimiento en módulos institucionales',
      'Integración Full Stack para plataformas gubernamentales',
      'Participación en mejoras funcionales del sistema'
    ],

    features: [
      'Gestión de usuarios',
      'Interfaces responsivas',
      'Integración de APIs REST',
      'Validaciones frontend y backend',
      'Módulo institucional escalable'
    ],

    techHighlights: [
      'Angular Architecture',
      'Spring Boot APIs',
      'Government Platforms',
      'PL/SQL',
      'Mockito Testing'
    ],

    metrics: [
      {
        label: 'Arquitectura',
        value: 'Full Stack'
      },
      {
        label: 'Frontend',
        value: 'Angular/React'
      },
      {
        label: 'Backend',
        value: 'Spring Boot'
      }
    ],

    architectureFlow: [
      {
        id: 'frontend-ui',
        title: 'Frontend UI',
        type: 'frontend',
        description: 'Interfaces de usuario desarrolladas con Angular y React.',
        connections: ['backend-api']
      },

      {
        id: 'backend-api',
        title: 'Spring Boot API',
        type: 'backend',
        description: 'Servicios backend para lógica de negocio y gestión de usuarios.',
        connections: ['database-layer']
      },

      {
        id: 'database-layer',
        title: 'PL/SQL Database',
        type: 'database',
        description: 'Persistencia y procesamiento de datos institucionales.'
      },

      {
        id: 'testing-layer',
        title: 'Mockito Testing',
        type: 'testing',
        description: 'Pruebas técnicas y validación backend.'
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

    desc: 'Proyecto de migración tecnológica del sistema SIGED hacia infraestructura basada en JBoss, participando en la adaptación de servicios, validaciones técnicas y despliegues controlados.',

    impact: 'Modernización de infraestructura tecnológica y mejora de estabilidad operativa para sistemas institucionales.',

    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',

    stack: 'Spring Boot · JBoss · Jenkins · Angular',

    tags: [
      'JBoss',
      'Spring Boot',
      'Jenkins',
      'CI/CD',
      'Infrastructure',
      'Migration',
      'Backend'
    ],

    tier: 'standard',

    category: 'government',

    complexity: 'medium',

    role: 'backend',

    size: 'half',

    year: 2023,

    duration: '8 Meses',

    methodology: 'agile',

    status: 'completed',

    teamSize: 5,

    highlightMetrics: [
      'JBoss Migration',
      'Infrastructure',
      'CI/CD',
      'Backend Modernization'
    ],

    responsibilities: [
      'Participación en migración tecnológica hacia JBoss',
      'Adaptación y validación de servicios backend',
      'Soporte en despliegues y validaciones técnicas',
      'Integración continua mediante Jenkins',
      'Corrección de incidencias post migración'
    ],

    achievements: [
      'Modernización de infraestructura institucional',
      'Mejora de estabilidad operativa',
      'Participación en despliegues controlados',
      'Optimización de servicios backend'
    ],

    features: [
      'Migración de infraestructura',
      'Despliegues automatizados',
      'Integración CI/CD',
      'Servicios backend escalables',
      'Validaciones técnicas'
    ],

    techHighlights: [
      'JBoss',
      'Spring Boot',
      'CI/CD',
      'Infrastructure Migration',
      'Jenkins Pipelines'
    ],

    metrics: [
      {
        label: 'Infraestructura',
        value: 'JBoss'
      },
      {
        label: 'Automatización',
        value: 'CI/CD'
      },
      {
        label: 'Backend',
        value: 'Spring Boot'
      }
    ],

    architectureFlow: [
      {
        id: 'frontend-layer',
        title: 'Frontend Layer',
        type: 'frontend',
        description: 'Aplicaciones conectadas a servicios migrados.',
        connections: ['backend-services']
      },

      {
        id: 'backend-services',
        title: 'Spring Boot Services',
        type: 'backend',
        description: 'Servicios backend adaptados para infraestructura JBoss.',
        connections: ['jboss-server']
      },

      {
        id: 'jboss-server',
        title: 'JBoss Infrastructure',
        type: 'cloud',
        description: 'Servidor de aplicaciones para despliegue institucional.'
      },

      {
        id: 'cicd-layer',
        title: 'CI/CD Pipeline',
        type: 'testing',
        description: 'Automatización de despliegues y validaciones mediante Jenkins.'
      }
    ],

    companyLogo: '/imagen/LOGO_CC.svg',

    companyName: 'CloudComputing Perú S.A.C.',

    clientLogo: '/imagen/LOGO_RENIEC.svg',

    clientName: 'RENIEC',

    experienceId: 'cloudComputing'
  },

  {
    id: '20',

    title: 'MAIL-CONSUMER – Scotiabank',

    desc: 'Servicio batch orientado al consumo y procesamiento de colas AS400 para integración de servicios bancarios backend.',

    impact: 'Optimización de procesamiento batch y automatización de integración de servicios críticos bancarios.',

    context: 'IDM Technology · Scotiabank · 2026',

    stack: 'Spring Boot · Kafka · AS400',

    tags: [
      'Spring Boot',
      'Kafka',
      'AS400',
      'Batch Processing',
      'CI/CD',
      'Backend'
    ],

    tier: 'minor',

    category: 'banking',

    complexity: 'medium',

    role: 'backend',

    size: 'half',

    year: 2026,

    duration: '4 Meses',

    methodology: 'agile',

    status: 'production',

    teamSize: 4,

    highlightMetrics: [
      'Kafka',
      'AS400',
      'Batch Services',
      'Banking'
    ],

    responsibilities: [
      'Desarrollo de servicios batch backend',
      'Consumo e integración de colas AS400',
      'Procesamiento automatizado de eventos',
      'Integración con servicios bancarios',
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
      'Integración con AS400',
      'Mensajería mediante Kafka',
      'Servicios backend escalables',
      'Procesamiento automatizado'
    ],

    techHighlights: [
      'Kafka Messaging',
      'AS400 Integration',
      'Spring Boot',
      'Backend Services',
      'Banking Systems'
    ],

    metrics: [
      {
        label: 'Mensajería',
        value: 'Kafka'
      },
      {
        label: 'Core Banking',
        value: 'AS400'
      },
      {
        label: 'Backend',
        value: 'Spring Boot'
      }
    ],

    architectureFlow: [
      {
        id: 'batch-service',
        title: 'Batch Consumer',
        type: 'backend',
        description: 'Servicio batch encargado del procesamiento de colas.',
        connections: ['kafka-layer', 'as400-layer']
      },

      {
        id: 'kafka-layer',
        title: 'Kafka Messaging',
        type: 'queue',
        description: 'Mensajería y procesamiento de eventos.'
      },

      {
        id: 'as400-layer',
        title: 'AS400 Integration',
        type: 'integration',
        description: 'Integración con sistemas core bancarios.'
      }
    ],

    companyLogo: '/imagen/LOGO_IDM.svg',

    companyName: 'IDM Technology',

    clientLogo: '/imagen/LOGO_SB.svg',

    clientName: 'Scotiabank',

    experienceId: 'idm-technology'
  },

  {
    id: '21',

    title: 'Botón de Pago (BFF) – CLARO',

    desc: 'Backend For Frontend (BFF) orientado a la orquestación de servicios de pagos empresariales y consumo seguro de APIs para plataformas de CLARO.',

    impact: 'Mejora de seguridad, integración y mantenibilidad en procesos de pagos y consumo de servicios empresariales.',

    context: 'INDRA PERÚ · CLARO · 2026',

    stack: 'Node.js · REST APIs',

    tags: [
      'Node.js',
      'BFF',
      'REST API',
      'Testing',
      'SonarQube',
      'Backend',
      'CI/CD'
    ],

    tier: 'minor',

    category: 'telecom',

    complexity: 'medium',

    role: 'backend',

    size: 'half',

    year: 2026,

    duration: '4 Meses',

    methodology: 'agile',

    status: 'completed',

    teamSize: 5,

    highlightMetrics: [
      'BFF',
      'Payments',
      'Node.js',
      'Security'
    ],

    responsibilities: [
      'Desarrollo de Backend For Frontend para servicios de pagos',
      'Integración y consumo de APIs empresariales',
      'Implementación de validaciones y seguridad backend',
      'Corrección de observaciones técnicas',
      'Análisis de calidad de código con SonarQube'
    ],

    achievements: [
      'Optimización de integración de servicios de pagos',
      'Mejora de seguridad backend',
      'Participación en arquitectura BFF',
      'Reducción de observaciones de calidad'
    ],

    features: [
      'Arquitectura BFF',
      'Orquestación de pagos',
      'Integración REST APIs',
      'Validaciones backend',
      'Control de calidad con SonarQube'
    ],

    techHighlights: [
      'Node.js APIs',
      'BFF Architecture',
      'Payment Integration',
      'SonarQube',
      'Backend Security'
    ],

    metrics: [
      {
        label: 'Arquitectura',
        value: 'BFF'
      },
      {
        label: 'Backend',
        value: 'Node.js'
      },
      {
        label: 'Seguridad',
        value: 'API Validation'
      }
    ],

    architectureFlow: [
      {
        id: 'frontend-payments',
        title: 'Payment Frontend',
        type: 'frontend',
        description: 'Aplicación consumidora de servicios de pago.',
        connections: ['bff-node']
      },

      {
        id: 'bff-node',
        title: 'Node.js BFF',
        type: 'backend',
        description: 'Capa de orquestación y seguridad de servicios.',
        connections: ['payments-api', 'quality-layer']
      },

      {
        id: 'payments-api',
        title: 'Payment APIs',
        type: 'integration',
        description: 'Servicios empresariales de procesamiento de pagos.'
      },

      {
        id: 'quality-layer',
        title: 'SonarQube Analysis',
        type: 'testing',
        description: 'Control de calidad y análisis estático de código.'
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
    desc: 'Backend For Frontend (BFF) orientado a la integración y orquestación de servicios empresariales para plataformas internas de CLARO, optimizando la comunicación entre frontend y microservicios backend.',
    impact: 'Mejora en la integración y centralización de servicios backend, reduciendo complejidad y optimizando el flujo de comunicación entre aplicaciones empresariales.',
    context: 'INDRA PERÚ · CLARO · 2026',
    stack: 'Node.js · REST APIs',
    tags: ['Node.js', 'BFF', 'REST API', 'CI/CD', 'Testing', 'Backend', 'Jest'],
    tier: 'minor',
    category: 'telecom',
    complexity: 'medium',
    role: 'backend',
    size: 'half',
    year: 2026,
    duration: '4 Meses',
    methodology: 'agile',
    status: 'completed',
    teamSize: 5,
    highlightMetrics: ['BFF Architecture', 'Node.js', 'REST APIs', 'CI/CD'],
    responsibilities: [
      'Desarrollo y mantenimiento de Backend For Frontend (BFF)',
      'Integración y consumo de servicios empresariales',
      'Implementación de lógica de orquestación backend',
      'Implementación y corrección de pruebas unitarias',
      'Corrección y levantamiento de observaciones técnicas',
      'Participación en despliegues y pruebas técnicas'
    ],

    achievements: [
      'Optimización de integración entre frontend y backend',
      'Centralización de servicios empresariales',
      'Mejora en mantenibilidad y escalabilidad del backend',
      'Participación en procesos CI/CD'
    ],

    features: [
      'Arquitectura BFF',
      'Integración de APIs REST',
      'Orquestación de servicios backend',
      'Testing backend',
      'Despliegues automatizados'
    ],

    techHighlights: [
      'Backend For Frontend',
      'REST APIs',
      'Node.js Architecture',
      'CI/CD Pipelines',
      'Microservices Integration'
    ],

    metrics: [
      {
        label: 'Arquitectura',
        value: 'BFF'
      },
      {
        label: 'Backend',
        value: 'Node.js'
      },
      {
        label: 'Integración',
        value: 'REST APIs'
      }
    ],

    architectureFlow: [
      {
        id: 'frontend-client',
        title: 'Frontend Client',
        type: 'frontend',
        description: 'Aplicaciones consumidoras conectadas al BFF.',
        connections: ['bff-node']
      },

      {
        id: 'bff-node',
        title: 'Node.js BFF',
        type: 'backend',
        description: 'Capa de orquestación e integración de servicios empresariales.',
        connections: [
          'microservices-layer',
          'testing-layer'
        ]
      },

      {
        id: 'microservices-layer',
        title: 'Enterprise Services',
        type: 'integration',
        description: 'Microservicios y APIs empresariales integradas.'
      },

      {
        id: 'testing-layer',
        title: 'Testing & CI/CD',
        type: 'testing',
        description: 'Validación técnica y procesos de integración continua.'
      }
    ],
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_CLARO.svg',
    clientName: 'CLARO',
    experienceId: 'indra'
  },

  {
    id: '23',
    title: 'Plataforma de Gestión de Apuestas Deportivas',
    desc: 'Sistema Full Stack para la gestión, centralización y monitoreo de apuestas deportivas, permitiendo administrar eventos, registros y seguimiento de operaciones desde una plataforma unificada.',
    impact: 'Automatización y centralización de procesos relacionados a apuestas deportivas mediante una arquitectura web escalable.',
    context: 'Proyecto Personal · 2025',
    stack: 'Angular · Node.js · MongoDB Atlas',
    tags: ['Angular', 'Node.js', 'MongoDB Atlas', 'REST API', 'Jasmine', 'Karma', 'Full Stack'],
    tier: 'minor',
    category: 'personal',
    complexity: 'medium',
    role: 'fullstack',
    size: 'half',
    year: 2025,
    duration: '4 Meses',
    methodology: 'agile',
    status: 'completed',
    teamSize: 1,
    highlightMetrics: ['MongoDB Atlas', 'REST APIs', 'Full Stack', 'Automation'],
    responsibilities: [
      'Desarrollo de frontend interactivo utilizando Angular',
      'Implementación de APIs REST con Node.js',
      'Diseño y modelado de datos en MongoDB Atlas',
      'Integración entre frontend y backend',
      'Implementación de pruebas unitarias'
    ],
    achievements: ['Centralización de operaciones deportivas en una sola plataforma', 'Automatización de gestión de registros y eventos',
      'Implementación de arquitectura Full Stack escalable', 'Optimización de persistencia y consultas en MongoDB Atlas'
    ],
    features: ['Gestión de apuestas deportivas', 'Registro y seguimiento de eventos', 'Persistencia de datos en MongoDB Atlas', 'Arquitectura basada en APIs REST',
      'Interfaz web responsiva'
    ],
    techHighlights: ['Angular Architecture', 'REST APIs', 'MongoDB Atlas', 'Node.js Backend', 'Unit Testing'],

    metrics: [
      {
        label: 'Arquitectura',
        value: 'Full Stack'
      },
      {
        label: 'Backend',
        value: 'Node.js APIs'
      },
      {
        label: 'Base de Datos',
        value: 'MongoDB Atlas'
      }
    ],

    architectureFlow: [
      {
        id: 'frontend-angular',
        title: 'Angular Frontend',
        type: 'frontend',
        description: 'Interfaz web para gestión y monitoreo de apuestas.',
        connections: ['backend-node']
      },

      {
        id: 'backend-node',
        title: 'Node.js API',
        type: 'backend',
        description: 'Backend encargado de la lógica de negocio y APIs REST.',
        connections: ['database-mongo']
      },

      {
        id: 'database-mongo',
        title: 'MongoDB Atlas',
        type: 'database',
        description: 'Persistencia y administración de datos deportivos.'
      },

      {
        id: 'testing-layer',
        title: 'Unit Testing',
        type: 'testing',
        description: 'Pruebas unitarias implementadas con Jasmine y Karma.'
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
    tags: ['TensorFlow', 'OpenCV', 'Keras', 'Computer Vision', 'Deep Learning', 'Artificial Intelligence'],
    tier: 'minor',
    category: 'ai',
    complexity: 'medium',
    role: 'fullstack',
    size: 'half',
    year: 2021,
    duration: '4 Meses',
    methodology: 'agile',
    status: 'completed',
    teamSize: 1,
    highlightMetrics: ['Real-Time Detection', 'Computer Vision', 'TensorFlow', 'AI Recognition'],
    responsibilities: ['Desarrollo de frontend interactivo utilizando Angular', 'Implementación de backend API con Flask', 'Procesamiento y análisis de video en tiempo real',
      'Integración de modelos de inteligencia artificial', 'Entrenamiento y validación de modelos de detección'
    ],
    achievements: ['Ganador de Expotec 2021', 'Implementación de inferencia en tiempo real', 'Integración Full Stack entre IA y aplicación web',
      'Detección automática mediante visión computacional'
    ],
    features: ['Detección facial en tiempo real', 'Clasificación automática de uso de mascarilla', 'Captura de video mediante webcam',
      'Procesamiento de imágenes con OpenCV', 'Frontend responsivo e interactivo'
    ],
    techHighlights: ['Computer Vision', 'Deep Learning', 'TensorFlow', 'Image Processing', 'Realtime AI Detection'],
    metrics: [
      {
        label: 'Arquitectura',
        value: 'Full Stack + IA'
      },
      {
        label: 'Procesamiento',
        value: 'Tiempo Real'
      },
      {
        label: 'Modelo IA',
        value: 'TensorFlow/Keras'
      }
    ],

    architectureFlow: [
      {
        id: 'frontend-angular',
        title: 'Angular Frontend',
        type: 'frontend',
        description: 'Interfaz web para visualización y captura de video.',
        connections: ['backend-flask']
      },

      {
        id: 'backend-flask',
        title: 'Flask API',
        type: 'backend',
        description: 'Backend encargado del procesamiento y comunicación con el modelo IA.',
        connections: ['ai-model']
      },

      {
        id: 'ai-model',
        title: 'TensorFlow Model',
        type: 'ai',
        description: 'Modelo de detección y clasificación de mascarillas.',
        connections: ['opencv-processing']
      },

      {
        id: 'opencv-processing',
        title: 'OpenCV Processing',
        type: 'integration',
        description: 'Procesamiento de imágenes y frames en tiempo real.'
      }
    ],
    companyLogo: '/imagen/LOGO_UA.svg',
    companyName: 'Universidad Autónoma del Perú',
    clientLogo: '/imagen/FOTO.svg',
    clientName: 'Diego Gonzalez',
    experienceId: 'personal'
  }

];
