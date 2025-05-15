import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedActivitiesService {
  activitiesSelected$ = new BehaviorSubject<'interest'|'favorite'>('interest');
  Activities$ = this.activitiesSelected$.asObservable();


  constructor() {
    this.activitiesSelected$.next('interest');
  }
}
