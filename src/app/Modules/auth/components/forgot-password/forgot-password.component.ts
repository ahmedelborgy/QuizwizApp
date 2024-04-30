import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';
import { RegxPassword } from '../login/login.component';



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {


  // hidePass = true;
  // password_type: string = 'text';
  // see: boolean = true;


  // constructor(private _AuthService: AuthService,
  //   private _ToastrService: ToastrService,
  //   private _Router: Router, public _MatDialog: MatDialog) { }

  // forgotPassword: FormGroup = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  // })

  // handleForm(data: FormGroup) {
  //   let userData = data.value;
  //   if (this.forgotPassword.valid) {
  //     this._AuthService.onRegister(userData).subscribe(
  //       {
  //         next: (res) => {
  //           console.log(res)
  //           this._Router.navigate(['/auth/resetPassword']);
  //         }, error: (err) => {
  //           console.log(err)
  //           this._ToastrService.error('Register error')

  //         }, complete: () => {
  //           this._ToastrService.success('Register Successfuly')
  //         },
  //       }
  //     )
  //   } else {
  //     console.log('unvalid');
  //   }
  // }


  // toggleSee() {
  //   this.see = !this.see;
  //   this.password_type = this.see ? 'text' : 'password';
  // }


  constructor(private _AuthService:AuthService, private __ToastrService:ToastrService, private _Router:Router){}


  forgetPasswordForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })

  onSubmit(data:FormGroup){
    this._AuthService.onForgotPassword(data.value).subscribe({
      next:(res)=>{
       console.log(res);
       
      },
      error:(err:any)=>{
        this.__ToastrService.error(err.message, 'Error ! ');
      },
      complete:()=>{
        
        this.__ToastrService.success('Your Password Changed Successfully','Success')
        this._Router.navigate(['/auth/login'])


      }
    })
  }

}

