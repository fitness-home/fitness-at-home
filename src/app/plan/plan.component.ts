import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  userName: any;
  constructor() { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("username");
  }

}
