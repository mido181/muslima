import { HttpInterceptorFn } from '@angular/common/http';

export const userDataInterceptor: HttpInterceptorFn = (req, next) => {
  // Only cache GET requests
  return next(req);
}