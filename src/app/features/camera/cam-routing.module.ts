import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamPageComponent } from './containers/cam-page/cam-page.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CamPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamRoutingModule { }
