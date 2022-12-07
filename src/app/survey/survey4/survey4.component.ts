import { Component, OnInit } from '@angular/core';
import {Question} from "../../model/question.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey4',
  templateUrl: './survey4.component.html',
  styleUrls: ['./survey4.component.scss']
})
export class Survey4Component implements OnInit {
  question: Question = {} as any;
  questionData: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  addQuestion(data: any) {
    if(data?.value?.baselineActivityLevel) {
      this.questionData = localStorage.getItem("questionList");
      if(this.questionData) {
        this.question = JSON.parse(this.questionData);
      }
      this.question.baselineActivityLevel = data.value.baselineActivityLevel;
      localStorage.setItem("questionList", JSON.stringify(this.question) );
      this.router.navigate(["survey5"]);
    }
  }
}
