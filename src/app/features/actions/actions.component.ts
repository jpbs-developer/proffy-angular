import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActionsHeaderComponent } from './actions-header/actions-header.component';


@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [CommonModule, RouterModule, ActionsHeaderComponent],
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {

}
