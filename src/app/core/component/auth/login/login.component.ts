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
import { LoginService } from '../../../../services/auth/login.service';
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
  RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private toaster = inject(ToasterService);
 
  private router = inject(Router);
  private loginService = inject(LoginService);
  private fb: FormBuilder = inject(FormBuilder);
  loginForm!: FormGroup;
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }

  login() {
    this.loginService
      .login(this.loginForm.value.email, this.loginForm.value.password, true)
      .pipe(
        takeUntil(this.destroy$),
        tap((res) => {
          this.router.navigate(['/home']);
          this.toaster.successToaster('تم تسجيل الدخول بنجاح');
          this.loginService.currentUserStatus$.next(true);
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
