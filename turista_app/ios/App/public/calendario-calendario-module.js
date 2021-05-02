(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendario-calendario-module"],{

/***/ "332S":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendario/calendario.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Best Ride\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1>aycgakifcjb</h1>\n</ion-content>\n");

/***/ }),

/***/ "4A/6":
/*!***********************************************!*\
  !*** ./src/app/calendario/calendario.page.ts ***!
  \***********************************************/
/*! exports provided: CalendarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPage", function() { return CalendarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calendario_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calendario.page.html */ "332S");
/* harmony import */ var _calendario_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendario.page.scss */ "VuZs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CalendarioPage = class CalendarioPage {
    constructor() { }
    ngOnInit() {
    }
};
CalendarioPage.ctorParameters = () => [];
CalendarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calendario',
        template: _raw_loader_calendario_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calendario_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CalendarioPage);



/***/ }),

/***/ "75Jw":
/*!*********************************************************!*\
  !*** ./src/app/calendario/calendario-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CalendarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPageRoutingModule", function() { return CalendarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calendario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendario.page */ "4A/6");




const routes = [
    {
        path: '',
        component: _calendario_page__WEBPACK_IMPORTED_MODULE_3__["CalendarioPage"]
    }
];
let CalendarioPageRoutingModule = class CalendarioPageRoutingModule {
};
CalendarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalendarioPageRoutingModule);



/***/ }),

/***/ "8wfW":
/*!*************************************************!*\
  !*** ./src/app/calendario/calendario.module.ts ***!
  \*************************************************/
/*! exports provided: CalendarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarioPageModule", function() { return CalendarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _calendario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendario-routing.module */ "75Jw");
/* harmony import */ var _calendario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendario.page */ "4A/6");







let CalendarioPageModule = class CalendarioPageModule {
};
CalendarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calendario_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarioPageRoutingModule"]
        ],
        declarations: [_calendario_page__WEBPACK_IMPORTED_MODULE_6__["CalendarioPage"]]
    })
], CalendarioPageModule);



/***/ }),

/***/ "VuZs":
/*!*************************************************!*\
  !*** ./src/app/calendario/calendario.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhcmlvLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=calendario-calendario-module.js.map