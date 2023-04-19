import { Component, OnInit } from '@angular/core';
import {ExpertService} from "../expert.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-consent-form',
  templateUrl: './consent-form.component.html',
  styleUrls: ['./consent-form.component.scss']
})
export class ConsentFormComponent implements OnInit {
  expertId: any;
  isChecked: boolean = true;
  constructor(private expertService: ExpertService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.expertId = this.route.snapshot.paramMap.get('id');
  }

  sendEmail() {
    if (this.isChecked) {
      let data = {
        userID: localStorage.getItem("user"),
        expertID: this.expertId
      }
      this.expertService.connectExpert(data).subscribe(
        (response: any) => {
          if(response)
            alert('Email sent successfully');
        },
        (error) => {
          alert('Error sending email:'+ error);
        }
      );
    }
  }
}
