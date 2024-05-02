import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';
import { IProfile } from 'src/app/core/model/Iprofile';


export const RegxPassword: RegExp = /^[a-zA-Z0-9]{3,30}$/;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hidePass = true;
  password_type: string = 'text';
  see: boolean = true;
  is_Massage: string = '';
  profile: IProfile = {
    _id: '',
    first_name: '',
    last_name: '',
    email: '',
    status: 'active',
    role: 'Instructor',
    group: ''
  };



  constructor(private _AuthService: AuthService,
    private _ToastrService: ToastrService,
    private _Router: Router, public _MatDialog: MatDialog) { }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)]),
  })
  onLogin(loginForm: FormGroup) {
    console.log(loginForm.value);
    if (loginForm.valid) {


      this._AuthService.onLogin(loginForm.value).subscribe({

        next: (res) => {

          console.log(res);
          this.profile = res.data.profile;
          localStorage.setItem('token', res.data.accessToken);
          localStorage.setItem('name', `${this.profile.first_name} ${this.profile.last_name}`);
          localStorage.setItem('email', this.profile.email);
          localStorage.setItem('group', this.profile.group);

          this.is_Massage = res.message;
          this._AuthService.getProfile();

          this._ToastrService.success(res.data.profile.first_name, 'Welcome');
        },
        error: (err) => {
          console.log(err);
          this._ToastrService.error(`Register error : ${this.is_Massage}`);
        },
        complete: () => {
          console.log('login completed');
          // this._ToastrService.success(`${this.is_Massage}`)
          this._Router.navigate(['/dashboard'])

        },

      })
    }



  }



  toggleSee() {
    this.see = !this.see;
    this.password_type = this.see ? 'text' : 'password';
  }


  forgetpass() {
    this._Router.navigate(['/auth/forgotPassword'])

  }

}
