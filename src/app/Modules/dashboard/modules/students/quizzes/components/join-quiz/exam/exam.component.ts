import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentQuizeService } from '../../../services/student-quize.service';
import { MatStepperIntl } from '@angular/material/stepper';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

//  questionsData:any;
 optionalLabelText: string='';
 answersAllQuestions:any[]=[];
 answersQuestion:any={};
quize:string='';
codeQuize:string='';


 optionalLabelTextChoices: string[] = ['Option 1', 'Option 2', 'Option 3'];
 questionsData:any= [
  {
      _id: "6640018c58f7023d5efe634b",
      title: "What is the purpose of JavaScript in web development?",
      options: {
          A: "a",
          B: "b",
          C: "c",
          D: "d",
          _id: "6640018c58f7023d5efe634c"
      }
  },
  {
      _id: "65d861b9ef9b2594e369b716",
      title: "What is the purpose of JavaScript in web development?",
      options: {
          A: "Adding interactivity to web pages",
          B: " Styling web pages",
          C: "Storing data on the server",
          D: "Defining page structure",
          _id: "65d861b9ef9b2594e369b717"
      }
  }
]

  constructor(private _formBuilder: FormBuilder,
    private quizeServ:StudentQuizeService,
    private _Router: Router,
    private _ToastrService: ToastrService,
    public dialog: MatDialog,
     private _matStepperIntl: MatStepperIntl,
     private _ActivatedRoute:ActivatedRoute


  ) {}

ngOnInit(): void {
  console.log(this.quizeServ.quizeDetailes);
  console.log(this.quizeServ.quizeDetailes.data.quiz);
  this.quize=this.quizeServ.quizeDetailes.data.quiz;
  // this.getquizWithoutAnswers(this.quizeServ.quizeDetailes.data.quiz);
  console.log(this.quize);
this.codeQuize=this._ActivatedRoute.snapshot.params?.['quiz'];

console.log(this.codeQuize);
this.getquizWithoutAnswers(this.codeQuize);

  
}


 updateOptionalLabel(id:any) {
    this._matStepperIntl.optionalLabel = this.optionalLabelText;
    this._matStepperIntl.changes.next();
    // console.log(this._matStepperIntl.optionalLabel );
    // console.log( this._matStepperIntl);
    // console.log(id);
    this.answersQuestion={
    question:id,
    answer:this._matStepperIntl.optionalLabel 

    }
    console.log(this.answersAllQuestions);
    console.log(this.answersQuestion.question);
    this.answersAllQuestions.push(this.answersQuestion);


// for(let i=0;i<this.answersAllQuestions.length;i++){
  
//   console.log(this.answersAllQuestions[i].question);
//   console.log(this.answersQuestion.question);

//   if(this.answersQuestion.question==this.answersAllQuestions[i].questions){
//     this.answersAllQuestions[i]==this.answersQuestion;
//     console.log('found');
    
//   }else{
//     console.log('not found');
    
//     // this.answersAllQuestions.push(this.answersQuestion);

//   }
  
// }





    // this.answersAllQuestions.push(this.answersQuestion);
      console.log(this.answersAllQuestions);
 
    
  }






getquizWithoutAnswers(quize:any){


  this.quizeServ.getquizWithoutAnswers(quize).subscribe({

    next:(res)=>{
   console.log(res);
   this.questionsData=res.data.questions;
   console.log(this.questionsData);
   

    },
    error:(err)=>{
console.log(err);

    },
    complete:()=>{

    }

  })
}

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });




submit(){

console.log(this.answersAllQuestions);
console.log(this._ActivatedRoute.snapshot.params?.['quiz']);
let quizeA=this._ActivatedRoute.snapshot.params?.['quiz'];
console.log(quizeA);

this.quizeServ.submitQuiz(quizeA,this.answersAllQuestions).subscribe({

 next:(res)=>{
   console.log(res);

   console.log(res);
   

    },
    error:(err)=>{
console.log(err);

    },
    complete:()=>{

    }






})
}




 
}


