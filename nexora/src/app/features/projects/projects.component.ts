import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  stack: string;
  year: number;
  size: 'featured' | 'regular' | 'half';
}
@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  imports: [
    RevealDirective
  ],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Plataforma ERP para gestión empresarial',
      desc: 'Sistema integral para la gestión de inventario, RRHH, finanzas y operaciones. Arquitectura de microservicios con +200K transacciones/día. Reducción del 40% en tiempo de procesos operativos.',
      tags: ['Angular', 'Node.js', 'PostgreSQL', 'AWS'],
      stack: 'TypeScript · NestJS · Angular 17 · Redis',
      year: 2024,
      size: 'featured'
    },
    {
      title: 'Dashboard analytics con IA predictiva',
      desc: 'Visualización en tiempo real con modelos de predicción integrados.',
      tags: ['React', 'Python', 'ML'],
      stack: 'React · FastAPI · TensorFlow',
      year: 2024,
      size: 'regular'
    },
    {
      title: 'API bancaria de pagos P2P',
      desc: 'Gateway de pagos con autenticación biométrica y encriptación end-to-end.',
      tags: ['Spring Boot', 'React'],
      stack: 'Java · Spring · PostgreSQL',
      year: 2023,
      size: 'half'
    },
    {
      title: 'App de gestión logística en tiempo real',
      desc: 'Seguimiento GPS de flota y optimización de rutas.',
      tags: ['Angular', 'Firebase'],
      stack: 'Angular · Node.js · MongoDB',
      year: 2023,
      size: 'half'
    }
  ];

}
