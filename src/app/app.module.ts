import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LandingComponent } from './landing/landing.component';
=======
import { LandingModule } from './landing/landing.module';
>>>>>>> abass_frontend
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
<<<<<<< HEAD
    LandingComponent,
=======
>>>>>>> abass_frontend
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
<<<<<<< HEAD
    SharedModule
=======
    SharedModule,
    LandingModule,
>>>>>>> abass_frontend
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
