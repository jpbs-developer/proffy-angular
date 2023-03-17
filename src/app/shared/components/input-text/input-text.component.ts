import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
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
