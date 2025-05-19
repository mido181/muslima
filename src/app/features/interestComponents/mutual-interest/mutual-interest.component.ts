import { Component, inject, OnInit } from '@angular/core';
import { SelectedActivitiesService } from '../../../services/selected-activities.service';
import { CardContanierComponent } from '../../../shared/card-contanier/card-contanier.component';
import { EmptyContentComponent } from '../../../shared/empty-content/empty-content.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-mutual-interest',
  imports: [CardContanierComponent, MatIcon, EmptyContentComponent],
  templateUrl: './mutual-interest.component.html',
  styleUrl: './mutual-interest.component.scss',
})
export class MutualInterestComponent implements OnInit {
  private activitiesServices = inject(SelectedActivitiesService);
  activity$!: 'interest' | 'favorite';

  ngOnInit(): void {
    this.activitiesServices.Activities$.subscribe(
      (res) => (this.activity$ = res)
    );
  }
}
