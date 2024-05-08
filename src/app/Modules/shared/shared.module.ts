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
import { ToastrModule } from 'ngx-toastr';
// import { HttpClientModule } from '@angular/common/http';


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
    MatTabsModule,
    // HttpClientModule
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
    MatTabsModule
  ],
})
export class SharedModule { }
