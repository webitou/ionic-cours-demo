import { NgModule } from '@angular/core';

import { CamRoutingModule } from './cam-routing.module';
import { CamPageComponent } from './containers/cam-page/cam-page.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CamPageComponent
  ],
  imports: [
    SharedModule,
    CamRoutingModule,
    ReactiveFormsModule
  ]
})
export class CamModule { }
