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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-coupon-module"], {
  /***/
  "./src/app/layout/coupon/coupon-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/layout/coupon/coupon-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: CouponRoutingModule */

  /***/
  function srcAppLayoutCouponCouponRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponRoutingModule", function () {
      return CouponRoutingModule;
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


    var _coupon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./coupon.component */
    "./src/app/layout/coupon/coupon.component.ts");

    var routes = [{
      path: '',
      component: _coupon_component__WEBPACK_IMPORTED_MODULE_2__["CouponComponent"]
    }];

    var CouponRoutingModule = function CouponRoutingModule() {
      _classCallCheck(this, CouponRoutingModule);
    };

    CouponRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CouponRoutingModule
    });
    CouponRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CouponRoutingModule_Factory(t) {
        return new (t || CouponRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CouponRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CouponRoutingModule, [{
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
  "./src/app/layout/coupon/coupon.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/coupon/coupon.component.ts ***!
    \***************************************************/

  /*! exports provided: CouponComponent */

  /***/
  function srcAppLayoutCouponCouponComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponComponent", function () {
      return CouponComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_services_data_access__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/data-access */
    "./src/app/services/data-access.ts");
    /* harmony import */


    var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/modules/page-header/page-header.component */
    "./src/app/shared/modules/page-header/page-header.component.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");
    /* harmony import */


    var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-toggle-switch */
    "./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js");

    var _c0 = ["fileInputDemoPhoto"];
    var _c1 = ["acc"];
    var _c2 = ["content"];
    var _c3 = ["couponFormModal"];
    var _c4 = ["searFiltersModal"];
    var _c5 = ["enlargedImageModal"];
    var _c6 = ["enlargedPrescriptionModal"];

    function CouponComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r828 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CouponComponent_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r828);

          var ctx_r827 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r827.openforAddCouponDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Coupon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CouponComponent_th_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enable/Disable");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CouponComponent_th_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CouponComponent_tbody_28_tr_1_td_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r835 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ui-switch", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CouponComponent_tbody_28_tr_1_td_14_Template_ui_switch_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r835);

          var obj_r830 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return obj_r830.active = $event;
        })("change", function CouponComponent_tbody_28_tr_1_td_14_Template_ui_switch_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r835);

          var obj_r830 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r836 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r836.updateStatus($event, obj_r830);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var obj_r830 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", obj_r830.active);
      }
    }

    function CouponComponent_tbody_28_tr_1_td_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r841 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CouponComponent_tbody_28_tr_1_td_17_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r841);

          var obj_r830 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r839 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r839.openForeditCoupon(obj_r830);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CouponComponent_tbody_28_tr_1_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CouponComponent_tbody_28_tr_1_td_14_Template, 2, 1, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CouponComponent_tbody_28_tr_1_td_17_Template, 3, 0, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var obj_r830 = ctx.$implicit;

        var ctx_r829 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 12, obj_r830.status));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r830 == null ? null : obj_r830.coupon_code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", obj_r830 == null ? null : obj_r830.coupon_amount, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r829.convertToHumanDate(obj_r830.expiryDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", obj_r830 == null ? null : obj_r830.couponUsageType, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", obj_r830 == null ? null : obj_r830.maximumUseTimes, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", obj_r830 == null ? null : obj_r830.alreadyTimes, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r829.user.role.doctor.coupon.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r829.convertToHumanDate(obj_r830.createdDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r829.user.role.doctor.coupon.edit);
      }
    }

    var _c7 = function _c7(a1, a2, a3) {
      return {
        id: "forcoupon1",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    function CouponComponent_tbody_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CouponComponent_tbody_28_tr_1_Template, 18, 14, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r821 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r821.normalFiltereduserListArr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c7, ctx_r821.pageSize, ctx_r821.pageNo, ctx_r821.totalDocRecords)));
      }
    }

    function CouponComponent_tbody_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No record available");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CouponComponent_ng_template_32_div_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r846 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " How Many Times?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CouponComponent_ng_template_32_div_37_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r846);

          var ctx_r845 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r845.couponObject.maximumUseTimes = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r843 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r843.couponObject.maximumUseTimes);
      }
    }

    function CouponComponent_ng_template_32_p_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0Fix The Error : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r844 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r844.form_fill_failure_msg, " ");
      }
    }

    function CouponComponent_ng_template_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r848 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CouponComponent_ng_template_32_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r848);

          var ctx_r847 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r847.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Coupon Expiry Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CouponComponent_ng_template_32_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r848);

          var ctx_r849 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r849.couponObject.expiryDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Usage Frequency ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CouponComponent_ng_template_32_Template_select_ngModelChange_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r848);

          var ctx_r850 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r850.couponObject.couponUsageType = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Multiple Use");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Single Use");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Allowed Payment Mode ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CouponComponent_ng_template_32_Template_select_ngModelChange_30_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r848);

          var ctx_r851 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r851.couponObject.paymentMode = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cash");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "All");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CouponComponent_ng_template_32_div_37_Template, 7, 1, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Coupon Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CouponComponent_ng_template_32_Template_input_ngModelChange_44_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r848);

          var ctx_r852 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r852.couponObject.coupon_code = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Coupon Amount(Rupees)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CouponComponent_ng_template_32_Template_input_ngModelChange_51_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r848);

          var ctx_r853 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r853.couponObject.coupon_amount = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CouponComponent_ng_template_32_Template_button_click_53_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r848);

          var ctx_r854 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r854.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CouponComponent_ng_template_32_Template_button_click_55_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r848);

          var ctx_r855 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r855.closeMainModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, CouponComponent_ng_template_32_p_57_Template, 6, 1, "p", 44);
      }

      if (rf & 2) {
        var ctx_r824 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r824.couponFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, ctx_r824.mode), " Coupon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r824.couponObject.expiryDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r824.couponObject.couponUsageType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r824.couponObject.paymentMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r824.couponObject.couponUsageType == "multiple_use");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r824.couponObject.coupon_code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r824.couponObject.coupon_amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r824.couponFormGroup.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r824.submitAttempt);
      }
    }

    function CouponComponent_ng_template_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Please wait..fetching data ");
      }
    }

    var _c8 = function _c8() {
      return {
        primaryColour: "blue",
        secondaryColour: "red",
        fullScreenBackdrop: false
      };
    };

    var CouponComponent =
    /*#__PURE__*/
    function (_src_BaseComponent__W) {
      _inherits(CouponComponent, _src_BaseComponent__W);

      var _super = _createSuper(CouponComponent);

      function CouponComponent(datePipe, router, route, modal, toastr, _fb, dataService) {
        var _this;

        _classCallCheck(this, CouponComponent);

        _this = _super.call(this, router);
        _this.datePipe = datePipe;
        _this.router = router;
        _this.route = route;
        _this.modal = modal;
        _this.toastr = toastr;
        _this._fb = _fb;
        _this.dataService = dataService;
        _this.loadingCustomeMsg = "Loading...";
        _this.loading = true;
        _this.couponType = {
          delivery_coupon: []
        };
        _this.isPrescriptionUploaded = false;
        _this.showOldPrescription = '';
        _this.allDynaFilter = null;
        _this.patientList = [];
        _this.customerList = [];
        _this.states = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].states;
        _this.keywordCustomer = "name";
        _this.fetchCouponByCustomer = false;
        _this.couponList = [];
        _this.fromCustomerPage = false;
        _this.userKind = "coupon";
        _this.normalFiltereduserListArr = [];
        _this.customerOldPrescriptionListArr = [];
        _this.items = [];
        _this.pageSize = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].RECORDSIZE;
        _this.pageNo = 1;
        _this.tempArray = [];
        _this.subLogicType = false;
        _this.keywordMedicine = "name";
        _this.couponObject = {
          active: true,
          coupon_amount: '',
          coupon_code: '',
          expiryDate: null,
          paymentMode: 'Cash',
          couponUsageType: 'single_use',
          maximumUseTimes: '0',
          alreadyTimes: '0'
        };
        _this.medicineArray = [[{
          medicineId: '',
          medicineName: "",
          quantity: "",
          mg: ''
        }]];
        _this.attendantList = [];
        _this.couponObjectBase = {
          active: true,
          coupon_amount: '',
          coupon_code: '',
          expiryDate: null,
          paymentMode: 'Cash',
          couponUsageType: 'single_use',
          maximumUseTimes: '0',
          alreadyTimes: '0'
        };
        _this.openingMeridian = true; //  this.customCoupontime.hour = 9
        // this.customCoupontime.minute = 10

        if (!_this.user.role.doctor.coupon.view) {
          return _possibleConstructorReturn(_this);
        }

        _this.customerName = _this.route.snapshot.paramMap.get('name');
        _this.fromCustomerPage = _this.route.snapshot.paramMap.get('fromCustomerPage') == 'fromCustomerPage';
        console.log("this.customerName  **" + _this.customerName); //this.customerId =  "5ee8ea1158ea514eec6f6e18"//this.route.snapshot.paramMap.get('customerId');

        _this.couponFormGroup = _this.buildForm();
        return _this;
      }

      _createClass(CouponComponent, [{
        key: "buildForm",
        value: function buildForm() {
          return this._fb.group({
            couponUsageType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.couponObject.couponUsageType, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            alreadyTimes: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.couponObject.alreadyTimes),
            maximumUseTimes: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.couponObject.maximumUseTimes),
            paymentMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.couponObject.paymentMode),
            expiryDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.couponObject.expiryDate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            coupon_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.couponObject.coupon_code, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            coupon_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.couponObject.coupon_amount, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
        }
      }, {
        key: "changePercentAmount",
        value: function changePercentAmount() {}
      }, {
        key: "convertToHumanCouponTypeDesc",
        value: function convertToHumanCouponTypeDesc(couponType) {
          if (couponType == "delivery_coupon") {
            return 'Direct Coupons on Delivery';
          }

          if (couponType == "order_volume") {
            return 'Coupons ON Order Volume';
          }

          if (couponType == "coupon") {
            return 'Coupon';
          }
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
        key: "getCoupon",
        value: function getCoupon() {}
      }, {
        key: "openforAddCouponDialog",
        value: function openforAddCouponDialog() {
          this.customerOldPrescriptionListArr = [];
          this.customerId = '';
          /*
          if(this.customerId == undefined || !this.customerId || this.customerId == ''){
           alert("Please select a customer first, from the dropdown")
           return
          }
          */

          this.mode = "add";
          this.couponFormGroup = this.buildForm(); // 
          //this.medicineListItems.push({})

          this.couponObject = Object.assign({}, this.couponObjectBase);
          this.couponObject.coupon_code = "COUPO" + Math.random().toString(5).substr(2, 5);
          this.modalReferenceCouponForm = this.modal.open(this.couponFormModal);
        }
      }, {
        key: "getPatient",
        value: function getPatient() {}
      }, {
        key: "closeModal",
        value: function closeModal() {
          if (this.modalReferenceCouponForm) this.modalReferenceCouponForm.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!localStorage.getItem('isLoggedin')) {
            this.router.navigate(["/login"]);
          }

          this.fetchCouponsCount();
          this.fetchCoupons(); //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
        }
      }, {
        key: "fetchCustomers",
        value: function fetchCustomers() {
          var _this2 = this;

          //  this.pageNo = 1
          //this.pageSize = 10
          this.dataService.fetchAllCustomersNotByName().then(function (result) {
            //this.customerList = [];      
            _this2.customerList = result.map(function (element) {
              return element;
            }); // if(!this.fromCustomerPage){
            // this.customerId = this.customerList[0]
            // }
          }, function (err) {
            _this2.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          if (!this.couponFormGroup.valid) {
            this.submitAttempt = true;
            this.validateFields(this.couponFormGroup.controls);
            return;
          }

          this.couponObject.expiryDate = this.fromJsDateToMongoDate(this.couponObject.expiryDate);

          if (this.couponObject.couponUsageType == 'single_use') {
            this.couponObject.maximumUseTimes = '1';
          } //alert(parseInt(this.couponObject.maximumUseTimes))


          if (this.couponObject.couponUsageType == 'multiple_use' && parseInt(this.couponObject.maximumUseTimes) < 2) {
            alert("For the multi use coupon, the maximum use number must be greater than 1");
            return;
          }

          if (this.mode == "add") {
            delete this.couponObject['customer'];
            console.log("this.couponObject for add == " + JSON.stringify(this.couponObject));
            this.dataService.addCoupon(this.couponObject).then(function (result) {
              //  console.log("result after adduser == "+JSON.stringify(result))
              _this3.commonAfterSaveCode();

              _this3.form_fill_failure_msg = "";

              _this3.toastr.successToastr('New coupon is added successfully');
            }, function (err) {
              console.log(err);
            });
          }

          if (this.mode == "edit") {
            this.loading = true; //delete this.couponObject['patient']

            delete this.couponObject['customer'];
            this.couponObject['couponId'] = this.couponObject['_id']; //  console.log("this.couponObject for edit == "+JSON.stringify(this.couponObject))

            this.dataService.updateCoupon(this.couponObject).then(function (result) {
              //  console.log("****** updatecoupon result   ===== **"+JSON.stringify(result))
              _this3.commonAfterSaveCode();

              if (_this3.isPrescriptionUploaded) {
                _this3.isPrescriptionUploaded = false;
              }

              _this3.form_fill_failure_msg = "";

              _this3.toastr.successToastr('coupon is updated successfully');
            }, function (err) {
              //this.mode = "add"
              _this3.loading = false;
              console.log(err);
            });
          }
        }
      }, {
        key: "commonAfterSaveCode",
        value: function commonAfterSaveCode() {
          var _this4 = this;

          this.customerId = '';
          this.loading = true; // this.normalFiltereduserListArr = []; 

          this.closeMainModal();
          setTimeout(function () {
            _this4.loading = false;
            _this4.mode = "add";

            _this4.fetchCoupons();
          }, 2000);
        }
      }, {
        key: "enlargePrescription",
        value: function enlargePrescription(obj) {
          //this.closeCustomModal()
          //this.enlargedPic = ''
          var image = obj.uploadPhotoCouponPrescriptionURL;
          this.enlargedPrescPic = image;
          this.modalReferencePrescriptionImage = this.modal.open(this.enlargedPrescriptionModal);
        }
      }, {
        key: "selectPrescription",
        value: function selectPrescription(obj) {
          // let image  = obj.uploadPhotoCouponPrescriptionURL    
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

          console.log("obj ==" + JSON.stringify(obj)); //this.getPhotoOLDPrescription(obj.uploadPhotoCouponPrescriptionURL)
          //this.showOldPrescription  = 'url(' + obj.uploadPhotoCouponPrescriptionURL + ')'
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
        key: "getPhotoOldPrescription",
        value: function getPhotoOldPrescription(obj) {
          try {
            var image = obj.uploadPhotoCouponPrescriptionURL;
            image = obj.uploadPhotoCouponPrescriptionURL;
            /*if(obj && obj.uploadPhotoCouponPrescription){
              image = obj.uploadPhotoCouponPrescription
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
          this.couponFormGroup = this.buildForm();
          console.log("this.medicineListItems **" + this.medicineListItems.length);
        }
      }, {
        key: "openForeditCoupon",
        value: function openForeditCoupon(user) {
          //this.modalReferenceCouponForm = this.modal.open(this.couponFormModal);
          //this.loading = true
          this.loadingCustomeMsg == "Fetching old prescriptions, please wait..";
          this.mode = "edit";
          this.modalReferenceCouponForm = this.modal.open(this.couponFormModal);
          this.customerId = user['customerId'];
          this.couponObject = Object.assign({}, user);
          this.couponObject.expiryDate = this.datePipe.transform(this.couponObject.expiryDate, 'yyyy-MM-dd');
          console.log("this.customerId == " + this.customerId); //if(this.customerId)
          //this.fetchAllCouponPrescriptions()  

          var data = {
            customerId: this.customerId
          };
          console.log(" fetch old prescription for " + JSON.stringify(data));
          this.commonCodeDuringEdit();
        }
      }, {
        key: "reinitialise",
        value: function reinitialise() {
          this.couponDate = '';
          this.customerId = '';
          this.couponId = '';
          this.couponStatus = '';
          this.customerName = '';
          this.allDynaFilter = null;
          this.fetchCouponsCount();
          this.totalDocRecords = 0;
          this.fetchCoupons();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.reinitialise();
          this.toastr.successToastr('Filters reset, coupon list refreshed');
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          console.log("****** this.event   ===== **" + event);
          this.pageNo = event;
          this.applyFilter();
        }
      }, {
        key: "closeMainModal",
        value: function closeMainModal() {
          if (this.modalReferenceCouponForm) this.modalReferenceCouponForm.close();
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
            this.fetchCouponByCustomer = true;
          } else {
            this.fetchCouponByCustomer = false;
          }

          console.log("this.customerId " + this.customerId);
          this.fetchCouponsCount();
          this.fetchCoupons();
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
            this.couponFormGroup.get('customerId').patchValue(item['_id']);
            this.customerId = item['_id'];

            if (this.customerId) {
              this.loading = true;
              this.loadingCustomeMsg == "Fetching old prescriptions, please wait..";
              this.fetchAllCouponPrescriptions();
            } //console.log(" inside customerSelectEvent "+JSON.stringify(item))

          } // do something with selected item

        }
      }, {
        key: "onChangeCustomerSearch",
        value: function onChangeCustomerSearch(val) {
          var _this5 = this;

          //console.log(" inside onChangePatientSearch val "+val)
          // if(val && val.length >2 ){
          var data = {
            name: val
          };
          this.dataService.fetchAllCustomers(data).then(function (result) {
            _this5.customerList = result.map(function (element) {
              return element;
            });
          }, function (err) {//console.log(err);
          }); // }
        }
      }, {
        key: "fetchCouponsCount",
        value: function fetchCouponsCount() {
          var _this6 = this;

          //  this.pageNo = 1
          //  this.pageSize = 10

          /* let data = {}
           if(this.fetchCouponByCustomer){
             data['fetchCouponByCustomer'] = true
             data['customerId'] = this.customerId
           }else{
             data['fetchCouponByCustomer'] = false
           }
           this.dataService.fetchCouponsCount(data).then((result) => {
               
               console.log("****** fetchcouponsCount result   ===== **"+JSON.stringify(result))
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
          }; // this.fetchCouponsCount({filter : allDynaFilter})  
          //this.fetchCouponsByFilters({filter : allDynaFilter})   

          console.log(" inside data " + JSON.stringify(data));
          this.dataService.fetchCouponsCount().then(function (result) {
            console.log("****** fetchcouponsCount result   ===== **" + JSON.stringify(result));
            _this6.totalDocRecords = result;
            _this6.loading = false;
            console.log("****** this.totalDocRecords ===== **" + _this6.totalDocRecords);
          }, function (err) {
            _this6.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "fetchAllCouponPrescriptions",
        value: function fetchAllCouponPrescriptions() {
          var data = {
            customerId: this.customerId
          };
          console.log(" fetch old prescription for " + JSON.stringify(data));
        }
      }, {
        key: "fetchCoupons",
        value: function fetchCoupons() {
          var _this7 = this;

          //  this.pageNo = 1
          //this.pageSize = 10
          // let data = {pageNo:this.pageNo,perPage:this.pageSize}
          //data['customerId'] = this.customerId
          // console.log("this.customerId   ===== **"+this.customerId)
          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize,
            filter: this.allDynaFilter
          }; // this.fetchCouponsCount({filter : allDynaFilter})  
          //this.fetchCouponsByFilters({filter : allDynaFilter})   
          //console.log(" inside data "+JSON.stringify(data))

          this.dataService.fetchCoupons(data).then(function (result) {
            _this7.normalFiltereduserListArr = [];
            _this7.normalFiltereduserListArr = result.map(function (element) {
              return element;
            }); //  console.log("****** this.fetchCouponsByFilters   ===== **"+JSON.stringify(this.normalFiltereduserListArr))      

            _this7.loading = false;
          }, function (err) {
            _this7.normalFiltereduserListArr = [];
            _this7.loading = false;
            console.log(err);
          });
          /*
              if(this.fetchCouponByCustomer){
                data['fetchCouponByCustomer'] = true
                data['customerId'] = this.customerId
              }else{
                data['fetchCouponByCustomer'] = false
              }
              
              this.dataService.fetchCoupons(data).then((result:[]) => {
                  
                this.normalFiltereduserListArr = [];
               // this.customerList = []
                  this.normalFiltereduserListArr = result.map(element => {
                    
                    return   element
                  })
                  console.log("****** this.fetchCoupons   ===== **"+JSON.stringify(this.normalFiltereduserListArr))
                  
          
                 // this.normalFiltereduserListArr.forEach(function(coupon, index){
                   // console.log("****** active   ===== **"+ coupon.active)
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
          var _this8 = this;

          // userInfo.active = value
          //  console.log("****** userInfo   ===== **"+JSON.stringify(userInfo))
          var data = {};
          userInfo.active = !userInfo.active;
          console.log("******  userInfo.active   ===== **" + userInfo.active);
          userInfo.couponId = userInfo._id;
          data['couponId'] = userInfo._id;
          data['active'] = userInfo.active;
          console.log("****** userInfo   ===== **" + JSON.stringify(data));
          this.dataService.updateCoupon(data).then(function (result) {
            //  console.log("****** updatecoupon result   ===== **"+JSON.stringify(result))
            _this8.fetchCoupons();

            _this8.loading = false;
          }, function (err) {
            _this8.loading = false;
            console.log(err);
          });
          this.toastr.successToastr('Coupon record updated successfully');
        }
      }]);

      return CouponComponent;
    }(src_BaseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);

    CouponComponent.ɵfac = function CouponComponent_Factory(t) {
      return new (t || CouponComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_access__WEBPACK_IMPORTED_MODULE_8__["DataAccess"]));
    };

    CouponComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CouponComponent,
      selectors: [["app-coupon"]],
      viewQuery: function CouponComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInputDemoPhoto = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordionComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.couponFormModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searFiltersModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.enlargedImageModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.enlargedPrescriptionModal = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 38,
      vars: 12,
      consts: [[3, "heading", "icon"], [1, "row"], ["class", "col-md-12", 4, "ngIf"], [1, "card-body", "table-responsive", "marginLeft"], [1, "pb-3"], [1, "table", "table-bcouponed", "table-sm"], [4, "ngIf"], [1, "col-md-12", "text-left", "clearfix"], ["id", "forcoupon1", "directionLinks", "true", "maxSize", "9", "directionLinks", "true", "autoHide", "true", "responsive", "true", "previousLabel", "Prev", "nextLabel", "Next", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", "screenReaderCurrentLabel", "You're on page", 1, "my-pagination", "marginLeft", 3, "pageChange", "pageBoundsCorrection"], ["couponFormModal", ""], [1, "my-container"], ["customLoadingTemplate", ""], [3, "show", "config", "template"], [1, "col-md-12"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [3, "class", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange", "change"], [1, "btn", "btn-dark", 3, "click"], ["colspan", "7", "align", "center"], [1, "custom_timebox", "p-0", 3, "formGroup"], [1, "modal-header", "py-1"], [1, "modal-title", "headerTitle", "mb-0"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "col-md-12", "form-group"], [1, "labelTitles"], [1, "col-md-12", "marginTop"], ["type", "date", "formControlName", "expiryDate", "placeholder", "Enter expiryDate", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["formControlName", "couponUsageType", "name", "couponUsageType", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "multiple_use", 1, "labelValue"], ["value", "single_use", 1, "labelValue"], ["formControlName", "paymentMode", "name", "paymentMode", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Cash", 1, "labelValue"], ["value", "Card", 1, "labelValue"], ["value", "All", 1, "labelValue"], ["class", "row", 4, "ngIf"], ["for", "email", 1, "labelTitles"], ["formControlName", "coupon_code", "placeholder", "Enter Coupon Code", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "mt-2"], ["formControlName", "coupon_amount", "placeholder", "Enter Coupon Value", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "click"], ["class", "cutomeerrortext", 4, "ngIf"], ["formControlName", "maximumUseTimes", "placeholder", "Enter Maximum Use Times", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "cutomeerrortext"], [1, "redcolor", "ml-2"], [1, "fa", "fas", "fa-exclamation"]],
      template: function CouponComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CouponComponent_div_3_Template, 3, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Coupon Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Coupon Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Expiry date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Usage Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Maximum Times");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Already Used");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CouponComponent_th_23_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Created Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CouponComponent_th_26_Template, 2, 0, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CouponComponent_tbody_28_Template, 3, 8, "tbody", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "pagination-controls", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CouponComponent_Template_pagination_controls_pageChange_30_listener($event) {
            return ctx.pageChanged($event);
          })("pageBoundsCorrection", function CouponComponent_Template_pagination_controls_pageBoundsCorrection_30_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CouponComponent_tbody_31_Template, 4, 0, "tbody", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CouponComponent_ng_template_32_Template, 58, 12, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CouponComponent_ng_template_35_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "ngx-loading", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r825 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", "Coupon")("icon", "fa-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.coupon.create);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" List of existing ", ctx.userKind, "s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.coupon.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.coupon.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loading)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c8))("template", _r825);
        }
      },
      directives: [_shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"], ngx_loading__WEBPACK_IMPORTED_MODULE_11__["NgxLoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_12__["UiSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]],
      styles: ["span.bootstrap-switch-handle-off.bootstrap-switch-default[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.customwidth[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.qtycolwidth[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.profile-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.bcouponless[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .bcouponless[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  bcoupon: none;\n}\n\n.divider[_ngcontent-%COMP%] {\n  bcoupon-bottom: 1px solid black;\n  width: 100%;\n}\n\n.para[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto !important;\n}\n\n.reducetextforicon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 5px;\n}\n\n.customfiltericon[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-right: 50px;\n  font-weight: bold;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  bcoupon-radius: 50%;\n  bcoupon: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  bcoupon-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.oldprescription-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.my-container[_ngcontent-%COMP%]   .custom-class[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  color: black;\n  top: 40%;\n  right: 50%;\n  bcoupon: 2px solid #1f94ed;\n  bcoupon-radius: 50%;\n}\n\n.oldprescription-image[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 70px;\n  bcoupon-radius: 10%;\n  bcoupon: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.confirmed[_ngcontent-%COMP%] {\n  color: white;\n  background: #117b30;\n}\n\n.couponplaced[_ngcontent-%COMP%] {\n  color: white;\n  background: #7b6b11;\n}\n\n.packaged[_ngcontent-%COMP%] {\n  color: white;\n  background: #B2DFEE;\n}\n\n.shipped[_ngcontent-%COMP%] {\n  color: #d0f1d7;\n  background: #00688B;\n}\n\n.rejected[_ngcontent-%COMP%] {\n  color: #d0f1d7;\n  background: #F08080;\n}\n\n.labelTitles[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.marginLeft[_ngcontent-%COMP%] {\n  margin-left: -25px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  bcoupon-radius: 50%;\n  bcoupon: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  bcoupon-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.prescriptionlistclass[_ngcontent-%COMP%] {\n  height: 290px !important;\n  width: auto;\n  overflow-y: scroll;\n}\n\n.clearfix[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n}\n\n.customradio[_ngcontent-%COMP%] {\n  font-size: 48px !important;\n}\n\n.redcolor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userInfo[_ngcontent-%COMP%] {\n  bcoupon-bottom: 1px solid #dee2e6;\n}\n\n.margincustom[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n\n.customwid[_ngcontent-%COMP%] {\n  width: 80% !important;\n  min-width: 50% !important;\n}\n\n.userInfo[_ngcontent-%COMP%]:last-child {\n  bcoupon-bottom: none;\n}\n\n.custombuttondiv[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 40px !important;\n  margin-top: 30px;\n  margin-bottom: 20px;\n  bcoupon: 1px solid #ccc;\n  background-color: black;\n  color: white;\n  padding: 5px 5px;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 95% !important;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .usermngtableinfo[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.no-resize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.m-20[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.no-focus[_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC9jb3Vwb24vY291cG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvY291cG9uL2NvdXBvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNFLHNCQUFBO0FDRUY7O0FEQUE7RUFDRSxzQkFBQTtBQ0dGOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0FDS0o7O0FESEE7RUFDSSwrQkFBQTtFQUVBLFdBQUE7QUNLSjs7QURIRTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtBQ01KOztBREpBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1FGOztBREpFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNNSjs7QURKSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNNTjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0lKOztBRERBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FDSUY7O0FEREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0dGOztBREFDO0VBQ0csWUFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNJSjs7QURGSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNJTjs7QURBRTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDR0o7O0FEREU7RUFDRSxrQkFBQTtFQUVBLGVBQUE7QUNHSjs7QURERTtFQUNFLDBCQUFBO0FDSUo7O0FERkE7RUFFSSxVQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0FDS0o7O0FESEE7RUFDSSxpQ0FBQTtBQ01KOztBREpBO0VBQ0UsZ0JBQUE7QUNPRjs7QURMQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUNRRjs7QUROQTtFQUNJLG9CQUFBO0FDU0o7O0FEUEE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNVRjs7QURSQTtFQUNJLHFCQUFBO0FDV0o7O0FEVEE7RUFDSSxtQkFBQTtBQ1lKOztBRFZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNhSjs7QURYQTtFQUNJLFdBQUE7QUNjSjs7QURaQTtFQUNJLGtCQUFBO0FDZUo7O0FEYkE7RUFDRSxnQkFBQTtBQ2dCRjs7QURkQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ2lCRjs7QURmQTtFQUNJLFlBQUE7QUNrQko7O0FEaEJBO0VBQ0ksWUFBQTtBQ21CSjs7QURqQkE7RUFDSSxhQUFBO0FDb0JKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvdXBvbi9jb3Vwb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZi5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5jdXN0b213aWR0aHtcclxuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnF0eWNvbHdpZHRoe1xyXG4gIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxufVxyXG4ucHJvZmlsZS1pbWFnZS13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5iY291cG9ubGVzcyB0ZCwgLmJjb3Vwb25sZXNzIHRoIHtcclxuICAgIGJjb3Vwb246IG5vbmU7XHJcbn1cclxuLmRpdmlkZXIge1xyXG4gICAgYmNvdXBvbi1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIC8vbWFyZ2luLXRvcDoxcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnBhcmF7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OmF1dG8gIWltcG9ydGFudDtcclxufVxyXG4ucmVkdWNldGV4dGZvcmljb257XHJcbiAgZm9udC1zaXplIDoyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG4uY3VzdG9tZmlsdGVyaWNvbntcclxuICBmb250LXNpemUgOjI1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4gIC5wcm9maWxlLWltYWdlIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBiY291cG9uLXJhZGl1czogNTAlO1xyXG4gICAgYmNvdXBvbjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gICAgLmVkaXQtaWNvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIGJjb3Vwb24tcmFkaXVzOiAyMCU7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDo3cHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1ib3R0b206MnB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuIFxyXG4gIC5vbGRwcmVzY3JpcHRpb24taW1hZ2Utd3JhcHBlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm15LWNvbnRhaW5lciAuY3VzdG9tLWNsYXNze1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIHRvcDogNDAlO1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgYmNvdXBvbjogMnB4IHNvbGlkICMxZjk0ZWQ7XHJcbiAgYmNvdXBvbi1yYWRpdXM6IDUwJTtcclxuICAvL3otaW5kZXg6IDk5OTk5O1xyXG59XHJcbi5vbGRwcmVzY3JpcHRpb24taW1hZ2Uge1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBiY291cG9uLXJhZGl1czogMTAlO1xyXG4gIGJjb3Vwb246IDFweCBzb2xpZCAjY2NjO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxufVxyXG4gLmNvbmZpcm1lZCB7ICAgXHJcbiAgICBjb2xvcjogd2hpdGU7ICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjMTE3YjMwOyAgICBcclxuICB9XHJcblxyXG4gIC5jb3Vwb25wbGFjZWQgeyAgIFxyXG4gICAgY29sb3I6IHdoaXRlOyAgIFxyXG4gICAgYmFja2dyb3VuZDogIzdiNmIxMTsgICAgXHJcbiAgfVxyXG5cclxuICAucGFja2FnZWQgeyAgIFxyXG4gICAgY29sb3I6d2hpdGU7ICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjQjJERkVFOyAgICBcclxuICB9XHJcblxyXG4gIC5zaGlwcGVkIHsgICBcclxuICAgIGNvbG9yOiAjZDBmMWQ3OyAgIFxyXG4gICAgYmFja2dyb3VuZDogIzAwNjg4QjsgICAgXHJcbiAgfVxyXG5cclxuICAucmVqZWN0ZWQgeyAgIFxyXG4gICAgY29sb3I6ICNkMGYxZDc7ICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjRjA4MDgwOyAgICBcclxuICB9XHJcblxyXG4ubGFiZWxUaXRsZXN7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubWFyZ2luTGVmdHtcclxuICAgIG1hcmdpbi1sZWZ0Oi0yNXB4XHJcbn1cclxuLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIGJjb3Vwb24tcmFkaXVzOiA1MCU7XHJcbiAgICBiY291cG9uOiAxcHggc29saWQgI2NjYztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbiAgICAuZWRpdC1pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgYmNvdXBvbi1yYWRpdXM6IDIwJTtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOjdweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbToycHggIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcmVzY3JpcHRpb25saXN0Y2xhc3N7XHJcbiAgICBoZWlnaHQ6IDI5MHB4ICFpbXBvcnRhbnQ7ICAgIFxyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG4gIC5jbGVhcmZpeCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAuY3VzdG9tcmFkaW97XHJcbiAgICBmb250LXNpemU6IDQ4cHggIWltcG9ydGFudDtcclxuICB9XHJcbi5yZWRjb2xvcntcclxuICAgIFxyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvciA6IHBvaW50ZXI7XHJcbn1cclxuLnVzZXJJbmZvIHtcclxuICAgIGJjb3Vwb24tYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG4ubWFyZ2luY3VzdG9te1xyXG4gIG1hcmdpbi1sZWZ0OjEwJTtcclxufVxyXG4uY3VzdG9td2lke1xyXG4gIHdpZHRoOjgwJSAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDo1MCUgIWltcG9ydGFudDtcclxufVxyXG4udXNlckluZm86bGFzdC1jaGlsZCB7XHJcbiAgICBiY291cG9uLWJvdHRvbTogbm9uZTtcclxufVxyXG4uY3VzdG9tYnV0dG9uZGl2e1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDozMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206MjBweDtcclxuICBiY291cG9uOiAxcHggc29saWQgI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjp3aGl0ZTtcclxuICBwYWRkaW5nOjVweCA1cHg7XHJcbn1cclxuLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VybW5ndGFibGUgLnVzZXJtbmd0YWJsZWluZm97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi51c2VybW5ndGFibGUgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUgdGQgaW1nIHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59ICBcclxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMDtcclxufVxyXG5oMyB7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxufVxyXG5wcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4ubm8tcmVzaXplIHtcclxuICAgIHJlc2l6ZSA6IG5vbmU7XHJcbn1cclxuLm0tMjAge1xyXG4gICAgbWFyZ2luIDogMjBweDtcclxufVxyXG4ubm8tZm9jdXMge1xyXG4gICAgb3V0bGluZSA6IG5vbmU7XHJcbn0iLCJzcGFuLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZi5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jdXN0b213aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5xdHljb2x3aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlLWltYWdlLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5iY291cG9ubGVzcyB0ZCwgLmJjb3Vwb25sZXNzIHRoIHtcbiAgYmNvdXBvbjogbm9uZTtcbn1cblxuLmRpdmlkZXIge1xuICBiY291cG9uLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhcmEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5yZWR1Y2V0ZXh0Zm9yaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmN1c3RvbWZpbHRlcmljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9maWxlLWltYWdlIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDIyMHB4O1xuICBiY291cG9uLXJhZGl1czogNTAlO1xuICBiY291cG9uOiAxcHggc29saWQgI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnByb2ZpbGUtaW1hZ2UgLmVkaXQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIGJjb3Vwb24tcmFkaXVzOiAyMCU7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDdweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vbGRwcmVzY3JpcHRpb24taW1hZ2Utd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm15LWNvbnRhaW5lciAuY3VzdG9tLWNsYXNzIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRvcDogNDAlO1xuICByaWdodDogNTAlO1xuICBiY291cG9uOiAycHggc29saWQgIzFmOTRlZDtcbiAgYmNvdXBvbi1yYWRpdXM6IDUwJTtcbn1cblxuLm9sZHByZXNjcmlwdGlvbi1pbWFnZSB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJjb3Vwb24tcmFkaXVzOiAxMCU7XG4gIGJjb3Vwb246IDFweCBzb2xpZCAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jb25maXJtZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMxMTdiMzA7XG59XG5cbi5jb3Vwb25wbGFjZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM3YjZiMTE7XG59XG5cbi5wYWNrYWdlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI0IyREZFRTtcbn1cblxuLnNoaXBwZWQge1xuICBjb2xvcjogI2QwZjFkNztcbiAgYmFja2dyb3VuZDogIzAwNjg4Qjtcbn1cblxuLnJlamVjdGVkIHtcbiAgY29sb3I6ICNkMGYxZDc7XG4gIGJhY2tncm91bmQ6ICNGMDgwODA7XG59XG5cbi5sYWJlbFRpdGxlcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFyZ2luTGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMjIwcHg7XG4gIGJjb3Vwb24tcmFkaXVzOiA1MCU7XG4gIGJjb3Vwb246IDFweCBzb2xpZCAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbWFnZSAuZWRpdC1pY29uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjVweDtcbiAgYmNvdXBvbi1yYWRpdXM6IDIwJTtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cblxuLnByZXNjcmlwdGlvbmxpc3RjbGFzcyB7XG4gIGhlaWdodDogMjkwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmNsZWFyZml4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jdXN0b21yYWRpbyB7XG4gIGZvbnQtc2l6ZTogNDhweCAhaW1wb3J0YW50O1xufVxuXG4ucmVkY29sb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVzZXJJbmZvIHtcbiAgYmNvdXBvbi1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4ubWFyZ2luY3VzdG9tIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmN1c3RvbXdpZCB7XG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cblxuLnVzZXJJbmZvOmxhc3QtY2hpbGQge1xuICBiY291cG9uLWJvdHRvbTogbm9uZTtcbn1cblxuLmN1c3RvbWJ1dHRvbmRpdiB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiY291cG9uOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDVweDtcbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbn1cblxuLnVzZXJtbmd0YWJsZSAudXNlcm1uZ3RhYmxlaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi51c2VybW5ndGFibGUgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUgdGQgaW1nIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMS4yNXJlbSAwO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5uby1yZXNpemUge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5tLTIwIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4ubm8tZm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CouponComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-coupon',
          templateUrl: './coupon.component.html',
          styleUrls: ['./coupon.component.scss'],
          providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_services_data_access__WEBPACK_IMPORTED_MODULE_8__["DataAccess"]
        }];
      }, {
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
        couponFormModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['couponFormModal']
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
  "./src/app/layout/coupon/coupon.module.ts":
  /*!************************************************!*\
    !*** ./src/app/layout/coupon/coupon.module.ts ***!
    \************************************************/

  /*! exports provided: CouponModule */

  /***/
  function srcAppLayoutCouponCouponModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouponModule", function () {
      return CouponModule;
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


    var _coupon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./coupon.component */
    "./src/app/layout/coupon/coupon.component.ts");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var _coupon_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./coupon-routing.module */
    "./src/app/layout/coupon/coupon-routing.module.ts");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js"); //import { LoadingModule } from 'ngx-loading';
    //import {NgxToggleModule} from "ngx-toggle";
    //import {DataTableModule, SharedModule, InputTextModule} from 'primeng/primeng';
    //import {PaginatorModule} from 'primeng/paginator';
    //import {DropdownModule} from 'primeng/dropdown';


    var CouponModule = function CouponModule() {
      _classCallCheck(this, CouponModule);
    };

    CouponModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CouponModule
    });
    CouponModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CouponModule_Factory(t) {
        return new (t || CouponModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _coupon_routing_module__WEBPACK_IMPORTED_MODULE_12__["CouponRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
        animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBcouponRadius: '4px',
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
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CouponModule, {
        declarations: [_coupon_component__WEBPACK_IMPORTED_MODULE_10__["CouponComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _coupon_routing_module__WEBPACK_IMPORTED_MODULE_12__["CouponRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CouponModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _coupon_routing_module__WEBPACK_IMPORTED_MODULE_12__["CouponRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
            animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBcouponRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
          }), ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(), //  DropdownModule,
          //PaginatorModule,
          angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
          })],
          declarations: [_coupon_component__WEBPACK_IMPORTED_MODULE_10__["CouponComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=coupon-coupon-module-es5.js.map