webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\t<app-navigation></app-navigation>\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_parallax__ = __webpack_require__("../../../../ngx-parallax/dist/bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_parallax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_parallax__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_text_format_pipe__ = __webpack_require__("../../../../../src/app/pipes/text-format.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_background_url_pipe__ = __webpack_require__("../../../../../src/app/pipes/background-url.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_join_style_pipe__ = __webpack_require__("../../../../../src/app/pipes/join-style.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_layout_service__ = __webpack_require__("../../../../../src/app/services/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_works_page_works_page_component__ = __webpack_require__("../../../../../src/app/pages/works-page/works-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_work_page_work_page_component__ = __webpack_require__("../../../../../src/app/pages/work-page/work-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_not_found_page_not_found_page_component__ = __webpack_require__("../../../../../src/app/pages/not-found-page/not-found-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_avatar_avatar_component__ = __webpack_require__("../../../../../src/app/components/avatar/avatar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_work_card_work_card_component__ = __webpack_require__("../../../../../src/app/components/work-card/work-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [{
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_13__pages_home_page_home_page_component__["a" /* HomePageComponent */]
    }, {
        path: 'works',
        component: __WEBPACK_IMPORTED_MODULE_14__pages_works_page_works_page_component__["a" /* WorksPageComponent */]
    }, {
        path: 'works/:id',
        component: __WEBPACK_IMPORTED_MODULE_15__pages_work_page_work_page_component__["a" /* WorkPageComponent */]
    }, {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_17__pages_not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */]
    }];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_text_format_pipe__["a" /* TextFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_background_url_pipe__["a" /* BackgroundUrlPipe */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_join_style_pipe__["a" /* JoinStylePipe */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_works_page_works_page_component__["a" /* WorksPageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_work_page_work_page_component__["a" /* WorkPageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_avatar_avatar_component__["a" /* AvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_work_card_work_card_component__["a" /* WorkCardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_carousel__["a" /* NgxCarouselModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes, {}),
                __WEBPACK_IMPORTED_MODULE_5_ngx_parallax__["ParallaxModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButtonModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_layout_service__["a" /* LayoutService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/avatar/avatar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"avatar\" [ngStyle]=\"page.style\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/avatar/avatar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".avatar {\n  display: inline-block;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  border-radius: 50%;\n  border: solid 4px Snow; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/avatar/avatar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvatarComponent = (function () {
    function AvatarComponent() {
        this.loadStyle = function () {
            this.page.style = {
                "background-image": "url('" + this.url + "')",
                "height": this.size + "rem",
                "width": this.size + "rem"
            };
        };
        this.page = {
            style: {}
        };
    }
    AvatarComponent.prototype.ngOnInit = function () { };
    AvatarComponent.prototype.ngOnChanges = function (changes) {
        var keys = Object.keys(changes);
        for (var o in keys) {
            var k = keys[o];
            if (k == "size" && changes[k].currentValue) {
                this.loadStyle();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AvatarComponent.prototype, "url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], AvatarComponent.prototype, "size", void 0);
    AvatarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-avatar',
            template: __webpack_require__("../../../../../src/app/components/avatar/avatar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/avatar/avatar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AvatarComponent);
    return AvatarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\" [ngClass]=\"page.css\" (window:resize)=\"drawLayout()\">\n\t<app-avatar class=\"avatar\" [url]=\"owner.avatar\" [size]=\"page.avatarSize\"></app-avatar>\n\t<div class=\"title\">\n\t\t{{ owner.name|textFormat:3 }}\n\t</div>\n\t<div class=\"spacer\"></div>\n\t<div class=\"links\">\n\t\t<button mat-button class=\"link\" *ngFor=\"let item of navi\" [routerLink]=\"item.link\">\n\t\t\t{{ item.name|textFormat:1 }}\n\t\t</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navigation {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 1em 2em;\n  background-color: rgba(200, 200, 200, 0.1);\n  background-image: url(\"/assets/plant_simple.png\");\n  background-repeat: no-repeat;\n  background-size: 10em;\n  background-position: left; }\n  .navigation .spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto; }\n  .navigation .avatar {\n    margin: 0 2em; }\n  .navigation .title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 1.2em;\n    line-height: 4em;\n    font-style: italic; }\n  .navigation .links {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 1.2em;\n    line-height: 4em; }\n    .navigation .links .link {\n      color: DimGrey; }\n  .navigation.sm {\n    font-size: 0.8em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_language__ = __webpack_require__("../../../../../src/app/resources/language.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_layout_service__ = __webpack_require__("../../../../../src/app/services/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(layoutService) {
        this.layoutService = layoutService;
        this.drawLayout = function () {
            var _this = this;
            this.layoutService.dimension(function (width, height) {
                // console.log(width, height);
                if (width < 479) {
                    _this.page.css = "sm";
                    _this.page.avatarSize = 3;
                }
                else {
                    _this.page.css = "";
                    _this.page.avatarSize = 4;
                }
            });
        };
        this.language = __WEBPACK_IMPORTED_MODULE_1__resources_language__["a" /* Language */].en;
        this.navi = [{
                name: this.language.home,
                link: "/home"
            }, {
                name: this.language.works,
                link: "/works"
            }];
        this.owner = {
            name: this.language.cathy,
            avatar: "/assets/avatar.jpg"
        };
        this.page = {
            css: "",
            avatarSize: 4
        };
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.drawLayout();
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_layout_service__["a" /* LayoutService */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/work-card/work-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"work-card\" [ngStyle]=\"style\">\n\t<mat-card class=\"card\">\n\t\t<mat-card-content>\n\t\t\t{{ link.description }}\n\t\t</mat-card-content>\n\t\t<mat-card-actions>\n\t\t\t<button mat-button [routerLink]=\"['/works/', link.url]\">\n\t\t\t\t{{ link.name|textFormat:3 }}\n\t\t\t</button>\n\t\t</mat-card-actions>\n\t</mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/work-card/work-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".work-card {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center; }\n  .work-card .card {\n    background-color: rgba(0, 0, 0, 0.4);\n    color: Snow; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/work-card/work-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkCardComponent = (function () {
    function WorkCardComponent() {
    }
    WorkCardComponent.prototype.ngOnInit = function () {
        this.style = {
            "background-image": "url(" + this.link.background + ")"
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WorkCardComponent.prototype, "link", void 0);
    WorkCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-work-card',
            template: __webpack_require__("../../../../../src/app/components/work-card/work-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/work-card/work-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkCardComponent);
    return WorkCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n\t<ngx-carousel class=\"carousel\" [inputs]=\"carousel\" (carouselLoad)=\"carouselChange($event)\">\n\t\t<ngx-item *ngFor=\"let item of banners\" NgxCarouselItem>\n\t\t\t<div class=\"banner\" [ngStyle]=\"item.link|backgroundUrl\">\n\t\t\t\t<div class=\"overlay\">\n\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t{{ item.title|textFormat:2 }}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t{{ item.description }}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ngx-item>\n\t\t<div NgxCarouselPrev class=\"left-btn\">&lt;</div>\n\t\t<div NgxCarouselNext class=\"right-btn\">&gt;</div>\n\t</ngx-carousel>\n\t<div class=\"about\" parallax [config]=\"parallax.config\">\n\t\t<div class=\"title\">\n\t\t\t{{ language.about_me|textFormat:2 }}\n\t\t</div>\n\t\t<div class=\"description\">\n\t\t\t{{ language.about_me_desc_1 }}\n\t\t</div>\n\t\t<div class=\"description\">\n\t\t\t{{ language.about_me_desc_2 }}\n\t\t</div>\n\t\t<div class=\"description\">\n\t\t\t{{ language.about_me_desc_3 }}\n\t\t</div>\n\t</div>\n\t<div class=\"contact\">\n\t\t<div class=\"info\">\n\t\t\t{{ language.email|textFormat:1 }}: {{ language.email_value }}\n\t\t</div>\n\t\t<div class=\"info\">\n\t\t\t{{ language.phone|textFormat:1 }}: {{ language.phone_value }}\n\t\t</div>\n\t</div>\n\t<div class=\"developer\">\n\t\t{{ language.developer|textFormat:1 }}: {{ language.developer_value }}\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home .carousel {\n  margin-bottom: 1em; }\n  .home .carousel .banner {\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center; }\n    .home .carousel .banner .overlay {\n      background-color: rgba(3, 3, 3, 0.4);\n      padding: 5em 0; }\n      .home .carousel .banner .overlay .title {\n        color: Snow;\n        font-size: 2em;\n        text-align: center;\n        margin-bottom: 1em; }\n      .home .carousel .banner .overlay .description {\n        color: Snow;\n        font-size: 1em;\n        text-align: center;\n        height: 1.2em; }\n  .home .carousel .left-btn {\n    position: absolute;\n    padding: 1em;\n    top: 33.333333333%;\n    left: 0;\n    cursor: pointer;\n    color: Snow; }\n  .home .carousel .right-btn {\n    position: absolute;\n    padding: 1em;\n    top: 33.333333333%;\n    right: 0;\n    cursor: pointer;\n    color: Snow; }\n\n.home .about {\n  background-repeat: no-repeat;\n  background-image: url(\"/assets/city_bg_02.jpg\");\n  background-position: center;\n  padding: 4em 0 6em 0; }\n  .home .about .title {\n    color: Grey;\n    text-align: center;\n    font-size: 2em;\n    margin-bottom: 1em; }\n  .home .about .description {\n    color: DimGrey;\n    text-align: center;\n    max-width: 600px;\n    margin: 0 auto;\n    padding: 0.8em; }\n    .home .about .description.strong {\n      font-weight: bold; }\n\n.home .contact {\n  background-color: SlateGrey;\n  padding: 2em 0;\n  color: Snow;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .home .contact .info {\n    padding: 0.4em 1em;\n    border-right: solid 1px LightGrey; }\n    .home .contact .info:first-child {\n      margin-left: auto; }\n    .home .contact .info:last-child {\n      margin-right: auto;\n      border-right: none; }\n\n.home .developer {\n  background-color: Ivory;\n  color: Grey;\n  font-size: 0.6em;\n  padding: 1em;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_language__ = __webpack_require__("../../../../../src/app/resources/language.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = (function () {
    function HomePageComponent() {
        this.carouselChange = function (event) {
            console.log("carouselChange", event);
        };
        this.language = __WEBPACK_IMPORTED_MODULE_1__resources_language__["a" /* Language */].en;
        this.banners = [{
                link: "/assets/interior_design_1.jpg",
                title: this.language.morden_concept,
                description: this.language.morden_concept_desc
            }, {
                link: "/assets/interior_design_2.jpg",
                title: this.language.flexible_time,
                description: this.language.flexible_time_desc
            }, {
                link: "/assets/interior_design_3.jpg",
                title: this.language.cost_effecient,
                description: this.language.cost_effecient_desc
            }, {
                link: "/assets/interior_design_4.jpg",
                title: this.language.all_for_you,
                description: this.language.all_for_you_desc
            }];
        this.parallax = {
            config: {
                initialValue: 100,
                ratio: -0.6
            }
        };
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.carousel = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 600,
            interval: 6000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        };
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/not-found-page/not-found-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"not-found\">\n\t<div class=\"title\">\n\t\t{{ language.err_404 }}\n\t</div>\n\t<div class=\"description\">\n\t\t{{ language.desc_page_not_round }}\n\t</div>\n\t<div class=\"actions\">\n\t\t<a routerLink=\"/home\">\n\t\t\t{{ language.home|textFormat:1 }}\n\t\t</a>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/not-found-page/not-found-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".not-found {\n  padding: 4em 0; }\n  .not-found .title {\n    color: Tomato;\n    text-align: center;\n    font-size: 4em; }\n  .not-found .description {\n    text-align: center;\n    color: DimGrey;\n    font-size: 2em;\n    margin-bottom: 1em; }\n  .not-found .actions {\n    text-align: center;\n    font-size: 1em;\n    margin-bottom: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/not-found-page/not-found-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_language__ = __webpack_require__("../../../../../src/app/resources/language.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundPageComponent = (function () {
    function NotFoundPageComponent() {
        this.language = __WEBPACK_IMPORTED_MODULE_1__resources_language__["a" /* Language */].en;
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__("../../../../../src/app/pages/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/not-found-page/not-found-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/work-page/work-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{ title }} work-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/work-page/work-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/work-page/work-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkPageComponent = (function () {
    function WorkPageComponent(route) {
        this.route = route;
    }
    WorkPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.title = params.id;
        });
    };
    WorkPageComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    WorkPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-work-page',
            template: __webpack_require__("../../../../../src/app/pages/work-page/work-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/work-page/work-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], WorkPageComponent);
    return WorkPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/works-page/works-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"works\" parallax [config]=\"parallax.config\">\n\t<mat-grid-list cols=\"2\" rowHeight=\"240px\">\n\t\t<mat-grid-tile *ngFor=\"let item of links\">\n\t\t\t<app-work-card class=\"work-card\" [link]=\"item\"></app-work-card>\n\t\t</mat-grid-tile>\n\t</mat-grid-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/works-page/works-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".works {\n  background-image: url(\"/assets/sketch_room.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  padding: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/works-page/works-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorksPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_language__ = __webpack_require__("../../../../../src/app/resources/language.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorksPageComponent = (function () {
    function WorksPageComponent() {
        this.language = __WEBPACK_IMPORTED_MODULE_1__resources_language__["a" /* Language */].en;
        this.links = [{
                description: this.language.commercial_desc,
                url: "commercial",
                name: this.language.commercial,
                background: ""
            }, {
                description: this.language.residential_desc,
                url: "residential",
                name: this.language.residential,
                background: ""
            }, {
                description: this.language.hotel_desc,
                url: "hotel",
                name: this.language.hotel,
                background: "/assets/work_hotel.jpg"
            }, {
                description: this.language.office_desc,
                url: "office",
                name: this.language.office,
                background: ""
            }];
        this.parallax = {
            config: {
                initialValue: 100,
                ratio: -0.6
            }
        };
    }
    WorksPageComponent.prototype.ngOnInit = function () {
    };
    WorksPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-works-page',
            template: __webpack_require__("../../../../../src/app/pages/works-page/works-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/works-page/works-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorksPageComponent);
    return WorksPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/background-url.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BackgroundUrlPipe = (function () {
    function BackgroundUrlPipe() {
    }
    BackgroundUrlPipe.prototype.transform = function (value, args) {
        var url = value;
        var style = {
            "background-image": "url('" + encodeURI(url) + "')"
        };
        return style;
    };
    BackgroundUrlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'backgroundUrl'
        })
    ], BackgroundUrlPipe);
    return BackgroundUrlPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/join-style.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinStylePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JoinStylePipe = (function () {
    function JoinStylePipe() {
    }
    JoinStylePipe.prototype.transform = function (value, args) {
        var base = value;
        var addOn = args;
        if (base && addOn) {
            return Object.assign({}, base, addOn);
        }
        else if (base) {
            return base;
        }
        else {
            return null;
        }
    };
    JoinStylePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'joinStyle'
        })
    ], JoinStylePipe);
    return JoinStylePipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/text-format.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TextFormatPipe = (function () {
    function TextFormatPipe() {
    }
    TextFormatPipe.prototype.transform = function (value, args) {
        var option = args;
        switch (option) {
            case 1:
                value = value.charAt(0).toUpperCase() + value.slice(1);
                break;
            case 2:
                var values = value.split(" ");
                for (var o in values) {
                    var v = values[o];
                    values[o] = v.charAt(0).toUpperCase() + v.slice(1);
                }
                value = values.join(" ");
                break;
            case 3:
                value = value.toUpperCase();
                break;
        }
        return value;
    };
    TextFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'textFormat'
        })
    ], TextFormatPipe);
    return TextFormatPipe;
}());



/***/ }),

/***/ "../../../../../src/app/resources/language.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Language; });
var Language = (function () {
    function Language() {
    }
    Language.en = {
        cathy: "cathy",
        home: "home",
        works: "works",
        err_404: "404 Error",
        desc_page_not_round: "Sorry! The page you are looking for is not exist!",
        morden_concept: "morden concept",
        morden_concept_desc: "I do design with all advanced and latest techniques",
        flexible_time: "flexible time",
        flexible_time_desc: "You are the time manager for your building",
        cost_effecient: "cost effecient",
        cost_effecient_desc: "Materials designs and works are transparent for you",
        all_for_you: "all for you",
        all_for_you_desc: "Everything I have done is provide you a fantastic interior experience",
        about_me: "about me",
        about_me_desc_1: "I am Cathy, a freelance interior designer working and living in Singapore.",
        about_me_desc_2: "Passion for art and design drives me to go beyond limitations and I zoom in on minute details to ensure design perfection, striking precise balance on aesthetics and functionality of the overall design.",
        about_me_desc_3: "Write a message, give me a call and I'll grab a coffee and talk about your project.",
        email: "email",
        email_value: "cathyhsuqian@gmail.com",
        phone: "phone",
        phone_value: "+65 9822 5777",
        developer: "developer",
        developer_value: "YQ.B - 2018 Jan",
        commercial: "commercial",
        residential: "residential",
        hotel: "hotel",
        office: "office",
        commercial_desc: "Shopping centers, Restaurants, Cafés, Bars",
        residential_desc: "HDB Units, Terrace House, EC, Condominiums",
        hotel_desc: "Hotel Halls, Ballrooms, Premium Rooms, Gym",
        office_desc: "Companies, Organizations, SME, Start up"
    };
    return Language;
}());



/***/ }),

/***/ "../../../../../src/app/services/layout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutService = (function () {
    function LayoutService() {
        this.dimension = function (callback) {
            if (callback) {
                callback(window.innerWidth, window.innerHeight);
            }
        };
    }
    LayoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map