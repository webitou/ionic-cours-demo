import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { StarRaterComponent } from './components/star-rater/star-rater.component';

const COMPONENTS = [
  HeaderComponent,
  StarRaterComponent
];
const MODULES = [
  CommonModule,
  IonicModule
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES
  ]
})
export class SharedModule { }
