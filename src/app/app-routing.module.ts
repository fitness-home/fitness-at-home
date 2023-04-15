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
import {Survey2Component} from "./survey/survey2/survey2.component";
import {Survey3Component} from "./survey/survey3/survey3.component";
import {Survey4Component} from "./survey/survey4/survey4.component";
import {Survey5Component} from "./survey/survey5/survey5.component";
import {Survey6Component} from "./survey/survey6/survey6.component";
import {ReportComponent} from "./progress/report/report.component";
import {AppointmentComponent} from "./appointment/appointment.component";
import {PlanComponent} from "./plan/plan.component";
import {ExpertLocationComponent} from "./expert/expert-location/expert-location.component";
import { PlangeneratorComponent } from './plangenerator/plangenerator.component';
import { ShowplansComponent } from './plangenerator/showplans/showplans.component';

const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: "signup", component: RegistrationComponent},
  {path: "signin", component: SigninComponent},
  {path: "diet", component: DietListComponent},
  {path: "plan", component: PlanComponent},
  {path: "dietPlan", component: DietPlanComponent},
  {path: "exercise", component: ExerciseListComponent},
  {path: "exercisePlan", component: ExercisePlanComponent},
  {path: "expert", component: ExpertListComponent},
  {path: "expertDetail", component: ExpertDetailComponent},
  {path: "expertLocation", component: ExpertLocationComponent},
  {path: "appointment", component: AppointmentComponent},
  {path: "about", component: AboutComponent},
  {path: "survey", component: Survey1Component},
  {path: "survey2", component: Survey2Component},
  {path: "survey3", component: Survey3Component},
  {path: "survey4", component: Survey4Component},
  {path: "survey5", component: Survey5Component},
  {path: "survey6", component: Survey6Component},
  {path: "progress", component: ProgressComponent},
  {path: "consent", component: ConsentFormComponent},
  {path: "adminDiet", component: AdminDietComponent},
  {path: "adminExercise", component:AdminExerciseComponent},
  {path: "report", component: ReportComponent},
  {path: "generator", component: PlangeneratorComponent},
  {path: "plan/show", component: ShowplansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
