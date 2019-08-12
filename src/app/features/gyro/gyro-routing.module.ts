import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GyroPageComponent } from './containers/gyro-page/gyro-page.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GyroPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GyroRoutingModule { }
