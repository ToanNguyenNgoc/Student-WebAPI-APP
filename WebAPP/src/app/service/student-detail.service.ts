import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, map, tap } from 'rxjs/operators';

import { StudentDetail } from '../models/student-detail.model';
import { StudentCommonService } from './student-common.service';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {

  //----------------
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //Authorization: 'my-auth-token'
    })
  };
  //----------------
  constructor(
    private http: HttpClient,
    public common: StudentCommonService
  ) { }

  readonly rootURL='http://localhost:52570/api/StudentDetail';
  formData: StudentDetail= new StudentDetail();
  list: StudentDetail[]=[];

  refreshList(){
    this.http.get(this.rootURL)
      .toPromise()
      .then(res => this.list= res as StudentDetail[]);
      
  }
  PostStudentDetail(){
    return this.http.post(this.rootURL, this.formData);
  }

  putStudentDetail(){
    return this.http.put(`${this.rootURL}/${this.formData.id}`, this.formData);
  }

  deleteStudentDetail(id: number){
    return this.http.delete(`${this.rootURL}/${id}`)
  }
  //--------------------------------------
  public getStudents(): Observable<any>{
    const url=`${this.rootURL}`;
    return this.http
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError))

  }
  //--------------------------------------
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
