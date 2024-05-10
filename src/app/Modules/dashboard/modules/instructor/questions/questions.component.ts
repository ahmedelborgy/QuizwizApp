import { Component } from '@angular/core';
import { QuestionService } from '../questions/service/question.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/core/helperServic/helper.service';
import { Iquestions } from '../questions/interFac/iquestions';
import { AddEditViewQuestionsComponent } from './components/add-edit-view-questions/add-edit-view-questions.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  tableData:Iquestions[]=[];
  is_Messg:string|any;
    constructor(private _questionServ:QuestionService,
      private _Router:Router,
      private _ToastrService:ToastrService,
      private helperServ:HelperService,
      public dialog: MatDialog
    
    ){}
    ngOnInit(): void {
   
      this.allQuestions();
    }
  
    allQuestions(){
      console.log('mmmmmmm');
      
      this._questionServ.getAllQuestion().subscribe({
        next:(res)=>{
          console.log(res);
          this.tableData=res
        },
        error:(err)=>{
          // console.log(err);
          
        },
        complete:()=>{
      
        }
      })
      
      }





      openDialogAddEdit(action:string,item:any): void {
        const dialogRef = this.dialog.open(AddEditViewQuestionsComponent, {
          width: '800px',
          data: {action,item},
    
        });
    
      dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed',result);
    
      if(result !=undefined){
     console.log(action);
    if(action=='delet'){
    
    console.log(result);
    // this.deletGroup(result);
    }
    
    if(action=='add'){
    
      // console.log(result);
      // this.addGroup(result);
      }
      if(action=='edit'){
    console.log(item._id);
    
      console.log(result);
      // this.editGroup(result,item._id);
        
        }
    
          }
    
          
     
    
    
        });
      }
    


}
