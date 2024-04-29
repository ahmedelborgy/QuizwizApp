import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    const token = localStorage.getItem('userToken');    
    
    const baseUrl: string =`https://upskilling-egypt.com:3005/api/`;  
   
   

    let Headers = request.clone({
      
      setHeaders: {
        'Authorization': ` ${token}`
      },
      url: request.url.includes('assets')? request.url:baseUrl + request.url
    })

  
   
   
   
   
    return next.handle(request);
  }
}
