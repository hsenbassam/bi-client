import { Employee } from './../../_models/employee';
import { EmployeeService } from './../../_services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees$;

  constructor(
    private titleService: Title,
    private employeeService: EmployeeService) {

     this.titleService.setTitle('Employee Benefits Application | List');
     this.employees$ = this.employeeService.getAll();
     }

  ngOnInit() {
  }

}
