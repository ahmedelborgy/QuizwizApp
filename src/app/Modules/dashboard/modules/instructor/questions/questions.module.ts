import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { StrSlicePipe } from './Pipes/str-slice.pipe';
import { AddEditViewQuestionsComponent } from './components/add-edit-view-questions/add-edit-view-questions.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    StrSlicePipe,
    AddEditViewQuestionsComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    SharedModule
  ]
})
export class QuestionsModule { }
