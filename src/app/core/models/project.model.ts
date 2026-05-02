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
}

export const PROJECTS: Project[] = [

  {
    title: 'Expediente Virtual – INTEGRATEL',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',
    desc: 'Desarrollo de módulos en sistema de expedientes digitales con integración Azure AD B2C y mantenimiento en producción.',
    stack: 'Angular',
    tags: ['Azure AD B2C', 'Bitbucket', 'Jenkins', 'Jasmine', 'Karma', 'SonarQube', 'Postman', 'Bitbucket', 'CI/CD'],
    year: 2024,
    duration: '4 Meses',
    size: 'featured',
    impact: 'Estabilización de módulos críticos y reducción de incidencias en producción'
  },

  {
    title: 'Expediente Virtual – Bandeja SAR',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',
    desc: 'Módulo de bandeja SAR para trazabilidad y atención de expedientes.',
    stack: 'Angular · Spring Boot',
    tags: ['Figma', 'Jasmine', 'Karma', 'SonarQube', 'Postman', 'Mockito', 'Bitbucket', 'CI/CD', 'Jenkins'],
    year: 2024,
    duration: '4 Meses',
    size: 'regular',
    impact: 'Optimización del flujo de atención de solicitudes'
  },

  {
    title: 'PACIFYC – Plataforma de gestión',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',
    desc: 'Plataforma fullstack para gestión de procesos internos con reglas de negocio.',
    stack: 'Angular · Spring Boot',
    tags: ['PL/SQL', 'Jasmine', 'Karma', 'SonarQube', 'Mockito', 'Bitbucket', 'Postman', 'CI/CD', 'Jenkins'],
    year: 2024,
    duration: '8 Meses',
    size: 'featured',
    impact: 'Migración de procesos internos'
  },

  {
    title: 'Gestión de Apuestas Deportivas',
    context: 'PROYECTO PERSONAL · FULLSTACK · 2025',
    desc: 'Sistema fullstack para la gestión y control de apuestas deportivas.',
    stack: 'Angular · Node.js · Express',
    tags: ['MongoDB Atlas', 'SonarQube', 'Jasmine', 'Karma', 'Postman'],
    year: 2025,
    duration: '4 Meses',
    size: 'regular',
    impact: 'Centralización del control de apuestas y mejora en la trazabilidad de operaciones y resultados'
  },

  {
    title: 'Jerarquía de Ventas',
    context: 'INDRA PERÚ · INTEGRATEL · 2025',
    desc: 'Módulo para gestión jerárquica de ventas y análisis comercial.',
    stack: 'Angular · React · Spring Boot',
    tags: ['Oracle', 'Jasmine', 'Karma', 'SonarQube', 'Bitbucket', 'Postman', 'CI/CD', 'Jenkins'],
    year: 2025,
    duration: '8 Meses',
    size: 'featured',
    impact: 'Optimización del análisis comercial mediante estructura jerárquica de ventas'
  },

  {
    title: 'SIVADAC – Validación documental',
    context: 'INDRA PERÚ · INTEGRATEL · 2024',
    desc: 'Módulos frontend enfocados en validación documental y UX.',
    stack: 'Angular',
    tags: ['Figma', 'Jasmine', 'Karma', 'SonarQube', 'Postman', 'Bitbucket', 'CI/CD', 'Jenkins'],
    year: 2024,
    duration: '8 Meses',
    size: 'regular',
    impact: 'Reducción de errores en validación de documentos'
  },

  {
    title: 'SISTEC – Sistema interno',
    context: 'INDRA PERÚ · INTEGRATEL · 2025',
    desc: 'Sistema de gestión interna con microservicios y optimización de procesos.',
    stack: 'Angular · Spring Boot',
    tags: ['PL/SQL', 'Oracle', 'Jenkins', 'SonarQube', 'Bitbucket', 'Postman', 'Mockito', 'Jasmine', 'Karma', 'CI/CD'],
    year: 2025,
    duration: '10 Meses',
    size: 'featured',
    impact: 'Optimización de procesos backend y frontend'
  },

  {
    title: 'Botón de Pago',
    context: 'INDRA PERÚ · CLARO · 2025',
    desc: 'Integración de pagos con validaciones backend y pruebas automatizadas.',
    stack: 'Angular · Spring Boot',
    tags: ['Jest', 'SonarQube', 'CI/CD', 'Bitbucket', 'Postman', 'Mockito', 'OWASP ZAP', 'Jenkins'],
    year: 2025,
    duration: '12 Meses',
    size: 'half',
    impact: 'Mejora en confiabilidad de transacciones'
  },

  {
    title: 'PCD – Control documental',
    context: 'INDRA PERÚ · CLARO · 2025',
    desc: 'Sistema de control documental con arquitectura modular.',
    stack: 'Angular · Spring Boot',
    tags: ['Jest', 'Jenkins', 'SonarQube', 'BFF', 'OWASP ZAP', 'Postman', 'Bitbucket', 'CI/CD'],
    year: 2025,
    duration: '8 Meses',
    size: 'half',
    impact: 'Mejor control de flujos documentarios'
  },

  {
    title: 'SIGED – RENIEC',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',
    desc: 'Sistema de gestión documental con migración e integración de módulos.',
    stack: 'Angular · React · Spring Boot',
    tags: ['Angular Material', 'PL/SQL', 'Jasmine', 'Karma', 'SonarQube', 'Bitbucket', 'Postman', 'CI/CD', 'Jenkins'],
    year: 2023,
    duration: '8 Meses',
    size: 'featured',
    impact: 'Modernización del sistema de gestión documental'
  },

  {
    title: 'Mesa de Partes Virtual – SIGED',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',
    desc: 'Implementación de mesa de partes virtual integrada al SIGED.',
    stack: 'Angular · React · Spring Boot',
    tags: ['Bootstrap', 'Jasmine', 'Karma', 'SonarQube', 'Bitbucket', 'Postman', 'CI/CD', 'Jenkins'],
    year: 2023,
    duration: '7 Meses',
    size: 'regular',
    impact: 'Digitalización del ingreso de documentos'
  },

  {
    title: 'Módulo Usuario Final – SIGED',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',
    desc: 'Módulo de usuario final para gestión electrónica.',
    stack: 'Angular · React · Spring Boot',
    tags: ['PL/SQL', 'Jasmine', 'Karma', 'SonarQube', 'Bitbucket', 'Postman', 'CI/CD', 'Mockito'],
    year: 2023,
    duration: '8 Meses',
    size: 'regular',
    impact: 'Mejora de experiencia del usuario final'
  },

  {
    title: 'Migración SIGED a JBoss',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',
    desc: 'Migración del sistema SIGED a servidor JBoss.',
    stack: 'Angular · React · Spring Boot',
    tags: ['JBoss', 'Jasmine', 'Karma', 'SonarQube', 'Bitbucket', 'Postman', 'CI/CD', 'Jenkins'],
    year: 2023,
    duration: '8 Meses',
    size: 'half',
    impact: 'Mejora de estabilidad del sistema'
  }
  ,

  {
    title: 'Migración SIGED a JBoss',
    context: 'CloudComputing Perú S.A.C. · RENIEC · 2023',
    desc: 'Migración del sistema SIGED a servidor JBoss.',
    stack: 'Angular · React · Spring Boot',
    tags: ['JBoss', 'Jasmine', 'Karma', 'SonarQube', 'Bitbucket', 'Postman', 'CI/CD', 'Jenkins'],
    year: 2023,
    duration: '8 Meses',
    size: 'regular',
    impact: 'Mejora de estabilidad del sistema'
  },

  {
    title: 'Software para la detección de mascarilla – Expotec 2021',
    context: 'Universidad Autónoma del Perú · Expotec 2021-I · Categoría Intermedia',
    desc: 'Sistema de visión por computadora para la detección de uso de mascarilla en tiempo real, como aporte a la responsabilidad social universitaria durante la pandemia.',
    stack: 'Python · Flask · Angular',
    tags: ['OpenCV', 'TensorFlow', 'Keras', 'MediaPipe', 'NumPy', 'Pandas', 'scikit-learn', 'REST API', 'Postman', 'Git'],
    year: 2021,
    duration: '4 Meses',
    size: 'featured',
    impact: 'Primer puesto en el concurso Expotec 2021-I categoría intermedia, destacando por la implementación de un modelo de detección de mascarilla aplicado a responsabilidad social universitaria'
  }

];
