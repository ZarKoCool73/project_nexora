export interface Credential {
  idCredential: string
  title: string;
  issuer: string;
  type: 'Título' | 'Colegiatura' | 'Certificado' | 'Diploma';
  date: number;
  status: 'Completo' | 'Vigente' | 'Activo';
  description: string;
  fileUrl?: string;
  previewImage?: string;
  fileType?: 'pdf' | 'image'; // 👈 NUEVO
}

export const credentials: Credential[] = [
  {
    idCredential: '1',
    title: 'Ingeniero de Sistemas',
    issuer: 'Universidad Autónoma del Perú',
    type: 'Título',
    date: 2025,
    status: 'Completo',
    description: 'He obtenido oficialmente el Título Profesional de Ingeniero de Sistemas, luego de cumplir con todos los requisitos académicos, legales y reglamentarios establecidos por la universidad. Este logro representa el resultado de años de esfuerzo, dedicación y crecimiento profesional en el ámbito de la tecnología, el desarrollo de software y la ingeniería.',
    fileUrl: '/imagen/TITULO_DIEGO.jpg',
    fileType: 'image'
  },

  {
    idCredential: '2',
    title: 'Colegiado en Ingeniería de Sistemas',
    issuer: 'Colegio de Ingenieros del Perú',
    type: 'Colegiatura',
    date: 2026,
    status: 'Vigente',
    description: 'Habilitación profesional para ejercicio de la ingeniería en Perú.',
    fileUrl: '/imagen/COLEGIATURA_DIEGO.jpeg',
    fileType: 'image'
  },

  {
    idCredential: '27',
    title: 'Administrador de Redes y Comunicaciones',
    issuer: 'Universidad Autónoma del Perú',
    type: 'Diploma',
    date: 2022,
    status: 'Completo',
    description: 'Diploma otorgado por aprobar los requisitos del programa de Administrador de Redes y Comunicaciones.',
    fileUrl: '/certs/DIPLOMA_REDES.pdf',
    fileType: 'pdf'
  },

  {
    idCredential: '3',
    title: 'Java Programming',
    issuer: 'Universidad Autónoma del Perú',
    type: 'Diploma',
    date: 2022,
    status: 'Completo',
    description: 'Diploma por haber aprobado el curso de Java Programming.',
    fileUrl: '/certs/DIPLOMA_JAVA.pdf',
    fileType: 'pdf'
  },

  {
    idCredential: '4',
    title: 'Database Design and Programming with SQL',
    issuer: 'Universidad Autónoma del Perú',
    type: 'Diploma',
    date: 2022,
    status: 'Completo',
    description: 'Diploma por haber aprobado el curso de Database Design and Programming with SQL.',
    fileUrl: '/certs/DIPLOMA_DATABASE.pdf',
    fileType: 'pdf'
  },

  {
    idCredential: '5',
    title: 'Desarrollador de Software y Programación Segura',
    issuer: 'Universidad Autónoma del Perú',
    type: 'Diploma',
    date: 2024,
    status: 'Completo',
    description: 'Diploma por aprobar el programa de Desarrollador de Software y Programación Segura.',
    fileUrl: '/certs/DIPLOMA_DS.pdf',
    fileType: 'pdf'
  },

  {
    idCredential: '6',
    title: 'Statistical Package for the Social Sciences (SPSS)',
    issuer: 'Universidad Autónoma del Perú',
    type: 'Certificado',
    date: 2022,
    status: 'Completo',
    description: 'Curso de SPSS con duración de 48 horas académicas.',
    fileUrl: '/certs/CERT_SPSS.pdf',
    fileType: 'pdf'
  },

  {
    idCredential: '7',
    title: 'Microsoft Excel 2019',
    issuer: 'Universidad Autónoma del Perú',
    type: 'Certificado',
    date: 2022,
    status: 'Completo',
    description: 'Curso de Microsoft Excel 2019 con duración de 48 horas académicas.',
    fileUrl: '/certs/CERT_EXCEL.pdf',
    fileType: 'pdf'
  },

  {
    idCredential: '8',
    title: 'Inglés I - Nivel A1',
    issuer: 'Centro de Idiomas - Universidad Autónoma del Perú',
    type: 'Certificado',
    date: 2022,
    status: 'Completo',
    description: 'Aprobación del curso de Inglés Básico Nivel A1 (96 horas académicas).',
    fileUrl: '/certs/CERT_INGLES_A1.pdf',
    fileType: 'pdf'
  },

  {
    idCredential: '9',
    title: 'Inglés II - Nivel A2',
    issuer: 'Centro de Idiomas - Universidad Autónoma del Perú',
    type: 'Certificado',
    date: 2022,
    status: 'Completo',
    description: 'Aprobación del curso de Inglés Básico Nivel A2 (96 horas académicas).',
    fileUrl: '/certs/CERT_INGLES_A2.pdf',
    fileType: 'pdf'
  },

  {
    idCredential: '10',
    title: 'Scrum Fundamentals Certified (SFC)',
    issuer: 'SCRUM study',
    type: 'Certificado',
    date: 2022,
    status: 'Activo',
    description: 'Certificado internacional Scrum Fundamentals. Aprobado el 30 de julio de 2022.',
    fileUrl: '/certs/CERT_SCRUM.pdf',
    fileType: 'pdf'
  },

  {
    idCredential: '11',
    title: 'Segundo Puesto - Ciclo 9',
    issuer: 'Universidad Autónoma del Perú',
    type: 'Certificado',
    date: 2023,
    status: 'Completo',
    description: 'Reconocimiento académico por ocupar el 2do puesto en el ciclo 9 de Ingeniería de Sistemas (2023-I).',
    fileUrl: '/certs/CERT_TERCIO.pdf',
    fileType: 'pdf'
  },

  {
    idCredential: '12',
    title: 'Primer Puesto - Expotec 2021',
    issuer: 'Universidad Autónoma del Perú',
    type: 'Diploma',
    date: 2021,
    status: 'Completo',
    description: 'Primer puesto en el concurso Expotec 2021-I (categoría intermedia) con el proyecto "Software para la Detección de Mascarilla".',
    fileUrl: '/certs/DIPLOMA_IA.pdf',
    fileType: 'pdf'
  },

  // Certificados Udemy
  {
    idCredential: '13',
    title: 'Innovation Master Class',
    issuer: 'Udemy',
    type: 'Certificado',
    date: 2024,
    status: 'Activo',
    description: 'Innovation Master Class - 3.5 horas (4 de mayo de 2024)',
    fileUrl: '/imagen/CERT_IMC.jpg',
    fileType: 'image'
  },
  {
    idCredential: '14',
    title: 'Universidad CSS - Aprende CSS desde Cero hasta Experto!',
    issuer: 'Udemy',
    type: 'Certificado',
    date: 2026,
    status: 'Activo',
    description: 'Universidad CSS - Aprende CSS desde Cero hasta Experto! - 7.5 horas en total (2 de mayo de 2026)',
    fileUrl: '/imagen/CERT_CSS.jpg',
    fileType: 'image'
  },
  {
    idCredential: '15',
    title: 'Angular y Spring Boot: Crea tu primera App Full Stack',
    issuer: 'Udemy',
    type: 'Certificado',
    date: 2026,
    status: 'Activo',
    description: 'Angular y Spring Boot: Crea tu primera App Full Stack - 3.5 horas en total (2 de mayo de 2026)',
    fileUrl: '/imagen/CERT_ANGULAR_SPRINGBOOT.jpg',
    fileType: 'image'
  },
  {
    idCredential: '16',
    title: 'Universidad HTML - Aprende HTML desde Cero hasta Experto',
    issuer: 'Udemy',
    type: 'Certificado',
    date: 2023,
    status: 'Activo',
    description: 'Universidad HTML - Aprende HTML desde Cero hasta Experto - 6.5 horas en total (6 de Marzo de 2023)',
    fileUrl: '/imagen/CERT_HTML.jpg',
    fileType: 'image'
  },
  {
    idCredential: '17',
    title: 'Curso de Desarrollo Web con Angular 11+. ¡La biblia!',
    issuer: 'Udemy',
    type: 'Certificado',
    date: 2022,
    status: 'Activo',
    description: 'Curso de Desarrollo Web con Angular 11+. ¡La biblia! - 19 horas en total (9 de agosto de 2022)',
    fileUrl: '/imagen/CERT_ANGULAR.jpg',
    fileType: 'image'
  },
  {
    idCredential: '18',
    title: 'JavaFX, Swing, y Spring Boot - Crea tu primera GUI con Java',
    issuer: 'Udemy',
    type: 'Certificado',
    date: 2026,
    status: 'Activo',
    description: 'JavaFX, Swing, y Spring Boot - Crea tu primera GUI con Java - 3.5 horas en total (2 de mayo de 2026)',
    fileUrl: '/imagen/CERT_SPRING_SWING.jpg',
    fileType: 'image'
  },
  {
    idCredential: '19',
    title: 'Design Thinking | De Cero a Maestro',
    issuer: 'Udemy',
    type: 'Certificado',
    date: 2024,
    status: 'Activo',
    description: 'Design Thinking - 2 horas (2 de mayo de 2024)',
    fileUrl: '/imagen/CERT_DT.jpg',
    fileType: 'image'
  },
  {
    idCredential: '20',
    title: 'Project Management - De 0 a 100',
    issuer: 'Udemy',
    type: 'Certificado',
    date: 2024,
    status: 'Activo',
    description: 'Project Management (PMI, Scrum, Waterfall) - 3 horas',
    fileUrl: '/imagen/CERT_PM.jpg',
    fileType: 'image'
  },
  {
    idCredential: '21',
    title: 'Six Sigma White Belt',
    issuer: 'Udemy',
    type: 'Certificado',
    date: 2024,
    status: 'Activo',
    description: 'Certified Lean Six Sigma White Belt (Accredited)',
    fileUrl: '/imagen/CERT_SIX_SIGMA.jpg',
    fileType: 'image'
  },
  {
    idCredential: '22',
    title: 'Comunicación - Fundamentos de Liderazgo 1',
    issuer: 'Udemy',
    type: 'Certificado',
    date: 2024,
    status: 'Activo',
    description: 'Fundamentos de Liderazgo - 1.5 horas',
    fileUrl: '/imagen/CERT_LIDERAZGO_1.jpg',
    fileType: 'image'
  },
  {
    idCredential: '23',
    title: 'Productivity and Time Management',
    issuer: 'Udemy',
    type: 'Certificado',
    date: 2024,
    status: 'Activo',
    description: 'Productivity and Time Management for the Overwhelmed - 2 horas',
    fileUrl: '/imagen/CERT_PTM.jpg',
    fileType: 'image'
  },
  {
    idCredential: '24',
    title: 'Domina Microsoft Teams',
    issuer: 'Udemy',
    type: 'Certificado',
    date: 2024,
    status: 'Activo',
    description: 'Domina Microsoft Teams - 4 horas',
    fileUrl: '/imagen/CERT_MT.jpg',
    fileType: 'image'
  },
  {
    idCredential: '25',
    title: 'Universidad Desarrollo Web - FrontEnd Web Developer!',
    issuer: 'Udemy',
    type: 'Certificado',
    date: 2026,
    status: 'Activo',
    description: 'Duración 30.5 horas en total, fecha de emisión 17 de mayo de 2026',
    fileUrl: '/imagen/CERT_FRONTEND_DEV.jpg',
    fileType: 'image'
  },
  {
    idCredential: '26',
    title: "Universidad Spring - Spring Framework y Spring Boot!",
    issuer: "Udemy",
    type: "Certificado",
    date: 2026,
    status: "Activo",
    description: "Fecha de emisión 17 de mayo de 2026, duración 74 horas en total",
    fileUrl: "/imagen/CERT_SPRING_SPRINGBOOT.jpg",
    fileType: "image"
  }
];
