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

import { ModalMapaPage } from './modal-mapa/modal-mapa.page';
import { ModalController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;

  public selected: Roteiro;
  public language: string = this.translateService.currentLang;
  private currentPos: Geoposition;
  public roteiros: Array<Roteiro> = [
    {
      titulo: 'TOUR DESCOBERTAS',
      duracao: ' 3 h',
      preco: 6,
      descricao:
        'Visite de tuk tuk, as margens do Tejo de onde Vasco da Gama e outros navegadores partiram em viagens épicas, celebradas aqui através' +
        'de majestosos monumentos, tais como: Torre de Belém, Mosteiro de Jerónimos ' +
        '(ambos patrimonio Mundial) e Padrão dos Descobrimentos. Assim como seus museus sublimes.',
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
      titulo: 'TOUR BAIRROS TÍPICOS',
      duracao: ' 1 h',
      preco: 2,
      descricao:
        'Visite de tuk tuk, o Chiado, Bairro Alto e Príncipe Real, é o encanto cosmopolita Lisboeta, boémio… ' +
        'Um dos locais mais prestigiados de Lisboa, estando desde sempre ligado a uma forte componente ' +
        'intelectual, liberal, modernista e também romântica.',
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
    private router: Router,
    private model_controller: ModalController
  ) {
    //this.translateService.use(this.language);
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  ionViewDidEnter() {}

  /* Para futuro Sprint
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
  }*/

  public showRoteiro(roteiro: Roteiro): void {
    this.selected = roteiro;
    this.presentModal(roteiro);
  }

  //funcao para abri o model para visualizar o mapa
  async presentModal(roteiro: Roteiro) {
    const modal = await this.model_controller.create({
      component: ModalMapaPage,
      cssClass: './modal-mapa/modal-mapa.scss',
      componentProps: {
        circuito: roteiro,
      },
    });
    return await modal.present();
  }
}
