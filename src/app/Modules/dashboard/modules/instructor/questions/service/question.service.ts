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
  console.log(data);
  
  return this.htpp.post(`question`,data);

}


deletQuestion(id:any):Observable<any>{
  return this.htpp.delete(`question/${id}`);

}

editQuestion(answer:any,id:any):Observable<any>{
  console.log(answer,id);
  
  return this.htpp.put(`question/${id}`,{answer:answer});

}







}
