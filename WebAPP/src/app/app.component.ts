import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { StudentCommonService } from './service/student-common.service';
import { StudentDetailService } from './service/student-detail.service';
import { StudentFormComponent } from './student-form/student-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Student Detail List';
  public tottalStudent= 123;

  constructor(
    public dialog: MatDialog,
    public service: StudentDetailService,
    public common: StudentCommonService,
    ){}
    

  ngOnInit(): void{
    this.common.totalStudent$.subscribe((total)=>{
      this.tottalStudent= total;
    });
    if(this.common.totalStudent==0){
      this.service.getStudents().subscribe((data)=>{
        this.common.setTotalStudent(data.length)
      })
    }
  }
  public openStudentFormDialog(){
    this.dialog.open(StudentFormComponent)
  }
}
