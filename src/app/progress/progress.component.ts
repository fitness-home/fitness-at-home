import { Component, OnInit } from '@angular/core';
import {ProgressService} from "./progress.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  constructor(public progressService: ProgressService, public router: Router) { }

  ngOnInit(): void {
  }

  onAddProgress(data:any) {
    debugger
    let userId = localStorage.getItem("user");
    let userData = {
      weight : data.value.weight,
      FollowExercise: data.value.FollowExercise,
      FollowDiet: data.value.FollowDiet,
      ExerciseTime: data.value.ExerciseTime,
      user: userId
    }
    console.log(userData);
    this.progressService.addProgress(userData).subscribe((res) =>  {
      this.router.navigate(['']);
    })
  }


}
