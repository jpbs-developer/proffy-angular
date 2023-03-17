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


  items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
  ];
  value: string = 'Selecione qual você quer ensinar';
  drop: boolean = false;
  @ViewChild('select', { static: true }) select!: ElementRef<HTMLDivElement>;
  @Input() label = '';

  constructor(private renderer: Renderer2, private elem: ElementRef) {}

  dropDown() {
    if (!this.drop) {
      this.drop = true;
      this.renderer.addClass(this.select.nativeElement, 'active');
    } else {
      this.drop = false;
      this.renderer.removeClass(this.select.nativeElement, 'active');
    }
  }

  selectedItem(item: string) {
    this.value = item;
    this.drop = true
    this.dropDown()
  }
}
