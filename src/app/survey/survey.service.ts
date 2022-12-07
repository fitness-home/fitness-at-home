import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(public http: HttpClient) { }

  addSurvey(data: any): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/question` , data);
  }

}
