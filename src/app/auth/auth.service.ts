import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import {environment} from "../../environments/environment";
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public username?: string;
  private _redirectUrl?: string| null;
  baseUrl: string;
  auth_token?: string;


  constructor(public http: HttpClient) {
    this.baseUrl = environment.apiUrl;
        console.log(this.baseUrl);
   }

  createUser(user: any): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/user`, user);
  }

  authenticate(user: string, pass: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + "/signin", 
    {
        username: user, 
        password: pass
    }).pipe(
        map(response => {
            this.auth_token = response.username ? response.token : null;
            return response;
        }),
        catchError(error => {return of(error.error)})
    );
}

get authenticated(): boolean {
  return this.auth_token != null;
}


get redirectUrl(): string{
  let result = this._redirectUrl;
  this._redirectUrl = null;
  return result as string;
}
set redirectUrl(url: string){
  this._redirectUrl = url;
}
private provideToken() {
  return {
      headers: new HttpHeaders({
          "Authorization": `Bearer ${this.auth_token}`
      })
  }
}
}
