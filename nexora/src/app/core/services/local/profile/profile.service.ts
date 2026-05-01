// src/app/core/services/profile.service.ts
import { Injectable, signal } from '@angular/core';
import {Profile} from '../../../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {

  profile = signal<Profile>({
    name: 'Diego González',
    role: 'Ingeniero de Sistemas · Fullstack',
    title: '// FULLSTACK ENGINEER · SYSTEMS ARCHITECT · PROBLEM SOLVER',
    description: `
      Construyo productos digitales robustos desde la base de datos hasta la interfaz.
      Arquitectura limpia, código que escala, experiencias que importan.
    `,
    experience: 10,
    available: true
  });

}
