import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';
export const RegxPassword: RegExp = /\d+[a-zA-Z]+$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

  hidePass = true;
  password_type: string = 'text';
  see: boolean = true;
  is_Massage:string='';
 
  constructor(private _AuthService: AuthService, 
    private _ToastrService: ToastrService, 
    private _Router: Router, public _MatDialog: MatDialog) { 



    }

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

      localStorage.setItem('token',res.data.refreshToken);
        this.is_Massage=res.message;
         

        },
        error: (err) => {
          console.log(err);
         
        
          this._ToastrService.error(`Register error : ${this.is_Massage}`);


        },
        complete: () => {
          console.log('complete login---');
          this._ToastrService.success(`Login success, Login Successfully : ${this.is_Massage} `)

        },

      })
    }


  }


  
  toggleSee() {
    this.see = !this.see;
    this.password_type = this.see ? 'text' : 'password';
  }




}
