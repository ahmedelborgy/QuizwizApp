import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ChangePasswordComponent } from 'src/app/Modules/auth/components/change-password/change-password.component';
import { LogoutComponent } from 'src/app/Modules/auth/components/logout/logout.component';
import { AuthService } from 'src/app/Modules/auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  name: string | any = localStorage.getItem('name');
  role: string | any = localStorage.getItem('role');
  title: string = '';

  constructor(private _AuthService: AuthService, public dialog: MatDialog, private _Router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._Router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      this.title = data['title'] || '';
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ChangePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  viewProfile() {
    this._Router.navigate(['/dashboard/instructor/editProfile'])
  }
}
