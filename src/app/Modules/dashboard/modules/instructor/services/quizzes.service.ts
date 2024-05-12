import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(private _HttpClient: HttpClient) { }


  incommingQuiz(): Observable<any> {
    return this._HttpClient.get('quiz/incomming')
  }

  onAddQuize(data: FormGroup): Observable<any> {
    return this._HttpClient.post('quiz', data)
  }


}
