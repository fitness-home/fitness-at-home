import {Component, Input, OnInit} from '@angular/core';
import {ProgressService} from "../progress.service";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  pdfSrc: any;
  src: any;
  constructor(public aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.aRoute
      .queryParams.forEach(value => {
       this.src = value;
       this.pdfSrc = this.src?.pdfSrc;
      })

  }

}
