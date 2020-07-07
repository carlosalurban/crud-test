import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-detail',
  templateUrl: './employees-detail.component.html',
  styleUrls: ['./employees-detail.component.scss']
})
export class EmployeesDetailComponent implements OnInit {
  idEmployee: any;
  employeeById: any;

  employeeForm: FormGroup;
  constructor(
    private employeesService: EmployeesService,
    private _formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.idEmployee = this.activeRoute.snapshot.params.id;
    this.employeesService.getEmployeeById(this.idEmployee).subscribe(emp => {
      this.employeeById = emp;
    }, error => {
      console.log('there was an error')
      console.log(error);
    });
    /****this line should be inside the subscribe but the API it`s not working */
    this.editEmployee();
  }
  onSubmit() {
    this.employeesService.editEmployee(this.employeeForm.value).subscribe(emp => {
      console.log(emp);
    });
  }
  editEmployee() {
    /**** This should be the correct way to initialize the form for edit  ******/

    // this.employeeForm = this._formBuilder.group({
    //   id: [this.employeeById.id],
    //   name: [this.employeeById.name, Validators.required],
    //   salary: [this.employeeById.salary, Validators.required],
    //   age: [this.employeeById.age, Validators.required],
    // });

    this.employeeForm = this._formBuilder.group({
      id: [this.idEmployee],
      name: ['', Validators.required],
      salary: ['', Validators.required],
      age: ['', Validators.required],
    });
  }
}
