import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoModalComponent } from './components/demo-modal/demo-modal.component';
import { CoreModule } from './core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UpdateNotificationComponent } from './components/update-notification/update-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoModalComponent,
    UpdateNotificationComponent,
  ],
  entryComponents: [
    DemoModalComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    IonicModule.forRoot({
      mode: 'md',

    }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    UpdateNotificationComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
