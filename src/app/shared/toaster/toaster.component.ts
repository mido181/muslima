import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { ToasterService } from '../../services/toaster.service';
@Component({
  selector: 'app-toaster',
  imports: [Toast, ButtonModule, ToastModule, AvatarModule],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss',
})
export class ToasterComponent {
  private toasterService = inject(ToasterService);

  visible: boolean = false;

  success(detail: string, summary: string) {
    this.toasterService.successToaster(detail,summary);
  
  }

  // show() {
  //   this.messageService.add({
  //     severity: 'success',
  //     summary: 'success',
  //     detail: 'Message Content',
  //     life: 2000,
  //   });
  // }

  // showConfirm() {
  //   this.messageService.add({
  //     key: 'confirm',
  //     sticky: true,
  //     severity: 'success',
  //     summary: 'Can you send me the report?',
  //   });
  //   this.visible = true;
  // }

  // onConfirm() {
  //   this.messageService.clear('confirm');
  //   this.visible = false;
  // }

  // onReject() {
  //   this.messageService.clear('confirm');
  //   this.visible = false;
  // }
}
