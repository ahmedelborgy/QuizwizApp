import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
myArrow:string|any=localStorage.getItem('arrow');

constructor(){
console.log(this.myArrow);



}



}
