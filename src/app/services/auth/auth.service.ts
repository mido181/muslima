import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { BASE_URL } from '../../base_URL';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from '../toaster.service';
import { UserResponseService } from '../user-response.service';
import { Iuser } from '../../interfaces/user.interface';

interface isAuth {
  isAuthenticated: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private HTTP = inject(HttpClient);
  private readonly URL = `${BASE_URL}/auth`;
  private toaster = inject(ToasterService);
  private router = inject(Router);  
  private userServices = inject(UserResponseService);
  
  private currentUserStatus$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  set userStatus(val: boolean) {
    this.currentUserStatus$.next(val);
  }
  get userStatus(): Observable<boolean> {
    return this.currentUserStatus$.asObservable();
  }

  checkAuthStatus() {
    return this.HTTP.post<isAuth>(`${this.URL}/status`, {}).pipe(
      map((response) => {
        this.userStatus = response.isAuthenticated;
        return response.isAuthenticated;
      })
    );
  }

  register(registerData: FormGroup) {
    return this.HTTP.post<{ user: Iuser }>(
      `${this.URL}/register`,
      registerData
      // { withCredentials: true } // if using cookies
    ).pipe(
      tap((val) => {
        this.router.navigate(['/home']);
        this.userServices.userResponse = val.user;
        this.toaster.successToaster('مرحبا بك في مجتمعنا ');
        this.userStatus = true;
      })
    );
  }
  login(loginData: FormGroup) {
    return this.HTTP.post<{ user: Iuser }>(
      `${this.URL}/login`,
      loginData,
      { withCredentials: true } // if using cookies
    ).pipe(
      tap((val) => {
        this.userServices.userResponse = val.user;
        this.userStatus = true;
        this.router.navigate(['/home']);
        this.toaster.successToaster('تم تسجيل الدخول بنجاح');
      })
    );
  }

 get logout() {
    return this.HTTP.get(
      `${this.URL}/logout`
    ).pipe(
      tap(() => {
        this.router.navigate(['/']);
        this.userStatus = false;
        this.toaster.successToaster('تم تسجيل الخروج بنجاح');
      })
    );
  }
}
