import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { studentGuard } from 'src/app/core/guards/student.guard';
import { instructorGuard } from 'src/app/core/guards/instructor.guard';
import { HomeComponent } from './components/home/home.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'home' },
    { path: 'editProfile', component: EditProfileComponent, title: 'edit Profile' },

    { path: 'instructor', canActivate: [instructorGuard], loadChildren: () => import('./modules/instructor/instructor.module').then(m => m.InstructorModule), title: 'instructor' },
    { path: 'students', canActivate: [studentGuard], loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule) }
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
