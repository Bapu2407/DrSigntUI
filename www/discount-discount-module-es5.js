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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discount-discount-module"], {
  /***/
  "./src/app/layout/discount/discount-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/layout/discount/discount-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: DiscountRoutingModule */

  /***/
  function srcAppLayoutDiscountDiscountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscountRoutingModule", function () {
      return DiscountRoutingModule;
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


    var _discount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./discount.component */
    "./src/app/layout/discount/discount.component.ts");

    var routes = [{
      path: '',
      component: _discount_component__WEBPACK_IMPORTED_MODULE_2__["DiscountComponent"]
    }];

    var DiscountRoutingModule = function DiscountRoutingModule() {
      _classCallCheck(this, DiscountRoutingModule);
    };

    DiscountRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: DiscountRoutingModule
    });
    DiscountRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function DiscountRoutingModule_Factory(t) {
        return new (t || DiscountRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DiscountRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DiscountRoutingModule, [{
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
  "./src/app/layout/discount/discount.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/layout/discount/discount.component.ts ***!
    \*******************************************************/

  /*! exports provided: DiscountComponent */

  /***/
  function srcAppLayoutDiscountDiscountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscountComponent", function () {
      return DiscountComponent;
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


    var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-toggle-switch */
    "./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js");

    var _c0 = ["fileInputDemoPhoto"];
    var _c1 = ["acc"];
    var _c2 = ["content"];
    var _c3 = ["discountFormModal"];
    var _c4 = ["searFiltersModal"];
    var _c5 = ["enlargedImageModal"];
    var _c6 = ["enlargedPrescriptionModal"];

    function DiscountComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r766 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DiscountComponent_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r766);

          var ctx_r765 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r765.openforAddDiscountDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add Discount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DiscountComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r768 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DiscountComponent_div_4_Template_i_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r768);

          var ctx_r767 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r767.openSearchFilter();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DiscountComponent_div_4_Template_i_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r768);

          var ctx_r769 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r769.reset();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DiscountComponent_th_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Enable/Disable");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DiscountComponent_th_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DiscountComponent_tbody_29_tr_1_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DiscountComponent_tbody_29_tr_1_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Rupees");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DiscountComponent_tbody_29_tr_1_td_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r778 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ui-switch", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DiscountComponent_tbody_29_tr_1_td_16_Template_ui_switch_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r778);

          var obj_r771 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          return obj_r771.active = $event;
        })("change", function DiscountComponent_tbody_29_tr_1_td_16_Template_ui_switch_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r778);

          var obj_r771 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r779 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r779.updateStatus($event, obj_r771);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var obj_r771 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", obj_r771.active);
      }
    }

    function DiscountComponent_tbody_29_tr_1_td_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r784 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DiscountComponent_tbody_29_tr_1_td_19_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r784);

          var obj_r771 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r782 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r782.openForeditDiscount(obj_r771);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DiscountComponent_tbody_29_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "lowercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, DiscountComponent_tbody_29_tr_1_span_14_Template, 2, 0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, DiscountComponent_tbody_29_tr_1_span_15_Template, 2, 0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, DiscountComponent_tbody_29_tr_1_td_16_Template, 2, 1, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, DiscountComponent_tbody_29_tr_1_td_19_Template, 3, 0, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var obj_r771 = ctx.$implicit;

        var ctx_r770 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](1, 14, obj_r771.status));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r770.convertToHumanDiscountTypeDesc(obj_r771.discountType));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", obj_r771 == null ? null : obj_r771.logicType, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", obj_r771 == null ? null : obj_r771.value, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", obj_r771 == null ? null : obj_r771.lower_value, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", obj_r771 == null ? null : obj_r771.upper_value, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", obj_r771 == null ? null : obj_r771.discount_amount, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", obj_r771 && obj_r771.discount_amount && obj_r771.byPercentAmount == "by_percent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", obj_r771 && obj_r771.discount_amount && obj_r771.byPercentAmount == "by_value");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r770.user.role.doctor.discount.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r770.convertToHumanDate(obj_r771.createdDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r770.user.role.doctor.discount.edit);
      }
    }

    var _c7 = function _c7(a1, a2, a3) {
      return {
        id: "fordiscount1",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    function DiscountComponent_tbody_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DiscountComponent_tbody_29_tr_1_Template, 20, 16, "tr", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r759 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, ctx_r759.normalFiltereduserListArr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](4, _c7, ctx_r759.pageSize, ctx_r759.pageNo, ctx_r759.totalDocRecords)));
      }
    }

    function DiscountComponent_tbody_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "No record available");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DiscountComponent_ng_template_33_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var discountType_r794 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", discountType_r794.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](discountType_r794.name);
      }
    }

    function DiscountComponent_ng_template_33_div_15_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var logicType_r796 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", logicType_r796.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](logicType_r796.name);
      }
    }

    function DiscountComponent_ng_template_33_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r798 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Logic Type ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "select", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DiscountComponent_ng_template_33_div_15_Template_select_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r798);

          var ctx_r797 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r797.discountObject.logicType = $event;
        })("change", function DiscountComponent_ng_template_33_div_15_Template_select_change_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r798);

          var ctx_r799 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r799.changeLogicType();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DiscountComponent_ng_template_33_div_15_option_6_Template, 2, 2, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r787 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r787.discountObject.logicType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r787.logicTypes);
      }
    }

    function DiscountComponent_ng_template_33_div_16_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var byPercentAmount_r801 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", byPercentAmount_r801.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](byPercentAmount_r801.name);
      }
    }

    function DiscountComponent_ng_template_33_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r803 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "By Percent Or Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "select", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DiscountComponent_ng_template_33_div_16_Template_select_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r803);

          var ctx_r802 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r802.discountObject.byPercentAmount = $event;
        })("change", function DiscountComponent_ng_template_33_div_16_Template_select_change_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r803);

          var ctx_r804 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r804.changePercentAmount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, DiscountComponent_ng_template_33_div_16_option_6_Template, 2, 2, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r788 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r788.discountObject.byPercentAmount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r788.byPercentAmounts);
      }
    }

    function DiscountComponent_ng_template_33_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r806 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Order Lower Value");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DiscountComponent_ng_template_33_div_17_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r806);

          var ctx_r805 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r805.discountObject.lower_value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r789 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r789.discountObject.lower_value);
      }
    }

    function DiscountComponent_ng_template_33_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r808 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Order Upper Value");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DiscountComponent_ng_template_33_div_18_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r808);

          var ctx_r807 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r807.discountObject.upper_value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r790 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r790.discountObject.upper_value);
      }
    }

    function DiscountComponent_ng_template_33_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r810 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Order Value ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DiscountComponent_ng_template_33_div_19_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r810);

          var ctx_r809 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r809.discountObject.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r791 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r791.discountObject.value);
      }
    }

    function DiscountComponent_ng_template_33_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function DiscountComponent_ng_template_33_p_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\xA0Fix The Error : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r793 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r793.form_fill_failure_msg, " ");
      }
    }

    function DiscountComponent_ng_template_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r812 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DiscountComponent_ng_template_33_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r812);

          var ctx_r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r811.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Discount Type ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "select", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DiscountComponent_ng_template_33_Template_select_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r812);

          var ctx_r813 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r813.discountObject.discountType = $event;
        })("change", function DiscountComponent_ng_template_33_Template_select_change_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r812);

          var ctx_r814 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r814.changeDiscountType();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, DiscountComponent_ng_template_33_option_14_Template, 2, 2, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, DiscountComponent_ng_template_33_div_15_Template, 7, 2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, DiscountComponent_ng_template_33_div_16_Template, 7, 2, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, DiscountComponent_ng_template_33_div_17_Template, 7, 1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, DiscountComponent_ng_template_33_div_18_Template, 7, 1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, DiscountComponent_ng_template_33_div_19_Template, 7, 1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, DiscountComponent_ng_template_33_span_24_Template, 2, 0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Discount Amount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DiscountComponent_ng_template_33_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r812);

          var ctx_r815 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r815.discountObject.discount_amount = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DiscountComponent_ng_template_33_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r812);

          var ctx_r816 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r816.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DiscountComponent_ng_template_33_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r812);

          var ctx_r817 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r817.closeMainModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, DiscountComponent_ng_template_33_p_33_Template, 6, 1, "p", 41);
      }

      if (rf & 2) {
        var ctx_r762 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r762.discountFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 13, ctx_r762.mode), " Discount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r762.discountObject.discountType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r762.discountTypes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r762.discountObject.discountType == "order_volume");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r762.discountObject.discountType != "coupon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r762.subLogicType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r762.subLogicType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r762.subLogicType && ctx_r762.discountObject.discountType == "order_volume");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r762.discountObject.byPercentAmount == "by_percent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r762.discountObject.discount_amount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx_r762.discountFormGroup.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r762.submitAttempt);
      }
    }

    function DiscountComponent_ng_template_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](0, " Please wait..fetching data ");
      }
    }

    var _c8 = function _c8() {
      return {
        primaryColour: "blue",
        secondaryColour: "red",
        fullScreenBackdrop: false
      };
    };

    var DiscountComponent =
    /*#__PURE__*/
    function (_src_BaseComponent__W) {
      _inherits(DiscountComponent, _src_BaseComponent__W);

      var _super = _createSuper(DiscountComponent);

      function DiscountComponent(router, route, modal, toastr, _fb, dataService) {
        var _this;

        _classCallCheck(this, DiscountComponent);

        _this = _super.call(this, router);
        _this.router = router;
        _this.route = route;
        _this.modal = modal;
        _this.toastr = toastr;
        _this._fb = _fb;
        _this.dataService = dataService;
        _this.loadingCustomeMsg = "Loading...";
        _this.loading = true;
        _this.discountType = {
          delivery_discount: []
        };
        _this.isPrescriptionUploaded = false;
        _this.showOldPrescription = '';
        _this.discountTypes = [{
          'name': 'Direct Discounts',
          'value': 'delivery_discount'
        }, {
          'name': 'Discounts ON Order Volume',
          'value': 'order_volume'
        }, {
          'name': 'Coupon',
          'value': 'coupon'
        }];
        _this.logicTypes = [{
          'name': 'Order Value Greater Than(>)',
          'value': 'greater_than'
        }, //{'name':'Less Than(<)','value':'less_than'},
        {
          'name': 'Order Value IN Between((> <)',
          'value': 'in_between'
        }, {
          'name': 'Order Value Greater Than Equal To(>=)',
          'value': 'greater_than_equal_to'
        }, //{'name':'Less Than Equal To(<=)','value':'less_than_equal_to'},
        {
          'name': 'Order Value Equal To(=)',
          'value': 'equal_to'
        }];
        _this.byPercentAmounts = [{
          'name': 'By Percentage',
          'value': 'by_percent'
        }, {
          'name': 'By Amount',
          'value': 'by_value'
        }];
        _this.allDynaFilter = null;
        _this.patientList = [];
        _this.customerList = [];
        _this.states = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].states;
        _this.keywordCustomer = "name";
        _this.fetchDiscountByCustomer = false;
        _this.discountList = [];
        _this.fromCustomerPage = false;
        _this.userKind = "discount";
        _this.normalFiltereduserListArr = [];
        _this.customerOldPrescriptionListArr = [];
        _this.items = [];
        _this.pageSize = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].RECORDSIZE;
        _this.pageNo = 1;
        _this.tempArray = [];
        _this.subLogicType = false;
        _this.keywordMedicine = "name";
        _this.discountObject = {
          active: true,
          discountType: "",
          logicType: "",
          byPercentAmount: "by_percent",
          subLogicType: false,
          lower_value: "",
          upper_value: "",
          value: '',
          discount_amount: ''
        };
        _this.medicineArray = [[{
          medicineId: '',
          medicineName: "",
          quantity: "",
          mg: ''
        }]];
        _this.attendantList = [];
        _this.discountObjectBase = {
          active: true,
          discountType: "",
          logicType: "",
          byPercentAmount: "by_percent",
          subLogicType: false,
          lower_value: "",
          upper_value: "",
          value: '',
          discount_amount: ''
        };
        _this.openingMeridian = true; //  this.customDiscounttime.hour = 9
        // this.customDiscounttime.minute = 10

        if (!_this.user.role.doctor.discount.view) {
          return _possibleConstructorReturn(_this);
        }

        _this.customerName = _this.route.snapshot.paramMap.get('name');
        _this.fromCustomerPage = _this.route.snapshot.paramMap.get('fromCustomerPage') == 'fromCustomerPage';
        console.log("this.customerName  **" + _this.customerName); //this.customerId =  "5ee8ea1158ea514eec6f6e18"//this.route.snapshot.paramMap.get('customerId');

        _this.discountFormGroup = _this.buildForm();
        return _this;
      }

      _createClass(DiscountComponent, [{
        key: "buildForm",
        value: function buildForm() {
          return this._fb.group({
            discountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.discountObject.discountType, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            logicType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.discountObject.logicType),
            byPercentAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.discountObject.byPercentAmount),
            subLogicType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.discountObject.subLogicType),
            lower_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.discountObject.lower_value),
            upper_value: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.discountObject.upper_value),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.discountObject.value),
            discount_amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.discountObject.discount_amount)
          });
        }
      }, {
        key: "changeDiscountType",
        value: function changeDiscountType() {
          if (this.discountObject.discountType == "as_is_basis") {
            this.discountObject.byPercentAmount = "by_value";
          } else {
            this.discountObject.byPercentAmount = "by_percent";
          }

          this.discountFormGroup.get('byPercentAmount').patchValue(this.discountObject.byPercentAmount);
        }
      }, {
        key: "changePercentAmount",
        value: function changePercentAmount() {}
      }, {
        key: "convertToHumanDiscountTypeDesc",
        value: function convertToHumanDiscountTypeDesc(discountType) {
          if (discountType == "delivery_discount") {
            return 'Direct Discounts';
          }

          if (discountType == "order_volume") {
            return 'Discounts ON Order Volume';
          }

          if (discountType == "coupon") {
            return 'Coupon';
          }
        }
      }, {
        key: "changeLogicType",
        value: function changeLogicType() {
          if (this.discountObject.logicType == 'in_between') {
            this.subLogicType = true;
            this.discountObject.subLogicType = true;
          } else {
            this.discountObject.lower_value = '0';
            this.discountObject.upper_value = '0';
            this.discountObject.subLogicType = false;
            this.subLogicType = false;
          }
        }
      }, {
        key: "getControls",
        value: function getControls() {
          return this.discountFormGroup.get('medicineListItems').controls;
        }
      }, {
        key: "gotoCustomerPage",
        value: function gotoCustomerPage() {
          this.router.navigate(["/customer", {
            fromDiscountPage: 'fromDiscountPage'
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
            medicineId: '',
            medicineName: '',
            mg: '',
            quantity: ''
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
        key: "getDiscount",
        value: function getDiscount() {}
      }, {
        key: "addItem",
        value: function addItem() {
          this.medicineListItems = this.discountFormGroup.get('medicineListItems');
          this.medicineListItems.push(this.createMedicineItem());
        }
      }, {
        key: "removeItem",
        value: function removeItem(i) {
          this.medicineListItems = this.discountFormGroup.get('medicineListItems');
          this.medicineListItems.removeAt(i);
        }
      }, {
        key: "medicineSelectEvent",
        value: function medicineSelectEvent(item, i) {
          if (item) {
            //this.discountFormGroup.get('medicineID').patchValue(item['_id']);
            // this.discountObject.medicineList[i].medicineId = item['_id']
            this.medicineListItems.at(i).get('medicineId').patchValue(item['_id']);
            this.medicineListItems.at(i).get('medicineName').patchValue(item['name']); // this.discountObject.medicineList[i].medicineName = item['medicineName']
            //console.log(" inside discountSelectEvent "+JSON.stringify(item))
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
            // console.log("this.medicineArray=="+JSON.stringify(this.medicineArray[i]))
          }, function (err) {//console.log(err);
          }); // }
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
        key: "openforAddDiscountDialog",
        value: function openforAddDiscountDialog() {
          this.customerOldPrescriptionListArr = [];
          this.customerId = '';
          /*
          if(this.customerId == undefined || !this.customerId || this.customerId == ''){
           alert("Please select a customer first, from the dropdown")
           return
          }
          */

          this.mode = "add";
          this.discountFormGroup = this.buildForm(); // 
          //this.medicineListItems.push({})

          this.discountObject = Object.assign({}, this.discountObjectBase);
          this.modalReferenceDiscountForm = this.modal.open(this.discountFormModal);
        }
      }, {
        key: "getPatient",
        value: function getPatient() {}
      }, {
        key: "closeModal",
        value: function closeModal() {
          if (this.modalReferenceDiscountForm) this.modalReferenceDiscountForm.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!localStorage.getItem('isLoggedin')) {
            this.router.navigate(["/login"]);
          }

          this.fetchDiscountsCount();
          this.fetchDiscounts(); //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
        }
      }, {
        key: "fetchCustomers",
        value: function fetchCustomers() {
          var _this3 = this;

          //  this.pageNo = 1
          //this.pageSize = 10
          this.dataService.fetchAllCustomersNotByName().then(function (result) {
            //this.customerList = [];      
            _this3.customerList = result.map(function (element) {
              return element;
            }); // if(!this.fromCustomerPage){
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

          if (!this.discountFormGroup.valid) {
            this.submitAttempt = true;
            this.validateFields(this.discountFormGroup.controls);
            return;
          }

          console.log("this.discountObject for add == " + JSON.stringify(this.discountObject));

          if (this.discountObject.upper_value && this.discountObject.upper_value) {
            var valueUpper = parseFloat(this.discountObject.upper_value);
            var valueLower = parseFloat(this.discountObject.upper_value);

            if (this.subLogicType && valueUpper < valueLower) {
              alert('The upper value should be greater than lower value');
              return;
            }
          }

          if (this.mode == "add") {
            delete this.discountObject['customer'];
            this.dataService.addDiscount(this.discountObject).then(function (result) {
              //  console.log("result after adduser == "+JSON.stringify(result))
              _this4.commonAfterSaveCode();

              _this4.reinitialise();

              _this4.form_fill_failure_msg = "";

              _this4.toastr.successToastr('New discount is added successfully');
            }, function (err) {
              console.log(err);
            });
          }

          if (this.mode == "edit") {
            this.loading = true; //delete this.discountObject['patient']

            delete this.discountObject['customer'];
            this.discountObject['discountId'] = this.discountObject['_id']; //  console.log("this.discountObject for edit == "+JSON.stringify(this.discountObject))

            this.dataService.updateDiscount(this.discountObject).then(function (result) {
              //  console.log("****** updatediscount result   ===== **"+JSON.stringify(result))
              _this4.commonAfterSaveCode();

              if (_this4.isPrescriptionUploaded) {
                _this4.isPrescriptionUploaded = false;
              }

              _this4.form_fill_failure_msg = "";

              _this4.toastr.successToastr('discount is updated successfully');
            }, function (err) {
              //this.mode = "add"
              _this4.loading = false;
              console.log(err);
            });
          }
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

            _this5.fetchDiscounts();
          }, 2000);
        }
      }, {
        key: "enlargePrescription",
        value: function enlargePrescription(obj) {
          //this.closeCustomModal()
          //this.enlargedPic = ''
          var image = obj.uploadPhotoDiscountPrescriptionURL;
          this.enlargedPrescPic = image;
          this.modalReferencePrescriptionImage = this.modal.open(this.enlargedPrescriptionModal);
        }
      }, {
        key: "selectPrescription",
        value: function selectPrescription(obj) {
          // let image  = obj.uploadPhotoDiscountPrescriptionURL    
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

          console.log("obj ==" + JSON.stringify(obj)); //this.getPhotoOLDPrescription(obj.uploadPhotoDiscountPrescriptionURL)
          //this.showOldPrescription  = 'url(' + obj.uploadPhotoDiscountPrescriptionURL + ')'
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
            var image = obj.uploadPhotoDiscountPrescriptionURL;
            image = obj.uploadPhotoDiscountPrescriptionURL;
            /*if(obj && obj.uploadPhotoDiscountPrescription){
              image = obj.uploadPhotoDiscountPrescription
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
          this.discountFormGroup = this.buildForm();
          console.log("this.medicineListItems **" + this.medicineListItems.length);
        }
      }, {
        key: "openForeditDiscount",
        value: function openForeditDiscount(user) {
          //this.modalReferenceDiscountForm = this.modal.open(this.discountFormModal);
          //this.loading = true
          this.loadingCustomeMsg == "Fetching old prescriptions, please wait..";
          this.mode = "edit";
          this.modalReferenceDiscountForm = this.modal.open(this.discountFormModal);
          this.customerId = user['customerId'];
          this.discountObject = Object.assign({}, user);
          this.changeLogicType();
          console.log("this.customerId == " + this.customerId); //if(this.customerId)
          //this.fetchAllDiscountPrescriptions()  

          var data = {
            customerId: this.customerId
          };
          console.log(" fetch old prescription for " + JSON.stringify(data));
          this.commonCodeDuringEdit();
        }
      }, {
        key: "reinitialise",
        value: function reinitialise() {
          this.discountDate = '';
          this.customerId = '';
          this.discountId = '';
          this.discountStatus = '';
          this.customerName = '';
          this.allDynaFilter = null;
          this.fetchDiscountsCount();
          this.totalDocRecords = 0;
          this.fetchDiscounts();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.reinitialise();
          this.toastr.successToastr('Filters reset, discount list refreshed');
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
          if (this.modalReferenceDiscountForm) this.modalReferenceDiscountForm.close();
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
            this.fetchDiscountByCustomer = true;
          } else {
            this.fetchDiscountByCustomer = false;
          }

          console.log("this.customerId " + this.customerId);
          this.fetchDiscountsCount();
          this.fetchDiscounts();
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
            this.discountFormGroup.get('customerId').patchValue(item['_id']);
            this.customerId = item['_id'];

            if (this.customerId) {
              this.loading = true;
              this.loadingCustomeMsg == "Fetching old prescriptions, please wait..";
              this.fetchAllDiscountPrescriptions();
            } //console.log(" inside customerSelectEvent "+JSON.stringify(item))

          } // do something with selected item

        }
      }, {
        key: "onChangeCustomerSearch",
        value: function onChangeCustomerSearch(val) {
          var _this6 = this;

          //console.log(" inside onChangePatientSearch val "+val)
          // if(val && val.length >2 ){
          var data = {
            name: val
          };
          this.dataService.fetchAllCustomers(data).then(function (result) {
            _this6.customerList = result.map(function (element) {
              return element;
            });
          }, function (err) {//console.log(err);
          }); // }
        }
      }, {
        key: "fetchDiscountsCount",
        value: function fetchDiscountsCount() {
          var _this7 = this;

          //  this.pageNo = 1
          //  this.pageSize = 10

          /* let data = {}
           if(this.fetchDiscountByCustomer){
             data['fetchDiscountByCustomer'] = true
             data['customerId'] = this.customerId
           }else{
             data['fetchDiscountByCustomer'] = false
           }
           this.dataService.fetchDiscountsCount(data).then((result) => {
               
               console.log("****** fetchdiscountsCount result   ===== **"+JSON.stringify(result))
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
          }; // this.fetchDiscountsCount({filter : allDynaFilter})  
          //this.fetchDiscountsByFilters({filter : allDynaFilter})   

          console.log(" inside data " + JSON.stringify(data));
          this.dataService.fetchDiscountsByFilterCount(data).then(function (result) {
            console.log("****** fetchdiscountsCount result   ===== **" + JSON.stringify(result));
            _this7.totalDocRecords = result;
            _this7.loading = false;
            console.log("****** this.totalDocRecords ===== **" + _this7.totalDocRecords);
          }, function (err) {
            _this7.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "fetchAllDiscountPrescriptions",
        value: function fetchAllDiscountPrescriptions() {
          var data = {
            customerId: this.customerId
          };
          console.log(" fetch old prescription for " + JSON.stringify(data));
        }
      }, {
        key: "fetchDiscounts",
        value: function fetchDiscounts() {
          var _this8 = this;

          //  this.pageNo = 1
          //this.pageSize = 10
          // let data = {pageNo:this.pageNo,perPage:this.pageSize}
          //data['customerId'] = this.customerId
          // console.log("this.customerId   ===== **"+this.customerId)
          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize,
            filter: this.allDynaFilter
          }; // this.fetchDiscountsCount({filter : allDynaFilter})  
          //this.fetchDiscountsByFilters({filter : allDynaFilter})   
          //console.log(" inside data "+JSON.stringify(data))

          this.dataService.fetchDiscounts(data).then(function (result) {
            _this8.normalFiltereduserListArr = [];
            _this8.normalFiltereduserListArr = result.map(function (element) {
              return element;
            }); //  console.log("****** this.fetchDiscountsByFilters   ===== **"+JSON.stringify(this.normalFiltereduserListArr))      

            _this8.loading = false;
          }, function (err) {
            _this8.normalFiltereduserListArr = [];
            _this8.loading = false;
            console.log(err);
          });
          /*
              if(this.fetchDiscountByCustomer){
                data['fetchDiscountByCustomer'] = true
                data['customerId'] = this.customerId
              }else{
                data['fetchDiscountByCustomer'] = false
              }
              
              this.dataService.fetchDiscounts(data).then((result:[]) => {
                  
                this.normalFiltereduserListArr = [];
               // this.customerList = []
                  this.normalFiltereduserListArr = result.map(element => {
                    
                    return   element
                  })
                  console.log("****** this.fetchDiscounts   ===== **"+JSON.stringify(this.normalFiltereduserListArr))
                  
          
                 // this.normalFiltereduserListArr.forEach(function(discount, index){
                   // console.log("****** active   ===== **"+ discount.active)
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
          var _this9 = this;

          // userInfo.active = value
          //  console.log("****** userInfo   ===== **"+JSON.stringify(userInfo))
          var data = {};
          userInfo.active = !userInfo.active;
          console.log("******  userInfo.active   ===== **" + userInfo.active);
          userInfo.discountId = userInfo._id;
          data['discountId'] = userInfo._id;
          data['active'] = userInfo.active;
          console.log("****** userInfo   ===== **" + JSON.stringify(data));
          this.dataService.updateDiscount(data).then(function (result) {
            //  console.log("****** updatediscount result   ===== **"+JSON.stringify(result))
            _this9.fetchDiscounts();

            _this9.loading = false;
          }, function (err) {
            _this9.loading = false;
            console.log(err);
          });
          this.toastr.successToastr('Discount record updated successfully');
        }
      }]);

      return DiscountComponent;
    }(src_BaseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);

    DiscountComponent.??fac = function DiscountComponent_Factory(t) {
      return new (t || DiscountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_data_access__WEBPACK_IMPORTED_MODULE_7__["DataAccess"]));
    };

    DiscountComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: DiscountComponent,
      selectors: [["app-discount"]],
      viewQuery: function DiscountComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c4, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c6, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.fileInputDemoPhoto = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.accordionComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.discountFormModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.searFiltersModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.enlargedImageModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.enlargedPrescriptionModal = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 39,
      vars: 13,
      consts: [[3, "heading", "icon"], [1, "row"], ["class", "col-md-12", 4, "ngIf"], ["class", "col-md-12 text-right", 4, "ngIf"], [1, "card-body", "table-responsive", "marginLeft"], [1, "pb-3"], [1, "table", "table-bdiscounted", "table-sm"], [4, "ngIf"], [1, "col-md-12", "text-left", "clearfix"], ["id", "fordiscount1", "directionLinks", "true", "maxSize", "9", "directionLinks", "true", "autoHide", "true", "responsive", "true", "previousLabel", "Prev", "nextLabel", "Next", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", "screenReaderCurrentLabel", "You're on page", 1, "my-pagination", "marginLeft", 3, "pageChange", "pageBoundsCorrection"], ["discountFormModal", ""], [1, "my-container"], ["customLoadingTemplate", ""], [3, "show", "config", "template"], [1, "col-md-12"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [1, "col-md-12", "text-right"], ["aria-hidden", "true", 1, "fa", "fa-filter", "customfiltericon", "m-10", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh", "customfiltericon", "m-10", 3, "click"], [3, "class", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange", "change"], [1, "btn", "btn-dark", 3, "click"], ["colspan", "7", "align", "center"], [1, "custom_timebox", "p-0", 3, "formGroup"], [1, "modal-header", "py-1"], [1, "modal-title", "headerTitle", "mb-0"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "form-group"], [1, "labelTitles"], ["formControlName", "discountType", "name", "discountType", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["class", "labelValue", 3, "value", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], ["class", "row ", 4, "ngIf"], [1, "col-md-12", "form-group"], ["for", "email", 1, "labelTitles"], [1, "col-md-12", "marginTop"], ["formControlName", "discount_amount", "placeholder", "Enter discount amount", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "click"], ["class", "cutomeerrortext", 4, "ngIf"], [1, "labelValue", 3, "value"], ["formControlName", "logicType", "name", "logicType", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["formControlName", "byPercentAmount", "name", "byPercentAmount", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["formControlName", "lower_value", "placeholder", "Enter Lower Value", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "upper_value", "placeholder", "Enter Upper Value", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "value", "placeholder", "Enter Order Value", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "cutomeerrortext"], [1, "redcolor", "ml-2"], [1, "fa", "fas", "fa-exclamation"]],
      template: function DiscountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-page-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, DiscountComponent_div_3_Template, 3, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DiscountComponent_div_4_Template, 3, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Discount Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Logic ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Order Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Order value Lower Limit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Order value Upper Limit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Discount Amount ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, DiscountComponent_th_24_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Created Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, DiscountComponent_th_27_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, DiscountComponent_tbody_29_Template, 3, 8, "tbody", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "pagination-controls", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function DiscountComponent_Template_pagination_controls_pageChange_31_listener($event) {
            return ctx.pageChanged($event);
          })("pageBoundsCorrection", function DiscountComponent_Template_pagination_controls_pageBoundsCorrection_31_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, DiscountComponent_tbody_32_Template, 4, 0, "tbody", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, DiscountComponent_ng_template_33_Template, 34, 15, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, DiscountComponent_ng_template_36_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "ngx-loading", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r763 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("heading", "Discount")("icon", "fa-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user.role.doctor.discount.create);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user.role.doctor.discount.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" List of existing ", ctx.userKind, "s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user.role.doctor.discount.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user.role.doctor.discount.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("show", ctx.loading)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c8))("template", _r763);
        }
      },
      directives: [_shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"], ngx_loading__WEBPACK_IMPORTED_MODULE_11__["NgxLoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_12__["UiSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_x"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]],
      styles: ["span.bootstrap-switch-handle-off.bootstrap-switch-default[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.customwidth[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.qtycolwidth[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.profile-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.bdiscountless[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .bdiscountless[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  bdiscount: none;\n}\n\n.divider[_ngcontent-%COMP%] {\n  bdiscount-bottom: 1px solid black;\n  width: 100%;\n}\n\n.para[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto !important;\n}\n\n.reducetextforicon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 5px;\n}\n\n.customfiltericon[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-right: 50px;\n  font-weight: bold;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  bdiscount-radius: 50%;\n  bdiscount: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  bdiscount-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.oldprescription-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.my-container[_ngcontent-%COMP%]   .custom-class[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  color: black;\n  top: 40%;\n  right: 50%;\n  bdiscount: 2px solid #1f94ed;\n  bdiscount-radius: 50%;\n}\n\n.oldprescription-image[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 70px;\n  bdiscount-radius: 10%;\n  bdiscount: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.confirmed[_ngcontent-%COMP%] {\n  color: white;\n  background: #117b30;\n}\n\n.discountplaced[_ngcontent-%COMP%] {\n  color: white;\n  background: #7b6b11;\n}\n\n.packaged[_ngcontent-%COMP%] {\n  color: white;\n  background: #B2DFEE;\n}\n\n.shipped[_ngcontent-%COMP%] {\n  color: #d0f1d7;\n  background: #00688B;\n}\n\n.rejected[_ngcontent-%COMP%] {\n  color: #d0f1d7;\n  background: #F08080;\n}\n\n.labelTitles[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.marginLeft[_ngcontent-%COMP%] {\n  margin-left: -25px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  bdiscount-radius: 50%;\n  bdiscount: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  bdiscount-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.prescriptionlistclass[_ngcontent-%COMP%] {\n  height: 290px !important;\n  width: auto;\n  overflow-y: scroll;\n}\n\n.clearfix[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n}\n\n.customradio[_ngcontent-%COMP%] {\n  font-size: 48px !important;\n}\n\n.redcolor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userInfo[_ngcontent-%COMP%] {\n  bdiscount-bottom: 1px solid #dee2e6;\n}\n\n.margincustom[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n\n.customwid[_ngcontent-%COMP%] {\n  width: 80% !important;\n  min-width: 50% !important;\n}\n\n.userInfo[_ngcontent-%COMP%]:last-child {\n  bdiscount-bottom: none;\n}\n\n.custombuttondiv[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 40px !important;\n  margin-top: 30px;\n  margin-bottom: 20px;\n  bdiscount: 1px solid #ccc;\n  background-color: black;\n  color: white;\n  padding: 5px 5px;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 95% !important;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .usermngtableinfo[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.no-resize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.m-20[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.no-focus[_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC9kaXNjb3VudC9kaXNjb3VudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2Rpc2NvdW50L2Rpc2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0Usc0JBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO0FDR0Y7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLGlDQUFBO0VBRUEsV0FBQTtBQ0tKOztBREhFO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FDTUo7O0FESkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUUY7O0FESkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ01KOztBREpJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ01OOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSUo7O0FEREE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUNJRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDR0Y7O0FEQUM7RUFDRyxZQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFBO0VBQ0ksaUJBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0lKOztBREZJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0lOOztBREFFO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURERTtFQUNFLGtCQUFBO0VBRUEsZUFBQTtBQ0dKOztBRERFO0VBQ0UsMEJBQUE7QUNJSjs7QURGQTtFQUVJLFVBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLG1DQUFBO0FDTUo7O0FESkE7RUFDRSxnQkFBQTtBQ09GOztBRExBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQ1FGOztBRE5BO0VBQ0ksc0JBQUE7QUNTSjs7QURQQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1VGOztBRFJBO0VBQ0kscUJBQUE7QUNXSjs7QURUQTtFQUNJLG1CQUFBO0FDWUo7O0FEVkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2FKOztBRFhBO0VBQ0ksV0FBQTtBQ2NKOztBRFpBO0VBQ0ksa0JBQUE7QUNlSjs7QURiQTtFQUNFLGdCQUFBO0FDZ0JGOztBRGRBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FDaUJGOztBRGZBO0VBQ0ksWUFBQTtBQ2tCSjs7QURoQkE7RUFDSSxZQUFBO0FDbUJKOztBRGpCQTtFQUNJLGFBQUE7QUNvQkoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGlzY291bnQvZGlzY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZi5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5jdXN0b213aWR0aHtcclxuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnF0eWNvbHdpZHRoe1xyXG4gIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxufVxyXG4ucHJvZmlsZS1pbWFnZS13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5iZGlzY291bnRsZXNzIHRkLCAuYmRpc2NvdW50bGVzcyB0aCB7XHJcbiAgICBiZGlzY291bnQ6IG5vbmU7XHJcbn1cclxuLmRpdmlkZXIge1xyXG4gICAgYmRpc2NvdW50LWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgLy9tYXJnaW4tdG9wOjFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAucGFyYXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi5yZWR1Y2V0ZXh0Zm9yaWNvbntcclxuICBmb250LXNpemUgOjIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6NXB4O1xyXG59XHJcbi5jdXN0b21maWx0ZXJpY29ue1xyXG4gIGZvbnQtc2l6ZSA6MjVweDtcclxuICBtYXJnaW4tcmlnaHQ6NTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbiAgLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIGJkaXNjb3VudC1yYWRpdXM6IDUwJTtcclxuICAgIGJkaXNjb3VudDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gICAgLmVkaXQtaWNvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIGJkaXNjb3VudC1yYWRpdXM6IDIwJTtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOjdweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbToycHggIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gXHJcbiAgLm9sZHByZXNjcmlwdGlvbi1pbWFnZS13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubXktY29udGFpbmVyIC5jdXN0b20tY2xhc3N7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgdG9wOiA0MCU7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICBiZGlzY291bnQ6IDJweCBzb2xpZCAjMWY5NGVkO1xyXG4gIGJkaXNjb3VudC1yYWRpdXM6IDUwJTtcclxuICAvL3otaW5kZXg6IDk5OTk5O1xyXG59XHJcbi5vbGRwcmVzY3JpcHRpb24taW1hZ2Uge1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBiZGlzY291bnQtcmFkaXVzOiAxMCU7XHJcbiAgYmRpc2NvdW50OiAxcHggc29saWQgI2NjYztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbn1cclxuIC5jb25maXJtZWQgeyAgIFxyXG4gICAgY29sb3I6IHdoaXRlOyAgIFxyXG4gICAgYmFja2dyb3VuZDogIzExN2IzMDsgICAgXHJcbiAgfVxyXG5cclxuICAuZGlzY291bnRwbGFjZWQgeyAgIFxyXG4gICAgY29sb3I6IHdoaXRlOyAgIFxyXG4gICAgYmFja2dyb3VuZDogIzdiNmIxMTsgICAgXHJcbiAgfVxyXG5cclxuICAucGFja2FnZWQgeyAgIFxyXG4gICAgY29sb3I6d2hpdGU7ICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjQjJERkVFOyAgICBcclxuICB9XHJcblxyXG4gIC5zaGlwcGVkIHsgICBcclxuICAgIGNvbG9yOiAjZDBmMWQ3OyAgIFxyXG4gICAgYmFja2dyb3VuZDogIzAwNjg4QjsgICAgXHJcbiAgfVxyXG5cclxuICAucmVqZWN0ZWQgeyAgIFxyXG4gICAgY29sb3I6ICNkMGYxZDc7ICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjRjA4MDgwOyAgICBcclxuICB9XHJcblxyXG4ubGFiZWxUaXRsZXN7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubWFyZ2luTGVmdHtcclxuICAgIG1hcmdpbi1sZWZ0Oi0yNXB4XHJcbn1cclxuLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIGJkaXNjb3VudC1yYWRpdXM6IDUwJTtcclxuICAgIGJkaXNjb3VudDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gICAgLmVkaXQtaWNvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIGJkaXNjb3VudC1yYWRpdXM6IDIwJTtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOjdweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbToycHggIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcmVzY3JpcHRpb25saXN0Y2xhc3N7XHJcbiAgICBoZWlnaHQ6IDI5MHB4ICFpbXBvcnRhbnQ7ICAgIFxyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG4gIC5jbGVhcmZpeCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAuY3VzdG9tcmFkaW97XHJcbiAgICBmb250LXNpemU6IDQ4cHggIWltcG9ydGFudDtcclxuICB9XHJcbi5yZWRjb2xvcntcclxuICAgIFxyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvciA6IHBvaW50ZXI7XHJcbn1cclxuLnVzZXJJbmZvIHtcclxuICAgIGJkaXNjb3VudC1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbi5tYXJnaW5jdXN0b217XHJcbiAgbWFyZ2luLWxlZnQ6MTAlO1xyXG59XHJcbi5jdXN0b213aWR7XHJcbiAgd2lkdGg6ODAlICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOjUwJSAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VySW5mbzpsYXN0LWNoaWxkIHtcclxuICAgIGJkaXNjb3VudC1ib3R0b206IG5vbmU7XHJcbn1cclxuLmN1c3RvbWJ1dHRvbmRpdntcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6MzBweDtcclxuICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgYmRpc2NvdW50OiAxcHggc29saWQgI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjp3aGl0ZTtcclxuICBwYWRkaW5nOjVweCA1cHg7XHJcbn1cclxuLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VybW5ndGFibGUgLnVzZXJtbmd0YWJsZWluZm97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi51c2VybW5ndGFibGUgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUgdGQgaW1nIHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59ICBcclxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMDtcclxufVxyXG5oMyB7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxufVxyXG5wcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4ubm8tcmVzaXplIHtcclxuICAgIHJlc2l6ZSA6IG5vbmU7XHJcbn1cclxuLm0tMjAge1xyXG4gICAgbWFyZ2luIDogMjBweDtcclxufVxyXG4ubm8tZm9jdXMge1xyXG4gICAgb3V0bGluZSA6IG5vbmU7XHJcbn0iLCJzcGFuLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZi5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jdXN0b213aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5xdHljb2x3aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlLWltYWdlLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5iZGlzY291bnRsZXNzIHRkLCAuYmRpc2NvdW50bGVzcyB0aCB7XG4gIGJkaXNjb3VudDogbm9uZTtcbn1cblxuLmRpdmlkZXIge1xuICBiZGlzY291bnQtYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFyYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnJlZHVjZXRleHRmb3JpY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY3VzdG9tZmlsdGVyaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMjIwcHg7XG4gIGJkaXNjb3VudC1yYWRpdXM6IDUwJTtcbiAgYmRpc2NvdW50OiAxcHggc29saWQgI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnByb2ZpbGUtaW1hZ2UgLmVkaXQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIGJkaXNjb3VudC1yYWRpdXM6IDIwJTtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cblxuLm9sZHByZXNjcmlwdGlvbi1pbWFnZS13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubXktY29udGFpbmVyIC5jdXN0b20tY2xhc3Mge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdG9wOiA0MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIGJkaXNjb3VudDogMnB4IHNvbGlkICMxZjk0ZWQ7XG4gIGJkaXNjb3VudC1yYWRpdXM6IDUwJTtcbn1cblxuLm9sZHByZXNjcmlwdGlvbi1pbWFnZSB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJkaXNjb3VudC1yYWRpdXM6IDEwJTtcbiAgYmRpc2NvdW50OiAxcHggc29saWQgI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uY29uZmlybWVkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMTE3YjMwO1xufVxuXG4uZGlzY291bnRwbGFjZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM3YjZiMTE7XG59XG5cbi5wYWNrYWdlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI0IyREZFRTtcbn1cblxuLnNoaXBwZWQge1xuICBjb2xvcjogI2QwZjFkNztcbiAgYmFja2dyb3VuZDogIzAwNjg4Qjtcbn1cblxuLnJlamVjdGVkIHtcbiAgY29sb3I6ICNkMGYxZDc7XG4gIGJhY2tncm91bmQ6ICNGMDgwODA7XG59XG5cbi5sYWJlbFRpdGxlcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFyZ2luTGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMjIwcHg7XG4gIGJkaXNjb3VudC1yYWRpdXM6IDUwJTtcbiAgYmRpc2NvdW50OiAxcHggc29saWQgI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnByb2ZpbGUtaW1hZ2UgLmVkaXQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIGJkaXNjb3VudC1yYWRpdXM6IDIwJTtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cblxuLnByZXNjcmlwdGlvbmxpc3RjbGFzcyB7XG4gIGhlaWdodDogMjkwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmNsZWFyZml4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jdXN0b21yYWRpbyB7XG4gIGZvbnQtc2l6ZTogNDhweCAhaW1wb3J0YW50O1xufVxuXG4ucmVkY29sb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVzZXJJbmZvIHtcbiAgYmRpc2NvdW50LWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5tYXJnaW5jdXN0b20ge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uY3VzdG9td2lkIHtcbiAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4udXNlckluZm86bGFzdC1jaGlsZCB7XG4gIGJkaXNjb3VudC1ib3R0b206IG5vbmU7XG59XG5cbi5jdXN0b21idXR0b25kaXYge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmRpc2NvdW50OiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDVweDtcbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbn1cblxuLnVzZXJtbmd0YWJsZSAudXNlcm1uZ3RhYmxlaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi51c2VybW5ndGFibGUgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUgdGQgaW1nIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMS4yNXJlbSAwO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5uby1yZXNpemUge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5tLTIwIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4ubm8tZm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DiscountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-discount',
          templateUrl: './discount.component.html',
          styleUrls: ['./discount.component.scss'],
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
        discountFormModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['discountFormModal']
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
  "./src/app/layout/discount/discount.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/layout/discount/discount.module.ts ***!
    \****************************************************/

  /*! exports provided: DiscountModule */

  /***/
  function srcAppLayoutDiscountDiscountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscountModule", function () {
      return DiscountModule;
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


    var _discount_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./discount.component */
    "./src/app/layout/discount/discount.component.ts");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var _discount_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./discount-routing.module */
    "./src/app/layout/discount/discount-routing.module.ts");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js"); //import { LoadingModule } from 'ngx-loading';
    //import {NgxToggleModule} from "ngx-toggle";
    //import {DataTableModule, SharedModule, InputTextModule} from 'primeng/primeng';
    //import {PaginatorModule} from 'primeng/paginator';
    //import {DropdownModule} from 'primeng/dropdown';


    var DiscountModule = function DiscountModule() {
      _classCallCheck(this, DiscountModule);
    };

    DiscountModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: DiscountModule
    });
    DiscountModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function DiscountModule_Factory(t) {
        return new (t || DiscountModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _discount_routing_module__WEBPACK_IMPORTED_MODULE_12__["DiscountRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
        animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBdiscountRadius: '4px',
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
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DiscountModule, {
        declarations: [_discount_component__WEBPACK_IMPORTED_MODULE_10__["DiscountComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _discount_routing_module__WEBPACK_IMPORTED_MODULE_12__["DiscountRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DiscountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _discount_routing_module__WEBPACK_IMPORTED_MODULE_12__["DiscountRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
            animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBdiscountRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
          }), ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(), //  DropdownModule,
          //PaginatorModule,
          angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
          })],
          declarations: [_discount_component__WEBPACK_IMPORTED_MODULE_10__["DiscountComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=discount-discount-module-es5.js.map