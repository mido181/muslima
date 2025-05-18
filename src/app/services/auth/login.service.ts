import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login(username: string, password: string, ff: boolean): Observable<boolean> {
    return of(ff);
  }
}
