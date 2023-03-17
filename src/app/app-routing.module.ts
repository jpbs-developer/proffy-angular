import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './features/actions/actions.component';
import LandingPageComponent from './features/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: LandingPageComponent },
  {
    path: 'actions',
    component: ActionsComponent,
    loadChildren: () => import('./features/actions/actions.routes'),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
