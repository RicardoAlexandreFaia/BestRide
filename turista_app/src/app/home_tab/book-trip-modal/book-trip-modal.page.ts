import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import {
  Geolocation,
  GeolocationOptions,
  Geoposition,
  PositionError,
} from '@ionic-native/geolocation/ngx';
import { InterestPoints, RoadMap } from '../roadMap';
import { MapServiceService } from '../map-service.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

declare var google: any;

@Component({
  selector: 'app-modal-mapa',
  templateUrl: './book-trip-modal.page.html',
  styleUrls: ['./book-trip-modal.page.scss'],
})
export class BookTripModalPage implements OnInit {
  private ZOOM_LEVEL: number = 16.5; // Zoom do mapa
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  private map: any;
  @Input() circuito_rec: InterestPoints;
  public circuito: any;
  public language: string = this.translate.currentLang;

  private interest: any;
  public vehicles: Observable<any>;

  public progress: boolean = false;

  constructor(
    private modalCtr: ModalController,
    private translate: TranslateService,
    private map_service: MapServiceService,
    private http: HttpClient,
    private router: Router,
    private storage: NativeStorage,
  ) {}

  ngOnInit() {
    this.circuito = this.circuito;
    this.vehicles = this.map_service.get_vehicles_road(this.circuito['id']);
    setTimeout(() => {
      this.progress = true;
      this.vehicles.forEach((element) => {});
    }, 2000);
  }

  ionViewDidEnter() {}

  async close() {
    localStorage.setItem('itineraries', '1'); //ver titulo do itenerario

    const closeModal: string = 'Modal Closed';
    await this.modalCtr.dismiss(closeModal);
  }
}
