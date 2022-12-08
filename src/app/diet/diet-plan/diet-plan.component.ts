import { Component, OnInit } from '@angular/core';
import {DietService} from "../diet.service";

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.scss']
})
export class DietPlanComponent implements OnInit {
  dietPlan: any;
  userName: any;
  constructor(public dietService: DietService) { }


  ngOnInit(): void {
    this.onGetExercisePlan();
    this.userName = localStorage.getItem("username");
  }

  onGetExercisePlan() {
    let user =localStorage.getItem("user");
    this.dietService.getDietPlan(user).subscribe((res: any) =>  {
      this.dietPlan = res[0]?.diet;
    })
  }

}
