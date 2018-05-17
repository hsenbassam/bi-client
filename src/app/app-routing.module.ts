import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';


export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'employees', loadChildren: './employees/employees.module#EmployeesModule' }
];
