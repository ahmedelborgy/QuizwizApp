import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/Modules/auth/components/change-password/change-password.component';
import { LogoutComponent } from 'src/app/Modules/auth/components/logout/logout.component';
import { AuthService } from 'src/app/Modules/auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private _AuthService: AuthService, public dialog: MatDialog, private _Router: Router) { }

  name: string | any = localStorage.getItem('name');
  role: string | any = localStorage.getItem('role');



  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      // data: {},
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ChangePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  viewProfile() {
    this._Router.navigate(['dashboard/editProfile'])
  }
}
