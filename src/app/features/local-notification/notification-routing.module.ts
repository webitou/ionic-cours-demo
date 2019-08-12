import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationPageComponent } from './containers/notification-page/notification-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: NotificationPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationRoutingModule { }
