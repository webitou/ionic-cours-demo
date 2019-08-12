import { Component, OnInit } from '@angular/core';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cam-page',
  templateUrl: './cam-page.component.html',
  styleUrls: ['./cam-page.component.scss'],
})
export class CamPageComponent implements OnInit {

  photo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  ngOnInit() {}

}
