import {
  Component,
  OnInit
} from '@angular/core';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {CommonModule} from '@angular/common';

import {NavbarComponent} from '../../../../shared/components/navbar/navbar.component';
import {FooterComponent} from '../../../../shared/components/footer/footer.component';

import {Project, PROJECTS} from '../../../../core/models/project.model';


@Component({
  selector: 'app-project-details-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.scss']
})
export class ProjectDetailsPageComponent implements OnInit {

  project!: Project;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.router.navigate(['/projects']);
      return;
    }

    const project = PROJECTS.find(p => this.slugify(p.id) === id);

    if (!project) {
      this.router.navigate(['/projects']);
      return;
    }

    this.project = project;

  }

  private slugify(value: string): string {

    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  }

  goBack() {
    this.router.navigate(['/projects']).then();
  }

}
