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
  lunch?: any;
  dinner?: any;

  bmi?: number;
  targetbmi?: number;
  caloriesintake?: number;

  exercises: any;
  breakfast: any;
  user: any;

  constructor(private route: ActivatedRoute, public planService: PlangenServiceService) {
  }

  ngOnInit(): void {
    this.bmi = Number.parseInt(calculateBMI(this.weight, this.height));
    this.targetbmi = Number.parseInt(calculateBMI(this.goalweight, this.height));
    this.caloriesintake = caloriecalculator(this.weight, this.height, this.gender, this.age);

    this.breakfast = [];
    this.lunch = [];
    this.dinner = [];

    this.user = localStorage.getItem("username");

    this.planService.getExerciseList().subscribe((res) => {

      this.exercises = this.randomizeArray(res).slice(0, 3);
    });

    this.planService.getDietList().subscribe((res: any) => {
      this.randomizeArray(res).forEach((recipe: any) => {
        if (recipe.mealType.toLowerCase() == "breakfast" && this.breakfast.length < 3) {
          this.breakfast.push(recipe);
        } else if (recipe.mealType.toLowerCase() == "lunch"  && this.lunch.length < 3) {
          this.lunch.push(recipe);
        } else if (recipe.mealType.toLowerCase() == "dinner" && this.dinner.length < 3) {
          this.dinner.push(recipe);
        }
      });
      console.log(this.breakfast);
    });


    // this.planService.getRecipes("breakfast", 3).subscribe((res) => {
    //   this.breakfast = res;
    // });
  }

  randomizeArray(arr: any) {
    return arr.sort(function () {
      return Math.random() - 0.5;
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

function caloriecalculator(weight?: any, height?: any, gender?: string, age?: any): number {
  let calories = 0;
  if (gender == 'Female') {
    //females =  655.09 + 9.56 x (Weight in kg) + 1.84 x (Height in cm) - 4.67 x age   
    calories = 655.09 + (9.56 * weight) + (1.84 * height) - (4.67 * age);
  } else {
    calories = 66.47 + (13.75 * weight) + (5 * height) - (6.75 * age);
  }
  return calories;
}