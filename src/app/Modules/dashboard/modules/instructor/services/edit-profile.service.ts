import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserProfile } from 'src/app/core/model/i-user-profile';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(private _HttpClient: HttpClient) { }

  UpdateInstractorAccount(data: IUserProfile): Observable<IUserProfile> {
    return this._HttpClient.put<IUserProfile>('instructor', data);
  }
  UpdateStudentAccount(data: IUserProfile): Observable<IUserProfile> {
    return this._HttpClient.put<IUserProfile>('student', data);
  }
}
