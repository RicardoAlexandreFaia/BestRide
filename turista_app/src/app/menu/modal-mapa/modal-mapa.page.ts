import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  Geolocation,
  GeolocationOptions,
  Geoposition,
  PositionError,
} from '@ionic-native/geolocation/ngx';
import { Roteiro } from '../roteiro';

declare var google: any;

@Component({
  selector: 'app-modal-mapa',
  templateUrl: './modal-mapa.page.html',
  styleUrls: ['./modal-mapa.page.scss'],
})
export class ModalMapaPage implements OnInit {
  ZOOM_LEVEL: number = 16.5; // Zoom do mapa
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  @Input() circuito_rec: Roteiro;
  circuito: Roteiro;

  constructor(private modalCtr: ModalController) {}

  ngOnInit() {}

  ionViewDidEnter() {
    console.log(this.circuito.pontosInteresse);
    this.circuito = this.circuito;
    this.showMap();
  }

  async close() {
    const closeModal: string = 'Modal Closed';
    await this.modalCtr.dismiss(closeModal);
  }

  showMap() {
    //comecar pela origem do Tour
    const location = new google.maps.LatLng(
      this.circuito.pontosInteresse[0].lat,
      this.circuito.pontosInteresse[0].lng
    );

    const options = {
      center: location,
      zoom: this.ZOOM_LEVEL,
      disableDefaultUI: false,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, options);

    //  adicionar marcadores no mapa

    for (let pos of this.circuito.pontosInteresse) {
      let posMarker = new google.maps.LatLng(pos.lat, pos.lng);

      let marker = new google.maps.Marker({
        map: this.map,
        position: posMarker,
        title: this.circuito.titulo,
        latitude: pos.lat,
        longitude: pos.lng,
      });

      const roteiros_trace = new google.maps.Polyline({
        path: this.circuito.pontosInteresse,
        geodesic: true,
        strokeColor: 'red',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      roteiros_trace.setMap(this.map);

      let content = '<p> ' + pos.titulo + '</p>';
      let infoWindow = new google.maps.InfoWindow({
        content: content,
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });
    }
  }
}
