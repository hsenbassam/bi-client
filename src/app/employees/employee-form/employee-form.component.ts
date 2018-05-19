import { EmployeeBenefitService } from './../../_services/employee-benefit.service';
import { EmployeeBenefit } from './../../_models/employeeBenefit';
import { Employee } from './../../_models/employee';
import { Benefit } from './../../_models/benefit';
import { BenefitService } from './../../_services/benefit.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { EmployeeService } from '../../_services/employee.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  form; url;
  checks: Benefit[];
  maxDate = new Date();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private _router: Router,
    private toastr: ToastrService,
    private employeeService: EmployeeService,
    private benefitService: BenefitService,
    private employeeBenefitService: EmployeeBenefitService) {

    this.url = _router.url;

    this.benefitService.getAll().subscribe(response => this.checks = response);


    this.form = fb.group({
      info: fb.group({
        name: ['', Validators.required],
        dob: [new Date()],
        salary: ['', Validators.min(0)]
      }),
      benefits: fb.group({
        data: fb.array([])
      })
    });
  }


  onChange(benefit: string, isChecked: boolean) {
    const benefitsFormArray = <FormArray>this.form.controls.benefits.controls.data;

    if (isChecked) {
      benefitsFormArray.push(new FormControl(benefit));
    } else {
      const index = benefitsFormArray.controls.findIndex(x => x.value === benefit);
      benefitsFormArray.removeAt(index);
    }
  }


  ngOnInit() {
  }
  get name() {
    return this.form.get('info.name');
  }
  get salary() {
    return this.form.get('info.salary');
  }
  get benefits() {
    return this.form.get('benefits.data');
  }
  save() {
    this.form.value.info.dob = this.datePipe.transform(this.form.value.info.dob, 'yyyy-MM-dd');
    if (this.form.valid) {
      const employee: Employee = this.form.value.info;
      const benefitsFormArray = this.form.value.benefits.data;
      if (this.url.includes('/add')) {
        this.addEmployee(employee, benefitsFormArray);
      }
    } else {
      console.log('The Form is Invalid');
    }
  }

  private addEmployee(employee, benefits) {
    this.employeeService.post(employee)
      .subscribe(response => {
        benefits.forEach(benefitId => {
          const employeeBenefit: EmployeeBenefit = new EmployeeBenefit(response.EmployeeId, benefitId);
          this.employeeBenefitService.post(employeeBenefit).subscribe();
        });
        this.toastr.success('Success', 'You Just Add ' + response.Name);
      });
  }
}
