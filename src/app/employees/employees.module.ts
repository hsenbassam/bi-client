import { EmployeesRoutingModule } from './employee-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form/employee-form.component';


@NgModule({
    imports: [
        CommonModule,
        EmployeesRoutingModule
    ],
    declarations: [
        EmployeeFormComponent
    ],
    exports: [
        EmployeeFormComponent
    ]
})

export class EmployeesModule { }
