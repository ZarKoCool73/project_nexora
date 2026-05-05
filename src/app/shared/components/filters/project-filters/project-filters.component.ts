import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectFilterState } from '../../../../core/models/project.model';

// ========================= //
// GRUPOS DE TECNOLOGÍAS     //
// ========================= //
interface TagGroup {
  label: string;
  tags: string[];
}

const TAG_GROUPS: TagGroup[] = [
  {
    label: 'CI/CD',
    tags: ['CI/CD', 'Jenkins', 'ArgoCD', 'Bitbucket'],
  },
  {
    label: 'Calidad',
    tags: ['SonarQube', 'BlackDuck', 'Checkmarx', 'OWASP ZAP'],
  },
  {
    label: 'Testing',
    tags: ['Jasmine', 'Karma', 'Mockito', 'Jest'],
  },
  {
    label: 'IA / Visión',
    tags: ['OpenCV', 'TensorFlow', 'Keras', 'MediaPipe', 'NumPy', 'Pandas', 'scikit-learn'],
  },
  {
    label: 'Base de datos',
    tags: ['Oracle', 'MongoDB Atlas', 'PL/SQL', 'Redis'],
  },
  {
    label: 'Mensajería',
    tags: ['Kafka', 'AS400', 'BFF'],
  },
  {
    label: 'Frontend',
    tags: ['Angular Material', 'Bootstrap', 'Figma', 'Azure AD B2C'],
  },
  {
    label: 'Otros',
    tags: ['REST APIs', 'Postman', 'JBoss', 'Git'],
  },
];

type PanelId = 'tech' | 'year' | 'stack' | null;

@Component({
  selector: 'app-project-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: 'project-filters.component.html',
  styleUrls: ['project-filters.component.scss']
})
export class ProjectFiltersComponent {

  // ========================= //
  // INPUTS                    //
  // ========================= //
  @Input() tags: string[]   = [];
  @Input() years: number[]  = [];
  @Input() stacks: string[] = [];

  @Output() filtersChange = new EventEmitter<ProjectFilterState>();

  // ========================= //
  // ESTADO LOCAL              //
  // ========================= //
  search         = '';
  selectedTags:   string[] = [];
  selectedYears:  number[] = [];
  selectedStacks: string[] = [];
  openPanel: PanelId = null;

  readonly tagGroups = TAG_GROUPS;

  constructor() {}

  // ========================= //
  // GETTERS                   //
  // ========================= //
  get hasActiveFilters(): boolean {
    return (
      this.selectedTags.length   > 0 ||
      this.selectedYears.length  > 0 ||
      this.selectedStacks.length > 0 ||
      this.search.trim()        !== ''
    );
  }

  // ========================= //
  // PANEL                     //
  // ========================= //
  // posicionamiento dinámico del panel en móvil
  panelTopPx: number | null = null;
  panelAlignRight = false;

  togglePanel(panel: PanelId, event: MouseEvent): void {
    event.stopPropagation(); // evita que el HostListener lo cierre al instante
    if (this.openPanel === panel) {
      this.openPanel = null;
      return;
    }
    this.openPanel = panel;
    this.calculatePanelPosition(event.currentTarget as HTMLElement);
  }

  private calculatePanelPosition(btn: HTMLElement): void {
    if (window.innerWidth > 768) {
      const rect = btn.getBoundingClientRect();
      const panelWidth = 520;
      this.panelAlignRight = rect.left + panelWidth > window.innerWidth - 20;
      this.panelTopPx = null;
    } else {
      const rect = btn.getBoundingClientRect();
      this.panelTopPx = rect.bottom + 6;
      this.panelAlignRight = false;
    }
  }

  // ========================= //
  // INTERACCIONES             //
  // ========================= //
  onSearchChange(): void {
    this.emit();
  }

  toggleTag(tag: string): void {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    } else {
      this.selectedTags = [...this.selectedTags, tag];
    }
    this.emit();
  }

  toggleYear(year: number): void {
    if (this.selectedYears.includes(year)) {
      this.selectedYears = this.selectedYears.filter(y => y !== year);
    } else {
      this.selectedYears = [...this.selectedYears, year];
    }
    this.emit();
  }

  toggleStack(stack: string): void {
    if (this.selectedStacks.includes(stack)) {
      this.selectedStacks = this.selectedStacks.filter(s => s !== stack);
    } else {
      this.selectedStacks = [...this.selectedStacks, stack];
    }
    this.emit();
  }

  // ========================= //
  // CLEAR                     //
  // ========================= //
  clear(): void {
    this.search         = '';
    this.selectedTags   = [];
    this.selectedYears  = [];
    this.selectedStacks = [];
    this.openPanel      = null;
    this.emit();
  }

  // ========================= //
  // EMIT                      //
  // ========================= //
  private emit(): void {
    this.filtersChange.emit({
      search: this.search,
      tags:   this.selectedTags,
      years:  this.selectedYears,
      stacks: this.selectedStacks,
    });
  }
}
