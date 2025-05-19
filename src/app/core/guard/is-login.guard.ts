import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { ToasterService } from '../../services/toaster.service';

export const isLoginGuard: CanActivateFn = (route, state) => {
  const toaster = inject(ToasterService);
  const router = inject(Router);
  const login = inject(LoginService);

  if (login.currentUserValue) {
    // toaster.successToaster('Login successful', 'Success');
    return true;
  }
  const timer = setTimeout(() => {
    router.navigate(['/login']);
  }, 1000);

  toaster.rejectToaster('يجب تسجيل الدخول اولا', 'Error');

  return false;
};
