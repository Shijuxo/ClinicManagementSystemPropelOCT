import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees : Employee[];
  formData : Employee = new Employee();

  constructor(private httpClient: HttpClient) { }

  //For Binding Employee List
  BindListEmployee()
  {
this.httpClient.get(environment.apiURL + "/api/Employees")
.toPromise().then( response =>
  this.employees = response as Employee[]);
  }

  // //Insert
  // insertEmployee(emp: Employee) : Observable<any>
  // {
  //   return this.httpClient.post(environment.apiURL + "/api/Employees", emp);
  // }
}

