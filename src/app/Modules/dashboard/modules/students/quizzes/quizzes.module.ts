import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesComponent } from './quizzes.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { JoinQuizComponent } from './components/join-quiz/join-quiz.component';
import { ExamComponent } from './components/join-quiz/exam/exam.component';


@NgModule({
  declarations: [
    QuizzesComponent,
    JoinQuizComponent,
    ExamComponent,
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    SharedModule
  ]
})
export class QuizzesModule { }
