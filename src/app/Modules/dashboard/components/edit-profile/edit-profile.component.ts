import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  email: string = localStorage.getItem('email') ?? '';
  role: string = localStorage.getItem('role') ?? '';
  name: string = localStorage.getItem('name') ?? '';
}
