import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private htpp:HttpClient
  ) { }

  getResult(result:any){

  }

getAllGroubs():Observable<any>{

return this.htpp.get(`group`);


}

addAllGroubs(data:any):Observable<any>{
  return this.htpp.post(`group`,data);

}






}
