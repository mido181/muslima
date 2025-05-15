import { Component, inject, OnInit } from '@angular/core';
import { SelectedActivitiesService } from '../../../services/selected-activities.service';

@Component({
  selector: 'app-my-interest',
  imports: [],
  templateUrl: './my-interest.component.html',
  styleUrl: './my-interest.component.scss',
})
export class MyInterestComponent implements OnInit {
  private activitiesServices = inject(SelectedActivitiesService);
  activity$!: 'interest' | 'favorite';

  ngOnInit(): void {
    this.activitiesServices.Activities$.subscribe(
      (res) => (this.activity$ = res)
    );
  }
}
