import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentQuizeService {

  constructor(private http:HttpClient) { }

quizeDetailes:any={
  
};
exameDetailes(details:any,code:string){

console.log(details,code);

this.quizeDetailes={
  data:details,
  code:code
}
  return details;
}

  
joinQuiz(code:string):Observable<any>{
console.log(code);

return this.http.post(`quiz/join`,code);
  }
  // quiz/without-answers/6642e4ef58f7023d5eff1857

  getquizWithoutAnswers(quize:string):Observable<any>{
   
    
    return this.http.get(`quiz/without-answers/${quize}`);
      }


      submitQuiz(code:string,data:any):Observable<any>{
        console.log(code);
        console.log(data);
        console.log(this.quizeDetailes.data);
        
        
        return this.http.post(`quiz/submit/${code}`,{data});
          }






















}
