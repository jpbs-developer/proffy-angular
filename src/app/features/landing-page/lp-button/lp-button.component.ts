import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lp-button.component.html',
  styleUrls: ['./lp-button.component.scss'],
})
export class LpButtonComponent {
  @Input() text: string = '';
  @Input() icon: string = '';
}
