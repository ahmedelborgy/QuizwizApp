import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { studentGuard } from 'src/app/core/guards/student.guard';
import { instructorGuard } from 'src/app/core/guards/instructor.guard';
import { HomeComponent } from './components/home/home.component';
import { EditProfileComponent } from './modules/instructor/edit-profile/edit-profile.component';
import { HomeStudentComponent } from './components/home-student/home-student.component';

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Dashboard', data: { title: 'Dashboard' } },
    { path: 'homestudent', component: HomeStudentComponent, title: 'Dashboard', data: { title: 'Dashboard' } },

    { path: 'instructor', canActivate: [instructorGuard], loadChildren: () => import('./modules/instructor/instructor.module').then(m => m.InstructorModule), data: { title: 'Instructor' } },
    { path: 'students', canActivate: [studentGuard], loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule), data: { title: 'Students' } }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
