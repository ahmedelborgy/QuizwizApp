import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GroupService } from '../../../groups/service/group.service';
import { Igroups } from '../../../groups/interFac/igroups';

@Component({
  selector: 'app-add-edit-quizes',
  templateUrl: './add-edit-quizes.component.html',
  styleUrls: ['./add-edit-quizes.component.scss']
})
export class AddEditQuizesComponent {

  tableGroub:Igroups[]=[];
  start!: Date ;
  end!: Date ;
  
  constructor(private dialogRef: MatDialogRef<AddEditQuizesComponent>,private _GroupService:GroupService,
    

    @Inject(MAT_DIALOG_DATA) public data: any){

  }

  quizesForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    duration: new FormControl(null, [Validators.required]),
    noOfQuestions: new FormControl(null, [Validators.required]),
    scorePerQuestion: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    schedule: new FormControl(null, [Validators.required]),
    difficultyLevel: new FormControl(null, [Validators.required]),
    categoryType: new FormControl(null, [Validators.required]),
    groupName: new FormControl(null, [Validators.required]),
  })


  allGropus(){
    this._GroupService.getAllGroubs().subscribe({
      next:(res)=>{
        // console.log(res);
        this.tableGroub=res
      },
      error:(err)=>{
        // console.log(err);
        
      },
      complete:()=>{
    
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
