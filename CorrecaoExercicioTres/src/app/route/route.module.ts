import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from '../department/department.component';
import { EmployeeComponent } from '../employee/employee.component';

const routes : Routes = [
  { path : 'department', component : DepartmentComponent },
  { path : 'employee', component : EmployeeComponent }
];

@NgModule({
 exports : [
   RouterModule
 ],
 imports : [
   RouterModule.forRoot(routes)
 ]
})
export class RouteModule { }
