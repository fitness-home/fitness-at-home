import { Component, OnInit } from '@angular/core';
import {DietService} from "../diet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-diet-list',
  templateUrl: './diet-list.component.html',
  styleUrls: ['./diet-list.component.scss']
})
export class DietListComponent implements OnInit {
  searchValue: any;
  dietList: any;
  user: any;
  constructor(public dietService: DietService, public router: Router) { }

  ngOnInit(): void {
    this.onGetDietList();
    this.user = localStorage.getItem("username");
  }

  onGetDietList() {
    this.dietService.getDietList().subscribe((res) =>  {
      this.dietList = res;
    })
  }

  onSearch(data: any) {
    if(data) {
      this.dietService.onSearchDiet(data).subscribe((res) =>  {
        this.dietList = res;
      })
    } else {
      this.onGetDietList();
    }
  }

  onEditDiet(dietData: any) {
    this.router.navigateByUrl('/adminDiet', {state: {id: dietData._id, name: dietData.name, description: dietData.description, calories: dietData.calories, image: dietData.image}} );
  }

  onAddToPlan(id: any) {
    let data= {"diet": id, "plan": "63914735a516c6532099a174"};
    this.dietService.onUpdatePlan(data).subscribe((res: any) =>  {
      this.router.navigate(['dietPlan']);
    })
  }

}
