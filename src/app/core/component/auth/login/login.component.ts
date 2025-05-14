import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  loginForm!: FormGroup;
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }
}
