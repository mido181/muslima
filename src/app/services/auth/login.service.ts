import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
   currentUserStatus$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public currentUserOBS$: Observable<boolean> = this.currentUserStatus$.asObservable();

  
  private HTTP = inject(HttpClient);


  public get currentUserValue() {
    return this.currentUserStatus$.value;
  }

  login(username: string, password: string, ff: boolean) {
    return this.HTTP.post('https://jsonplaceholder.typicode.com/posts', {
      username,
      password,
    })
  }

  logout() {
   this.currentUserStatus$.next(false);


  }
}
