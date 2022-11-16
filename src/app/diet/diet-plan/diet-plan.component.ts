import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.scss']
})
export class DietPlanComponent implements OnInit {

  constructor() { }
  
    fakeArray = new Array(12);
  

  ngOnInit(): void {
  }

}
