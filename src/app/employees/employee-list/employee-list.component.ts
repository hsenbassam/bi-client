import { Employee } from './../../_models/employee';
import { EmployeeService } from './../../_services/employee.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  displayedColumns = ['id', 'name', 'dob', 'salary', 'edit', , 'delete'];

  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private titleService: Title,
    private employeeService: EmployeeService) {

    this.titleService.setTitle('Employee Benefits Application | List');
  }

  ngOnInit() {
    this.employeeService.getAll().subscribe(employees => {
      this.employees = employees;
      console.log(this.employees);
      this.dataSource = new MatTableDataSource(this.employees);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
