import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Project} from '../../../../core/models/project.model';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {

  @Input() project!: Project;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
