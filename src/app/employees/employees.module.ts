import { MatButtonModule, MatPaginatorModule, MatSortModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employee-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        EmployeesRoutingModule,
        MatButtonModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatSortModule,
        BsDatepickerModule.forRoot()
    ],
    declarations: [
        EmployeesComponent,
        EmployeeFormComponent,
        EmployeeListComponent,
    ],
    providers: [
        DatePipe
    ],
    exports: [
        EmployeesComponent,
        EmployeeFormComponent
    ]
})

export class EmployeesModule { }
