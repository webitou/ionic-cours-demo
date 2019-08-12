import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Toast } = Plugins;

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss'],
})

export class NotificationPageComponent implements OnInit {


  constructor( ) { }

  async displayToast() {
    const toast = await Toast.show({
      text: 'Hello '
    }).catch(err => err);
    console.log('toast:', toast);
  }

  ngOnInit() {

  }

}



// const { Toast } = Plugins;

//   async show() {
//     await Toast.show({
//       text: 'Hello!'
//     });
//   }

///////////////////////
// LOCALNOTIFICATION //
///////////////////////
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {
//   Plugins,
//   LocalNotificationScheduleResult
// } from '@capacitor/core';

// @IonicPage()
// @Component({
//   selector: 'page-local-notifications',
//   templateUrl: 'local-notifications.html',
// })
// export class LocalNotificationsPage {
//   notifs: LocalNotificationScheduleResult;
//   pendingNotifs: LocalNotificationScheduleResult;

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//     try {
//       Plugins.LocalNotifications.registerActionTypes({
//         types: [
//           {
//             id: 'OPEN_PRODUCT',
//             actions: [
//               {
//                 id: 'view',
//                 title: 'Product'
//               }, {
//                 id: 'remove', title: 'Remove', destructive: true
//               },
//               {
//                 id: 'response',
//                 title: 'Response',
//                 input: true
//               }
//             ]
//           }
//         ]
//       }
//       );

//       Plugins.LocalNotifications.addListener('localNotificationReceived', (notification) => {
//         console.log('Notification: ', notification);
//       })

//       Plugins.LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
//         console.log('Notification action performed', notification);
//       });

//     } catch(e) {
//       console.log(e);
//     }
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad LocalNotificationsPage');
//   }

//   async scheduleOnce() {
//     const now = new Date();
//     this.notifs = await Plugins.LocalNotifications.schedule({
//       notifications: [{
//         title: 'Get 20% off!',
//         body: 'Swipe to learn more',
//         id: 'special-deal',
//         sound: 'beep.aiff',
//         attachments: [
//           { id: 'face', url: 'res://face.jpg' }
//         ],
//         schedule: {
//           at: new Date(now.getTime() + (10 * 1000))
//         },
//         actionTypeId: 'OPEN_PRODUCT',
//         extra: {
//           productId: 'PRODUCT-1'
//         }
//       }]
//     });
//   }

//   async scheduleRepeating() {
//     const now = new Date();
//     this.notifs = await Plugins.LocalNotifications.schedule({
//       notifications: [{
//         title: 'Get 20% off!',
//         body: 'Swipe to learn more',
//         id: 'special-deal',
//         schedule: {
//           on: {
//             day: 1
//           }
//         }//.toISOString(),
//       }, {
//         title: 'Happy Holidays',
//         body: 'Swipe to learn more',
//         id: 'holidays',
//         schedule: {
//           every: 'minute'
//         }
//       }]
//     });
//   }

//   cancelNotification() {
//     this.pendingNotifs && Plugins.LocalNotifications.cancel(this.pendingNotifs);
//   }

//   async getPending() {
//     this.pendingNotifs = await Plugins.LocalNotifications.getPending();
//     console.log('PENDING', this.pendingNotifs);
//   }

//   toJson(o: any) {
//     return JSON.stringify(o, null, 2);
//   }
// }
