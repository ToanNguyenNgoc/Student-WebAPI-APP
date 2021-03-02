import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentCommonService {

  public totalStudent=0;
  public totalStudent$ = new BehaviorSubject<number>(0);
  constructor() { }

  public setTotalStudent(total : number){
    this.totalStudent= total;
    this.totalStudent$.next(total);
  }
  public increamentStudent(){
    this.totalStudent++;
    this.totalStudent$.next(this.totalStudent);
  }
  public unincreamentStudent(){
    this.totalStudent--;
    this.totalStudent$.next(this.totalStudent);
  }
}
