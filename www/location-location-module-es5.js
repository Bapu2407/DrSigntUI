function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"], {
  /***/
  "./src/app/layout/location/location-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/layout/location/location-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: LocationRoutingModule */

  /***/
  function srcAppLayoutLocationLocationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationRoutingModule", function () {
      return LocationRoutingModule;
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


    var _location_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./location.component */
    "./src/app/layout/location/location.component.ts");

    var routes = [{
      path: '',
      component: _location_component__WEBPACK_IMPORTED_MODULE_2__["LocationComponent"]
    }];

    var LocationRoutingModule = function LocationRoutingModule() {
      _classCallCheck(this, LocationRoutingModule);
    };

    LocationRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: LocationRoutingModule
    });
    LocationRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function LocationRoutingModule_Factory(t) {
        return new (t || LocationRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LocationRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LocationRoutingModule, [{
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
  "./src/app/layout/location/location.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/layout/location/location.component.ts ***!
    \*******************************************************/

  /*! exports provided: LocationComponent */

  /***/
  function srcAppLayoutLocationLocationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationComponent", function () {
      return LocationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../config */
    "./src/app/config.ts");
    /* harmony import */


    var src_BaseComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/BaseComponent */
    "./src/BaseComponent.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_services_data_access__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/data-access */
    "./src/app/services/data-access.ts");
    /* harmony import */


    var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/modules/page-header/page-header.component */
    "./src/app/shared/modules/page-header/page-header.component.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-toggle-switch */
    "./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");

    var _c0 = ["fileInputDemoPhoto"];
    var _c1 = ["acc"];
    var _c2 = ["content"];
    var _c3 = ["locationFormModal"];

    function LocationComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r493 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LocationComponent_div_3_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r493);

          var ctx_r492 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r492.openAddLocationDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Add Practice Location");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function LocationComponent_th_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Enable/Disable");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function LocationComponent_th_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function LocationComponent_tbody_26_tr_1_td_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r500 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ui-switch", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LocationComponent_tbody_26_tr_1_td_35_Template_ui_switch_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r500);

          var obj_r495 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          return obj_r495.active = $event;
        })("change", function LocationComponent_tbody_26_tr_1_td_35_Template_ui_switch_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r500);

          var obj_r495 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var ctx_r501 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          return ctx_r501.updateStatus($event, obj_r495);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var obj_r495 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", obj_r495.active);
      }
    }

    function LocationComponent_tbody_26_tr_1_td_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r506 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LocationComponent_tbody_26_tr_1_td_38_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r506);

          var obj_r495 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;

          var ctx_r504 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          return ctx_r504.openForeditLocation(obj_r495);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function LocationComponent_tbody_26_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "table", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Area");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "City");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "State");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](35, LocationComponent_tbody_26_tr_1_td_35_Template, 2, 1, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](38, LocationComponent_tbody_26_tr_1_td_38_Template, 3, 0, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var obj_r495 = ctx.$implicit;

        var ctx_r494 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](obj_r495 == null ? null : obj_r495.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](obj_r495 == null ? null : obj_r495.area);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](obj_r495 == null ? null : obj_r495.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](obj_r495 == null ? null : obj_r495.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](obj_r495 == null ? null : obj_r495.doctor == null ? null : obj_r495.doctor.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](obj_r495 == null ? null : obj_r495.attendantID);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](obj_r495 == null ? null : obj_r495.nearByLocation);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](obj_r495 == null ? null : obj_r495.slot);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r494.user.role.doctor.location.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r494.convertToHumanDate(obj_r495.createdDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r494.user.role.doctor.location.edit);
      }
    }

    var _c4 = function _c4(a1, a2, a3) {
      return {
        id: "forlocation1",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    function LocationComponent_tbody_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, LocationComponent_tbody_26_tr_1_Template, 39, 11, "tr", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r488 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind2"](2, 1, ctx_r488.normalFiltereduserListArr, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction3"](4, _c4, ctx_r488.pageSize, ctx_r488.pageNo, ctx_r488.totalDocRecords)));
      }
    }

    function LocationComponent_tbody_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "No record available");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }
    }

    function LocationComponent_ng_template_30_div_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r519 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "label", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Time");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "ngb-timepicker", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LocationComponent_ng_template_30_div_52_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r519);

          var i_r517 = ctx.index;

          var ctx_r518 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

          return ctx_r518.removeItem(i_r517);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, " Remove Datetime ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r517 = ctx.index;

        var ctx_r508 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroupName", i_r517);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("meridian", ctx_r508.openingMeridian);
      }
    }

    function LocationComponent_ng_template_30_option_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var state_r520 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", state_r520);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](state_r520);
      }
    }

    function LocationComponent_ng_template_30_ng_template_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "a", 58);
      }

      if (rf & 2) {
        var item_r521 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("innerHTML", item_r521.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeHtml"]);
      }
    }

    function LocationComponent_ng_template_30_ng_template_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 58);
      }

      if (rf & 2) {
        var notFound_r522 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("innerHTML", notFound_r522, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeHtml"]);
      }
    }

    function LocationComponent_ng_template_30_option_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var attendant_r523 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", attendant_r523);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](attendant_r523);
      }
    }

    function LocationComponent_ng_template_30_p_94_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "i", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\xA0Fix The Error : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r515 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r515.form_fill_failure_msg, " ");
      }
    }

    function LocationComponent_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r525 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h4", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Add Location");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LocationComponent_ng_template_30_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r524 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r524.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LocationComponent_ng_template_30_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r526 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r526.locationObject.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "City");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LocationComponent_ng_template_30_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r527.locationObject.city = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "Area");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LocationComponent_ng_template_30_Template_input_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r528 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r528.locationObject.area = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "textarea", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LocationComponent_ng_template_30_Template_textarea_ngModelChange_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r529 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r529.locationObject.address = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Near By Location");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](49, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LocationComponent_ng_template_30_Template_input_ngModelChange_51_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r530 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r530.locationObject.nearByLocation = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](52, LocationComponent_ng_template_30_div_52_Template, 19, 2, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LocationComponent_ng_template_30_Template_button_click_54_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r531 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r531.addItem();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, " Add Datetime ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "State ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "select", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LocationComponent_ng_template_30_Template_select_ngModelChange_61_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r532 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r532.locationObject.state = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](62, LocationComponent_ng_template_30_option_62_Template, 2, 2, "option", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "Select Doctor ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "ng-autocomplete", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LocationComponent_ng_template_30_Template_ng_autocomplete_ngModelChange_70_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r533 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r533.doctorName = $event;
        })("selected", function LocationComponent_ng_template_30_Template_ng_autocomplete_selected_70_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r534 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r534.doctorSelectEvent($event);
        })("inputChanged", function LocationComponent_ng_template_30_Template_ng_autocomplete_inputChanged_70_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r535 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r535.doctorLocationSearch($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](71, LocationComponent_ng_template_30_ng_template_71_Template, 1, 1, "ng-template", 41, 42, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](73, LocationComponent_ng_template_30_ng_template_73_Template, 1, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](79, "Select Attendant ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "select", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LocationComponent_ng_template_30_Template_select_ngModelChange_80_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r536 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r536.locationObject.attendantID = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](81, LocationComponent_ng_template_30_option_81_Template, 2, 2, "option", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, "Slot");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LocationComponent_ng_template_30_Template_input_ngModelChange_88_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r537 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r537.locationObject.slot = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LocationComponent_ng_template_30_Template_button_click_90_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r538 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r538.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](91, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LocationComponent_ng_template_30_Template_button_click_92_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r525);

          var ctx_r539 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          return ctx_r539.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](94, LocationComponent_ng_template_30_p_94_Template, 6, 1, "p", 49);
      }

      if (rf & 2) {
        var _r510 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](72);

        var _r512 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](74);

        var ctx_r491 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx_r491.locationFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r491.locationObject.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r491.locationObject.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r491.locationObject.area);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r491.locationObject.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r491.locationObject.nearByLocation);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r491.getControls());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r491.locationObject.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r491.states);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("data", ctx_r491.doctorList)("ngModel", ctx_r491.doctorName)("searchKeyword", ctx_r491.keywordDoctor)("itemTemplate", _r510)("notFoundTemplate", _r512);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r491.locationObject.attendantID);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r491.attendantList);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r491.locationObject.slot);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx_r491.locationFormGroup.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r491.submitAttempt);
      }
    }

    var LocationComponent =
    /*#__PURE__*/
    function (_src_BaseComponent__W) {
      _inherits(LocationComponent, _src_BaseComponent__W);

      var _super = _createSuper(LocationComponent);

      function LocationComponent(datePipe, router, modal, toastr, _fb, dataService) {
        var _this;

        _classCallCheck(this, LocationComponent);

        _this = _super.call(this, router);
        _this.datePipe = datePipe;
        _this.router = router;
        _this.modal = modal;
        _this.toastr = toastr;
        _this._fb = _fb;
        _this.dataService = dataService;
        _this.loading = true;
        _this.patientList = [];
        _this.states = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].states;
        _this.locationList = [];
        _this.userKind = "location";
        _this.normalFiltereduserListArr = [];
        _this.items = [];
        _this.pageSize = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].RECORDSIZE;
        _this.pageNo = 1;
        _this.tempArray = [];
        _this.keywordDoctor = "name";
        _this.locationObject = {
          active: true,
          doctorID: "",
          dateTime: [{
            date: "25-03-2020",
            time: "05:30 am"
          }],
          addByID: _this.user['_id'],
          name: "",
          area: "",
          address: "",
          city: "",
          attendantID: "",
          state: "",
          nearByLocation: "",
          latitude: 22.604298,
          longitude: 88.421425,
          slot: 3
        };
        _this.doctorList = [];
        _this.attendantList = [];
        _this.locationObjectBase = {
          active: true,
          doctorID: "",
          dateTime: [{
            date: "25-03-2020",
            time: "05:30 am"
          }],
          addByID: _this.user['_id'],
          name: "",
          area: "",
          address: "",
          city: "",
          attendantID: "",
          state: "",
          nearByLocation: "",
          latitude: 22.604298,
          longitude: 88.421425,
          slot: 3
        };
        _this.openingMeridian = true; //  this.customLocationtime.hour = 9
        // this.customLocationtime.minute = 10

        if (!_this.user.role.doctor.location.view) {
          return _possibleConstructorReturn(_this);
        }

        _this.locationFormGroup = _fb.group({
          doctorID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.locationObject.doctorID, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          doctorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
          attendantID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.locationObject.attendantID, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.locationObject.name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          city: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.locationObject.city, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          area: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.locationObject.area),
          nearByLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.locationObject.nearByLocation),
          address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.locationObject.address, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          state: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.locationObject.state, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          slot: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.locationObject.slot),
          dateTimeitems: _this._fb.array([_this.createdateTimeItem()])
        }); //this.locationFormGroup.valueChanges.subscribe(data => console.log('form changes', data));

        _this.loading = false;

        _this.fetchLocations();

        return _this;
      }

      _createClass(LocationComponent, [{
        key: "createdateTimeItem",
        value: function createdateTimeItem() {
          return this._fb.group({
            date: '',
            time: ''
          });
        }
        /*
          ngAfterViewInit(){
            this.dataService.fetchAllPatients().then((result:[]) => {
              this.patientList = result.map(element => element)
            }, (err) => {
                //console.log(err);
            });
        
           
          }
          */

      }, {
        key: "getLocation",
        value: function getLocation() {}
      }, {
        key: "addItem",
        value: function addItem() {
          this.dateTimeitems = this.locationFormGroup.get('dateTimeitems');
          this.dateTimeitems.push(this.createdateTimeItem());
        }
      }, {
        key: "getControls",
        value: function getControls() {
          return this.locationFormGroup.get('dateTimeitems').controls;
        }
      }, {
        key: "removeItem",
        value: function removeItem(i) {
          this.dateTimeitems = this.locationFormGroup.get('dateTimeitems');
          this.dateTimeitems.removeAt(i);
        }
      }, {
        key: "doctorSelectEvent",
        value: function doctorSelectEvent(item) {
          var _this2 = this;

          if (item) {
            this.locationFormGroup.get('doctorID').patchValue(item['_id']);
            this.locationObject.doctorID = item['_id'];
            this.dataService.fetchAttendantList({
              doctorID: this.locationObject.doctorID
            }).then(function (result) {
              _this2.attendantList = result.map(function (element) {
                return element;
              });
            }, function (err) {//console.log(err);
            }); //console.log(" inside locationSelectEvent "+JSON.stringify(item))
          } // do something with selected item

        }
      }, {
        key: "doctorLocationSearch",
        value: function doctorLocationSearch(val) {
          var _this3 = this;

          //console.log(" inside onChangePatientSearch val "+val)
          // if(val && val.length >2 ){
          var data = {
            name: val
          };
          this.dataService.fetchAllDoctors(data).then(function (result) {
            _this3.doctorList = result.map(function (element) {
              return element;
            });
          }, function (err) {//console.log(err);
          }); // }
        }
      }, {
        key: "openAddLocationDialog",
        value: function openAddLocationDialog() {
          this.mode = "add";
          this.locationFormGroup = this._fb.group({
            doctorID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.doctorID, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            doctorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            attendantID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.attendantID, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.city, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.area),
            nearByLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.nearByLocation),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.address, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.state, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            slot: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.slot),
            dateTimeitems: this._fb.array([this.createdateTimeItem()])
          });
          this.dateTimeitems = this.locationFormGroup.get('dateTimeitems'); // 
          //this.dateTimeitems.push({})

          this.locationObject = Object.assign({}, this.locationObjectBase);
          this.modalReference = this.modal.open(this.locationFormModal);
        }
      }, {
        key: "getPatient",
        value: function getPatient() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!localStorage.getItem('isLoggedin')) {
            this.router.navigate(["/login"]);
          } //this.pageSize = Config.RECORDSIZE;
          //this.pageNo = 1


          this.fetchLocationsCount();
          this.fetchLocations(); //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
        }
      }, {
        key: "save",
        value: function save() {
          var _this4 = this;

          //alert("mode: "+this.mode)
          if (!this.locationFormGroup.valid) {
            this.submitAttempt = true;
            this.validateFields(this.locationFormGroup.controls);
            return;
          }

          this.locationObject.addByID = this.user['_id'];
          var dateTime = [];

          for (var i = 0; i < this.dateTimeitems.length; i++) {
            var formObject = this.dateTimeitems.at(i); // if(formObject && formObject.get('time').value != undefined && formObject.get('date').value != undefined ){

            console.log("time before conversion**" + JSON.stringify(formObject.get('time').value));
            var time = this.convertTimeFormogo(formObject.get('time').value);
            console.log("time after conversion **" + time);
            console.log(" date before conversion **" + JSON.stringify(formObject.get('date').value));
            var convertDate = this.fromJsDateToLocationdateTimeFormat(formObject.get('date').value);
            console.log("convertDate **" + convertDate);
            dateTime.push({
              date: convertDate,
              time: time
            }); // }
          }

          this.locationObject.dateTime = dateTime;

          if (this.mode == "add") {
            delete this.locationObject['doctor'];
            console.log("this.locationObject for add == " + JSON.stringify(this.locationObject));
            this.dataService.addLocation(this.locationObject).then(function (result) {
              //  console.log("result after adduser == "+JSON.stringify(result))
              _this4.fetchLocations();

              _this4.mode = "add";

              _this4.closeModal();

              _this4.form_fill_failure_msg = "";

              _this4.toastr.successToastr('New location is added successfully');
            }, function (err) {
              console.log(err);
            });
          }

          if (this.mode == "edit") {
            //delete this.locationObject['patient']
            delete this.locationObject['doctor'];
            this.locationObject['practiceLocationId'] = this.locationObject['_id'];
            console.log("this.locationObject for edit == " + JSON.stringify(this.locationObject));
            this.dataService.updateLocation(this.locationObject).then(function (result) {
              //  console.log("****** updatelocation result   ===== **"+JSON.stringify(result))
              //this.loading = false;
              _this4.mode = "add";

              _this4.fetchLocations();

              _this4.closeModal();

              _this4.form_fill_failure_msg = "";

              _this4.toastr.successToastr('location is updated successfully');
            }, function (err) {
              _this4.mode = "add"; //this.loading = false;

              console.log(err);
            });
          }
        }
      }, {
        key: "openForeditLocation",
        value: function openForeditLocation(user) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this5 = this;

            var dateTimeArray, i, dateTime, time, convertDate, date, earlierAttendent;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.locationObject = Object.assign({}, user); //console.log("dateTimeArray LENGTH **"+dateTimeArray.length)

                    this.locationFormGroup = this._fb.group({
                      doctorID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.doctorID, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
                      doctorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                      attendantID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.attendantID, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
                      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.name, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
                      city: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.city, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
                      area: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.area),
                      nearByLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.nearByLocation),
                      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.address, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
                      state: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.state, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
                      slot: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.locationObject.slot),
                      dateTimeitems: this._fb.array([this.createdateTimeItem()])
                    });
                    console.log("this.locationObject ==" + JSON.stringify(this.locationObject));
                    dateTimeArray = [];
                    this.dateTimeitems = this.locationFormGroup.get('dateTimeitems');
                    this.dateTimeitems.removeAt(0);

                    for (i in this.locationObject.dateTime) {
                      dateTime = this.locationObject.dateTime[i];
                      time = this.backTONgTImeFOrmat(dateTime.time);
                      console.log("time **" + JSON.stringify(time));
                      convertDate = this.convertFromddmmyyy(dateTime.date);
                      console.log("convertDate **" + convertDate);
                      date = this.datePipe.transform(convertDate, 'yyyy-MM-dd');
                      dateTimeArray.push({
                        date: date,
                        time: time
                      }); //this.dateTimeitems.push({date:date,time:time})

                      this.dateTimeitems.push(this._fb.group({
                        date: date,
                        time: time
                      }));
                    }

                    console.log("dateTimeArray LENGTH **" + dateTimeArray.length);
                    earlierAttendent = this.locationObject.attendantID;
                    _context.next = 11;
                    return this.fetchDoctrById(this.locationObject.doctorID);

                  case 11:
                    this.doctorName = _context.sent;
                    this.dataService.fetchAttendantList({
                      doctorID: this.locationObject.doctorID
                    }).then(function (result) {
                      _this5.attendantList = result.map(function (element) {
                        return element;
                      });
                    }, function (err) {//console.log(err);
                    }); //this.locationObject.attendantID = earlierAttendent
                    //this.locationFormGroup.get('dateTimeitems').patchValue(dateTimeArray)
                    //addItem

                    this.mode = "edit";
                    this.modalReference = this.modal.open(this.locationFormModal); //this.userObject.userId = user._id
                    //this.role = user.role

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "fetchDoctrById",
        value: function fetchDoctrById(doctorId) {
          var _this6 = this;

          var data = {
            doctorId: doctorId
          };

          try {
            return new Promise(function (resolve) {
              _this6.dataService.fetchDoctrById(data).then(function (result) {
                //console.log("****** location  ===== **"+JSON.stringify(result))
                resolve(result['name']);
              }, function (err) {
                resolve(''); //this.loading = false;
                //console.log(err);
              });
            });
          } catch (error) {//console.log('Error', error);
          }
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          console.log("****** this.event   ===== **" + event);
          this.pageNo = event;
          this.applyFilter();
        }
      }, {
        key: "userKindChange",
        value: function userKindChange() {
          this.pageNo = 1;
          this.applyFilter();
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          this.fetchLocations();
        }
      }, {
        key: "onChangePage",
        value: function onChangePage(pageOfItems) {
          // update current page of items
          this.pageOfItems = pageOfItems;
          this.pageNo = 1;
        }
      }, {
        key: "fetchPatients",
        value: function fetchPatients() {
          var _this7 = this;

          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize
          };
          this.dataService.fetchPatients(data).then(function (result) {
            _this7.normalFiltereduserListArr = [];
            _this7.normalFiltereduserListArr = result.map(function (element) {
              return element;
            }); // console.log("****** this.normalFiltereduserListArr   ===== **"+JSON.stringify(this.normalFiltereduserListArr))

            _this7.loading = false;
          }, function (err) {
            _this7.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "fetchLocationsCount",
        value: function fetchLocationsCount() {
          var _this8 = this;

          //  this.pageNo = 1
          //  this.pageSize = 10
          this.dataService.fetchLocationsCount().then(function (result) {
            console.log("****** fetchlocationsCount result   ===== **" + JSON.stringify(result));
            _this8.totalDocRecords = result;
            console.log("****** this.totalDocRecords ===== **" + _this8.totalDocRecords);
            _this8.loading = false;
          }, function (err) {
            _this8.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "fetchLocations",
        value: function fetchLocations() {
          var _this9 = this;

          //  this.pageNo = 1
          //this.pageSize = 10
          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize
          };
          this.dataService.fetchLocations(data).then(function (result) {
            _this9.normalFiltereduserListArr = [];
            _this9.normalFiltereduserListArr = result.map(function (element) {
              return element;
            }); //console.log("****** this.fetchLocations   ===== **"+JSON.stringify(this.normalFiltereduserListArr))

            _this9.normalFiltereduserListArr.forEach(function (location, index) {
              console.log("****** active   ===== **" + location.active);
            });

            _this9.loading = false;
          }, function (err) {
            _this9.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(value, userInfo) {
          var _this10 = this;

          // userInfo.active = value
          //  console.log("****** userInfo   ===== **"+JSON.stringify(userInfo))
          var data = {};
          userInfo.active = !userInfo.active;
          console.log("******  userInfo.active   ===== **" + userInfo.active);
          userInfo.locationId = userInfo._id;
          data['locationId'] = userInfo._id;
          data['active'] = userInfo.active;
          console.log("****** userInfo   ===== **" + JSON.stringify(data));
          this.dataService.updateLocation(data).then(function (result) {
            //  console.log("****** updatelocation result   ===== **"+JSON.stringify(result))
            _this10.fetchLocations();

            _this10.loading = false;
          }, function (err) {
            _this10.loading = false;
            console.log(err);
          });
          this.toastr.successToastr('Location record updated successfully');
        }
      }]);

      return LocationComponent;
    }(src_BaseComponent__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]);

    LocationComponent.??fac = function LocationComponent_Factory(t) {
      return new (t || LocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_data_access__WEBPACK_IMPORTED_MODULE_9__["DataAccess"]));
    };

    LocationComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
      type: LocationComponent,
      selectors: [["app-location"]],
      viewQuery: function LocationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????viewQuery"](_c3, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.fileInputDemoPhoto = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.accordionComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.locationFormModal = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????InheritDefinitionFeature"]],
      decls: 32,
      vars: 8,
      consts: [[3, "heading", "icon"], [1, "col-md-12"], ["class", "col-md-12 text-right ", 4, "ngIf"], [1, "card-body", "table-responsive", "marginLeft"], [1, "pb-3"], [1, "table", "table-striped", "table-bordered", "table-sm"], [4, "ngIf"], [1, "col-md-12", "text-left", "clearfix"], ["id", "forlocation1", "directionLinks", "true", "maxSize", "9", "directionLinks", "true", "autoHide", "true", "responsive", "true", "previousLabel", "Prev", "nextLabel", "Next", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", "screenReaderCurrentLabel", "You're on page", 1, "my-pagination", "marginLeft", 3, "pageChange", "pageBoundsCorrection"], ["locationFormModal", ""], [1, "col-md-12", "text-right"], [1, "content"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [4, "ngFor", "ngForOf"], [1, "table", "borderless"], [1, "customdiv"], [3, "ngModel", "ngModelChange", "change"], [1, "btn", "btn-dark", 3, "click"], ["colspan", "7", "align", "center"], [1, "custom_timebox", "p-0", 3, "formGroup"], [1, "modal-header", "py-1"], [1, "modal-title", "headerTitle", "mb-0"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "row"], [1, "col-md-12", "form-group"], ["for", "name", 1, "labelTitles"], [1, "required-asterisk"], [1, "col-md-12", "marginTop"], ["formControlName", "name", "placeholder", "Enter name", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], ["formControlName", "city", "placeholder", "Enter city", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], ["formControlName", "area", "placeholder", "Enter Area", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], ["formControlName", "address", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "nearByLocation", "placeholder", "Enter NearByLocation", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], ["formArrayName", "dateTimeitems", 4, "ngFor", "ngForOf"], [1, "col-md-12", "text-right", "mt-4"], [1, "form-group"], [1, "labelTitles"], ["formControlName", "state", "name", "state", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "labelValue", 3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "doctorName", 3, "data", "ngModel", "searchKeyword", "itemTemplate", "notFoundTemplate", "ngModelChange", "selected", "inputChanged"], ["id", "itemTemplate"], ["itemTemplate", ""], ["notFoundTemplate", ""], ["formControlName", "attendantID", "name", "attendant", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "slot", "placeholder", "Enter slot", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "click"], ["class", "cutomeerrortext", 4, "ngIf"], ["formArrayName", "dateTimeitems"], [3, "formGroupName"], [1, "divider", "mt-3"], ["type", "date", "formControlName", "date", "placeholder", "Enter date", 1, "form-control"], [1, "labelValue"], ["formControlName", "time", 3, "meridian"], [1, "row", "text-right", "ml-2"], [1, "labelValue", 3, "value"], [3, "innerHTML"], [1, "cutomeerrortext"], [1, "redcolor", "ml-2"], [1, "fa", "fas", "fa-exclamation"]],
      template: function LocationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-page-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, LocationComponent_div_3_Template, 4, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Location Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Doctor Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "AttendantID");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Near By Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Slot");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, LocationComponent_th_21_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "Created Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](24, LocationComponent_th_24_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, LocationComponent_tbody_26_Template, 3, 8, "tbody", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "pagination-controls", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("pageChange", function LocationComponent_Template_pagination_controls_pageChange_28_listener($event) {
            return ctx.pageChanged($event);
          })("pageBoundsCorrection", function LocationComponent_Template_pagination_controls_pageBoundsCorrection_28_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](29, LocationComponent_tbody_29_Template, 4, 0, "tbody", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](30, LocationComponent_ng_template_30_Template, 95, 19, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("heading", "Practice Location")("icon", "fa-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.user.role.doctor.location.create);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" List of existing ", ctx.userKind, "s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.user.role.doctor.location.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.user.role.doctor.location.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length == 0);
        }
      },
      directives: [_shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_12__["UiSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutocompleteComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_x"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginatePipe"]],
      styles: ["span.bootstrap-switch-handle-off.bootstrap-switch-default[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.profile-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.borderless[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .borderless[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n  width: 100%;\n}\n\n.labelTitles[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.marginLeft[_ngcontent-%COMP%] {\n  margin-left: -25px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  border-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.clearfix[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n}\n\n.redcolor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userInfo[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n\n.userInfo[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 95% !important;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .usermngtableinfo[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.no-resize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.m-20[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.no-focus[_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0FDR0o7O0FEREE7RUFDSSw4QkFBQTtFQUVBLFdBQUE7QUNHSjs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNJSjs7QURGSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNJTjs7QURBRTtFQUNFLGtCQUFBO0VBRUEsZUFBQTtBQ0VKOztBREFBO0VBRUksVUFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksZ0NBQUE7QUNJSjs7QURGQTtFQUNJLG1CQUFBO0FDS0o7O0FESEE7RUFDSSxxQkFBQTtBQ01KOztBREpBO0VBQ0ksbUJBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDUUo7O0FETkE7RUFDSSxXQUFBO0FDU0o7O0FEUEE7RUFDSSxrQkFBQTtBQ1VKOztBRFJBO0VBQ0UsZ0JBQUE7QUNXRjs7QURUQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ1lGOztBRFZBO0VBQ0ksWUFBQTtBQ2FKOztBRFhBO0VBQ0ksWUFBQTtBQ2NKOztBRFpBO0VBQ0ksYUFBQTtBQ2VKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Bhbi5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYuYm9vdHN0cmFwLXN3aXRjaC1kZWZhdWx0IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4ucHJvZmlsZS1pbWFnZS13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5ib3JkZXJsZXNzIHRkLCAuYm9yZGVybGVzcyB0aCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmRpdmlkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgLy9tYXJnaW4tdG9wOjFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbi5sYWJlbFRpdGxlc3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5tYXJnaW5MZWZ0e1xyXG4gICAgbWFyZ2luLWxlZnQ6LTI1cHhcclxufVxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbiAgICAuZWRpdC1pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgcGFkZGluZy10b3A6N3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjJweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgLmNsZWFyZml4IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4ucmVkY29sb3J7XHJcbiAgICBcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3IgOiBwb2ludGVyO1xyXG59XHJcbi51c2VySW5mbyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4udXNlckluZm86bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi5tb2RhbC1kaWFsb2cgeyBcclxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxufVxyXG4udXNlcm1uZ3RhYmxlIC51c2VybW5ndGFibGVpbmZve1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4udXNlcm1uZ3RhYmxlIC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHRkIGltZyB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxufSAgXHJcbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udXNlcm1uZ3RhYmxlIC5hY2NvcmRpb24gLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDA7XHJcbn1cclxuaDMge1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxucHJlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLm5vLXJlc2l6ZSB7XHJcbiAgICByZXNpemUgOiBub25lO1xyXG59XHJcbi5tLTIwIHtcclxuICAgIG1hcmdpbiA6IDIwcHg7XHJcbn1cclxuLm5vLWZvY3VzIHtcclxuICAgIG91dGxpbmUgOiBub25lO1xyXG59Iiwic3Bhbi5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYuYm9vdHN0cmFwLXN3aXRjaC1kZWZhdWx0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucHJvZmlsZS1pbWFnZS13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYm9yZGVybGVzcyB0ZCwgLmJvcmRlcmxlc3MgdGgge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5kaXZpZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxhYmVsVGl0bGVzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXJnaW5MZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xufVxuXG4ucHJvZmlsZS1pbWFnZSB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiAyMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbWFnZSAuZWRpdC1pY29uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiA3cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xufVxuXG4uY2xlYXJmaXgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJlZGNvbG9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VySW5mbyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4udXNlckluZm86bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5tb2RhbC1kaWFsb2cge1xuICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG59XG5cbi51c2VybW5ndGFibGUgLnVzZXJtbmd0YWJsZWluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4udXNlcm1uZ3RhYmxlIC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHRkIGltZyB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXNlcm1uZ3RhYmxlIC5hY2NvcmRpb24gLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDEuMjVyZW0gMDtcbn1cblxuaDMge1xuICBtYXJnaW46IDAgMCAxMHB4O1xufVxuXG5wcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubm8tcmVzaXplIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG4ubS0yMCB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLm5vLWZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](LocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-location',
          templateUrl: './location.component.html',
          styleUrls: ['./location.component.scss'],
          providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]]
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_services_data_access__WEBPACK_IMPORTED_MODULE_9__["DataAccess"]
        }];
      }, {
        fileInputDemoPhoto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['fileInputDemoPhoto']
        }],
        accordionComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['acc']
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['content']
        }],
        locationFormModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['locationFormModal']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layout/location/location.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/layout/location/location.module.ts ***!
    \****************************************************/

  /*! exports provided: LocationModule */

  /***/
  function srcAppLayoutLocationLocationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationModule", function () {
      return LocationModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toggle-switch */
    "./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angularx-flatpickr */
    "./node_modules/angularx-flatpickr/__ivy_ngcc__/fesm2015/angularx-flatpickr.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _location_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./location-routing.module */
    "./src/app/layout/location/location-routing.module.ts");
    /* harmony import */


    var _location_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./location.component */
    "./src/app/layout/location/location.component.ts");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js"); //import { LoadingModule } from 'ngx-loading';
    //import {NgxToggleModule} from "ngx-toggle";
    //import {DataTableModule, SharedModule, InputTextModule} from 'primeng/primeng';
    //import {PaginatorModule} from 'primeng/paginator';
    //import {DropdownModule} from 'primeng/dropdown';


    var LocationModule = function LocationModule() {
      _classCallCheck(this, LocationModule);
    };

    LocationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: LocationModule
    });
    LocationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function LocationModule_Factory(t) {
        return new (t || LocationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _location_routing_module__WEBPACK_IMPORTED_MODULE_10__["LocationRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
        animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff',
        secondaryColour: '#ffffff',
        tertiaryColour: '#ffffff'
      }), ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(), //  DropdownModule,
      //PaginatorModule,
      angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LocationModule, {
        declarations: [_location_component__WEBPACK_IMPORTED_MODULE_11__["LocationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _location_routing_module__WEBPACK_IMPORTED_MODULE_10__["LocationRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LocationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _location_routing_module__WEBPACK_IMPORTED_MODULE_10__["LocationRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
            animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
          }), ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(), //  DropdownModule,
          //PaginatorModule,
          angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
          })],
          declarations: [_location_component__WEBPACK_IMPORTED_MODULE_11__["LocationComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=location-location-module-es5.js.map