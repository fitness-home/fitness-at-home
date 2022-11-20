import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

<<<<<<< HEAD
=======
import { SharedRoutingModule } from './shared-routing.module';

>>>>>>> abass_frontend


@NgModule({
  declarations: [HeaderComponent, FooterComponent,],
  imports: [
<<<<<<< HEAD
    CommonModule
=======
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    HeaderComponent, FooterComponent,
>>>>>>> abass_frontend
  ]
})
export class SharedModule { }
