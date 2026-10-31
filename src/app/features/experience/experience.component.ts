import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';
import { Experience, EXPERIENCE } from '../../core/models/experience.model';
import { Router } from '@angular/router';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [RevealDirective, SlicePipe],
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {

  experiences: Experience[] = EXPERIENCE;
  totalExperience: string = this.getTotalExperience();

  constructor(private readonly _router: Router) {}

  goToExp(route: string): void {
    this._router.navigate(['/experience', route]).then();
  }

  /**
   * Calcula la duración en meses de una experiencia.
   *
   * Prioridad:
   *  1. Si tiene `months` definido → se usa tal cual (experiencia cerrada).
   *  2. Si no tiene `months` (experiencia activa) → se calcula desde
   *     `startDate` hasta la fecha actual.
   */
  private getMonths(exp: Experience): number {
    // Experiencia cerrada con duración ya declarada en el modelo
    if (exp.months != null) return exp.months;

    // Experiencia activa: calcular meses transcurridos desde startDate
    if (exp.startDate) {
      const [year, month] = exp.startDate.split('-').map(Number);
      const start = new Date(year, month - 1);
      const now   = new Date();
      const diff  =
        (now.getFullYear() - start.getFullYear()) * 12 +
        (now.getMonth() - start.getMonth());
      return Math.max(0, diff);
    }

    return 0;
  }

  private getTotalExperience(): string {
    const totalMonths = this.experiences.reduce(
      (sum, exp) => sum + this.getMonths(exp),
      0,
    );

    const years  = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years >= 1 && months > 0) {
      return `${years} año${years > 1 ? 's' : ''} y ${months} mes${months > 1 ? 'es' : ''}`;
    }
    if (years >= 1) {
      return `${years} año${years > 1 ? 's' : ''}`;
    }
    return `${months} mes${months > 1 ? 'es' : ''}`;
  }
}
