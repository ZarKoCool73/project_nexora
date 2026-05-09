import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Project} from '../../../../core/models/project.model';

import {ModalService} from '../../../../core/services/local/modal/modal.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-project-card.component.html',
  styleUrls: ['./hero-project-card.component.scss']
})
export class HeroProjectCardComponent {

  @Input({required: true})
  project!: Project;

  constructor(
    private readonly modalService: ModalService,
    private readonly _route: Router
  ) {
  }

  openProject(): void {
    this._route.navigate(['/projects', this.project.id]).then();
  }

}
