import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {

  animal: string|any;
  action: string|any='add';

  constructor( private dialogRef: MatDialogRef<AddStudentComponent>,  @Inject(MAT_DIALOG_DATA) public data: any,){}

  studentForm = new FormGroup({

    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
  })


  onSubmit(name:string,phone:string){

  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
