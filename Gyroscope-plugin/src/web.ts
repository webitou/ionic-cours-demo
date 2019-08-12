import { WebPlugin } from '@capacitor/core';
import { GyroscopePluginWebPlugin } from './definitions';
import { BehaviorSubject, Observable } from 'rxjs';

declare const AbsoluteOrientationSensor: any;

export class GyroscopePluginWebWeb extends WebPlugin implements GyroscopePluginWebPlugin {

  public data: Observable<any>;
  private _data: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    super({
      name: 'GyroscopePluginWeb',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }

  async start() {
    const sensor = new AbsoluteOrientationSensor();
    sensor.start();
    sensor.onerror = ( event: any) => {
      if (event.error.name === 'SecurityError') {
          console.log('No permissions to use AbsoluteOrientationSensor.');
      }
    };
    sensor.onreading = ( e: any ) => {
      console.log( 'Angular volocity ', sensor );
      // this._data.next(sensor.quaternion);
      const q = sensor.quaternion;
      this._data.next( q );
    };
    this.data = this._data.asObservable();
    // tslint:disable-next-line: no-use-before-declare
    return Promise.resolve();
  }
}

const GyroscopePluginWeb = new GyroscopePluginWebWeb();

export { GyroscopePluginWeb };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(GyroscopePluginWeb);
