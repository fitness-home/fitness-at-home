import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlangenServiceService } from '../plangen-service.service';

@Component({
  selector: 'app-showplans',
  templateUrl: './showplans.component.html',
  styleUrls: ['./showplans.component.scss',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',]
})
export class ShowplansComponent implements OnInit {
  @Input() weight?: number;
  @Input() goalweight?: number;
  @Input() age?: number;
  @Input() gender?: string;
  @Input() exerciseCategory?: string;
  @Input() height?: number;
  @Input() lunch?: any;
  @Input() dinner?: any;

  bmi?: number;
  targetbmi?: number;

  exercises: any;
  breakfast: any;

  constructor(private route: ActivatedRoute, public planService: PlangenServiceService) {
  }

  ngOnInit(): void {
    this.bmi = Number.parseInt(calculateBMI(this.weight, this.height));
    this.targetbmi = Number.parseInt(calculateBMI(this.goalweight, this.height));

    this.planService.getExercises(this.exerciseCategory ?? "cardio").subscribe((res) => {
      this.exercises = res;
    });

    this.planService.getRecipes("breakfast", 3).subscribe((res) => {
      this.breakfast = res;
    });
  }



}


function calculateBMI(weight?: number, height?: number) {
  // convert height to meters
  let height1 = ((height ?? 0) / 100);
  // calculate BMI
  let bmi_ = ((weight ?? 0) / (height1 * height1));
  // return BMI rounded to 2 decimal places
  console.log(bmi_);
  return bmi_.toFixed(2);
}