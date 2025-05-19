import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CardContanierComponent } from '../../shared/card-contanier/card-contanier.component';
import { EmptyContentComponent } from '../../shared/empty-content/empty-content.component';

@Component({
  selector: 'app-watch-profile',
  imports: [MatIcon, CardContanierComponent, EmptyContentComponent],
  templateUrl: './watch-profile.component.html',
  styleUrl: './watch-profile.component.scss'
})
export class WatchProfileComponent {

}
