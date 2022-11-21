import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import {LandingComponent} from "./landing.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [ LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class LandingModule { }
