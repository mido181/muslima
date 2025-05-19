import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SelectedActivitiesService } from '../../../services/selected-activities.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SubHeaderComponent } from '../../../shared/sub-header/sub-header.component';

@Component({
  selector: 'app-interest',
  imports: [RouterOutlet, SubHeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.scss',
})
export class InterestComponent implements OnInit {
  private activitiesServices = inject(SelectedActivitiesService)
  activity$!:'interest'|'favorite';


  ngOnInit(): void {
   this.activitiesServices.Activities$.subscribe(res=> this.activity$ = res)
  }
  activitesLists={

    interest: [
      { name: 'معحب بي', routeName: '/interest' },
      { name: 'المعجب بهم', routeName: 'interesting' },
      { name: 'الإعجابات المتبادلة', routeName: 'Mutualinterest' },
    ],
    favorite:[
      { name: 'انا المفضل لديهم', routeName: '/interest' },
      { name: 'الأعضاء المفضلين لي', routeName: 'interesting' },
      { name: 'المفضلين المتبادلة', routeName: 'Mutualinterest' },
    ]
  }
  }
