import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../../../core/models/project.model';

import { StandardProjectCardComponent } from '../../shared/standard-project-card/standard-project-card.component';

@Component({
  selector: 'app-standard-projects',
  standalone: true,
  imports: [
    CommonModule,
    StandardProjectCardComponent
  ],
  templateUrl: './standard-projects.component.html',
  styleUrls: ['./standard-projects.component.scss']
})
export class StandardProjectsComponent {

  @Input({ required: true })
  projects: Project[] = [];

  @ViewChild('slider')
  slider!: ElementRef<HTMLDivElement>;

  scrollLeft(): void {
    this.slider.nativeElement.scrollBy({
      left: -500,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    this.slider.nativeElement.scrollBy({
      left: 500,
      behavior: 'smooth'
    });
  }

}
