import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-code-quizes',
  templateUrl: './code-quizes.component.html',
  styleUrls: ['./code-quizes.component.scss']
})
export class CodeQuizesComponent implements OnInit {
  copyText :any
  constructor(
    public dialogRef: MatDialogRef<CodeQuizesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    console.log(this.data);
    
  }

  myFunction(){
   this.copyText= document.getElementById("myInput");
    this.copyText.select();
    navigator.clipboard.writeText(this.copyText.value);
    alert("Copied the text: " + this.copyText.value);


  }
}
