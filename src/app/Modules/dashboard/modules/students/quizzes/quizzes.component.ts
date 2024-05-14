import { Component } from '@angular/core';
import { StudentQuizesService } from './service/student-quizes.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent {

  
  completedQuizes:any;

  constructor(private _StudentQuizesService:StudentQuizesService){}

  ngOnInit(): void {
    this.getCompletedQuizes();
  }

  

  getCompletedQuizes() {
    this._StudentQuizesService.completedQuizes().subscribe({
      next: (res) => {
        console.log(res)
        this.completedQuizes = res;
      },
    })
  }








}
