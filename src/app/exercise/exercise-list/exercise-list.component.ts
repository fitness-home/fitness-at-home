import { Component, OnInit } from '@angular/core';
import {ExerciseService} from "../exercise.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {
  searchValue: any;
  exerciseList: any;
  user: any;
  constructor(public exerciseService: ExerciseService, public router: Router) { }

  ngOnInit(): void {
    this.onGetExerciseList();
    this.user = localStorage.getItem("username");
  }

  onGetExerciseList() {
    this.exerciseService.getExerciseList().subscribe((res) =>  {
      this.exerciseList = res;
    })
  }

  onSearch(data: any) {
    if(data) {
      this.exerciseService.onSearchExercise(data).subscribe((res) =>  {
        this.exerciseList = res;
      })
    } else {
      this.onGetExerciseList();
    }
  }

  onEditExercise(exerciseData: any) {
    this.router.navigateByUrl('/adminExercise', {state: {id: exerciseData._id, name: exerciseData.name, description: exerciseData.description, duration: exerciseData.duration, image: exerciseData.image}} );
  }
}
