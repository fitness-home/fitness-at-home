import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertRoutingModule } from './expert-routing.module';
import {ExpertDetailComponent} from "./expert-detail/expert-detail.component";
import {ExpertListComponent} from "./expert-list/expert-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ConsentFormComponent } from './consent-form/consent-form.component';
import { AdminExpertComponent } from './admin-expert/admin-expert.component';


@NgModule({
  declarations: [ExpertListComponent, ExpertDetailComponent, ConsentFormComponent, AdminExpertComponent,],
  imports: [
    CommonModule,
    ExpertRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ExpertModule { }
