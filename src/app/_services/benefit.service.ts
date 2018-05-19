import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';
import { SERVER } from '../_shared/constants';


@Injectable()
export class BenefitService extends DataService {
    constructor(http: Http) {
        super(SERVER + 'api/benefit', http);
    }
}
