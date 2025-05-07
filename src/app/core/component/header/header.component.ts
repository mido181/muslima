import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DropdownComponent } from '../../../shared/dropdown/dropdown.component';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [MatIcon, DropdownComponent, NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showDropDown = true;
  dropDown() {
    this.showDropDown = !this.showDropDown;
  }
}
