import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ToasterService } from '../../services/toaster.service';
import { map } from 'rxjs';

export const isLoginGuard: CanActivateFn = (route, state) => {
  const toaster = inject(ToasterService);
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.checkAuthStatus().pipe(
    map((response) => {
      if (response) {
        return true;
      } else {
        toaster.rejectToaster('يجب تسجيل الدخول اولا', 'Error');
        // router.navigate(['/login']);

        return false;
      }
    })
  );
};
