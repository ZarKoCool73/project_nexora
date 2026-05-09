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
      import('./features/skills/skills.component')
        .then(m => m.SkillsComponent),
  },

  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/pages/home-projects/home-projects.component')
        .then(m => m.HomeProjectsComponent),
  },

  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./features/projects/pages/project-details-page/project-details-page.component')
        .then(m => m.ProjectDetailsPageComponent),
  },

  {
    path: 'skills',
    loadComponent: () =>
      import('./features/skills/skills.component')
        .then(m => m.SkillsComponent),
  },

  {
    path: 'experiences',
    loadComponent: () =>
      import('./features/experience/experience.component')
        .then(m => m.ExperienceComponent),
  },

  {
    path: 'credentials',
    loadComponent: () =>
      import('./features/credentials/credentials.component')
        .then(m => m.CredentialsComponent),
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component')
        .then(m => m.ContactComponent),
  },

  {
    path: '**',
    redirectTo: '',
  }

];
