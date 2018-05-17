import { EmployeeFormComponent } from './employee-form/employee-form.component';

import { EmployeesComponent } from './employees.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


export const routes: Routes = [

    {
        path: '',
        component: EmployeesComponent,
        children: [
            {
                path: 'add',
                component: EmployeeFormComponent
            },
            {
                path: 'edit',
                component: EmployeeFormComponent
            }
        ]
    },

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeesRoutingModule { }
