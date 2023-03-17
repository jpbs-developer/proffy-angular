import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true,
    },
  ],
})
export class TextAreaComponent {
  @Input() label = '';
  value = '';

  private _onChange = (value: string) => {};
  private _onTouch = (value: string) => {};

  writeValue(value: any) {
    this.value = value;
    this._onChange(this.value);
  }

  onTypping(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.writeValue(value);
  }

  registerOnChange(fn: any) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
