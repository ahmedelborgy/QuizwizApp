import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

const RegxPassword: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,20}$/;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  constructor(private _AuthService:AuthService, private __ToastrService:ToastrService, private _Router:Router){}

  changePasswordForm = new FormGroup({
    password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)]),
    password_new: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)])
  })

  onSubmit(data:FormGroup){
    this._AuthService.onChangePassword(data.value).subscribe({
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
