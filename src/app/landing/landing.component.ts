import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Input() title?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
