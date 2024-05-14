import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/core/helperServic/helper.service';
import { Iquestions } from '../questions/interFac/iquestions';
import { QuizzesService } from '../services/quizzes.service';
import { AddEditQuizesComponent } from './components/add-edit-quizes/add-edit-quizes.component';
import { FormGroup } from '@angular/forms';
import { CodeQuizesComponent } from './components/code-quizes/code-quizes.component';
@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent {
  //   tableData:Iquestions[]=[];
  // is_Messg:string|any;

  quizes: any;
  allQuizzes: any;
  completedQuizzes: any;
 code:string='';

  constructor(private _QuizzesService: QuizzesService,
    private _Router: Router,
    private _ToastrService: ToastrService,
    private helperServ: HelperService,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.getIncommingQuiz();
    this.getAllQuizzes();
  }

  getIncommingQuiz() {
    this._QuizzesService.incommingQuiz().subscribe({
      next: (res) => {
        console.log(res)
        this.quizes = res;
      },
    })
  }

  getAllQuizzes() {
    this._QuizzesService.ongetAllQuizzes().subscribe({
      next: (res) => {
        console.log(res)
        this.allQuizzes = res;
      },
    })
  }

  getCompletedQuizzes() {
    this._QuizzesService.ongetCompletedQuizzes().subscribe({
      next: (res) => {
        console.log(res)
        this.allQuizzes = res;
      },
    })
  }

  openAddEditQuizes(){
    const dialogRef = this.dialog.open(AddEditQuizesComponent, {
      // data:item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if (result) {
        this.addQuize(result)
      }
    });
  }


  addQuize(data:FormGroup){
    console.log(data);
    
    
    this._QuizzesService.onAddQuize(data).subscribe({
      next:(res)=>{
        console.log(res);
       
        this.code=res.data.code
        console.log(this.code);
        
      },
      error:()=>{

      },
      complete:()=>{
        this._ToastrService.success('Saved Successfuly');
        this.openDialog(this.code)
        this.getIncommingQuiz();
      }
    })
  }







  openDialog(code:string): void {
    const dialogRef = this.dialog.open(CodeQuizesComponent, {
      data: {code},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
     
    });
  
}
}
