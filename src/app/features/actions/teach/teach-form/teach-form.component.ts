import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from 'src/app/shared/components/input-text/input-text.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TextAreaComponent } from 'src/app/shared/components/text-area/text-area.component';
import { SelectComponent } from 'src/app/shared/components/select/select.component';

@Component({
  selector: 'app-teach-form',
  standalone: true,
  imports: [
    CommonModule,
    InputTextComponent,
    ReactiveFormsModule,
    TextAreaComponent,
    SelectComponent
  ],
  templateUrl: './teach-form.component.html',
  styleUrls: ['./teach-form.component.scss'],
})
export class TeachFormComponent implements OnInit {
  teacherForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.teacherForm = this.fb.group({
      name: ['', Validators.required],
      photo: ['', Validators.required],
      phone: ['', Validators.required],
      biography: ['', Validators.required],
    });
  }

  submit() {
    console.log(this.teacherForm.value);
  }
}
