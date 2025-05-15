import { Component, inject, OnInit } from '@angular/core';
import { SelectedActivitiesService } from '../../../services/selected-activities.service';

@Component({
  selector: 'app-mutual-interest',
  imports: [],
  templateUrl: './mutual-interest.component.html',
  styleUrl: './mutual-interest.component.scss'
})
export class MutualInterestComponent implements OnInit {
  private activitiesServices = inject(SelectedActivitiesService)
  activity$!:'interest'|'favorite';


  ngOnInit(): void {
   this.activitiesServices.Activities$.subscribe(res=> this.activity$ = res)
  }

}
