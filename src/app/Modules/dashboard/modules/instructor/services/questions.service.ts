import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private _HttpClient: HttpClient) { }


  allQuestions(): Observable<any> {
    return this._HttpClient.get('question')
  }

}
