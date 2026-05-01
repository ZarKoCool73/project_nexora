import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app.component').then(m => m.AppComponent),
  },
  // Futuro: detalle de proyecto
  // {
  //   path: 'project/:id',
  //   loadComponent: () =>
  //     import('./features/project-detail/project-detail.component')
  //       .then(m => m.ProjectDetailComponent),
  // },
  { path: '**', redirectTo: '' },
];
