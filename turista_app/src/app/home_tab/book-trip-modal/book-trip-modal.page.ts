import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
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

  private interest: Array<any> = [];

  constructor(
    private modalCtr: ModalController,
    private translate: TranslateService,
    private map_service: MapServiceService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.circuito = this.circuito;
    this.map_service
      .get_points_interest(this.circuito['id'])
      .subscribe((data) => {
        for (let pos in data) {
          this.interest.push(
            new InterestPoints(
              data[pos]['interest_points'].description,
              data[pos]['interest_points'].location['coordinates'][0],
              data[pos]['interest_points'].location['coordinates'][1]
            )
          );
        }
      });

    setTimeout(() => {
      this.showMap(this.circuito, this.interest);
    }, 3000);
  }

  ionViewDidEnter() {}

  async close() {
    const closeModal: string = 'Modal Closed';
    await this.modalCtr.dismiss(closeModal);
  }

  private showMap(road: RoadMap, points: Array<InterestPoints>): void {
    const lat_initial = road.lat;
    const lng_initial = road.lng;

    const location = new google.maps.LatLng(lat_initial, lng_initial);

    const options = {
      center: location,
      zoom: this.ZOOM_LEVEL,
      disableDefaultUI: false,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, options);

    const flightPlanCoordinates = [];
    //    Add markers to the map
    for (let pos in points) {
      console.log(points[pos]);

      flightPlanCoordinates.push(points[pos].lat, points[pos].lng);
      let posMarker = new google.maps.LatLng(points[pos].lat, points[pos].lng);

      let marker = new google.maps.Marker({
        map: this.map,
        position: posMarker,
        animation: 'DROP',
        title: this.circuito.title,
        latitude: points[pos].lat,
        longitude: points[pos].lng,
      });

      let content = '<p> ' + points[pos].title + '</p>';
      let infoWindow = new google.maps.InfoWindow({
        content: content,
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });
    }

    this.map.addPolyline({
      points: flightPlanCoordinates,
      color: '#00008B',
      width: 3,
      geodesic: true,
    });
  }
}
