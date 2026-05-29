import { Injectable, signal } from '@angular/core';
import { Profile } from '../../../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {

  profile = signal<Profile>({
    name: 'Diego Gonzalez Bardales',
    role: 'Full Stack Engineer',
    title: '// ANGULAR · SPRING BOOT · ENTERPRISE SYSTEMS',

    description: `
      Ingeniero de Sistemas con experiencia en desarrollo Full Stack en entornos enterprise.
      Especializado en Angular, Spring Boot y microservicios en proyectos del sector bancario y gobierno.
      Enfoque en calidad de software, escalabilidad y entrega continua.
    `,

    experience: 5,
    available: true
  });

}
