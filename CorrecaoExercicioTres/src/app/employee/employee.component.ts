import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { Department } from '../../department';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  newEmployee : Employee;

  employees : Employee[];

  departments : Department[];

  showMessageError1 : boolean;
  showMessageError2 : boolean;
  showMessageError3 : boolean;
  showMessageError4 : boolean;

  constructor(private employeeService : EmployeeService,
              private departmentService : DepartmentService) { }

  ngOnInit() {
    this.newEmployee = new Employee();
    this.loadEmployees();
    this.loadDepartments();
  }

  loadEmployees() {
   this.employeeService.getEmployees().subscribe(
     employees => this.employees = employees
   );  
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe(
      departments => this.departments = departments
    );
  }

  saveEmployee() {
    if (this.allFieldsValid()) {
      if (!this.newEmployee.id) {
        this.newEmployee.id = (new Date()).getTime();
        this.employeeService.addEmployee(this.newEmployee);
      } else {
        this.employeeService.updateEmployee(this.newEmployee);
      }

      this.newEmployee = new Employee();
    }
  }

  allFieldsValid() {
    this.showMessageError1 = false;
    this.showMessageError2 = false;
    this.showMessageError3 = false;
    this.showMessageError4 = false;

    if (!this.newEmployee.name || this.newEmployee.name.trim() == '') {
      this.showMessageError1 = true;
    }

    if (!this.newEmployee.cpf || this.newEmployee.cpf.trim() == '') {
      this.showMessageError2 = true;
    }

    if (!this.newEmployee.email || this.newEmployee.email.trim() == '') {
      this.showMessageError3 = true;
    }

    if (!this.newEmployee.department) {
      this.showMessageError4 = true;
    }

    return !this.showMessageError1 && !this.showMessageError2
        && !this.showMessageError3 && !this.showMessageError4;
  }

  editEmployee(employee : Employee) {
    this.newEmployee = new Employee(employee.id, employee.name,
        employee.email, employee.cpf, employee.department);
  }

  deleteEmployee(employee : Employee) {
    this.employeeService.deleteEmployee(employee);
    this.loadEmployees();
  }

}
