import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService : EmployeeService) { }

  ngOnInit(): void {
    //LifecycleHook
    console.log("Welcome to Lifecycle Hook");
    this.employeeService.BindListEmployee();
  }
}
