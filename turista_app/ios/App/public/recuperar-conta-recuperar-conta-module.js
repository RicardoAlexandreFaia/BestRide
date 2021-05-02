(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recuperar-conta-recuperar-conta-module"],{

/***/ "+htA":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recuperar-conta/recuperar-conta.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button>\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\" translate [translateParams]=\"{ lang: language }\">recovery_account.tabName\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"conteudo\">\r\n\r\n    <img id=\"imagem\" src=\"assets/BestRide.png\" />\r\n\r\n    <form class=\"form\" [formGroup]=\"registrationForm\" (ngSubmit)=\"submit()\">\r\n      <ion-card>\r\n        <ion-item>\r\n\r\n          <ion-label>Email</ion-label>\r\n          <ion-input formControlName=\"email\" type=\"email\" required></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-button [disabled]=\"!registrationForm.valid\" color=\"primary\" expand=\"block\" type=\"submit\" translate\r\n        [translateParams]=\"{ lang: language }\">recovery_account.button_text\r\n      </ion-button>\r\n    </form>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>");

/***/ }),

/***/ "1HzV":
/*!***********************************************************!*\
  !*** ./src/app/recuperar-conta/recuperar-conta.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".conteudo {\n  display: flex;\n  flex-direction: column;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-item {\n  --bacground: white;\n}\n\n#imagem {\n  padding-top: 20%;\n  width: 50%;\n  align-self: center;\n}\n\nion-card {\n  font-size: 25px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlY3VwZXJhci1jb250YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSw0RUFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoicmVjdXBlcmFyLWNvbnRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZXVkbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAjaW1hZ2VtIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "LA7J":
/*!*********************************************************!*\
  !*** ./src/app/recuperar-conta/recuperar-conta.page.ts ***!
  \*********************************************************/
/*! exports provided: RecuperarContaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarContaPage", function() { return RecuperarContaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recuperar_conta_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recuperar-conta.page.html */ "+htA");
/* harmony import */ var _recuperar_conta_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recuperar-conta.page.scss */ "1HzV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






let RecuperarContaPage = class RecuperarContaPage {
    constructor(formBuilder, translateService) {
        this.formBuilder = formBuilder;
        this.translateService = translateService;
        this.language = this.translateService.currentLang;
        this.profileForm = this.formBuilder.group({
            email: '',
        });
        this.registrationForm = this.formBuilder.group({
            email: [''],
        });
    }
    ngOnInit() { }
    submit() {
        console.log(this.registrationForm.value);
    }
};
RecuperarContaPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
RecuperarContaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recuperar-conta',
        template: _raw_loader_recuperar_conta_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recuperar_conta_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecuperarContaPage);



/***/ }),

/***/ "kaDi":
/*!*******************************************************************!*\
  !*** ./src/app/recuperar-conta/recuperar-conta-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RecuperarContaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarContaPageRoutingModule", function() { return RecuperarContaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _recuperar_conta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recuperar-conta.page */ "LA7J");




const routes = [
    {
        path: '',
        component: _recuperar_conta_page__WEBPACK_IMPORTED_MODULE_3__["RecuperarContaPage"]
    }
];
let RecuperarContaPageRoutingModule = class RecuperarContaPageRoutingModule {
};
RecuperarContaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecuperarContaPageRoutingModule);



/***/ }),

/***/ "mEHU":
/*!***********************************************************!*\
  !*** ./src/app/recuperar-conta/recuperar-conta.module.ts ***!
  \***********************************************************/
/*! exports provided: createTranslateLoader, RecuperarContaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarContaPageModule", function() { return RecuperarContaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _recuperar_conta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recuperar-conta-routing.module */ "kaDi");
/* harmony import */ var _recuperar_conta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recuperar-conta.page */ "LA7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/lang/', '.json');
}
let RecuperarContaPageModule = class RecuperarContaPageModule {
};
RecuperarContaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recuperar_conta_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecuperarContaPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]],
                },
            }),
        ],
        declarations: [_recuperar_conta_page__WEBPACK_IMPORTED_MODULE_6__["RecuperarContaPage"]],
    })
], RecuperarContaPageModule);



/***/ })

}]);
//# sourceMappingURL=recuperar-conta-recuperar-conta-module.js.map