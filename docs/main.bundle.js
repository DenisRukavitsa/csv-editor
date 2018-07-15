webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog modal-lg\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\" id=\"exampleModalLabel\">About</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>\n        Here is a simple and powerful online CSV editor right in front of you.\n        All the data between CSV text and CSV table is synchronized automatically as you change it.\n      </p>\n      <p>\n        Any issues and suggestions are highly welcome at\n        <a href=\"mailto:denis.rukavitsa@gmail.com?subject=CSV Editor\">\n          denis.rukavitsa@gmail.com\n        </a>\n      </p>\n      <p>\n        This is an open-source application and you can check it on\n        <a href=\"https://github.com/DenisRukavitsa/csv-editor\" target=\"_blank\">\n          GitHub\n        </a>\n      </p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">OK</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading></app-loading>\n<app-header></app-header>\n<app-csv-text></app-csv-text>\n<app-csv-table></app-csv-table>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__csv_service__ = __webpack_require__("../../../../../src/app/csv.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(csvService) {
        this.csvService = csvService;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__csv_service__["a" /* CsvService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__csv_service__["a" /* CsvService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__csv_text_csv_text_component__ = __webpack_require__("../../../../../src/app/csv-text/csv-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__csv_service__ = __webpack_require__("../../../../../src/app/csv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings_service__ = __webpack_require__("../../../../../src/app/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__csv_table_csv_table_component__ = __webpack_require__("../../../../../src/app/csv-table/csv-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__csv_table_cell_csv_table_cell_component__ = __webpack_require__("../../../../../src/app/csv-table-cell/csv-table-cell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__loading_loading_component__ = __webpack_require__("../../../../../src/app/loading/loading.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__csv_text_csv_text_component__["a" /* CsvTextComponent */],
            __WEBPACK_IMPORTED_MODULE_7__csv_table_csv_table_component__["a" /* CsvTableComponent */],
            __WEBPACK_IMPORTED_MODULE_8__csv_table_cell_csv_table_cell_component__["a" /* CsvTableCellComponent */],
            __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__loading_loading_component__["a" /* LoadingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__csv_service__["a" /* CsvService */], __WEBPACK_IMPORTED_MODULE_6__settings_settings_service__["a" /* SettingsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/csv-table-cell/csv-table-cell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\r\n  width: 10em;\r\n  height: 2.2em;\r\n  padding: .1em .5em .3em .5em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/csv-table-cell/csv-table-cell.component.html":
/***/ (function(module, exports) {

module.exports = "<input\n  class=\"form-control\"\n  type=\"text\"\n  value=\"{{value}}\"\n  (keyup)=\"onKeyup(cell)\"\n  #cell>\n"

/***/ }),

/***/ "../../../../../src/app/csv-table-cell/csv-table-cell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CsvTableCellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__csv_service__ = __webpack_require__("../../../../../src/app/csv.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CsvTableCellComponent = (function () {
    function CsvTableCellComponent(csvService) {
        this.csvService = csvService;
    }
    CsvTableCellComponent.prototype.ngOnInit = function () { };
    CsvTableCellComponent.prototype.onKeyup = function (cell) {
        this.csvService.cellChange(this.row, this.column, cell.value);
    };
    return CsvTableCellComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], CsvTableCellComponent.prototype, "row", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], CsvTableCellComponent.prototype, "column", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CsvTableCellComponent.prototype, "value", void 0);
CsvTableCellComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-csv-table-cell',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
        template: __webpack_require__("../../../../../src/app/csv-table-cell/csv-table-cell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/csv-table-cell/csv-table-cell.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__csv_service__["a" /* CsvService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__csv_service__["a" /* CsvService */]) === "function" && _a || Object])
], CsvTableCellComponent);

var _a;
//# sourceMappingURL=csv-table-cell.component.js.map

/***/ }),

/***/ "../../../../../src/app/csv-table/csv-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\r\n  display: block;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: 0.7em 0 0.3em 0;\r\n  border: 0.5px solid rgba(0,0,0,.15);\r\n  border-radius: .25rem;\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n  white-space: nowrap;\r\n}\r\n\r\n.table td {\r\n  padding: 0.3rem;\r\n}\r\n\r\nul.pagination {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin-bottom: 0.7em;\r\n}\r\n\r\n#rowsPerPage {\r\n  display: inline;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: 0 .5em;\r\n  padding: 0;\r\n  height: 2.8em;\r\n}\r\n\r\n.page-item.active .page-link {\r\n  background-color: green;\r\n  border-color: green;\r\n}\r\n\r\n.page-link,\r\n#rowsPerPage {\r\n  font-size: .7em;\r\n}\r\n\r\n.page-link-number {\r\n  width: 3em;\r\n  text-align: center;\r\n}\r\n\r\n.page-link-last {\r\n  border-top-right-radius: 0.25rem;\r\n  border-bottom-right-radius: 0.25rem;\r\n}\r\n\r\n.page-link-first:after {\r\n  content: \"<<\";\r\n}\r\n\r\n.page-link-last:after {\r\n  content: \">>\";\r\n}\r\n\r\n.page-link-previous {\r\n  display: none;\r\n}\r\n\r\n.page-link-next {\r\n  display: none;\r\n}\r\n\r\nlabel {\r\n  display: none;\r\n}\r\n\r\n@media (min-width: 420px) {\r\n  .page-link,\r\n  #rowsPerPage {\r\n    font-size: 1em;\r\n  }\r\n\r\n  #rowsPerPage {\r\n    padding: .3em .5em;\r\n    height: 2.35em;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .page-link-previous {\r\n    display: block;\r\n  }\r\n\r\n  .page-link-next {\r\n    display: block;\r\n  }\r\n\r\n  .page-link-first:after {\r\n    content: \"First\";\r\n  }\r\n\r\n  .page-link-previous:after {\r\n    content: \"Previous\";\r\n  }\r\n\r\n  .page-link-next:after {\r\n    content: \"Next\";\r\n  }\r\n\r\n  .page-link-last:after {\r\n    content: \"Last\";\r\n  }\r\n}\r\n\r\n@media (min-width: 710px) {\r\n  label {\r\n    display: block;\r\n  }\r\n\r\n  select.form-control {\r\n    margin-left: 1em;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/csv-table/csv-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"csvService && data.length && data[0][0]\">\n  <table class=\"table table-striped table-responsive\">\n    <tr *ngFor=\"let line of data; let row = index\">\n      <ng-container *ngIf=\"(row < (rowsPerPage * currentPage)) &&\n                          (row >= (rowsPerPage * (currentPage - 1)))\">\n        <th scope=\"row\">{{row + 1}}</th>\n        <td *ngFor=\"let lineCell of line; let column = index\">\n          <app-csv-table-cell\n            [row] = \"row\"\n            [column] = \"column\"\n            [value] = \"lineCell\"></app-csv-table-cell>\n        </td>\n      </ng-container>\n    </tr>\n  </table>\n\n  <ul class=\"pagination\">\n    <li class=\"page-item\" [ngClass]=\"{'disabled': currentPage === 1}\">\n      <a class=\"page-link page-link-first\" aria-label=\"First\" (click)=\"firstPage()\"></a>\n    </li>\n\n    <li class=\"page-item\" [ngClass]=\"{'disabled': currentPage === 1}\">\n      <a class=\"page-link page-link-previous\" aria-label=\"Previous\" (click)=\"previousPage()\"></a>\n    </li>\n\n    <ng-container *ngFor=\"let line of data; let pageNum = index\">\n      <li class=\"page-item page-item-number\"\n          [ngClass]=\"{'active': currentPage === pageNum / rowsPerPage + 1}\"\n          *ngIf=\"(pageNum % rowsPerPage) === 0 &&\n                 (pageNum / rowsPerPage) < (currentPage + 2 + mathFloor(2 / currentPage)) &&\n                 (pageNum / rowsPerPage) > (currentPage - 4 - mathFloor(2 / (maxPageNumber - currentPage + 1)))\">\n        <a class=\"page-link page-link-number\" (click)=\"goToPage(pageNum / rowsPerPage + 1)\">\n          {{pageNum / rowsPerPage + 1}}\n        </a>\n      </li>\n    </ng-container>\n\n    <li class=\"page-item\"\n        [ngClass]=\"{'disabled': currentPage >= (maxPageNumber)}\">\n      <a class=\"page-link page-link-next\" aria-label=\"Next\" (click)=\"nextPage()\"></a>\n    </li>\n\n    <li class=\"page-item\"\n        [ngClass]=\"{'disabled': currentPage >= (maxPageNumber)}\">\n      <a class=\"page-link page-link-last\" aria-label=\"Last\" (click)=\"lastPage()\"></a>\n    </li>\n\n    <select class=\"form-control\" id=\"rowsPerPage\" (change)=\"changeRowsPerPage($event)\">\n      <ng-container *ngFor=\"let option of ROWS_PER_PAGE_OPTIONS\">\n        <option>{{option}}</option>\n      </ng-container>\n    </select>\n    <label for=\"rowsPerPage\" aria-label=\"Rows per page\">rows per page</label>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/csv-table/csv-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CsvTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__csv_service__ = __webpack_require__("../../../../../src/app/csv.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CsvTableComponent = (function () {
    function CsvTableComponent(csvService) {
        this.csvService = csvService;
        this.data = [];
        this.ROWS_PER_PAGE_OPTIONS = [5, 10, 20];
        this.rowsPerPage = this.ROWS_PER_PAGE_OPTIONS[0];
        this.currentPage = 1;
        this.maxPageNumber = 0;
        this.mathFloor = Math.floor;
    }
    CsvTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lineChangesSubscription = this.csvService.lineChanges.subscribe(function (value) {
            _this.data[value.line] = value.data;
        });
        this.textChangesSubscription = this.csvService.textChanges.subscribe(function (value) {
            _this.data = value;
            _this.calculateLastPage();
            _this.checkIfLastPage();
        });
    };
    CsvTableComponent.prototype.ngOnDestroy = function () {
        this.lineChangesSubscription.unsubscribe();
        this.textChangesSubscription.unsubscribe();
    };
    CsvTableComponent.prototype.firstPage = function () {
        this.csvService.getTableUpdates();
        this.currentPage = 1;
    };
    CsvTableComponent.prototype.previousPage = function () {
        this.csvService.getTableUpdates();
        this.currentPage--;
    };
    CsvTableComponent.prototype.nextPage = function () {
        this.csvService.getTableUpdates();
        this.currentPage++;
    };
    CsvTableComponent.prototype.lastPage = function () {
        this.csvService.getTableUpdates();
        this.calculateLastPage();
        this.currentPage = this.maxPageNumber;
    };
    CsvTableComponent.prototype.goToPage = function (currentPage) {
        this.csvService.getTableUpdates();
        this.currentPage = currentPage;
    };
    CsvTableComponent.prototype.changeRowsPerPage = function (event) {
        this.csvService.getTableUpdates();
        this.rowsPerPage = event.target.value;
        this.calculateLastPage();
        this.checkIfLastPage();
    };
    CsvTableComponent.prototype.calculateLastPage = function () {
        var linesCount = this.data.length;
        this.maxPageNumber = Math.floor(linesCount / this.rowsPerPage);
        if ((linesCount % this.rowsPerPage) > 0) {
            this.maxPageNumber++;
        }
    };
    CsvTableComponent.prototype.checkIfLastPage = function () {
        if (this.currentPage > this.maxPageNumber) {
            this.lastPage();
        }
    };
    return CsvTableComponent;
}());
CsvTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-csv-table',
        template: __webpack_require__("../../../../../src/app/csv-table/csv-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/csv-table/csv-table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__csv_service__["a" /* CsvService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__csv_service__["a" /* CsvService */]) === "function" && _a || Object])
], CsvTableComponent);

var _a;
//# sourceMappingURL=csv-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/csv-text/csv-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\r\n  display: none;\r\n}\r\n\r\n.csv-text {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.csv-text-actions {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  z-index: 1;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .csv-text {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n  }\r\n\r\n  .csv-text-actions {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-ordinal-group: 2;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/csv-text/csv-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"csv-text\">\n\n  <div class=\"csv-text-actions\">\n    <div>\n      <input type=\"file\" accept=\".csv\" (change)=\"csvUploaded($event)\" #uploadInput>\n      <button type=\"button\" class=\"btn btn-link\" (click)=\"uploadCsv(uploadInput)\">\n        <i class=\"fa fa-upload fa-2x\"></i><br> Upload\n      </button>\n    </div>\n\n    <div>\n      <button *ngIf=\"csv.value\" type=\"button\" class=\"btn btn-link\" (click)=\"downloadCsv(csv)\">\n        <i class=\"fa fa-floppy-o fa-2x\"></i><br> Save\n      </button>\n      <button *ngIf=\"!csv.value\" disabled type=\"button\" class=\"btn btn-link\">\n        <i class=\"fa fa-floppy-o fa-2x\"></i><br> Save\n      </button>\n    </div>\n\n    <div>\n      <button *ngIf=\"csv.value\" type=\"button\" class=\"btn btn-link\" (click)=\"copyCsv(csv)\">\n        <i class=\"fa fa-clipboard fa-2x\"></i><br> Copy\n      </button>\n      <button *ngIf=\"!csv.value\" disabled type=\"button\" class=\"btn btn-link\">\n        <i class=\"fa fa-clipboard fa-2x\"></i><br> Copy\n      </button>\n    </div>\n\n    <div>\n      <button *ngIf=\"csv.value\" type=\"button\" class=\"btn btn-link\" (click)=\"clearCsv(csv)\">\n        <i class=\"fa fa-eraser fa-2x\"></i><br> Clear\n      </button>\n      <button *ngIf=\"!csv.value\" disabled type=\"button\" class=\"btn btn-link\">\n        <i class=\"fa fa-eraser fa-2x\"></i><br> Clear\n      </button>\n    </div>\n  </div>\n\n  <textarea\n    id=\"csvText\"\n    class=\"form-control\"\n    placeholder=\"Paste CSV here or upload it...\"\n    rows=\"14\"\n    (keyup)=\"onKeyup(csv)\"\n    #csv></textarea>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/csv-text/csv-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CsvTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__csv_service__ = __webpack_require__("../../../../../src/app/csv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CsvTextComponent = (function () {
    function CsvTextComponent(csvService) {
        this.csvService = csvService;
    }
    CsvTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableChangesSubscription = this.csvService.tableChanges.subscribe(function (changedCsv) {
            _this.textArea.element.nativeElement.value = changedCsv;
        });
        this.csvUploadedSubscription = this.csvService.csvUploaded.subscribe(function (uploadedCsv) {
            _this.textArea.element.nativeElement.value = uploadedCsv;
        });
    };
    CsvTextComponent.prototype.ngOnDestroy = function () {
        this.tableChangesSubscription.unsubscribe();
        this.csvUploadedSubscription.unsubscribe();
    };
    CsvTextComponent.prototype.onKeyup = function (textArea) {
        this.csvService.parseCsv(textArea.value);
    };
    CsvTextComponent.prototype.uploadCsv = function (input) {
        input.click();
    };
    CsvTextComponent.prototype.downloadCsv = function (textArea) {
        var date = new Date();
        __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](new Blob([textArea.value], { type: 'text/plain;charset=utf-8' }), 'csv-online-editor_' +
            (date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "_") +
            (date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds() + ".csv"));
    };
    CsvTextComponent.prototype.copyCsv = function (textArea) {
        textArea.select();
        document.execCommand('copy');
    };
    CsvTextComponent.prototype.clearCsv = function (textArea) {
        textArea.value = '';
        this.csvService.parseCsv('');
    };
    CsvTextComponent.prototype.csvUploaded = function ($event) {
        var _this = this;
        var file = $event.target.files[0];
        var fileReader = new FileReader();
        if (!file.name.toLowerCase().endsWith('.csv')) {
            alert('Please upload the file with .csv extension.');
            return;
        }
        fileReader.onloadend = function () {
            var csv = fileReader.result;
            _this.csvService.fileUploaded(csv);
            $event.target.value = '';
        };
        fileReader.readAsText(file);
    };
    return CsvTextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('csv', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewContainerRef */]) === "function" && _a || Object)
], CsvTextComponent.prototype, "textArea", void 0);
CsvTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-csv-text',
        template: __webpack_require__("../../../../../src/app/csv-text/csv-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/csv-text/csv-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__csv_service__["a" /* CsvService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__csv_service__["a" /* CsvService */]) === "function" && _b || Object])
], CsvTextComponent);

var _a, _b;
//# sourceMappingURL=csv-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/csv.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CsvService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings_service__ = __webpack_require__("../../../../../src/app/settings/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CsvService = (function () {
    function CsvService(settingsService) {
        var _this = this;
        this.lineChanges = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.textChanges = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.tableChanges = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.csvUploaded = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.loading = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.updatedLines = [];
        this.lines = [];
        this.csvText = '';
        this.lineSeparator = '\n';
        this.valueSeparator = ',';
        this.stringTerminator = '';
        settingsService.settings.subscribe(function (settings) {
            _this.valueSeparator = settings.separator === 'Comma' ? ',' : '\t';
            switch (settings.stringTerminator) {
                case 'None':
                    _this.stringTerminator = '';
                    break;
                case 'Double quote':
                    _this.stringTerminator = '"';
                    break;
                case 'Single quote':
                    _this.stringTerminator = '\'';
                    break;
                default:
                    _this.stringTerminator = '';
            }
            _this.fullParse();
        });
    }
    CsvService.prototype.parseCsv = function (csv) {
        this.csvText = csv.trim();
        this.lineSeparator = '\n';
        var changedLines = this.csvText.split('\n');
        if (changedLines.length !== this.lines.length) {
            this.fullParse();
        }
        else {
            this.changeLine(changedLines);
        }
    };
    CsvService.prototype.fileUploaded = function (file) {
        this.csvUploaded.next(file);
        this.csvText = file.trim();
        if (file.includes('\n')) {
            this.lineSeparator = '\n';
            this.fullParse();
        }
        else {
            this.lineSeparator = '\r';
            this.fullParse();
        }
    };
    CsvService.prototype.cellChange = function (row, column, newValue) {
        this.updatedLines.push(row);
        var lineToChange = this.parseLine(this.lines[row]);
        var changedLine = lineToChange.slice(0, column).concat([newValue], lineToChange.slice(column + 1, lineToChange.length));
        this.lines[row] = changedLine.join(this.valueSeparator);
        this.tableChanges.next(this.lines.join(this.lineSeparator));
    };
    CsvService.prototype.getTableUpdates = function () {
        var _this = this;
        this.updatedLines.forEach(function (updatedLine) {
            _this.lineChanges.next({ line: updatedLine,
                data: _this.parseLine(_this.lines[updatedLine]) });
        });
        this.updatedLines = [];
    };
    CsvService.prototype.fullParse = function () {
        var _this = this;
        this.loading.next(true);
        var splittedLines = [];
        this.lines = this.csvText.split(this.lineSeparator);
        this.lines.forEach(function (line) {
            splittedLines.push(_this.parseLine(line));
        });
        this.textChanges.next(splittedLines);
        this.loading.next(false);
    };
    CsvService.prototype.changeLine = function (changedLines) {
        for (var i = 0; i < this.lines.length; i++) {
            if (this.lines[i] !== changedLines[i]) {
                this.lineChanges.next({ line: i, data: this.parseLine(changedLines[i]) });
                break;
            }
        }
        this.lines = changedLines;
    };
    CsvService.prototype.parseLine = function (line) {
        var _this = this;
        if (this.stringTerminator && line.includes(this.stringTerminator)) {
            var values_1 = [];
            var str_1 = '';
            var insideString_1 = false;
            line.split('').forEach(function (letter, index) {
                if (letter === _this.valueSeparator && !insideString_1) {
                    values_1.push(str_1);
                    str_1 = '';
                    return;
                }
                if (index === line.length - 1) {
                    str_1 += letter;
                    values_1.push(str_1);
                    return;
                }
                if (letter === _this.stringTerminator && !insideString_1) {
                    insideString_1 = true;
                    str_1 += letter;
                    return;
                }
                if (letter === _this.stringTerminator && insideString_1) {
                    insideString_1 = false;
                    str_1 += letter;
                    return;
                }
                str_1 += letter;
            });
            return values_1;
        }
        else {
            return line.split(this.valueSeparator);
        }
    };
    return CsvService;
}());
CsvService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object])
], CsvService);

var _a;
//# sourceMappingURL=csv.service.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  background-color: transparent;\r\n  margin-bottom: .5em;\r\n  border-bottom: .1em solid green;\r\n  padding: .3em .5em;\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-brand,\r\n.navbar-brand:hover {\r\n  color: green;\r\n}\r\n\r\n.navbar-brand {\r\n  font-size: 1.1em;\r\n}\r\n\r\n.menu-buttons {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n}\r\n\r\n.navbar-nav {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\r\n}\r\n\r\n.btn-link, .navbar-toggler {\r\n  padding: 0.4em 0;\r\n}\r\n\r\n.navbar-toggler {\r\n  border: none;\r\n  padding: 0.2em 0;\r\n}\r\n\r\n.navbar-toggler:focus {\r\n  outline: none;\r\n}\r\n\r\n@media (min-width: 330px) {\r\n  .navbar-brand {\r\n    font-size: 1.25em;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n  }\r\n\r\n  .btn-link {\r\n    padding: 0.5em;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light justify-content-between\">\n  <h1 class=\"navbar-brand mb-0\">\n    <i class=\"fa fa-table\"></i> CSV Online Editor\n  </h1>\n  <div class=\"menu-buttons\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n            data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-link\" data-toggle=\"modal\"\n                  data-target=\"#settingsModal\">\n            <i class=\"fa fa-cog\"></i> Settings\n          </button>\n        </li>\n        <li class=\"nav-item\">\n          <button type=\"button\" class=\"btn btn-link\" data-toggle=\"modal\"\n                  data-target=\"#aboutModal\">\n            <i class=\"fa fa-file-text\"></i> About\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"modal fade\" id=\"aboutModal\" tabindex=\"-1\" role=\"dialog\"\n     aria-labelledby=\"aboutModal\" aria-hidden=\"true\">\n  <app-about></app-about>\n</div>\n\n<div class=\"modal fade\" id=\"settingsModal\" tabindex=\"-1\" role=\"dialog\"\n     aria-labelledby=\"settingsModal\" aria-hidden=\"true\">\n  <app-settings></app-settings>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/loading/loading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#background {\r\n  position: fixed;\r\n  z-index: 10;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color:  rgba(150, 150, 150, 0.6);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\" id=\"background\">\n  <img id=\"loading\" src=\"../../assets/img/loading.svg\" alt=\"loading\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__csv_service__ = __webpack_require__("../../../../../src/app/csv.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingComponent = (function () {
    function LoadingComponent(csvService) {
        var _this = this;
        this.loading = false;
        csvService.loading.subscribe(function (loading) {
            console.log(loading);
            _this.loading = loading;
        });
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    return LoadingComponent;
}());
LoadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-loading',
        template: __webpack_require__("../../../../../src/app/loading/loading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loading/loading.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__csv_service__["a" /* CsvService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__csv_service__["a" /* CsvService */]) === "function" && _a || Object])
], LoadingComponent);

var _a;
//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\" id=\"exampleModalLabel\">Settings</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n\n    <div class=\"modal-body\">\n      <form [formGroup]=\"settingsForm\">\n        <div class=\"form-group\">\n          <label for=\"separator\">Separator</label>\n          <select class=\"form-control\" id=\"separator\" [formControl]=\"separatorControl\">\n            <option>Comma</option>\n            <option>Tab</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"stringTerminator\">String terminator</label>\n          <select class=\"form-control\" id=\"stringTerminator\" [formControl]=\"stringTerminatorControl\">\n            <option>None</option>\n            <option>Double quote</option>\n            <option>Single quote</option>\n          </select>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n      <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"saveSettings()\">\n        Save\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_service__ = __webpack_require__("../../../../../src/app/settings/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = (function () {
    function SettingsComponent(formBuilder, settingsService) {
        this.settingsService = settingsService;
        this.settingsForm = formBuilder.group({
            'separatorControl': ['Comma'],
            'stringTerminatorControl': ['None']
        });
        this.separatorControl = this.settingsForm.controls['separatorControl'];
        this.stringTerminatorControl = this.settingsForm.controls['stringTerminatorControl'];
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.saveSettings = function () {
        this.settingsService.setSettings({
            separator: this.separatorControl.value,
            stringTerminator: this.stringTerminatorControl.value
        });
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__settings_service__["a" /* SettingsService */]) === "function" && _b || Object])
], SettingsComponent);

var _a, _b;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SettingsService = (function () {
    function SettingsService() {
        this.settings = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    SettingsService.prototype.setSettings = function (set) {
        this.settings.next(set);
    };
    return SettingsService;
}());
SettingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], SettingsService);

//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map