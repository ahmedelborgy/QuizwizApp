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

      text: 'Home',
      link: '/admin/home',
      icon: 'fa-solid fa-house',
      // isActive: this.isAdmin() || this.isUser() ,
    },
    {

      text: 'Users',
      link: '/admin/users',
      icon: 'fa-solid fa-users',
      // isActive: this.isAdmin()  ,
    },
    {

      text: 'Rooms',
      link: '/admin/room',
      icon: "fa-solid fa-hotel",
      // isActive: this.isAdmin()  ,
    },

    {

      text: 'Ads',
      link: '/admin/ads',
      icon: "fa-solid fa-calendar-days",
      // isActive: this.isAdmin()  ,
    },
    {

      text: 'Room Facility',
      link: '/admin/room-facility',
      icon: "fa-solid fa-cubes-stacked",
      // isActive: this.isAdmin()  ,
    },
    {

      text: 'Booking',
      link: '/admin/booking',
      icon: 'fa-solid fa-users',
      // isActive: this.isUser(),
    },


  ]
}
