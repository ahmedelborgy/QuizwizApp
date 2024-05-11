import { Options } from './../../interFac/iquestions';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-view-questions',
  templateUrl: './add-edit-view-questions.component.html',
  styleUrls: ['./add-edit-view-questions.component.scss']
})
export class AddEditViewQuestionsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddEditViewQuestionsComponent>,
    

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
}
// description



/*





{
    "title":"sec question",
    "description":"ay",
    "options":{
        "A":"first option",
        "B":"sec option",
        "C":"third option",
        "D":"forth option"
    },
    "answer":"B",
    "difficulty":"hard",
    "type":"BE"
}





*/

QuestionForm = new FormGroup({
  title: new FormControl(null, [Validators.required]),
  description: new FormControl(null, [Validators.required]),


  
  options:new FormGroup({
    A: new FormControl(null, [Validators.required]),
  
    B: new FormControl(null, [Validators.required]),
    C: new FormControl(null, [Validators.required]),
    D: new FormControl(null, [Validators.required]),

    
  }),
  
  
  answer: new FormControl(null, [Validators.required]),
  difficulty: new FormControl(null, [Validators.required]),

  type: new FormControl(null, [Validators.required]),
  

});


ngOnInit(): void {

  console.log(this.data);
 if(this.data.action=='view'){
  this.QuestionForm.disable();
  }else{
    this.QuestionForm.enable();
  }
  
  if(this.data.action=='edit'||this.data.action=='view'){

  
    console.log(this.data.action);
    this.QuestionForm.patchValue({
      title:this.data.item.title
      ,
      description:this.data.item.description,
      answer:this.data.item.answer,
      difficulty:this.data.item.difficulty,
      type:this.data.item.type,
      options: {
            A: this.data.item.options.A,
            B: this.data.item.options.B,
            C: this.data.item.options.C,

            D: this.data.item.options.D,


          },

    

    })

    



  
 
 
 
 
 
 
 
 
 
 
 
  }
}

onNoClick(): void {
  this.dialogRef.close();
}

}
