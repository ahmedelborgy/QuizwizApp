import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { AddStudentComponent } from './components/add-student/add-student.component';


@NgModule({
  declarations: [
    StudentsComponent,
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule
  ]
})
export class StudentsModule { }
