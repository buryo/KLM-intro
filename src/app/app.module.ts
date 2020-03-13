import { IddleService } from './shared/services/iddle.service';
import { CoreModule } from './modules/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    TestModule,
    CoreModule,
    FontAwesomeModule,
    IddleService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
