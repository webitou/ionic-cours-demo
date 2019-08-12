import { NgModule } from '@angular/core';

import { MotionRoutingModule } from './motion-routing.module';
import { MotionPageComponent } from './containers/motion-page/motion-page.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MotionPageComponent
  ],
  imports: [
    SharedModule,
    MotionRoutingModule,
    ReactiveFormsModule
  ]
})
export class MotionModule { }
