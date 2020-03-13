import { EcoSystemComponent } from './pages/eco-system/eco-system.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalComponent, ModalComponent } from '../shared/modal/modal.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [EcoSystemComponent,NgbdModalComponent, ModalComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule,
    BrowserModule,
    ModalComponent,
    NgbModule
  ],
  exports: [ModalComponent],
  bootstrap: [ModalComponent],
  entryComponents: [ModalComponent]
})
export class CoreModule { }
