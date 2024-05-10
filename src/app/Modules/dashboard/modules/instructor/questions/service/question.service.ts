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

addQuestion(data:any):Observable<any>{
  return this.htpp.post(`question`,data);

}


deletQuestion(id:any):Observable<any>{
  return this.htpp.delete(`question/${id}`);

}

editQuestion(data:any,id:any):Observable<any>{
  return this.htpp.put(`question/${id}`,data);

}







}
