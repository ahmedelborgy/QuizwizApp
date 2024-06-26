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
  styleUrls: ['./add-edit-gropu.component.scss'],
})


export class AddEditGropuComponent implements OnInit {


  selectedCar: number | undefined;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

// 



// 

myControl = new FormControl('');
options: string[] = ['One', 'Two', 'Three'];


// 






// 








  groubs: object = {};
  tableStudents: any;

  
  animal: string | any;
  action: string | any = 'add';
  emailsStudents: string[] = [];
  constructor(
    public dialogRef: MatDialogRef<AddEditGropuComponent>,
    private groubServ: GroupService,
    private helperServ: HelperService,
    private _Router: Router,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
  }



  GroubForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    students: new FormControl(null, [Validators.required]),
  });


  ngOnInit(): void {
console.log(this.data);

    this.allStudentsWithoutGroups();
    if(this.data.action=='edit'){
      console.log(this.data.action);
      this.GroubForm.patchValue({
        students:this.data.item.students
        ,
        name:this.data.item.name

      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  allStudentsWithoutGroups() {
    this.helperServ.getAllStudents().subscribe({
      next: (res) => {
        // console.log(res);
        this.tableStudents = res;
        for (const item of this.tableStudents) {
          this.emailsStudents.push(item.email);
        }

        console.log(this.emailsStudents);
      },
      error: (err) => {
        // console.log(err);
      },
      complete: () => {
      },
    });
  }

  

  // GroubForm = new FormGroup({
  //   name: new FormControl(null, [Validators.required]),
  //   students: new FormControl(null, [Validators.required]),
  // });



// ---------------------------------------
// ---------------------------------------















}
