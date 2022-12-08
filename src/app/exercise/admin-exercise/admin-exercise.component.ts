import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ExerciseService} from "../exercise.service";


@Component({
  selector: 'app-admin-exercise',
  templateUrl: './admin-exercise.component.html',
  styleUrls: ['./admin-exercise.component.scss']
})
export class AdminExerciseComponent implements OnInit {
  exerciseData: any;
  constructor(public router:Router, public activatedRoute: ActivatedRoute, public exerciseService: ExerciseService) {
    this.exerciseData = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
  }

  onUpdateExercise(exerciseData: any) {
    this.exerciseData.name = exerciseData.value.name;
    this.exerciseData.description = exerciseData.value.description;
    this.exerciseData.duration = exerciseData.value.duration;
    this.exerciseService.onUpdateExercise(this.exerciseData).subscribe((res) => {
      console.log("updated", res);
      this.router.navigate(['exercise']);
    })
  }
}
