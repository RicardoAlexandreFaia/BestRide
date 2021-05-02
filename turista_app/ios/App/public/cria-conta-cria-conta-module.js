(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cria-conta-cria-conta-module"],{

/***/ "/0OI":
/*!*************************************************!*\
  !*** ./src/app/cria-conta/cria-conta.module.ts ***!
  \*************************************************/
/*! exports provided: createTranslateLoader, CriaContaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriaContaPageModule", function() { return CriaContaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cria_conta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cria-conta-routing.module */ "2KuO");
/* harmony import */ var _cria_conta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cria-conta.page */ "QSW9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/lang/', '.json');
}
let CriaContaPageModule = class CriaContaPageModule {
};
CriaContaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cria_conta_routing_module__WEBPACK_IMPORTED_MODULE_5__["CriaContaPageRoutingModule"],
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
        declarations: [_cria_conta_page__WEBPACK_IMPORTED_MODULE_6__["CriaContaPage"]],
    })
], CriaContaPageModule);



/***/ }),

/***/ "2KuO":
/*!*********************************************************!*\
  !*** ./src/app/cria-conta/cria-conta-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CriaContaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriaContaPageRoutingModule", function() { return CriaContaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cria_conta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cria-conta.page */ "QSW9");




const routes = [
    {
        path: '',
        component: _cria_conta_page__WEBPACK_IMPORTED_MODULE_3__["CriaContaPage"]
    }
];
let CriaContaPageRoutingModule = class CriaContaPageRoutingModule {
};
CriaContaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CriaContaPageRoutingModule);



/***/ }),

/***/ "5SDB":
/*!*************************************************!*\
  !*** ./src/app/cria-conta/cria-conta.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".conteudo {\n  display: flex;\n  flex-direction: column;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-item {\n  --bacground: white;\n}\n\n.error-message {\n  color: red;\n}\n\n#imagem {\n  padding-top: 20%;\n  width: 50%;\n  align-self: center;\n}\n\nion-card {\n  font-size: 25px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyaWEtY29udGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsNEVBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImNyaWEtY29udGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRldWRvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuI2ltYWdlbSB7XHJcbiAgcGFkZGluZy10b3A6IDIwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "6FmD":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cria-conta/cria-conta.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"voltar\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center;\" translate [translateParams]=\"{ lang: language }\">create_account.tabName\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-list class=\"conteudo\">\r\n\r\n\r\n    <img id=\"imagem\" src=\"assets/BestRide.png\" />\r\n\r\n    <form class=\"form\" [formGroup]=\"registrationForm\" (ngSubmit)=\"submit()\">\r\n\r\n      <ion-card>\r\n        <ion-item>\r\n          <ion-label>Email</ion-label>\r\n          <ion-input formControlName=\"email\" type=\"email\" required></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-item>\r\n          <ion-label>Password</ion-label>\r\n          <ion-input formControlName=\"pass\" [type]=\" showPass ? 'text' : 'password'\" required></ion-input>\r\n          <ion-icon slot=\"end\" [name]=\"passwordIconToggle\" (click)=\"togglePass()\"></ion-icon>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-item>\r\n          <ion-label translate [translateParams]=\"{ lang: language }\">create_account.text</ion-label>\r\n          <ion-input formControlName=\"passRepeat\" [type]=\" showPass2 ? 'text' : 'password'\" required></ion-input>\r\n          <ion-icon slot=\"end\" [name]=\"passwordIconToggle2\" (click)=\"togglePass2()\"></ion-icon>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n\r\n      <ion-button [disabled]=\"!registrationForm.valid\" color=\"primary\" expand=\"block\" type=\"submit\" translate\r\n        [translateParams]=\"{ lang: language }\">create_account.button_text\r\n      </ion-button>\r\n\r\n    </form>\r\n  </ion-list>\r\n\r\n</ion-content>");

/***/ }),

/***/ "QSW9":
/*!***********************************************!*\
  !*** ./src/app/cria-conta/cria-conta.page.ts ***!
  \***********************************************/
/*! exports provided: CriaContaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriaContaPage", function() { return CriaContaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cria_conta_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cria-conta.page.html */ "6FmD");
/* harmony import */ var _cria_conta_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cria-conta.page.scss */ "5SDB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







let CriaContaPage = class CriaContaPage {
    constructor(formBuilder, alertCtrl, translateService) {
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.showPass = false;
        this.showPass2 = false;
        this.language = this.translateService.currentLang;
        this.passwordIconToggle = 'eye';
        this.passwordIconToggle2 = 'eye';
        this.profileForm = this.formBuilder.group({
            email: '',
            pass: '',
            passRepeat: '',
        });
        this.registrationForm = this.formBuilder.group({
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(70),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]),
            ],
            pass: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(12),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$'),
                ]),
            ],
            passRepeat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        }, { validator: this.matchingPasswords('pass', 'passRepeat') });
    }
    ngOnInit() { }
    togglePass() {
        this.showPass = !this.showPass;
        if (this.passwordIconToggle == 'eye') {
            this.passwordIconToggle = 'eye-off';
        }
        else {
            this.passwordIconToggle = 'eye';
        }
    }
    togglePass2() {
        this.showPass2 = !this.showPass2;
        if (this.passwordIconToggle2 == 'eye') {
            this.passwordIconToggle2 = 'eye-off';
        }
        else {
            this.passwordIconToggle2 = 'eye';
        }
    }
    // alerta sobre as passwords nao coincidirem
    showAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Erro',
                message: 'As password não coincidem. Tente Novamente',
                buttons: ['Tentar Novamente'],
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    matchingPasswords(passwordKey, confirmPasswordKey) {
        // TODO maybe use this https://github.com/yuyang041060120/ng2-validation#notequalto-1
        return (group) => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true,
                };
            }
        };
    }
    submit() {
        console.log(this.registrationForm.get('pass').value);
        console.log(this.registrationForm.get('passRepeat').value);
        var pass = this.registrationForm.get('pass').value;
        var passRepetida = this.registrationForm.get('passRepeat').value;
        console.log(this.registrationForm.value);
    }
};
CriaContaPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
CriaContaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cria-conta',
        template: _raw_loader_cria_conta_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cria_conta_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CriaContaPage);



/***/ })

}]);
//# sourceMappingURL=cria-conta-cria-conta-module.js.map