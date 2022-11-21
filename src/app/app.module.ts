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

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    Survey1Component
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
