import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IProfile } from 'src/app/core/model/Iprofile';
import { EditProfileService } from '../services/edit-profile.service';
import { IUserProfile } from '../../../../../core/model/i-user-profile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  role = localStorage.getItem('role');
  constructor(
    private _EditProfileService: EditProfileService,
    private _ToastrService: ToastrService
  ) { }

  profile: IUserProfile | any = {
    first_name: `${localStorage.getItem('first_name')}`,
    last_name: `${localStorage.getItem('last_name')}`,
    email: `${localStorage.getItem('email')}`,
    status: `${localStorage.getItem('status')}`,
  };


  editForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    status: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {
    console.log(this.profile);
    this.editForm.patchValue(this.profile);
    console.log(this.editForm.value)
  }

  onsubmit(data: FormGroup) {
    if (this.role == 'Instructor') {
      this.instructorUpdateAcount(data.value);
    } else {

      this.studentUpdateAcount(data.value);
    }
  }

  instructorUpdateAcount(data: IUserProfile) {
    this._EditProfileService.UpdateInstractorAccount(data).subscribe({
      next: (res: any) => {
        console.log(res);
        this._ToastrService.success(res.message);
      }, error: (err) => {
        this._ToastrService.error('error')
      },
    });
  }

  studentUpdateAcount(data: IUserProfile) {
    this._EditProfileService.UpdateStudentAccount(data).subscribe({
      next: (res: any) => {
        console.log(res);
        this._ToastrService.success(res.message);
      }, error: (err) => {
        this._ToastrService.error('error')
      },
    });
  }
}
