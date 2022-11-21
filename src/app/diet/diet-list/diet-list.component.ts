import { Component, OnInit } from '@angular/core';
import {DietService} from "../diet.service";

@Component({
  selector: 'app-diet-list',
  templateUrl: './diet-list.component.html',
  styleUrls: ['./diet-list.component.scss']
})
export class DietListComponent implements OnInit {
  dietList: any;
  constructor(public dietService: DietService) { }

  ngOnInit(): void {
    this.onGetDietList();
  }

  onGetDietList() {
    this.dietService.getDietList().subscribe((res) =>  {
      this.dietList = res;
      console.log("diet", this.dietList);
    })
  }

}
