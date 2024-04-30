import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

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
