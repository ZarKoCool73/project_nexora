export interface Project {
  title: string;
  desc: string;
  tags: string[];
  stack: string;
  year: number;
  size: 'featured' | 'regular' | 'half';
  url?: string;

  context?: string;
  impact?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Expediente Virtual – INTEGRATEL',
    context: 'INDRA PERÚ · INTEGRATEL',
    desc: 'Desarrollo de módulos en sistema de expedientes digitales con integración Azure AD B2C y mantenimiento en producción.',
    tags: ['Angular', 'Azure AD B2C', 'Jasmine', 'Karma', 'SonarQube'],
    stack: 'Angular · Bitbucket · Jenkins · Azure · SonarQube',
    year: 2024,
    size: 'featured',
    impact: 'Estabilización de módulos críticos y reducción de incidencias en producción'
  },

  {
    title: 'Expediente Virtual – Bandeja SAR',
    context: 'INDRA PERÚ · INTEGRATEL',
    desc: 'Módulo de bandeja SAR para trazabilidad y atención de expedientes.',
    tags: ['Angular', 'Figma', 'Jasmine', 'Karma', 'SonarQube'],
    stack: 'Angular · Jenkins · SonarQube',
    year: 2024,
    size: 'regular',
    impact: 'Optimización del flujo de atención de solicitudes'
  },

  {
    title: 'PACIFYC – Plataforma de gestión',
    context: 'INDRA PERÚ · INTEGRATEL',
    desc: 'Plataforma fullstack para gestión de procesos internos con reglas de negocio.',
    tags: ['Angular', 'Spring Boot', 'PL/SQL', 'Jasmine', 'Karma', 'SonarQube'],
    stack: 'Angular · Java · Oracle DB · SonarQube',
    year: 2024,
    size: 'featured',
    impact: 'Migración de procesos internos'
  },

  {
    title: 'Gestión de Apuestas Deportivas',
    context: 'Proyecto personal · Fullstack',
    desc: 'Sistema fullstack para la gestión y control de apuestas deportivas, con registro de jugadas, validación de datos y seguimiento de resultados en tiempo real.',
    tags: ['Angular', 'Node.js', 'MongoDB Atlas', 'REST API', 'SonarQube'],
    stack: 'Angular · Node.js · Express · MongoDB Atlas · SonarQube',
    year: 2025,
    size: 'regular',
    impact: 'Centralización del control de apuestas y mejora en la trazabilidad de operaciones y resultados'
  },

  {
    title: 'Jerarquía de Ventas',
    context: 'INDRA PERÚ · INTEGRATEL',
    desc: 'Desarrollo de un módulo para la gestión jerárquica de ventas, permitiendo el control de productos, promociones y estructuras comerciales para análisis y toma de decisiones.',
    tags: ['Angular', 'Spring Boot', 'PL/SQL', 'Oracle', 'Jasmine', 'Karma', 'SonarQube'],
    stack: 'Angular · Java · Spring Boot · Oracle · SonarQube',
    year: 2025,
    size: 'featured',
    impact: 'Optimización del análisis comercial mediante una estructura jerárquica de ventas y mejora en la toma de decisiones del negocio'
  },

  {
    title: 'SIVADAC – Validación documental',
    context: 'INDRA PERÚ · INTEGRATEL',
    desc: 'Módulos frontend enfocados en validación documental y UX.',
    tags: ['Angular', 'Figma', 'Jasmine', 'Karma', 'SonarQube'],
    stack: 'Angular · SonarQube · Jenkins',
    year: 2024,
    size: 'regular',
    impact: 'Reducción de errores en validación de documentos'
  },

  {
    title: 'SISTEC – Sistema interno',
    context: 'INDRA PERÚ · INTEGRATEL',
    desc: 'Sistema de gestión interna con microservicios y optimización de procesos.',
    tags: ['Angular', 'Spring Boot', 'PL/SQL', 'Jasmine', 'Karma', 'SonarQube'],
    stack: 'Angular · Java · Oracle · Jenkins · SonarQube',
    year: 2025,
    size: 'featured',
    impact: 'Optimización de procesos backend y frontend'
  },

  {
    title: 'Botón de Pago',
    context: 'INDRA PERÚ · CLARO',
    desc: 'Integración de pagos con validaciones backend y pruebas automatizadas.',
    tags: ['Angular', 'Spring Boot', 'Jest', 'SonarQube'],
    stack: 'Angular · Java · CI/CD · SonarQube',
    year: 2025,
    size: 'half',
    impact: 'Mejora en confiabilidad de transacciones'
  },

  {
    title: 'PCD – Control documental',
    context: 'INDRA PERÚ · CLARO',
    desc: 'Sistema de control documental con arquitectura modular.',
    tags: ['Angular', 'Spring Boot', 'Jest', 'SonarQube'],
    stack: 'Angular · Java · Jenkins · SonarQube',
    year: 2025,
    size: 'half',
    impact: 'Mejor control de flujos documentarios'
  },

  {
    title: 'SIGED – RENIEC',
    context: 'Cloud Computing · RENIEC',
    desc: 'Sistema de gestión documental con migración, mantenimiento e integración de módulos.',
    tags: ['Angular', 'Angular Material', 'Spring Boot', 'PL/SQL', 'Jasmine', 'Karma', 'SonarQube'],
    stack: 'Angular · Java · Oracle · Cloud · SonarQube',
    year: 2023,
    size: 'featured',
    impact: 'Modernización del sistema de gestión documental'
  },

  {
    title: 'Mesa de Partes Virtual – SIGED',
    context: 'Cloud Computing · RENIEC',
    desc: 'Implementación de mesa de partes virtual integrada al SIGED.',
    tags: ['Angular', 'Bootstrap', 'Spring Boot', 'Jasmine', 'Karma', 'SonarQube'],
    stack: 'Angular · Java · Oracle DB · SonarQube',
    year: 2023,
    size: 'regular',
    impact: 'Digitalización del ingreso de documentos'
  },

  {
    title: 'Módulo Usuario Final – SIGED',
    context: 'Cloud Computing · RENIEC',
    desc: 'Desarrollo del módulo de usuario final para gestión electrónica.',
    tags: ['Angular', 'Spring Boot', 'PL/SQL', 'Jasmine', 'Karma', 'SonarQube'],
    stack: 'Angular · Java · Oracle · SonarQube',
    year: 2023,
    size: 'regular',
    impact: 'Mejora de experiencia del usuario final'
  },

  {
    title: 'Migración SIGED a JBoss',
    context: 'Cloud Computing · RENIEC',
    desc: 'Migración del sistema SIGED a servidor de aplicaciones JBoss.',
    tags: ['Angular', 'Spring Boot', 'JBoss', 'Jasmine', 'Karma', 'SonarQube'],
    stack: 'Angular · Java · DevOps · SonarQube',
    year: 2023,
    size: 'half',
    impact: 'Mejora de estabilidad del sistema'
  }
];
