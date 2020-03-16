import { EcoSystemComponent } from './pages/eco-system/eco-system.component';
import { RadicalInnovationComponent } from './pages/radical-innovation/radical-innovation.component';

import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CounsilsComponent } from './pages/counsils/counsils.component';

@NgModule({
  declarations: [EcoSystemComponent, RadicalInnovationComponent, CounsilsComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule
  ]
})
export class CoreModule { }
