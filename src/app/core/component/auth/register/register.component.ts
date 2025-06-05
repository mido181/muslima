import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { JsonPipe } from '@angular/common';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    MatDatepickerModule,
    MatRadioModule,
    JsonPipe,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  private registerService = inject(AuthService);
  registerForm!: FormGroup;
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(4)]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      country: [null, [Validators.required]],
      city: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      birthDate: [null, [Validators.required]],

    });
  }

  selectValue(value: string) {
    this.registerForm.get('gender')?.setValue(value);
  }

  getFormControl(value: string) {
    this.registerForm.get(value);
  }

  getControl(value: string) {
    return this.registerForm.get(value);
  }

  submit() {
    if (!this.registerForm.invalid) {
      console.log(this.registerForm.value);
      
      this.registerService
        .register(this.registerForm.value)
        .subscribe(console.log);
    }
  }
}
