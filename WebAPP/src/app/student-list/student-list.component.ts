import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDetail } from '../models/student-detail.model';
import { StudentCommonService } from '../service/student-common.service';
import { StudentDetailService } from '../service/student-detail.service';
import { StudentFormComponent } from '../student-form/student-form.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  //-----------{
    public students: StudentDetail[]=[];
  //-----------}
  constructor(
    public servive : StudentDetailService,
    public dialog: MatDialog,
    public common: StudentCommonService,
  ) { }

  ngOnInit(): void {
    this.servive.refreshList();
    this.totalData();
  }

  populateForm(selectedRecord: StudentDetail){
    this.dialog.open(StudentFormComponent);
    this.servive.formData= Object.assign({}, selectedRecord);
  }

  onDelete(id : number){
    this.servive.deleteStudentDetail(id).subscribe((res)=>{
      this.servive.refreshList(); 
      this.common.unincreamentStudent();
    })
  }
  //----------------------
  private totalData(){
    this.servive.getStudents().subscribe((data)=>{
      this.students= data;
      this.common.setTotalStudent(data.length)
    })
  }
}
