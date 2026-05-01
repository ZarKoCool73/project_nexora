export interface Credential {
  title: string;
  issuer: string;
  type: 'Título' | 'Colegiatura' | 'Certificación';
  date: string;
  status: 'Completo' | 'Vigente' | 'Activo';
  description: string;
  fileUrl?: string;
  previewImage?: string;
  fileType?: 'pdf' | 'image'; // 👈 NUEVO
}

export const credentials: Credential[] = [

  {
    title: 'Ingeniero de Sistemas',
    issuer: 'Universidad Autónoma del Perú',
    type: 'Título',
    date: '2025',
    status: 'Completo',
    description: 'He obtenido oficialmente el Título Profesional de Ingeniero de Sistemas, luego de cumplir con todos los requisitos académicos, legales y reglamentarios establecidos por la universidad. Este logro representa el resultado de años de esfuerzo, dedicación y crecimiento profesional en el ámbito de la tecnología, el desarrollo de software y la ingeniería.',
    fileUrl: '/imagen/TITULO_DIEGO.jpg',
    fileType: 'image'
  },

  {
    title: 'Colegiado en Ingeniería de Sistemas',
    issuer: 'Colegio de Ingenieros del Perú',
    type: 'Colegiatura',
    date: '2025',
    status: 'Vigente',
    description: 'Habilitación profesional para ejercicio de la ingeniería en Perú.',
    fileUrl: '/assets/certs/colegiatura.pdf'
  },

  {
    title: 'Certificación Angular + Spring Boot',
    issuer: 'Indra / Autoformación',
    type: 'Certificación',
    date: '2025',
    status: 'Activo',
    description: 'Dominio de desarrollo frontend Angular e integración con Spring Boot en arquitectura enterprise.',
  },

  {
    title: 'Certificado LIDERAZGO 360°',
    issuer: 'Colegio de Ingenieros del Perú (Consejo Departamental de Lima)',
    type: 'Certificación',
    date: '2025',
    status: 'Activo',
    description: 'Certifica la participación como asistente en la conferencia “LIDERAZGO 360°”, realizada el 03 de diciembre de 2025, con una duración de 3 horas lectivas. Emitido en Lima el 09 de diciembre de 2025.',
    fileUrl: '/certs/LIDERAZGO_360.pdf',
    fileType: 'pdf',
  }


];
