import { EcoSystemComponent } from './pages/eco-system/eco-system.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { NgModule } from '@angular/core';



@NgModule({
  declarations: [EcoSystemComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule
  ]
})
export class CoreModule { }
