import { Component } from '@angular/core';
import { QuestionService } from '../questions/service/question.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/core/helperServic/helper.service';
import { Iquestions } from '../questions/interFac/iquestions';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent {
//   tableData:Iquestions[]=[];
// is_Messg:string|any;
//   constructor(private _questionServ:QuestionService,
//     private _Router:Router,
//     private _ToastrService:ToastrService,
//     private helperServ:HelperService,
//     public dialog: MatDialog
  
//   ){}
//   ngOnInit(): void {
 
//     this.allQuestions();
//   }

//   allQuestions(){
//     console.log('mmmmmmm');
    
//     this._questionServ.getAllQuestion().subscribe({
//       next:(res)=>{
//         console.log(res);
//         this.tableData=res
//       },
//       error:(err)=>{
//         // console.log(err);
        
//       },
//       complete:()=>{
    
//       }
//     })
    
//     }
    




}
