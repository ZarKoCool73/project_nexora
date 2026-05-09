import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../../../core/models/project.model';

import { ArchiveProjectRowComponent } from '../../shared/archive-project-row/archive-project-row.component';

@Component({
  selector: 'app-archive-projects',
  standalone: true,
  imports: [
    CommonModule,
    ArchiveProjectRowComponent
  ],
  templateUrl: './archive-projects.component.html',
  styleUrls: ['./archive-projects.component.scss']
})
export class ArchiveProjectsComponent {

  @Input({ required: true })
  projects: Project[] = [];

}
