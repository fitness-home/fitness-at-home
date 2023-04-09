import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlangenServiceService {
  private headers: HttpHeaders;
  private rapidHeaders: HttpHeaders;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Api-Key': 'WcI4P9M6QlMqNpu0PFi1gg==q6wmAMmg9zpFq81n'
    });
    this.rapidHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '12d47554eemshd74c9cb686ff2e2p17e5e4jsncddb67d7b17f',
      'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
    });
  }


  getExercises(category: string): Observable<Object> {
    console.log(category);
    return this.http.get(`https://api.api-ninjas.com/v1/exercises?type=` + category, { headers: this.headers });
  }

  getRecipes(timing: string, quanitity:number): Observable<Object> {
    return this.http.get(`https://low-carb-recipes.p.rapidapi.com/search?maxCalories=600&maxNetCarbs=5&maxSugar=3&maxAddedSugar=0&limit=${quanitity}&tags=`+timing, { headers: this.rapidHeaders });
  }
}
