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
    stack: 'Angular · Bitbucket · Jenkins · Azure',
    year: 2025,
    size: 'featured',
    impact: 'Estabilización de módulos críticos y reducción de incidencias en producción'
  },

  {
    title: 'Expediente Virtual – Bandeja SAR',
    context: 'INDRA PERÚ · INTEGRATEL',
    desc: 'Módulo de bandeja SAR para trazabilidad y atención de expedientes.',
    tags: ['Angular', 'Figma', 'Jasmine', 'Karma'],
    stack: 'Angular · Jenkins · SonarQube',
    year: 2025,
    size: 'regular',
    impact: 'Optimización del flujo de atención de solicitudes'
  },

  {
    title: 'PACIFYC – Plataforma de gestión',
    context: 'INDRA PERÚ · INTEGRATEL',
    desc: 'Plataforma fullstack para gestión de procesos internos con reglas de negocio.',
    tags: ['Angular', 'Spring Boot', 'PL/SQL', 'Jenkins'],
    stack: 'Angular · Java · Oracle DB',
    year: 2025,
    size: 'featured',
    impact: 'Migración de procesos internos'
  },

  {
    title: 'Jerarquía de Ventas',
    context: 'INDRA PERÚ · INTEGRATEL',
    desc: 'Gestión de estructuras jerárquicas para análisis de ventas.',
    tags: ['Angular', 'Spring Boot', 'PL/SQL'],
    stack: 'Angular · Java · Oracle',
    year: 2024,
    size: 'regular',
    impact: 'Mejora en análisis de estructura comercial'
  },

  {
    title: 'SIVADAC – Validación documental',
    context: 'INDRA PERÚ · INTEGRATEL',
    desc: 'Módulos frontend enfocados en validación documental y UX.',
    tags: ['Angular', 'Figma', 'Jasmine'],
    stack: 'Angular · SonarQube · Jenkins',
    year: 2025,
    size: 'regular',
    impact: 'Reducción de errores en validación de documentos'
  },

  {
    title: 'SISTEC – Sistema interno',
    context: 'INDRA PERÚ · INTEGRATEL',
    desc: 'Sistema de gestión interna con microservicios y optimización de procesos.',
    tags: ['Angular', 'Spring Boot', 'PL/SQL'],
    stack: 'Angular · Java · Oracle · Jenkins',
    year: 2024,
    size: 'featured',
    impact: 'Optimización de procesos backend y frontend'
  },
  {
    title: 'Botón de Pago',
    context: 'INDRA PERÚ · CLARO',
    desc: 'Integración de pagos con validaciones backend y pruebas automatizadas.',
    tags: ['Angular', 'Spring Boot', 'Jest'],
    stack: 'Angular · Java · CI/CD',
    year: 2024,
    size: 'half',
    impact: 'Mejora en confiabilidad de transacciones'
  },
  {
    title: 'PCD – Control documental',
    context: 'INDRA PERÚ · CLARO',
    desc: 'Sistema de control documental con arquitectura modular.',
    tags: ['Angular', 'Spring Boot', 'Jest'],
    stack: 'Angular · Java · Jenkins',
    year: 2024,
    size: 'half',
    impact: 'Mejor control de flujos documentarios'
  },
  {
    title: 'SIGED – RENIEC',
    context: 'Cloud Computing · RENIEC',
    desc: 'Sistema de gestión documental con migración, mantenimiento e integración de módulos.',
    tags: ['Angular', 'Angular Material', 'Spring Boot', 'PL/SQL'],
    stack: 'Angular · Java · Oracle · Cloud',
    year: 2023,
    size: 'featured',
    impact: 'Modernización del sistema de gestión documental'
  },

  {
    title: 'Mesa de Partes Virtual – SIGED',
    context: 'Cloud Computing · RENIEC',
    desc: 'Implementación de mesa de partes virtual integrada al SIGED.',
    tags: ['Angular', 'Bootstrap', 'Spring Boot'],
    stack: 'Angular · Java · Oracle DB',
    year: 2023,
    size: 'regular',
    impact: 'Digitalización del ingreso de documentos'
  },

  {
    title: 'Módulo Usuario Final – SIGED',
    context: 'Cloud Computing · RENIEC',
    desc: 'Desarrollo del módulo de usuario final para gestión electrónica.',
    tags: ['Angular', 'Spring Boot', 'PL/SQL'],
    stack: 'Angular · Java · Oracle',
    year: 2023,
    size: 'regular',
    impact: 'Mejora de experiencia del usuario final'
  },

  {
    title: 'Migración SIGED a JBoss',
    context: 'Cloud Computing · RENIEC',
    desc: 'Migración del sistema SIGED a servidor de aplicaciones JBoss.',
    tags: ['Angular', 'Spring Boot', 'JBoss'],
    stack: 'Angular · Java · DevOps',
    year: 2023,
    size: 'half',
    impact: 'Mejora de estabilidad del sistema'
  }
];
