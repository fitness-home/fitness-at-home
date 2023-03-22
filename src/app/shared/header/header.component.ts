import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("username");
  }

  onLogOut() {
    localStorage.setItem("username", '');
    this.router.navigate(['signin']);
  }

}

