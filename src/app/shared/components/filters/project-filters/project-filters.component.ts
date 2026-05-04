import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ProjectFilterState} from '../../../../core/models/project.model';

@Component({
  selector: 'app-project-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: 'project-filters.component.html',
  styleUrls: ['project-filters.component.scss']
})
export class ProjectFiltersComponent {

  @Input() tags: string[] = [];
  @Input() years: number[] = [];
  @Input() stacks: string[] = [];

  @Output() filtersChange = new EventEmitter<ProjectFilterState>();

  // estado local UI
  search = '';
  selectedTags: string[] = [];
  selectedYears: number[] = [];
  selectedStacks: string[] = [];

  // =========================
  // 🔥 INTERACCIONES
  // =========================

  onSearchChange() {
    this.emit();
  }

  toggleTag(tag: string) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    } else {
      this.selectedTags.push(tag);
    }
    this.emit();
  }

  toggleYear(year: number) {
    if (this.selectedYears.includes(year)) {
      this.selectedYears = this.selectedYears.filter(y => y !== year);
    } else {
      this.selectedYears.push(year);
    }
    this.emit();
  }

  toggleStack(stack: string) {
    if (this.selectedStacks.includes(stack)) {
      this.selectedStacks = this.selectedStacks.filter(s => s !== stack);
    } else {
      this.selectedStacks = [...this.selectedStacks, stack];
    }
    this.emit();
  }

  clear() {
    this.search = '';
    this.selectedTags = [];
    this.selectedYears = [];
    this.selectedStacks = [];
    this.emit();
  }

  private emit() {
    this.filtersChange.emit({
      search: this.search,
      tags: this.selectedTags,
      years: this.selectedYears,
      stacks: this.selectedStacks
    });
  }
}
