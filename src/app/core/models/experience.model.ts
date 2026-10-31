export type ExperienceType = 'DIRECT' | 'CONSULTING';

export interface Experience {
  idExperience: string;
  period: string;
  role: string;
  company: string;
  description: string;
  logo: string;
  type: ExperienceType;
  startDate: string;
  endDate?: string;
  months?: number;
}

export const EXPERIENCE: Experience[] = [

  // BANCO ALFIN
  {
    idExperience: 'banco-alfin',
    period: 'Agosto 2026 — Actualidad',
    startDate: '2026-08',
    role: 'Desarrollador Full Stack',
    company: 'Banco Alfin',
    logo: '/imagen/LOGO_ALFIN.svg',
    type: 'DIRECT',
    description:
      'Desarrollo y mantenimiento de soluciones tecnológicas para el sector financiero, participando en la implementación de funcionalidades frontend y backend para el proyecto EVACRED. ' +
      'Desarrollo de interfaces web utilizando Angular y TypeScript, integración de servicios REST y construcción de componentes reutilizables. ' +
      'Implementación de pruebas unitarias con Jasmine y Karma, aplicación de patrones de diseño y buenas prácticas orientadas a la calidad, escalabilidad y mantenibilidad del software.'
  },

  // IDM TECHNOLOGY
  {
    idExperience: 'idm-technology',
    period: 'Febrero 2026 — Julio 2026',
    startDate: '2026-02',
    role: 'Full Stack Engineer Intermedio',
    company: 'IDM Technology',
    logo: '/imagen/LOGO_IDM.svg',
    type: 'CONSULTING',
    months: 6,
    description:
      'Desarrollo de soluciones Full Stack para el sector bancario, participando en el proyecto de Scotiabank mediante la implementación y mantenimiento de componentes frontend y servicios backend. ' +
      'Desarrollo de interfaces utilizando React y TypeScript, construcción de servicios BFF con Spring Boot e integración con sistemas empresariales. ' +
      'Participación en la modernización de aplicaciones, migración de Java 17 a Java 25, integración de mensajería mediante Apache Kafka y optimización de procesos de despliegue con Docker, Kubernetes y ArgoCD. ' +
      'Remediación de vulnerabilidades y análisis de seguridad utilizando Checkmarx y Black Duck.'
  },

  // INDRA / MINSAIT
  {
    idExperience: 'indra',
    period: 'Septiembre 2025 — Enero 2026',
    startDate: '2025-09',
    role: 'Analista Programador Full Stack',
    company: 'INDRA',
    logo: '/imagen/LOGO_INDRA.svg',
    type: 'CONSULTING',
    months: 5,
    description:
      'Desarrollo y mantenimiento de soluciones empresariales para el sector de telecomunicaciones, participando en proyectos para el cliente Claro. ' +
      'Implementación de funcionalidades frontend utilizando Angular y servicios backend con Java y Spring Boot, aplicando buenas prácticas de desarrollo y patrones de diseño. ' +
      'Desarrollo e integración de servicios BFF y APIs REST, ejecución de pruebas unitarias y participación en despliegues productivos. ' +
      'Análisis y remediación de vulnerabilidades de seguridad mediante herramientas de análisis estático y dinámico.'
  },

  // MINSAIT
  {
    idExperience: 'minsait',
    period: 'Mayo 2024 — Mayo 2025',
    startDate: '2024-05',
    role: 'Analista Programador Full Stack',
    company: 'Minsait',
    logo: '/imagen/LOGO_MINSAIT.svg',
    type: 'CONSULTING',
    months: 13,
    description:
      'Desarrollo de soluciones web empresariales para el sector de telecomunicaciones, participando en proyectos orientados al cliente Integratel. ' +
      'Implementación de interfaces frontend utilizando Angular y React, junto con servicios backend desarrollados con Java y Spring Boot. ' +
      'Integración de microservicios y APIs REST, desarrollo de componentes reutilizables y optimización de funcionalidades. ' +
      'Implementación de pruebas unitarias y participación en procesos de integración y despliegue continuo (CI/CD) utilizando Jenkins, Bitbucket y Azure AD B2C.'
  },

  // DINET
  {
    idExperience: 'dinet',
    period: 'Enero 2024 — Marzo 2024',
    startDate: '2024-01',
    role: 'Programador / Soporte de Sistemas',
    company: 'DINET Operador Logístico',
    logo: '/imagen/LOGO_DINET.svg',
    type: 'DIRECT',
    months: 3,
    description:
      'Desarrollo, mantenimiento y soporte de aplicaciones empresariales para operaciones logísticas. ' +
      'Atención y resolución de incidencias funcionales y técnicas mediante sistemas de gestión de tickets, garantizando la continuidad operativa. ' +
      'Optimización de consultas SQL, refactorización de código y mejora de procesos internos. ' +
      'Capacitación y asistencia técnica a usuarios finales en el uso de herramientas corporativas.'
  },

  // CLOUDCOMPUTING PERÚ
  {
    idExperience: 'cloudComputing',
    period: 'Marzo 2022 — Junio 2023',
    startDate: '2022-03',
    role: 'Analista Programador',
    company: 'CloudComputing Perú S.A.C.',
    logo: '/imagen/LOGO_CC.svg',
    type: 'CONSULTING',
    months: 16,
    description:
      'Desarrollo de soluciones y sistemas empresariales para entidades públicas como RENIEC, MINAM y OEFA. ' +
      'Implementación de módulos funcionales, interfaces web, menús dinámicos y componentes reutilizables utilizando Angular, React y Flutter. ' +
      'Integración de servicios REST y microservicios, optimización de consultas SQL y mantenimiento de aplicaciones empresariales. ' +
      'Participación en la resolución de incidencias productivas y mejoras orientadas al rendimiento, estabilidad y continuidad operativa.'
  }

];

