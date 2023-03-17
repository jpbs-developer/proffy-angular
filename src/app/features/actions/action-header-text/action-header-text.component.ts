import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-header-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-header-text.component.html',
  styleUrls: ['./action-header-text.component.scss'],
})
export class ActionHeaderTextComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';
}
