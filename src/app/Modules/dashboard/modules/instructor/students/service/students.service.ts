import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient
  ) { }

  
  ongetStudentsWithoutGroups():Observable<any>{
    return this.http.get(`student/without-group`);
  }

  ongetAllStudents():Observable<any>{
    return this.http.get(`student`);
  }

  getStudentById(id:number):Observable<any>{
    return this.http.get(`student/${id}`);
  }

  ongetAllGroups():Observable<any>{
    return this.http.get(`group`);
  }

  ongetGroupById(groupId : number){
    return this.http.get(`group/${groupId}`);
  }

  // student/65c271f4d7bcdd639a801030
  deletStudent(id:number):Observable<any>{
    return this.http.delete(`student/${id}`);
  }
  // student/65c278780ba99c760533e0a3/65c2bed779b859ea9320885f
  deletFromGroups(groupId:number, studentId:number):Observable<any>{
    return this.http.delete(`student/${groupId}/${studentId}`);
  }

  // /student/65c278780ba99c760533e0a3/65c2bed779b859ea9320885f

AddToGroups(groupId:number, studentId:number):Observable<any>{
  return this.http.get(`student/${groupId}/${studentId}`)
}





}
