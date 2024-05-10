import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/Modules/dashboard/modules/instructor/groups/component/add-edit-gropu/add-edit-gropu.component';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(
    public dialogRef: MatDialogRef<LogoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _AuthService: AuthService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  logOut() {
    this._AuthService.logout();
    this.dialogRef.close();
  }


}
