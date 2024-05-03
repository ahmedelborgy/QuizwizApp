import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(private _HttpClient: HttpClient) { }


  incommingQuiz(): Observable<any> {
    return this._HttpClient.get('quiz/incomming')
  }

}
