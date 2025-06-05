import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iuser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserResponseService {
 private user: BehaviorSubject< Iuser | null> = new BehaviorSubject<Iuser | null>(null);

  set userResponse(user: Iuser | null) {
    this.user.next(user);
  }

  get userResponse(): Observable< Iuser | null> {
    return this.user.asObservable();
  }

  constructor() {}
}
