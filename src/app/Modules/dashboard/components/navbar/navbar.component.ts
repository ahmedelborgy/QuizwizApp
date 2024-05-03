import { Component } from '@angular/core';
import { AuthService } from 'src/app/Modules/auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private _AuthService: AuthService) { }

  name: string | any = localStorage.getItem('name');
  role: string | any = localStorage.getItem('role');


  logOut() {
    this._AuthService.logout();
  }
}
