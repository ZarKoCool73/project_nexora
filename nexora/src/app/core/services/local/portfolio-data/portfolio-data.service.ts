// src/app/core/services/portfolio-data.service.ts
// Centraliza TODO el contenido del portafolio.
// Para escalar: reemplaza los arrays con llamadas HTTP a tu API/CMS.
import {Injectable, signal} from '@angular/core';
import {ContactLink, Job, Project, Skill, Stat} from '../../../tokens/portfolio.models';

@Injectable({providedIn: 'root'})
export class PortfolioDataService {

  // ── Stats ────────────────────────────────────────────────
  readonly stats = signal<Stat[]>([
    {value: 10, suffix: '+', label: 'Años de experiencia'},
    {value: 40, suffix: '+', label: 'Proyectos entregados'},
    {value: 15, suffix: '+', label: 'Tecnologías dominadas'},
    {value: 8, suffix: '+', label: 'Clientes internacionales'},
  ]);

  // ── Skills ───────────────────────────────────────────────
  readonly skills = signal<Skill[]>([
    {
      icon: '◈', name: 'Frontend', level: 95,
      tags: ['Angular 17', 'React', 'TypeScript', 'RxJS', 'NgRx', 'SCSS'],
    },
    {
      icon: '⬡', name: 'Backend', level: 92,
      tags: ['Node.js', 'NestJS', 'Spring Boot', 'Python', 'FastAPI', 'GraphQL'],
    },
    {
      icon: '▣', name: 'Bases de datos', level: 88,
      tags: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'],
    },
    {
      icon: '◎', name: 'Cloud & DevOps', level: 84,
      tags: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    },
    {
      icon: '⬟', name: 'Arquitectura', level: 87,
      tags: ['Microservicios', 'DDD', 'CQRS', 'Event-driven', 'Clean Architecture'],
    },
    {
      icon: '◇', name: 'Testing & QA', level: 81,
      tags: ['Jest', 'Cypress', 'Jasmine', 'Testing Library', 'TDD', 'BDD'],
    },
  ]);

  // ── Projects ─────────────────────────────────────────────
  readonly projects = signal<Project[]>([
    {
      id: 'erp-platform',
      title: 'Plataforma ERP empresarial',
      description: 'Sistema integral para gestión de inventario, RRHH, finanzas y operaciones. Arquitectura de microservicios con +200K transacciones/día. Reducción del 40% en tiempo de procesos operativos clave.',
      chips: ['Angular', 'NestJS', 'PostgreSQL', 'AWS'],
      stack: 'TypeScript · NestJS · Angular 17 · Redis · Docker',
      year: 2024,
      size: 'featured',
      highlight: true,
    },
    {
      id: 'ai-dashboard',
      title: 'Dashboard analytics con IA predictiva',
      description: 'Visualización en tiempo real con modelos de predicción para toma de decisiones. Procesamiento de +500K registros/hora con pipelines de datos en streaming.',
      chips: ['React', 'Python', 'ML', 'GCP'],
      stack: 'React · FastAPI · TensorFlow · BigQuery',
      year: 2024,
      size: 'regular',
    },
    {
      id: 'payment-gateway',
      title: 'Gateway de pagos P2P bancario',
      description: 'Autenticación biométrica, encriptación end-to-end y cumplimiento PCI-DSS. Disponibilidad 99.98% en producción con +2M transacciones mensuales.',
      chips: ['Spring Boot', 'React', 'Kafka'],
      stack: 'Java · Spring · PostgreSQL · Kafka',
      year: 2023,
      size: 'half',
    },
    {
      id: 'logistics-app',
      title: 'Gestión logística en tiempo real',
      description: 'Seguimiento GPS de flota, rutas optimizadas con algoritmos genéticos e integración con +20 proveedores de última milla.',
      chips: ['Angular', 'Node.js', 'Firebase'],
      stack: 'Angular · Node.js · MongoDB · Socket.io',
      year: 2023,
      size: 'half',
    },
  ]);

  // ── Experience ───────────────────────────────────────────
  readonly jobs = signal<Job[]>([
    {
      period: '2022 — Presente',
      role: 'Senior Fullstack Engineer',
      company: 'Empresa Tech Internacional',
      description: 'Lideré el diseño e implementación de microservicios críticos para +500K usuarios activos. Mentoring de equipo de 6 desarrolladores. Arquitectura cloud-native con 99.9% uptime.',
      tags: ['Angular', 'NestJS', 'AWS', 'Microservicios'],
    },
    {
      period: '2019 — 2022',
      role: 'Fullstack Developer',
      company: 'Startup Fintech Regional',
      description: 'Desarrollo del core de pagos y dashboard de operaciones. Implementé pipelines CI/CD que redujeron el tiempo de deploy de 2h a 8 minutos. Stack Angular + NestJS + PostgreSQL.',
      tags: ['Angular', 'Node.js', 'PostgreSQL', 'CI/CD'],
    },
    {
      period: '2016 — 2019',
      role: 'Backend Developer',
      company: 'Consultora de Software',
      description: 'APIs REST para clientes enterprise. Integración de sistemas legacy con plataformas modernas. Optimizaciones de queries con mejoras de +300% en performance.',
      tags: ['Java', 'Spring', 'MySQL', 'REST'],
    },
    {
      period: '2014 — 2016',
      role: 'Junior Developer',
      company: 'Agencia Digital',
      description: 'Desarrollo web full-stack para clientes locales. Primeros pasos en arquitecturas escalables y metodologías ágiles (Scrum).',
      tags: ['PHP', 'JavaScript', 'MySQL'],
    },
  ]);

  // ── Contact links ────────────────────────────────────────
  readonly contactLinks = signal<ContactLink[]>([
    {
      label: 'Email',
      value: 'dgonzales.dg7@gmail.com',
      href: 'mailto:diego@example.com',
      arrow: '↗',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/diegogonzalez',
      href: 'https://linkedin.com/in/diegogonzalez',
      arrow: '↗',
      isNew: true,
    },
    {
      label: 'GitHub',
      value: 'github.com/diegogonzalez',
      href: 'https://github.com/diegogonzalez',
      arrow: '↗',
    },
    {
      label: 'CV / Résumé',
      value: 'Descargar PDF',
      href: '/assets/cv-diego-gonzalez.pdf',
      arrow: '↓',
    },
  ]);
}
