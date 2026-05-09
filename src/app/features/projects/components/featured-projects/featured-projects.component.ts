import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../../../core/models/project.model';

import { FeaturedProjectCardComponent } from '../../shared/featured-project-card/featured-project-card.component';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [
    CommonModule,
    FeaturedProjectCardComponent
  ],
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent {

  @Input({ required: true })
  projects: Project[] = [];

}
