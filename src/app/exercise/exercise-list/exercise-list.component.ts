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
  userType: any;
  user:any;
  constructor(public exerciseService: ExerciseService, public router: Router) { }

  ngOnInit(): void {
    this.onGetExerciseList();
    this.userType =localStorage.getItem("username");
    this.user = localStorage.getItem("user");
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

  onAddToPlan(id: any) {
    let data= {"exercise": id, "user": this.user};
    this.exerciseService.onUpdatePlan(data).subscribe((res: any) =>  {
      if(res) {
        this.router.navigate(['exercisePlan']);
      }
    }, error => {
      alert(error.error);
    })
  }
}
