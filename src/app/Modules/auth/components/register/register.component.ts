import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export const RegxPassword: RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  hidePass = true;
  password_type: string = 'text';
  see: boolean = true;


  constructor(private _AuthService: AuthService, 
    private _ToastrService: ToastrService, 
    private _Router: Router, public _MatDialog: MatDialog) { }

  RegisterForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
    last_name: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)]),
   
   
    role: new FormControl(null, [Validators.required]),
  })

  handleForm(data: FormGroup) {
    let userData = data.value;
    if (this.RegisterForm.valid) {
      this._AuthService.onRegister(userData).subscribe(
        {
          next: (res) => {
            console.log(res)
            this._Router.navigate(['/auth/login']);
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
