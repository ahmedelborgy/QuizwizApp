import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';

const routes: Routes = [{
  path: '', component: StudentsComponent,
  children: [
    { path: 'quizzes', loadChildren: () => import('./quizzes/quizzes.module').then(m => m.QuizzesModule) },
    { path: 'results', loadChildren: () => import('./results/results.module').then(m => m.ResultsModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
