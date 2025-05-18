import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor() { }

    Register(username: string, password: string): boolean {
    return true
  }

}
