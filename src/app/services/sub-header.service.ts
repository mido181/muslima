import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubHeaderService {
  headerStatus$ = new BehaviorSubject<boolean>(false);
  visableHeader$ = this.headerStatus$.asObservable();

  constructor() {
    this.headerStatus$.next(true);
  }
}
