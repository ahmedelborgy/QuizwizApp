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


  onLogin(data: any): Observable<any> {


    console.log(data);

    return this._HttpClient.post(`auth/login`, data);
  }
}
