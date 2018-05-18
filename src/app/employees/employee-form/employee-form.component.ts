import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  form;

  constructor(private router: Router, private fb: FormBuilder) {
    this.form = fb.group({
      info: fb.group({
        name: ['', Validators.required],
        dob: [],
        salary: ['', Validators.min(0)]
      }),
      benefits: fb.group({
        data: fb.array([])
      })
    });
  }
  public checks = [
    { benefit: 'Phone Allowance', value: 'phone' },
    { benefit: 'Car Allowance', value: 'car' },
    { benefit: 'Meal Allowance', value: 'meal' },
    { benefit: '17 Months', value: 'month' },
    { benefit: '4 Two-ways Tickets', value: 'tickets' }
  ];

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
    console.log(this.form.value);
  }
}
