import { Component, OnInit } from '@angular/core';
import { Department } from '../../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

 newDepartment : Department;

 departments : Department[];

 showMessageError : boolean;

  constructor(private departmentService : DepartmentService) { }

  ngOnInit() {
    this.newDepartment = new Department();
    this.showMessageError = false;
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe(
      departments => this.departments = departments
    );
  }

  saveDepartment() {
    if (!this.newDepartment.name || this.newDepartment.name.trim() == '') {
      this.showMessageError = true;
    } else {
      this.showMessageError = false;
      if (!this.newDepartment.id) {
        this.newDepartment.id = (new Date()).getTime();
        this.departmentService.addDepartment(this.newDepartment);
      } else {
        this.departmentService.updateDepartment(this.newDepartment);
      }

      this.newDepartment = new Department();
    }
  }

}
