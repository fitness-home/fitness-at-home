<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';

>>>>>>> abass_frontend

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
<<<<<<< HEAD
=======
  @Input() title?: string;
>>>>>>> abass_frontend

  constructor() { }

  ngOnInit(): void {
  }
<<<<<<< HEAD
=======
  
>>>>>>> abass_frontend

}
