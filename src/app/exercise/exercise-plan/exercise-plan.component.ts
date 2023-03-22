import { Component, OnInit } from '@angular/core';
import {ExerciseService} from "../exercise.service";

@Component({
  selector: 'app-exercise-plan',
  templateUrl: './exercise-plan.component.html',
  styleUrls: ['./exercise-plan.component.scss']
})
export class ExercisePlanComponent implements OnInit {
  exercisePlan: any;
  userName: any;
  isStart: any = [];
  constructor(public exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.onGetExercisePlan();
    this.userName = localStorage.getItem("username");
  }

  onGetExercisePlan() {
    let user = localStorage.getItem("user");
    this.exerciseService.getExercisePlan(user).subscribe((res: any) =>  {
      this.exercisePlan = res[0]?.exercise;
    })
  }

  onTap(event: any) {
      console.log("on Tap"+ event)
  }

  onPinch(event: any) {
    console.log(event);
  }
}
