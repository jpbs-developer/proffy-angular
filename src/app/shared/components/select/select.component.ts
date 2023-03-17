import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  drop: boolean = false;
  @ViewChild('select', { static: true }) select!: ElementRef<HTMLDivElement>;
  @ViewChild('alter', { static: true }) alt!: ElementRef<HTMLElement>;
  @Input() label = '';

  constructor(private renderer: Renderer2) {}

  onTypping(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    // this.writeValue(value);
  }

  dropDown() {
    if (!this.drop) {
      this.drop = true;
      this.renderer.addClass(this.select.nativeElement, 'active');
    } else {
      this.drop = false;
      this.renderer.removeClass(this.select.nativeElement, 'active');
    }
  }
}
