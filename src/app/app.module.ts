import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { AboutComponent } from './about/about.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { Survey1Component } from './survey/survey1/survey1.component';
import {AuthModule} from "./auth/auth.module";
import {DietModule} from "./diet/diet.module";
import {ExerciseModule} from "./exercise/exercise.module";
import {ExpertModule} from "./expert/expert.module";
import {SharedModule} from "./shared/shared.module";
import { ProgressComponent } from './progress/progress.component';
import {Survey2Component} from "./survey/survey2/survey2.component";
import {Survey3Component} from "./survey/survey3/survey3.component";
import {Survey4Component} from "./survey/survey4/survey4.component";
import {Survey5Component} from "./survey/survey5/survey5.component";
import {Survey6Component} from "./survey/survey6/survey6.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    Survey1Component,
    Survey2Component,
    Survey3Component,
    Survey4Component,
    Survey5Component,
    Survey6Component,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    DietModule,
    ExerciseModule,
    ExpertModule,
    SharedModule,
    LandingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
