import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './Employees/employee-list/employee-list.component';
import { HttpClientModule} from '@angular/common/http';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    
    EmployeesComponent,
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }