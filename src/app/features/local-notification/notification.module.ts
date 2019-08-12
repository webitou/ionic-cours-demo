import { NgModule } from '@angular/core';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationPageComponent } from './containers/notification-page/notification-page.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NotificationPageComponent,
  ],
  imports: [
    SharedModule,
    NotificationRoutingModule,
    ReactiveFormsModule
  ],
})
export class NotificationModule {}



// import { IonicPageModule } from 'ionic-angular';


// @NgModule({
//   declarations: [
//     NotificationPageComponent,
//   ],
//   imports: [
//     SharedModule,
//     NotificationRoutingModule,
//     IonicPageModule.forChild(NotificationPageComponent),
//   ],
// })
// export class NotificationModule {}

