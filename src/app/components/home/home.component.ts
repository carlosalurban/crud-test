import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employeesList: Observable<string[]>;

  displayedColumns: string[] = ['id', 'employee_name', 'employee_age', 'employee_salary', 'actions'];

  constructor(private employeesService: EmployeesService, private router: Router) { }

  ngOnInit() {
    this.getEmployeesList();
  }

  getEmployeesList() {
    this.employeesService.getEmployees().subscribe((employees: any) => {
      this.employeesList = employees.data;
      console.log(this.employeesList);
    });
  }
  addNewEmployee() {
    this.router.navigateByUrl('addemployee');
  }
  deleteEmployee(id) {
    this.employeesService.deleteEmployee(id).subscribe(emp => console.log(emp));
  }
}
