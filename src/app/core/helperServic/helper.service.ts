import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private htpp:HttpClient
  ) { }

  getAllStudents(){
    return this.htpp.get(`student/without-group`);
    
  
  }
 
}
