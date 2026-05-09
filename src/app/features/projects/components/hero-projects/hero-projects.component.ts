import {
  Component,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { Project } from '../../../../core/models/project.model';

import { HeroProjectCardComponent }
  from '../../shared/hero-project-card/hero-project-card.component';

@Component({
  selector: 'app-hero-projects',
  standalone: true,
  imports: [
    CommonModule,
    HeroProjectCardComponent
  ],
  templateUrl: './hero-projects.component.html',
  styleUrls: ['./hero-projects.component.scss']
})
export class HeroProjectsComponent {

  @Input({ required: true })
  projects: Project[] = [];

  @ViewChild('slider', { static: true })
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
