import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentQuizeService } from '../../../services/student-quize.service';
import { MatStepperIntl } from '@angular/material/stepper';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

 questionsData:any;
 optionalLabelText: string='';
 optionalLabelTextChoices: string[] = ['Option 1', 'Option 2', 'Option 3'];
//  questions:any= [
//   {
//       _id: "6640018c58f7023d5efe634b",
//       title: "What is the purpose of JavaScript in web development?",
//       options: {
//           A: "a",
//           B: "b",
//           C: "c",
//           D: "d",
//           _id: "6640018c58f7023d5efe634c"
//       }
//   },
//   {
//       _id: "65d861b9ef9b2594e369b716",
//       title: "What is the purpose of JavaScript in web development?",
//       options: {
//           A: "Adding interactivity to web pages",
//           B: " Styling web pages",
//           C: "Storing data on the server",
//           D: "Defining page structure",
//           _id: "65d861b9ef9b2594e369b717"
//       }
//   }
// ]

  constructor(private _formBuilder: FormBuilder,
    private quizeServ:StudentQuizeService,
    private _Router: Router,
    private _ToastrService: ToastrService,
    public dialog: MatDialog,
     private _matStepperIntl: MatStepperIntl




  ) {}

ngOnInit(): void {
  console.log(this.quizeServ.quizeDetailes);
  console.log(this.quizeServ.quizeDetailes.data.quiz);
  
  this.getquizWithoutAnswers(this.quizeServ.quizeDetailes.data.quiz)
}

 updateOptionalLabel() {
    this._matStepperIntl.optionalLabel = this.optionalLabelText;
    // Required for the optional label text to be updated
    // Notifies the MatStepperIntl service that a change has been made
    this._matStepperIntl.changes.next();
    console.log(this._matStepperIntl.optionalLabel );
    console.log( this._matStepperIntl);
    
    
  }



// joinQuizeCode(code:any){
//   this.quizeServ.joinQuiz(code).subscribe({
   
    





//     next: (res) => {
//       console.log(res);
   
//       this.quizeServ.exameDetailes(this.dataCodeQuize,code);
//     },
//     error: (err) => {
//       console.log(err);
//       this._ToastrService.error(` join error : ${this.is_Messg}`);
    

//     },
//     complete:()=>{
//       // console.log('add complet');
//   this._Router.navigate([`/dashboard/students/quizzes/exam`,code]);
//   this._ToastrService.success(`join succes: ,${this.is_Messg}`)
    
//     }














    
//   })
// }



getquizWithoutAnswers(quize:any){

  this.quizeServ.getquizWithoutAnswers(quize).subscribe({

    next:(res)=>{
   console.log(res);
   this.questionsData=res.data.questions;
  //  this.questions=res.data.questions;
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





 
}


