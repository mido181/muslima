import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { SelectedActivitiesService } from '../../../services/selected-activities.service';
import { CardContanierComponent } from '../../../shared/card-contanier/card-contanier.component';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-interest-me',
  imports: [CardContanierComponent, CardComponent],
  templateUrl: './interest-me.component.html',
  styleUrl: './interest-me.component.scss',
})
export class InterestMeComponent implements OnInit {
  private activitiesServices = inject(SelectedActivitiesService);
  activity$!: 'interest' | 'favorite';

  ngOnInit(): void {
    this.activitiesServices.Activities$.subscribe(
      (res) => (this.activity$ = res)
    );
  }
}
