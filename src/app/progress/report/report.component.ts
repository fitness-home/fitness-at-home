import { Component, OnInit } from '@angular/core';
import {ProgressService} from "../progress.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(public progressService: ProgressService) { }

  ngOnInit(): void {
    this.onGenerateReport();
  }

  onGenerateReport() {
    let userData = {"user": localStorage.getItem("user")};
    this.progressService.getProgressReport(userData).subscribe((res) =>  {
      console.log(res);
    })
  }

}
