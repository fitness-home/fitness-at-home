import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DietService {

  constructor(public http: HttpClient) { }

  getDietList(): Observable<Object> {
    return this.http.get(`${environment.apiUrl}/diet`);
  }

  onSearchDiet(searchData: any) : Observable<Object> {
    return this.http.get(`${environment.apiUrl}/diet/search/` + searchData);
  }

  onUpdateDiet(data: any) : Observable<Object> {
    return this.http.post(`${environment.apiUrl}/diet/update`, data);
  }

  getDietPlan(user: any): Observable<Object> {
    return this.http.get(`${environment.apiUrl}/plan/user/` + user);
  }

  onUpdatePlan(data: any) : Observable<Object> {
    return this.http.post(`${environment.apiUrl}/plan/update`, data);
  }
}
