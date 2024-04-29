import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [
    { path: 'instructor', loadChildren: () => import('./modules/instructor/instructor.module').then(m => m.InstructorModule), title: 'instructor' },
    { path: 'students', loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule) }
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
