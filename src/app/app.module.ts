import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
