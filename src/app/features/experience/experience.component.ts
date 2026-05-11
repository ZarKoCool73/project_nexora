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
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  experiences: Experience[] = EXPERIENCE;
  totalExperience: string = this.getTotalExperience();

  constructor(private readonly _router: Router) {}

  goToExp(route: string) {
    this._router.navigate(['/experience', route]).then();
  }

  private getMonths(exp: Experience): number {
    if (exp.startDate) {
      const [year, month] = exp.startDate.split('-').map(Number);
      const start = new Date(year, month - 1);
      const now = new Date();
      return (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    }
    return exp.months ?? 0;
  }

  private getTotalExperience(): string {
    const totalMonths = this.experiences.reduce((sum, exp) => sum + this.getMonths(exp), 0);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years >= 1 && months > 0) {
      return `${years} año${years > 1 ? 's -' : ''} ${months} mes${months > 1 ? 'es' : ''}`;
    } else if (years >= 1) {
      return `${years} año${years > 1 ? 's -' : ''}`;
    } else {
      return `${months} mes - ${months > 1 ? 'es' : ''}`;
    }
  }
}
