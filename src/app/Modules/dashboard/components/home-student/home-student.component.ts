import { Component, OnInit } from '@angular/core';
import { StudentQuizesService } from '../../modules/students/quizzes/service/student-quizes.service';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.scss']
})
export class HomeStudentComponent implements OnInit{

  incomingQuizes:any;
  
  constructor(private _StudentQuizesService:StudentQuizesService){}
  
  
  ngOnInit(): void {
    this.getIncommingQuiz()
  }

  getIncommingQuiz() {
    this._StudentQuizesService.incommingQuiz().subscribe({
      next: (res) => {
        console.log(res)
        this.incomingQuizes = res;
      },
    })
  }
}
