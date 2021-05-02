(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["definicoes-definicoes-module"],{

/***/ "0/41":
/*!*************************************************!*\
  !*** ./src/app/definicoes/definicoes.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZpbmljb2VzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "0s0P":
/*!***********************************************!*\
  !*** ./src/app/definicoes/definicoes.page.ts ***!
  \***********************************************/
/*! exports provided: DefinicoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinicoesPage", function() { return DefinicoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_definicoes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./definicoes.page.html */ "n0+z");
/* harmony import */ var _definicoes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definicoes.page.scss */ "0/41");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let DefinicoesPage = class DefinicoesPage {
    constructor(translateService, router) {
        this.translateService = translateService;
        this.router = router;
        this.language = this.translateService.currentLang;
    }
    ngOnInit() { }
    mudarLinguagem() {
        this.translateService.use(this.language);
    }
};
DefinicoesPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
DefinicoesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-definicoes',
        template: _raw_loader_definicoes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_definicoes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DefinicoesPage);



/***/ }),

/***/ "IhEr":
/*!*********************************************************!*\
  !*** ./src/app/definicoes/definicoes-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DefinicoesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinicoesPageRoutingModule", function() { return DefinicoesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _definicoes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./definicoes.page */ "0s0P");




const routes = [
    {
        path: '',
        component: _definicoes_page__WEBPACK_IMPORTED_MODULE_3__["DefinicoesPage"],
    },
];
let DefinicoesPageRoutingModule = class DefinicoesPageRoutingModule {
};
DefinicoesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DefinicoesPageRoutingModule);



/***/ }),

/***/ "Mqnm":
/*!*************************************************!*\
  !*** ./src/app/definicoes/definicoes.module.ts ***!
  \*************************************************/
/*! exports provided: createTranslateLoader, DefinicoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinicoesPageModule", function() { return DefinicoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _definicoes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./definicoes-routing.module */ "IhEr");
/* harmony import */ var _definicoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./definicoes.page */ "0s0P");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/lang/', '.json');
}
let DefinicoesPageModule = class DefinicoesPageModule {
};
DefinicoesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _definicoes_routing_module__WEBPACK_IMPORTED_MODULE_5__["DefinicoesPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]],
                },
            }),
        ],
        declarations: [_definicoes_page__WEBPACK_IMPORTED_MODULE_6__["DefinicoesPage"]],
    })
], DefinicoesPageModule);



/***/ }),

/***/ "n0+z":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/definicoes/definicoes.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Definições\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n  <ion-card>\r\n\r\n\r\n    <ion-card-content>\r\n\r\n      <ion-item>\r\n        <ion-label translate [translateParams]=\"{ lang: language }\">definicoes.option_text</ion-label>\r\n        <ion-select [(ngModel)]='language' (ionChange)='mudarLinguagem()'\r\n          [placeholder]='\"tab1.languageChangePlaceholder\" | translate'>\r\n          <ion-select-option value='pt'>Portugues</ion-select-option>\r\n          <ion-select-option value='en'>Ingles</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=definicoes-definicoes-module.js.map