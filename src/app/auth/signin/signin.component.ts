import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  data?: any;
  constructor(public authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  login(formData: any) {
    this.data = {
      username: formData.value.username,
      password: formData.value.password,
    }
    this.authService.login(this.data)
      .subscribe(response => {
        let user = {} as any;
        user = response;
        localStorage.setItem("user", user?._id);
        localStorage.setItem("username", user?.username);
        this.router.navigate(["/diet"]);
      })
  }
}
