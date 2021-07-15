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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"], {
  /***/
  "./src/app/layout/order/order-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/layout/order/order-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: OrderRoutingModule */

  /***/
  function srcAppLayoutOrderOrderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function () {
      return OrderRoutingModule;
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


    var _order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./order.component */
    "./src/app/layout/order/order.component.ts");

    var routes = [{
      path: '',
      component: _order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"]
    }];

    var OrderRoutingModule = function OrderRoutingModule() {
      _classCallCheck(this, OrderRoutingModule);
    };

    OrderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrderRoutingModule
    });
    OrderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrderRoutingModule_Factory(t) {
        return new (t || OrderRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderRoutingModule, [{
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
  "./src/app/layout/order/order.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/layout/order/order.component.ts ***!
    \*************************************************/

  /*! exports provided: OrderComponent */

  /***/
  function srcAppLayoutOrderOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
      return OrderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../config */
    "./src/app/config.ts");
    /* harmony import */


    var src_BaseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/BaseComponent */
    "./src/BaseComponent.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_services_data_access__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/data-access */
    "./src/app/services/data-access.ts");
    /* harmony import */


    var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/modules/page-header/page-header.component */
    "./src/app/shared/modules/page-header/page-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-toggle-switch */
    "./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js");

    var _c0 = ["myname"];
    var _c1 = ["fileInputDemoPhoto"];
    var _c2 = ["acc"];
    var _c3 = ["content"];
    var _c4 = ["orderFormModal"];
    var _c5 = ["searFiltersModal"];
    var _c6 = ["enlargedImageModal"];
    var _c7 = ["enlargedPrescriptionModal"];

    function OrderComponent_div_3_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r362 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_div_3_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r362);

          var ctx_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r361.openCustomerPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Go Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364);

          var ctx_r363 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r363.openforAddOrderDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_div_3_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364);

          var ctx_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r365.gotoCustomerPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Customer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrderComponent_div_3_button_5_Template, 2, 0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r344.fromCustomerPage);
      }
    }

    function OrderComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r367 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_div_4_Template_i_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r367);

          var ctx_r366 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r366.openSearchFilter();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_div_4_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r367);

          var ctx_r368 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r368.reset();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r371 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enlarged Prescription View");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_5_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r371);

          var ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r370.closeCustomModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r347.enlargedPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function OrderComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r374 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enlarged View");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_7_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r374);

          var ctx_r373 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r373.closeCustomModal2();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r349.enlargedPrescPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function OrderComponent_ng_template_9_i_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 39);
      }
    }

    function OrderComponent_ng_template_9_i_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 40);
      }
    }

    function OrderComponent_ng_template_9_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r389 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderComponent_ng_template_9_div_12_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r389);

          var ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r388.orderId = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r378.orderId);
      }
    }

    function OrderComponent_ng_template_9_i_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 39);
      }
    }

    function OrderComponent_ng_template_9_i_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 40);
      }
    }

    function OrderComponent_ng_template_9_div_19_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 46);
      }

      if (rf & 2) {
        var item_r394 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r394.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function OrderComponent_ng_template_9_div_19_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 46);
      }

      if (rf & 2) {
        var notFound_r395 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r395, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function OrderComponent_ng_template_9_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r397 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-autocomplete", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderComponent_ng_template_9_div_19_Template_ng_autocomplete_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r397);

          var ctx_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r396.customerName = $event;
        })("selected", function OrderComponent_ng_template_9_div_19_Template_ng_autocomplete_selected_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r397);

          var ctx_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r398.customerSelectEvent($event);
        })("inputChanged", function OrderComponent_ng_template_9_div_19_Template_ng_autocomplete_inputChanged_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r397);

          var ctx_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r399.onChangeCustomerSearch($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OrderComponent_ng_template_9_div_19_ng_template_2_Template, 1, 1, "ng-template", 43, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderComponent_ng_template_9_div_19_ng_template_4_Template, 1, 1, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r390 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var _r392 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r381.customerList)("ngModel", ctx_r381.customerName)("searchKeyword", ctx_r381.keywordCustomer)("itemTemplate", _r390)("notFoundTemplate", _r392);
      }
    }

    function OrderComponent_ng_template_9_i_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 39);
      }
    }

    function OrderComponent_ng_template_9_i_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 40);
      }
    }

    function OrderComponent_ng_template_9_div_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r401 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderComponent_ng_template_9_div_26_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r401);

          var ctx_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r400.orderDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r384 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r384.orderDate);
      }
    }

    function OrderComponent_ng_template_9_i_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 39);
      }
    }

    function OrderComponent_ng_template_9_i_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 40);
      }
    }

    function OrderComponent_ng_template_9_div_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r403 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderComponent_ng_template_9_div_33_Template_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r403);

          var ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r402.orderStatus = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OrderPlaced");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Confirmed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Packaged");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Shipped");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Rejected");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r387.orderStatus);
      }
    }

    function OrderComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search Filters");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_9_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r405);

          var ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r404.closeSearchModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_9_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r405);

          var ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r406.enableSearchByOrderId();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order Id Filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrderComponent_ng_template_9_i_10_Template, 1, 0, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrderComponent_ng_template_9_i_11_Template, 1, 0, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OrderComponent_ng_template_9_div_12_Template, 2, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_9_Template_div_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r405);

          var ctx_r407 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r407.enableSearchByCutomer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Customer Filter ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OrderComponent_ng_template_9_i_17_Template, 1, 0, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrderComponent_ng_template_9_i_18_Template, 1, 0, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OrderComponent_ng_template_9_div_19_Template, 6, 5, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_9_Template_div_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r405);

          var ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r408.enableSearchByOrderDate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Order date Filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OrderComponent_ng_template_9_i_24_Template, 1, 0, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OrderComponent_ng_template_9_i_25_Template, 1, 0, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, OrderComponent_ng_template_9_div_26_Template, 2, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_9_Template_div_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r405);

          var ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r409.enableSearchByStatus();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Status Filter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, OrderComponent_ng_template_9_i_31_Template, 1, 0, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, OrderComponent_ng_template_9_i_32_Template, 1, 0, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, OrderComponent_ng_template_9_div_33_Template, 12, 1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_9_Template_button_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r405);

          var ctx_r410 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r410.reset();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_9_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r405);

          var ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r411.searchByFilters();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_9_Template_button_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r405);

          var ctx_r412 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r412.closeSearchModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r351.searchByOrderId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r351.searchByOrderId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r351.searchByOrderId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r351.searchByCustomer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r351.searchByCustomer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r351.searchByCustomer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r351.searchByOrderDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r351.searchByOrderDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r351.searchByOrderDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r351.searchByStatus);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r351.searchByStatus);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r351.searchByStatus);
      }
    }

    function OrderComponent_th_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enable/Disable");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderComponent_th_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderComponent_tbody_31_tr_1_tr_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "lowercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "/");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Qty:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var med_r418 = ctx.$implicit;

        var obj_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, obj_r414.status));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](med_r418 == null ? null : med_r418.medicineName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](med_r418 == null ? null : med_r418.quantity);
      }
    }

    function OrderComponent_tbody_31_tr_1_td_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r422 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ui-switch", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderComponent_tbody_31_tr_1_td_11_Template_ui_switch_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r422);

          var obj_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return obj_r414.active = $event;
        })("change", function OrderComponent_tbody_31_tr_1_td_11_Template_ui_switch_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r422);

          var obj_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r423.updateStatus($event, obj_r414);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var obj_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", obj_r414.active);
      }
    }

    function OrderComponent_tbody_31_tr_1_td_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r428 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_tbody_31_tr_1_td_14_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r428);

          var obj_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r426 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r426.openForeditOrder(obj_r414);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var obj_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", obj_r414.status == "Confirmed");
      }
    }

    function OrderComponent_tbody_31_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "lowercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrderComponent_tbody_31_tr_1_tr_8_Template, 14, 7, "tr", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrderComponent_tbody_31_tr_1_td_11_Template, 2, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrderComponent_tbody_31_tr_1_td_14_Template, 3, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var obj_r414 = ctx.$implicit;

        var ctx_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 10, obj_r414.status));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r414 == null ? null : obj_r414._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r414 == null ? null : obj_r414.customer == null ? null : obj_r414.customer.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", obj_r414.medicineList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r414 == null ? null : obj_r414.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r413.user.role.doctor.order.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r413.convertToHumanDate(obj_r414.createdDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r413.user.role.doctor.order && ctx_r413.user.role.doctor.order.edit);
      }
    }

    var _c8 = function _c8(a1, a2, a3) {
      return {
        id: "fororder1",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    function OrderComponent_tbody_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderComponent_tbody_31_tr_1_Template, 15, 12, "tr", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r354.normalFiltereduserListArr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c8, ctx_r354.pageSize, ctx_r354.pageNo, ctx_r354.totalDocRecords)));
      }
    }

    function OrderComponent_tbody_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No record available");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderComponent_ng_template_35_div_8_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 46);
      }

      if (rf & 2) {
        var item_r443 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r443.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function OrderComponent_ng_template_35_div_8_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 46);
      }

      if (rf & 2) {
        var notFound_r444 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r444, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function OrderComponent_ng_template_35_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r446 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select Customer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ng-autocomplete", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderComponent_ng_template_35_div_8_Template_ng_autocomplete_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r446);

          var ctx_r445 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r445.customerName = $event;
        })("selected", function OrderComponent_ng_template_35_div_8_Template_ng_autocomplete_selected_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r446);

          var ctx_r447 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r447.customerSelectEvent($event);
        })("inputChanged", function OrderComponent_ng_template_35_div_8_Template_ng_autocomplete_inputChanged_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r446);

          var ctx_r448 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r448.onChangeCustomerSearch($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrderComponent_ng_template_35_div_8_ng_template_6_Template, 1, 1, "ng-template", 43, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrderComponent_ng_template_35_div_8_ng_template_8_Template, 1, 1, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r439 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var _r441 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

        var ctx_r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r431.customerList)("ngModel", ctx_r431.customerName)("searchKeyword", ctx_r431.keywordCustomer)("itemTemplate", _r439)("notFoundTemplate", _r441);
      }
    }

    function OrderComponent_ng_template_35_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r451 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 85, 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OrderComponent_ng_template_35_div_14_Template_select_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r451);

          var ctx_r450 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r450.checkStatusChange();
        })("ngModelChange", function OrderComponent_ng_template_35_div_14_Template_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r451);

          var ctx_r452 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r452.orderObject.status = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OrderPlaced");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Confirmed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Packaged");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Shipped");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Rejected");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r432 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r432.orderObject.status);
      }
    }

    function OrderComponent_ng_template_35_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r454 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderComponent_ng_template_35_div_15_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r454);

          var ctx_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r453.orderObject.status = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r433.orderObject.status);
      }
    }

    function OrderComponent_ng_template_35_option_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var delmode_r455 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", delmode_r455.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](delmode_r455.name);
      }
    }

    function OrderComponent_ng_template_35_span_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " just click a row on an old prescription from the list below ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderComponent_ng_template_35_tbody_45_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r459 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_35_tbody_45_tr_1_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459);

          var photo_r457 = ctx.$implicit;

          var ctx_r458 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r458.selectPrescription(photo_r457);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderComponent_ng_template_35_tbody_45_tr_1_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459);

          var photo_r457 = ctx.$implicit;
          return photo_r457.selectValue = $event;
        })("click", function OrderComponent_ng_template_35_tbody_45_tr_1_Template_input_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459);

          var photo_r457 = ctx.$implicit;

          var ctx_r461 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r461.selectPrescription(photo_r457);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_35_tbody_45_tr_1_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r459);

          var photo_r457 = ctx.$implicit;

          var ctx_r462 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r462.enlargePrescription(photo_r457);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var photo_r457 = ctx.$implicit;

        var ctx_r456 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", photo_r457.selectValue)("ngModel", photo_r457.selectValue)("checked", photo_r457.selectValue == true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx_r456.getPhotoOldPrescription(photo_r457), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
      }
    }

    function OrderComponent_ng_template_35_tbody_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderComponent_ng_template_35_tbody_45_tr_1_Template, 7, 5, "tr", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r436.customerOldPrescriptionListArr);
      }
    }

    function OrderComponent_ng_template_35_div_46_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 46);
      }

      if (rf & 2) {
        var item_r469 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r469.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function OrderComponent_ng_template_35_div_46_ng_template_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 46);
      }

      if (rf & 2) {
        var notFound_r470 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r470, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function OrderComponent_ng_template_35_div_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r472 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Id ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Medicine Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Quantity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ng-autocomplete", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function OrderComponent_ng_template_35_div_46_Template_ng_autocomplete_selected_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r472);

          var i_r464 = ctx.index;

          var ctx_r471 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r471.medicineSelectEvent($event, i_r464);
        })("inputChanged", function OrderComponent_ng_template_35_div_46_Template_ng_autocomplete_inputChanged_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r472);

          var i_r464 = ctx.index;

          var ctx_r473 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r473.doctorMedcineSearch($event, i_r464);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OrderComponent_ng_template_35_div_46_ng_template_19_Template, 1, 1, "ng-template", 43, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OrderComponent_ng_template_35_div_46_ng_template_21_Template, 1, 1, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_35_div_46_Template_i_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r472);

          var i_r464 = ctx.index;

          var ctx_r474 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r474.removeItem(i_r464);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r464 = ctx.index;

        var _r465 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

        var _r467 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        var ctx_r437 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r464);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r464 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r437.medicineArray)("searchKeyword", ctx_r437.keywordMedicine)("itemTemplate", _r465)("notFoundTemplate", _r467);
      }
    }

    function OrderComponent_ng_template_35_p_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0Fix The Error : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r438 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r438.form_fill_failure_msg, " ");
      }
    }

    function OrderComponent_ng_template_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r476 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_35_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r476);

          var ctx_r475 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r475.closeMainModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrderComponent_ng_template_35_div_8_Template, 10, 5, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Status ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrderComponent_ng_template_35_div_14_Template, 13, 1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrderComponent_ng_template_35_div_15_Template, 2, 1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Delivery Mode ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderComponent_ng_template_35_Template_select_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r476);

          var ctx_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r477.orderObject.deliveryMode = $event;
        })("change", function OrderComponent_ng_template_35_Template_select_change_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r476);

          var ctx_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r478.checkDeliveryMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, OrderComponent_ng_template_35_option_22_Template, 2, 2, "option", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Upload prescription from storage device ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, OrderComponent_ng_template_35_span_28_Template, 5, 0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_35_Template_div_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r476);

          var ctx_r479 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r479.enlargePic();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_35_Template_span_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r476);

          var ctx_r480 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r480.capturePhoto(null, "prescription");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OrderComponent_ng_template_35_Template_input_change_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r476);

          var ctx_r481 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r481.capturePhoto($event, "prescription");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Click on any row of old prescription from the list below ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, OrderComponent_ng_template_35_tbody_45_Template, 2, 1, "tbody", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, OrderComponent_ng_template_35_div_46_Template, 31, 6, "div", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "i", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_35_Template_i_click_48_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r476);

          var ctx_r482 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r482.addItem();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_35_Template_button_click_52_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r476);

          var ctx_r483 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r483.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_ng_template_35_Template_button_click_54_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r476);

          var ctx_r484 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r484.closeMainModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, OrderComponent_ng_template_35_p_56_Template, 6, 1, "p", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r357 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r357.orderFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 14, ctx_r357.mode), " Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r357.mode == "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r357.mode == "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r357.mode == "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r357.orderObject.deliveryMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r357.delModeList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r357.customerOldPrescriptionListArr && ctx_r357.customerOldPrescriptionListArr.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx_r357.getPhoto("prescription"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r357.customerOldPrescriptionListArr && ctx_r357.customerOldPrescriptionListArr.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r357.getControls());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r357.orderFormGroup.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r357.submitAttempt);
      }
    }

    function OrderComponent_ng_template_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Please wait..fetching data ");
      }
    }

    var _c9 = function _c9() {
      return {
        primaryColour: "blue",
        secondaryColour: "red",
        fullScreenBackdrop: false
      };
    };

    var OrderComponent =
    /*#__PURE__*/
    function (_src_BaseComponent__W) {
      _inherits(OrderComponent, _src_BaseComponent__W);

      var _super = _createSuper(OrderComponent);

      function OrderComponent(router, route, modal, toastr, _fb, dataService) {
        var _this;

        _classCallCheck(this, OrderComponent);

        _this = _super.call(this, router);
        _this.router = router;
        _this.route = route;
        _this.modal = modal;
        _this.toastr = toastr;
        _this._fb = _fb;
        _this.dataService = dataService;
        _this.loadingCustomeMsg = "Loading...";
        _this.fromOldImageList = false;
        _this.loading = true;
        _this.isPrescriptionUploaded = false;
        _this.showOldPrescription = '';
        _this.allDynaFilter = null;
        _this.patientList = [];
        _this.customerList = [];
        _this.states = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].states;
        _this.keywordCustomer = "name";
        _this.fetchOrderByCustomer = false;
        _this.orderList = [];
        _this.fromCustomerPage = false;
        _this.userKind = "order";
        _this.normalFiltereduserListArr = [];
        _this.customerOldPrescriptionListArr = [];
        _this.delModeList = [{
          "value": "Express",
          "name": "Express"
        }, {
          "value": "General",
          "name": "General"
        }];
        _this.items = [];
        _this.pageSize = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].RECORDSIZE;
        _this.pageNo = 1;
        _this.tempArray = [];
        _this.searchByCustomer = false;
        _this.searchByOrderDate = false;
        _this.searchByOrderId = false;
        _this.searchByStatus = false;
        _this.keywordMedicine = "name";
        _this.orderObject = {
          active: true,
          medicineList: [{
            medicineId: '',
            medicineName: "",
            quantity: "",
            mg: '',
            mrp: 0,
            active: true,
            "b2bPrice": "",
            "gst": "0",
            "hsnCode": "0",
            "vat": "0",
            "otherTax": "0",
            "discounts": "0",
            "medicineType": "",
            "category": ""
          }],
          customerId: "",
          uploadedFile: "",
          uploadedFileURL: "",
          deliveryMode: "General",
          status: "OrderPlaced"
        };
        _this.medicineArray = [[{
          medicineId: '',
          medicineName: "",
          quantity: "",
          mg: '',
          mrp: "",
          active: true,
          b2bPrice: "",
          gst: "0",
          hsnCode: "0",
          vat: "0",
          otherTax: "0",
          discounts: "0",
          medicineType: "",
          category: ""
        }]];
        _this.attendantList = [];
        _this.orderObjectBase = {
          active: true,
          medicineList: [{
            medicineId: '',
            medicineName: "",
            quantity: "",
            mg: '',
            mrp: 0,
            active: true,
            "b2bPrice": "",
            "gst": "0",
            "hsnCode": "0",
            "vat": "0",
            "otherTax": "0",
            "discounts": "0",
            "medicineType": "",
            "category": ""
          }],
          customerId: "",
          uploadedFile: "",
          uploadedFileURL: "",
          deliveryMode: "General",
          status: "OrderPlaced"
        };
        _this.openingMeridian = true; //  this.customOrdertime.hour = 9
        // this.customOrdertime.minute = 10

        if (!_this.user.role.doctor.order.view) {
          return _possibleConstructorReturn(_this);
        }

        _this.customerName = _this.route.snapshot.paramMap.get('name');
        _this.fromCustomerPage = _this.route.snapshot.paramMap.get('fromCustomerPage') == 'fromCustomerPage';
        console.log("this.customerName  **" + _this.customerName); //this.customerId =  "5ee8ea1158ea514eec6f6e18"//this.route.snapshot.paramMap.get('customerId');

        var dynaFilterArry = [];
        _this.customerId = _this.route.snapshot.paramMap.get('customerId');
        console.log("this.customerId  **" + _this.customerId);

        if (_this.customerId != undefined && _this.customerId && _this.customerId != '') {
          _this.fetchOrderByCustomer = true;
          _this.allDynaFilter = {
            $and: dynaFilterArry
          };
          dynaFilterArry.push({
            customerId: _this.customerId
          });
        } else {
          _this.fetchOrderByCustomer = false;
        }

        _this.orderFormGroup = _fb.group({
          customerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.customerId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          uploadedFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.orderObject.uploadedFile, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          //medicineName: new FormControl(this.orderObject.attendantID, Validators.required),
          //quantity: new FormControl(this.orderObject.name, Validators.required),
          status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.orderObject.status, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          deliveryMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this.orderObject.deliveryMode, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          medicineListItems: _this._fb.array([_this.createMedicineItem()])
        }); //this.createMedicineItem()
        //this.orderFormGroup.valueChanges.subscribe(data => console.log('form changes', data));
        // this.loading = false;    
        //this.fetchOrders()   

        return _this;
      }

      _createClass(OrderComponent, [{
        key: "getControls",
        value: function getControls() {
          return this.orderFormGroup.get('medicineListItems').controls;
        }
      }, {
        key: "gotoCustomerPage",
        value: function gotoCustomerPage() {
          this.router.navigate(["/customer", {
            fromOrderPage: 'fromOrderPage'
          }]);
        }
      }, {
        key: "openCustomerPage",
        value: function openCustomerPage() {
          this.router.navigate(["/customer"]);
        }
      }, {
        key: "createMedicineItem",
        value: function createMedicineItem() {
          return this._fb.group({
            medicineId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            medicineName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            mg: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            mrp: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            b2bPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            hsnCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            gst: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            //vat : "0",
            otherTax: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            discounts: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            medicineType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
          });
        }
      }, {
        key: "createMedicineItemDuringEdit",
        value: function createMedicineItemDuringEdit(medicine) {
          return this._fb.group({
            medicineId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            medicineName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            mg: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            mrp: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            b2bPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            hsnCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            gst: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            //vat : "0",
            otherTax: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            discounts: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            medicineType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
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
        key: "getOrder",
        value: function getOrder() {}
      }, {
        key: "addItem",
        value: function addItem() {
          this.medicineListItems = this.orderFormGroup.get('medicineListItems');
          this.medicineListItems.push(this.createMedicineItem());
        }
      }, {
        key: "removeItem",
        value: function removeItem(i) {
          this.medicineListItems = this.orderFormGroup.get('medicineListItems');
          this.medicineListItems.removeAt(i);
        }
      }, {
        key: "medicineSelectEvent",
        value: function medicineSelectEvent(item, i) {
          if (item) {
            //this.orderFormGroup.get('medicineID').patchValue(item['_id']);
            // this.orderObject.medicineList[i].medicineId = item['_id']
            try {
              //if(item['_id'] != null && item['_id'])
              this.medicineListItems.at(i).get('medicineId').patchValue(item['_id']); //if(item['name'] != null && item['name'] )

              this.medicineListItems.at(i).get('medicineName').patchValue(item['name']);
              console.log("his.medicineListItems.at(i).get('medicineName') " + this.medicineListItems.at(i).get('medicineName').value); //if(item['mrp'] != null && item['mrp'] )

              this.medicineListItems.at(i).get('mrp').patchValue(item['mrp']); //   if(item['active'] != null && item['active'])
              // this.medicineListItems.at(i).get('active').patchValue(item['active']);
              //if(item['b2bPrice'] != null && item['b2bPrice'] )

              this.medicineListItems.at(i).get('b2bPrice').patchValue(item['b2bPrice']); //if(item['gst'] != null && item['gst'] )

              this.medicineListItems.at(i).get('gst').patchValue(item['gst']);
              console.log("his.medicineListItems.at(i).get('gst') " + this.medicineListItems.at(i).get('gst').value); //if(item['hsnCode'] != null && item['hsnCode'])

              this.medicineListItems.at(i).get('hsnCode').patchValue(item['hsnCode']); //if(item['vat'] != null && item['vat'] && this.medicineListItems.at(i).get('vat'))
              //this.medicineListItems.at(i).get('vat').patchValue(item['vat']);

              if (item['otherTax'] != null && item['otherTax']) this.medicineListItems.at(i).get('otherTax').patchValue(item['otherTax']);
              if (item['discounts'] != null && item['discounts']) this.medicineListItems.at(i).get('discounts').patchValue(item['discounts']);
              if (item['medicineType'] != null && item['medicineType']) this.medicineListItems.at(i).get('medicineType').patchValue(item['medicineType']);
              if (item['category'] != null && item['category']) this.medicineListItems.at(i).get('category').patchValue(item['category']); // this.orderObject.medicineList[i].medicineName = item['medicineName']
              //console.log(" this.medicineListItems "+JSON.stringify(this.medicineListItems))

              console.log(" this.medicineListItems " + this.medicineListItems);
            } catch (e) {
              console.log(e);
            }
          } // do something with selected item

        }
      }, {
        key: "doctorMedcineSearch",
        value: function doctorMedcineSearch(val, i) {
          var _this2 = this;

          console.log(" inside onChangePatientSearch val " + val);
          console.log(" component count " + i); // if(val && val.length >2 ){

          var data = {
            name: val
          }; //let medicineArray = []

          this.dataService.fetchAllMedicines(data).then(function (result) {
            _this2.medicineArray = result.map(function (element) {
              return element;
            }); //this.medicineArray[i] = medicineArray
            //this.medicineArray = medicineArray.map(element => element)

            console.log("this.medicineArray==" + JSON.stringify(_this2.medicineArray[i]));
          }, function (err) {//console.log(err);
          }); // }
        }
      }, {
        key: "enableSearchByCutomer",
        value: function enableSearchByCutomer() {
          this.searchByCustomer = !this.searchByCustomer;
        }
      }, {
        key: "enableSearchByOrderDate",
        value: function enableSearchByOrderDate() {
          this.searchByOrderDate = !this.searchByOrderDate;
        }
      }, {
        key: "enableSearchByOrderId",
        value: function enableSearchByOrderId() {
          this.searchByOrderId = !this.searchByOrderId;
        }
      }, {
        key: "enableSearchByStatus",
        value: function enableSearchByStatus() {
          this.searchByStatus = !this.searchByStatus;
        }
      }, {
        key: "openSearchFilter",
        value: function openSearchFilter() {
          //this.reset()
          this.reinitialise();
          this.modalSearchFilerReference = this.modal.open(this.searFiltersModal);
        }
      }, {
        key: "closeSearchModal",
        value: function closeSearchModal() {
          //if(this.modalSearchFilerReference)
          //this.modalSearchFilerReference.close();
          if (this.modalSearchFilerReference) this.modalSearchFilerReference.dismiss();
        }
      }, {
        key: "openforAddOrderDialog",
        value: function openforAddOrderDialog() {
          try {
            //this.medicineListItems.push({})
            this.orderObject = Object.assign({}, this.orderObjectBase);
            this.fromOldImageList = true;
            this.customerOldPrescriptionListArr = [];
            this.customerId = '';
            /*
            if(this.customerId == undefined || !this.customerId || this.customerId == ''){
             alert("Please select a customer first, from the dropdown")
             return
            }
            */

            this.mode = "add";
            this.modalReferenceOrderForm = this.modal.open(this.orderFormModal);
            this.orderFormGroup = this._fb.group({
              customerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.customerId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              uploadedFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.orderObject.uploadedFile, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              deliveryMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.orderObject.deliveryMode, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              //medicineName: new FormControl(this.orderObject.attendantID, Validators.required),
              //quantity: new FormControl(this.orderObject.name, Validators.required),
              status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.orderObject.status, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              medicineListItems: this._fb.array([this.createMedicineItem()])
            });
            this.medicineListItems = this.orderFormGroup.get('medicineListItems'); // 
          } catch (e) {
            console.log(e);
          }
        }
      }, {
        key: "getPatient",
        value: function getPatient() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!localStorage.getItem('isLoggedin')) {
            this.router.navigate(["/login"]);
          }

          this.fetchOrdersCount();
          this.fetchOrders();
          if (this.customerId) this.fetchAllOrderPrescriptions();

          if (this.customerId == undefined || !this.customerId || this.customerId == '') {
            this.fetchCustomers();
          } //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})

        }
      }, {
        key: "fetchCustomers",
        value: function fetchCustomers() {
          var _this3 = this;

          //  this.pageNo = 1
          //this.pageSize = 10
          this.dataService.fetchAllCustomersNotByName().then(function (result) {//this.customerList = [];      
            //this.customerList = result.map(element => element)
            // if(!this.fromCustomerPage){
            // this.customerId = this.customerList[0]
            // }
          }, function (err) {
            _this3.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this4 = this;

          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;

          if (!this.orderFormGroup.valid) {
            this.submitAttempt = true;
            this.validateFields(this.orderFormGroup.controls);
            return;
          }

          var medicineListItems = [];

          for (var i = 0; i < this.medicineListItems.length; i++) {
            var formObject = this.medicineListItems.at(i); //let medicineObj = formObject.get('medicineName').value

            medicineListItems.push({
              medicineId: (_a = formObject.get('medicineId')) === null || _a === void 0 ? void 0 : _a.value,
              medicineName: (_b = formObject.get('medicineName')) === null || _b === void 0 ? void 0 : _b.value,
              mg: (_c = formObject.get('mg')) === null || _c === void 0 ? void 0 : _c.value,
              quantity: (_d = formObject.get('quantity')) === null || _d === void 0 ? void 0 : _d.value,
              mrp: (_e = formObject.get('mrp')) === null || _e === void 0 ? void 0 : _e.value,
              active: (_f = formObject.get('active')) === null || _f === void 0 ? void 0 : _f.value,
              b2bPrice: (_g = formObject.get('b2bPrice')) === null || _g === void 0 ? void 0 : _g.value,
              gst: (_h = formObject.get('gst')) === null || _h === void 0 ? void 0 : _h.value,
              vat: (_j = formObject.get('vat')) === null || _j === void 0 ? void 0 : _j.value,
              otherTax: (_k = formObject.get('otherTax')) === null || _k === void 0 ? void 0 : _k.value,
              discounts: (_l = formObject.get('discounts')) === null || _l === void 0 ? void 0 : _l.value,
              medicineType: (_m = formObject.get('medicineType')) === null || _m === void 0 ? void 0 : _m.value,
              category: (_o = formObject.get('category')) === null || _o === void 0 ? void 0 : _o.value
            });
          }

          this.orderObject.medicineList = [];
          this.orderObject.medicineList = medicineListItems;
          this.orderObject.customerId = this.customerId; //    console.log("order this.orderObject **"+JSON.stringify(this.orderObject))
          //this.fromOldImageList = false

          if (this.mode == "add") {
            delete this.orderObject['customer'];
            console.log("this.orderObject for add == " + JSON.stringify(this.orderObject));
            this.dataService.addOrder(this.orderObject).then(function (result) {
              //  console.log("result after adduser == "+JSON.stringify(result))
              _this4.commonAfterSaveCode();

              _this4.reinitialise();

              _this4.form_fill_failure_msg = "";

              _this4.toastr.successToastr('New order is added successfully');

              _this4.saveUploadedPrescription(); //  this.fromOldImageList = false

            }, function (err) {
              console.log(err);
            });
          }

          if (this.mode == "edit") {
            this.loading = true; //delete this.orderObject['patient']

            delete this.orderObject['customer'];
            this.orderObject['orderId'] = this.orderObject['_id'];
            console.log("this.orderObject for EDIT  == " + JSON.stringify(this.orderObject));
            this.dataService.updateOrder(this.orderObject).then(function (result) {
              //console.log("****** updateorder result   ===== **"+JSON.stringify(result))
              _this4.commonAfterSaveCode();

              if (_this4.isPrescriptionUploaded) {
                _this4.saveUploadedPrescription();

                _this4.isPrescriptionUploaded = false;
              }

              _this4.form_fill_failure_msg = "";

              _this4.toastr.successToastr('order is updated successfully'); // this.fromOldImageList = false

            }, function (err) {
              //this.mode = "add"
              _this4.loading = false;
              if (err && err.message) _this4.toastr.errorToastr(err.message);
              console.log(err);
            });
          }
        }
      }, {
        key: "saveUploadedPrescription",
        value: function saveUploadedPrescription() {
          var orderPrescriptiondata = {
            customerId: this.orderObject.customerId,
            uploadPhotoOrderPrescription: this.orderObject.uploadedFile
          };
          this.dataService.addOrderPrescription(orderPrescriptiondata).then(function (result) {}, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "commonAfterSaveCode",
        value: function commonAfterSaveCode() {
          var _this5 = this;

          this.customerId = '';
          this.loading = true; // this.normalFiltereduserListArr = []; 

          this.closeMainModal();
          setTimeout(function () {
            _this5.loading = false;
            _this5.mode = "add";

            _this5.fetchOrders();
          }, 2000);
        }
      }, {
        key: "enlargePic",
        value: function enlargePic() {
          var image = this.orderObject.uploadedFileURL;
          this.enlargedPic = image; //this.enlargedPrescPic = ''
          //this.closeCustomModal2()

          this.modalReferenceImage = this.modal.open(this.enlargedImageModal);
        }
      }, {
        key: "enlargePrescription",
        value: function enlargePrescription(obj) {
          //this.closeCustomModal()
          //this.enlargedPic = ''
          var image = obj.uploadPhotoOrderPrescriptionURL;
          this.enlargedPrescPic = image;
          this.modalReferencePrescriptionImage = this.modal.open(this.enlargedPrescriptionModal);
        }
      }, {
        key: "selectPrescription",
        value: function selectPrescription(obj) {
          // let image  = obj.uploadPhotoOrderPrescriptionURL    
          //  this.enlargedPrescPic = image
          //this.modalReferenceImage = this.modal.open(this.enlargedPrescriptionModal); 
          obj.selectValue = true;

          for (var i in this.customerOldPrescriptionListArr) {
            var oldPresc = this.customerOldPrescriptionListArr[i];

            if (oldPresc._id == obj._id) {
              continue;
            } else {
              //this.customerOldPrescriptionListArr.splice(i, 1);
              oldPresc.selectValue = false; //this.customerOldPrescriptionListArr.splice(i, 1,oldPresc);
            }
          }

          this.orderObject.uploadedFile = obj.uploadPhotoOrderPrescription;
          this.orderObject.uploadedFile = "data:image/jpg;base64," + this.orderObject.uploadedFile;
          this.orderObject.uploadedFileURL = obj.uploadPhotoOrderPrescriptionURL;
          this.orderFormGroup.get('uploadedFile').patchValue(this.orderObject.uploadedFile);
          console.log("obj ==" + JSON.stringify(obj)); //this.getPhotoOLDPrescription(obj.uploadPhotoOrderPrescriptionURL)
          //this.showOldPrescription  = 'url(' + obj.uploadPhotoOrderPrescriptionURL + ')'
        }
      }, {
        key: "getPhotoOLDPrescription",
        value: function getPhotoOLDPrescription(image) {
          try {
            return 'url(' + image + ')';
          } catch (error) {
            console.log('Error', error);
          }
        }
      }, {
        key: "getPhoto",
        value: function getPhoto(photoType) {
          try {
            console.log("this.orderObject.uploadedFileURL == " + this.orderObject.uploadedFileURL); //let image  = this.orderObject.uploadedFileURL
            //let image  = this.orderObject.uploadedFile

            var image = this.orderObject.uploadedFileURL; //alert(this.fromOldImageList)

            this.enlargedPic = image;

            if (this.fromOldImageList) {
              //image  = "data:image/jpg;base64,"+this.orderObject.uploadedFile
              image = this.orderObject.uploadedFile;
              this.enlargedPic = this.orderObject.uploadedFile;
            } //this.fromOldImageList = false
            //let  image = "data:image/jpg;base64,"+this.orderObject.uploadedFile

            /* if(photoType == 'prescription'){
               image  = this.orderObject.uploadedFileURL
               if(!image && this.orderObject.uploadedFile){
                 image = "data:image/jpg;base64,"+this.orderObject.uploadedFile
                           this.orderObject.uploadedFile = "data:image/jpg;base64,"+this.orderObject.uploadedFile
                         }
             }*/


            return 'url(' + image + ')';
          } catch (error) {
            console.log('Error', error);
          }
        }
      }, {
        key: "capturePhoto",
        value: function capturePhoto(event, photoType) {
          var _this6 = this;

          //  alert("I am clicked")
          var reader = new FileReader();
          this.fromOldImageList = true;

          try {
            reader.onload = function (readerEvent) {
              var imageData = readerEvent.target.result;
              if (photoType == 'prescription') _this6.orderObject.uploadedFile = imageData; //var dataURL = reader.result;
              //this.orderObject.uploadedFileURL  =  imageData;

              _this6.orderFormGroup.get('uploadedFile').patchValue(_this6.orderObject.uploadedFile);

              _this6.isPrescriptionUploaded = true;
            }; //      this.orderObject.uploadedFileURL = event.target.files[0]


            console.log("capturePhoto this.orderObject.uploadedFileURL == " + this.orderObject.uploadedFileURL);
            reader.readAsDataURL(event.target.files[0]);
          } catch (error) {
            console.log('Error', error);
          }
        }
      }, {
        key: "getPhotoOldPrescription",
        value: function getPhotoOldPrescription(obj) {
          try {
            var image = obj.uploadPhotoOrderPrescriptionURL;
            image = obj.uploadPhotoOrderPrescriptionURL;
            /*if(obj && obj.uploadPhotoOrderPrescription){
              image = obj.uploadPhotoOrderPrescription
            }
            */
            //  this.enlargedPic = image

            return 'url(' + image + ')';
          } catch (error) {// //console.log('Error', error);
          }
        }
      }, {
        key: "commonCodeDuringEdit",
        value: function commonCodeDuringEdit() {
          this.orderFormGroup = this._fb.group({
            customerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.customerId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            uploadedFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.orderObject.uploadedFile, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            deliveryMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.orderObject.deliveryMode, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            //medicineName: new FormControl(this.orderObject.attendantID, Validators.required),
            //quantity: new FormControl(this.orderObject.name, Validators.required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.orderObject.status, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            medicineListItems: this._fb.array([this.createMedicineItem()])
          });
          this.orderFormGroup.get('uploadedFile').patchValue(this.orderObject.uploadedFile); //console.log("this.orderObject =="+JSON.stringify(this.orderObject))

          var dateTimeArray = [];
          this.medicineListItems = this.orderFormGroup.get('medicineListItems');
          this.medicineListItems.removeAt(0);

          for (var i in this.orderObject.medicineList) {
            var medicine = this.orderObject.medicineList[i]; // dateTimeArray.push({date:date,time:time})
            //this.medicineListItems.push({date:date,time:time})

            this.medicineListItems.push(this._fb.group({
              medicineId: medicine.medicineId,
              medicineName: medicine.medicineName,
              quantity: medicine.quantity,
              mg: medicine.mg,
              mrp: medicine.mrp,
              active: medicine.active,
              b2bPrice: medicine.b2bPrice,
              gst: medicine.gst,
              hsnCode: medicine.hsnCode,
              otherTax: medicine.otherTax,
              discounts: medicine.discounts,
              medicineType: medicine.medicineType,
              category: medicine.category
            }));
          }

          console.log("this.medicineListItems **" + this.medicineListItems.length); //this.orderObject.attendantID = earlierAttendent
          //this.orderFormGroup.get('medicineListItems').patchValue(dateTimeArray)
          //addItem
          //setTimeout(() => {
          //try{
          //  this.modalReferenceOrderForm = this.modal.open(this.orderFormModal);
          //}catch(error){
          //    console.log(error)
          //}
          //}, 2000);
          //setTimeout(() => {
        }
      }, {
        key: "checkStatusChange",
        value: function checkStatusChange() {
          console.log("status **" + this.orderObject['status']);
        }
      }, {
        key: "checkDeliveryMode",
        value: function checkDeliveryMode() {
          console.log("deliverymode **" + this.orderObject.deliveryMode);
        }
      }, {
        key: "openForeditOrder",
        value: function openForeditOrder(user) {
          var _this7 = this;

          //this.input.nativeElement.focus();
          //this.fromOldImageList = false
          //  console.log("order object **"+JSON.stringify(user))
          //this.modalReferenceOrderForm = this.modal.open(this.orderFormModal);
          this.loading = true;
          this.loadingCustomeMsg == "Fetching old prescriptions, please wait..";
          this.mode = "edit"; //this.orderObject = Object.assign({}, this.orderObjectBase); 

          this.customerId = user['customerId'];
          this.orderObject = Object.assign({}, user);
          console.log("deliverymode **" + this.orderObject['deliveryMode']);
          this.modalReferenceOrderForm = this.modal.open(this.orderFormModal); //console.log("order in EDIT this.orderObject **"+JSON.stringify(this.orderObject))

          console.log("this.customerId == " + this.customerId); //if(this.customerId)
          //this.fetchAllOrderPrescriptions()  

          var data = {
            customerId: this.customerId
          };
          this.commonCodeDuringEdit();
          console.log(" fetch old prescription for " + JSON.stringify(data));
          this.dataService.fetchAllOrderPrescriptions(data).then(function (result) {
            _this7.customerOldPrescriptionListArr = [];
            setTimeout(function () {
              if (result) {
                for (var i in result) {
                  var obj = result[i];
                  obj['selectValue'] = false;

                  _this7.customerOldPrescriptionListArr.push(obj);
                }
              }

              _this7.loading = false; //   this.commonCodeDuringEdit()
            }, 1000);
          }, function (err) {
            //this.commonCodeDuringEdit()
            _this7.customerOldPrescriptionListArr = [];
            _this7.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "reinitialise",
        value: function reinitialise() {
          this.searchByOrderDate = false;
          this.searchByOrderId = false;
          this.searchByCustomer = false;
          this.searchByStatus = false;
          this.orderDate = '';
          this.customerId = '';
          this.orderId = '';
          this.orderStatus = '';
          this.customerName = '';
          this.allDynaFilter = null;
          this.fetchOrdersCount();
          this.totalDocRecords = 0;
          this.fetchOrders();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.reinitialise();
          this.toastr.successToastr('Filters reset, order list refreshed');
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          console.log("****** this.event   ===== **" + event);
          this.pageNo = event;
          this.applyFilter();
        }
      }, {
        key: "searchByFilters",
        value: function searchByFilters() {
          var dynaFilterArry = [];
          var dynaFilter = {}; // let allDynaFilter = {}

          if (this.searchByOrderDate && this.orderDate) {
            var converteddate = this.fromJsDateToLocationdateTimeFormat(this.orderDate);
            dynaFilter['createdDate'] = converteddate;
            dynaFilterArry.push({
              createdDate: converteddate
            });
            console.log("converteddate **" + converteddate); //moment(new Date()).format('YYYY-MM-DD[T00:00:00.000Z]'
            //var dateTime = new Date(this.orderDate);

            /*
            var dateTime1dayAgo = moment(this.orderDate,"YYYY-MM-DD HH:mm:ss").subtract(1,'d').format('YYYY-MM-DD[T00:00:00.000Z]');
            var dateTime1dayLater = moment(this.orderDate,"YYYY-MM-DD HH:mm:ss").add(1,'days').format('YYYY-MM-DD[T00:00:00.000Z]');
            dynaFilter['createdDate'] = {"$gt": dateTime1dayAgo}
            //console.log("this.orderDate **"+converteddate)
            console.log("this.orderDate **"+this.orderDate)
            dynaFilterArry.push({createdDate:{"$gt": dateTime1dayAgo} })
            dynaFilterArry.push({createdDate:{"$lt": dateTime1dayLater} })
            */
          }

          if (this.searchByCustomer && this.customerId) {
            //dynaFilter['customerId'] = this.customerId   
            dynaFilterArry.push({
              customerId: this.customerId
            });
          }

          if (this.searchByOrderId && this.orderId) {
            //dynaFilter['orderId'] = this.orderId   
            dynaFilterArry.push({
              orderId: this.orderId
            });
          }

          if (this.searchByStatus && this.orderStatus) {
            //dynaFilter['status'] = this.orderStatus   
            dynaFilterArry.push({
              status: this.orderStatus
            });
          }

          this.allDynaFilter = {
            $and: dynaFilterArry
          };
          this.fetchOrdersCount();
          this.fetchOrders();
          this.closeSearchModal();
          this.toastr.successToastr('Searching Done');
        }
      }, {
        key: "closeMainModal",
        value: function closeMainModal() {
          if (this.modalReferenceOrderForm) this.modalReferenceOrderForm.close();
          this.fromOldImageList = false;
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
          if (this.customerId != undefined && this.customerId && this.customerId != '') {
            this.fetchOrderByCustomer = true;
          } else {
            this.fetchOrderByCustomer = false;
          }

          console.log("this.customerId " + this.customerId);
          this.fetchOrdersCount();
          this.fetchOrders();
        }
      }, {
        key: "onChangePage",
        value: function onChangePage(pageOfItems) {
          // update current page of items
          this.pageOfItems = pageOfItems;
          this.pageNo = 1;
        }
      }, {
        key: "customerSelectEvent",
        value: function customerSelectEvent(item) {
          if (item) {
            this.orderFormGroup.get('customerId').patchValue(item['_id']);
            this.customerId = item['_id'];

            if (this.customerId) {
              this.loading = true;
              this.loadingCustomeMsg == "Fetching old prescriptions, please wait..";
              this.fetchAllOrderPrescriptions();
            } //console.log(" inside customerSelectEvent "+JSON.stringify(item))

          } // do something with selected item

        }
      }, {
        key: "onChangeCustomerSearch",
        value: function onChangeCustomerSearch(val) {
          var _this8 = this;

          //console.log(" inside onChangePatientSearch val "+val)
          // if(val && val.length >2 ){
          var data = {
            name: val
          };
          this.dataService.fetchAllCustomers(data).then(function (result) {
            _this8.customerList = result.map(function (element) {
              return element;
            });
          }, function (err) {//console.log(err);
          }); // }
        }
      }, {
        key: "fetchOrdersCount",
        value: function fetchOrdersCount() {
          var _this9 = this;

          //  this.pageNo = 1
          //  this.pageSize = 10

          /* let data = {}
           if(this.fetchOrderByCustomer){
             data['fetchOrderByCustomer'] = true
             data['customerId'] = this.customerId
           }else{
             data['fetchOrderByCustomer'] = false
           }
           this.dataService.fetchOrdersCount(data).then((result) => {
               
               console.log("****** fetchordersCount result   ===== **"+JSON.stringify(result))
             this.totalDocRecords = result;
             console.log("****** this.totalDocRecords ===== **"+this.totalDocRecords)
                   this.loading = false;
                 }, (err) => {
             this.loading = false;
             console.log(err);
           });
                 */
          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize,
            filter: this.allDynaFilter
          }; // this.fetchOrdersCount({filter : allDynaFilter})  
          //this.fetchOrdersByFilters({filter : allDynaFilter})   

          console.log(" inside data " + JSON.stringify(data));
          this.dataService.fetchOrdersByFilterCount(data).then(function (result) {
            console.log("****** fetchordersCount result   ===== **" + JSON.stringify(result));
            _this9.totalDocRecords = result;
            _this9.loading = false;
            console.log("****** this.totalDocRecords ===== **" + _this9.totalDocRecords);
          }, function (err) {
            _this9.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "fetchAllOrderPrescriptions",
        value: function fetchAllOrderPrescriptions() {
          var _this10 = this;

          var data = {
            customerId: this.customerId
          };
          console.log(" fetch old prescription for " + JSON.stringify(data));
          this.dataService.fetchAllOrderPrescriptions(data).then(function (result) {
            /* this.customerOldPrescriptionListArr = [];
             if(this.customerOldPrescriptionListArr.length >0 ){
               this.customerOldPrescriptionListArr = result.map(element => {
                 //let obj = element
                // element['selectValue'] = false
                         //return   element
                 return Object.assign({}, element, {
                   selectValue: false
                 })
               
               }
               )
             }
             */
            _this10.customerOldPrescriptionListArr = [];

            if (result) {
              for (var i in result) {
                var obj = result[i];
                obj['selectValue'] = false;

                _this10.customerOldPrescriptionListArr.push(obj);
              }
            } //   console.log("****** this.customerOldPrescriptionListArr   ===== **"+JSON.stringify(this.customerOldPrescriptionListArr))      


            _this10.loading = false;
          }, function (err) {
            _this10.customerOldPrescriptionListArr = [];
            _this10.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "fetchOrders",
        value: function fetchOrders() {
          var _this11 = this;

          //  this.pageNo = 1
          //this.pageSize = 10
          // let data = {pageNo:this.pageNo,perPage:this.pageSize}
          //data['customerId'] = this.customerId
          // console.log("this.customerId   ===== **"+this.customerId)
          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize,
            filter: this.allDynaFilter
          }; // this.fetchOrdersCount({filter : allDynaFilter})  
          //this.fetchOrdersByFilters({filter : allDynaFilter})   
          //console.log(" inside data "+JSON.stringify(data))

          this.dataService.fetchOrdersByFilters(data).then(function (result) {
            _this11.normalFiltereduserListArr = []; //this.normalFiltereduserListArr = result.map(element => {        
            // return   element
            // })

            for (var i in result) {
              var orderObj = result[i]; // if(!orderObj['deliveryMode'] || orderObj['deliveryMode'] == undefined ){
              //    orderObj['deliveryMode'] = "General"
              //  }
              // console.log("****** orderObj   ===== **"+JSON.stringify(orderObj))    

              _this11.normalFiltereduserListArr.push(orderObj);
            } //  console.log("****** this.fetchOrdersByFilters   ===== **"+JSON.stringify(this.normalFiltereduserListArr))      


            _this11.loading = false;
          }, function (err) {
            _this11.normalFiltereduserListArr = [];
            _this11.loading = false;
            console.log(err);
          });
          /*
              if(this.fetchOrderByCustomer){
                data['fetchOrderByCustomer'] = true
                data['customerId'] = this.customerId
              }else{
                data['fetchOrderByCustomer'] = false
              }
              
              this.dataService.fetchOrders(data).then((result:[]) => {
                  
                this.normalFiltereduserListArr = [];
               // this.customerList = []
                  this.normalFiltereduserListArr = result.map(element => {
                    
                    return   element
                  })
                  console.log("****** this.fetchOrders   ===== **"+JSON.stringify(this.normalFiltereduserListArr))
                  
          
                 // this.normalFiltereduserListArr.forEach(function(order, index){
                   // console.log("****** active   ===== **"+ order.active)
                 // })
                  
                  this.loading = false;
          
              }, (err) => {
                this.normalFiltereduserListArr = [];
                this.loading = false;
                console.log(err);
              });
          */
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(value, userInfo) {
          var _this12 = this;

          // userInfo.active = value
          //  console.log("****** userInfo   ===== **"+JSON.stringify(userInfo))
          var data = {};
          userInfo.active = !userInfo.active;
          console.log("******  userInfo.active   ===== **" + userInfo.active);
          userInfo.orderId = userInfo._id;
          data['orderId'] = userInfo._id;
          data['active'] = userInfo.active;
          console.log("****** userInfo   ===== **" + JSON.stringify(data));
          this.dataService.updateOrder(data).then(function (result) {
            //  console.log("****** updateorder result   ===== **"+JSON.stringify(result))
            _this12.fetchOrders();

            _this12.loading = false;
          }, function (err) {
            _this12.loading = false;
            console.log(err);
          });
          this.toastr.successToastr('Order record updated successfully');
        }
      }]);

      return OrderComponent;
    }(src_BaseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);

    OrderComponent.ɵfac = function OrderComponent_Factory(t) {
      return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_access__WEBPACK_IMPORTED_MODULE_7__["DataAccess"]));
    };

    OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderComponent,
      selectors: [["app-order"]],
      viewQuery: function OrderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInputDemoPhoto = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordionComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.orderFormModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searFiltersModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.enlargedImageModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.enlargedPrescriptionModal = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 41,
      vars: 13,
      consts: [[3, "heading", "icon"], [1, "row"], ["class", "col-md-12", 4, "ngIf"], ["class", "col-md-12 text-right", 4, "ngIf"], ["enlargedImageModal", ""], ["enlargedPrescriptionModal", ""], ["searFiltersModal", ""], [1, "card-body", "table-responsive", "marginLeft"], [1, "pb-3"], [1, "table", "table-bordered", "table-sm"], [4, "ngIf"], [1, "col-md-12", "text-left", "clearfix"], ["id", "fororder1", "directionLinks", "true", "maxSize", "9", "directionLinks", "true", "autoHide", "true", "responsive", "true", "previousLabel", "Prev", "nextLabel", "Next", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", "screenReaderCurrentLabel", "You're on page", 1, "my-pagination", "marginLeft", 3, "pageChange", "pageBoundsCorrection"], ["orderFormModal", ""], [1, "my-container"], ["customLoadingTemplate", ""], [3, "show", "config", "template"], [1, "col-md-12"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "button", 1, "ml-4", "btn", "btn-dark", 3, "click"], ["type", "button", "class", "ml-4 btn btn-dark", 3, "click", 4, "ngIf"], [1, "col-md-12", "text-right"], ["aria-hidden", "true", 1, "fa", "fa-filter", "customfiltericon", "m-10", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh", "customfiltericon", "m-10", 3, "click"], [1, "modal-header", "py-1"], [1, "modal-title", "headerTitle", "mb-0"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "para", 3, "src"], [1, "custombuttondiv", 3, "click"], [1, "customwid", "labelTitles"], [1, "margincustom", "customwid"], ["class", " fa fa-arrow-down text-right", "aria-hidden", "true", 4, "ngIf"], ["class", " fa fa-arrow-up text-right", "aria-hidden", "true", 4, "ngIf"], ["class", "col-md-12 ", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "text-left", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "text-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-arrow-down", "text-right"], ["aria-hidden", "true", 1, "fa", "fa-arrow-up", "text-right"], ["placeholder", "Enter Order Id", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeHolder", "Type In Customer Name Here", 3, "data", "ngModel", "searchKeyword", "itemTemplate", "notFoundTemplate", "ngModelChange", "selected", "inputChanged"], ["id", "itemTemplate"], ["itemTemplate", ""], ["notFoundTemplate", ""], [3, "innerHTML"], ["type", "date", "placeholder", "Enter Order date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "status", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "OrderPlaced", 1, "labelValue"], ["value", "Confirmed", 1, "labelValue"], ["value", "Packaged", 1, "labelValue"], ["value", "Shipped", 1, "labelValue"], ["value", "Rejected", 1, "labelValue"], [3, "class", 4, "ngFor", "ngForOf"], [1, "table", "borderless"], [1, "customdiv"], [3, "ngModel", "ngModelChange", "change"], [1, "btn", "btn-dark", 3, "disabled", "click"], ["colspan", "7", "align", "center"], [1, "custom_timebox", "p-0", 3, "formGroup"], ["class", "row m-4", 4, "ngIf"], [1, "form-group"], [1, "labelTitles"], ["formControlName", "deliveryMode", "name", "deliveryMode", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["class", "labelValue", 3, "value", 4, "ngFor", "ngForOf"], [1, "row", "marginTop", 2, "border", "0", "padding", "10"], [1, "col-md-12", "form-group"], ["for", "email", 1, "labelTitles"], [1, "col-md-12", "form-group", "marginTop", 3, "click"], [1, "profile-image-wrapper"], [1, "profile-image"], [1, "edit-icon", 3, "click"], ["type", "file", "name", "files[]", "id", "file-selector", "accept", ".jpg, .jpeg, .png", 3, "change"], [1, "card-body", "prescriptionlistclass", "table-responsive"], [1, "table", "table-striped", "table-bordered", "table-sm"], ["formArrayName", "medicineListItems", 4, "ngFor", "ngForOf"], [1, "col-md-12", "text-right", "mt-4"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "customfiltericon", "m-10", 3, "click"], [1, "reducetextforicon"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "click"], ["class", "cutomeerrortext", 4, "ngIf"], [1, "row", "m-4"], [3, "data", "ngModel", "searchKeyword", "itemTemplate", "notFoundTemplate", "ngModelChange", "selected", "inputChanged"], ["formControlName", "status", "name", "status", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], ["myname", ""], ["disabled", "", "formControlName", "status", "placeholder", "OrderPlaced", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], [1, "labelValue", 3, "value"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "custom-control", "custom-radio", "customradio"], ["type", "radio", "name", "mode", 1, "customradio", 3, "value", "ngModel", "checked", "ngModelChange", "click"], [1, "oldprescription-image-wrapper"], [1, "oldprescription-image", 3, "click"], ["formArrayName", "medicineListItems"], [3, "formGroupName"], [1, "table", "table-bordered", "table-sm", "mt-2"], [2, "width", "10%"], [2, "width", "60%"], [1, "customwidth"], [1, "customwidth", "marginTop"], ["placeHolder", "Type In Medicine Name Here", 3, "data", "searchKeyword", "itemTemplate", "notFoundTemplate", "selected", "inputChanged"], ["disabled", "", "formControlName", "medicineName", 1, "customwidth", "form-control"], [2, "width", "30%"], ["formControlName", "quantity", "placeholder", "Quantity", 1, "form-control"], [1, "row", "text-right", "ml-2"], ["aria-hidden", "true", 1, "fa", "fa-minus-circle", "customfiltericon", "m-10", 3, "click"], [1, "cutomeerrortext"], [1, "redcolor", "ml-2"], [1, "fa", "fas", "fa-exclamation"]],
      template: function OrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderComponent_div_3_Template, 6, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderComponent_div_4_Template, 3, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OrderComponent_ng_template_5_Template, 7, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OrderComponent_ng_template_7_Template, 7, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OrderComponent_ng_template_9_Template, 41, 12, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Order Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Customer Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Medicine Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, OrderComponent_th_26_Template, 2, 0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Created Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, OrderComponent_th_29_Template, 2, 0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, OrderComponent_tbody_31_Template, 3, 8, "tbody", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "pagination-controls", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function OrderComponent_Template_pagination_controls_pageChange_33_listener($event) {
            return ctx.pageChanged($event);
          })("pageBoundsCorrection", function OrderComponent_Template_pagination_controls_pageBoundsCorrection_33_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, OrderComponent_tbody_34_Template, 4, 0, "tbody", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, OrderComponent_ng_template_35_Template, 57, 16, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, OrderComponent_ng_template_38_Template, 1, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "ngx-loading", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", "Order")("icon", "fa-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.order.create);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.order.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" List of existing ", ctx.userKind, "s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.order.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.order.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loading)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c9))("template", _r358);
        }
      },
      directives: [_shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"], ngx_loading__WEBPACK_IMPORTED_MODULE_11__["NgxLoadingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_12__["AutocompleteComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_13__["UiSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]],
      styles: ["span.bootstrap-switch-handle-off.bootstrap-switch-default[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.customwidth[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.qtycolwidth[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.profile-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.borderless[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .borderless[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n  width: 100%;\n}\n\n.para[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto !important;\n}\n\n.reducetextforicon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 5px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  border-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.oldprescription-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.my-container[_ngcontent-%COMP%]   .custom-class[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  color: black;\n  top: 40%;\n  right: 50%;\n  border: 2px solid #1f94ed;\n  border-radius: 50%;\n}\n\n.oldprescription-image[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 70px;\n  border-radius: 10%;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.confirmed[_ngcontent-%COMP%] {\n  color: white;\n  background: #117b30;\n}\n\n.orderplaced[_ngcontent-%COMP%] {\n  color: white;\n  background: #7b6b11;\n}\n\n.packaged[_ngcontent-%COMP%] {\n  color: white;\n  background: #B2DFEE;\n}\n\n.shipped[_ngcontent-%COMP%] {\n  color: #d0f1d7;\n  background: #00688B;\n}\n\n.rejected[_ngcontent-%COMP%] {\n  color: #d0f1d7;\n  background: #F08080;\n}\n\n.labelTitles[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.marginLeft[_ngcontent-%COMP%] {\n  margin-left: -25px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  border-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.prescriptionlistclass[_ngcontent-%COMP%] {\n  height: 290px !important;\n  width: auto;\n  overflow-y: scroll;\n}\n\n.clearfix[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n}\n\n.customradio[_ngcontent-%COMP%] {\n  font-size: 48px !important;\n}\n\n.redcolor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userInfo[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n\n.userInfo[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 95% !important;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .usermngtableinfo[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.no-resize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.m-20[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.no-focus[_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0Usc0JBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO0FDR0Y7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7QUNLSjs7QURIQTtFQUNJLDhCQUFBO0VBRUEsV0FBQTtBQ0tKOztBREhFO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FDTUo7O0FESkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNPRjs7QURGRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDSUo7O0FERkk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDSU47O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQztFQUNHLFlBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDRUo7O0FEQUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDRU47O0FERUU7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENFO0VBQ0Usa0JBQUE7RUFFQSxlQUFBO0FDQ0o7O0FEQ0U7RUFDRSwwQkFBQTtBQ0VKOztBREFBO0VBRUksVUFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksZ0NBQUE7QUNJSjs7QUREQTtFQUNJLG1CQUFBO0FDSUo7O0FEREE7RUFDSSxxQkFBQTtBQ0lKOztBREZBO0VBQ0ksbUJBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTUo7O0FESkE7RUFDSSxXQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtBQ1FKOztBRE5BO0VBQ0UsZ0JBQUE7QUNTRjs7QURQQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ1VGOztBRFJBO0VBQ0ksWUFBQTtBQ1dKOztBRFRBO0VBQ0ksWUFBQTtBQ1lKOztBRFZBO0VBQ0ksYUFBQTtBQ2FKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L29yZGVyL29yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Bhbi5ib290c3RyYXAtc3dpdGNoLWhhbmRsZS1vZmYuYm9vdHN0cmFwLXN3aXRjaC1kZWZhdWx0IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4uY3VzdG9td2lkdGh7XHJcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5xdHljb2x3aWR0aHtcclxuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnByb2ZpbGUtaW1hZ2Utd3JhcHBlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYm9yZGVybGVzcyB0ZCwgLmJvcmRlcmxlc3MgdGgge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5kaXZpZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIC8vbWFyZ2luLXRvcDoxcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnBhcmF7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OmF1dG8gIWltcG9ydGFudDtcclxufVxyXG4ucmVkdWNldGV4dGZvcmljb257XHJcbiAgZm9udC1zaXplIDoyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG5cclxuXHJcblxyXG4gIC5wcm9maWxlLWltYWdlIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAgIC5lZGl0LWljb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDo3cHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1ib3R0b206MnB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuIFxyXG4gIC5vbGRwcmVzY3JpcHRpb24taW1hZ2Utd3JhcHBlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm15LWNvbnRhaW5lciAuY3VzdG9tLWNsYXNze1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIHRvcDogNDAlO1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzFmOTRlZDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLy96LWluZGV4OiA5OTk5OTtcclxufVxyXG4ub2xkcHJlc2NyaXB0aW9uLWltYWdlIHtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG59XHJcbiAuY29uZmlybWVkIHsgICBcclxuICAgIGNvbG9yOiB3aGl0ZTsgICBcclxuICAgIGJhY2tncm91bmQ6ICMxMTdiMzA7ICAgIFxyXG4gIH1cclxuXHJcbiAgLm9yZGVycGxhY2VkIHsgICBcclxuICAgIGNvbG9yOiB3aGl0ZTsgICBcclxuICAgIGJhY2tncm91bmQ6ICM3YjZiMTE7ICAgIFxyXG4gIH1cclxuXHJcbiAgLnBhY2thZ2VkIHsgICBcclxuICAgIGNvbG9yOndoaXRlOyAgIFxyXG4gICAgYmFja2dyb3VuZDogI0IyREZFRTsgICAgXHJcbiAgfVxyXG5cclxuICAuc2hpcHBlZCB7ICAgXHJcbiAgICBjb2xvcjogI2QwZjFkNzsgICBcclxuICAgIGJhY2tncm91bmQ6ICMwMDY4OEI7ICAgIFxyXG4gIH1cclxuXHJcbiAgLnJlamVjdGVkIHsgICBcclxuICAgIGNvbG9yOiAjZDBmMWQ3OyAgIFxyXG4gICAgYmFja2dyb3VuZDogI0YwODA4MDsgICAgXHJcbiAgfVxyXG5cclxuLmxhYmVsVGl0bGVze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1hcmdpbkxlZnR7XHJcbiAgICBtYXJnaW4tbGVmdDotMjVweFxyXG59XHJcbi5wcm9maWxlLWltYWdlIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAgIC5lZGl0LWljb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDo3cHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1ib3R0b206MnB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICAucHJlc2NyaXB0aW9ubGlzdGNsYXNze1xyXG4gICAgaGVpZ2h0OiAyOTBweCAhaW1wb3J0YW50OyAgICBcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuICAuY2xlYXJmaXgge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmN1c3RvbXJhZGlve1xyXG4gICAgZm9udC1zaXplOiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4ucmVkY29sb3J7XHJcbiAgICBcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3IgOiBwb2ludGVyO1xyXG59XHJcbi51c2VySW5mbyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnVzZXJJbmZvOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VybW5ndGFibGUgLnVzZXJtbmd0YWJsZWluZm97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi51c2VybW5ndGFibGUgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUgdGQgaW1nIHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59ICBcclxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMDtcclxufVxyXG5oMyB7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxufVxyXG5wcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4ubm8tcmVzaXplIHtcclxuICAgIHJlc2l6ZSA6IG5vbmU7XHJcbn1cclxuLm0tMjAge1xyXG4gICAgbWFyZ2luIDogMjBweDtcclxufVxyXG4ubm8tZm9jdXMge1xyXG4gICAgb3V0bGluZSA6IG5vbmU7XHJcbn0iLCJzcGFuLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZi5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jdXN0b213aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5xdHljb2x3aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlLWltYWdlLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5ib3JkZXJsZXNzIHRkLCAuYm9yZGVybGVzcyB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFyYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnJlZHVjZXRleHRmb3JpY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ucHJvZmlsZS1pbWFnZSB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiAyMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbWFnZSAuZWRpdC1pY29uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiA3cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xufVxuXG4ub2xkcHJlc2NyaXB0aW9uLWltYWdlLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5teS1jb250YWluZXIgLmN1c3RvbS1jbGFzcyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0b3A6IDQwJTtcbiAgcmlnaHQ6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzFmOTRlZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ub2xkcHJlc2NyaXB0aW9uLWltYWdlIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb25maXJtZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMxMTdiMzA7XG59XG5cbi5vcmRlcnBsYWNlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzdiNmIxMTtcbn1cblxuLnBhY2thZ2VkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjQjJERkVFO1xufVxuXG4uc2hpcHBlZCB7XG4gIGNvbG9yOiAjZDBmMWQ3O1xuICBiYWNrZ3JvdW5kOiAjMDA2ODhCO1xufVxuXG4ucmVqZWN0ZWQge1xuICBjb2xvcjogI2QwZjFkNztcbiAgYmFja2dyb3VuZDogI0YwODA4MDtcbn1cblxuLmxhYmVsVGl0bGVzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXJnaW5MZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xufVxuXG4ucHJvZmlsZS1pbWFnZSB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiAyMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbWFnZSAuZWRpdC1pY29uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiA3cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xufVxuXG4ucHJlc2NyaXB0aW9ubGlzdGNsYXNzIHtcbiAgaGVpZ2h0OiAyOTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0bztcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uY2xlYXJmaXgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmN1c3RvbXJhZGlvIHtcbiAgZm9udC1zaXplOiA0OHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yZWRjb2xvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXNlckluZm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLnVzZXJJbmZvOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubW9kYWwtZGlhbG9nIHtcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xufVxuXG4udXNlcm1uZ3RhYmxlIC51c2VybW5ndGFibGVpbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnVzZXJtbmd0YWJsZSAudGFibGUtcmVzcG9uc2l2ZSB0YWJsZSB0ZCBpbWcge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udXNlcm1uZ3RhYmxlIC5hY2NvcmRpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxLjI1cmVtIDA7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cblxucHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLm5vLXJlc2l6ZSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLm0tMjAge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5uby1mb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order',
          templateUrl: './order.component.html',
          styleUrls: ['./order.component.scss'],
          providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_services_data_access__WEBPACK_IMPORTED_MODULE_7__["DataAccess"]
        }];
      }, {
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['myname']
        }],
        fileInputDemoPhoto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fileInputDemoPhoto']
        }],
        accordionComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['acc']
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['content']
        }],
        orderFormModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['orderFormModal']
        }],
        searFiltersModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searFiltersModal']
        }],
        enlargedImageModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['enlargedImageModal']
        }],
        enlargedPrescriptionModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['enlargedPrescriptionModal']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layout/order/order.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/layout/order/order.module.ts ***!
    \**********************************************/

  /*! exports provided: OrderModule */

  /***/
  function srcAppLayoutOrderOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderModule", function () {
      return OrderModule;
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


    var _order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./order.component */
    "./src/app/layout/order/order.component.ts");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var _order_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./order-routing.module */
    "./src/app/layout/order/order-routing.module.ts");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js"); //import { LoadingModule } from 'ngx-loading';
    //import {NgxToggleModule} from "ngx-toggle";
    //import {DataTableModule, SharedModule, InputTextModule} from 'primeng/primeng';
    //import {PaginatorModule} from 'primeng/paginator';
    //import {DropdownModule} from 'primeng/dropdown';


    var OrderModule = function OrderModule() {
      _classCallCheck(this, OrderModule);
    };

    OrderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrderModule
    });
    OrderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrderModule_Factory(t) {
        return new (t || OrderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_12__["OrderRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
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
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderModule, {
        declarations: [_order_component__WEBPACK_IMPORTED_MODULE_10__["OrderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_12__["OrderRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_12__["OrderRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
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
          declarations: [_order_component__WEBPACK_IMPORTED_MODULE_10__["OrderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=order-order-module-es5.js.map