import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Empdetail } from './model/empdetail';
import { Emplvedet } from './model/emplvedet';
import { catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmpdetailService {
  empid: number;
  empleavelist: Array<Emplvedet>;
  rptleavelist: Array<Emplvedet>;
  mgrdetail: Empdetail;
  empdetail: Empdetail;
  constructor(public http: HttpClient) {
    this.empid = 0;
    this.empleavelist = new Array<Emplvedet>();
    this.rptleavelist = new Array<Emplvedet>();
    this.mgrdetail = new Empdetail;
    this.empdetail = new Empdetail;
  }

  getmydet(): Observable<Empdetail> {
    let url="http://localhost:9090/employee/"+this.empid;
      return this.http.get<any>(url);
     }

  getmgrdet(): Observable<Empdetail> {
    let url="http://localhost:9090/employee/mgr/"+this.empid;
      return this.http.get<any>(url);
       }
  
  getlvedet(): Observable<Emplvedet[]> {
    let url="http://localhost:9090/employee/leave/"+this.empid;
       return this.http.get<Emplvedet[]>(url);
     }
  
  getrptlvedet(): Observable<Emplvedet[]> {
    let url="http://localhost:9090/employee/rptleave/"+this.empid;
       return this.http.get<Emplvedet[]>(url);
     }

  emplveSave(emplvedet : Emplvedet): Observable<String> {
      let url="http://localhost:9090/employee/leave/create";
      return this.http.post<any>(url,emplvedet,httpOptions)
      .pipe(
           catchError(err => this.handleError(err))
      );
    }
    handleError(arg0: string): any {
      throw new Error("Error postng data!!." + arg0);
    }
  aprvelve(emplvedet : Emplvedet): Observable<String> {
      let url="http://localhost:9090/employee/leave/approve";
      return this.http.post<any>(url,emplvedet,httpOptions)
      .pipe(
           catchError(err => this.handleError1(err))
      );
    }
    handleError1(arg0: string): any {
      throw new Error("Error postng data!!." + arg0);
    }
  
}
