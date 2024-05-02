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

  hidePass = true;
  password_type: string = 'text';
  see: boolean = true;


  constructor(private _AuthService: AuthService,
    private _ToastrService: ToastrService,
    private _Router: Router) { }

  resetPassword: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    otp: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword)])
  }
  );

  handleForm(data: FormGroup) {
    let userData = data.value;
    if (this.resetPassword.valid) {
      this._AuthService.onResetPassword(userData).subscribe(
        {
          next: (res) => {
            console.log(res)
            this._Router.navigate(['/auth/changePassword']);
          }, error: (err) => {
            console.log(err)
            this._ToastrService.error('Register error')

          }, complete: () => {
            this._ToastrService.success('Register Successfuly')
          },
        }
      )
    } else {
      console.log('unvalid');
    }
  }


  toggleSee() {
    this.see = !this.see;
    this.password_type = this.see ? 'text' : 'password';
  }

}

