import { Component, OnInit } from '@angular/core';
import {Question} from "../../model/question.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey5',
  templateUrl: './survey5.component.html',
  styleUrls: ['./survey5.component.scss']
})
export class Survey5Component implements OnInit {
  question: Question = {} as any;
  questionData: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  addQuestion(data: any) {
    if(data?.value?.targetWeightGoal) {
      this.questionData = localStorage.getItem("questionList");
      if(this.questionData) {
        this.question = JSON.parse(this.questionData);
      }
      this.question.targetWeightGoal = data.value.targetWeightGoal;
      localStorage.setItem("questionList", JSON.stringify(this.question) );
      this.router.navigate(["survey6"]);
    }
  }

}
