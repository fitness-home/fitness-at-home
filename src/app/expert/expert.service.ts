import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExpertService {
  constructor(public http: HttpClient) { }

  getExpertList(): Observable<Object> {
    return this.http.get(`${environment.apiUrl}/experts/all`);
  }

  connectExpert(data: any):  Observable<Object> {
    return this.http.post(`${environment.apiUrl}/experts/connect`, data);
  }
}
