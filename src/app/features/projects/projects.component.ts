import { Component, OnInit } from '@angular/core';

import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';

import {
  Project,
  PROJECTS,
  ProjectFilterState
} from '../../core/models/project.model';

import { ProjectFiltersComponent } from '../../shared/components/filters/project-filters/project-filters.component';
import {ProjectListItemComponent} from './components/project-list-item/project-list-item.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [
    RevealDirective,
    ProjectFiltersComponent,
    ProjectListItemComponent,
  ]
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = PROJECTS;

  filterState: ProjectFilterState = {
    search: '',
    tags: [],
    stacks: [],
    years: []
  };

  ngOnInit(): void {
    this.projects = [...this.projects].sort((a, b) => {
      const tierOrder = { hero: 1, featured: 2, standard: 3, minor: 4 };
      const tierCompare = tierOrder[a.tier] - tierOrder[b.tier];
      if (tierCompare !== 0) return tierCompare;
      if (a.featuredOrder && b.featuredOrder) return a.featuredOrder - b.featuredOrder;
      return b.year - a.year;
    });
  }

  get availableTags(): string[] {
    return [...new Set(this.projects.flatMap(p => p.tags))].sort();
  }

  get availableYears(): number[] {
    return [...new Set(this.projects.map(p => p.year))].sort((a, b) => b - a);
  }

  get availableStacks(): string[] {
    return [...new Set(this.projects.flatMap(p => p.stack.split('·').map(s => s.trim())))].sort();
  }

  get filteredProjects(): Project[] {
    return this.projects.filter(project => {
      const search = this.filterState.search.toLowerCase();

      const matchSearch = !search ||
        project.title.toLowerCase().includes(search) ||
        project.desc.toLowerCase().includes(search) ||
        project.tags.some(tag => tag.toLowerCase().includes(search));

      const matchTags = this.filterState.tags.length === 0 ||
        this.filterState.tags.every(tag => project.tags.includes(tag));

      const matchYears = this.filterState.years.length === 0 ||
        this.filterState.years.includes(project.year);

      const projectStacks = project.stack.split('·').map(s => s.trim());

      const matchStacks = this.filterState.stacks.length === 0 ||
        this.filterState.stacks.every(stack => projectStacks.includes(stack));

      return matchSearch && matchTags && matchYears && matchStacks;
    });
  }

  onFiltersChange(filters: ProjectFilterState): void {
    this.filterState = filters;
  }

}
