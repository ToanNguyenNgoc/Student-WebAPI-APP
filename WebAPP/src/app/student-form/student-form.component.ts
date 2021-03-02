import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StudentDetail } from '../models/student-detail.model';
import { StudentCommonService } from '../service/student-common.service';
import { StudentDetailService } from '../service/student-detail.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  public genders: string[]=['Male','Female']

  constructor(
    public service: StudentDetailService,
    public dialogClose: MatDialog,
    public common: StudentCommonService,
    
  ) { }

  ngOnInit(): void {
  }

  insertRecord(form: NgForm){
    this.service.PostStudentDetail().subscribe((res)=>{
      this.resetForm(form);
      this.service.refreshList();
      console.log(res);
    })
  }
  updateRecord(form: NgForm){
    this.service.putStudentDetail().subscribe((res)=>{
      this.resetForm(form);
      this.service.refreshList();
    })
  }
  onSubmit(form :NgForm){
    if(this.service.formData.id==0){
      this.insertRecord(form);
      this.dialogClose.closeAll();
      this.common.increamentStudent();
    }else{
      this.updateRecord(form);
      this.dialogClose.closeAll();
    }
    
  }

  //reset form
  resetForm(form : NgForm){
    form.form.reset();
    this.service.formData= new StudentDetail
  }
  close(){
    this.dialogClose.closeAll()
  }

}
