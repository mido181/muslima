import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { UserStatusComponent } from '../user-status/user-status.component';
import { RouterLink } from '@angular/router';
import { ToasterService } from '../../services/toaster.service';
import { Tag } from 'primeng/tag';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-card',
  imports: [
    MatIcon,
    UserStatusComponent,
    RouterLink,
    MatTooltip,
    Tag,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  talkWith: string = ' محمد ';

  private ToasterService = inject(ToasterService);

  successToaster(detail: string, summary: string) {
    this.ToasterService.successToaster(detail, summary);
    console.log('Success Toaster called');
  }
}
