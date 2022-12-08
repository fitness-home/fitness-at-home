import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DietService} from "../../diet.service";

@Component({
  selector: 'app-admin-diet',
  templateUrl: './admin-diet.component.html',
  styleUrls: ['./admin-diet.component.scss']
})
export class AdminDietComponent implements OnInit {
  dietData: any;
  constructor(public router:Router, public activatedRoute: ActivatedRoute, public dietService: DietService) {
    this.dietData = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
  }

  onUpdateDiet(dietData: any) {
    this.dietData.name = dietData.value.name;
    this.dietData.description = dietData.value.description;
    this.dietData.duration = dietData.value.duration;
    this.dietService.onUpdateDiet(this.dietData).subscribe((res) => {
      console.log("updated", res);
      this.router.navigate(['diet']);
    })
  }

}
