import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class EmployeeService {

  private employees : Employee[] = [];

  constructor() { }

  getEmployees() : Observable<Employee[]> {
    return of (this.employees);
  }

  addEmployee(employee : Employee) {
    this.employees.push(employee);
  }

  updateEmployee(employee : Employee) {
    let existEmployee = this.employees.find(
      emp => emp.id == employee.id
    );
    existEmployee.name = employee.name;
    existEmployee.cpf = employee.cpf;
    existEmployee.email = employee.email;
    existEmployee.department = employee.department;
  }

  deleteEmployee(employee : Employee) {
    let index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
  }  

}
