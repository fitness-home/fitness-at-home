import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietRoutingModule } from './diet-routing.module';
import {DietPlanComponent} from "./diet-plan/diet-plan.component";
import {DietListComponent} from "./diet-list/diet-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [ DietPlanComponent, DietListComponent,],
  imports: [
    CommonModule,
    DietRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class DietModule { }
