import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../../base_URL';

@Injectable({
  providedIn: 'root'
})
export class TokenService { 
  private URL = `${BASE_URL}/auth/refresh`;
  private HTTP = inject(HttpClient);
  

  refreshToken(){
return this.HTTP.get(this.URL)
 }
}
