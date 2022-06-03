(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/heroes/heroes.component */ "./src/app/pages/heroes/heroes.component.ts");
/* harmony import */ var _pages_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/heroe/heroe.component */ "./src/app/pages/heroe/heroe.component.ts");





var routes = [
    { path: 'heroes', component: _pages_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__["HeroesComponent"] },
    { path: 'heroe/:id', component: _pages_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_4__["HeroeComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"mt-5\">\n\n  <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'heroesApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/heroe/heroe.component */ "./src/app/pages/heroe/heroe.component.ts");
/* harmony import */ var _pages_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/heroes/heroes.component */ "./src/app/pages/heroes/heroes.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_heroe_heroe_component__WEBPACK_IMPORTED_MODULE_7__["HeroeComponent"],
                _pages_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_8__["HeroesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/heroe.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/heroe.model.ts ***!
  \***************************************/
/*! exports provided: HeroeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroeModel", function() { return HeroeModel; });
var HeroeModel = /** @class */ (function () {
    function HeroeModel() {
        this.vivo = true;
    }
    return HeroeModel;
}());



/***/ }),

/***/ "./src/app/pages/heroe/heroe.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/heroe/heroe.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlcm9lL2hlcm9lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/heroe/heroe.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/heroe/heroe.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Héroe <small>Nombre del Héroe</small> </h1>\n<hr>\n\n\n<div class=\"row text-right\">\n  <div class=\"col\">\n    <button class=\"btn btn-danger\"\n            routerLink=\"/heroes\">\n      <i class=\"fa fa-arrow-left\"></i>\n      Regresar\n    </button>\n  </div>\n</div>\n\n\n\n<div class=\"row animated fadeIn faster\">\n  <div class=\"col\">\n\n    <form (ngSubmit)=\"guardar( f )\"\n          #f=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label>Firebase ID</label>\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"Firebase ID\"\n               [(ngModel)]=\"heroe.id\"\n               name=\"id\"\n               disabled=\"disabled\">\n        <small class=\"form-text text-muted\">Este campo es autogenerado</small>\n      </div>\n\n\n      <div class=\"form-group\">\n          <label>Nombre</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 placeholder=\"Nombre del héroe\"\n                 [(ngModel)]=\"heroe.nombre\"\n                 name=\"nombre\"\n                 required>\n      </div>\n\n      <div class=\"form-group\">\n          <label>Poder</label>\n          <input type=\"text\"\n                 class=\"form-control\"\n                 [(ngModel)]=\"heroe.poder\"\n                 name=\"poder\"\n                 placeholder=\"Poder del héroe\">\n      </div>\n\n      <div class=\"form-group\">\n        <label>Estado</label>\n        <br>\n\n        <button *ngIf=\"heroe.vivo\" \n                (click)=\"heroe.vivo = false\"\n                class=\"btn btn-outline-success w-50\" type=\"button\">\n          <i class=\"fa fa-smile-wink\"></i>\n          Vivo\n        </button>\n\n        <button *ngIf=\"!heroe.vivo\" \n                (click)=\"heroe.vivo = true\"\n                class=\"btn btn-outline-danger w-50\" type=\"button\">\n            <i class=\"fa fa-dizzy\"></i>\n            Muerto\n        </button>\n\n      </div>\n\n\n\n      <hr>\n      <div class=\"form-group text-center\">\n        <button type=\"submit\"\n                class=\"btn btn-primary w-25\">\n          <i class=\"fa fa-save\"></i>\n          Guardar\n        </button>\n      </div>\n\n\n    </form>\n\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/heroe/heroe.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/heroe/heroe.component.ts ***!
  \************************************************/
/*! exports provided: HeroeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroeComponent", function() { return HeroeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_heroe_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/heroe.model */ "./src/app/models/heroe.model.ts");
/* harmony import */ var _services_heroes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/heroes.service */ "./src/app/services/heroes.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var HeroeComponent = /** @class */ (function () {
    function HeroeComponent(heroesService, route) {
        this.heroesService = heroesService;
        this.route = route;
        this.heroe = new _models_heroe_model__WEBPACK_IMPORTED_MODULE_3__["HeroeModel"]();
    }
    HeroeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id !== 'nuevo') {
            this.heroesService.getHeroe(id)
                .subscribe(function (resp) {
                _this.heroe = resp;
                _this.heroe.id = id;
            });
        }
    };
    HeroeComponent.prototype.guardar = function (form) {
        var _this = this;
        if (form.invalid) {
            console.log('Formulario no válido');
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Espere',
            text: 'Guardando información',
            type: 'info',
            allowOutsideClick: false
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.showLoading();
        var peticion;
        if (this.heroe.id) {
            peticion = this.heroesService.actualizarHeroe(this.heroe);
        }
        else {
            peticion = this.heroesService.crearHeroe(this.heroe);
        }
        peticion.subscribe(function (resp) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: _this.heroe.nombre,
                text: 'Se actualizó correctamente',
                type: 'success'
            });
        });
    };
    HeroeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroe',
            template: __webpack_require__(/*! ./heroe.component.html */ "./src/app/pages/heroe/heroe.component.html"),
            styles: [__webpack_require__(/*! ./heroe.component.css */ "./src/app/pages/heroe/heroe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_heroes_service__WEBPACK_IMPORTED_MODULE_4__["HeroesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeroeComponent);
    return HeroeComponent;
}());



/***/ }),

/***/ "./src/app/pages/heroes/heroes.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/heroes/heroes.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/heroes/heroes.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/heroes/heroes.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Listado de Héroes</h1>\n<hr>\n\n\n<div class=\"row\">\n  <div class=\"col text-right\">\n    <button routerLink=\"/heroe/nuevo\"\n            class=\"btn btn-primary\">\n      <i class=\"fa fa-plus\"></i>\n      Agregar\n    </button>\n  </div>\n</div>\n\n\n<table *ngIf=\"!cargando && heroes.length > 0\"\n       class=\"table mt-3 animated fadeIn faster animated fadeIn faster\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Nombre</th>\n      <th scope=\"col\">Poder</th>\n      <th scope=\"col\">Vivo</th>\n      <th scope=\"col\">Tools</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let heroe of heroes; let i = index\">\n      <th scope=\"row\">{{ i + 1 }}</th>\n      <td>{{ heroe.nombre }}</td>\n      <td>{{ heroe.poder }}</td>\n      <td>\n        \n        <label *ngIf=\"heroe.vivo\" class=\"badge badge-success\">Vivo</label>\n        <label *ngIf=\"!heroe.vivo\" class=\"badge badge-danger\">Muerto</label>\n\n      </td>\n      <td>\n\n        <button class=\"btn btn-info mr-1\"\n                [routerLink]=\"['/heroe', heroe.id ]\">\n          <i class=\"fa fa-pen\"></i>\n        </button>\n\n        <button class=\"btn btn-danger\"\n                (click)=\"borrarHeroe( heroe, i ) \">\n          <i class=\"fa fa-trash\"></i>\n        </button>\n\n\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<div *ngIf=\"!cargando && heroes.length === 0\"\n     class=\"alert alert-warning text-center mt-3 animated fadeIn faster\">\n    <h4 class=\"alert-heading\">No hay registros</h4>\n    <p>\n      <i class=\"fa fa-exclamation fa-2x\"></i>\n    </p>\n</div>\n\n<div *ngIf=\"cargando\" \n     class=\"alert alert-info text-center mt-3 animated fadeIn faster\">\n  <h4 class=\"alert-heading\">Cargando</h4>\n  <p>\n    <i class=\"fa fa-sync-alt fa-spin fa-2x\"></i>\n  </p>\n  <p class=\"mb-0\">\n    Espere por favor\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/pages/heroes/heroes.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/heroes/heroes.component.ts ***!
  \**************************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_heroes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/heroes.service */ "./src/app/services/heroes.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(heroesService) {
        this.heroesService = heroesService;
        this.heroes = [];
        this.cargando = false;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargando = true;
        this.heroesService.getHeroes()
            .subscribe(function (resp) {
            _this.heroes = resp;
            _this.cargando = false;
        });
    };
    HeroesComponent.prototype.borrarHeroe = function (heroe, i) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: '¿Está seguro?',
            text: "Est\u00E1 seguro que desea borrar a " + heroe.nombre,
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true
        }).then(function (resp) {
            if (resp.value) {
                _this.heroes.splice(i, 1);
                _this.heroesService.borrarHeroe(heroe.id).subscribe();
            }
        });
    };
    HeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/pages/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./src/app/pages/heroes/heroes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_heroes_service__WEBPACK_IMPORTED_MODULE_2__["HeroesService"]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/services/heroes.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/heroes.service.ts ***!
  \********************************************/
/*! exports provided: HeroesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesService", function() { return HeroesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var HeroesService = /** @class */ (function () {
    function HeroesService(http) {
        this.http = http;
        this.url = 'https://heroesapp-firebase.firebaseio.com/';
    }
    HeroesService.prototype.crearHeroe = function (heroe) {
        return this.http.post(this.url + "/heroes.json", heroe)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) {
            heroe.id = resp.name;
            return heroe;
        }));
    };
    HeroesService.prototype.actualizarHeroe = function (heroe) {
        var heroeTemp = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, heroe);
        delete heroeTemp.id;
        return this.http.put(this.url + "/heroes/" + heroe.id + ".json", heroeTemp);
    };
    HeroesService.prototype.borrarHeroe = function (id) {
        return this.http.delete(this.url + "/heroes/" + id + ".json");
    };
    HeroesService.prototype.getHeroe = function (id) {
        return this.http.get(this.url + "/heroes/" + id + ".json");
    };
    HeroesService.prototype.getHeroes = function () {
        return this.http.get(this.url + "/heroes.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.crearArreglo), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(0));
    };
    HeroesService.prototype.crearArreglo = function (heroesObj) {
        var heroes = [];
        Object.keys(heroesObj).forEach(function (key) {
            var heroe = heroesObj[key];
            heroe.id = key;
            heroes.push(heroe);
        });
        return heroes;
    };
    HeroesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HeroesService);
    return HeroesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Develop\portfolio\projects\develop\angular\angular-crud-firebase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map