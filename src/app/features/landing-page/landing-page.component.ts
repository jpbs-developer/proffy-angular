import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LpButtonComponent } from './lp-button/lp-button.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, LpButtonComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export default class LandingPageComponent {}
