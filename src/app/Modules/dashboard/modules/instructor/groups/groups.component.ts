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
 
  this.allGropus();
}
allGropus(){
this.groubServ.getAllGroubs().subscribe({
  next:(res)=>{
    // console.log(res);
    this.tableGroub=res
  },
  error:(err)=>{
    // console.log(err);
    
  },
  complete:()=>{

  }
})

}





  openDialogAddEdit(action:string,item:any): void {
    const dialogRef = this.dialog.open(AddEditGropuComponent, {
      width: '600px',
      data: {action,item},

    });

  dialogRef.afterClosed().subscribe((result: any) => {
  console.log('The dialog was closed',result);

  if(result !=undefined){
 console.log(action);
if(action=='delet'){

console.log(result);
this.deletGroup(result);
}

if(action=='add'){

  // console.log(result);
  this.addGroup(result);
  }
  if(action=='edit'){
console.log(item._id);

  console.log(result);
  this.editGroup(result,item._id);
    
    }

      }

      
 


    });
  }


  addGroup(groups:any){

    this.groubServ.addAllGroubs(groups).subscribe({
      next: (res) => {
        // console.log(res);
        this.is_Messg=res.message;
      },
      error: (err) => {
        // console.log(err);
        this._ToastrService.error(` add error : ${this.is_Messg}`);

      },
      complete:()=>{
        // console.log('add complet');
    this._ToastrService.success(`add succes: ,${this.is_Messg}`)

        this.allGropus();

      }
    });



  }


  editGroup(groups:any,id:any){

    this.groubServ.editGroup(groups,id).subscribe({
      next: (res) => {
        // console.log(res);
        this.is_Messg=res.message;
      },
      error: (err) => {
        // console.log(err);
        this._ToastrService.error(` edit error : ${this.is_Messg}`);

      },
      complete:()=>{
        // console.log('add complet');
    this._ToastrService.success(`edit succes: ,${this.is_Messg}`)

        this.allGropus();

      }
    });



  }







  deletGroup(id:number){

    this.groubServ.deletGroup(id).subscribe({
      next:(res)=>{
        this.is_Messg=res.message;
        // console.log(res);
        
      },
      error:(err)=>{
        // console.log(err);
        this._ToastrService.error(`delet error: ,${this.is_Messg}`)

      },
      complete:()=>{
        // console.log('---delet comp---');
        this.allGropus();
        this._ToastrService.success(`delet succes: ,${this.is_Messg}`)

      }




    })
  }




}




// }
