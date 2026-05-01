export interface Credential {
  title: string;
  issuer: string;
  type: 'Certificación' | 'Colegiatura' | 'Título' | 'Curso';
  date: string;
  status?: 'Vigente' | 'Completo' | 'Activo';
  description?: string;
}

export const credentials: Credential[] = [

  {
    title: 'Ingeniero de Sistemas',
    issuer: 'Universidad / Instituto',
    type: 'Título',
    date: '2024',
    status: 'Completo',
    description: 'Formación en ingeniería de software, arquitectura de sistemas y desarrollo full stack.'
  },

  {
    title: 'Colegiado en Ingeniería de Sistemas',
    issuer: 'Colegio de Ingenieros del Perú',
    type: 'Colegiatura',
    date: '2025',
    status: 'Vigente',
    description: 'Habilitación profesional para ejercicio de la ingeniería en Perú.'
  },

  {
    title: 'Certificación Angular + Spring Boot',
    issuer: 'Indra / Autoformación',
    type: 'Certificación',
    date: '2025',
    status: 'Activo'
  }

];
