import { Component, Input } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-dropdown',
  imports: [MatBadgeModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  @Input() item:string ='';
  @Input() notification:string|number = '';

}
