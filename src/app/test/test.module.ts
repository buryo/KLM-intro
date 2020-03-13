import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page3Component } from './page3/page3.component';
import { AppRoutingModule } from '../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [Page3Component],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule
  ]
})
export class TestModule { }
