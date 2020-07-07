import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Employee } from '../../models/employee.model'
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit {

  employeeForm: FormGroup;
  constructor(private employeesService: EmployeesService, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }
  onSubmit() {
    this.employeesService.addEmployees(this.employeeForm.value).subscribe(emp => {
      console.log(emp);
    });
  }
  initForm() {
    this.employeeForm = this._formBuilder.group({
      name: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required],
    })
  }
}
