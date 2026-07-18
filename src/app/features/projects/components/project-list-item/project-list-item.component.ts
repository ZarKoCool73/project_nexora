import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Project} from '../../../../core/models/project.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-project-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss']
})
export class ProjectListItemComponent{

  @Input({ required: true })
  project!: Project;

  private readonly _router = inject(Router)

  get badgeLabel(): string | null {
    switch (this.project.tier) {
      case 'hero':     return 'ALTO IMPACTO';
      case 'featured': return 'DESTACADO';
      default:         return null;
    }
  }

  get badgeClass(): string {
    switch (this.project.tier) {
      case 'hero':     return 'badge-hero';
      case 'featured': return 'badge-featured';
      default:         return '';
    }
  }

  get initials(): string {
    return this.project.title
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(word => word[0])
      .join('')
      .toUpperCase();
  }

  openProject(){
    this._router.navigate(['/projects', this.project.id]).then();
  }

}
