import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouteModule } from './route/route.module';
import { DepartmentService } from './department.service';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    FormsModule
  ],
  providers: [DepartmentService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
