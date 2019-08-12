import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { merge, Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastOptions } from '@ionic/core';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-update-notification',
  template: `
      <div *ngIf="updateAvailable$|async"> </div>
  `,
  styles: [``],
  encapsulation: ViewEncapsulation.None
})

export class UpdateNotificationComponent {
  updateAvailable$: Observable<boolean | {}>;
  closed$ = new Subject<void>();

  constructor(
      private updates: SwUpdate,
      private _toast: ToastController
  ) {
      console.log('Application updater install: ', environment.production);
      this.updateAvailable$ = merge(
          of(false),
          this.updates.available.pipe(
              map(async _ => await this._displayNotif()),
              map(() => true)
          ),
          this.closed$.pipe(map(() => false)),
      );
  }

  activateUpdate() {
      if (environment.production) {
          this.updates.activateUpdate().then(() => {
              location.reload(true);
          });
      }
  }

  private async _displayNotif() {
      console.log('display notification...');
      const data =  {
        message: 'Nouvelle mise à jours!',
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: `Update`,
      } as ToastOptions;
      const toast = await this._toast.create(data);
      await toast.present();
      toast.onDidDismiss()
           .then(_ => this.activateUpdate());
    }
}
