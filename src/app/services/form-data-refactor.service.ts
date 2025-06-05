import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormDataRefactorService {

  constructor() { }

  formDataFn(form:FormGroup){
  let formData = new FormData()
  let keys =  Object.keys(form.controls)
  let vals =  Object.values(form.controls).map(val=>val.value); 
  for (let i = 0; i < keys.length; i++) {
    formData.append(keys[i],vals[i])   
  }
    return formData
  }



}

