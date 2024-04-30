import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }


  onRegister(data: object): Observable<any> {
    return this._HttpClient.post('auth/register', data)
  }

  onChangePassword(data: object): Observable<any> {
    return this._HttpClient.post('auth/change-password', data)
  }

  onForgotPassword(data: object): Observable<any> {
    return this._HttpClient.post('auth/forgot-password', data)
  }


  onResetPassword(data: object): Observable<any> {
    return this._HttpClient.post('auth/reset-password', data)
  }

  onLogin(data: any): Observable<any> {


    console.log(data);

    return this._HttpClient.post(`auth/login`, data);

  }
}
