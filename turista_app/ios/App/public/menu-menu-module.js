(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "19mU":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: createTranslateLoader, MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "nedP");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "ylOD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/lang/', '.json');
}
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]],
                },
            }),
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]],
    })
], MenuPageModule);



/***/ }),

/***/ "QjfK":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- home.page.html -->\r\n<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Best Ride\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"menu\">\r\n    <div scrollY=\"true\" class=\"botoes\">\r\n      <ion-card (click)=\"cir1()\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Circuito 1</ion-card-subtitle>\r\n          <ion-card-title>Terreiro do Passo - Jeronimos</ion-card-title>\r\n        </ion-card-header>\r\n      \r\n        <ion-card-content>\r\n          Neste roteiro pode ver todas as maravilhas de Lisboa entre o Terreiro do Passo\r\n          e os Mosteiro dos Jeronimos.\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-card  (click)=\"cir2()\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Circuito 2</ion-card-subtitle>\r\n          <ion-card-title>Terreiro do Passo - Sé</ion-card-title>\r\n        </ion-card-header>\r\n      \r\n        <ion-card-content>\r\n          Neste roteiro pode ver todas as maravilhas de Lisboa entre o Terreiro do Passo\r\n          e a Sé de Lisboa.\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div #map id=\"map\"></div>\r\n\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "gZmG":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  height: 100%;\n}\n\n.botoes {\n  padding-top: 5%;\n  overflow-x: auto;\n  flex-direction: row-reverse;\n  justify-content: space-around;\n}\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJtZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJvdG9lcyB7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "nedP":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "ylOD");




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
    },
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "ylOD":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.page.html */ "QjfK");
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.page.scss */ "gZmG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");







var polyLine;
var polyOptions;
let MenuPage = class MenuPage {
    constructor(geolocation, translateService, router) {
        this.geolocation = geolocation;
        this.translateService = translateService;
        this.router = router;
        this.language = this.translateService.currentLang;
        this.circuito1 = [
            {
                titulo: 'SÉ',
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
        ];
        this.circuito2 = [
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
        ];
        this.translateService.use(this.language);
    }
    ngOnInit() { }
    ngAfterViewInit() { }
    ionViewDidEnter() {
        this.getUserPosition();
    }
    showMap(opcao) {
        const location = new google.maps.LatLng(38.71847179326699, -9.13719094695057);
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
        this.geolocation.getCurrentPosition(this.options).then((pos) => {
            this.currentPos = pos;
            let latLng = new google.maps.LatLng(this.currentPos.coords.latitude, this.currentPos.coords.longitude);
            let marker = new google.maps.Marker({
                map: this.map,
                position: latLng,
                latitude: this.currentPos.coords.latitude,
                icon: { url: './assets/icon/gps.png' },
                longitude: this.currentPos.coords.longitude,
            });
        }, (err) => {
            console.log('ERRO::: : ' + err.message);
        });
    }
    cir1() {
        this.showMap(this.circuito1);
    }
    cir2() {
        this.showMap(this.circuito2);
    }
    adicionaMarcadores(roteirosMarkers) {
        for (let pos of roteirosMarkers) {
            let posMarker = new google.maps.LatLng(pos.lat, pos.lng);
            let marker = new google.maps.Marker({
                map: this.map,
                position: posMarker,
                title: pos.title,
                latitude: pos.lat,
                longitude: pos.lng,
                icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|ddd',
            });
            const roteiros_trace = new google.maps.Polyline({
                path: roteirosMarkers,
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
};
MenuPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
MenuPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map', { static: false },] }]
};
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module.js.map