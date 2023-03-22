import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor(public http: HttpClient) { }

  addProgress(data: any): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/progress/add`, data);
  }

  getProgressReport(data: any): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/progress/generate-progress-report`, data,  {responseType: 'blob'});
  }

}
