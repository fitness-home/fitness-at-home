import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {RegistrationComponent} from "./auth/registration/registration.component";
import {LandingComponent} from "./landing/landing.component";

const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: "signup", component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
