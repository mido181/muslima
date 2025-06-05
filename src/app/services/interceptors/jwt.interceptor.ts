import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../token/token.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
   const Req = req.clone({
      withCredentials: true // Send cookies with every request
    });

  return next(Req);
}

