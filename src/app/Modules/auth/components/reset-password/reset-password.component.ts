import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';


export const RegxPassword: RegExp = /^[a-zA-Z0-9]{3,30}$/;


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {


  // hidePass = true;
  // password_type: string = 'text';
  // see: boolean = true;


  // constructor(private _AuthService: AuthService,
  //   private _ToastrService: ToastrService,
  //   private _Router: Router, public _MatDialog: MatDialog) { }

  // resetPassword: FormGroup = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   otp: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
  //   password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword)])
  // }
  // );

  // handleForm(data: FormGroup) {
  //   let userData = data.value;
  //   if (this.resetPassword.valid) {
  //     this._AuthService.onRegister(userData).subscribe(
  //       {
  //         next: (res) => {
  //           console.log(res)
  //           this._Router.navigate(['/auth/changePassword']);
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

  resetPasswordForm = new FormGroup({
    otp: new FormControl(null, [Validators.required, ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)]),
  });

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

