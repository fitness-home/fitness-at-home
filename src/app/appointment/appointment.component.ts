import { Component, OnInit } from '@angular/core';
import {ExpertService} from "../expert/expert.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  timeSlots: any = [
    {value: '10:00am', viewValue: "10:00am"},
    {value: '1:00pm', viewValue: "1:00pm"},
    {value: '3:00pm', viewValue: "3:00pm"},
  ]
  selectedTime: any = '10:00am';
  expertList: any;
  selectedExpert: any = "";
  displayMessage: string = "";
  constructor(public expertService: ExpertService) { }

  ngOnInit(): void {
    this.onGetExperts();
  }

  onGetExperts() {
    this.expertService.getExpertList().subscribe((res) =>  {
      this.expertList = res;
     this.selectedExpert = this.expertList[0];
    })
  }

  addAppointment(formData: any) {
    if(formData?.value) {
     let data = {
       expert: formData.value.expert,
       user: localStorage.getItem("user"),
       date: formData.value.date,
       time: formData.value.time,
      }
      this.expertService.appointment(data).subscribe((res:any) => {
        this.displayMessage = res?.message;
        formData.clear();
      })
    }
  }

}
