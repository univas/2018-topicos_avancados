import { Injectable } from '@angular/core';
import { Department } from '../department';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DepartmentService {

  departments : Department[] = [];

  constructor() { }

  addDepartment(department : Department) {
    this.departments.push(department);
  }

  getDepartments() : Observable<Department[]> {
    return of(this.departments);
  }

  updateDepartment(department : Department) {
    let existDepartment = this.departments.find(dep => dep.id == department.id);
    existDepartment.name = department.name;
  }


}
