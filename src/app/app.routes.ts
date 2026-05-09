import {Routes} from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component')
        .then(m => m.HomeComponent),
  },

  {
    path: 'skills',
    loadComponent: () =>
      import('./features/skills/pages/skills-home/skills-home.component')
        .then(m => m.SkillsHomeComponent),
  },

  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/pages/home-projects/home-projects.component')
        .then(m => m.HomeProjectsComponent),
  },

  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./features/projects/pages/project-details-page/project-details-page.component')
        .then(m => m.ProjectDetailsPageComponent),
  },

  {
    path: 'experience',
    loadComponent: () =>
      import('./features/experience/pages/home-experience/home-experience.component')
        .then(m => m.HomeExperienceComponent),
  },

  {
    path: 'credentials',
    loadComponent: () =>
      import('./features/credentials/pages/home-credentials/home-credentials.component')
        .then(m => m.HomeCredentialsComponent),
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/pages/home-contact/home-contact.component')
        .then(m => m.HomeContactComponent),
  },

  {
    path: '**',
    redirectTo: '',
  }

];
