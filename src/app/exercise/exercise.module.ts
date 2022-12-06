import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseRoutingModule } from './exercise-routing.module';
import {ExerciseListComponent} from "./exercise-list/exercise-list.component";
import {ExercisePlanComponent} from "./exercise-plan/exercise-plan.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AdminExerciseComponent } from './admin-exercise/admin-exercise.component';


@NgModule({
  declarations: [ExerciseListComponent, ExercisePlanComponent, AdminExerciseComponent,],
  imports: [
    CommonModule,
    ExerciseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ExerciseModule { }
