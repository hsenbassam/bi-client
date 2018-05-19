import { EmployeeFormComponent } from './employee-form/employee-form.component';

import { EmployeesComponent } from './employees.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list.component';


export const routes: Routes = [

    {
        path: '',
        component: EmployeesComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: EmployeeListComponent
            },
            {   path: ':id', component: EmployeeFormComponent },
            {
                path: 'add',
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
