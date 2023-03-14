import { Component, OnInit } from '@angular/core';
import {Question} from "../../model/question.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey2',
  templateUrl: './survey2.component.html',
  styleUrls: ['./survey2.component.scss']
})
export class Survey2Component implements OnInit {
  question: Question = {} as any;
  questionData: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  addQuestion(data: any) {
    if(data?.value?.height) {
      this.questionData = localStorage.getItem("questionList");
      if(this.questionData) {
        this.question = JSON.parse(this.questionData);
      }
      this.question.height = data.value.height;
      localStorage.setItem("questionList", JSON.stringify(this.question) );
      this.router.navigate(["survey3"]);
    }
  }
}
