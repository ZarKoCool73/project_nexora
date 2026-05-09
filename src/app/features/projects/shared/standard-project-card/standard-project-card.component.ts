import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../../../core/models/project.model';

import { ModalService } from '../../../../core/services/local/modal/modal.service';

@Component({
  selector: 'app-standard-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standard-project-card.component.html',
  styleUrls: ['./standard-project-card.component.scss']
})
export class StandardProjectCardComponent {

  @Input({ required: true })
  project!: Project;

  constructor(
    private readonly modalService: ModalService
  ) {}

  openProject(): void {
    this.modalService.openPM(this.project);
  }

}
