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
import {ExpertDetailComponent} from "./expert/expert-detail/expert-detail.component";
import {ProgressComponent} from "./progress/progress.component";
import {ConsentFormComponent} from "./expert/consent-form/consent-form.component";
import {AdminDietComponent} from "./diet/diet-list/admin-diet/admin-diet.component";
import {AdminExerciseComponent} from "./exercise/admin-exercise/admin-exercise.component";

const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: "signup", component: RegistrationComponent},
  {path: "signin", component: SigninComponent},
  {path: "diet", component: DietListComponent},
  {path: "dietPlan", component: DietPlanComponent},
  {path: "exercise", component: ExerciseListComponent},
  {path: "exercisePlan", component: ExercisePlanComponent},
  {path: "expert", component: ExpertListComponent},
  {path: "expertDetail", component: ExpertDetailComponent},
  {path: "about", component: AboutComponent},
  {path: "survey", component: Survey1Component},
  {path: "progress", component: ProgressComponent},
  {path: "consent", component: ConsentFormComponent},
  {path: "adminDiet", component: AdminDietComponent},
  {path: "adminExercise", component:AdminExerciseComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
