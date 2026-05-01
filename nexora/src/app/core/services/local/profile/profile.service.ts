// src/app/core/services/profile.service.ts
import { Injectable, signal } from '@angular/core';
import {Profile} from '../../../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {

  profile = signal<Profile>({
    name: 'Diego Gonzalez',
    role: 'Ingeniero de Sistemas · Fullstack',
    title: '// FULLSTACK ENGINEER · SYSTEMS ARCHITECT · PROBLEM SOLVER',
    description: `
      Soy un profesional en Ingeniería de Sistemas con experiencia en fullstack, integración de microservicios en frontend,
       buenas prácticas y herramientas modernas para los proyectos.
    `,
    experience: 5,
    available: true
  });

}
