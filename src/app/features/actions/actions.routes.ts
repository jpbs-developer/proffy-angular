import { Route } from '@angular/router';

export default [
  { path: 'dar-aula', loadComponent: () => import('./teach/teach.component') },
] as Route[];
