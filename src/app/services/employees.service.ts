import { Injectable } from '@angular/core';
import { urlEndPoints } from '../models/endpoints/endpoints';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(urlEndPoints.getAllEmployeesUrl);
  }
  getEmployeeById(id): Observable<any> {
    return this.http.get(urlEndPoints.getEmployeeById + id);
  }
  addEmployees(employee): Observable<any> {
    return this.http.post(urlEndPoints.addEmployee, employee);
  }
  editEmployee(employee): Observable<any> {
    return this.http.put(urlEndPoints.editEmployee + employee.id, { name: employee.name, salary: employee.salary, age: employee.age });
  }
  deleteEmployee(id): Observable<any> {
    return this.http.delete(urlEndPoints.deleteEmployee + id);
  }
}
