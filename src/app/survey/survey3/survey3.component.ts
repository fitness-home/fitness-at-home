import { Component, OnInit } from '@angular/core';
import {Question} from "../../model/question.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-survey3',
  templateUrl: './survey3.component.html',
  styleUrls: ['./survey3.component.scss']
})
export class Survey3Component implements OnInit {
  question: Question = {} as any;
  questionData: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  addQuestion(data: any) {
    if(data?.value?.weight) {
      this.questionData = localStorage.getItem("questionList");
      if(this.questionData) {
        this.question = JSON.parse(this.questionData);
      }
      this.question.weight = data.value.weight;
      localStorage.setItem("questionList", JSON.stringify(this.question) );
      this.router.navigate(["survey4"]);
    }
  }
}
