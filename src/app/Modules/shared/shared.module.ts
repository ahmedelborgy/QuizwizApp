import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatTabsModule} from '@angular/material/tabs';
import { NgSelectModule } from '@ng-select/ng-select';


import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({

  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,

    MatPaginatorModule,
    FormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    DragDropModule,

    NgSelectModule,
    


    MatTabsModule,

    MatDatepickerModule,
    MatNativeDateModule

    // HttpClientModule



    NgxSpinnerModule



  ],
  exports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
    MatPaginatorModule,
    FormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    DragDropModule,

    MatTabsModule,

    NgSelectModule,

    MatDatepickerModule,
    MatNativeDateModule

    NgxSpinnerModule



  ],
  declarations: [
    // SliceStrPipe
  ],
})
export class SharedModule { }
