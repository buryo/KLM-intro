import { CounsilsComponent } from './modules/pages/counsils/counsils.component';
import { RadicalInnovationComponent } from './modules/pages/radical-innovation/radical-innovation.component';
import { EcoSystemComponent } from './modules/pages/eco-system/eco-system.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
    path: 'counsils',
    component: CounsilsComponent,
    data: { animation: 'isRight' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
