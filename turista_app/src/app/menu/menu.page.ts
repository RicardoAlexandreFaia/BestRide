import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { LatLngBounds, MarkerOptions } from '@ionic-native/google-maps';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Roteiro } from './roteiro';
import {
  Geolocation,
  GeolocationOptions,
  Geoposition,
  PositionError,
} from '@ionic-native/geolocation/ngx';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

declare var google: any;
var polyLine;
var polyOptions;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;

  selected: Roteiro;
  map: any;
  language: string = this.translateService.currentLang;
  options: GeolocationOptions;
  currentPos: Geoposition;
  roteiros: Array<Roteiro> = [
    {
      titulo: 'Circuito 1',
      pontosInteresse: [
        {
          titulo: 'SÉ', // inicio da  viagem
          lat: 38.7098786,
          lng: -9.132584400000042,
        },
        {
          titulo: 'MIRADOURO PORTAS DO SOL',
          lat: 38.711148,
          lng: -9.133262000000059,
        },
        { titulo: 'ALFAMA', lat: 38.7125, lng: -9.132799999999975 },
        {
          titulo: 'VILA DO BAIRRO DO CASTELO',
          lat: 38.7131963,
          lng: -9.133408799999984,
        },
        {
          titulo: 'MIRADOURO DA GRAÇA',
          lat: 38.716272,
          lng: -9.131524000000013,
        },
        {
          titulo: 'GRAÇA',
          lat: 38.71794939999999,
          lng: -9.13039619999995,
        },
        {
          titulo: 'MIRADOURO NOSSA SENHORA DO MONTE',
          lat: 38.71906409127469,
          lng: -9.132594176721227,
        },
      ],
    },
    {
      titulo: 'Circuito 2',
      pontosInteresse: [
        {
          titulo: 'MIRADOURO DE S. PEDRO DE ALCÂNTARA',
          lat: 38.7150612,
          lng: -9.144405199999937,
        },
        {
          titulo: 'BAIRRO ALTO',
          lat: 38.7127532,
          lng: -9.146295099999975,
        },
        {
          titulo: 'CHIADO',
          lat: 38.710202,
          lng: -9.14223800000002,
        },
        {
          titulo: 'SÉ',
          lat: 38.7098786,
          lng: -9.132584400000042,
        },
        {
          titulo: 'ALFAMA',
          lat: 38.7125,
          lng: -9.132799999999975,
        },
        {
          titulo: 'VILA DO BAIRRO DO CASTELO',
          lat: 38.7131963,
          lng: -9.133408799999984,
        },
      ],
    },
  ];

  constructor(
    private geolocation: Geolocation,
    private translateService: TranslateService,
    private router: Router
  ) {
    this.translateService.use(this.language);
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  ionViewDidEnter() {
    this.getUserPosition();
  }

  showMap(opcao) {
    const location = new google.maps.LatLng(
      38.71847179326699,
      -9.13719094695057
    );

    const options = {
      center: location,
      zoom: 18,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, options);

    this.adicionaMarcadores(opcao);
  }

  getUserPosition() {
    this.options = {
      enableHighAccuracy: false,
    };
    this.geolocation.getCurrentPosition(this.options).then(
      (pos: Geoposition) => {
        this.currentPos = pos;

        let latLng = new google.maps.LatLng(
          this.currentPos.coords.latitude,
          this.currentPos.coords.longitude
        );

        let marker = new google.maps.Marker({
          map: this.map,
          position: latLng,
          latitude: this.currentPos.coords.latitude,
          icon: { url: './assets/icon/gps.png' },
          longitude: this.currentPos.coords.longitude,
        });
      },
      (err: PositionError) => {
        console.log('ERRO::: : ' + err.message);
      }
    );
  }

  public showRoteiro(roteiro: Roteiro): void {
    this.selected = roteiro;
    this.showMap(roteiro.pontosInteresse);
  }

  adicionaMarcadores(roteiro: Roteiro) {
    for (let pos of roteiro.pontosInteresse) {
      let posMarker = new google.maps.LatLng(pos.lat, pos.lng);

      let marker = new google.maps.Marker({
        map: this.map,
        position: posMarker,
        title: roteiro.titulo,
        latitude: pos.lat,
        longitude: pos.lng,
      });

      const roteiros_trace = new google.maps.Polyline({
        path: roteiro.pontosInteresse,
        geodesic: true,
        strokeColor: 'blue',
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
