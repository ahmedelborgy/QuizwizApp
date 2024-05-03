import { Component, OnInit } from '@angular/core';
import { GroupService } from './service/group.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Igroups, Istudents } from './interFac/igroups';
import { HelperService } from 'src/app/core/helperServic/helper.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditGropuComponent } from './component/add-edit-gropu/add-edit-gropu.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
tableGroub:Igroups[]=[];
is_Messg:string|any;
animal: string|any;
name: string|any;

constructor(private groubServ:GroupService,
  private _Router:Router,
  private _ToastrService:ToastrService,
  private helperServ:HelperService,
  public dialog: MatDialog

){}
ngOnInit(): void {
  // this.allStudentsWithoutGroups();
  this.allGropus();
}
allGropus(){
this.groubServ.getAllGroubs().subscribe({
  next:(res)=>{
    console.log(res);
    this.tableGroub=res
  },
  error:(err)=>{
    console.log(err);
    
  },
  complete:()=>{

  }
})

}


// allStudentsWithoutGroups(){
//   this.helperServ.getAllStudents().subscribe({
//     next:(res)=>{
//       console.log(res);
      
//     },
//     error:(err)=>{
//       console.log(err);
      
//     },
//     complete:()=>{
  
//     }
//   })
  
//   }




  openDialogAddEdit(action:string): void {
    const dialogRef = this.dialog.open(AddEditGropuComponent, {
      width: '600px',
      data: {action},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed',result);
      
   if(result=='add')
    console.log(result);
    
    this.allGropus();


    });
  }




}




// }
