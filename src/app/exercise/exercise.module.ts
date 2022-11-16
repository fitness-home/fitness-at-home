import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseRoutingModule } from './exercise-routing.module';
import {ExerciseListComponent} from "./exercise-list/exercise-list.component";
import {ExercisePlanComponent} from "./exercise-plan/exercise-plan.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [ExerciseListComponent, ExercisePlanComponent,],
  imports: [
    CommonModule,
    ExerciseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ExerciseModule { }
