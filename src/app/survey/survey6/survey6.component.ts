import { Component, OnInit } from '@angular/core';
import {SurveyService} from "../survey.service";
import {Question} from "../../model/question.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey6',
  templateUrl: './survey6.component.html',
  styleUrls: ['./survey6.component.scss']
})
export class Survey6Component implements OnInit {
  question: Question = {} as any;
  questionData: any;
  constructor(public router: Router, public surveyService: SurveyService) { }

  ngOnInit(): void {
  }

  addQuestion(data: any) {
    if(data?.value?.gender) {
      this.questionData = localStorage.getItem("questionList");
      if(this.questionData) {
        this.question = JSON.parse(this.questionData);
      }
      this.question.gender = data.value.gender;
      localStorage.setItem("questionList", JSON.stringify(this.question) );
      this.addAllQuestion();
    }
  }


  addAllQuestion() {
    this.questionData = localStorage.getItem("questionList");
    if(this.questionData) {
      this.question = JSON.parse(this.questionData);
    }
    this.surveyService.addSurvey(this.question).subscribe((res) =>  {
      if(res)
      this.router.navigate(["diet"]);
    })
  }

}
