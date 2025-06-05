import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CachingService {
  cache = new Map<string,HttpResponse<any>>()
  constructor() { }

  getCache(key:string): HttpResponse<any> | undefined{
   return this.cache.get(key)
  }

  setCache(key: string, value: HttpResponse<any>): void {
    this.cache.set(key, value);
}


}
