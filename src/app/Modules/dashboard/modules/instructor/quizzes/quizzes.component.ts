import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { QuestionsModule } from './questions/questions.module';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent {

  constructor(private _Router: Router) { }

  QuestionsModule() {
    this._Router.navigate(['/dashboard/instructor/questions'])
  }

}
