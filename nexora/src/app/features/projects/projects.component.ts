import {Component, OnInit} from '@angular/core';
import {RevealDirective} from '../../shared/directives/reveal/reveal.directive';
import {Project, PROJECTS} from '../../core/models/project.model';
import {ProjectModalService} from '../../core/services/local/modal/modal.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  imports: [RevealDirective],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = PROJECTS;

  constructor(
    private readonly modalService: ProjectModalService
  ) {
  }

  ngOnInit() {
    this.projects = this.projects.sort((a, b) => b.year - a.year);
  }

  openProject(project: Project) {
    this.modalService.open(project);
  }
}
