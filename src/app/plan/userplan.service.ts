import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserplanService {

  constructor(public http: HttpClient) { }

  getUserInfo(user: any): Observable<Object> {
    return this.http.get(`${environment.apiUrl}/question/user/`+user);
  }
}
