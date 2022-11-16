import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diet-list',
  templateUrl: './diet-list.component.html',
  styleUrls: ['./diet-list.component.scss']
})
export class DietListComponent implements OnInit {
  title='Diet Page';
  constructor() { }

  get dietList(){

  }       
  
  ngOnInit(): void {
  }

}
