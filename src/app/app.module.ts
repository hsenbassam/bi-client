import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeBenefitService } from './_services/employee-benefit.service';
import { BenefitService } from './_services/benefit.service';
import { EmployeeService } from './_services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { FooterComponent } from './footer/footer.component';
import { CollapseModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    CollapseModule.forRoot()
  ],
  providers: [
    EmployeeService,
    BenefitService,
    EmployeeBenefitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
