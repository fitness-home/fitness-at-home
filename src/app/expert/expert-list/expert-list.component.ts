import { Component, OnInit } from '@angular/core';
import {ExpertService} from "../expert.service";

@Component({
  selector: 'app-expert-list',
  templateUrl: './expert-list.component.html',
  styleUrls: ['./expert-list.component.scss']
})
export class ExpertListComponent implements OnInit {
  expertList: any;
  constructor(public expertService: ExpertService) { }

  ngOnInit(): void {
    this.onGetDietList();
  }

  onGetDietList() {
    this.expertService.getExpertList().subscribe((res) =>  {
      this.expertList = res;
    })
  }

}
