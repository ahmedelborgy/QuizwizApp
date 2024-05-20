import { Component } from '@angular/core';
import { JoinQuizComponent } from './components/join-quiz/join-quiz.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentQuizeService } from './services/student-quize.service';
import { QuizzesService } from '../../instructor/services/quizzes.service';



@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent {



  completedQuizes: any;

  is_Messg: any;
  dataCodeQuize: any;
  constructor(
    private quizeServ: StudentQuizeService,
    private _Router: Router,
    private _ToastrService: ToastrService,
    public dialog: MatDialog,
    private _QuizzesService: QuizzesService
  ) {




  }


  ngOnInit(): void {
    this.getCompletedQuizzes();
  }

  openDialogJionQuiz(): void {
    const dialogRef = this.dialog.open(JoinQuizComponent, {
      width: '600px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed', result);
      if (result !== undefined) {
        console.log(result);

        this.joinQuizeCode(result);
      }


    });



  }


  getCompletedQuizzes() {
    this._QuizzesService.ongetCompletedQuizzes().subscribe({
      next: (res) => {
        console.log(res)
        this.completedQuizes = res;
      },
    })
  }




  joinQuizeCode(code: any) {
    this.quizeServ.joinQuiz(code).subscribe({

      next: (res) => {
        console.log(res);
        this.is_Messg = res.message;
        this.dataCodeQuize = res.data;
        this.quizeServ.exameDetailes(this.dataCodeQuize, code);
      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(` join error : ${this.is_Messg}`);


      },
      complete: () => {
        // console.log('add complet');
        this._Router.navigate([`/dashboard/students/quizzes/exam`, code]);
        this._ToastrService.success(`join succes: ,${this.is_Messg}`)

      }
















    })
  }








}
