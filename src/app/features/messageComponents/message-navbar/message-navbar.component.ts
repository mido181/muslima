import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { UserStatusComponent } from '../../../shared/user-status/user-status.component';

@Component({
  selector: 'app-message-navbar',
  imports: [MatIcon, RouterLink, NgClass, UserStatusComponent],
  templateUrl: './message-navbar.component.html',
  styleUrl: './message-navbar.component.scss',
})
export class MessageNavbarComponent {}
