import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(public http: HttpClient) { }

  getExerciseList(): Observable<Object> {
    return this.http.get(`${environment.apiUrl}/exercise`);
  }

  getExercisePlan(): Observable<Object> {
    return this.http.get(`${environment.apiUrl}/plan/all`);
  }

  onSearchExercise(searchData: any) : Observable<Object> {
    return this.http.get(`${environment.apiUrl}/exercise/search/` + searchData);
  }
}
