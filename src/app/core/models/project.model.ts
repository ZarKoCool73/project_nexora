export interface Project {
  title: string;
  desc: string;
  tags: string[];
  stack: string;
  year: number;
  size: 'featured' | 'regular' | 'half';
  url?: string;
  duration: string;
  context?: string;
  impact?: string;

  // 🏢 Logos en círculo — rutas relativas a assets/
  companyLogo?: string;   // ej: 'assets/logos/companies/indra.svg'
  companyName?: string;   // tooltip al hacer hover
  clientLogo?: string;    // ej: 'assets/logos/clients/integratel.svg'
  clientName?: string;    // tooltip al hacer hover
}

export interface ProjectFilterState {
  search: string;
  tags: string[];
  stacks: string[];
  years: number[];
}

// ========================= //
// GRUPOS DE TECNOLOGÍAS     //
// ========================= //
export interface TagGroup {
  label: string;
  tags: string[];
}

export const TAG_GROUPS: TagGroup[] = [
  {
    label: 'CI/CD',
    tags: ['CI/CD', 'Jenkins', 'ArgoCD', 'Bitbucket'],
  },
  {
    label: 'Calidad',
    tags: ['SonarQube', 'BlackDuck', 'Checkmarx', 'OWASP ZAP'],
  },
  {
    label: 'Testing',
    tags: ['Jasmine', 'Karma', 'Mockito', 'Jest'],
  },
  {
    label: 'IA / Visión',
    tags: ['OpenCV', 'TensorFlow', 'Keras', 'MediaPipe', 'NumPy', 'Pandas', 'scikit-learn'],
  },
  {
    label: 'Base de datos',
    tags: ['Oracle', 'MongoDB Atlas', 'PL/SQL', 'Redis'],
  },
  {
    label: 'Mensajería',
    tags: ['Kafka', 'AS400', 'BFF'],
  },
  {
    label: 'Frontend',
    tags: ['Angular Material', 'Bootstrap', 'Figma', 'Azure AD B2C'],
  },
  {
    label: 'Otros',
    tags: ['REST APIs', 'Postman', 'JBoss', 'Git'],
  },
];

export type PanelId = 'tech' | 'year' | 'stack' | null;

export const PROJECTS: Project[] = [

  {
    title: 'SMS-CONSUMER – Entidad Bancaria',
    context: 'IDM Technology · Entidad Bancaria · 2026',
    desc: 'Optimización de servicio batch para consumo de colas AS400 e integración con Kafka.',
    stack: 'Spring Boot',
    tags: ['AS400', 'Kafka', 'SonarQube', 'CI/CD', 'Jenkins', 'ArgoCD', 'BlackDuck', 'Checkmarx', 'Bitbucket', 'Postman', 'Arquitectura Hexagonal'],
    year: 2026,
    duration: '4 Meses',
    size: 'half',
    impact: 'Mejora en rendimiento y tiempos de procesamiento mediante paralelización.',
    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_EB.svg',
    clientName: 'ENTIDAD BANCARIA',
  },
  {
    title: 'MAIL-CONSUMER – Entidad Bancaria',
    context: 'IDM Technology · Entidad Bancaria · 2026',
    desc: 'Optimización de servicio batch para consumo de colas AS400 e integración con Kafka.',
    stack: 'Spring Boot',
    tags: ['AS400', 'Kafka', 'SonarQube', 'CI/CD', 'Jenkins', 'ArgoCD', 'BlackDuck', 'Checkmarx', 'Bitbucket', 'Postman', 'Arquitectura Hexagonal'],
    year: 2026,
    duration: '4 Meses',
    size: 'half',
    impact: 'Mejora en rendimiento y tiempos de procesamiento mediante paralelización.',
    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_EB.svg',
    clientName: 'ENTIDAD BANCARIA',
  },
  {
    title: 'GESINTEL – Entidad Bancaria',
    context: 'IDM Technology · Entidad Bancaria · 2026',
    desc: 'Sistema para validación de personas PEP, sancionadas y entidades financieras.',
    stack: 'React · Spring Boot',
    tags: ['SonarQube', 'CI/CD', 'Jenkins', 'ArgoCD', 'BlackDuck', 'Checkmarx', 'Bitbucket', 'Postman'],
    year: 2026,
    duration: '4 Meses',
    size: 'half',
    impact: 'Mejora en seguridad, estabilidad y actualización tecnológica del sistema.',
    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_EB.svg',
    clientName: 'ENTIDAD BANCARIA',
  },
  {
    title: 'BFF – Entidad Bancaria',
    context: 'IDM Technology · Entidad Bancaria · 2026',
    desc: 'Desarrollo de BFF para orquestación y consumo de servicios backend orientado a frontend.',
    stack: 'Spring Boot',
    tags: ['SonarQube', 'CI/CD', 'Jenkins', 'ArgoCD', 'BlackDuck', 'Checkmarx', 'Bitbucket', 'Postman', 'Arquitectura Hexagonal'],
    year: 2026,
    duration: '4 Meses',
    size: 'half',
    impact: 'Mejora en la seguridad, agregando puntos de mejora para el consumo de servicios',
    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_EB.svg',
    clientName: 'ENTIDAD BANCARIA',
  },
  {
    title: 'Validation-Listener – Entidad Bancaria',
    context: 'IDM Technology · Entidad Bancaria · 2026',
    desc: 'Implementación de servicio listener para consumo y procesamiento de colas AS400.',
    stack: 'Spring Boot',
    tags: ['AS400', 'Redis', 'Kafka', 'SonarQube', 'CI/CD', 'Jenkins', 'ArgoCD', 'BlackDuck', 'Checkmarx', 'Bitbucket', 'Postman', 'Arquitectura Hexagonal'],
    year: 2026,
    duration: '4 Meses',
    size: 'regular',
    impact: 'Mejora en el paralelismo y lectura de colas, optimizando el tiempo de respuesta',
    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_EB.svg',
    clientName: 'ENTIDAD BANCARIA',
  },
  {
    title: 'Validation-API – Entidad Bancaria',
    context: 'IDM Technology · Entidad Bancaria · 2026',
    desc: 'API para validación de personas PEP y entidades financieras.',
    stack: 'Spring Boot',
    tags: ['SonarQube', 'CI/CD', 'Jenkins', 'ArgoCD', 'BlackDuck', 'Checkmarx', 'Bitbucket', 'Postman', 'Arquitectura Hexagonal'],
    year: 2026,
    duration: '4 Meses',
    size: 'featured',
    impact: 'Mejora en rendimiento y calidad del código mediante optimización y reducción de redundancias.',
    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_EB.svg',
    clientName: 'ENTIDAD BANCARIA',
  },
  {
    title: 'Expediente Virtual – INTEGRATEL',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',
    desc: 'Desarrollo de módulos en sistema de expedientes digitales con integración Azure AD B2C y mantenimiento en producción.',
    stack: 'Angular',
    tags: ['Azure AD B2C', 'Jasmine', 'Karma', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2024,
    duration: '4 Meses',
    size: 'featured',
    impact: 'Estabilización de módulos críticos y reducción de incidencias en producción',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
  },

  {
    title: 'Expediente Virtual – Bandeja SAR',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',
    desc: 'Módulo de bandeja SAR para trazabilidad y atención de expedientes.',
    stack: 'Angular · Spring Boot',
    tags: ['Figma', 'Jasmine', 'Karma', 'Mockito', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2024,
    duration: '4 Meses',
    size: 'regular',
    impact: 'Optimización del flujo de atención de solicitudes',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
  },

  {
    title: 'PACIFYC – Plataforma de gestión',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',
    desc: 'Plataforma fullstack para gestión de procesos internos con reglas de negocio.',
    stack: 'Angular · Spring Boot',
    tags: ['PL/SQL', 'Jasmine', 'Karma', 'Mockito', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2024,
    duration: '8 Meses',
    size: 'featured',
    impact: 'Migración de procesos internos',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
  },

  {
    title: 'Gestión de Apuestas Deportivas',
    context: 'PROYECTO PERSONAL · FULLSTACK · 2025',
    desc: 'Sistema fullstack para la gestión y control de apuestas deportivas.',
    stack: 'Angular · Node.js · Express',
    tags: ['MongoDB Atlas', 'Jasmine', 'Karma', 'SonarQube', 'Postman'],
    year: 2025,
    duration: '4 Meses',
    size: 'half',
    impact: 'Centralización del control de apuestas y mejora en la trazabilidad de operaciones y resultados',
  },

  {
    title: 'Jerarquía de Ventas',
    context: 'INDRA PERÚ · INTEGRATEL · 2025',
    desc: 'Módulo para gestión jerárquica de ventas y análisis comercial.',
    stack: 'Angular · React · Spring Boot',
    tags: ['Oracle', 'Jasmine', 'Karma', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2025,
    duration: '8 Meses',
    size: 'half',
    impact: 'Optimización del análisis comercial mediante estructura jerárquica de ventas',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
  },

  {
    title: 'SIVADAC – Validación documental',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',
    desc: 'Módulos frontend enfocados en validación documental y UX.',
    stack: 'Angular',
    tags: ['Figma', 'Jasmine', 'Karma', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2024,
    duration: '8 Meses',
    size: 'regular',
    impact: 'Reducción de errores en validación de documentos',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
  },

  {
    title: 'SISTEC – Sistema interno',
    context: 'INDRA PERÚ · INTEGRATEL · 2025',
    desc: 'Sistema de gestión interna con microservicios y optimización de procesos.',
    stack: 'Angular · Spring Boot',
    tags: ['PL/SQL', 'Oracle', 'Jasmine', 'Karma', 'Mockito', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2025,
    duration: '10 Meses',
    size: 'half',
    impact: 'Optimización de procesos backend y frontend',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
  },

  {
    title: 'Botón de Pago',
    context: 'INDRA PERÚ · CLARO · 2025',
    desc: 'Integración de pagos con validaciones backend y pruebas automatizadas.',
    stack: 'Angular · Spring Boot',
    tags: ['Jest', 'Mockito', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman', 'OWASP ZAP'],
    year: 2025,
    duration: '12 Meses',
    size: 'half',
    impact: 'Mejora en confiabilidad de transacciones',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_CLARO.svg',
    clientName: 'CLARO',
  },

  {
    title: 'PCD – Control documental',
    context: 'INDRA PERÚ · CLARO · 2025',
    desc: 'Sistema de control documental con arquitectura modular.',
    stack: 'Angular · Spring Boot',
    tags: ['BFF', 'Jest', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman', 'OWASP ZAP'],
    year: 2025,
    duration: '8 Meses',
    size: 'regular',
    impact: 'Mejor control de flujos documentarios',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_CLARO.svg',
    clientName: 'CLARO',
  },

  {
    title: 'SIGED – RENIEC',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',
    desc: 'Sistema de gestión documental con migración e integración de módulos.',
    stack: 'Angular · React · Spring Boot',
    tags: ['Angular Material', 'PL/SQL', 'Jasmine', 'Karma', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2023,
    duration: '8 Meses',
    size: 'featured',
    impact: 'Modernización del sistema de gestión documental',
    companyLogo: '/imagen/LOGO_CC.svg',
    companyName: 'CLOUDCOMPUTING PERÚ S.A.C',
    clientLogo: '/imagen/LOGO_RENIEC.svg',
    clientName: 'RENIEC',
  },

  {
    title: 'Sistema de Aprendizaje de Lenguaje de Señas',
    context: 'PROYECTO PERSONAL / TESIS · 2025',
    desc: 'Aplicación interactiva para el aprendizaje de lenguaje de señas mediante reconocimiento de gestos en tiempo real usando visión por computadora.',
    stack: 'Angular · Flask · Node.js',
    tags: ['MongoDB Atlas', 'OpenCV', 'TensorFlow', 'Keras', 'MediaPipe', 'REST APIs', 'Jasmine', 'Karma', 'Postman', 'Bootstrap'],
    year: 2025,
    duration: '6 Meses',
    size: 'featured',
    impact: 'Sistema funcional capaz de reconocer señas en tiempo real.',
    companyLogo: '/imagen/LOGO_UA.svg',
    companyName: 'Universidad Autónoma del Perú',
  },

  {
    title: 'Mesa de Partes Virtual – SIGED',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',
    desc: 'Implementación de mesa de partes virtual integrada al SIGED.',
    stack: 'Angular · React · Spring Boot',
    tags: ['Bootstrap', 'Jasmine', 'Karma', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2023,
    duration: '7 Meses',
    size: 'regular',
    impact: 'Digitalización del ingreso de documentos',
    companyLogo: '/imagen/LOGO_CC.svg',
    companyName: 'CLOUDCOMPUTING PERÚ S.A.C',
    clientLogo: '/imagen/LOGO_RENIEC.svg',
    clientName: 'RENIEC',
  },

  {
    title: 'Módulo Usuario Final – SIGED',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',
    desc: 'Módulo de usuario final para gestión electrónica.',
    stack: 'Angular · React · Spring Boot',
    tags: ['PL/SQL', 'Jasmine', 'Karma', 'Mockito', 'SonarQube', 'CI/CD', 'Bitbucket', 'Postman'],
    year: 2023,
    duration: '8 Meses',
    size: 'regular',
    impact: 'Mejora de experiencia del usuario final',
    companyLogo: '/imagen/LOGO_CC.svg',
    companyName: 'CLOUDCOMPUTING PERÚ S.A.C',
    clientLogo: '/imagen/LOGO_RENIEC.svg',
    clientName: 'RENIEC',
  },

  {
    title: 'Migración SIGED a JBoss',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',
    desc: 'Migración del sistema SIGED a servidor JBoss.',
    stack: 'Angular · React · Spring Boot',
    tags: ['JBoss', 'Jasmine', 'Karma', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2023,
    duration: '8 Meses',
    size: 'half',
    impact: 'Mejora de estabilidad del sistema',
    companyLogo: '/imagen/LOGO_CC.svg',
    companyName: 'CLOUDCOMPUTING PERÚ S.A.C',
    clientLogo: '/imagen/LOGO_RENIEC.svg',
    clientName: 'RENIEC',
  },

  {
    title: 'Software para la detección de mascarilla – Expotec 2021',
    context: 'Universidad Autónoma del Perú · Expotec 2021-I · Categoría Intermedia',
    desc: 'Sistema de visión por computadora para la detección de uso de mascarilla en tiempo real.',
    stack: 'Python · Flask · Angular',
    tags: ['OpenCV', 'TensorFlow', 'Keras', 'MediaPipe', 'NumPy', 'Pandas', 'scikit-learn', 'REST APIs', 'Postman', 'Git'],
    year: 2021,
    duration: '4 Meses',
    size: 'featured',
    impact: 'Primer puesto en el concurso Expotec 2021-I categoría intermedia',
    companyLogo: '/imagen/LOGO_UA.svg',
    companyName: 'Universidad Autónoma del Perú',
  }

];
