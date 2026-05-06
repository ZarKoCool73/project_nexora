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

export const PROJECTS: Project[] = [

  // =========================
  // 🏦 Scotiabank (IDM)
  // =========================
  {
    title: 'SMS-CONSUMER – Scotiabank',
    context: 'IDM Technology · Scotiabank · 2026',
    desc: 'Optimización de servicio batch para consumo de colas AS400 e integración con Kafka.',
    stack: 'Spring Boot',
    tags: ['AS400', 'Kafka', 'SonarQube', 'CI/CD', 'Jenkins', 'ArgoCD', 'BlackDuck', 'Checkmarx', 'Bitbucket', 'Postman', 'Arquitectura Hexagonal'],
    year: 2026,
    duration: '4 Meses',
    size: 'half',
    impact: 'Mejora en rendimiento y tiempos de procesamiento mediante paralelización.',
    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_SB.svg',
    clientName: 'Scotiabank',
  },
  {
    title: 'MAIL-CONSUMER – Scotiabank',
    context: 'IDM Technology · Scotiabank · 2026',
    desc: 'Optimización de servicio batch para consumo de colas AS400 e integración con Kafka.',
    stack: 'Spring Boot',
    tags: ['AS400', 'Kafka', 'SonarQube', 'CI/CD', 'Jenkins', 'ArgoCD', 'BlackDuck', 'Checkmarx', 'Bitbucket', 'Postman', 'Arquitectura Hexagonal'],
    year: 2026,
    duration: '4 Meses',
    size: 'half',
    impact: 'Mejora en rendimiento y tiempos de procesamiento mediante paralelización.',
    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_SB.svg',
    clientName: 'Scotiabank',
  },
  {
    title: 'GESINTEL – Scotiabank',
    context: 'IDM Technology · Scotiabank · 2026',
    desc: 'Sistema para validación de personas PEP, sancionadas y entidades financieras.',
    stack: 'React · Spring Boot',
    tags: ['SonarQube', 'CI/CD', 'Jenkins', 'ArgoCD', 'BlackDuck', 'Checkmarx', 'Bitbucket', 'Postman'],
    year: 2026,
    duration: '4 Meses',
    size: 'half',
    impact: 'Mejora en seguridad, estabilidad y actualización tecnológica del sistema.',
    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_SB.svg',
    clientName: 'Scotiabank',
  },
  {
    title: 'BFF – Scotiabank',
    context: 'IDM Technology · Scotiabank · 2026',
    desc: 'Desarrollo de BFF para orquestación y consumo de servicios backend.',
    stack: 'Spring Boot',
    tags: ['SonarQube', 'CI/CD', 'Jenkins', 'ArgoCD', 'BlackDuck', 'Checkmarx', 'Bitbucket', 'Postman', 'Arquitectura Hexagonal'],
    year: 2026,
    duration: '4 Meses',
    size: 'half',
    impact: 'Mejora en la seguridad del consumo de servicios',
    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_SB.svg',
    clientName: 'Scotiabank',
  },
  {
    title: 'Validation-Listener – Scotiabank',
    context: 'IDM Technology · Scotiabank · 2026',
    desc: 'Implementación de servicio listener para consumo de colas AS400.',
    stack: 'Spring Boot',
    tags: ['AS400', 'Redis', 'Kafka', 'SonarQube', 'CI/CD', 'Jenkins', 'ArgoCD', 'BlackDuck', 'Checkmarx', 'Bitbucket', 'Postman', 'Arquitectura Hexagonal'],
    year: 2026,
    duration: '4 Meses',
    size: 'half',
    impact: 'Optimización del tiempo de respuesta',
    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_SB.svg',
    clientName: 'Scotiabank',
  },
  {
    title: 'Validation-API – Scotiabank',
    context: 'IDM Technology · Scotiabank · 2026',
    desc: 'API para validación de personas PEP.',
    stack: 'Spring Boot',
    tags: ['SonarQube', 'CI/CD', 'Jenkins', 'ArgoCD', 'BlackDuck', 'Checkmarx', 'Bitbucket', 'Postman', 'Arquitectura Hexagonal'],
    year: 2026,
    duration: '4 Meses',
    size: 'half',
    impact: 'Mejora en rendimiento y calidad de código',
    companyLogo: '/imagen/LOGO_IDM.svg',
    companyName: 'IDM Technology',
    clientLogo: '/imagen/LOGO_SB.svg',
    clientName: 'Scotiabank',
  },

  // =========================
  // 🟠 INTEGRATEL (INDRA)
  // =========================
  {
    title: 'Expediente Virtual – INTEGRATEL',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',
    desc: 'Desarrollo de módulos en sistema de expedientes digitales.',
    stack: 'Angular',
    tags: ['Azure AD B2C', 'Jasmine', 'Karma', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2024,
    duration: '4 Meses',
    size: 'half',
    impact: 'Reducción de incidencias en producción',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
  },
  {
    title: 'Expediente Virtual – Bandeja SAR',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',
    desc: 'Módulo de bandeja SAR.',
    stack: 'Angular · Spring Boot',
    tags: ['Figma', 'Jasmine', 'Karma', 'Mockito', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2024,
    duration: '4 Meses',
    size: 'regular',
    impact: 'Optimización del flujo',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
  },
  {
    title: 'PACIFYC – INTEGRATEL',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',
    desc: 'Plataforma de gestión interna.',
    stack: 'Angular · Spring Boot',
    tags: ['PL/SQL', 'Jasmine', 'Karma', 'Mockito', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2024,
    duration: '8 Meses',
    size: 'regular',
    impact: 'Migración de procesos',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
  },
  {
    title: 'SIVADAC – INTEGRATEL',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',
    desc: 'Validación documental.',
    stack: 'Angular',
    tags: ['Figma', 'Jasmine', 'Karma', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2024,
    duration: '8 Meses',
    size: 'regular',
    impact: 'Reducción de errores',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
  },
  {
    title: 'Jerarquía de Ventas – INTEGRATEL',
    context: 'INDRA PERÚ · INTEGRATEL · 2025',
    desc: 'Gestión jerárquica.',
    stack: 'Angular · React · Spring Boot',
    tags: ['Oracle', 'Jasmine', 'Karma', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2025,
    duration: '8 Meses',
    size: 'half',
    impact: 'Optimización comercial',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
  },
  {
    title: 'SISTEC – INTEGRATEL',
    context: 'INDRA PERÚ · INTEGRATEL · 2025',
    desc: 'Sistema interno.',
    stack: 'Angular · Spring Boot',
    tags: ['PL/SQL', 'Oracle', 'Jasmine', 'Karma', 'Mockito', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2025,
    duration: '10 Meses',
    size: 'half',
    impact: 'Optimización procesos',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_INTEGRATEL.svg',
    clientName: 'INTEGRATEL',
  },

  // =========================
  // 🔵 CLARO
  // =========================
  {
    title: 'Botón de Pago – CLARO',
    context: 'INDRA PERÚ · CLARO · 2025',
    desc: 'Integración de pagos.',
    stack: 'Angular · Spring Boot',
    tags: ['Jest', 'Mockito', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman', 'OWASP ZAP'],
    year: 2025,
    duration: '12 Meses',
    size: 'half',
    impact: 'Mejora en confiabilidad',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_CLARO.svg',
    clientName: 'CLARO',
  },
  {
    title: 'WEB INCIDENTES – CLARO',
    context: 'INDRA PERÚ · CLARO · 2025',
    desc: 'Sistema web para la gestión de incidentes',
    stack: 'Angular · Spring Boot',
    tags: ['BFF', 'Jest', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman', 'OWASP ZAP'],
    year: 2025,
    duration: '8 Meses',
    size: 'half',
    impact: 'Optimización y migración en nuevos lineamientos actualizados a la fecha',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_CLARO.svg',
    clientName: 'CLARO',
  },
  {
    title: 'PCD – CLARO',
    context: 'INDRA PERÚ · CLARO · 2025',
    desc: 'Control documental.',
    stack: 'Angular · Spring Boot',
    tags: ['BFF', 'Jest', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman', 'OWASP ZAP'],
    year: 2025,
    duration: '8 Meses',
    size: 'half',
    impact: 'Mejor control de flujos',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_CLARO.svg',
    clientName: 'CLARO',
  },

  {
    title: 'Botón de Pago (BFF) – CLARO',
    context: 'INDRA PERÚ · CLARO · 2025',
    desc: 'Desarrollo de BFF para orquestación y consumo de servicios backend.',
    stack: 'Node.js',
    tags: ['SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman', 'Testing'],
    year: 2026,
    duration: '4 Meses',
    size: 'half',
    impact: 'Mejora en la seguridad del consumo de servicios',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_CLARO.svg',
    clientName: 'CLARO',
  },

  {
    title: 'WEB INCIDENTES (BFF) – CLARO',
    context: 'INDRA PERÚ · CLARO · 2025',
    desc: 'Desarrollo de BFF para orquestación y consumo de servicios backend.',
    stack: 'Node.js',
    tags: ['SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman', 'Testing'],
    year: 2026,
    duration: '4 Meses',
    size: 'half',
    impact: 'Mejora en la seguridad del consumo de servicios',
    companyLogo: '/imagen/LOGO_INDRA.svg',
    companyName: 'INDRA PERÚ',
    clientLogo: '/imagen/LOGO_CLARO.svg',
    clientName: 'CLARO',
  },

  // =========================
  // 🟣 RENIEC
  // =========================
  {
    title: 'SIGED – RENIEC',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',
    desc: 'Sistema de gestión documental.',
    stack: 'Angular · React · Spring Boot',
    tags: ['Angular Material', 'PL/SQL', 'Jasmine', 'Karma', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2023,
    duration: '8 Meses',
    size: 'featured',
    impact: 'Modernización del sistema',
    companyLogo: '/imagen/LOGO_CC.svg',
    companyName: 'CLOUDCOMPUTING PERÚ S.A.C',
    clientLogo: '/imagen/LOGO_RENIEC.svg',
    clientName: 'RENIEC',
  },
  {
    title: 'Mesa de Partes Virtual – RENIEC',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',
    desc: 'Mesa de partes virtual.',
    stack: 'Angular · React · Spring Boot',
    tags: ['Bootstrap', 'Jasmine', 'Karma', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2023,
    duration: '7 Meses',
    size: 'regular',
    impact: 'Digitalización',
    companyLogo: '/imagen/LOGO_CC.svg',
    companyName: 'CLOUDCOMPUTING PERÚ S.A.C',
    clientLogo: '/imagen/LOGO_RENIEC.svg',
    clientName: 'RENIEC',
  },
  {
    title: 'Módulo Usuario Final – RENIEC',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',
    desc: 'Módulo de usuario.',
    stack: 'Angular · React · Spring Boot',
    tags: ['PL/SQL', 'Jasmine', 'Karma', 'Mockito', 'SonarQube', 'CI/CD', 'Bitbucket', 'Postman'],
    year: 2023,
    duration: '8 Meses',
    size: 'regular',
    impact: 'Mejora UX',
    companyLogo: '/imagen/LOGO_CC.svg',
    companyName: 'CLOUDCOMPUTING PERÚ S.A.C',
    clientLogo: '/imagen/LOGO_RENIEC.svg',
    clientName: 'RENIEC',
  },
  {
    title: 'Migración SIGED a JBoss – RENIEC',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',
    desc: 'Migración a JBoss.',
    stack: 'Angular · React · Spring Boot',
    tags: ['JBoss', 'Jasmine', 'Karma', 'SonarQube', 'CI/CD', 'Jenkins', 'Bitbucket', 'Postman'],
    year: 2023,
    duration: '8 Meses',
    size: 'half',
    impact: 'Mejora de estabilidad',
    companyLogo: '/imagen/LOGO_CC.svg',
    companyName: 'CLOUDCOMPUTING PERÚ S.A.C',
    clientLogo: '/imagen/LOGO_RENIEC.svg',
    clientName: 'RENIEC',
  },

  // =========================
  // 🎓 PERSONAL / OTROS
  // =========================
  {
    title: 'Sistema de Lenguaje de Señas - UA',
    context: 'TESIS · 2025',
    desc: 'Reconocimiento de gestos de lenguaje de señas para personas sordomudas',
    stack: 'Angular · Flask · Node.js',
    tags: ['MongoDB Atlas', 'OpenCV', 'TensorFlow', 'Keras', 'MediaPipe'],
    year: 2025,
    duration: '6 Meses',
    size: 'half',
    impact: 'Sistema funcional en tiempo real para gente sordomuda',
    companyLogo: '/imagen/LOGO_UA.svg',
    companyName: 'Universidad Autónoma del Perú',
    clientLogo: '/imagen/FOTO.svg',
    clientName: 'Diego Gonzalez',
  },
  {
    title: 'Gestión de Apuestas Deportivas - PERSONAL',
    context: 'PROYECTO PERSONAL · 2025',
    desc: 'Sistema de apuestas.',
    stack: 'Angular · Node.js',
    tags: ['MongoDB Atlas', 'Jasmine', 'Karma', 'SonarQube', 'Postman'],
    year: 2025,
    duration: '4 Meses',
    size: 'half',
    impact: 'Centralización de apuestas',
    companyLogo: '/imagen/FOTO.svg',
    companyName: 'Diego Gonzalez',
  },
  {
    title: 'Detección de Mascarilla (Expotec 2021) - UA',
    context: 'Universidad Autónoma del Perú',
    desc: 'Visión por computadora.',
    stack: 'Python · Flask · Angular',
    tags: ['OpenCV', 'TensorFlow', 'Keras'],
    year: 2021,
    duration: '4 Meses',
    size: 'half',
    impact: '1er puesto',
    companyLogo: '/imagen/LOGO_UA.svg',
    companyName: 'Universidad Autónoma del Perú',
    clientLogo: '/imagen/FOTO.svg',
    clientName: 'Diego Gonzalez',
  }

];
