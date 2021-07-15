function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-denied-access-denied-module"], {
  /***/
  "./src/app/access-denied/access-denied-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/access-denied/access-denied-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: AccessDeniedRoutingModule */

  /***/
  function srcAppAccessDeniedAccessDeniedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessDeniedRoutingModule", function () {
      return AccessDeniedRoutingModule;
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


    var _access_denied_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./access-denied.component */
    "./src/app/access-denied/access-denied.component.ts");

    var routes = [{
      path: '',
      component: _access_denied_component__WEBPACK_IMPORTED_MODULE_2__["AccessDeniedComponent"]
    }];

    var AccessDeniedRoutingModule = function AccessDeniedRoutingModule() {
      _classCallCheck(this, AccessDeniedRoutingModule);
    };

    AccessDeniedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AccessDeniedRoutingModule
    });
    AccessDeniedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AccessDeniedRoutingModule_Factory(t) {
        return new (t || AccessDeniedRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccessDeniedRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessDeniedRoutingModule, [{
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
  "./src/app/access-denied/access-denied.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/access-denied/access-denied.component.ts ***!
    \**********************************************************/

  /*! exports provided: AccessDeniedComponent */

  /***/
  function srcAppAccessDeniedAccessDeniedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function () {
      return AccessDeniedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AccessDeniedComponent =
    /*#__PURE__*/
    function () {
      function AccessDeniedComponent() {
        _classCallCheck(this, AccessDeniedComponent);
      }

      _createClass(AccessDeniedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccessDeniedComponent;
    }();

    AccessDeniedComponent.ɵfac = function AccessDeniedComponent_Factory(t) {
      return new (t || AccessDeniedComponent)();
    };

    AccessDeniedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccessDeniedComponent,
      selectors: [["app-access-denied"]],
      decls: 2,
      vars: 0,
      template: function AccessDeniedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " access-denied works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzcy1kZW5pZWQvYWNjZXNzLWRlbmllZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessDeniedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-access-denied',
          templateUrl: './access-denied.component.html',
          styleUrls: ['./access-denied.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/access-denied/access-denied.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/access-denied/access-denied.module.ts ***!
    \*******************************************************/

  /*! exports provided: AccessDeniedModule */

  /***/
  function srcAppAccessDeniedAccessDeniedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessDeniedModule", function () {
      return AccessDeniedModule;
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


    var _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./access-denied-routing.module */
    "./src/app/access-denied/access-denied-routing.module.ts");
    /* harmony import */


    var _access_denied_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./access-denied.component */
    "./src/app/access-denied/access-denied.component.ts");

    var AccessDeniedModule = function AccessDeniedModule() {
      _classCallCheck(this, AccessDeniedModule);
    };

    AccessDeniedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AccessDeniedModule
    });
    AccessDeniedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AccessDeniedModule_Factory(t) {
        return new (t || AccessDeniedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccessDeniedRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccessDeniedModule, {
        declarations: [_access_denied_component__WEBPACK_IMPORTED_MODULE_3__["AccessDeniedComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccessDeniedRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessDeniedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccessDeniedRoutingModule"]],
          declarations: [_access_denied_component__WEBPACK_IMPORTED_MODULE_3__["AccessDeniedComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=access-denied-access-denied-module-es5.js.map