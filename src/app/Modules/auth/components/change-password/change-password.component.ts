import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';
import { RegxPassword } from '../login/login.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  // hidePass = true;
  // password_type: string = 'text';
  // see: boolean = true;
  // is_Massage: string = '';

  // constructor(private _AuthService: AuthService,
  //   private _ToastrService: ToastrService,
  //   private _Router: Router, public _MatDialog: MatDialog) { }

  // ngOnInit(): void {
  // }


  // changePasswordForm = new FormGroup({

  //   password: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)]),
  //   password_new: new FormControl(null, [Validators.required, Validators.pattern(RegxPassword), Validators.maxLength(20), Validators.minLength(8)]),
  // })


  // handleForm(changePasswordForm: FormGroup) {
  //   console.log(changePasswordForm.value);
  //   if (changePasswordForm.valid) {


  //     this._AuthService.onLogin(changePasswordForm.value).subscribe({

  //       next: (res) => {
  //         console.log(res);

  //         localStorage.setItem('token', res.data.refreshToken);
  //         this.is_Massage = res.message;
  //       },
  //       error: (err) => {
  //         console.log(err);
  //         this._ToastrService.error(`error : ${this.is_Massage}`);
  //       },
  //       complete: () => {
  //         console.log('login completed');
  //         this._ToastrService.success(`${this.is_Massage}`)
  //         this._Router.navigate(['/auth/login'])
  //       },

  //     })
  //   }
  // }

  // toggleSee() {
  //   this.see = !this.see;
  //   this.password_type = this.see ? 'text' : 'password';
  // }
}
