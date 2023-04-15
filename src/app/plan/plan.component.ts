import { Component, OnInit } from '@angular/core';
import { UserplanService } from './userplan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class PlanComponent implements OnInit {
  userName: any;
  weight?: number;
  goalweight?: number;
  age?: number;
  gender?: string;
  height?: number;
  constructor(public userService: UserplanService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("username");

    let user = localStorage.getItem("user");
    console.log(user);
    this.userService.getUserInfo(user).subscribe((res: any) => {
      this.weight = res?.weight;
      this.goalweight = res?.targetWeightGoal;
      this.height = res?.height * 30.48;
      this.age = res?.age;
      this.gender = res?.gender;
    });
  }

}
