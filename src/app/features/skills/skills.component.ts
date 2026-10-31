
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

import {
  Skill,
  skills,
  FlatTech
} from '../../core/models/skill.model';

import { EXPERIENCE } from '../../core/models/experience.model';

interface ExperiencePeriod {
  start: number;
  end: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    RevealDirective,
    FormsModule,
    PaginationComponent
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills: Skill[] = skills;

  searchTerm = '';
  selectedCategory = 'All';

  hoveredTech: FlatTech | null = null;

  currentPage = 1;
  itemsPerPage = 20;

  // =====================================================
  // INTERACCIONES
  // =====================================================

  hoverTech(tech: FlatTech): void {
    this.hoveredTech = tech;
  }

  leaveTech(): void {
    this.hoveredTech = null;
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.hoveredTech = null;
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.hoveredTech = null;
  }

  // =====================================================
  // CATEGORÍAS
  // =====================================================

  get categories(): string[] {
    return [
      'All',
      ...this.skills.map(skill => skill.name)
    ];
  }

  // =====================================================
  // CÁLCULO DE EXPERIENCIA
  // =====================================================

  /**
   * Convierte una fecha YYYY-MM en un número
   * que representa el mes correspondiente.
   */
  private toMonthNumber(date: string): number {

    const [year, month] = date.split('-').map(Number);

    return year * 12 + month - 1;
  }

  /**
   * Calcula los periodos de utilización de una tecnología.
   * Los periodos superpuestos o consecutivos se fusionan
   * para evitar duplicar meses.
   */
  private calculateExperienceMonths(
    experienceIds: string[]
  ): number {

    if (!experienceIds.length) {
      return 0;
    }

    const currentDate = new Date();

    const currentMonth =
      currentDate.getFullYear() * 12 +
      currentDate.getMonth();

    const periods: ExperiencePeriod[] = EXPERIENCE
      .filter(exp =>
        experienceIds.includes(exp.idExperience)
      )
      .map(exp => {

        const start = this.toMonthNumber(exp.startDate);

        const end = exp.endDate
          ? this.toMonthNumber(exp.endDate)
          : currentMonth;

        return {
          start,
          end: Math.min(end, currentMonth)
        };
      })
      .filter(period =>
        period.end >= period.start
      )
      .sort((a, b) => a.start - b.start);

    if (!periods.length) {
      return 0;
    }

    let totalMonths = 0;

    let currentStart = periods[0].start;
    let currentEnd = periods[0].end;

    for (let i = 1; i < periods.length; i++) {

      const period = periods[i];

      // Fusionar periodos superpuestos o consecutivos.
      if (period.start <= currentEnd + 1) {

        currentEnd = Math.max(
          currentEnd,
          period.end
        );

      } else {

        totalMonths +=
          currentEnd - currentStart + 1;

        currentStart = period.start;
        currentEnd = period.end;
      }
    }

    totalMonths +=
      currentEnd - currentStart + 1;

    return totalMonths;
  }

  /**
   * Convierte los meses en una descripción legible.
   */
  private formatExperience(months: number): string {

    if (months === 0) {
      return 'Sin experiencia laboral asociada';
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
      return `${remainingMonths} ${
        remainingMonths === 1 ? 'mes' : 'meses'
      }`;
    }

    if (remainingMonths === 0) {
      return `${years} ${
        years === 1 ? 'año' : 'años'
      }`;
    }

    return `${years} ${
      years === 1 ? 'año' : 'años'
    } y ${remainingMonths} ${
      remainingMonths === 1 ? 'mes' : 'meses'
    }`;
  }

  // =====================================================
  // FLATTEN: SKILLS → TECHNOLOGIES
  // =====================================================

  get allTechs(): FlatTech[] {

    return this.skills.flatMap(skill =>
      skill.techs.map(tech => {

        const experienceMonths =
          this.calculateExperienceMonths(
            tech.experienceIds
          );

        return {
          ...tech,
          category: skill.name,
          experienceMonths,
          experienceLabel:
            this.formatExperience(experienceMonths)
        };
      })
    );
  }

  // =====================================================
  // BÚSQUEDA Y FILTROS
  // =====================================================

  get filteredTechs(): FlatTech[] {

    const search = this.searchTerm
      .trim()
      .toLowerCase();

    return this.allTechs.filter(tech => {

      const matchSearch =
        tech.name.toLowerCase().includes(search);

      const matchCategory =
        this.selectedCategory === 'All' ||
        tech.category === this.selectedCategory;

      return matchSearch && matchCategory;
    });
  }

  // =====================================================
  // PAGINACIÓN
  // =====================================================

  get totalPages(): number {

    return Math.ceil(
      this.filteredTechs.length / this.itemsPerPage
    );
  }

  get paginatedTechs(): FlatTech[] {

    this.ensureValidPage();

    const start =
      (this.currentPage - 1) * this.itemsPerPage;

    return this.filteredTechs.slice(
      start,
      start + this.itemsPerPage
    );
  }

  private ensureValidPage(): void {

    const total = this.totalPages;

    if (this.currentPage > total) {
      this.currentPage = total || 1;
    }
  }

}
