import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionHeaderTextComponent } from '../action-header-text/action-header-text.component';
import { TeachFormComponent } from './teach-form/teach-form.component';

@Component({
  selector: 'app-teach',
  standalone: true,
  imports: [CommonModule, ActionHeaderTextComponent, TeachFormComponent],
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.scss'],
})
export default class TeachComponent {}
