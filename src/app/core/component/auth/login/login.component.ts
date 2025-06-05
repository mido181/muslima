import { Component, inject, OnDestroy, OnInit } from '@angular/core';
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
import { AuthService } from '../../../../services/auth/auth.service';
import { Subject, Subscription, takeUntil, tap } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { ToasterService } from '../../../../services/toaster.service';
@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private loginService = inject(AuthService);
  private fb: FormBuilder = inject(FormBuilder);
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {

      console.log(this.loginForm.invalid);
       
      this.loginService
      .login(this.loginForm.value)
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(console.log);
    
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
