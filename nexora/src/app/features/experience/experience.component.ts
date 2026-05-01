import { Component } from '@angular/core';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [
    RevealDirective
  ],
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experiences: Experience[] = [
    {
      period: '2022 — Presente',
      role: 'Senior Fullstack Engineer',
      company: '// Empresa Tech Internacional',
      description: 'Lideré el diseño e implementación de microservicios críticos. Mentoring de equipo de 6 desarrolladores. Arquitectura cloud-native con alta disponibilidad (99.9% uptime).'
    },
    {
      period: '2019 — 2022',
      role: 'Fullstack Developer',
      company: '// Startup Fintech Regional',
      description: 'Desarrollo del core de pagos y dashboard. Implementación CI/CD. Reducción de deploy de 2h a 8 minutos.'
    },
    {
      period: '2016 — 2019',
      role: 'Backend Developer',
      company: '// Consultora de Software',
      description: 'Desarrollo de APIs REST. Integración de sistemas legacy. Mejora de performance +300%.'
    },
    {
      period: '2014 — 2016',
      role: 'Junior Developer',
      company: '// Agencia Digital',
      description: 'Desarrollo web fullstack para clientes locales. Inicio en arquitecturas escalables.'
    }
  ];

}
