import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-expert-detail',
  templateUrl: './expert-detail.component.html',
  styleUrls: ['./expert-detail.component.scss']
})

export class ExpertDetailComponent implements OnInit {
  expertId: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.expertId = this.route.snapshot.paramMap.get('id');
  }

}
