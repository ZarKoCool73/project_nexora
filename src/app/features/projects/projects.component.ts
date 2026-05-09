import { Component, OnInit } from '@angular/core';

import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';

import {
  Project,
  PROJECTS,
  ProjectFilterState
} from '../../core/models/project.model';

import { ProjectFiltersComponent } from '../../shared/components/filters/project-filters/project-filters.component';
import {HeroProjectsComponent} from './components/hero-projects/hero-projects.component';
import {FeaturedProjectsComponent} from './components/featured-projects/featured-projects.component';
import {StandardProjectsComponent} from './components/standard-projects/standard-projects.component';
import {ArchiveProjectsComponent} from './components/archive-projects/archive-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [
    RevealDirective,
    ProjectFiltersComponent,
    HeroProjectsComponent,
    FeaturedProjectsComponent,
    StandardProjectsComponent,
    ArchiveProjectsComponent,
  ]
})
export class ProjectsComponent implements OnInit {

  // =========================================================
  // 📦 ALL PROJECTS
  // =========================================================

  projects: Project[] = PROJECTS;

  // =========================================================
  // 🔍 FILTER STATE
  // =========================================================

  filterState: ProjectFilterState = {
    search: '',
    tags: [],
    stacks: [],
    years: []
  };

  // =========================================================
  // 🔥 INIT
  // =========================================================

  ngOnInit(): void {

    this.projects = [...this.projects].sort((a, b) => {

      // 🔥 PRIORIDAD:
      // 1. HERO
      // 2. FEATURED
      // 3. STANDARD
      // 4. MINOR

      const tierOrder = {
        hero: 1,
        featured: 2,
        standard: 3,
        minor: 4
      };

      const tierCompare =
        tierOrder[a.tier] - tierOrder[b.tier];

      if (tierCompare !== 0) {
        return tierCompare;
      }

      // 🔥 FEATURED ORDER
      if (a.featuredOrder && b.featuredOrder) {
        return a.featuredOrder - b.featuredOrder;
      }

      // 🔥 MÁS RECIENTES PRIMERO
      return b.year - a.year;
    });

  }

  // =========================================================
  // 🎯 FILTER OPTIONS
  // =========================================================

  get availableTags(): string[] {

    return [
      ...new Set(
        this.projects.flatMap(project => project.tags)
      )
    ].sort();

  }

  get availableYears(): number[] {

    return [
      ...new Set(
        this.projects.map(project => project.year)
      )
    ].sort((a, b) => b - a);

  }

  get availableStacks(): string[] {

    return [
      ...new Set(

        this.projects.flatMap(project =>

          project.stack
            .split('·')
            .map(stack => stack.trim())

        )

      )
    ].sort();

  }

  // =========================================================
  // 🔍 FILTERED PROJECTS
  // =========================================================

  get filteredProjects(): Project[] {

    return this.projects.filter(project => {

      // =====================================================
      // SEARCH
      // =====================================================

      const search = this.filterState.search.toLowerCase();

      const matchSearch =
        !search ||

        project.title.toLowerCase().includes(search) ||

        project.desc.toLowerCase().includes(search) ||

        project.tags.some(tag =>
          tag.toLowerCase().includes(search)
        );

      // =====================================================
      // TAGS
      // =====================================================

      const matchTags =

        this.filterState.tags.length === 0 ||

        this.filterState.tags.every(tag =>
          project.tags.includes(tag)
        );

      // =====================================================
      // YEARS
      // =====================================================

      const matchYears =

        this.filterState.years.length === 0 ||

        this.filterState.years.includes(project.year);

      // =====================================================
      // STACKS
      // =====================================================

      const projectStacks =

        project.stack
          .split('·')
          .map(stack => stack.trim());

      const matchStacks =

        this.filterState.stacks.length === 0 ||

        this.filterState.stacks.every(stack =>
          projectStacks.includes(stack)
        );

      // =====================================================
      // RESULT
      // =====================================================

      return (
        matchSearch &&
        matchTags &&
        matchYears &&
        matchStacks
      );

    });

  }

  // =========================================================
  // 🏆 HERO PROJECTS
  // =========================================================

  get heroProjects(): Project[] {

    return this.filteredProjects.filter(
      project => project.tier === 'hero'
    );

  }

  // =========================================================
  // ⭐ FEATURED PROJECTS
  // =========================================================

  get featuredProjects(): Project[] {

    return this.filteredProjects.filter(
      project => project.tier === 'featured'
    );

  }

  // =========================================================
  // 📦 STANDARD PROJECTS
  // =========================================================

  get standardProjects(): Project[] {

    return this.filteredProjects.filter(
      project => project.tier === 'standard'
    );

  }

  // =========================================================
  // 🧩 ARCHIVE PROJECTS
  // =========================================================

  get minorProjects(): Project[] {

    return this.filteredProjects.filter(
      project => project.tier === 'minor'
    );

  }

  // =========================================================
  // 🔥 FILTER EVENTS
  // =========================================================

  onFiltersChange(filters: ProjectFilterState): void {

    this.filterState = filters;

  }

}
