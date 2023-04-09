import { Component, Input, OnInit } from '@angular/core';
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss',
    '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ExercisesComponent implements OnInit {
  @Input() exercises?: any;

  constructor() { }

  ngOnInit(): void {
  }

  customize(text: string): string {
    const te = text.replace(/\./g, ". \n");
    return " "+te;
  }

}
