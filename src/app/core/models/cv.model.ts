export interface CvOption {
  title: string;
  desc: string;
  stack: string;
  file: string;
  highlight?: boolean;
}

export const CVS: CvOption[] = [
  {
    title: 'Frontend Developer',
    desc: 'Interfaces modernas enfocadas en experiencia de usuario',
    stack: 'Angular · React · TypeScript · UI/UX',
    file: '/certs/CV_FRONTEND_DEVELOPER.pdf'
  },
  {
    title: 'Backend Developer',
    desc: 'Arquitectura, APIs y lógica de negocio escalable',
    stack: 'Node.js · Spring Boot · MongoDB · REST',
    file: '/certs/CV_BACKEND_DEVELOPER.pdf'
  },
  {
    title: 'Fullstack Developer',
    desc: 'Soluciones end-to-end con enfoque en producto',
    stack: 'Angular · Node.js · Microservicios',
    file: '/certs/CV_FULLSTACK_DEVELOPER.pdf',
    highlight: true
  }
];
