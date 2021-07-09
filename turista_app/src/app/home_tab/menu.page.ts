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
  }

  ngOnInit() {
    this.trips = this.map_service.get_roads();
  }

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
          },
        },
      ],
    });

    await alert.present();
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.getUserPosition();
    }, 2000);
  }

  getUserPosition() {
    this.geolocation
      .getCurrentPosition()
      .then((res) => {
        let location =
          'lat ' + res.coords.latitude + ' lang ' + res.coords.longitude;
        this.user = new User(2121, 1212);
        this.haversine_distance(location, null);
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  private haversine_distance(mk1: any, mk2: any): void {
    console.log(this.user);
    for (let i in this.trips) {
      console.log(this.trips[i]);
      var R = 3958.8; // Radius of the Earth in miles
      var rlat1 = this.user.lat * (Math.PI / 180); // Convert degrees to radians
      var rlat2 = this.trips[i].lat * (Math.PI / 180); // Convert degrees to radians
      var difflat = rlat2 - rlat1; // Radian difference (latitudes)
      var difflon = (this.trips[i].lng - this.user.lat) * (Math.PI / 180); // Radian difference (longitudes)

      var d =
        2 *
        R *
        Math.asin(
          Math.sqrt(
            Math.sin(difflat / 2) * Math.sin(difflat / 2) +
              Math.cos(rlat1) *
                Math.cos(rlat2) *
                Math.sin(difflon / 2) *
                Math.sin(difflon / 2)
          )
        );

      console.log(' DIstance ' + d);
    }
    /* var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI / 180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI / 180); // Convert degrees to radians
    var difflat = rlat2 - rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng() - mk1.position.lng()) * (Math.PI / 180); // Radian difference (longitudes)

    var d =
      2 *
      R *
      Math.asin(
        Math.sqrt(
          Math.sin(difflat / 2) * Math.sin(difflat / 2) +
            Math.cos(rlat1) *
              Math.cos(rlat2) *
              Math.sin(difflon / 2) *
              Math.sin(difflon / 2)
        )
      );*/
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
