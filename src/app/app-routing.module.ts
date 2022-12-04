import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {LandingComponent} from "./landing/landing.component";
import {DietListComponent} from "./diet/diet-list/diet-list.component";
import {ExerciseListComponent} from "./exercise/exercise-list/exercise-list.component";
import {ExpertListComponent} from "./expert/expert-list/expert-list.component";
import {DietPlanComponent} from "./diet/diet-plan/diet-plan.component";
import {ExercisePlanComponent} from "./exercise/exercise-plan/exercise-plan.component";
import {AboutComponent} from "./about/about.component";
import {Survey1Component} from "./survey/survey1/survey1.component";
import {SigninComponent} from "./auth/signin/signin.component";

const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: "signup", component: RegistrationComponent},
  {path: "signin", component: SigninComponent},
  {path: "diet", component: DietListComponent},
  {path: "dietPlan", component: DietPlanComponent},
  {path: "exercise", component: ExerciseListComponent},
  {path: "exercisePlan", component: ExercisePlanComponent},
  {path: "expert", component: ExpertListComponent},
  {path: "about", component: AboutComponent},
  {path: "survey", component: Survey1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
