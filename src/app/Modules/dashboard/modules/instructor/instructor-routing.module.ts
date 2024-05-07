import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorComponent } from './instructor.component';

const routes: Routes = [{
  path: '', component: InstructorComponent, children: [

    { path: 'groups', loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule) },
    { path: 'quizzes', loadChildren: () => import('./quizzes/quizzes.module').then(m => m.QuizzesModule) },
    { path: 'results', loadChildren: () => import('./results/results.module').then(m => m.ResultsModule) },
    { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
    { path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) }
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
