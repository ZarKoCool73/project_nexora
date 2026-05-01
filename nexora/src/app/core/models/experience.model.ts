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
      'Desarrollo y mantenimiento de aplicaciones web para el sector bancario. Implementación de funcionalidades frontend y backend, integración de sistemas, resolución de incidencias y mejora continua bajo estándares de calidad y metodologías ágiles.'
  },

  {
    period: 'Sep 2025 — Ene 2026',
    role: 'Analista Programador Full Stack Semi Senior',
    company: 'INDRA',
    description:
      'Desarrollo e implementación de aplicaciones full stack en Angular y Spring Boot. Participación en análisis de requerimientos, pruebas unitarias, corrección de incidencias y despliegues en entornos productivos bajo metodologías ágiles.'
  },

  {
    period: 'May 2024 — May 2025',
    role: 'Analista Programador Full Stack Junior',
    company: 'Minsait',
    description:
      'Desarrollo de soluciones tecnológicas para entidades públicas y privadas. Implementación de componentes frontend en Angular e integración con servicios backend, participación en mejoras funcionales y soporte a sistemas en producción.'
  },

  {
    period: 'Ene 2024 — Mar 2024',
    role: 'Programador / Soporte de Sistemas',
    company: 'DINET Operador Logístico',
    description:
      'Gestión de tickets y soporte a usuarios finales. Mejora de flujos del sistema, optimización de procesos internos y capacitación a usuarios para el uso de la plataforma operativa.'
  },

  {
    period: 'Mar 2022 — Jun 2023',
    role: 'Analista Programador',
    company: 'CloudComputing Perú',
    description:
      'Análisis e identificación de observaciones en sistemas asignados. Elaboración de mejoras funcionales y soporte en el desarrollo continuo de aplicaciones web en entornos cloud.'
  }
];
