import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';
import { SERVER } from '../_shared/constants';


@Injectable()
export class EmployeeBenefitService extends DataService {
    constructor(http: Http) {
        super(SERVER + 'api/employeebenefit', http);
    }
}
