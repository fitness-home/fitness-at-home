import { Component, OnInit } from '@angular/core';
import {ExerciseService} from "../exercise.service";

@Component({
  selector: 'app-exercise-plan',
  templateUrl: './exercise-plan.component.html',
  styleUrls: ['./exercise-plan.component.scss']
})
export class ExercisePlanComponent implements OnInit {
  exercisePlan: any;
  constructor(public exerciseService: ExerciseService) { }

  fakeArray = new Array(4);
  ngOnInit(): void {
    this.onGetExercisePlan();
  }

  onGetExercisePlan() {
    this.exerciseService.getExercisePlan().subscribe((res) =>  {
      this.exercisePlan = res;
    })
  }
}
