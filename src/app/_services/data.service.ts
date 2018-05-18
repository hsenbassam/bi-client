import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class DataService {

    protected headers: Headers;
    protected options: RequestOptions;

    constructor(protected url: string, protected http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }


    getAll() {
        return this.http.get(this.url, this.options)
            .map(response =>  response.json());
    }

    get(key) {
        return this.http.get(this.url + '/' + key, this.options)
            .map(response =>  response.json());
    }

    post(resource) {
        return this.http.post(this.url, resource, this.options)
            .map(response =>  response.json());
    }

    update(resource) {
        return this.http.put(this.url + '/' + resource.id, resource, this.options)
            .map(response =>  response.json());
    }

    delete(id) {
        return this.http.delete(this.url + '/' + id, this.options)
            .map(response => response.arrayBuffer().byteLength === 0);
    }

}
