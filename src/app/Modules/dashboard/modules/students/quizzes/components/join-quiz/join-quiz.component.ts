import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-join-quiz',
  templateUrl: './join-quiz.component.html',
  styleUrls: ['./join-quiz.component.scss']
})
export class JoinQuizComponent {
  constructor(
    public dialogRef: MatDialogRef<JoinQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }







  GroubForm = new FormGroup({
    code: new FormControl(null, [Validators.required]),
  });
}
