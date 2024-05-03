import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  role: string | any = '';


  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('token') !== null) {
      this.getProfile()
    }
  }

  getProfile() {
    let encoded: any = localStorage.getItem('token');
    let decoded: any = jwtDecode(encoded);
    console.log(decoded);
    console.log(decoded.role);
    localStorage.setItem('role', decoded.role);
    localStorage.setItem('email', decoded.email);
    localStorage.setItem('Id', decoded.sub);
    this.getRole();
  }

  getRole() {
    if (localStorage.getItem('token') !== null
      &&
      localStorage.getItem('role')) {
      this.role = localStorage.getItem('role')
    }
  }



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


  logout() {
    localStorage.clear();
    this._Router.navigate(['auth/login'])
  }

}
