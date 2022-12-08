import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NgForm } from "@angular/forms";
import {AuthService} from "../auth.service";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public username: any
  public password: any;
  public message?: string;

  constructor(private router: Router,
    private auth: AuthService) { }

authenticate(form: NgForm) {
    if (form.valid) {

        // perform authentication
        this.auth.authenticate(this.username, this.password)
            .subscribe(response => {
                if (response.username) {
                    this.router.navigateByUrl(this.auth.redirectUrl || "/");
                }
                this.message = "login success";
            });
    } else {
        this.message = "Form Data Invalid";
    }
}

  ngOnInit(): void {
  }

}
