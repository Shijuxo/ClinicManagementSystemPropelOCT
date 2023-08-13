import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(public employeeService : EmployeeService) { }

  ngOnInit(): void {
  }

//   onSubmit(form : NgForm){
//     let addid = this.employeeService.formData.EmployeeId;

//     if(addid == 0 || addid == null){
//       console.log(form.value);
//       this.InsertRecord(form);
//       window.location.reload();
//     }
//     else{
//       console.log(form.value);
//       this.updateRecord(form);
//     }
//   }

//   //Insert
//   InsertRecord(form:NgForm){
//     console.log("Inserting");

//     //call insert function from service
//     this.employeeService.insertEmployee(form.value)._subscribe(
//       (result) => {
//         console.log(result);
//         this.resetForm(form);
//         alert("Added Succesfully")
//       }
//     )
//   }
// updateRecord(form : NgForm)
// {

// }


// resetForm(form : NgForm)
// {
//   if(form!=null){
//     form.resetForm();
//   }

// }

}
