import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpperCasePipe, NgIf } from '@angular/common';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

import { EXPERIENCE } from '../../../../core/models/experience.model';
import { PROJECTS } from '../../../../core/models/project.model';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    UpperCasePipe,
    NgIf
  ],
  templateUrl: './experience-details-page.component.html',
  styleUrls: ['./experience-details-page.component.scss']
})
export class ExperienceDetailsPageComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly experienceId =
    this.route.snapshot.paramMap.get('idExperience');

  readonly experience = EXPERIENCE.find(
    exp => exp.idExperience === this.experienceId
  );

  readonly projects = PROJECTS.filter(
    project => project.experienceId === this.experienceId
  );

  readonly isDirectExperience =
    this.experience?.type === 'DIRECT';

  readonly clients: string[] = [
    ...new Set(
      this.projects
        .map(project => project.clientName)
        .filter(
          (client): client is string => !!client
        )
    )
  ];

  readonly technologies: string[] = [
    ...new Set(
      this.projects.flatMap(project =>
        project.stack
          .split('·')
          .map(stack => stack.trim())
          .filter(Boolean)
      )
    )
  ];

  readonly tags: string[] = [
    ...new Set(
      this.projects.flatMap(project => project.tags)
    )
  ];

  readonly architectures: string[] = [
    ...new Set(
      this.projects.flatMap(project =>
        project.architectureFlow?.map(
          node => node.title
        ) ?? []
      )
    )
  ];

  goBack(): void {
    void this.router.navigate(['/experience']);
  }

}
