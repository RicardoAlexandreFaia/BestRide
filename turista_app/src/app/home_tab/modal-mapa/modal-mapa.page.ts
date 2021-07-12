import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import {
  Geolocation,
  GeolocationOptions,
  Geoposition,
  PositionError,
} from '@ionic-native/geolocation/ngx';
import { InterestPoints } from '../roadMap';
import { MapServiceService } from '../map-service.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

declare var google: any;

@Component({
  selector: 'app-modal-mapa',
  templateUrl: './modal-mapa.page.html',
  styleUrls: ['./modal-mapa.page.scss'],
})
export class ModalMapaPage implements OnInit {
  private ZOOM_LEVEL: number = 16.5; // Zoom do mapa
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  private map: any;
  @Input() circuito_rec: InterestPoints;
  private circuito: any;
  public language: string = this.translate.currentLang;

  private interest: any;

  public progress: boolean = false;

  constructor(
    private modalCtr: ModalController,
    private translate: TranslateService,
    private map_service: MapServiceService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.circuito = this.circuito;
    this.interest = this.map_service.get_points_interest(this.circuito['id']);
    setTimeout(() => {
      this.progress = true;
      this.showMap();
    }, 3000);
  }

  ionViewDidEnter() {}

  async close() {
    const closeModal: string = 'Modal Closed';
    await this.modalCtr.dismiss(closeModal);
  }

  private showMap(): void {
    let lat_initial = 0;
    let lng_initial = 0;
    for (let pos_initial of this.interest) {
      lat_initial = pos_initial.lat;
      lng_initial = pos_initial.lng;
      break;
    }

    const location = new google.maps.LatLng(lat_initial, lng_initial);

    const options = {
      center: location,
      zoom: this.ZOOM_LEVEL,
      disableDefaultUI: false,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, options);

    //    Add markers to the map
    for (let pos of this.interest) {
      let posMarker = new google.maps.LatLng(pos.lat, pos.lng);

      let marker = new google.maps.Marker({
        map: this.map,
        position: posMarker,
        animation: 'DROP',
        title: this.circuito.title,
        latitude: pos.lat,
        longitude: pos.lng,
      });

      let content = '<p> ' + pos.title + '</p>';
      let infoWindow = new google.maps.InfoWindow({
        content: content,
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });
    }
  }
}
