import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person } from './person';

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {}

  getPerson() {
    return this.http
      .get<any>('assets/person.json')
      .toPromise()
      .then((res) => <Person[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
