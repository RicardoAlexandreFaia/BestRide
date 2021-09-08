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

import { OptionsMapPage } from './options-map/options-map.page';
import { BookTripModalPage } from './book-trip-modal/book-trip-modal.page';
import { ModalController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { MapServiceService } from './map-service.service';
import { AlertController } from '@ionic/angular';
import { CustomTranslateService } from '../shared/services/custom-translate.service';
import { User } from './user';
import { TripDetailsPage } from './trip-details/trip-details.page';

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
  public contentLoad = false;
  public trips: Array<RoadMap> = [];

  constructor(
    private geolocation: Geolocation,
    private translateService: TranslateService,
    private router: Router,
    private model_controller: ModalController,
    private appComp: AppComponent,
    private map_service: MapServiceService,
    private trans: CustomTranslateService,
    public modalController: ModalController
  ) {
    appComp.hide_tab = false;
    map_service.ngOnInit();
  }

  ionViewWillEnter() {}

  ngOnInit() {
    this.presentModalMapDefinitions();
  }

  ngAfterViewInit() {}

  async presentModalMapDefinitions() {
    const modal = await this.modalController.create({
      component: OptionsMapPage,
    });

    modal.onDidDismiss().then((data) => {
      const data_trips = data['data']; // data that came from the modal on dismiss
      this.trips = data_trips;

      // Using Skeleton Text
      setTimeout(() => {
        this.contentLoad = true;
        console.log('YESS');
      }, 3000);
    });

    return await modal.present();
  }

  public showRoteiro(road: RoadMap): void {
    this.selected = road;
    this.presentModal(road);
  }

  //  Open the page for the trip booking
  async presentModal(road: RoadMap) {
    const modal = await this.model_controller.create({
      component: BookTripModalPage,
      componentProps: {
        circuito: road,
      },
    });
    return await modal.present();
  }

  //  Open the page for the trip booking
  async trip_map_details(road: RoadMap) {
    const modal = await this.model_controller.create({
      component: TripDetailsPage,
      componentProps: {
        circuito: road,
      },
    });
    return await modal.present();
  }

  public comments(road: RoadMap): void {
    localStorage.setItem('roadMapID', JSON.stringify(road.id));
    this.router.navigate(['/comment-trip']);
  }
}
