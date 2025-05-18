import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  private toaster = inject(MessageService)
  // visible: boolean = false;

//     showConfirm() {
//         if (!this.visible) {
//             this.toaster.add({ key: 'confirm', sticky: true, severity: 'success', summary: 'Can you send me the report?' });
//             this.visible = true;
//         }
// }



rejectToaster(detail: string,summary: string = 'Error') {
   this.toaster.add({
      severity: 'error',
      summary: summary,
      detail: detail,
      life: 2000,
    });
  }


successToaster(detail: string, summary: string = 'Success') {
   this.toaster.add({
      severity: 'success',
      summary: summary,
      detail: detail,
      life: 2000,
    });
  }

}
