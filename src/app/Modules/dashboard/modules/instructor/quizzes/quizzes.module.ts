import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesComponent } from './quizzes.component';
import { AddEditQuizesComponent } from './components/add-edit-quizes/add-edit-quizes.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { CodeQuizesComponent } from './components/code-quizes/code-quizes.component';


@NgModule({
  declarations: [
    QuizzesComponent,
    AddEditQuizesComponent,
    CodeQuizesComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    SharedModule
  ]
})
export class QuizzesModule { }
