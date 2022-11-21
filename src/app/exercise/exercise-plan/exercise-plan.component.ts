import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-plan',
  templateUrl: './exercise-plan.component.html',
  styleUrls: ['./exercise-plan.component.scss']
})
export class ExercisePlanComponent implements OnInit {

  constructor() { }
  
    fakeArray = new Array(12);
  

  ngOnInit(): void {
  }

}
