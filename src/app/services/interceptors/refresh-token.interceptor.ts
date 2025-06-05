import { HttpErrorResponse, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../token/token.service';
import { catchError } from 'rxjs/internal/operators/catchError';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { switchMap, throwError } from 'rxjs';

export const refreshTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const router =  inject(Router);
  const authService =  inject(AuthService);
  const token = inject(TokenService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Handle 401 Unauthorized errors
      if (error.status === 401) {
        // Token expired - attempt refresh
        if (error.error?.shouldRefresh) {
          return token.refreshToken().pipe(
            switchMap(() => next(req)), // Retry original request after refresh
            catchError((refreshError) => {
              authService.logout;
              authService.userStatus=false;
              router.navigate(['/login']);
              return throwError(() => refreshError);
            })
          );
        }
        
        // Not a refreshable error - force login
        if (error.error?.shouldLogin) {
          authService.logout;
          router.navigate(['/login']);
              authService.userStatus=false;

        }
      }

      // Propagate other errors
      return throwError(() => error);
    })
  );
   
  };
