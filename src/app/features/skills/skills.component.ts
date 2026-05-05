import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';
import {Skill, skills, FlatTech} from '../../core/models/skill.model';
import {PaginationComponent} from '../../shared/components/pagination/pagination.component';

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
  itemsPerPage = 5;


  hoverTech(tech: FlatTech) {
    this.hoveredTech = tech;
  }

  leaveTech() {
    this.hoveredTech = null;
  }

  setCategory(cat: string) {
    this.selectedCategory = cat;
    this.currentPage = 1; // UX: reset
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  // categorías dinámicas
  get categories(): string[] {
    const cats = this.skills.map(s => s.name);
    return ['All', ...cats];
  }

  // flatten (skills → techs)
  get allTechs(): FlatTech[] {
    return this.skills.flatMap(skill =>
      skill.techs.map(tech => ({
        ...tech,
        category: skill.name
      }))
    );
  }

  // filtro + búsqueda
  get filteredTechs(): FlatTech[] {
    return this.allTechs.filter(t => {
      const matchSearch =
        t.name.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchCategory =
        this.selectedCategory === 'All' ||
        t.category === this.selectedCategory;

      return matchSearch && matchCategory;
    });
  }

  get totalPages(): number {
    return Math.ceil(this.filteredTechs.length / this.itemsPerPage);
  }

  get paginatedTechs(): FlatTech[] {
    this.ensureValidPage(); // 🔥 evita páginas inválidas

    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredTechs.slice(start, start + this.itemsPerPage);
  }

  private ensureValidPage() {
    const total = this.totalPages;

    if (this.currentPage > total) {
      this.currentPage = total || 1;
    }
  }

}
