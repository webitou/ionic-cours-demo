import { NgModule } from '@angular/core';

import { GyroRoutingModule } from './gyro-routing.module';
import { GyroPageComponent } from './containers/gyro-page/gyro-page.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GyroPageComponent
  ],
  imports: [
    SharedModule,
    GyroRoutingModule,
    ReactiveFormsModule
  ]
})
export class GyroModule { }
