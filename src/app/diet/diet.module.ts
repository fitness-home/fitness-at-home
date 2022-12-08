import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietRoutingModule } from './diet-routing.module';
import {DietPlanComponent} from "./diet-plan/diet-plan.component";
import {DietListComponent} from "./diet-list/diet-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../shared/shared.module";
import {AdminDietComponent} from "./diet-list/admin-diet/admin-diet.component";



@NgModule({
  declarations: [ DietPlanComponent, DietListComponent, AdminDietComponent],
  imports: [
    CommonModule,
    DietRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class DietModule { }
