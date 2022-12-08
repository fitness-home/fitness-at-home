import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  createUser(user: any): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/user`, user);
  }

  getPlan(user: any): Observable<Object> {
    let userData = {"user": user};
    return this.http.post(`${environment.apiUrl}/plan/generate`, userData);
  }
}
