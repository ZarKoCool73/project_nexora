import { Injectable, signal } from '@angular/core';
import { Profile } from '../../../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {

  profile = signal<Profile>({
    name: 'Diego Gonzalez Bardales',
    role: 'Full Stack Engineer',
    title: '// FULL STACK · MICROSERVICES · CLOUD',

    description: `
      Ingeniero de Sistemas colegiado con experiencia en el desarrollo de soluciones Full Stack para entornos enterprise.
      Especializado en Angular, Spring Boot, microservicios y tecnologías Cloud (AWS).
      Enfoque en arquitectura de software, escalabilidad, calidad de código y entrega continua.
    `,

    experience: 5,
    available: true
  });

}
