export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

export const EXPERIENCE: Experience[] = [
  {
    period: 'Feb 2026 — Actualidad',
    role: 'Full Stack Engineer Intermedio',
    company: 'IDM Technology',
    description:
      'Desarrollo y evolución de aplicaciones web para el sector bancario, implementando funcionalidades tanto en frontend como backend. Integración de servicios, resolución de incidencias en producción y mejora continua del sistema bajo estándares de calidad y metodologías ágiles.'
  },

  {
    period: 'Sep 2025 — Ene 2026',
    role: 'Analista Programador Full Stack Semi Senior',
    company: 'INDRA',
    description:
      'Desarrollo de aplicaciones full stack con Angular y Spring Boot, participando en el análisis de requerimientos, implementación de funcionalidades, pruebas unitarias y despliegues a producción en entornos ágiles.'
  },

  {
    period: 'May 2024 — May 2025',
    role: 'Analista Programador Full Stack Junior',
    company: 'Minsait',
    description:
      'Implementación de soluciones web para entidades públicas y privadas, desarrollando componentes frontend en Angular e integrándolos con servicios backend. Participación en mejoras funcionales y soporte a sistemas en producción.'
  },

  {
    period: 'Ene 2024 — Mar 2024',
    role: 'Programador / Soporte de Sistemas',
    company: 'DINET Operador Logístico',
    description:
      'Soporte a usuarios y gestión de incidencias mediante tickets, optimizando flujos del sistema y mejorando procesos internos. Capacitación a usuarios para el uso eficiente de la plataforma.'
  },

  {
    period: 'Mar 2022 — Jun 2023',
    role: 'Analista Programador',
    company: 'CloudComputing Perú S.A.C.',
    description:
      'Análisis y levantamiento de observaciones en sistemas existentes, desarrollo de mejoras funcionales y apoyo en la evolución continua de aplicaciones web en entornos cloud.'
  }
];
