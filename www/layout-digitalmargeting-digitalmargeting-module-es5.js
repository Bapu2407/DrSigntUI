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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-digitalmargeting-digitalmargeting-module"], {
  /***/
  "./src/app/layout/digitalmargeting/digitalmargeting-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/digitalmargeting/digitalmargeting-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: DigitalmargetingRoutingModule */

  /***/
  function srcAppLayoutDigitalmargetingDigitalmargetingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DigitalmargetingRoutingModule", function () {
      return DigitalmargetingRoutingModule;
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


    var _digitalmargeting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./digitalmargeting.component */
    "./src/app/layout/digitalmargeting/digitalmargeting.component.ts");

    var routes = [{
      path: '',
      component: _digitalmargeting_component__WEBPACK_IMPORTED_MODULE_2__["DigitalmargetingComponent"]
    }];

    var DigitalmargetingRoutingModule = function DigitalmargetingRoutingModule() {
      _classCallCheck(this, DigitalmargetingRoutingModule);
    };

    DigitalmargetingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DigitalmargetingRoutingModule
    });
    DigitalmargetingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DigitalmargetingRoutingModule_Factory(t) {
        return new (t || DigitalmargetingRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DigitalmargetingRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigitalmargetingRoutingModule, [{
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
  "./src/app/layout/digitalmargeting/digitalmargeting.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/layout/digitalmargeting/digitalmargeting.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DigitalmargetingComponent */

  /***/
  function srcAppLayoutDigitalmargetingDigitalmargetingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DigitalmargetingComponent", function () {
      return DigitalmargetingComponent;
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


    var src_BaseComponentDM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/BaseComponentDM */
    "./src/BaseComponentDM.ts");
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");

    var _c0 = ["myname"];
    var _c1 = ["fileInputDemoPhoto"];
    var _c2 = ["acc"];
    var _c3 = ["content"];
    var _c4 = ["digitalmargetingFormModal"];
    var _c5 = ["searFiltersModal"];
    var _c6 = ["enlargedImageModal"];
    var _c7 = ["enlargedPrescriptionModal"];

    function DigitalmargetingComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r934 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enlarged Prescription View");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DigitalmargetingComponent_ng_template_0_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r934);

          var ctx_r933 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r933.closeCustomModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r919 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r919.enlargedPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DigitalmargetingComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r937 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enlarged View");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DigitalmargetingComponent_ng_template_2_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r937);

          var ctx_r936 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r936.closeCustomModal2();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r921 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r921.enlargedPrescPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DigitalmargetingComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r941 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 44);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DigitalmargetingComponent_div_6_Template_i_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r941);

          var i_r939 = ctx.index;

          var ctx_r940 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r940.removeItem(i_r939);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r939 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r939);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r939 + 1);
      }
    }

    function DigitalmargetingComponent_span_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Send OTP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DigitalmargetingComponent_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Re-Send OTP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DigitalmargetingComponent_p_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You will receive an OTP in your above mobile shortly, please enter that below and press the verify button to validate that. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DigitalmargetingComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r943 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "OTP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DigitalmargetingComponent_div_25_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r943);

          var ctx_r942 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r942.otpEnteredByUser = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DigitalmargetingComponent_div_25_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r943);

          var ctx_r944 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r944.verifyOTP();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Verify OTP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r926 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r926.otpEnteredByUser);
      }
    }

    function DigitalmargetingComponent_p_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " OTP is verifed successfully ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DigitalmargetingComponent_span_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OR");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " just click a row on an old prescription from the list below ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DigitalmargetingComponent_p_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0Fix The Error : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r929 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r929.form_fill_failure_msg, " ");
      }
    }

    function DigitalmargetingComponent_ng_template_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Please wait.. ");
      }
    }

    var _c8 = function _c8() {
      return {
        primaryColour: "blue",
        secondaryColour: "red",
        fullScreenBackdrop: false
      };
    };

    var DigitalmargetingComponent =
    /*#__PURE__*/
    function (_src_BaseComponentDM_) {
      _inherits(DigitalmargetingComponent, _src_BaseComponentDM_);

      var _super = _createSuper(DigitalmargetingComponent);

      function DigitalmargetingComponent(router, route, modal, toastr, _fb, dataService) {
        var _this;

        _classCallCheck(this, DigitalmargetingComponent);

        _this = _super.call(this, router);
        _this.router = router;
        _this.route = route;
        _this.modal = modal;
        _this.toastr = toastr;
        _this._fb = _fb;
        _this.dataService = dataService;
        _this.loadingCustomeMsg = "Loading...";
        _this.otpVerified = false;
        _this.sendOTPflag = false;
        _this.verifyActionStart = false;
        _this.otpEnteredByUser = '';
        _this.fromOldImageList = false;
        _this.loading = true;
        _this.isPrescriptionUploaded = false;
        _this.showOldPrescription = '';
        _this.allDynaFilter = null;
        _this.patientList = [];
        _this.customerList = [];
        _this.states = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].states;
        _this.keywordCustomer = "name";
        _this.fetchDigitalmargetingByCustomer = false;
        _this.digitalmargetingList = [];
        _this.fromCustomerPage = false;
        _this.userKind = "digitalmargeting";
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
        _this.searchByDigitalmargetingDate = false;
        _this.searchByDigitalmargetingId = false;
        _this.searchByStatus = false;
        _this.keywordMedicine = "name";
        _this.digitalmargetingObject = {
          name: "",
          emailId: "",
          mobileNumber: "9134683936",
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
          uploadedFile: "",
          uploadedFileURL: "",
          deliveryMode: "General",
          status: "DigitalmargetingPlaced"
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
        _this.digitalmargetingObjectBase = {
          name: "",
          emailId: "",
          mobileNumber: "9134683936",
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
          uploadedFile: "",
          uploadedFileURL: "",
          deliveryMode: "General",
          status: "DigitalmargetingPlaced"
        };
        _this.openingMeridian = true; //  this.customDigitalmargetingtime.hour = 9
        // this.customDigitalmargetingtime.minute = 10

        _this.digitalmargetingFormGroup = _this.buildForm();

        _this.openforAddDigitalmargetingDialog();

        _this.loading = false; //this.createMedicineItem()
        //this.digitalmargetingFormGroup.valueChanges.subscribe(data => console.log('form changes', data));
        // this.loading = false;    
        //this.fetchDigitalmargetings()   

        return _this;
      }

      _createClass(DigitalmargetingComponent, [{
        key: "gfg",
        value: function gfg() {
          var minm = 10000;
          var maxm = 99999;
          this.randomOTP = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          return this._fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.digitalmargetingObject.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.digitalmargetingObject.emailId, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.digitalmargetingObject.mobileNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]),
            otpEnteredByUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            uploadedFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.digitalmargetingObject.uploadedFile, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            //medicineName: new FormControl(this.digitalmargetingObject.attendantID, Validators.required),
            //quantity: new FormControl(this.digitalmargetingObject.name, Validators.required),
            medicineListItems: this._fb.array([this.createMedicineItem()])
          });
        }
      }, {
        key: "sendOTP",
        value: function sendOTP() {
          var _this2 = this;

          try {
            this.otpEnteredByUser = '';
            this.sendOTPflag = true;
            this.verifyActionStart = false;
            this.gfg();
            var mobileNUmber = this.digitalmargetingFormGroup.controls.mobileNumber.value;
            console.log("this.mobileNumber ==" + mobileNUmber);
            console.log("this.digitalmargetingObject.mobileNumber ==" + this.digitalmargetingObject.mobileNumber);
            console.log("this.digitalmargetingFormGroup.get('mobileNumber').valid ==" + this.digitalmargetingFormGroup.get('mobileNumber').valid);
            console.log("this.digitalmargetingFormGroup.get('mobileNumber').touched ) ==" + this.digitalmargetingFormGroup.get('mobileNumber').touched);
            console.log("this.randomOTP ==" + this.randomOTP); // 

            if (this.digitalmargetingObject.mobileNumber && this.digitalmargetingObject.mobileNumber.length >= 0 && this.digitalmargetingFormGroup.get('mobileNumber').valid && this.digitalmargetingFormGroup.get('mobileNumber').touched) {
              this.loading = true;
              var otpData = {
                otp: this.randomOTP,
                phone: this.digitalmargetingObject.mobileNumber
              };
              setTimeout(function () {
                _this2.dataService.sendOTP(otpData).then(function (result) {
                  _this2.loading = false;
                }, function (err) {
                  _this2.toastr.errorToastr('problem in sending OTP, please resend OTP,' + err.message);

                  _this2.loading = false;
                  console.log(err);
                });
              }, 3000);
            } else {
              alert("please enter a valid mobile number first");
            }
          } catch (err) {
            console.log(err);
          }
        }
      }, {
        key: "verifyOTP",
        value: function verifyOTP() {
          this.verifyActionStart = true; //console.log("this.randomOTP =="+this.randomOTP )
          //console.log("this.otpEnteredByUser =="+this.otpEnteredByUser )

          if (!this.otpVerified && this.otpEnteredByUser != this.randomOTP) {
            alert("You've entered a wrong OTP ");
          } else {
            this.otpVerified = true;
          }
        }
      }, {
        key: "getControls",
        value: function getControls() {
          return this.digitalmargetingFormGroup.get('medicineListItems').controls;
        }
      }, {
        key: "gotoCustomerPage",
        value: function gotoCustomerPage() {
          this.router.navigate(["/customer", {
            fromDigitalmargetingPage: 'fromDigitalmargetingPage'
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
        key: "getDigitalmargeting",
        value: function getDigitalmargeting() {}
      }, {
        key: "addItem",
        value: function addItem() {
          this.medicineListItems = this.digitalmargetingFormGroup.get('medicineListItems');
          this.medicineListItems.push(this.createMedicineItem());
        }
      }, {
        key: "removeItem",
        value: function removeItem(i) {
          this.medicineListItems = this.digitalmargetingFormGroup.get('medicineListItems');
          this.medicineListItems.removeAt(i);
        }
      }, {
        key: "closeSearchModal",
        value: function closeSearchModal() {
          //if(this.modalSearchFilerReference)
          //this.modalSearchFilerReference.close();
          if (this.modalSearchFilerReference) this.modalSearchFilerReference.dismiss();
        }
      }, {
        key: "openforAddDigitalmargetingDialog",
        value: function openforAddDigitalmargetingDialog() {
          try {
            //this.medicineListItems.push({})
            this.digitalmargetingObject = Object.assign({}, this.digitalmargetingObjectBase);
            this.customerOldPrescriptionListArr = [];
            this.customerId = '';
            /*
            if(this.customerId == undefined || !this.customerId || this.customerId == ''){
             alert("Please select a customer first, from the dropdown")
             return
            }
            */

            this.mode = "add"; //this.modalReferenceDigitalmargetingForm = this.modal.open(this.digitalmargetingFormModal);

            this.digitalmargetingFormGroup = this.buildForm();
            this.medicineListItems = this.digitalmargetingFormGroup.get('medicineListItems'); // 
          } catch (e) {
            console.log(e);
          }
        }
      }, {
        key: "getPatient",
        value: function getPatient() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          var _a, _b;

          if (!this.otpVerified) {
            // this.verifyOTP()
            alert("Please verify your mobile with an OTP first");
            return;
          }

          if (!this.digitalmargetingFormGroup.valid) {
            this.submitAttempt = true;
            this.validateFields(this.digitalmargetingFormGroup.controls);
            return;
          }

          var medicineListItems = [];

          for (var i = 0; i < this.medicineListItems.length; i++) {
            var formObject = this.medicineListItems.at(i); //let medicineObj = formObject.get('medicineName').value

            medicineListItems.push({
              //medicineId: formObject.get('medicineId')?.value,
              medicineName: (_a = formObject.get('medicineName')) === null || _a === void 0 ? void 0 : _a.value,
              //mg: formObject.get('mg')?.value,
              quantity: (_b = formObject.get('quantity')) === null || _b === void 0 ? void 0 : _b.value
            });
          }

          this.digitalmargetingObject.medicineList = [];
          this.digitalmargetingObject.medicineList = medicineListItems; //this.digitalmargetingObject.customerId = this.customerId
          //    console.log("digitalmargeting this.digitalmargetingObject **"+JSON.stringify(this.digitalmargetingObject))
          //this.fromOldImageList = false

          if (this.mode == "add") {
            delete this.digitalmargetingObject['customer'];
            console.log("this.digitalmargetingObject for add == " + JSON.stringify(this.digitalmargetingObject));
            this.dataService.addDigitalmargeting(this.digitalmargetingObject).then(function (result) {
              //  console.log("result after adduser == "+JSON.stringify(result))
              _this3.commonAfterSaveCode();

              _this3.reinitialise();

              _this3.form_fill_failure_msg = "";

              _this3.toastr.successToastr('New digitalmargeting is added successfully'); //  this.fromOldImageList = false

            }, function (err) {
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
            _this4.mode = "add"; //  this.fetchDigitalmargetings()
          }, 2000);
        }
      }, {
        key: "enlargePic",
        value: function enlargePic() {
          //alert("trying to enlarge")
          //let image  = this.digitalmargetingObject.uploadedFileURL   
          //this.enlargedPic = image
          //this.enlargedPrescPic = ''
          //this.closeCustomModal2()
          this.modalReferenceImage = this.modal.open(this.enlargedImageModal);
        }
      }, {
        key: "enlargePrescription",
        value: function enlargePrescription(obj) {
          //this.closeCustomModal()
          //this.enlargedPic = ''
          var image = obj.uploadPhotoDigitalmargetingPrescriptionURL;
          this.enlargedPrescPic = image;
          this.modalReferencePrescriptionImage = this.modal.open(this.enlargedPrescriptionModal);
        }
      }, {
        key: "selectPrescription",
        value: function selectPrescription(obj) {
          // let image  = obj.uploadPhotoDigitalmargetingPrescriptionURL    
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

          this.digitalmargetingObject.uploadedFile = obj.uploadPhotoDigitalmargetingPrescription;
          this.digitalmargetingObject.uploadedFile = "data:image/jpg;base64," + this.digitalmargetingObject.uploadedFile;
          this.digitalmargetingObject.uploadedFileURL = obj.uploadPhotoDigitalmargetingPrescriptionURL;
          this.digitalmargetingFormGroup.get('uploadedFile').patchValue(this.digitalmargetingObject.uploadedFile);
          console.log("obj ==" + JSON.stringify(obj)); //this.getPhotoOLDPrescription(obj.uploadPhotoDigitalmargetingPrescriptionURL)
          //this.showOldPrescription  = 'url(' + obj.uploadPhotoDigitalmargetingPrescriptionURL + ')'
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
            console.log("in getPhoto == this.digitalmargetingObject.uploadedFileURL == " + this.digitalmargetingObject.uploadedFileURL);
            var image = this.digitalmargetingObject.uploadedFileURL;
            image = this.digitalmargetingObject.uploadedFile; //alert(this.fromOldImageList)

            this.enlargedPic = image; //this.fromOldImageList = false
            //let  image = "data:image/jpg;base64,"+this.digitalmargetingObject.uploadedFile

            /* if(photoType == 'prescription'){
               image  = this.digitalmargetingObject.uploadedFileURL
               if(!image && this.digitalmargetingObject.uploadedFile){
                 image = "data:image/jpg;base64,"+this.digitalmargetingObject.uploadedFile
                           this.digitalmargetingObject.uploadedFile = "data:image/jpg;base64,"+this.digitalmargetingObject.uploadedFile
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
          var _this5 = this;

          //  alert("I am clicked")
          var reader = new FileReader();

          try {
            reader.onload = function (readerEvent) {
              var imageData = readerEvent.target.result;
              _this5.enlargedPic = imageData;
              console.log("in capturePhoto imageData == " + imageData);
              if (photoType == 'prescription') _this5.digitalmargetingObject.uploadedFile = imageData; //var dataURL = reader.result;
              //this.digitalmargetingObject.uploadedFileURL  =  imageData;

              _this5.digitalmargetingFormGroup.get('uploadedFile').patchValue(_this5.digitalmargetingObject.uploadedFile); //this.isPrescriptionUploaded = true

            };

            this.digitalmargetingObject.uploadedFileURL = event.target.files[0];
            console.log("in capturePhoto this.digitalmargetingObject.uploadedFileURL == " + this.digitalmargetingObject.uploadedFileURL);
            reader.readAsDataURL(event.target.files[0]);
            var image = document.getElementById('output');
            this.prescriptionSource = URL.createObjectURL(event.target.files[0]);
            document.getElementById('output').setAttribute('src', URL.createObjectURL(event.target.files[0]));
            console.log("this.prescriptionSource == " + this.prescriptionSource); //this.prescriptionSource = event.target.files[0];
          } catch (error) {
            console.log('Error', error);
          }
        }
      }, {
        key: "getPhotoOldPrescription",
        value: function getPhotoOldPrescription(obj) {
          try {
            var image = obj.uploadPhotoDigitalmargetingPrescriptionURL;
            image = obj.uploadPhotoDigitalmargetingPrescriptionURL;
            /*if(obj && obj.uploadPhotoDigitalmargetingPrescription){
              image = obj.uploadPhotoDigitalmargetingPrescription
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
          this.digitalmargetingFormGroup = this._fb.group({
            customerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.customerId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            uploadedFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.digitalmargetingObject.uploadedFile, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            deliveryMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.digitalmargetingObject.deliveryMode, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            //medicineName: new FormControl(this.digitalmargetingObject.attendantID, Validators.required),
            //quantity: new FormControl(this.digitalmargetingObject.name, Validators.required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.digitalmargetingObject.status, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            medicineListItems: this._fb.array([this.createMedicineItem()])
          });
          this.digitalmargetingFormGroup.get('uploadedFile').patchValue(this.digitalmargetingObject.uploadedFile); //console.log("this.digitalmargetingObject =="+JSON.stringify(this.digitalmargetingObject))

          var dateTimeArray = [];
          this.medicineListItems = this.digitalmargetingFormGroup.get('medicineListItems');
          this.medicineListItems.removeAt(0);

          for (var i in this.digitalmargetingObject.medicineList) {
            var medicine = this.digitalmargetingObject.medicineList[i]; // dateTimeArray.push({date:date,time:time})
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

          console.log("this.medicineListItems **" + this.medicineListItems.length); //this.digitalmargetingObject.attendantID = earlierAttendent
          //this.digitalmargetingFormGroup.get('medicineListItems').patchValue(dateTimeArray)
          //addItem
          //setTimeout(() => {
          //try{
          //  this.modalReferenceDigitalmargetingForm = this.modal.open(this.digitalmargetingFormModal);
          //}catch(error){
          //    console.log(error)
          //}
          //}, 2000);
          //setTimeout(() => {
        }
      }, {
        key: "checkStatusChange",
        value: function checkStatusChange() {
          console.log("status **" + this.digitalmargetingObject['status']);
        }
      }, {
        key: "checkDeliveryMode",
        value: function checkDeliveryMode() {
          console.log("deliverymode **" + this.digitalmargetingObject.deliveryMode);
        }
      }, {
        key: "openForeditDigitalmargeting",
        value: function openForeditDigitalmargeting(user) {
          var _this6 = this;

          //this.input.nativeElement.focus();
          //this.fromOldImageList = false
          //  console.log("digitalmargeting object **"+JSON.stringify(user))
          //this.modalReferenceDigitalmargetingForm = this.modal.open(this.digitalmargetingFormModal);
          this.loading = true;
          this.loadingCustomeMsg == "Fetching old prescriptions, please wait..";
          this.mode = "edit"; //this.digitalmargetingObject = Object.assign({}, this.digitalmargetingObjectBase); 

          this.customerId = user['customerId'];
          this.digitalmargetingObject = Object.assign({}, user);
          console.log("deliverymode **" + this.digitalmargetingObject['deliveryMode']);
          this.modalReferenceDigitalmargetingForm = this.modal.open(this.digitalmargetingFormModal); //console.log("digitalmargeting in EDIT this.digitalmargetingObject **"+JSON.stringify(this.digitalmargetingObject))

          console.log("this.customerId == " + this.customerId); //if(this.customerId)
          //this.fetchAllDigitalmargetingPrescriptions()  

          var data = {
            customerId: this.customerId
          };
          this.commonCodeDuringEdit();
          console.log(" fetch old prescription for " + JSON.stringify(data));
          this.dataService.fetchAllDigitalmargetingPrescriptions(data).then(function (result) {
            _this6.customerOldPrescriptionListArr = [];
            setTimeout(function () {
              if (result) {
                for (var i in result) {
                  var obj = result[i];
                  obj['selectValue'] = false;

                  _this6.customerOldPrescriptionListArr.push(obj);
                }
              }

              _this6.loading = false; //   this.commonCodeDuringEdit()
            }, 1000);
          }, function (err) {
            //this.commonCodeDuringEdit()
            _this6.customerOldPrescriptionListArr = [];
            _this6.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "reinitialise",
        value: function reinitialise() {
          this.searchByDigitalmargetingDate = false;
          this.searchByDigitalmargetingId = false;
          this.searchByCustomer = false;
          this.searchByStatus = false;
          this.digitalmargetingDate = '';
          this.customerId = '';
          this.digitalmargetingId = '';
          this.digitalmargetingStatus = '';
          this.customerName = '';
          this.allDynaFilter = null;
          this.fetchDigitalmargetingsCount();
          this.totalDocRecords = 0;
          this.fetchDigitalmargetings();
          this.digitalmargetingObject = Object.assign({}, this.digitalmargetingObjectBase);
          this.mode = "add";
          this.medicineListItems = this.digitalmargetingFormGroup.get('medicineListItems');
        }
      }, {
        key: "reset",
        value: function reset() {
          this.reinitialise();
          this.toastr.successToastr('Filters reset, digitalmargeting list refreshed');
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

          if (this.searchByDigitalmargetingDate && this.digitalmargetingDate) {
            var converteddate = this.fromJsDateToLocationdateTimeFormat(this.digitalmargetingDate);
            dynaFilter['createdDate'] = converteddate;
            dynaFilterArry.push({
              createdDate: converteddate
            });
            console.log("converteddate **" + converteddate); //moment(new Date()).format('YYYY-MM-DD[T00:00:00.000Z]'
            //var dateTime = new Date(this.digitalmargetingDate);

            /*
            var dateTime1dayAgo = moment(this.digitalmargetingDate,"YYYY-MM-DD HH:mm:ss").subtract(1,'d').format('YYYY-MM-DD[T00:00:00.000Z]');
            var dateTime1dayLater = moment(this.digitalmargetingDate,"YYYY-MM-DD HH:mm:ss").add(1,'days').format('YYYY-MM-DD[T00:00:00.000Z]');
            dynaFilter['createdDate'] = {"$gt": dateTime1dayAgo}
            //console.log("this.digitalmargetingDate **"+converteddate)
            console.log("this.digitalmargetingDate **"+this.digitalmargetingDate)
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

          if (this.searchByDigitalmargetingId && this.digitalmargetingId) {
            //dynaFilter['digitalmargetingId'] = this.digitalmargetingId   
            dynaFilterArry.push({
              digitalmargetingId: this.digitalmargetingId
            });
          }

          if (this.searchByStatus && this.digitalmargetingStatus) {
            //dynaFilter['status'] = this.digitalmargetingStatus   
            dynaFilterArry.push({
              status: this.digitalmargetingStatus
            });
          }

          this.allDynaFilter = {
            $and: dynaFilterArry
          };
          this.fetchDigitalmargetingsCount();
          this.fetchDigitalmargetings();
          this.closeSearchModal();
          this.toastr.successToastr('Searching Done');
        }
      }, {
        key: "closeMainModal",
        value: function closeMainModal() {
          if (this.modalReferenceDigitalmargetingForm) this.modalReferenceDigitalmargetingForm.close();
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
            this.fetchDigitalmargetingByCustomer = true;
          } else {
            this.fetchDigitalmargetingByCustomer = false;
          }

          console.log("this.customerId " + this.customerId);
          this.fetchDigitalmargetingsCount();
          this.fetchDigitalmargetings();
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
            this.digitalmargetingFormGroup.get('customerId').patchValue(item['_id']);
            this.customerId = item['_id'];

            if (this.customerId) {
              this.loading = true;
              this.loadingCustomeMsg == "Fetching old prescriptions, please wait..";
              this.fetchAllDigitalmargetingPrescriptions();
            } //console.log(" inside customerSelectEvent "+JSON.stringify(item))

          } // do something with selected item

        }
      }, {
        key: "onChangeCustomerSearch",
        value: function onChangeCustomerSearch(val) {
          var _this7 = this;

          //console.log(" inside onChangePatientSearch val "+val)
          // if(val && val.length >2 ){
          var data = {
            name: val
          };
          this.dataService.fetchAllCustomers(data).then(function (result) {
            _this7.customerList = result.map(function (element) {
              return element;
            });
          }, function (err) {//console.log(err);
          }); // }
        }
      }, {
        key: "fetchDigitalmargetingsCount",
        value: function fetchDigitalmargetingsCount() {
          var _this8 = this;

          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize,
            filter: this.allDynaFilter
          }; // this.fetchDigitalmargetingsCount({filter : allDynaFilter})  
          //this.fetchDigitalmargetingsByFilters({filter : allDynaFilter})   

          console.log(" inside data " + JSON.stringify(data));
          this.dataService.fetchDigitalmargetingsCount(data).then(function (result) {
            console.log("****** fetchdigitalmargetingsCount result   ===== **" + JSON.stringify(result));
            _this8.totalDocRecords = result;
            _this8.loading = false;
            console.log("****** this.totalDocRecords ===== **" + _this8.totalDocRecords);
          }, function (err) {
            _this8.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "fetchAllDigitalmargetingPrescriptions",
        value: function fetchAllDigitalmargetingPrescriptions() {
          var _this9 = this;

          var data = {
            customerId: this.customerId
          };
          console.log(" fetch old prescription for " + JSON.stringify(data));
          this.dataService.fetchAllDigitalmargetingPrescriptions(data).then(function (result) {
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
            _this9.customerOldPrescriptionListArr = [];

            if (result) {
              for (var i in result) {
                var obj = result[i];
                obj['selectValue'] = false;

                _this9.customerOldPrescriptionListArr.push(obj);
              }
            } //   console.log("****** this.customerOldPrescriptionListArr   ===== **"+JSON.stringify(this.customerOldPrescriptionListArr))      


            _this9.loading = false;
          }, function (err) {
            _this9.customerOldPrescriptionListArr = [];
            _this9.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "fetchDigitalmargetings",
        value: function fetchDigitalmargetings() {
          var _this10 = this;

          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize,
            filter: this.allDynaFilter
          };
          this.dataService.fetchDigitalmargetings(data).then(function (result) {
            _this10.normalFiltereduserListArr = []; //this.normalFiltereduserListArr = result.map(element => {        
            // return   element
            // })

            for (var i in result) {
              var digitalmargetingObj = result[i]; // if(!digitalmargetingObj['deliveryMode'] || digitalmargetingObj['deliveryMode'] == undefined ){
              //    digitalmargetingObj['deliveryMode'] = "General"
              //  }
              // console.log("****** digitalmargetingObj   ===== **"+JSON.stringify(digitalmargetingObj))    

              _this10.normalFiltereduserListArr.push(digitalmargetingObj);
            } //  console.log("****** this.fetchDigitalmargetingsByFilters   ===== **"+JSON.stringify(this.normalFiltereduserListArr))      


            _this10.loading = false;
          }, function (err) {
            _this10.normalFiltereduserListArr = [];
            _this10.loading = false;
            console.log(err);
          });
        }
      }]);

      return DigitalmargetingComponent;
    }(src_BaseComponentDM__WEBPACK_IMPORTED_MODULE_3__["BaseComponentDM"]);

    DigitalmargetingComponent.ɵfac = function DigitalmargetingComponent_Factory(t) {
      return new (t || DigitalmargetingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_access__WEBPACK_IMPORTED_MODULE_7__["DataAccess"]));
    };

    DigitalmargetingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DigitalmargetingComponent,
      selectors: [["app-digitalmargeting"]],
      viewQuery: function DigitalmargetingComponent_Query(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.digitalmargetingFormModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searFiltersModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.enlargedImageModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.enlargedPrescriptionModal = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 66,
      vars: 19,
      consts: [["enlargedImageModal", ""], ["enlargedPrescriptionModal", ""], [1, "containerDM"], [1, "p-2", 3, "formGroup"], ["formArrayName", "medicineListItems", 4, "ngFor", "ngForOf"], [1, "col-md-12", "text-right", "mt-4"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle", "customfiltericon", "m-10", 3, "click"], [1, "reducetextforicon"], [1, "row"], [1, "col-md-12", "form-group"], ["for", "mobileNumber", 1, "labelTitles"], [1, "required-asterisk"], [1, "col-md-12", "marginTop"], ["formControlName", "mobileNumber", "placeholder", "Enter Mobile Number", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12", "text-right", "m-2"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "click"], ["class", "reducetextforicon", 4, "ngIf"], ["class", "cutomeerrortext", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["for", "name", 1, "labelTitles"], ["formControlName", "name", "placeholder", "Enter name", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], ["for", "email", 1, "labelTitles"], ["type", "email", "formControlName", "emailId", "placeholder", "Enter email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "mt-4", 2, "border", "0", "padding", "10"], ["for", "email", 1, "labelTitlesDM"], [4, "ngIf"], [1, "col-md-12", "form-group", "marginTop", 3, "click"], [1, "profile-image-wrapper"], [1, "profile-image"], ["id", "output", 1, "profile-image"], [1, "edit-icon", 3, "click"], ["type", "file", "name", "files[]", "id", "file-selector", "accept", ".jpg, .jpeg, .png", 3, "change"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "disabled", "click"], [1, "my-container"], ["customLoadingTemplate", ""], [3, "show", "config", "template"], [1, "modal-header", "py-1"], [1, "modal-title", "headerTitle", "mb-0"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "para", 3, "src"], ["formArrayName", "medicineListItems"], [3, "formGroupName"], [1, "table", "table-bordered", "table-sm", "mt-2"], [2, "width", "10%"], [2, "width", "60%"], ["placeholder", "Enter Medicine name", "formControlName", "medicineName", 1, "customwidth", "form-control"], [2, "width", "30%"], ["formControlName", "quantity", "placeholder", "Quantity", 1, "form-control"], [1, "row", "text-right", "ml-2"], ["aria-hidden", "true", 1, "fa", "fa-minus-circle", "customfiltericon", "m-10", 3, "click"], [1, "cutomeerrortext"], [1, "redcolor"], ["formControlName", "otpEnteredByUser", "placeholder", "Enter OTP", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], [1, "redcolor", "ml-4"], [1, "redcolor", "ml-2"], [1, "fa", "fas", "fa-exclamation"]],
      template: function DigitalmargetingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DigitalmargetingComponent_ng_template_0_Template, 7, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DigitalmargetingComponent_ng_template_2_Template, 7, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DigitalmargetingComponent_div_6_Template, 24, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DigitalmargetingComponent_Template_i_click_8_listener() {
            return ctx.addItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Mobile Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DigitalmargetingComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.digitalmargetingObject.mobileNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DigitalmargetingComponent_Template_button_click_21_listener() {
            return ctx.sendOTP();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DigitalmargetingComponent_span_22_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DigitalmargetingComponent_span_23_Template, 2, 0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DigitalmargetingComponent_p_24_Template, 3, 0, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DigitalmargetingComponent_div_25_Template, 12, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DigitalmargetingComponent_p_26_Template, 3, 0, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DigitalmargetingComponent_Template_input_ngModelChange_35_listener($event) {
            return ctx.digitalmargetingObject.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DigitalmargetingComponent_Template_input_ngModelChange_42_listener($event) {
            return ctx.digitalmargetingObject.emailId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Upload your prescription ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DigitalmargetingComponent_span_48_Template, 5, 0, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DigitalmargetingComponent_Template_div_click_49_listener() {
            return ctx.enlargePic();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DigitalmargetingComponent_Template_span_click_53_listener() {
            return ctx.capturePhoto(null, "prescription");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DigitalmargetingComponent_Template_input_change_54_listener($event) {
            return ctx.capturePhoto($event, "prescription");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DigitalmargetingComponent_Template_button_click_57_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DigitalmargetingComponent_Template_button_click_59_listener() {
            return ctx.closeMainModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, DigitalmargetingComponent_p_61_Template, 6, 1, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, DigitalmargetingComponent_ng_template_63_Template, 1, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "ngx-loading", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r930 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.digitalmargetingFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getControls());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.digitalmargetingObject.mobileNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sendOTPflag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sendOTPflag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.verifyActionStart && ctx.sendOTPflag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sendOTPflag);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpVerified && ctx.otpEnteredByUser == ctx.randomOTP);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.digitalmargetingObject.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.digitalmargetingFormGroup.get("emailId").invalid && ctx.digitalmargetingFormGroup.get("emailId").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.digitalmargetingObject.emailId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerOldPrescriptionListArr && ctx.customerOldPrescriptionListArr.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.digitalmargetingFormGroup.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitAttempt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loading)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c8))("template", _r930);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_loading__WEBPACK_IMPORTED_MODULE_9__["NgxLoadingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"]],
      styles: ["span.bootstrap-switch-handle-off.bootstrap-switch-default[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.customwidth[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.qtycolwidth[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.profile-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.borderless[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .borderless[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n  width: 100%;\n}\n\n.para[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto !important;\n}\n\n.reducetextforicon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 5px;\n}\n\n.containerDM[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-right: 10px !important;\n  margin-left: 10px;\n  padding-right: 20px !important;\n  padding-left: 20px;\n}\n\n@media (min-width: 481px) {\n  .containerDM[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    padding-right: 20px !important;\n    padding-left: 20px;\n    margin-right: 300px !important;\n    margin-left: 300px;\n  }\n}\n\n@media (min-width: 961px) {\n  .containerDM[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    padding-right: 20px !important;\n    padding-left: 20px;\n    margin-right: 400px !important;\n    margin-left: 400px;\n  }\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  border-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.oldprescription-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.my-container[_ngcontent-%COMP%]   .custom-class[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  color: black;\n  top: 40%;\n  right: 50%;\n  border: 2px solid #1f94ed;\n  border-radius: 50%;\n}\n\n.oldprescription-image[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 70px;\n  border-radius: 10%;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.confirmed[_ngcontent-%COMP%] {\n  color: white;\n  background: #117b30;\n}\n\n.orderplaced[_ngcontent-%COMP%] {\n  color: white;\n  background: #7b6b11;\n}\n\n.packaged[_ngcontent-%COMP%] {\n  color: white;\n  background: #B2DFEE;\n}\n\n.shipped[_ngcontent-%COMP%] {\n  color: #d0f1d7;\n  background: #00688B;\n}\n\n.rejected[_ngcontent-%COMP%] {\n  color: #d0f1d7;\n  background: #F08080;\n}\n\n.labelTitlesDM[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18;\n  color: red;\n}\n\n.marginLeft[_ngcontent-%COMP%] {\n  margin-left: -25px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  border-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.prescriptionlistclass[_ngcontent-%COMP%] {\n  height: 290px !important;\n  width: auto;\n  overflow-y: scroll;\n}\n\n.clearfix[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n}\n\n.customradio[_ngcontent-%COMP%] {\n  font-size: 48px !important;\n}\n\n.redcolor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userInfo[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n\n.userInfo[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 95% !important;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .usermngtableinfo[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.no-resize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.m-20[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.no-focus[_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC9kaWdpdGFsbWFyZ2V0aW5nL2RpZ2l0YWxtYXJnZXRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9kaWdpdGFsbWFyZ2V0aW5nL2RpZ2l0YWxtYXJnZXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDRSxzQkFBQTtBQ0VGOztBREFBO0VBQ0Usc0JBQUE7QUNHRjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBREhBO0VBQ0ksOEJBQUE7RUFFQSxXQUFBO0FDS0o7O0FESEU7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUNNSjs7QURKQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ09GOztBRExBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDRSxrQkFBQTtBQ1FKOztBRE5BO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLDhCQUFBO0lBQ0Esa0JBQUE7SUFDQSw4QkFBQTtJQUNBLGtCQUFBO0VDU0Y7QUFDRjs7QURMQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSw4QkFBQTtJQUNBLGtCQUFBO0lBQ0EsOEJBQUE7SUFDQSxrQkFBQTtFQ09GO0FBQ0Y7O0FEREE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0VKOztBREFJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0VOOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDREY7O0FESUM7RUFDRyxZQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ0RKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDQUo7O0FERUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDQU47O0FESUU7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREdFO0VBQ0Usa0JBQUE7RUFFQSxlQUFBO0FDREo7O0FER0U7RUFDRSwwQkFBQTtBQ0FKOztBREVBO0VBRUksVUFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksZ0NBQUE7QUNFSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtBQ01KOztBREpBO0VBQ0UsZ0JBQUE7QUNPRjs7QURMQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ1FGOztBRE5BO0VBQ0ksWUFBQTtBQ1NKOztBRFBBO0VBQ0ksWUFBQTtBQ1VKOztBRFJBO0VBQ0ksYUFBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2RpZ2l0YWxtYXJnZXRpbmcvZGlnaXRhbG1hcmdldGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4uYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmLmJvb3RzdHJhcC1zd2l0Y2gtZGVmYXVsdCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmN1c3RvbXdpZHRoe1xyXG4gIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxufVxyXG4ucXR5Y29sd2lkdGh7XHJcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5wcm9maWxlLWltYWdlLXdyYXBwZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmJvcmRlcmxlc3MgdGQsIC5ib3JkZXJsZXNzIHRoIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZGl2aWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAvL21hcmdpbi10b3A6MXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5wYXJhe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDphdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlZHVjZXRleHRmb3JpY29ue1xyXG4gIGZvbnQtc2l6ZSA6MjBweDtcclxuICBtYXJnaW4tbGVmdDo1cHg7XHJcbn1cclxuLmNvbnRhaW5lckRNeyAgICBcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjEwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MjBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcbiAgLmNvbnRhaW5lckRNeyAgICBcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MjBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MzAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OjMwMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5NjFweCkge1xyXG4gIC5jb250YWluZXJETXsgICAgXHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDoyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDo0MDBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5wcm9maWxlLWltYWdlIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAgIC5lZGl0LWljb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDo3cHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1ib3R0b206MnB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuIFxyXG4gIC5vbGRwcmVzY3JpcHRpb24taW1hZ2Utd3JhcHBlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm15LWNvbnRhaW5lciAuY3VzdG9tLWNsYXNze1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIHRvcDogNDAlO1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzFmOTRlZDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLy96LWluZGV4OiA5OTk5OTtcclxufVxyXG4ub2xkcHJlc2NyaXB0aW9uLWltYWdlIHtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG59XHJcbiAuY29uZmlybWVkIHsgICBcclxuICAgIGNvbG9yOiB3aGl0ZTsgICBcclxuICAgIGJhY2tncm91bmQ6ICMxMTdiMzA7ICAgIFxyXG4gIH1cclxuXHJcbiAgLm9yZGVycGxhY2VkIHsgICBcclxuICAgIGNvbG9yOiB3aGl0ZTsgICBcclxuICAgIGJhY2tncm91bmQ6ICM3YjZiMTE7ICAgIFxyXG4gIH1cclxuXHJcbiAgLnBhY2thZ2VkIHsgICBcclxuICAgIGNvbG9yOndoaXRlOyAgIFxyXG4gICAgYmFja2dyb3VuZDogI0IyREZFRTsgICAgXHJcbiAgfVxyXG5cclxuICAuc2hpcHBlZCB7ICAgXHJcbiAgICBjb2xvcjogI2QwZjFkNzsgICBcclxuICAgIGJhY2tncm91bmQ6ICMwMDY4OEI7ICAgIFxyXG4gIH1cclxuXHJcbiAgLnJlamVjdGVkIHsgICBcclxuICAgIGNvbG9yOiAjZDBmMWQ3OyAgIFxyXG4gICAgYmFja2dyb3VuZDogI0YwODA4MDsgICAgXHJcbiAgfVxyXG5cclxuLmxhYmVsVGl0bGVzRE17XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTg7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuLm1hcmdpbkxlZnR7XHJcbiAgICBtYXJnaW4tbGVmdDotMjVweFxyXG59XHJcbi5wcm9maWxlLWltYWdlIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAgIC5lZGl0LWljb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDo3cHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1ib3R0b206MnB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICAucHJlc2NyaXB0aW9ubGlzdGNsYXNze1xyXG4gICAgaGVpZ2h0OiAyOTBweCAhaW1wb3J0YW50OyAgICBcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuICAuY2xlYXJmaXgge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmN1c3RvbXJhZGlve1xyXG4gICAgZm9udC1zaXplOiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4ucmVkY29sb3J7XHJcbiAgICBcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3IgOiBwb2ludGVyO1xyXG59XHJcbi51c2VySW5mbyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnVzZXJJbmZvOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VybW5ndGFibGUgLnVzZXJtbmd0YWJsZWluZm97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi51c2VybW5ndGFibGUgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUgdGQgaW1nIHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59ICBcclxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMDtcclxufVxyXG5oMyB7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxufVxyXG5wcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4ubm8tcmVzaXplIHtcclxuICAgIHJlc2l6ZSA6IG5vbmU7XHJcbn1cclxuLm0tMjAge1xyXG4gICAgbWFyZ2luIDogMjBweDtcclxufVxyXG4ubm8tZm9jdXMge1xyXG4gICAgb3V0bGluZSA6IG5vbmU7XHJcbn0iLCJzcGFuLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZi5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jdXN0b213aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5xdHljb2x3aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlLWltYWdlLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5ib3JkZXJsZXNzIHRkLCAuYm9yZGVybGVzcyB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFyYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnJlZHVjZXRleHRmb3JpY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY29udGFpbmVyRE0ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIHtcbiAgLmNvbnRhaW5lckRNIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk2MXB4KSB7XG4gIC5jb250YWluZXJETSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNDAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogNDAwcHg7XG4gIH1cbn1cbi5wcm9maWxlLWltYWdlIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDIyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5wcm9maWxlLWltYWdlIC5lZGl0LWljb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMCU7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDdweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vbGRwcmVzY3JpcHRpb24taW1hZ2Utd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm15LWNvbnRhaW5lciAuY3VzdG9tLWNsYXNzIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRvcDogNDAlO1xuICByaWdodDogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMWY5NGVkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5vbGRwcmVzY3JpcHRpb24taW1hZ2Uge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmNvbmZpcm1lZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzExN2IzMDtcbn1cblxuLm9yZGVycGxhY2VkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjN2I2YjExO1xufVxuXG4ucGFja2FnZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNCMkRGRUU7XG59XG5cbi5zaGlwcGVkIHtcbiAgY29sb3I6ICNkMGYxZDc7XG4gIGJhY2tncm91bmQ6ICMwMDY4OEI7XG59XG5cbi5yZWplY3RlZCB7XG4gIGNvbG9yOiAjZDBmMWQ3O1xuICBiYWNrZ3JvdW5kOiAjRjA4MDgwO1xufVxuXG4ubGFiZWxUaXRsZXNETSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4O1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWFyZ2luTGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMjIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnByb2ZpbGUtaW1hZ2UgLmVkaXQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cblxuLnByZXNjcmlwdGlvbmxpc3RjbGFzcyB7XG4gIGhlaWdodDogMjkwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmNsZWFyZml4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jdXN0b21yYWRpbyB7XG4gIGZvbnQtc2l6ZTogNDhweCAhaW1wb3J0YW50O1xufVxuXG4ucmVkY29sb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVzZXJJbmZvIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi51c2VySW5mbzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbn1cblxuLnVzZXJtbmd0YWJsZSAudXNlcm1uZ3RhYmxlaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi51c2VybW5ndGFibGUgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUgdGQgaW1nIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMS4yNXJlbSAwO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5uby1yZXNpemUge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5tLTIwIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4ubm8tZm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigitalmargetingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-digitalmargeting',
          templateUrl: './digitalmargeting.component.html',
          styleUrls: ['./digitalmargeting.component.scss'],
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
        digitalmargetingFormModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['digitalmargetingFormModal']
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
  "./src/app/layout/digitalmargeting/digitalmargeting.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/layout/digitalmargeting/digitalmargeting.module.ts ***!
    \********************************************************************/

  /*! exports provided: DigitalmargetingModule */

  /***/
  function srcAppLayoutDigitalmargetingDigitalmargetingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DigitalmargetingModule", function () {
      return DigitalmargetingModule;
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


    var _digitalmargeting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./digitalmargeting.component */
    "./src/app/layout/digitalmargeting/digitalmargeting.component.ts");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var _digitalmargeting_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./digitalmargeting-routing.module */
    "./src/app/layout/digitalmargeting/digitalmargeting-routing.module.ts");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js"); //import { LoadingModule } from 'ngx-loading';
    //import {NgxToggleModule} from "ngx-toggle";
    //import {DataTableModule, SharedModule, InputTextModule} from 'primeng/primeng';
    //import {PaginatorModule} from 'primeng/paginator';
    //import {DropdownModule} from 'primeng/dropdown';


    var DigitalmargetingModule = function DigitalmargetingModule() {
      _classCallCheck(this, DigitalmargetingModule);
    };

    DigitalmargetingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DigitalmargetingModule
    });
    DigitalmargetingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DigitalmargetingModule_Factory(t) {
        return new (t || DigitalmargetingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _digitalmargeting_routing_module__WEBPACK_IMPORTED_MODULE_12__["DigitalmargetingRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
        animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBdigitalmargetingRadius: '4px',
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
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DigitalmargetingModule, {
        declarations: [_digitalmargeting_component__WEBPACK_IMPORTED_MODULE_10__["DigitalmargetingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _digitalmargeting_routing_module__WEBPACK_IMPORTED_MODULE_12__["DigitalmargetingRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigitalmargetingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _digitalmargeting_routing_module__WEBPACK_IMPORTED_MODULE_12__["DigitalmargetingRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
            animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBdigitalmargetingRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
          }), ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(), //  DropdownModule,
          //PaginatorModule,
          angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
          })],
          declarations: [_digitalmargeting_component__WEBPACK_IMPORTED_MODULE_10__["DigitalmargetingComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=layout-digitalmargeting-digitalmargeting-module-es5.js.map