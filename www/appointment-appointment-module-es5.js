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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-appointment-module"], {
  /***/
  "./src/app/layout/appointment/appointment-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/layout/appointment/appointment-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: AppointmentRoutingModule */

  /***/
  function srcAppLayoutAppointmentAppointmentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppointmentRoutingModule", function () {
      return AppointmentRoutingModule;
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


    var _appointment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./appointment.component */
    "./src/app/layout/appointment/appointment.component.ts");

    var routes = [{
      path: '',
      component: _appointment_component__WEBPACK_IMPORTED_MODULE_2__["AppointmentComponent"]
    }];

    var AppointmentRoutingModule = function AppointmentRoutingModule() {
      _classCallCheck(this, AppointmentRoutingModule);
    };

    AppointmentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppointmentRoutingModule
    });
    AppointmentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppointmentRoutingModule_Factory(t) {
        return new (t || AppointmentRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppointmentRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentRoutingModule, [{
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
  "./src/app/layout/appointment/appointment.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/layout/appointment/appointment.component.ts ***!
    \*************************************************************/

  /*! exports provided: AppointmentComponent */

  /***/
  function srcAppLayoutAppointmentAppointmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function () {
      return AppointmentComponent;
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
    var _c1 = ["itemTemplate"];
    var _c2 = ["acc"];
    var _c3 = ["content"];
    var _c4 = ["appointmentFormModal"];

    function AppointmentComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentComponent_div_3_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r175);

          var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r174.openAddAppointmentDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Raise Appointment Request");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AppointmentComponent_th_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enable/Disable");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AppointmentComponent_th_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AppointmentComponent_tbody_26_tr_1_td_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ui-switch", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppointmentComponent_tbody_26_tr_1_td_29_Template_ui_switch_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r182);

          var obj_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          return obj_r177.active = $event;
        })("change", function AppointmentComponent_tbody_26_tr_1_td_29_Template_ui_switch_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r182);

          var obj_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r183.updateStatus($event, obj_r177);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var obj_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", obj_r177.active);
      }
    }

    function AppointmentComponent_tbody_26_tr_1_td_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentComponent_tbody_26_tr_1_td_32_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r188);

          var obj_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r186.openForeditappointment(obj_r177);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AppointmentComponent_tbody_26_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Area");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "City");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AppointmentComponent_tbody_26_tr_1_td_29_Template, 2, 1, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AppointmentComponent_tbody_26_tr_1_td_32_Template, 3, 0, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var obj_r177 = ctx.$implicit;

        var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r177 == null ? null : obj_r177.location == null ? null : obj_r177.location.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r177 == null ? null : obj_r177.location == null ? null : obj_r177.location.area);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r177 == null ? null : obj_r177.location == null ? null : obj_r177.location.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r177 == null ? null : obj_r177.patient == null ? null : obj_r177.patient.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r176.convertToHumanDate(obj_r177.appointmentDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r177.appointmentTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r177.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r176.user.role.doctor.appointment.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r176.convertToHumanDate(obj_r177.createdDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r176.user.role.doctor.appointment.edit);
      }
    }

    var _c5 = function _c5(a1, a2, a3) {
      return {
        id: "forappintment",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    function AppointmentComponent_tbody_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppointmentComponent_tbody_26_tr_1_Template, 33, 10, "tr", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r170.normalFiltereduserListArr, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](4, _c5, ctx_r170.pageSize, ctx_r170.pageNo, ctx_r170.totalDocRecords)));
      }
    }

    function AppointmentComponent_tbody_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No record available");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AppointmentComponent_ng_template_30_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 44);
      }

      if (rf & 2) {
        var item_r206 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r206.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function AppointmentComponent_ng_template_30_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 44);
      }

      if (rf & 2) {
        var notFound_r207 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", notFound_r207, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function AppointmentComponent_ng_template_30_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 44);
      }

      if (rf & 2) {
        var item_r208 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r208.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function AppointmentComponent_ng_template_30_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 44);
      }

      if (rf & 2) {
        var notFound_r209 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", notFound_r209, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function AppointmentComponent_ng_template_30_ng_template_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 44);
      }

      if (rf & 2) {
        var item_r210 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r210.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function AppointmentComponent_ng_template_30_ng_template_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 44);
      }

      if (rf & 2) {
        var notFound_r211 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", notFound_r211, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function AppointmentComponent_ng_template_30_div_43_Template(rf, ctx) {
      if (rf & 1) {
        var _r213 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppointmentComponent_ng_template_30_div_43_Template_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r213);

          var ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r212.appointmentObject.status = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Confirm");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Reschedule");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Reject");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Requested");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r202.appointmentObject.status);
      }
    }

    function AppointmentComponent_ng_template_30_div_44_Template(rf, ctx) {
      if (rf & 1) {
        var _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppointmentComponent_ng_template_30_div_44_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r215);

          var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r214.appointmentObject.status = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r203.appointmentObject.status);
      }
    }

    function AppointmentComponent_ng_template_30_div_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid time");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AppointmentComponent_ng_template_30_p_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\xA0Fix The Error : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r205.form_fill_failure_msg, " ");
      }
    }

    function AppointmentComponent_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r217 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentComponent_ng_template_30_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r216.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Select Patient ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ng-autocomplete", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppointmentComponent_ng_template_30_Template_ng_autocomplete_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r218.paientName = $event;
        })("selected", function AppointmentComponent_ng_template_30_Template_ng_autocomplete_selected_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r219.patientSelectEvent($event);
        })("inputChanged", function AppointmentComponent_ng_template_30_Template_ng_autocomplete_inputChanged_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r220.onChangePatientSearch($event);
        })("inputFocused", function AppointmentComponent_ng_template_30_Template_ng_autocomplete_inputFocused_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r221.onFocusedPAtient($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppointmentComponent_ng_template_30_ng_template_14_Template, 1, 1, "ng-template", 29, 30, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AppointmentComponent_ng_template_30_ng_template_16_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Select Location ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ng-autocomplete", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppointmentComponent_ng_template_30_Template_ng_autocomplete_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r222.locationName = $event;
        })("selected", function AppointmentComponent_ng_template_30_Template_ng_autocomplete_selected_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r223.locationSelectEvent($event);
        })("inputChanged", function AppointmentComponent_ng_template_30_Template_ng_autocomplete_inputChanged_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r224.onChangeLocationSearch($event);
        })("inputFocused", function AppointmentComponent_ng_template_30_Template_ng_autocomplete_inputFocused_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r225.onFocusedLocation($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AppointmentComponent_ng_template_30_ng_template_24_Template, 1, 1, "ng-template", 29, 30, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AppointmentComponent_ng_template_30_ng_template_26_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Select Doctor ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ng-autocomplete", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppointmentComponent_ng_template_30_Template_ng_autocomplete_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r226.doctorName = $event;
        })("selected", function AppointmentComponent_ng_template_30_Template_ng_autocomplete_selected_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r227.doctorSelectEvent($event);
        })("inputChanged", function AppointmentComponent_ng_template_30_Template_ng_autocomplete_inputChanged_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r228.doctorLocationSearch($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, AppointmentComponent_ng_template_30_ng_template_34_Template, 1, 1, "ng-template", 29, 30, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, AppointmentComponent_ng_template_30_ng_template_36_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Status ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, AppointmentComponent_ng_template_30_div_43_Template, 10, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, AppointmentComponent_ng_template_30_div_44_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Date Of Appointment");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppointmentComponent_ng_template_30_Template_input_ngModelChange_51_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r229.appointmentObject.appointmentDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Appointment Time");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ngb-timepicker", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppointmentComponent_ng_template_30_Template_ngb_timepicker_ngModelChange_56_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r230.appointmentObject.appointmentTime = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, AppointmentComponent_ng_template_30_div_57_Template, 2, 0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentComponent_ng_template_30_Template_button_click_59_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r231.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppointmentComponent_ng_template_30_Template_button_click_61_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r217);

          var ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r232.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, AppointmentComponent_ng_template_30_p_63_Template, 6, 1, "p", 43);
      }

      if (rf & 2) {
        var _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

        var _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

        var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r173.appointmentFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 25, ctx_r173.mode), " Appointment");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r173.patientList)("ngModel", ctx_r173.paientName)("searchKeyword", ctx_r173.keyword)("itemTemplate", _r190)("notFoundTemplate", _r192);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r173.locationList)("ngModel", ctx_r173.locationName)("searchKeyword", ctx_r173.keywordLocation)("itemTemplate", _r190)("notFoundTemplate", _r192);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r173.doctorList)("ngModel", ctx_r173.doctorName)("searchKeyword", ctx_r173.keywordDoctor)("itemTemplate", _r190)("notFoundTemplate", _r192);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r173.mode == "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r173.mode == "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r173.appointmentObject.appointmentDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r173.appointmentObject.appointmentTime)("meridian", ctx_r173.openingMeridian);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r173.appointmentFormGroup.controls.appointmentTime.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r173.appointmentFormGroup.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r173.submitAttempt);
      }
    }

    var AppointmentComponent =
    /*#__PURE__*/
    function (_src_BaseComponent__W) {
      _inherits(AppointmentComponent, _src_BaseComponent__W);

      var _super = _createSuper(AppointmentComponent);

      function AppointmentComponent(datePipe, router, modal, toastr, _fb, dataService) {
        var _this;

        _classCallCheck(this, AppointmentComponent);

        _this = _super.call(this, router);
        _this.datePipe = datePipe;
        _this.router = router;
        _this.modal = modal;
        _this.toastr = toastr;
        _this._fb = _fb;
        _this.dataService = dataService;
        _this.loading = true;
        _this.keyword = 'name';
        _this.disableSatusDropDown = false;
        _this.data = [{
          id: 1,
          name: 'Usa'
        }, {
          id: 2,
          name: 'England'
        }];
        _this.keywordLocation = "name";
        _this.keywordDoctor = "name";
        _this.patientList = [];
        _this.locationList = [];
        _this.doctorList = [];
        _this.userKind = "appointment";
        _this.normalFiltereduserListArr = [];
        _this.items = [];
        _this.pageSize = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].RECORDSIZE;
        _this.pageNo = 1;
        _this.tempArray = [];
        _this.appointmentObject = {
          locationId: "",
          patientId: "",
          doctorId: "",
          appointmentDate: null,
          appointmentTime: "10:30 am",
          status: "Requested",
          active: true
        };
        _this.appointmentObjectBase = {
          locationId: "",
          patientId: "",
          doctorId: "",
          appointmentDate: null,
          appointmentTime: "10:30 am",
          status: "Requested",
          active: true
        };
        _this.openingMeridian = true; //  this.customAppointmenttime.hour = 9
        // this.customAppointmenttime.minute = 10

        if (!_this.user.role.doctor.appointment.view) {
          return _possibleConstructorReturn(_this);
        }

        if (!localStorage.getItem('isLoggedin')) {
          _this.router.navigate(["/login"]);
        }

        _this.appointmentFormGroup = _fb.group({
          locationId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.appointmentObject.locationId, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          locationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
          doctorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.appointmentObject.doctorId, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          doctorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
          patientId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.appointmentObject.patientId, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          patientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
          appointmentDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.appointmentObject.appointmentDate, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          appointmentTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.appointmentObject.appointmentTime, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          status: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](_this.appointmentObject.status)
        }); //this.appointmentFormGroup.valueChanges.subscribe(data => //console.log('form changes', data));

        _this.loading = false;

        _this.fetchAppointments();

        return _this;
      }

      _createClass(AppointmentComponent, [{
        key: "getLocation",
        value: function getLocation() {}
      }, {
        key: "patientSelectEvent",
        value: function patientSelectEvent(item) {
          if (item) {
            this.appointmentFormGroup.get('patientId').patchValue(item['_id']);
            this.appointmentObject.patientId = item['_id']; ////console.log(" inside patientSelectEvent "+JSON.stringify(item))
            //console.log(" inside patientSelectEvent "+JSON.stringify(item))
          } // do something with selected item

        }
      }, {
        key: "onChangePatientSearch",
        value: function onChangePatientSearch(val) {
          var _this2 = this;

          //console.log(" inside onChangePatientSearch val "+val)
          if (val && val.length > 2) {
            var data = {
              name: val
            };
            this.dataService.fetchAllPatients(data).then(function (result) {
              _this2.patientList = result.map(function (element) {
                return element;
              });
            }, function (err) {//console.log(err);
            });
          }
        }
      }, {
        key: "locationSelectEvent",
        value: function locationSelectEvent(item) {
          if (item) {
            this.appointmentFormGroup.get('locationId').patchValue(item['_id']);
            this.appointmentObject.locationId = item['_id']; //console.log(" inside locationSelectEvent "+JSON.stringify(item))
          } // do something with selected item

        }
      }, {
        key: "onChangeLocationSearch",
        value: function onChangeLocationSearch(val) {
          var _this3 = this;

          //console.log(" inside onChangePatientSearch val "+val)
          // if(val && val.length >2 ){
          var data = {
            name: val
          };
          this.dataService.fetchAllLocations(data).then(function (result) {
            _this3.locationList = result.map(function (element) {
              return element;
            });
          }, function (err) {//console.log(err);
          }); // }
        }
      }, {
        key: "doctorSelectEvent",
        value: function doctorSelectEvent(item) {
          if (item) {
            this.appointmentFormGroup.get('doctorId').patchValue(item['_id']);
            this.appointmentObject.doctorId = item['_id']; //console.log(" inside locationSelectEvent "+JSON.stringify(item))
          } // do something with selected item

        }
      }, {
        key: "doctorLocationSearch",
        value: function doctorLocationSearch(val) {
          var _this4 = this;

          //console.log(" inside onChangePatientSearch val "+val)
          // if(val && val.length >2 ){
          var data = {
            name: val
          };
          this.dataService.fetchAllDoctors(data).then(function (result) {
            _this4.doctorList = result.map(function (element) {
              return element;
            });
          }, function (err) {//console.log(err);
          }); // }
        }
      }, {
        key: "onFocusedLocation",
        value: function onFocusedLocation(e) {//console.log(" inside onFocusedLocation e "+e)
          // do something w
        }
      }, {
        key: "onFocusedPAtient",
        value: function onFocusedPAtient(e) {//console.log(" inside onFocusedPAtient e "+e)
          // do something w
        }
      }, {
        key: "openAddAppointmentDialog",
        value: function openAddAppointmentDialog() {
          this.mode = "add";
          this.disableSatusDropDown = true;
          this.appointmentObject = Object.assign({}, this.appointmentObjectBase);
          this.modalReference = this.modal.open(this.appointmentFormModal);
        }
      }, {
        key: "getPatient",
        value: function getPatient() {}
        /*
        ngAfterViewInit(){
          this.dataService.fetchAllPatients().then((result:[]) => {
            this.patientList = result.map(element => element)
          }, (err) => {
              //console.log(err);
          });
             this.dataService.fetchAllLocations().then((result:[]) => {
            this.locationList = result.map(element => element)
          }, (err) => {
          //console.log(err);
          });
        }
        */

      }, {
        key: "openAddappointmentDialog",
        value: function openAddappointmentDialog() {
          this.mode = "add";
          this.paientName = '';
          this.locationName = '';
          this.doctorName = '';
          this.modalReference = this.modal.open(this.appointmentFormModal);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!localStorage.getItem('isLoggedin')) {
            this.router.navigate(["/login"]);
          } //this.pageSize = Config.RECORDSIZE;
          //this.pageNo = 1


          this.fetchAppointmentsCount();
          this.fetchAppointments(); //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
        }
      }, {
        key: "save",
        value: function save() {
          var _this5 = this;

          //alert("mode: "+this.mode)
          if (!this.appointmentFormGroup.valid) {
            this.submitAttempt = true;
            this.validateFields(this.appointmentFormGroup.controls);
            return;
          }

          if (this.appointmentObject.appointmentDate && this.appointmentObject.appointmentDate != "") {
            //      this.appointmentObject.dateOfBirth = this.fromJsDateToMongoDate(this.appointmentFormGroup.controls.dateOfBirth.value)
            this.appointmentObject.appointmentDate = this.fromJsDateToMongoDate(this.appointmentObject.appointmentDate);
          }

          this.appointmentObject.appointmentTime = this.convertTimeFormogo(this.appointmentObject.appointmentTime);

          if (this.mode == "add") {
            this.appointmentObject.status = "Requested"; //console.log("this.appointmentObject for add == "+JSON.stringify(this.appointmentObject))

            this.dataService.addAppointment(this.appointmentObject).then(function (result) {
              //  //console.log("result after adduser == "+JSON.stringify(result))
              _this5.fetchAppointments();

              _this5.mode = "add";

              _this5.closeModal();

              _this5.form_fill_failure_msg = "";

              _this5.toastr.successToastr('New appointment is added successfully');
            }, function (err) {//console.log(err);
            });
          }

          if (this.mode == "edit") {
            delete this.appointmentObject['patient'];
            delete this.appointmentObject['location']; //  this.appointmentObject['appointmentId'] = this.appointmentObject['_id']
            //console.log("this.appointmentObject for edit == "+JSON.stringify(this.appointmentObject))

            this.dataService.updateAppointment(this.appointmentObject).then(function (result) {
              //  //console.log("****** updateappointment result   ===== **"+JSON.stringify(result))
              //this.loading = false;
              _this5.mode = "add";

              _this5.fetchAppointments();

              _this5.closeModal();

              _this5.form_fill_failure_msg = "";

              _this5.toastr.successToastr('appointment is updated successfully');
            }, function (err) {
              _this5.mode = "add"; //this.loading = false;
              //console.log(err);
            });
          }
        }
      }, {
        key: "fetchPatientById",
        value: function fetchPatientById(patientId) {
          var _this6 = this;

          var data = {
            patientId: patientId
          };

          try {
            return new Promise(function (resolve) {
              _this6.dataService.fetchPatientById(data).then(function (result) {
                //console.log("****** patient  ===== **"+JSON.stringify(result))
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
        key: "fetchLocationById",
        value: function fetchLocationById(locationId) {
          var _this7 = this;

          var data = {
            practiceLocationId: locationId
          };

          try {
            return new Promise(function (resolve) {
              _this7.dataService.fetchLocationById(data).then(function (result) {
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
        key: "fetchDoctrById",
        value: function fetchDoctrById(doctorId) {
          var _this8 = this;

          var data = {
            doctorId: doctorId
          };

          try {
            return new Promise(function (resolve) {
              _this8.dataService.fetchDoctrById(data).then(function (result) {
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
        key: "openForeditappointment",
        value: function openForeditappointment(user) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.mode = "edit";
                    this.disableSatusDropDown = false;
                    this.paientName = '';
                    this.locationName = '';
                    this.doctorName = '';
                    this.appointmentObject = Object.assign({}, user); //let itemTemplateRefDiv = document.getElementById('itemTemplate');
                    //itemTemplateRefDiv.innerHTML = 'madan kanto';

                    _context.next = 8;
                    return this.fetchPatientById(this.appointmentObject.patientId);

                  case 8:
                    this.paientName = _context.sent;
                    _context.next = 11;
                    return this.fetchLocationById(this.appointmentObject.locationId);

                  case 11:
                    this.locationName = _context.sent;
                    _context.next = 14;
                    return this.fetchDoctrById(this.appointmentObject.doctorId);

                  case 14:
                    this.doctorName = _context.sent;
                    //this.patientList.push({name:'madan kanto'})
                    this.appointmentObject.appointmentTime = this.backTONgTImeFOrmat(this.appointmentObject.appointmentTime); //console.log("this.appointmentObject.appointmentTime **"+JSON.stringify(this.appointmentObject.appointmentTime))
                    //this.appointmentObject.dateOfBirth = new Date(this.appointmentObject.dateOfBirth)
                    //this.appointmentObject.dateOfBirth =  moment(this.appointmentObject.dateOfBirth).format('DD-MMM-YYYY');

                    this.appointmentObject.appointmentDate = this.datePipe.transform(this.appointmentObject.appointmentDate, 'yyyy-MM-dd'); //this.openAddappointmentDialog()

                    this.modalReference = this.modal.open(this.appointmentFormModal); //console.log("this.appointmentObject.appointmentDate **"+this.appointmentObject.appointmentDate)
                    //this.userObject.userId = user._id
                    //this.role = user.role

                  case 18:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          //console.log("****** this.event   ===== **"+event)
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
          this.fetchAppointments();
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
          var _this9 = this;

          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize
          };
          this.dataService.fetchPatients(data).then(function (result) {
            _this9.normalFiltereduserListArr = [];
            _this9.normalFiltereduserListArr = result.map(function (element) {
              return element;
            }); // //console.log("****** this.normalFiltereduserListArr   ===== **"+JSON.stringify(this.normalFiltereduserListArr))

            _this9.loading = false;
          }, function (err) {
            _this9.loading = false; //console.log(err);
          });
        }
      }, {
        key: "fetchAppointmentsCount",
        value: function fetchAppointmentsCount() {
          var _this10 = this;

          //  this.pageNo = 1
          //  this.pageSize = 10
          this.dataService.fetchAppointmentsCount().then(function (result) {
            //console.log("****** fetchappointmentsCount result   ===== **"+JSON.stringify(result))
            _this10.totalDocRecords = result; //console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)

            _this10.loading = false;
          }, function (err) {
            _this10.loading = false; //console.log(err);
          });
        }
      }, {
        key: "fetchAppointments",
        value: function fetchAppointments() {
          var _this11 = this;

          //  this.pageNo = 1
          //this.pageSize = 10
          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize
          };
          this.dataService.fetchAppointments(data).then(function (result) {
            _this11.normalFiltereduserListArr = [];
            _this11.normalFiltereduserListArr = result.map(function (element) {
              return element;
            }); ////console.log("****** this.fetchAppointments   ===== **"+JSON.stringify(this.normalFiltereduserListArr))

            _this11.normalFiltereduserListArr.forEach(function (appointment, index) {//console.log("****** active   ===== **"+ appointment.active)
            });

            _this11.loading = false;
          }, function (err) {
            _this11.loading = false; //console.log(err);
          });
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(value, userInfo) {
          var _this12 = this;

          // userInfo.active = value
          //  //console.log("****** userInfo   ===== **"+JSON.stringify(userInfo))
          var data = {};
          userInfo.active = !userInfo.active; //console.log("******  userInfo.active   ===== **"+userInfo.active )

          userInfo.appointmentId = userInfo._id;
          data['appointmentId'] = userInfo._id;
          data['active'] = userInfo.active; //console.log("****** userInfo   ===== **"+JSON.stringify(data))

          this.dataService.updateAppointment(data).then(function (result) {
            //  //console.log("****** updateappointment result   ===== **"+JSON.stringify(result))
            _this12.fetchAppointments();

            _this12.loading = false;
          }, function (err) {
            _this12.loading = false; //console.log(err);
          });
          this.toastr.successToastr('Appointment record updated successfully');
        }
      }]);

      return AppointmentComponent;
    }(src_BaseComponent__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]);

    AppointmentComponent.ɵfac = function AppointmentComponent_Factory(t) {
      return new (t || AppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_access__WEBPACK_IMPORTED_MODULE_9__["DataAccess"]));
    };

    AppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppointmentComponent,
      selectors: [["app-appointment"]],
      viewQuery: function AppointmentComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInputDemoPhoto = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.itemTemplateRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.accordionComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.appointmentFormModal = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 32,
      vars: 8,
      consts: [[3, "heading", "icon"], [1, "col-md-12"], ["class", "col-md-12 text-right ", 4, "ngIf"], [1, "card-body", "table-responsive", "marginLeft"], [1, "pb-3"], [1, "table", "table-striped", "table-bordered", "table-sm"], [4, "ngIf"], [1, "col-md-12", "text-left", "clearfix"], ["id", "forappintment", "directionLinks", "true", "maxSize", "9", "directionLinks", "true", "autoHide", "true", "responsive", "true", "previousLabel", "Prev", "nextLabel", "Next", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", "screenReaderCurrentLabel", "You're on page", 1, "my-pagination", "marginLeft", 3, "pageChange", "pageBoundsCorrection"], ["appointmentFormModal", ""], [1, "col-md-12", "text-right"], [1, "content"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [4, "ngFor", "ngForOf"], [1, "table", "borderless"], [1, "customdiv"], [1, "City"], [3, "ngModel", "ngModelChange", "change"], [1, "btn", "btn-dark", 3, "click"], ["colspan", "7", "align", "center"], [1, "custom_timebox", "p-0", 3, "formGroup"], [1, "modal-header", "py-1"], [1, "modal-title", "headerTitle", "mb-0"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "row"], [1, "form-group"], [1, "labelTitles"], ["formControlName", "patientName", 3, "data", "ngModel", "searchKeyword", "itemTemplate", "notFoundTemplate", "ngModelChange", "selected", "inputChanged", "inputFocused"], ["id", "itemTemplate"], ["itemTemplate", ""], ["notFoundTemplate", ""], ["formControlName", "locationName", 3, "data", "ngModel", "searchKeyword", "itemTemplate", "notFoundTemplate", "ngModelChange", "selected", "inputChanged", "inputFocused"], ["formControlName", "doctorName", 3, "data", "ngModel", "searchKeyword", "itemTemplate", "notFoundTemplate", "ngModelChange", "selected", "inputChanged"], [1, "col-md-12", "form-group"], [1, "col-md-12", "marginTop"], ["type", "date", "formControlName", "appointmentDate", "placeholder", "Enter AppointmentDate", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "labelValue"], ["formControlName", "appointmentTime", 3, "ngModel", "meridian", "ngModelChange"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "click"], ["class", "cutomeerrortext", 4, "ngIf"], [3, "innerHTML"], ["formControlName", "status", "name", "locationId", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Confirm", 1, "labelValue"], ["value", "Reschedule", 1, "labelValue"], ["value", "Reject", 1, "labelValue"], ["value", "Requested", 1, "labelValue"], ["disabled", "", "placeholder", "Requested", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], [1, "invalid-feedback", "d-block"], [1, "cutomeerrortext"], [1, "redcolor", "ml-2"], [1, "fa", "fas", "fa-exclamation"]],
      template: function AppointmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppointmentComponent_div_3_Template, 4, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Patient Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Appointment Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Appointment Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AppointmentComponent_th_21_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Created Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, AppointmentComponent_th_24_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AppointmentComponent_tbody_26_Template, 3, 8, "tbody", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "pagination-controls", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function AppointmentComponent_Template_pagination_controls_pageChange_28_listener($event) {
            return ctx.pageChanged($event);
          })("pageBoundsCorrection", function AppointmentComponent_Template_pagination_controls_pageBoundsCorrection_28_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AppointmentComponent_tbody_29_Template, 4, 0, "tbody", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AppointmentComponent_ng_template_30_Template, 64, 27, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("heading", "Appointments")("icon", "fa-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.appointment.create);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" List of existing ", ctx.userKind, "s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.appointment.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.appointment.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length == 0);
        }
      },
      directives: [_shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_12__["UiSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutocompleteComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTimepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]],
      styles: ["span.bootstrap-switch-handle-off.bootstrap-switch-default[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.profile-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.borderless[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .borderless[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.customdiv[_ngcontent-%COMP%] {\n  margin-left: 2px;\n  margin-right: 40px;\n  width: 20%;\n}\n\n.labelTitles[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.marginLeft[_ngcontent-%COMP%] {\n  margin-left: -25px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  border-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.clearfix[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n}\n\n.redcolor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userInfo[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n\n.userInfo[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 95% !important;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .usermngtableinfo[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.no-resize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.m-20[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.no-focus[_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC9hcHBvaW50bWVudC9hcHBvaW50bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2FwcG9pbnRtZW50L2FwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0lKOztBRERBO0VBQ0ksaUJBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0tKOztBREhJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0tOOztBRERFO0VBQ0Usa0JBQUE7RUFFQSxlQUFBO0FDR0o7O0FEREE7RUFFSSxVQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUo7O0FERkE7RUFDSSxnQ0FBQTtBQ0tKOztBREhBO0VBQ0ksbUJBQUE7QUNNSjs7QURKQTtFQUNJLHFCQUFBO0FDT0o7O0FETEE7RUFDSSxtQkFBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNTSjs7QURQQTtFQUNJLFdBQUE7QUNVSjs7QURSQTtFQUNJLGtCQUFBO0FDV0o7O0FEVEE7RUFDRSxnQkFBQTtBQ1lGOztBRFZBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FDYUY7O0FEWEE7RUFDSSxZQUFBO0FDY0o7O0FEWkE7RUFDSSxZQUFBO0FDZUo7O0FEYkE7RUFDSSxhQUFBO0FDZ0JKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FwcG9pbnRtZW50L2FwcG9pbnRtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Bhbi5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYuYm9vdHN0cmFwLXN3aXRjaC1kZWZhdWx0IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4ucHJvZmlsZS1pbWFnZS13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5ib3JkZXJsZXNzIHRkLCAuYm9yZGVybGVzcyB0aCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmN1c3RvbWRpdiB7ICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6MnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjQwcHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuXHJcbi5sYWJlbFRpdGxlc3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5tYXJnaW5MZWZ0e1xyXG4gICAgbWFyZ2luLWxlZnQ6LTI1cHhcclxufVxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbiAgICAuZWRpdC1pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgcGFkZGluZy10b3A6N3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjJweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgLmNsZWFyZml4IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4ucmVkY29sb3J7XHJcbiAgICBcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3IgOiBwb2ludGVyO1xyXG59XHJcbi51c2VySW5mbyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4udXNlckluZm86bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi5tb2RhbC1kaWFsb2cgeyBcclxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxufVxyXG4udXNlcm1uZ3RhYmxlIC51c2VybW5ndGFibGVpbmZve1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4udXNlcm1uZ3RhYmxlIC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHRkIGltZyB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxufSAgXHJcbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udXNlcm1uZ3RhYmxlIC5hY2NvcmRpb24gLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDA7XHJcbn1cclxuaDMge1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxucHJlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLm5vLXJlc2l6ZSB7XHJcbiAgICByZXNpemUgOiBub25lO1xyXG59XHJcbi5tLTIwIHtcclxuICAgIG1hcmdpbiA6IDIwcHg7XHJcbn1cclxuLm5vLWZvY3VzIHtcclxuICAgIG91dGxpbmUgOiBub25lO1xyXG59Iiwic3Bhbi5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYuYm9vdHN0cmFwLXN3aXRjaC1kZWZhdWx0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucHJvZmlsZS1pbWFnZS13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYm9yZGVybGVzcyB0ZCwgLmJvcmRlcmxlc3MgdGgge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jdXN0b21kaXYge1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5sYWJlbFRpdGxlcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFyZ2luTGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMjIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnByb2ZpbGUtaW1hZ2UgLmVkaXQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cblxuLmNsZWFyZml4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yZWRjb2xvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXNlckluZm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLnVzZXJJbmZvOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubW9kYWwtZGlhbG9nIHtcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xufVxuXG4udXNlcm1uZ3RhYmxlIC51c2VybW5ndGFibGVpbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnVzZXJtbmd0YWJsZSAudGFibGUtcmVzcG9uc2l2ZSB0YWJsZSB0ZCBpbWcge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udXNlcm1uZ3RhYmxlIC5hY2NvcmRpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxLjI1cmVtIDA7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cblxucHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLm5vLXJlc2l6ZSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLm0tMjAge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5uby1mb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-appointment',
          templateUrl: './appointment.component.html',
          styleUrls: ['./appointment.component.scss'],
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
        itemTemplateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['itemTemplate']
        }],
        accordionComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['acc']
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['content']
        }],
        appointmentFormModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['appointmentFormModal']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layout/appointment/appointment.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/layout/appointment/appointment.module.ts ***!
    \**********************************************************/

  /*! exports provided: AppointmentModule */

  /***/
  function srcAppLayoutAppointmentAppointmentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppointmentModule", function () {
      return AppointmentModule;
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


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angularx-flatpickr */
    "./node_modules/angularx-flatpickr/__ivy_ngcc__/fesm2015/angularx-flatpickr.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _appointment_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./appointment-routing.module */
    "./src/app/layout/appointment/appointment-routing.module.ts");
    /* harmony import */


    var _appointment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./appointment.component */
    "./src/app/layout/appointment/appointment.component.ts");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js"); //import { LoadingModule } from 'ngx-loading';
    //import {NgxToggleModule} from "ngx-toggle";
    //import {DataTableModule, SharedModule, InputTextModule} from 'primeng/primeng';
    //import {PaginatorModule} from 'primeng/paginator';
    //import {DropdownModule} from 'primeng/dropdown';


    var AppointmentModule = function AppointmentModule() {
      _classCallCheck(this, AppointmentModule);
    };

    AppointmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppointmentModule
    });
    AppointmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppointmentModule_Factory(t) {
        return new (t || AppointmentModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"], _appointment_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppointmentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
        animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff',
        secondaryColour: '#ffffff',
        tertiaryColour: '#ffffff'
      }), ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(), //  DropdownModule,
      //PaginatorModule,
      angularx_flatpickr__WEBPACK_IMPORTED_MODULE_7__["FlatpickrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__["adapterFactory"]
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppointmentModule, {
        declarations: [_appointment_component__WEBPACK_IMPORTED_MODULE_12__["AppointmentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"], _appointment_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppointmentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_7__["FlatpickrModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"], _appointment_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppointmentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
            animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
          }), ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(), //  DropdownModule,
          //PaginatorModule,
          angularx_flatpickr__WEBPACK_IMPORTED_MODULE_7__["FlatpickrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"].forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__["adapterFactory"]
          })],
          declarations: [_appointment_component__WEBPACK_IMPORTED_MODULE_12__["AppointmentComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=appointment-appointment-module-es5.js.map