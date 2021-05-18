import { Injectable } from '@angular/core';
import { Employee } from '../shared/models/employee';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL: string = "http://localhost:3000/";
 
  public employees:any;

  constructor(private http: HttpClient) {
  }
  
  getEmployeeData(): Observable<Employee[]> {
    console.log('get Employee '+this.baseURL + 'employee')
    return this.http.get<Employee[]>(this.baseURL + 'employee')
  }
 
  addPerson(person:Employee): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseURL + 'employee', body,{'headers':headers})
  }


  getEmployeeDetail(id:any) {
    console.log('id', id);
    return this.http.get<Employee[]>(this.baseURL + `employee/${id}`)
  }

}
