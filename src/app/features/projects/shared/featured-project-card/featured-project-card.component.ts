import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../../../core/models/project.model';

import { ModalService } from '../../../../core/services/local/modal/modal.service';

@Component({
  selector: 'app-featured-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-project-card.component.html',
  styleUrls: ['./featured-project-card.component.scss']
})
export class FeaturedProjectCardComponent {

  @Input({ required: true })
  project!: Project;

  constructor(
    private readonly modalService: ModalService
  ) {}

  openProject(): void {
    this.modalService.openPM(this.project);
  }

}
