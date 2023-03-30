import { Component, OnInit } from '@angular/core';
import { ProgressService } from './progress.service';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  pdfSrc: any;
  exerciseFrequencies: string[] = ['0 times', '1 time', '2 times', '3 times', '4 times', '5 times'];
  ages: number[] = Array.from({length: 63}, (_, i) => 18 + i);
  weights: number[] = Array.from({length: 161}, (_, i) => 40 + i);

  constructor(
    public progressService: ProgressService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  onAddProgress(data: any) {
    let userId = localStorage.getItem('user');
    let userData = {
      weight: data.value.weight,
      FollowExercise: data.value.FollowExercise,
      FollowDiet: data.value.FollowDiet,
      ExerciseTime: data.value.ExerciseTime,
      user: userId,
    };
    console.log(userData);
    this.progressService.addProgress(userData).subscribe((res) => {
      this.onGenerateReport();
    });
  }

  onGenerateReport() {
    let userId = localStorage.getItem('user');
    let userData = {
      user: userId,
    };
    this.progressService.getProgressReport(userData).subscribe((resp: any) => {
      let response = new Blob([resp], { type: 'application/pdf' });
      FileSaver.saveAs(resp, `filename.pdf`);
      this.pdfSrc = window.URL.createObjectURL(response);
      this.router.navigate(['/report'], { queryParams: { pdfSrc: this.pdfSrc } });
    });
  }
}
