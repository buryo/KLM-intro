import { RadicalInnovationComponent } from './modules/pages/radical-innovation/radical-innovation.component';
import { EcoSystemComponent } from './modules/pages/eco-system/eco-system.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page3Component } from './test/page3/page3.component';


const routes: Routes = [
  {
    path: '',
    component: EcoSystemComponent,
    pathMatch: 'full',
    data: { animation: 'isLeft' }
  },
  {
    path: 'radical-innovation',
    component: RadicalInnovationComponent
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
