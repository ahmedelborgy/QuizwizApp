import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GroupService } from '../../../groups/service/group.service';
import { Igroups } from '../../../groups/interFac/igroups';

@Component({
  selector: 'app-add-edit-quizes',
  templateUrl: './add-edit-quizes.component.html',
  styleUrls: ['./add-edit-quizes.component.scss']
})
export class AddEditQuizesComponent implements OnInit{

  tableGroub:Igroups[]=[];
  start!: Date ;
  end!: Date ;
  
  constructor(private dialogRef: MatDialogRef<AddEditQuizesComponent>,private _GroupService:GroupService,
    

    @Inject(MAT_DIALOG_DATA) public data: any){

  }


  ngOnInit(): void {
    this.allGropus();
  }

  quizesForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    duration: new FormControl(null, [Validators.required]),
    questions_number: new FormControl(null, [Validators.required]),
    score_per_question: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    schadule: new FormControl(null, [Validators.required]),
    difficulty: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required]),
    group: new FormControl(null, [Validators.required]),
  })


  allGropus(){
    this._GroupService.getAllGroubs().subscribe({
      next:(res)=>{
        console.log(res);
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
