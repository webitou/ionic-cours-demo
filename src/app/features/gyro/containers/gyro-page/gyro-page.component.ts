import { Component, OnInit, NgZone } from '@angular/core';
import { GyroscopePluginWebWeb } from 'Gyroscope-plugin/src';
// import { GyroscopePluginWeb } from '';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

@Component({
  selector: 'app-gyro-page',
  templateUrl: './gyro-page.component.html',
  styleUrls: ['./gyro-page.component.scss'],
})
export class GyroPageComponent implements OnInit {

  public data$: Observable<any>;
  public position: any;

  constructor(
    private sanitizer: DomSanitizer,
    private _ngZone: NgZone
  ) {  }



  ngOnInit() {
    const p = new GyroscopePluginWebWeb();
    p.echo( { value: 'Hello'});
    p.start();


    this.data$ =  p.data.pipe(
      tap(() => this._ngZone.run(() => {}))
    );
  }


  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
      console.log(position, err);
      this.position = {
        coords: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      };
    });
  }

}
