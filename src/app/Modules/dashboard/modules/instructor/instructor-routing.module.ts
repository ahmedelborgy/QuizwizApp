import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorComponent } from './instructor.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [{
  path: '', component: InstructorComponent, children: [


    { path: 'groups', loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule), data: { title: 'Groups' }, title: 'Groups' },
    { path: 'quizzes', loadChildren: () => import('./quizzes/quizzes.module').then(m => m.QuizzesModule), data: { title: 'Quizzes' }, title: 'Quizzes' },
    { path: 'results', loadChildren: () => import('./results/results.module').then(m => m.ResultsModule), data: { title: 'Results' }, title: 'Results' },
    { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule), data: { title: 'Students' }, title: 'Students' },
    { path: 'editProfile', component: EditProfileComponent, title: 'Edit Profile', data: { title: 'Edit Profile' } },
    { path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) },

  ]
},
  // { path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
