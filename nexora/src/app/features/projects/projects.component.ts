import {Component, OnInit} from '@angular/core';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';
import {Project, PROJECTS} from '../../core/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  imports: [
    RevealDirective
  ],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = PROJECTS

  ngOnInit() {
    this.projects = this.projects.sort((a, b) => b.year - a.year);
  }
}
