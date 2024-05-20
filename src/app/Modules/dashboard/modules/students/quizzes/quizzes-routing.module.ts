import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from './quizzes.component';
import { ExamComponent } from './components/join-quiz/exam/exam.component';

const routes: Routes = [
  { path: '', component: QuizzesComponent },

  { path: 'exam', component: ExamComponent },
  { path: 'exam/:quiz', component: ExamComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
