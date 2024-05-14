import { Component } from '@angular/core';
import { AuthService } from 'src/app/Modules/auth/service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isOpened: boolean = true;

  constructor(private _AuthService: AuthService) { }


  isStudent(): boolean {
    return this._AuthService.role == 'Student' ? true : false;
  }

  isInstructor(): boolean {
    return this._AuthService.role == 'Instructor' ? true : false;
  }




  Menu: any[] = [

    {
      text: 'Dashboard',
      link: '/dashboard/home',
      icon: 'fa-solid fa-house',
      isActive: this.isInstructor(),
    },


    {
      text: 'Students',
      link: '/dashboard/instructor/students',
      icon: 'fa-solid fa-users',
      isActive: this.isInstructor(),
    },

    {
      text: 'Groups',
      link: '/dashboard/instructor/groups',
      icon: 'fa-solid fa-users',
      isActive: this.isInstructor(),
    },

    {
      text: 'Quizes',
      link: '/dashboard/instructor/quizzes',
      icon: "fa-solid fa-hotel",
      isActive: this.isInstructor(),
    },

    {
      text: 'Quizes',
      link: '/dashboard/student/quizzes',
      icon: "fa-solid fa-hotel",
      isActive: this.isStudent(),
    },

    {
      text: 'Results',
      link: '/dashboard/instructor/results',
      icon: "fa-solid fa-calendar-days",
      isActive: this.isInstructor(),
    },

    {
      text: 'Results',
      link: '/dashboard/students/results',
      icon: "fa-solid fa-calendar-days",
      isActive: this.isStudent(),
    },


  ]
}
