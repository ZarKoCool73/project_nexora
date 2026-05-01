export interface Project {
  title: string;
  desc: string;
  tags: string[];
  stack: string;
  year: number;
  size: 'featured' | 'regular' | 'half';
  url?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Expediente Virtual – Telefónica',
    desc: 'Sistema de gestión de expedientes digitales. Participación en desarrollo de módulos, corrección de observaciones en producción, integración con autenticación B2C y mejoras de rendimiento.',
    tags: ['Angular', 'Azure AD B2C', 'Jasmine', 'Karma', 'SonarQube'],
    stack: 'Angular · Bitbucket · Jenkins · Azure',
    year: 2025,
    size: 'featured'
  },

  {
    title: 'Expediente Virtual – Bandeja SAR',
    desc: 'Módulo de bandeja de atención SAR para gestión y trazabilidad de solicitudes en sistema de expedientes.',
    tags: ['Angular', 'Figma', 'Jasmine', 'Karma'],
    stack: 'Angular · Jenkins · SonarQube',
    year: 2025,
    size: 'regular'
  },

  {
    title: 'PACIFYC – Plataforma de gestión',
    desc: 'Sistema corporativo con integración frontend y backend para gestión de procesos internos y validaciones de negocio.',
    tags: ['Angular', 'Spring Boot', 'PL/SQL', 'Jenkins'],
    stack: 'Angular · Java · Oracle DB',
    year: 2025,
    size: 'featured'
  },

  {
    title: 'Jerarquía de Ventas',
    desc: 'Módulo de análisis y gestión de jerarquías comerciales para estructura de ventas empresariales.',
    tags: ['Angular', 'Spring Boot', 'PL/SQL'],
    stack: 'Angular · Java · Oracle',
    year: 2024,
    size: 'regular'
  },

  {
    title: 'SIVADAC – Sistema de validación documental',
    desc: 'Desarrollo de módulos frontend con enfoque en validación documental y experiencia de usuario.',
    tags: ['Angular', 'Figma', 'Jasmine'],
    stack: 'Angular · SonarQube · Jenkins',
    year: 2025,
    size: 'regular'
  },

  {
    title: 'SISTEC – Sistema de gestión interna',
    desc: 'Sistema de gestión interna con consumo de microservicios y optimización de procesos backend y frontend.',
    tags: ['Angular', 'Spring Boot', 'PL/SQL'],
    stack: 'Angular · Java · Oracle · Jenkins',
    year: 2024,
    size: 'featured'
  },

  {
    title: 'Botón de Pago',
    desc: 'Módulo de integración de pagos con validaciones backend y pruebas automatizadas.',
    tags: ['Angular', 'Spring Boot', 'Jest'],
    stack: 'Angular · Java · CI/CD',
    year: 2024,
    size: 'half'
  },

  {
    title: 'PCD – Plataforma de control documental',
    desc: 'Sistema de control documental con arquitectura modular y validación de flujos de negocio.',
    tags: ['Angular', 'Spring Boot', 'Jest'],
    stack: 'Angular · Java · Jenkins',
    year: 2024,
    size: 'half'
  },

  {
    title: 'SIGED – RENIEC (Gestión Documental)',
    desc: 'Sistema de gestión documental para RENIEC con migración, mantenimiento e integración de módulos en entorno corporativo.',
    tags: ['Angular', 'Angular Material', 'Spring Boot', 'PL/SQL'],
    stack: 'Angular · Java · Oracle · Cloud',
    year: 2023,
    size: 'featured'
  },

  {
    title: 'Mesa de Partes Virtual – SIGED',
    desc: 'Desarrollo e integración de mesa de partes virtual conectada al sistema de gestión documental SIGED.',
    tags: ['Angular', 'Bootstrap', 'Spring Boot'],
    stack: 'Angular · Java · Oracle DB',
    year: 2023,
    size: 'regular'
  },

  {
    title: 'Módulo Usuario Final – SIGED',
    desc: 'Implementación del módulo de usuario final para gestión electrónica de documentos en plataforma Angular + Java.',
    tags: ['Angular', 'Spring Boot', 'PL/SQL'],
    stack: 'Angular · Java · Oracle',
    year: 2023,
    size: 'regular'
  },

  {
    title: 'Migración SIGED a JBoss',
    desc: 'Servicio de migración e implementación del sistema SIGED hacia servidor de aplicaciones JBoss.',
    tags: ['Angular', 'Spring Boot', 'JBoss'],
    stack: 'Angular · Java · DevOps',
    year: 2023,
    size: 'half'
  }
];
