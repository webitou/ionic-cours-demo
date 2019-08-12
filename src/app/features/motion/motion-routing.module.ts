import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotionPageComponent } from './containers/motion-page/motion-page.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MotionPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotionRoutingModule { }
