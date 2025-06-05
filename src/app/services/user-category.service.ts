import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../base_URL';
import { Iuser } from '../interfaces/user.interface';
import { BehaviorSubject, map, tap } from 'rxjs';
import { UserResponseService } from './user-response.service';
import { FormDataRefactorService } from './form-data-refactor.service';
import { FormGroup } from '@angular/forms';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root',
})
export class UserCategoryService {
  private formData = inject(FormDataRefactorService);
  private URL = `${BASE_URL}/users`;
  private HTTP = inject(HttpClient);
  private userServices = inject(UserResponseService);
  private toaster = inject(ToasterService);

  userById(id: string) {
    return this.HTTP.get<{ user: Iuser }>(`${this.URL}/id/${id}`).pipe(
      map((val) => {
        this.userServices.userResponse = val.user;
        return val;
      })
    );
  }
  updateById(id: string, FD: FormGroup) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data', // Browser sets this automatically for FormData
      'Content-Type': 'multipart/form-data', // Example: Auth token
    });
    return this.HTTP.put<any>(
      `${this.URL}/update/${id}`,
      this.formData.formDataFn(FD)
    ).pipe(
      map((val) => {
        console.log(val);

        return val;
      }),
      tap(() => {
        this.toaster.successToaster('تم تحديث البيانات بنجاح');
      })
    );
  }

  get allUser() {
    return this.HTTP.get<{ users: Iuser[] }>(this.URL).pipe(
      map((val) => {
        return val.users;
      })
    );
  }

  get allActive() {
    return this.HTTP.get<{ users: Iuser[] }>(`${this.URL}/actives`);
  }
  get allNewest() {
    return this.HTTP.get<{ users: Iuser[] }>(`${this.URL}/newest`);
  }
  get allByCity() {
    return this.HTTP.get<{ users: Iuser[] }>(`${this.URL}/country`);
  }
  get allByCountry() {
    return this.HTTP.get<{ users: Iuser[] }>(`${this.URL}/city`);
  }
  constructor() {}
}
