import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  isOpened: boolean = true;

  
  Menu: any[] = [
    {

      text: 'Dashboard',
      link: '/admin/home',
      icon: 'fa-solid fa-house',
      // isActive: this.isAdmin() || this.isUser() ,
    },
    {

      text: 'Students',
      link: '/admin/users',
      icon: 'fa-solid fa-users',
      // isActive: this.isAdmin()  ,
    },
    {

      text: 'Quizes',
      link: '/admin/room',
      icon: "fa-solid fa-hotel",
      // isActive: this.isAdmin()  ,
    },

    {

      text: 'Results',
      link: '/admin/ads',
      icon: "fa-solid fa-calendar-days",
      // isActive: this.isAdmin()  ,
    },
    // {

    //   text: 'Groups',
    //   link: '/admin/room-facility',
    //   icon: "fa-solid fa-cubes-stacked",
    //   // isActive: this.isAdmin()  ,
    // },
    {

      text: 'Groups',
      link: '/admin/booking',
      icon: 'fa-solid fa-users',
      // isActive: this.isUser(),
    },


  ]
}
