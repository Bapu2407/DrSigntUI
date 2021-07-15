function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["server-error-server-error-module"], {
  /***/
  "./src/app/server-error/server-error-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/server-error/server-error-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ServerErrorRoutingModule */

  /***/
  function srcAppServerErrorServerErrorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerErrorRoutingModule", function () {
      return ServerErrorRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _server_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./server-error.component */
    "./src/app/server-error/server-error.component.ts");

    var routes = [{
      path: '',
      component: _server_error_component__WEBPACK_IMPORTED_MODULE_2__["ServerErrorComponent"]
    }];

    var ServerErrorRoutingModule = function ServerErrorRoutingModule() {
      _classCallCheck(this, ServerErrorRoutingModule);
    };

    ServerErrorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServerErrorRoutingModule
    });
    ServerErrorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServerErrorRoutingModule_Factory(t) {
        return new (t || ServerErrorRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServerErrorRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerErrorRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/server-error/server-error.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/server-error/server-error.component.ts ***!
    \********************************************************/

  /*! exports provided: ServerErrorComponent */

  /***/
  function srcAppServerErrorServerErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function () {
      return ServerErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServerErrorComponent =
    /*#__PURE__*/
    function () {
      function ServerErrorComponent() {
        _classCallCheck(this, ServerErrorComponent);
      }

      _createClass(ServerErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServerErrorComponent;
    }();

    ServerErrorComponent.ɵfac = function ServerErrorComponent_Factory(t) {
      return new (t || ServerErrorComponent)();
    };

    ServerErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServerErrorComponent,
      selectors: [["app-server-error"]],
      decls: 2,
      vars: 0,
      template: function ServerErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " server-error works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlci1lcnJvci9zZXJ2ZXItZXJyb3IuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-server-error',
          templateUrl: './server-error.component.html',
          styleUrls: ['./server-error.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/server-error/server-error.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/server-error/server-error.module.ts ***!
    \*****************************************************/

  /*! exports provided: ServerErrorModule */

  /***/
  function srcAppServerErrorServerErrorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerErrorModule", function () {
      return ServerErrorModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _server_error_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./server-error-routing.module */
    "./src/app/server-error/server-error-routing.module.ts");
    /* harmony import */


    var _server_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./server-error.component */
    "./src/app/server-error/server-error.component.ts");

    var ServerErrorModule = function ServerErrorModule() {
      _classCallCheck(this, ServerErrorModule);
    };

    ServerErrorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServerErrorModule
    });
    ServerErrorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServerErrorModule_Factory(t) {
        return new (t || ServerErrorModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _server_error_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServerErrorRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServerErrorModule, {
        declarations: [_server_error_component__WEBPACK_IMPORTED_MODULE_3__["ServerErrorComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _server_error_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServerErrorRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerErrorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _server_error_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServerErrorRoutingModule"]],
          declarations: [_server_error_component__WEBPACK_IMPORTED_MODULE_3__["ServerErrorComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=server-error-server-error-module-es5.js.map