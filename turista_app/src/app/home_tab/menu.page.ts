import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { LatLngBounds, MarkerOptions } from '@ionic-native/google-maps';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { RoadMap } from './roadMap';
import {
  Geolocation,
  GeolocationOptions,
  Geoposition,
  PositionError,
} from '@ionic-native/geolocation/ngx';

import { ModalMapaPage } from './modal-mapa/modal-mapa.page';
import { ModalController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { MapServiceService } from './map-service.service';
import { AlertController } from '@ionic/angular';
import { CustomTranslateService } from '../shared/services/custom-translate.service';
import { User } from './user';
declare var google: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;

  public selected: RoadMap;
  public language: string = this.translateService.currentLang;
  private distance: any;
  private currentPos: Geoposition;

  user: User;

  public trips: any;
  constructor(
    private geolocation: Geolocation,
    private translateService: TranslateService,
    private router: Router,
    private model_controller: ModalController,
    private appComp: AppComponent,
    private map_service: MapServiceService,
    private alertController: AlertController,
    private trans: CustomTranslateService
  ) {
    appComp.hide_tab = false;
    map_service.ngOnInit();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.presentAlertRadio();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Choose the Proximity',
      inputs: [
        {
          name: 'nearMe',
          type: 'radio',
          label: 'Near me',
          value: 'near',
          checked: true,
        },
        {
          name: 'Porto',
          type: 'radio',
          label: 'Porto',
          value: 'porto',
          checked: false,
        },
        {
          name: 'Lisbon',
          type: 'radio',
          label: 'Lisbon',
          value: 'lisbon',
          checked: false,
        },
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (data) => {
            console.log(data);
            this.trips = this.map_service.get_roads();
            console.log(this.trips);
          },
        },
      ],
    });

    await alert.present();
  }

  public showRoteiro(road: RoadMap): void {
    this.selected = road;
    this.presentModal(road);
  }

  //open the page for the trip booking
  async presentModal(road: RoadMap) {
    const modal = await this.model_controller.create({
      component: ModalMapaPage,
      cssClass: './modal-mapa/modal-mapa.scss',
      componentProps: {
        circuito: road,
      },
    });
    return await modal.present();
  }
}
