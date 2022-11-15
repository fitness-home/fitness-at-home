import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ExerciseListComponent } from './exercise/exercise-list/exercise-list.component';
import { ExercisePlanComponent } from './exercise/exercise-plan/exercise-plan.component';
import { DietPlanComponent } from './diet/diet-plan/diet-plan.component';
import { DietListComponent } from './diet/diet-list/diet-list.component';
import { ExpertListComponent } from './expert/expert-list/expert-list.component';
import { ExpertDetailComponent } from './expert/expert-detail/expert-detail.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegistrationComponent,
    ExerciseListComponent,
    ExercisePlanComponent,
    DietPlanComponent,
    DietListComponent,
    ExpertListComponent,
    ExpertDetailComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
