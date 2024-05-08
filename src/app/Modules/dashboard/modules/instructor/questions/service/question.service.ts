import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private htpp:HttpClient
  ) { }

 

getAllQuestion():Observable<any>{

return this.htpp.get(`question`);


}

addAllGroubs(data:any):Observable<any>{
  return this.htpp.post(`group`,data);

}
}
