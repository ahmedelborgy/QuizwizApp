import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../modules/instructor/services/students.service';
import { Router } from '@angular/router';
import { QuizzesService } from '../../modules/instructor/services/quizzes.service';
import { IStudent } from 'src/app/core/model/istudent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  studentTable: IStudent[] = [];
  quizes: any;

  constructor(private _StudentsService: StudentsService, private _Router: Router, private _QuizzesService: QuizzesService) { }

  ngOnInit(): void {
    this.getTopStudents();
    this.getIncommingQuiz();
  }

  getTopStudents() {
    this._StudentsService.topFive().subscribe({
      next: (value) => {
        console.log(value)
        this.studentTable = value;
      },
    })
  }


  getIncommingQuiz() {
    this._QuizzesService.incommingQuiz().subscribe({
      next: (res) => {
        console.log(res)
        this.quizes = res;
      },
    })
  }


  studentsModule() {
    this._Router.navigate(['/dashboard/instructor/students'])
  }
}
