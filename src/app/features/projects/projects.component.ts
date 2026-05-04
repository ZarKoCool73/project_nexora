import { Component, OnInit } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';
import { Project, PROJECTS, ProjectFilterState } from '../../core/models/project.model';
import { ModalService } from '../../core/services/local/modal/modal.service';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { ProjectFiltersComponent } from '../../shared/components/filters/project-filters/project-filters.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [RevealDirective, PaginationComponent, ProjectFiltersComponent]
})
export class ProjectsComponent implements OnInit {

  // =========================
  // 📦 DATA
  // =========================
  projects: Project[] = PROJECTS;

  // =========================
  // 🔍 FILTROS
  // =========================
  filterState: ProjectFilterState = {
    search: '',
    tags: [],
    stacks: [],
    years: []
  };

  // =========================
  // 📄 PAGINACIÓN
  // =========================
  currentPage = 1;
  itemsPerPage = 5;

  // =========================
  // 🔥 INIT
  // =========================
  constructor(
    private readonly modalService: ModalService
  ) {}

  ngOnInit() {
    this.projects = [...this.projects].sort((a, b) => b.year - a.year);
  }

  // =========================
  // 🎯 DATOS DINÁMICOS FILTROS
  // =========================

  get availableTags(): string[] {
    return [...new Set(this.projects.flatMap(p => p.tags))];
  }

  get availableYears(): number[] {
    return [...new Set(this.projects.map(p => p.year))];
  }

  get availableStacks(): string[] {
    return [
      ...new Set(
        this.projects.flatMap(p =>
          p.stack.split('·').map(s => s.trim())
        )
      )
    ];
  }

  // =========================
  // 🔍 FILTRADO
  // =========================

  get filteredProjects(): Project[] {
    return this.projects.filter(p => {

      const matchSearch =
        !this.filterState.search ||
        p.title.toLowerCase().includes(this.filterState.search.toLowerCase()) ||
        p.desc.toLowerCase().includes(this.filterState.search.toLowerCase());

      const matchTags =
        this.filterState.tags.length === 0 ||
        this.filterState.tags.every(tag => p.tags.includes(tag));

      const matchYears =
        this.filterState.years.length === 0 ||
        this.filterState.years.includes(p.year);

      const projectStacks = p.stack.split('·').map(s => s.trim());

      const matchStacks =
        this.filterState.stacks.length === 0 ||
        this.filterState.stacks.every(s => projectStacks.includes(s));

      return matchSearch && matchTags && matchYears && matchStacks;
    });
  }

  // =========================
  // 📄 PAGINACIÓN
  // =========================

  get totalPages(): number {
    return Math.ceil(this.filteredProjects.length / this.itemsPerPage);
  }

  get paginatedProjects(): Project[] {
    this.ensureValidPage();
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProjects.slice(start, start + this.itemsPerPage);
  }

  private ensureValidPage() {
    const total = this.totalPages;
    if (this.currentPage > total) {
      this.currentPage = total || 1;
    }
  }

  // =========================
  // 🔥 EVENTS
  // =========================

  onFiltersChange(filters: ProjectFilterState) {
    this.filterState = filters;
    this.currentPage = 1;
  }

  onPageChange(page: number) {
    this.currentPage = page;
    document
      .getElementById('projects')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  openProject(project: Project) {
    this.modalService.openPM(project);
  }
}
