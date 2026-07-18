export interface CvOption {
  title: string;
  desc: string;
  stack: string;
  file: string;
  icon: string;
  highlight?: boolean;
}

export const ICONS: Record<string, string> = {
  frontend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 6 2 12 8 18"></polyline><polyline points="16 6 22 12 16 18"></polyline></svg>`,
  backend: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="6" rx="1"></rect><rect x="3" y="14" width="18" height="6" rx="1"></rect><line x1="7" y1="7" x2="7.01" y2="7"></line><line x1="7" y1="17" x2="7.01" y2="17"></line></svg>`,
  fullstack: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
};

export const CVS: CvOption[] = [
  {
    title: 'Frontend Developer',
    desc: 'Interfaces modernas enfocadas en experiencia de usuario',
    stack: 'Angular · React · Vue · Figma · UI/UX',
    file: '/certs/CV_FRONTEND_DEVELOPER.pdf',
    icon: '🎨'
  },
  {
    title: 'Backend Developer',
    desc: 'Arquitectura, APIs y lógica de negocio escalable',
    stack: 'Node.js · Spring Boot · SQL Server · MongoDB · REST',
    file: '/certs/CV_BACKEND_DEVELOPER.pdf',
    icon: '⚙️'
  },
  {
    title: 'Fullstack Developer',
    desc: 'Soluciones end-to-end con enfoque en producto',
    stack: 'Angular · React · Vue · SpringBoot · Node.js · MongoDB Atlas · Microservicios',
    file: '/certs/CV_FULLSTACK_DEVELOPER.pdf',
    icon: '🚀',
    highlight: true
  }
];
