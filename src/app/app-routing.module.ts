import { EcoSystemComponent } from './modules/pages/eco-system/eco-system.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './test/page2/page2.component';
import { Page3Component } from './test/page3/page3.component';


const routes: Routes = [
  {
    path: '',
    component: EcoSystemComponent,
    pathMatch: 'full',
    data: { animation: 'isLeft' }
  },
  {
    path: 'page2',
    component: Page2Component
  },
  {
    path: 'page3',
    component: Page3Component,
    data: { animation: 'isRight' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
