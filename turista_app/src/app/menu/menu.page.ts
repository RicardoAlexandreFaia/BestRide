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

  selected: Roteiro;
  map: any;
  language: string = this.translateService.currentLang;
  options: GeolocationOptions;
  currentPos: Geoposition;
  roteiros: Array<Roteiro> = [
    {
      titulo: 'Tour Historico',
      duracao: 1,
      preco: 6,
      detalhes:
        'Tuk Tuk Lisboa Tours – Visite de tuc tuc as colinas dos Bairros' +
        'tipicos de Alfama, Graça e Mouraria. Sinta o verdadeiro coração das raizes de Lisboa. ' +
        'Cujas tradições antigas perduram, o Castelo de São Jorge, a Catedral, os Santos populares e a sina do Fado…',
      pontosInteresse: [
        {
          titulo: 'Igreja da Sé',
          lat: 38.71007950619046,
          lng: -9.132638046455183,
        },
        {
          titulo: 'Castelo de S.Jorge',
          lat: 38.71408,
          lng: -9.13347,
        },
        {
          titulo: 'Miradouro Portas do Sol',
          lat: 38.71278,
          lng: -9.13022,
        },
        {
          titulo: 'Miradouro Nossa Senhora do Monte',
          lat: 38.71937,
          lng: -9.13282,
        },
        {
          titulo: 'Igreja de S. Vicente',
          lat: 38.715,
          lng: -9.12777,
        },
        {
          titulo: 'Feira da Ladra',
          lat: 38.7151,
          lng: -9.12393,
        },
        {
          titulo: 'Panteão Nacional',
          lat: 38.71496,
          lng: -9.12497,
        },
        {
          titulo: 'Alfama',
          lat: 38.71192,
          lng: -9.13169,
        },
        {
          titulo: 'Museu do Fado (Alfama)',
          lat: 38.71136,
          lng: -9.12761,
        },
        {
          titulo: 'Casa dos Bicos',
          lat: 38.70926,
          lng: -9.13265,
        },
        {
          titulo: 'Praça do Comércio',
          lat: 38.70763,
          lng: -9.13646,
        },
      ],
    },
    {
      titulo: 'TOUR CIDADE ANTIGA',
      duracao: 1.3,
      preco: 6,
      detalhes:
        'Tuc Tuc Lisboa Tour – Visite de Tuk Tuk, O Chiado,' +
        'Bairro Alto e Príncipe Real. O encanto cosmopolita Lisboeta, boémio sendo ' +
        'um dos locais mais prestigiados de Lisboa. Está desde sempre ligado a uma forte ' +
        'componente intelectual, liberal, modernista e também romântica.',
      pontosInteresse: [
        {
          titulo: 'Igreja da Sé',
          lat: 38.71007950619046,
          lng: -9.132638046455183,
        },
        {
          titulo: 'Castelo de S.Jorge',
          lat: 38.71408,
          lng: -9.13347,
        },
        {
          titulo: 'Miradouro Portas do Sol',
          lat: 38.71278,
          lng: -9.13022,
        },
        {
          titulo: 'Miradouro Nossa Senhora do Monte',
          lat: 38.71937,
          lng: -9.13282,
        },
        {
          titulo: 'Igreja de S. Vicente',
          lat: 38.715,
          lng: -9.12777,
        },
        {
          titulo: 'Feira da Ladra',
          lat: 38.7151,
          lng: -9.12393,
        },
        {
          titulo: 'Panteão Nacional',
          lat: 38.71496,
          lng: -9.12497,
        },
        {
          titulo: 'Alfama',
          lat: 38.71192,
          lng: -9.13169,
        },
        {
          titulo: 'Museu do Fado (Alfama)',
          lat: 38.71136,
          lng: -9.12761,
        },
        {
          titulo: 'Casa dos Bicos',
          lat: 38.70926,
          lng: -9.13265,
        },
        {
          titulo: 'Chiado',
          lat: 38.71131,
          lng: -9.1422,
        },
        {
          titulo: 'Largo do Carmo',
          lat: 38.71214,
          lng: -9.141102,
        },
        {
          titulo: 'Rossio',
          lat: 38.71411,
          lng: -9.13905,
        },
        {
          titulo: 'Largo do Carmo',
          lat: 38.71214,
          lng: -9.141102,
        },
        {
          titulo: 'Rua Aurea',
          lat: 38.71102,
          lng: -9.13862,
        },
        {
          titulo: 'Praça do Comércio',
          lat: 38.70763,
          lng: -9.13646,
        },
      ],
    },
    {
      titulo: 'Tour Bairros',
      duracao: 2,
      preco: 6,
      detalhes:
        'TukTuk Lisboa Tours – Visite de tuk tuk, o Chiado, Bairro Alto e Príncipe Real, é o encanto cosmopolita Lisboeta, boémio…' +
        'Um dos locais mais prestigiados de Lisboa, estando desde sempre ligado a uma ' +
        'forte componente intelectual, liberal, modernista e também romântica.',
      pontosInteresse: [
        {
          titulo: 'Igreja da Sé',
          lat: 38.71007950619046,
          lng: -9.132638046455183,
        },
        {
          titulo: 'Castelo de S.Jorge',
          lat: 38.71408,
          lng: -9.13347,
        },
        {
          titulo: 'Miradouro Portas do Sol',
          lat: 38.71278,
          lng: -9.13022,
        },
        {
          titulo: 'Miradouro Nossa Senhora do Monte',
          lat: 38.71937,
          lng: -9.13282,
        },
        {
          titulo: 'Igreja de S. Vicente',
          lat: 38.715,
          lng: -9.12777,
        },
        {
          titulo: 'Feira da Ladra',
          lat: 38.7151,
          lng: -9.12393,
        },
        {
          titulo: 'Panteão Nacional',
          lat: 38.71496,
          lng: -9.12497,
        },
        {
          titulo: 'Alfama',
          lat: 38.71192,
          lng: -9.13169,
        },
        {
          titulo: 'Museu do Fado (Alfama)',
          lat: 38.71136,
          lng: -9.12761,
        },
        {
          titulo: 'Casa dos Bicos',
          lat: 38.70926,
          lng: -9.13265,
        },
        {
          titulo: 'Chiado',
          lat: 38.71131,
          lng: -9.1422,
        },
        {
          titulo: 'Largo Camões',
          lat: 38.71176,
          lng: -9.14178,
        },
        {
          titulo: 'Bairro Alto (Rua da Rosa)',
          lat: 38.71363,
          lng: -9.14556,
        },
        {
          titulo: 'Miradouro S. Pedro Alcantara',
          lat: 38.71543,
          lng: -9.14422,
        },
        {
          titulo: 'Largo Carmo',
          lat: 38.71208,
          lng: -9.14103,
        },
        {
          titulo: 'Rossio',
          lat: 38.71416,
          lng: -9.13902,
        },
        {
          titulo: 'Rua Aurea',
          lat: 38.71102,
          lng: -9.13856,
        },
        {
          titulo: 'Praça do Comércio',
          lat: 38.70765,
          lng: -9.13642,
        },
      ],
    },
  ];

  badge_points: number;
  constructor(
    private geolocation: Geolocation,
    private translateService: TranslateService,
    private router: Router,
    private model_controller: ModalController
  ) {
    this.translateService.use(this.language);
    this.badge_points = 0;
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  ionViewDidEnter() {
    this.getUserPosition();
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
    console.log(roteiro);
    for (let pos of roteiro.pontosInteresse) {
      console.log(pos.lat);
    }
    this.badge_points = this.badge_points + 1;
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
