import { Component, OnInit } from '@angular/core';
import { StudentsService } from './service/students.service';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  allStudents: any[] = [];
  studentGroup: any[] = [];
  allStudentsWithoutGroups: any[] = [];
  allGroups: any[] = [];
  Group: any;

  constructor(private _StudentsService: StudentsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllStudents();
    this.getAllStudentsWithoutGroups();
    this.getAllGroups();
  }

  getAllStudents() {

    this._StudentsService.ongetAllStudents().subscribe({
      next: (res) => {
        console.log(res);
        this.allStudents = res;
      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {

      }
    })

  }


  getAllStudentsWithoutGroups() {

    this._StudentsService.ongetStudentsWithoutGroups().subscribe({
      next: (res) => {
        console.log(res);
        this.allStudentsWithoutGroups = res
      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {

      }
    })

  }

  getAllGroups() {

    this._StudentsService.ongetAllGroups().subscribe({
      next: (res) => {
        console.log(res);
        this.allGroups = res
      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {

      }
    })

  }

  getGroupById(id: number) {
    this._StudentsService.ongetGroupById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.Group = res;
        this.studentGroup = this.Group.students;
      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {

      }
    })

  }

  openDialogAddEdit(action: string): void {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '600px',
      data: { action },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed', result);

      if (result == 'add')
        console.log(result);

      this.getAllStudents();


    });
  }

  clear() {
    this.Group = '';
  }
}
