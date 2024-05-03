import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { GroupService } from '../../service/group.service';
import { HelperService } from 'src/app/core/helperServic/helper.service';
import { Istudents } from '../../interFac/igroups';
import { Router } from '@angular/router';
const RegxPassword: RegExp = /^[a-zA-Z0-9]{3,30}$/;

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-edit-gropu',
  templateUrl: './add-edit-gropu.component.html',
  styleUrls: ['./add-edit-gropu.component.scss']
})
export class AddEditGropuComponent implements OnInit{
groubs:object={};
tableStudents:any;


  students = new FormControl('');
  topping:any;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  animal: string|any;
  action: string|any='add';
  emailsStudents: string[] = [];
  constructor(
    public dialogRef: MatDialogRef<AddEditGropuComponent>,
    private groubServ:GroupService,
    private helperServ:HelperService,
  private _Router:Router,
    
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

    
  ) {
    console.log(data);
console.log(this.topping);

  }
  ngOnInit(): void {
    this.allStudentsWithoutGroups();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  allStudentsWithoutGroups(){
    this.helperServ.getAllStudents().subscribe({
      next:(res)=>{
        console.log(res);
        this.tableStudents=res;
        for (const item of this.tableStudents) {
          this.emailsStudents.push(item.email)
        }

        console.log(this.emailsStudents);
        

      },
      error:(err)=>{
        console.log(err);
        
      },
      complete:()=>{
        // this._Router.navigate(['/dashboard/instructor/groups'])

      }
    })
    
    }
  

selectStudents(x:any,data:any){


this.groubs={
  name:data.name,
  students:x,
}
console.log(this.groubs);


this.groubServ.addAllGroubs(this.groubs).subscribe({
  next:(res)=>{
    console.log(res);
    
  }
  ,
  error:(err)=>{
    console.log(err);
    
  }
})


  }

  GroubForm = new FormGroup({

    name: new FormControl(null, 
      [Validators.required]),
    students: new FormControl(null, 
      [Validators.required]),
  })












}
