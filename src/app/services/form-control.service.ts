import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }
  getFormControl(formGroup:FormGroup,value: string) {
   return formGroup.get(value);
  }

}
