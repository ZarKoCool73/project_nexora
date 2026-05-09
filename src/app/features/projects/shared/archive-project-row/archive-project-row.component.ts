import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../../../core/models/project.model';

import { ModalService } from '../../../../core/services/local/modal/modal.service';

@Component({
  selector: 'app-archive-project-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archive-project-row.component.html',
  styleUrls: ['./archive-project-row.component.scss']
})
export class ArchiveProjectRowComponent {

  @Input({ required: true })
  project!: Project;

  constructor(
    private readonly modalService: ModalService
  ) {}

  openProject(): void {
    this.modalService.openPM(this.project);
  }

}
