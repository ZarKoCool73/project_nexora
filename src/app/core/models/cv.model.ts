export interface CvOption {
  title: string;
  desc: string;
  stack: string;
  file: string;
  icon: string;
  highlight?: boolean;
}

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
