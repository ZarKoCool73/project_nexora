import { Component, OnInit } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';
import { Project, PROJECTS } from '../../core/models/project.model';
import { ModalService } from '../../core/services/local/modal/modal.service';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [RevealDirective, PaginationComponent]
})
export class ProjectsComponent implements OnInit {

  // =========================
  // 📦 DATA
  // =========================
  projects: Project[] = PROJECTS;

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
    // Ordenar por año (más reciente primero)
    this.projects = [...this.projects].sort((a, b) => b.year - a.year);
  }

  // =========================
  // 🔥 GETTERS (CORE)
  // =========================

  get totalPages(): number {
    return Math.ceil(this.projects.length / this.itemsPerPage);
  }

  get paginatedProjects(): Project[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.projects.slice(start, start + this.itemsPerPage);
  }

  // =========================
  // 🔥 EVENTS
  // =========================

  onPageChange(page: number) {
    this.currentPage = page;

    // UX pro: scroll suave al cambiar página
    document
      .getElementById('projects')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  openProject(project: Project) {
    this.modalService.openPM(project);
  }

}
