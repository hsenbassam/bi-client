import { Employee } from './../../_models/employee';
import { EmployeeService } from './../../_services/employee.service';
import { MatTableDataSource, MatPaginator, MatSort, MatSortable } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  displayedColumns = ['id', 'name', 'dob', 'salary', 'edit', 'delete'];

  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private titleService: Title,
    private toastr: ToastrService,
    private employeeService: EmployeeService) {

    this.titleService.setTitle('Employee Benefits Application | List');
  }

  ngOnInit() {

    this.employeeService.getAll().subscribe(employees => {
      this.employees = employees;
      this.dataSource = new MatTableDataSource(this.employees);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.sort.sort(<MatSortable>{ id: 'name', start: 'asc' });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  delete(id) {

    if (!confirm('Are you sure you want to delete this employee?')) { return; }

    this.employeeService.delete(id)
      .subscribe(response => {
        if (!response) {
          this.toastr.error('Success', 'You Just Delete Employee with id ' + id);
          this.refresh(); // Refresh the Datatable
        }
      });
  }

  refresh() {
    this.employeeService.getAll().subscribe(employees => {
      this.employees = employees;
      this.dataSource = new MatTableDataSource(this.employees);
    });
  }

}
