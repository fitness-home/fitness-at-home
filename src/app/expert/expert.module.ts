import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertRoutingModule } from './expert-routing.module';
import {ExpertDetailComponent} from "./expert-detail/expert-detail.component";
import {ExpertListComponent} from "./expert-list/expert-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [ExpertListComponent, ExpertDetailComponent,],
  imports: [
    CommonModule,
    ExpertRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ExpertModule { }
