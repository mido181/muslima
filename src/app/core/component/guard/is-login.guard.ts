import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../../services/auth/login.service';
import { ToasterService } from '../../../services/toaster.service';

export const isLoginGuard: CanActivateFn = (route, state) => {
  const toaster = inject(ToasterService);
  const router = inject(Router);
  const login = inject(LoginService);
  const isLogin = login.login('admin', 'admin',true).subscribe((res) =>{

  if(res) {
    toaster.successToaster('Login successful', 'Success');
    router.navigateByUrl('/home');
    
    return true;
  } else {
    toaster.rejectToaster('you have to login first', 'Error');
    router.navigateByUrl('/login');
    return false;
  }
}
)

return false;
};
