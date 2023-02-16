import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LandingPageComponent from './features/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
