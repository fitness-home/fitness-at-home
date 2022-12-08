import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  data?: User;
  planId: any;
  constructor(public authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  addData(formData: any) {
    this.data = {
      username: formData.value.username,
      email: formData.value.email,
      password: formData.value.password,
      firstName: formData.value.firstName,
      lastName: formData.value.lastName,
      address: formData.value.address,
      city: formData.value.city,
      postalCode: formData.value.postalCode,
      question1: formData.value.question1,
      answer1: formData.value.answer1,
      question2: formData.value.question2,
      answer2: formData.value.answer2,
    }
    this.authService.createUser(this.data)
      .subscribe(response => {
        let user = {} as any;
        user = response;
        localStorage.setItem("user", user?._id);
        this.authService.getPlan(user?._id).subscribe((res: any) =>  {
         console.log("plan Generated");
        })
        this.router.navigate(["/survey"]);
      })
  }
}

