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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-invoice-module"], {
  /***/
  "./src/app/layout/invoice/invoice-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/layout/invoice/invoice-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: InvoiceRoutingModule */

  /***/
  function srcAppLayoutInvoiceInvoiceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoiceRoutingModule", function () {
      return InvoiceRoutingModule;
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


    var _invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./invoice.component */
    "./src/app/layout/invoice/invoice.component.ts");

    var routes = [{
      path: '',
      component: _invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"]
    }];

    var InvoiceRoutingModule = function InvoiceRoutingModule() {
      _classCallCheck(this, InvoiceRoutingModule);
    };

    InvoiceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InvoiceRoutingModule
    });
    InvoiceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InvoiceRoutingModule_Factory(t) {
        return new (t || InvoiceRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvoiceRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceRoutingModule, [{
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
  "./src/app/layout/invoice/invoice.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/layout/invoice/invoice.component.ts ***!
    \*****************************************************/

  /*! exports provided: InvoiceComponent */

  /***/
  function srcAppLayoutInvoiceInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function () {
      return InvoiceComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_BaseComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/BaseComponent */
    "./src/BaseComponent.ts");
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
    var _c3 = ["invoiceFormModal"];

    function InvoiceComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r241 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InvoiceComponent_div_3_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r241);

          var ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r240.openAddInvoiceDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add Invoice");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function InvoiceComponent_th_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enable/Disable");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function InvoiceComponent_th_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function InvoiceComponent_tbody_26_tr_1_td_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r248 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ui-switch", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_tbody_26_tr_1_td_11_Template_ui_switch_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r248);

          var obj_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          return obj_r243.active = $event;
        })("change", function InvoiceComponent_tbody_26_tr_1_td_11_Template_ui_switch_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r248);

          var obj_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r249.updateStatus($event, obj_r243);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var obj_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", obj_r243.active);
      }
    }

    function InvoiceComponent_tbody_26_tr_1_td_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InvoiceComponent_tbody_26_tr_1_td_14_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r254);

          var obj_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r252.openForeditInvoice(obj_r243);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function InvoiceComponent_tbody_26_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, InvoiceComponent_tbody_26_tr_1_td_11_Template, 2, 1, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, InvoiceComponent_tbody_26_tr_1_td_14_Template, 3, 0, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var obj_r243 = ctx.$implicit;

        var ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r243 == null ? null : obj_r243.billTo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r243 == null ? null : obj_r243.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r243 == null ? null : obj_r243.paymentMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r243 == null ? null : obj_r243.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](obj_r243 == null ? null : obj_r243.mobileNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r242.user.role.doctor.invoice.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r242.convertToHumanDate(obj_r243.invoiceDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r242.user.role.doctor.invoice.edit);
      }
    }

    var _c4 = function _c4(a1, a2, a3) {
      return {
        id: "forinvoice1",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    function InvoiceComponent_tbody_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InvoiceComponent_tbody_26_tr_1_Template, 15, 8, "tr", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r236.normalFiltereduserListArr, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](4, _c4, ctx_r236.pageSize, ctx_r236.pageNo, ctx_r236.totalDocRecords)));
      }
    }

    function InvoiceComponent_tbody_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No record available");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function InvoiceComponent_ng_template_30_div_8_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "a", 51);
      }

      if (rf & 2) {
        var item_r262 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", item_r262.name, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function InvoiceComponent_ng_template_30_div_8_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 51);
      }

      if (rf & 2) {
        var notFound_r263 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", notFound_r263, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function InvoiceComponent_ng_template_30_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Select Doctor ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ng-autocomplete", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_ng_template_30_div_8_Template_ng_autocomplete_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r265);

          var ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r264.doctorName = $event;
        })("selected", function InvoiceComponent_ng_template_30_div_8_Template_ng_autocomplete_selected_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r265);

          var ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r266.doctorSelectEvent($event);
        })("inputChanged", function InvoiceComponent_ng_template_30_div_8_Template_ng_autocomplete_inputChanged_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r265);

          var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r267.doctorLocationSearch($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, InvoiceComponent_ng_template_30_div_8_ng_template_6_Template, 1, 1, "ng-template", 48, 49, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, InvoiceComponent_ng_template_30_div_8_ng_template_8_Template, 1, 1, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

        var _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

        var ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r256.doctorList)("ngModel", ctx_r256.doctorName)("searchKeyword", ctx_r256.keywordDoctor)("itemTemplate", _r258)("notFoundTemplate", _r260);
      }
    }

    function InvoiceComponent_ng_template_30_p_75_Template(rf, ctx) {
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
        var ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r257.form_fill_failure_msg, " ");
      }
    }

    function InvoiceComponent_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InvoiceComponent_ng_template_30_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r269);

          var ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r268.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, InvoiceComponent_ng_template_30_div_8_Template, 10, 5, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Invoice Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_ng_template_30_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r269);

          var ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r270.invoiceObject.invoiceDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Bill To");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_ng_template_30_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r269);

          var ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r271.invoiceObject.billTo = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Mobile Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_ng_template_30_Template_input_ngModelChange_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r269);

          var ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r272.invoiceObject.mobileNumber = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Paid/Unpaid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "select", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_ng_template_30_Template_select_ngModelChange_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r269);

          var ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r273.invoiceObject.status = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Paid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Unpaid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Payment Mode ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "select", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_ng_template_30_Template_select_ngModelChange_44_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r269);

          var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r274.invoiceObject.paymentMode = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Cash");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Card");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "textarea", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_ng_template_30_Template_textarea_ngModelChange_55_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r269);

          var ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r275.invoiceObject.address = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Appointment ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_ng_template_30_Template_input_ngModelChange_62_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r269);

          var ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r276.invoiceObject.appointmentId = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Invoice Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InvoiceComponent_ng_template_30_Template_input_ngModelChange_69_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r269);

          var ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r277.invoiceObject.invoiceAmount = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InvoiceComponent_ng_template_30_Template_button_click_71_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r269);

          var ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r278.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InvoiceComponent_ng_template_30_Template_button_click_73_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r269);

          var ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r279.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, InvoiceComponent_ng_template_30_p_75_Template, 6, 1, "p", 46);
      }

      if (rf & 2) {
        var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r239.invoiceFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 13, ctx_r239.mode), " Invoice");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r239.mode == "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r239.invoiceObject.invoiceDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r239.invoiceObject.billTo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r239.invoiceObject.mobileNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r239.invoiceObject.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r239.invoiceObject.paymentMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r239.invoiceObject.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r239.invoiceObject.appointmentId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r239.invoiceObject.invoiceAmount);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r239.invoiceFormGroup.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r239.submitAttempt);
      }
    }

    var InvoiceComponent =
    /*#__PURE__*/
    function (_src_BaseComponent__W) {
      _inherits(InvoiceComponent, _src_BaseComponent__W);

      var _super = _createSuper(InvoiceComponent);

      function InvoiceComponent(datePipe, router, modal, toastr, _fb, dataService) {
        var _this;

        _classCallCheck(this, InvoiceComponent);

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
        _this.invoiceList = [];
        _this.userKind = "invoice";
        _this.normalFiltereduserListArr = [];
        _this.items = [];
        _this.pageSize = _config__WEBPACK_IMPORTED_MODULE_3__["Config"].RECORDSIZE;
        _this.pageNo = 1;
        _this.tempArray = [];
        _this.keywordDoctor = "name";
        _this.invoiceObject = {
          active: true,
          "invoiceDate": null,
          "address": "",
          "mobileNumber": "",
          "billTo": "",
          "doctorId": "",
          "status": "",
          "paymentMode": "",
          "action": "",
          "appointmentId": "",
          "invoiceAmount": ""
        };
        _this.doctorList = [];
        _this.attendantList = [];
        _this.invoiceObjectBase = {
          active: true,
          "invoiceDate": null,
          "address": "",
          "mobileNumber": "",
          "billTo": "",
          "doctorId": "",
          "status": "",
          "paymentMode": "",
          "action": "",
          "appointmentId": "",
          "invoiceAmount": ""
        };
        _this.openingMeridian = true; //  this.customInvoicetime.hour = 9
        // this.customInvoicetime.minute = 10

        if (!_this.user.role.doctor.invoice.view) {
          return _possibleConstructorReturn(_this);
        }

        _this.invoiceFormGroup = _fb.group({
          invoiceDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.invoiceObject.invoiceDate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          doctorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.invoiceObject.doctorId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
          billTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.invoiceObject.billTo, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.invoiceObject.address, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.invoiceObject.status, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          paymentMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.invoiceObject.paymentMode),
          action: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.invoiceObject.action),
          appointmentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.invoiceObject.appointmentId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          invoiceAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.invoiceObject.invoiceAmount, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        }); //this.invoiceFormGroup.valueChanges.subscribe(data => console.log('form changes', data));

        _this.loading = false;

        _this.fetchInvoices();

        return _this;
      }

      _createClass(InvoiceComponent, [{
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
        key: "doctorSelectEvent",
        value: function doctorSelectEvent(item) {
          //console.log(" inside doctorSelectEvent "+JSON.stringify(item))
          if (item) {
            this.invoiceFormGroup.get('doctorId').patchValue(item['_id']);
            this.invoiceObject.doctorId = item['_id'];
            console.log(" this.invoiceObject.doctorId " + this.invoiceObject.doctorId);
          } // do something with selected item

        }
      }, {
        key: "doctorLocationSearch",
        value: function doctorLocationSearch(val) {
          var _this2 = this;

          //console.log(" inside onChangePatientSearch val "+val)
          // if(val && val.length >2 ){
          var data = {
            name: val
          };
          this.dataService.fetchAllDoctors(data).then(function (result) {
            _this2.doctorList = result.map(function (element) {
              return element;
            });
          }, function (err) {//console.log(err);
          }); // }
        }
      }, {
        key: "getInvoice",
        value: function getInvoice() {}
      }, {
        key: "addItem",
        value: function addItem() {
          this.dateTimeitems = this.invoiceFormGroup.get('dateTimeitems');
          this.dateTimeitems.push(this.createdateTimeItem());
        }
      }, {
        key: "removeItem",
        value: function removeItem(i) {
          this.dateTimeitems = this.invoiceFormGroup.get('dateTimeitems');
          this.dateTimeitems.removeAt(i);
        }
      }, {
        key: "openAddInvoiceDialog",
        value: function openAddInvoiceDialog() {
          this.mode = "add";
          this.invoiceFormGroup = this._fb.group({
            invoiceDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.invoiceDate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            doctorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.doctorId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            billTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.billTo, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.address, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.status, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            paymentMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.paymentMode),
            action: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.action),
            appointmentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.appointmentId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            invoiceAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.invoiceAmount, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
          this.dateTimeitems = this.invoiceFormGroup.get('dateTimeitems'); // 
          //this.dateTimeitems.push({})

          this.invoiceObject = Object.assign({}, this.invoiceObjectBase);
          this.modalReference = this.modal.open(this.invoiceFormModal);
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


          this.fetchInvoicesCount();
          this.fetchInvoices(); //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          //alert("mode: "+this.mode)
          if (!this.invoiceFormGroup.valid) {
            this.submitAttempt = true;
            this.validateFields(this.invoiceFormGroup.controls);
            return;
          }

          if (this.invoiceObject.invoiceDate && this.invoiceObject.invoiceDate != "") {
            this.invoiceObject.invoiceDate = this.fromJsDateToMongoDate(this.invoiceObject.invoiceDate);
          }

          if (this.mode == "add") {
            //delete this.invoiceObject['doctor']
            console.log("this.invoiceObject for add == " + JSON.stringify(this.invoiceObject));
            this.dataService.addInvoice(this.invoiceObject).then(function (result) {
              //  console.log("result after adduser == "+JSON.stringify(result))
              _this3.fetchInvoices();

              _this3.mode = "add";

              _this3.closeModal();

              _this3.form_fill_failure_msg = "";

              _this3.toastr.successToastr('New invoice is added successfully');
            }, function (err) {
              if (err && err.message) alert(err.message); //console.log(err);
            });
          }

          if (this.mode == "edit") {
            //delete this.invoiceObject['patient']
            //delete this.invoiceObject['doctor']
            this.invoiceObject['invoiceId'] = this.invoiceObject['_id'];
            console.log("this.invoiceObject for edit == " + JSON.stringify(this.invoiceObject));
            this.dataService.updateInvoice(this.invoiceObject).then(function (result) {
              //  console.log("****** updateinvoice result   ===== **"+JSON.stringify(result))
              //this.loading = false;
              _this3.mode = "add";

              _this3.fetchInvoices();

              _this3.closeModal();

              _this3.form_fill_failure_msg = "";

              _this3.toastr.successToastr('invoice is updated successfully');
            }, function (err) {
              _this3.mode = "add"; //this.loading = false;

              console.log(err);
            });
          }
        }
      }, {
        key: "openForeditInvoice",
        value: function openForeditInvoice(user) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var dateTimeArray;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.invoiceObject = Object.assign({}, user); //console.log("dateTimeArray LENGTH **"+dateTimeArray.length)

                    this.invoiceFormGroup = this._fb.group({
                      invoiceDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.invoiceDate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                      mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
                      billTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.billTo, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.address, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                      status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.status, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                      paymentMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.paymentMode),
                      action: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.action),
                      appointmentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.appointmentId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
                      invoiceAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.invoiceObject.invoiceAmount, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
                    });
                    console.log("this.invoiceObject ==" + JSON.stringify(this.invoiceObject));
                    dateTimeArray = [];
                    this.dateTimeitems = this.invoiceFormGroup.get('dateTimeitems');
                    this.invoiceObject.invoiceDate = this.datePipe.transform(this.invoiceObject.invoiceDate, 'yyyy-MM-dd');
                    console.log("dateTimeArray LENGTH **" + dateTimeArray.length); //let earlierAttendent = this.invoiceObject.attendantID
                    //this.doctorName = await this.fetchDoctrById(this.invoiceObject.doctorID)
                    //this.invoiceObject.attendantID = earlierAttendent
                    //this.invoiceFormGroup.get('dateTimeitems').patchValue(dateTimeArray)
                    //addItem

                    this.mode = "edit";
                    this.modalReference = this.modal.open(this.invoiceFormModal); //this.userObject.userId = user._id
                    //this.role = user.role

                  case 9:
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
          var _this4 = this;

          var data = {
            doctorId: doctorId
          };

          try {
            return new Promise(function (resolve) {
              _this4.dataService.fetchDoctrById(data).then(function (result) {
                //console.log("****** invoice  ===== **"+JSON.stringify(result))
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
          this.fetchInvoices();
        }
      }, {
        key: "onChangePage",
        value: function onChangePage(pageOfItems) {
          // update current page of items
          this.pageOfItems = pageOfItems;
          this.pageNo = 1;
        }
      }, {
        key: "fetchInvoicesCount",
        value: function fetchInvoicesCount() {
          var _this5 = this;

          //  this.pageNo = 1
          //  this.pageSize = 10
          this.dataService.fetchInvoicesCount().then(function (result) {
            console.log("****** fetchinvoicesCount result   ===== **" + JSON.stringify(result));
            _this5.totalDocRecords = result;
            console.log("****** this.totalIvoice Records ===== **" + _this5.totalDocRecords);
            _this5.loading = false;
          }, function (err) {
            _this5.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "fetchInvoices",
        value: function fetchInvoices() {
          var _this6 = this;

          //  this.pageNo = 1
          //this.pageSize = 10
          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize
          };
          this.dataService.fetchInvoices(data).then(function (result) {
            _this6.normalFiltereduserListArr = [];
            _this6.normalFiltereduserListArr = result.map(function (element) {
              return element;
            }); //  console.log("****** this.normalFiltereduserListArr   ===== **"+JSON.stringify(this.normalFiltereduserListArr))

            _this6.normalFiltereduserListArr.forEach(function (invoice, index) {
              console.log("****** active   ===== **" + invoice.active);
            });

            _this6.loading = false;
          }, function (err) {
            _this6.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(value, userInfo) {
          var _this7 = this;

          // userInfo.active = value
          //  console.log("****** userInfo   ===== **"+JSON.stringify(userInfo))
          var data = {};
          userInfo.active = !userInfo.active;
          console.log("******  userInfo.active   ===== **" + userInfo.active);
          userInfo.invoiceId = userInfo._id;
          data['invoiceId'] = userInfo._id;
          data['active'] = userInfo.active;
          console.log("****** userInfo   ===== **" + JSON.stringify(data));
          this.dataService.updateInvoice(data).then(function (result) {
            //  console.log("****** updateinvoice result   ===== **"+JSON.stringify(result))
            _this7.fetchInvoices();

            _this7.loading = false;
          }, function (err) {
            _this7.loading = false;
            console.log(err);
          });
          this.toastr.successToastr('Invoice record updated successfully');
        }
      }]);

      return InvoiceComponent;
    }(src_BaseComponent__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]);

    InvoiceComponent.ɵfac = function InvoiceComponent_Factory(t) {
      return new (t || InvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_access__WEBPACK_IMPORTED_MODULE_9__["DataAccess"]));
    };

    InvoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: InvoiceComponent,
      selectors: [["app-invoice"]],
      viewQuery: function InvoiceComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInputDemoPhoto = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.accordionComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.invoiceFormModal = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 32,
      vars: 8,
      consts: [[3, "heading", "icon"], [1, "col-md-12"], ["class", "col-md-12 text-right ", 4, "ngIf"], [1, "card-body", "table-responsive", "marginLeft"], [1, "pb-3"], [1, "table", "table-striped", "table-bordered", "table-sm"], [4, "ngIf"], [1, "col-md-12", "text-left", "clearfix"], ["id", "forinvoice1", "directionLinks", "true", "maxSize", "9", "directionLinks", "true", "autoHide", "true", "responsive", "true", "previousLabel", "Prev", "nextLabel", "Next", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", "screenReaderCurrentLabel", "You're on page", 1, "my-pagination", "marginLeft", 3, "pageChange", "pageBoundsCorrection"], ["invoiceFormModal", ""], [1, "col-md-12", "text-right"], [1, "content"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange", "change"], [1, "btn", "btn-dark", 3, "click"], ["colspan", "7", "align", "center"], [1, "custom_timebox", "p-0", 3, "formGroup"], [1, "modal-header", "py-1"], [1, "modal-title", "headerTitle", "mb-0"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-12", "form-group"], ["for", "email", 1, "labelTitles"], [1, "col-md-12", "marginTop"], ["type", "date", "formControlName", "invoiceDate", "placeholder", "Enter Invoicedate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "name", 1, "labelTitles"], ["formControlName", "billTo", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12", "form-group", "labelTitles"], ["formControlName", "mobileNumber", "placeholder", "Mobile Number", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], [1, "form-group"], [1, "labelTitles"], ["formControlName", "status", "name", "paidUnpaid", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Paid", 1, "labelValue"], ["value", "Unpaid", 1, "labelValue"], ["formControlName", "paymentMode", "name", "paymentMode", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Cash", 1, "labelValue"], ["value", "Card", 1, "labelValue"], ["formControlName", "address", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "appointmentId", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "invoiceAmount", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "click"], ["class", "cutomeerrortext", 4, "ngIf"], ["formControlName", "doctorName", 3, "data", "ngModel", "searchKeyword", "itemTemplate", "notFoundTemplate", "ngModelChange", "selected", "inputChanged"], ["id", "itemTemplate"], ["itemTemplate", ""], ["notFoundTemplate", ""], [3, "innerHTML"], [1, "cutomeerrortext"], [1, "redcolor", "ml-2"], [1, "fa", "fas", "fa-exclamation"]],
      template: function InvoiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-page-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InvoiceComponent_div_3_Template, 4, 0, "div", 2);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Bill To");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Paid/Unpaid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Payment Mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "MobileNumber");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, InvoiceComponent_th_21_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Invoice Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, InvoiceComponent_th_24_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, InvoiceComponent_tbody_26_Template, 3, 8, "tbody", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "pagination-controls", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function InvoiceComponent_Template_pagination_controls_pageChange_28_listener($event) {
            return ctx.pageChanged($event);
          })("pageBoundsCorrection", function InvoiceComponent_Template_pagination_controls_pageBoundsCorrection_28_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, InvoiceComponent_tbody_29_Template, 4, 0, "tbody", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, InvoiceComponent_ng_template_30_Template, 76, 15, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("heading", "Invoice")("icon", "fa-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.invoice.create);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" List of existing ", ctx.userKind, "s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.invoice.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.invoice.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length == 0);
        }
      },
      directives: [_shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_12__["UiSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutocompleteComponent"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]],
      styles: ["span.bootstrap-switch-handle-off.bootstrap-switch-default[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.profile-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.borderless[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .borderless[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n  width: 100%;\n}\n\n.labelTitles[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.marginLeft[_ngcontent-%COMP%] {\n  margin-left: -25px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  border-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.clearfix[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n}\n\n.redcolor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userInfo[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n\n.userInfo[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 95% !important;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .usermngtableinfo[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.no-resize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.m-20[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.no-focus[_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QUREQTtFQUNJLDhCQUFBO0VBRUEsV0FBQTtBQ0dKOztBREFBO0VBQ0ksaUJBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0lKOztBREZJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0lOOztBREFFO0VBQ0Usa0JBQUE7RUFFQSxlQUFBO0FDRUo7O0FEQUE7RUFFSSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxnQ0FBQTtBQ0lKOztBREZBO0VBQ0ksbUJBQUE7QUNLSjs7QURIQTtFQUNJLHFCQUFBO0FDTUo7O0FESkE7RUFDSSxtQkFBQTtBQ09KOztBRExBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNRSjs7QUROQTtFQUNJLFdBQUE7QUNTSjs7QURQQTtFQUNJLGtCQUFBO0FDVUo7O0FEUkE7RUFDRSxnQkFBQTtBQ1dGOztBRFRBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FDWUY7O0FEVkE7RUFDSSxZQUFBO0FDYUo7O0FEWEE7RUFDSSxZQUFBO0FDY0o7O0FEWkE7RUFDSSxhQUFBO0FDZUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Bhbi5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYuYm9vdHN0cmFwLXN3aXRjaC1kZWZhdWx0IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4ucHJvZmlsZS1pbWFnZS13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5ib3JkZXJsZXNzIHRkLCAuYm9yZGVybGVzcyB0aCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmRpdmlkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgLy9tYXJnaW4tdG9wOjFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbi5sYWJlbFRpdGxlc3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5tYXJnaW5MZWZ0e1xyXG4gICAgbWFyZ2luLWxlZnQ6LTI1cHhcclxufVxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbiAgICAuZWRpdC1pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6LTEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgcGFkZGluZy10b3A6N3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjJweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIH1cclxuICB9XHJcbiAgLmNsZWFyZml4IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4ucmVkY29sb3J7XHJcbiAgICBcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3IgOiBwb2ludGVyO1xyXG59XHJcbi51c2VySW5mbyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4udXNlckluZm86bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi5tb2RhbC1kaWFsb2cgeyBcclxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxufVxyXG4udXNlcm1uZ3RhYmxlIC51c2VybW5ndGFibGVpbmZve1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4udXNlcm1uZ3RhYmxlIC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHRkIGltZyB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxufSAgXHJcbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udXNlcm1uZ3RhYmxlIC5hY2NvcmRpb24gLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDA7XHJcbn1cclxuaDMge1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxucHJlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLm5vLXJlc2l6ZSB7XHJcbiAgICByZXNpemUgOiBub25lO1xyXG59XHJcbi5tLTIwIHtcclxuICAgIG1hcmdpbiA6IDIwcHg7XHJcbn1cclxuLm5vLWZvY3VzIHtcclxuICAgIG91dGxpbmUgOiBub25lO1xyXG59Iiwic3Bhbi5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYuYm9vdHN0cmFwLXN3aXRjaC1kZWZhdWx0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucHJvZmlsZS1pbWFnZS13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYm9yZGVybGVzcyB0ZCwgLmJvcmRlcmxlc3MgdGgge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5kaXZpZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxhYmVsVGl0bGVzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXJnaW5MZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xufVxuXG4ucHJvZmlsZS1pbWFnZSB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiAyMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbWFnZSAuZWRpdC1pY29uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiA3cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xufVxuXG4uY2xlYXJmaXgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJlZGNvbG9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51c2VySW5mbyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4udXNlckluZm86bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5tb2RhbC1kaWFsb2cge1xuICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG59XG5cbi51c2VybW5ndGFibGUgLnVzZXJtbmd0YWJsZWluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4udXNlcm1uZ3RhYmxlIC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHRkIGltZyB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXNlcm1uZ3RhYmxlIC5hY2NvcmRpb24gLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDEuMjVyZW0gMDtcbn1cblxuaDMge1xuICBtYXJnaW46IDAgMCAxMHB4O1xufVxuXG5wcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubm8tcmVzaXplIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG4ubS0yMCB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLm5vLWZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InvoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-invoice',
          templateUrl: './invoice.component.html',
          styleUrls: ['./invoice.component.scss'],
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
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
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
        invoiceFormModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['invoiceFormModal']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layout/invoice/invoice.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/layout/invoice/invoice.module.ts ***!
    \**************************************************/

  /*! exports provided: InvoiceModule */

  /***/
  function srcAppLayoutInvoiceInvoiceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoiceModule", function () {
      return InvoiceModule;
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


    var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./invoice-routing.module */
    "./src/app/layout/invoice/invoice-routing.module.ts");
    /* harmony import */


    var _invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./invoice.component */
    "./src/app/layout/invoice/invoice.component.ts");
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


    var InvoiceModule = function InvoiceModule() {
      _classCallCheck(this, InvoiceModule);
    };

    InvoiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InvoiceModule
    });
    InvoiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InvoiceModule_Factory(t) {
        return new (t || InvoiceModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _invoice_routing_module__WEBPACK_IMPORTED_MODULE_10__["InvoiceRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
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
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvoiceModule, {
        declarations: [_invoice_component__WEBPACK_IMPORTED_MODULE_11__["InvoiceComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _invoice_routing_module__WEBPACK_IMPORTED_MODULE_10__["InvoiceRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _invoice_routing_module__WEBPACK_IMPORTED_MODULE_10__["InvoiceRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
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
          declarations: [_invoice_component__WEBPACK_IMPORTED_MODULE_11__["InvoiceComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=invoice-invoice-module-es5.js.map