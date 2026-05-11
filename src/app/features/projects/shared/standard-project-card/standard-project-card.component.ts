import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Project} from '../../../../core/models/project.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-standard-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standard-project-card.component.html',
  styleUrls: ['./standard-project-card.component.scss']
})
export class StandardProjectCardComponent {

  @Input({required: true})
  project!: Project;

  constructor(
    private readonly _router: Router,
  ) {
  }

  openProject(): void {
    this._router.navigate(['/projects', this.project.id]).then();
  }

}
