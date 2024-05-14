import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ChangePasswordComponent } from 'src/app/Modules/auth/components/change-password/change-password.component';
import { LogoutComponent } from 'src/app/Modules/auth/components/logout/logout.component';
import { AuthService } from 'src/app/Modules/auth/service/auth.service';
import { AddEditQuizesComponent } from '../../modules/instructor/quizzes/components/add-edit-quizes/add-edit-quizes.component';
import { FormGroup } from '@angular/forms';
import { QuizzesService } from '../../modules/instructor/services/quizzes.service';
import { ToastrService } from 'ngx-toastr';
import { CodeQuizesComponent } from '../../modules/instructor/quizzes/components/code-quizes/code-quizes.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  name: string | any = localStorage.getItem('name');
  role: string | any = localStorage.getItem('role');
  title: string = '';
  code:string='';
  quizes: any;

  constructor(private _AuthService: AuthService, public dialog: MatDialog, 
    private _Router: Router, private route: ActivatedRoute, 
    private _QuizzesService:QuizzesService, private _ToastrService:ToastrService) { }

  ngOnInit(): void {
    this._Router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      this.title = data['title'] || '';
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ChangePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  viewProfile() {
    this._Router.navigate(['/dashboard/instructor/editProfile'])
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
        this.openDialog2(this.code)
        this.getIncommingQuiz();
      }
    })
  }

  openDialog2(code: string): void {
    const dialogRef = this.dialog.open(CodeQuizesComponent, {
      data: { code },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });

  }

  getIncommingQuiz() {
    this._QuizzesService.incommingQuiz().subscribe({
      next: (res) => {
        console.log(res)
        this.quizes = res;
      },
    })
  }
}
