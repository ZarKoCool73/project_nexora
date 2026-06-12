export interface Experience {
  idExperience: string;
  period: string;
  role: string;
  company: string;
  description: string;
  months?: number;
  startDate?: string;
  logo:string;
}

export const EXPERIENCE: Experience[] = [
  {
    period: 'Feb 2026 — Actualidad',
    logo:'/imagen/LOGO_IDM.svg',
    role: 'FullStack',
    company: 'IDM Technology',
    idExperience: 'idm-technology',
    startDate: '2026-02',
    description:
      'Desarrollo y mantenimiento de soluciones Full Stack para plataformas empresariales del cliente Scotiabank, implementando funcionalidades frontend y backend orientadas a rendimiento, escalabilidad y mantenibilidad. ' +
      'Participé en la integración de servicios y APIs, atención de incidencias productivas y mejora continua de sistemas críticos bajo metodologías ágiles y estándares corporativos de calidad.'
  },

  {
    period: 'Sep 2025 — Ene 2026',
    logo:'/imagen/LOGO_INDRA.svg',
    role: 'Analista Programador FullStack',
    company: 'INDRA',
    idExperience: 'indra',
    months: 5,
    description:
      'Desarrollé soluciones Full Stack utilizando Angular y Spring Boot, participando en el análisis técnico, implementación de funcionalidades y despliegues productivos bajo metodologías ágiles. ' +
      'Participé en el desarrollo y mantenimiento de BFFs, así como en la actualización y ejecución de pruebas unitarias para frontend y backend. ' +
      'Contribuí al levantamiento y remediación de vulnerabilidades de seguridad aplicando análisis con OWASP ZAP.'
  },

  {
    period: 'May 2024 — May 2025',
    logo:'/imagen/LOGO_MINSAIT.svg',
    role: 'Analista Programador FullStack',
    company: 'Minsait',
    idExperience: 'minsait',
    months: 13,
    description:
      'Desarrollé módulos e interfaces frontend de alto rendimiento utilizando Angular, React, Spring Boot para soluciones empresariales orientadas al cliente INTEGRATEL. ' +
      'Participé en la integración de microservicios y APIs backend, contribuyendo a arquitecturas escalables y mantenibles. ' +
      'Implementé pruebas unitarias y participé en procesos de integración y despliegue continuo (CI/CD) utilizando Jenkins, Bitbucket y Azure AD B2C.'
  },

  {
    period: 'Ene 2024 — Mar 2024',
    role: 'Programador / Soporte de Sistemas',
    logo:'/imagen/LOGO_DINET.svg',
    company: 'DINET Operador Logístico',
    idExperience: 'dinet',
    months: 3,
    description:
      'Brindé soporte funcional y técnico mediante atención de incidencias bajo esquema de tickets, asegurando la continuidad operativa de sistemas internos. ' +
      'Participé en el análisis y optimización de flujos logísticos y operativos, identificando mejoras de rendimiento y eficiencia. ' +
      'Realicé refactorización de código y optimización de consultas SQL para mejorar la estabilidad, mantenibilidad y performance de la plataforma. ' +
      'Capacité a usuarios finales en el uso de herramientas corporativas.'
  },

  {
    period: 'Mar 2022 — Jun 2023',
    logo:'/imagen/LOGO_CC.svg',
    role: 'Analista Programador',
    company: 'CloudComputing Perú S.A.C.',
    idExperience: 'cloudComputing',
    months: 16,
    description:
      'Participé en el desarrollo de módulos empresariales, menús dinámicos e interfaces web orientadas a entidades públicas como RENIEC, MINAM y OEFA. ' +
      'Implementé soluciones frontend escalables y responsivas utilizando Angular, React y Flutter, integrando APIs REST y microservicios. ' +
      'Lideré la resolución de incidencias en entornos productivos y participé en mejoras orientadas a estabilidad, rendimiento y continuidad operativa.'
  }
];
