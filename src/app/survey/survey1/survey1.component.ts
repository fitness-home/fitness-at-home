import { Component, OnInit } from '@angular/core';
import {ExerciseService} from "../../exercise/exercise.service";
import {SurveyService} from "../survey.service";
import {Question} from "../../model/question.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey1',
  templateUrl: './survey1.component.html',
  styleUrls: ['./survey1.component.scss']
})
export class Survey1Component implements OnInit {
  question: Question = {} as any;
  questionData: any;
  user: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  addQuestion(data: any) {
    if(data?.value?.age) {
      this.user = localStorage.getItem("user");
      this.questionData = localStorage.getItem("questionList");
      if(this.questionData) {
        this.question = JSON.parse(this.questionData);
      }
      if(this.user) {
        this.question.user = this.user;
        this.question.age = data?.value?.age;
        localStorage.setItem("questionList", JSON.stringify(this.question) );
        this.router.navigate(["survey2"]);
      }
    }
  }
}
