import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private _HttpClient: HttpClient) { }

  getResults(): Observable<any> {
    return this._HttpClient.get('quiz/result')
  }

}
