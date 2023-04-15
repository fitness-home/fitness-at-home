import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class LoadingComponent implements OnInit {
  dietplanshow?: boolean;
  exerciseplanshow?: boolean;

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    setTimeout(()=> {
      this.dietplanshow = true;
    },400)
    setTimeout(()=> {
      this.exerciseplanshow = true;
    },1000)
  }

}
