import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employee-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        EmployeesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BsDatepickerModule.forRoot()
    ],
    declarations: [
        EmployeesComponent,
        EmployeeFormComponent,
        EmployeeListComponent
    ],
    exports: [
        EmployeesComponent,
        EmployeeFormComponent
    ]
})

export class EmployeesModule { }
