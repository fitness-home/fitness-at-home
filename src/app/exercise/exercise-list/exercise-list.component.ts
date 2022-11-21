import { Component, OnInit } from '@angular/core';
import {ExerciseService} from "../exercise.service";


@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {

  exerciseList: any;
  constructor(public exerciseService: ExerciseService) { }

  ngOnInit(): void {
    this.onGetExerciseList();
  }

  onGetExerciseList() {
    this.exerciseService.getExerciseList().subscribe((res) =>  {
      this.exerciseList = res;
      console.log("diet", this.exerciseList);
    })
  }

}
