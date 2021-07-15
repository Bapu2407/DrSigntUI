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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listdigitalmakt-listdigitalmakt-module"], {
  /***/
  "./src/app/layout/listdigitalmakt/listdigitalmakt-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/listdigitalmakt/listdigitalmakt-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ListdigitalmaktRoutingModule */

  /***/
  function srcAppLayoutListdigitalmaktListdigitalmaktRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListdigitalmaktRoutingModule", function () {
      return ListdigitalmaktRoutingModule;
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


    var _listdigitalmakt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./listdigitalmakt.component */
    "./src/app/layout/listdigitalmakt/listdigitalmakt.component.ts");

    var routes = [{
      path: '',
      component: _listdigitalmakt_component__WEBPACK_IMPORTED_MODULE_2__["ListdigitalmaktComponent"]
    }];

    var ListdigitalmaktRoutingModule = function ListdigitalmaktRoutingModule() {
      _classCallCheck(this, ListdigitalmaktRoutingModule);
    };

    ListdigitalmaktRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListdigitalmaktRoutingModule
    });
    ListdigitalmaktRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListdigitalmaktRoutingModule_Factory(t) {
        return new (t || ListdigitalmaktRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListdigitalmaktRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListdigitalmaktRoutingModule, [{
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
  "./src/app/layout/listdigitalmakt/listdigitalmakt.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/layout/listdigitalmakt/listdigitalmakt.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ListdigitalmaktComponent */

  /***/
  function srcAppLayoutListdigitalmaktListdigitalmaktComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListdigitalmaktComponent", function () {
      return ListdigitalmaktComponent;
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

    var _c0 = ["myname"];
    var _c1 = ["fileInputDemoPhoto"];
    var _c2 = ["acc"];
    var _c3 = ["content"];
    var _c4 = ["listdigitalmaktFormModal"];
    var _c5 = ["searFiltersModal"];
    var _c6 = ["enlargedImageModal"];
    var _c7 = ["enlargedPrescriptionModal"];

    function ListdigitalmaktComponent_tbody_25_tr_1_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "lowercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 16);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 16);

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
        var med_r908 = ctx.$implicit;

        var obj_r906 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, obj_r906.status));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](med_r908 == null ? null : med_r908.medicineName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](med_r908 == null ? null : med_r908.quantity);
      }
    }

    function ListdigitalmaktComponent_tbody_25_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r911 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListdigitalmaktComponent_tbody_25_tr_1_tr_12_Template, 14, 7, "tr", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListdigitalmaktComponent_tbody_25_tr_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r911);

          var obj_r906 = ctx.$implicit;

          var ctx_r910 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r910.viewPrescription(obj_r906);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " View Prescription");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var obj_r906 = ctx.$implicit;

        var ctx_r905 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 9, obj_r906.status));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r906 == null ? null : obj_r906._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r906 == null ? null : obj_r906.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r906 == null ? null : obj_r906.emailId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r906 == null ? null : obj_r906.mobileNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", obj_r906.medicineList);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r905.convertToHumanDate(obj_r906.createdDate));
      }
    }

    var _c8 = function _c8(a1, a2, a3) {
      return {
        id: "forlistdigitalmakt1",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    function ListdigitalmaktComponent_tbody_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListdigitalmaktComponent_tbody_25_tr_1_Template, 18, 11, "tr", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r897 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r897.normalFiltereduserListArr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c8, ctx_r897.pageSize, ctx_r897.pageNo, ctx_r897.totalDocRecords)));
      }
    }

    function ListdigitalmaktComponent_tbody_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No record available");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListdigitalmaktComponent_ng_template_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r914 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enlarged Prescription View");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListdigitalmaktComponent_ng_template_29_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r914);

          var ctx_r913 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r913.closeCustomModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r900 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r900.enlargedPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ListdigitalmaktComponent_ng_template_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r917 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enlarged View");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListdigitalmaktComponent_ng_template_31_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r917);

          var ctx_r916 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r916.closeCustomModal2();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r902 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r902.enlargedPrescPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ListdigitalmaktComponent_ng_template_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Please wait.. ");
      }
    }

    var _c9 = function _c9() {
      return {
        primaryColour: "blue",
        secondaryColour: "red",
        fullScreenBackdrop: false
      };
    };

    var ListdigitalmaktComponent =
    /*#__PURE__*/
    function (_src_BaseComponentDM_) {
      _inherits(ListdigitalmaktComponent, _src_BaseComponentDM_);

      var _super = _createSuper(ListdigitalmaktComponent);

      function ListdigitalmaktComponent(router, route, modal, toastr, _fb, dataService) {
        var _this;

        _classCallCheck(this, ListdigitalmaktComponent);

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
        _this.fetchListdigitalmaktByCustomer = false;
        _this.listdigitalmaktList = [];
        _this.fromCustomerPage = false;
        _this.userKind = "listdigitalmakt";
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
        _this.searchByListdigitalmaktDate = false;
        _this.searchByListdigitalmaktId = false;
        _this.searchByStatus = false;
        _this.keywordMedicine = "name";
        _this.listdigitalmaktObject = {
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
          status: "ListdigitalmaktPlaced"
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
        _this.listdigitalmaktObjectBase = {
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
          status: "ListdigitalmaktPlaced"
        };
        _this.openingMeridian = true; //  this.customListdigitalmakttime.hour = 9
        // this.customListdigitalmakttime.minute = 10
        //this.listdigitalmaktFormGroup = this.buildForm()
        //this.openforAddListdigitalmaktDialog()

        _this.loading = false; //this.createMedicineItem()
        //this.listdigitalmaktFormGroup.valueChanges.subscribe(data => console.log('form changes', data));
        // this.loading = false;    

        _this.fetchDigitalmargetingsCount();

        _this.fetchDigitalmargetings();

        return _this;
      }

      _createClass(ListdigitalmaktComponent, [{
        key: "gfg",
        value: function gfg() {
          var minm = 10000;
          var maxm = 99999;
          this.randomOTP = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
        }
      }, {
        key: "getControls",
        value: function getControls() {
          return this.listdigitalmaktFormGroup.get('medicineListItems').controls;
        }
      }, {
        key: "gotoCustomerPage",
        value: function gotoCustomerPage() {
          this.router.navigate(["/customer", {
            fromListdigitalmaktPage: 'fromListdigitalmaktPage'
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
        key: "getListdigitalmakt",
        value: function getListdigitalmakt() {}
      }, {
        key: "addItem",
        value: function addItem() {
          this.medicineListItems = this.listdigitalmaktFormGroup.get('medicineListItems');
          this.medicineListItems.push(this.createMedicineItem());
        }
      }, {
        key: "removeItem",
        value: function removeItem(i) {
          this.medicineListItems = this.listdigitalmaktFormGroup.get('medicineListItems');
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
        key: "openforAddListdigitalmaktDialog",
        value: function openforAddListdigitalmaktDialog() {
          try {
            //this.medicineListItems.push({})
            this.listdigitalmaktObject = Object.assign({}, this.listdigitalmaktObjectBase);
            this.customerOldPrescriptionListArr = [];
            this.customerId = '';
            /*
            if(this.customerId == undefined || !this.customerId || this.customerId == ''){
             alert("Please select a customer first, from the dropdown")
             return
            }
            */

            this.mode = "add"; //this.modalReferenceListdigitalmaktForm = this.modal.open(this.listdigitalmaktFormModal);

            this.medicineListItems = this.listdigitalmaktFormGroup.get('medicineListItems'); // 
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
          } //this.pageSize = Config.RECORDSIZE;
          //this.pageNo = 1


          this.fetchDigitalmargetings();
        }
      }, {
        key: "enlargePic",
        value: function enlargePic() {
          //alert("trying to enlarge")
          //let image  = this.listdigitalmaktObject.uploadedFileURL   
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
          var image = obj.uploadPhotoListdigitalmaktPrescriptionURL;
          this.enlargedPrescPic = image;
          this.modalReferencePrescriptionImage = this.modal.open(this.enlargedPrescriptionModal);
        }
      }, {
        key: "selectPrescription",
        value: function selectPrescription(obj) {
          // let image  = obj.uploadPhotoListdigitalmaktPrescriptionURL    
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

          this.listdigitalmaktObject.uploadedFile = obj.uploadPhotoListdigitalmaktPrescription;
          this.listdigitalmaktObject.uploadedFile = "data:image/jpg;base64," + this.listdigitalmaktObject.uploadedFile;
          this.listdigitalmaktObject.uploadedFileURL = obj.uploadPhotoListdigitalmaktPrescriptionURL;
          this.listdigitalmaktFormGroup.get('uploadedFile').patchValue(this.listdigitalmaktObject.uploadedFile);
          console.log("obj ==" + JSON.stringify(obj)); //this.getPhotoOLDPrescription(obj.uploadPhotoListdigitalmaktPrescriptionURL)
          //this.showOldPrescription  = 'url(' + obj.uploadPhotoListdigitalmaktPrescriptionURL + ')'
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
            console.log("in getPhoto == this.listdigitalmaktObject.uploadedFileURL == " + this.listdigitalmaktObject.uploadedFileURL);
            var image = this.listdigitalmaktObject.uploadedFileURL;
            image = this.listdigitalmaktObject.uploadedFile; //alert(this.fromOldImageList)

            this.enlargedPic = image; //this.fromOldImageList = false
            //let  image = "data:image/jpg;base64,"+this.listdigitalmaktObject.uploadedFile

            /* if(photoType == 'prescription'){
               image  = this.listdigitalmaktObject.uploadedFileURL
               if(!image && this.listdigitalmaktObject.uploadedFile){
                 image = "data:image/jpg;base64,"+this.listdigitalmaktObject.uploadedFile
                           this.listdigitalmaktObject.uploadedFile = "data:image/jpg;base64,"+this.listdigitalmaktObject.uploadedFile
                         }
             }*/

            return 'url(' + image + ')';
          } catch (error) {
            console.log('Error', error);
          }
        }
      }, {
        key: "getPhotoOldPrescription",
        value: function getPhotoOldPrescription(obj) {
          try {
            var image = obj.uploadPhotoListdigitalmaktPrescriptionURL;
            image = obj.uploadPhotoListdigitalmaktPrescriptionURL;
            /*if(obj && obj.uploadPhotoListdigitalmaktPrescription){
              image = obj.uploadPhotoListdigitalmaktPrescription
            }
            */
            //  this.enlargedPic = image

            return 'url(' + image + ')';
          } catch (error) {// //console.log('Error', error);
          }
        }
      }, {
        key: "checkStatusChange",
        value: function checkStatusChange() {
          console.log("status **" + this.listdigitalmaktObject['status']);
        }
      }, {
        key: "checkDeliveryMode",
        value: function checkDeliveryMode() {
          console.log("deliverymode **" + this.listdigitalmaktObject.deliveryMode);
        }
      }, {
        key: "closeMainModal",
        value: function closeMainModal() {
          if (this.modalReferenceListdigitalmaktForm) this.modalReferenceListdigitalmaktForm.close();
          this.fromOldImageList = false;
        }
      }, {
        key: "onChangePage",
        value: function onChangePage(pageOfItems) {
          // update current page of items
          this.pageOfItems = pageOfItems;
          this.pageNo = 1;
        }
      }, {
        key: "onChangeCustomerSearch",
        value: function onChangeCustomerSearch(val) {
          var _this2 = this;

          //console.log(" inside onChangePatientSearch val "+val)
          // if(val && val.length >2 ){
          var data = {
            name: val
          };
          this.dataService.fetchAllCustomers(data).then(function (result) {
            _this2.customerList = result.map(function (element) {
              return element;
            });
          }, function (err) {//console.log(err);
          }); // }
        }
      }, {
        key: "viewPrescription",
        value: function viewPrescription(obj) {
          this.enlargedPic = obj.uploadedFileURL;
          this.modalReferenceImage = this.modal.open(this.enlargedImageModal);
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          console.log("****** this.event   ===== **" + event);
          this.pageNo = event;
          this.applyFilter();
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          this.fetchDigitalmargetings();
        }
      }, {
        key: "fetchDigitalmargetingsCount",
        value: function fetchDigitalmargetingsCount() {
          var _this3 = this;

          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize,
            filter: this.allDynaFilter
          }; // this.fetchDigitalmargetingsCount({filter : allDynaFilter})  
          //this.fetchDigitalmargetingsByFilters({filter : allDynaFilter})   

          console.log(" inside data " + JSON.stringify(data));
          this.dataService.fetchDigitalmargetingsCount(data).then(function (result) {
            console.log("****** fetchdigitalmargetingsCount result   ===== **" + JSON.stringify(result));
            _this3.totalDocRecords = result;
            _this3.loading = false;
            console.log("****** this.totalDocRecords ===== **" + _this3.totalDocRecords);
          }, function (err) {
            _this3.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "fetchDigitalmargetings",
        value: function fetchDigitalmargetings() {
          var _this4 = this;

          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize,
            filter: this.allDynaFilter
          };
          this.dataService.fetchDigitalmargetings(data).then(function (result) {
            _this4.normalFiltereduserListArr = []; //this.normalFiltereduserListArr = result.map(element => {        
            // return   element
            // })

            for (var i in result) {
              var digitalmargetingObj = result[i]; // if(!digitalmargetingObj['deliveryMode'] || digitalmargetingObj['deliveryMode'] == undefined ){
              //    digitalmargetingObj['deliveryMode'] = "General"
              //  }

              console.log("****** digitalmargetingObj   ===== **" + JSON.stringify(digitalmargetingObj));

              _this4.normalFiltereduserListArr.push(digitalmargetingObj);
            } //  console.log("****** this.fetchDigitalmargetingsByFilters   ===== **"+JSON.stringify(this.normalFiltereduserListArr))      


            _this4.loading = false;
          }, function (err) {
            _this4.normalFiltereduserListArr = [];
            _this4.loading = false;
            console.log(err);
          });
        }
      }]);

      return ListdigitalmaktComponent;
    }(src_BaseComponentDM__WEBPACK_IMPORTED_MODULE_3__["BaseComponentDM"]);

    ListdigitalmaktComponent.ɵfac = function ListdigitalmaktComponent_Factory(t) {
      return new (t || ListdigitalmaktComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_access__WEBPACK_IMPORTED_MODULE_7__["DataAccess"]));
    };

    ListdigitalmaktComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListdigitalmaktComponent,
      selectors: [["app-listdigitalmakt"]],
      viewQuery: function ListdigitalmaktComponent_Query(rf, ctx) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listdigitalmaktFormModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searFiltersModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.enlargedImageModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.enlargedPrescriptionModal = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 37,
      vars: 9,
      consts: [[3, "heading", "icon"], [1, "col-md-12"], [1, "card-body", "table-responsive", "marginLeft"], [1, "pb-3"], [1, "table", "table-blistdigitalmakted", "table-sm"], [4, "ngIf"], [1, "col-md-12", "text-left", "clearfix"], ["id", "forlistdigitalmakt1", "directionLinks", "true", "maxSize", "9", "directionLinks", "true", "autoHide", "true", "responsive", "true", "previousLabel", "Prev", "nextLabel", "Next", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", "screenReaderCurrentLabel", "You're on page", 1, "my-pagination", "marginLeft", 3, "pageChange", "pageBoundsCorrection"], ["enlargedImageModal", ""], ["enlargedPrescriptionModal", ""], [1, "my-container"], ["customLoadingTemplate", ""], [3, "show", "config", "template"], [3, "class", 4, "ngFor", "ngForOf"], [1, "table", "blistdigitalmaktless"], [1, "btn", "btn-dark", 3, "click"], [1, "customdiv"], ["colspan", "7", "align", "center"], [1, "modal-header", "py-1"], [1, "modal-title", "headerTitle", "mb-0"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "para", 3, "src"]],
      template: function ListdigitalmaktComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lead Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Customer Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Customer Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Customer Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Medicine Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Created Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Prescription");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ListdigitalmaktComponent_tbody_25_Template, 3, 8, "tbody", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "pagination-controls", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ListdigitalmaktComponent_Template_pagination_controls_pageChange_27_listener($event) {
            return ctx.pageChanged($event);
          })("pageBoundsCorrection", function ListdigitalmaktComponent_Template_pagination_controls_pageBoundsCorrection_27_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ListdigitalmaktComponent_tbody_28_Template, 4, 0, "tbody", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ListdigitalmaktComponent_ng_template_29_Template, 7, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ListdigitalmaktComponent_ng_template_31_Template, 7, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ListdigitalmaktComponent_ng_template_34_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "ngx-loading", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r903 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", "Digital Marketing Orders")("icon", "fa-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" List of existing ", ctx.userKind, "s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loading)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c9))("template", _r903);
        }
      },
      directives: [_shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"], ngx_loading__WEBPACK_IMPORTED_MODULE_11__["NgxLoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["LowerCasePipe"]],
      styles: ["span.bootstrap-switch-handle-off.bootstrap-switch-default[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.customwidth[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.qtycolwidth[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.profile-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.borderless[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .borderless[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n  width: 100%;\n}\n\n.para[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto !important;\n}\n\n.reducetextforicon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 5px;\n}\n\n.containerDM[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-right: 10px !important;\n  margin-left: 10px;\n  padding-right: 20px !important;\n  padding-left: 20px;\n}\n\n@media (min-width: 481px) {\n  .containerDM[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    padding-right: 20px !important;\n    padding-left: 20px;\n    margin-right: 300px !important;\n    margin-left: 300px;\n  }\n}\n\n@media (min-width: 961px) {\n  .containerDM[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    padding-right: 20px !important;\n    padding-left: 20px;\n    margin-right: 400px !important;\n    margin-left: 400px;\n  }\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  border-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.oldprescription-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.my-container[_ngcontent-%COMP%]   .custom-class[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  color: black;\n  top: 40%;\n  right: 50%;\n  border: 2px solid #1f94ed;\n  border-radius: 50%;\n}\n\n.oldprescription-image[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 70px;\n  border-radius: 10%;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.confirmed[_ngcontent-%COMP%] {\n  color: white;\n  background: #117b30;\n}\n\n.orderplaced[_ngcontent-%COMP%] {\n  color: white;\n  background: #7b6b11;\n}\n\n.packaged[_ngcontent-%COMP%] {\n  color: white;\n  background: #B2DFEE;\n}\n\n.shipped[_ngcontent-%COMP%] {\n  color: #d0f1d7;\n  background: #00688B;\n}\n\n.rejected[_ngcontent-%COMP%] {\n  color: #d0f1d7;\n  background: #F08080;\n}\n\n.labelTitlesDM[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18;\n  color: red;\n}\n\n.marginLeft[_ngcontent-%COMP%] {\n  margin-left: -25px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  border-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.prescriptionlistclass[_ngcontent-%COMP%] {\n  height: 290px !important;\n  width: auto;\n  overflow-y: scroll;\n}\n\n.clearfix[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n}\n\n.customradio[_ngcontent-%COMP%] {\n  font-size: 48px !important;\n}\n\n.redcolor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userInfo[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n\n.userInfo[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 95% !important;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .usermngtableinfo[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.no-resize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.m-20[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.no-focus[_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC9saXN0ZGlnaXRhbG1ha3QvbGlzdGRpZ2l0YWxtYWt0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvbGlzdGRpZ2l0YWxtYWt0L2xpc3RkaWdpdGFsbWFrdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNFLHNCQUFBO0FDRUY7O0FEQUE7RUFDRSxzQkFBQTtBQ0dGOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0FDS0o7O0FESEE7RUFDSSw4QkFBQTtFQUVBLFdBQUE7QUNLSjs7QURIRTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtBQ01KOztBREpBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDT0Y7O0FETEE7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNFLGtCQUFBO0FDUUo7O0FETkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsOEJBQUE7SUFDQSxrQkFBQTtJQUNBLDhCQUFBO0lBQ0Esa0JBQUE7RUNTRjtBQUNGOztBRExBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLDhCQUFBO0lBQ0Esa0JBQUE7SUFDQSw4QkFBQTtJQUNBLGtCQUFBO0VDT0Y7QUFDRjs7QUREQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDRUo7O0FEQUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDRU47O0FER0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNERjs7QURJQztFQUNHLFlBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDREo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNBSjs7QURFSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNBTjs7QURJRTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDREo7O0FER0U7RUFDRSxrQkFBQTtFQUVBLGVBQUE7QUNESjs7QURHRTtFQUNFLDBCQUFBO0FDQUo7O0FERUE7RUFFSSxVQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQ0FBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURDQTtFQUNJLHFCQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0FDTUo7O0FESkE7RUFDRSxnQkFBQTtBQ09GOztBRExBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FDUUY7O0FETkE7RUFDSSxZQUFBO0FDU0o7O0FEUEE7RUFDSSxZQUFBO0FDVUo7O0FEUkE7RUFDSSxhQUFBO0FDV0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGlzdGRpZ2l0YWxtYWt0L2xpc3RkaWdpdGFsbWFrdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4uYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmLmJvb3RzdHJhcC1zd2l0Y2gtZGVmYXVsdCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmN1c3RvbXdpZHRoe1xyXG4gIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxufVxyXG4ucXR5Y29sd2lkdGh7XHJcbiAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5wcm9maWxlLWltYWdlLXdyYXBwZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmJvcmRlcmxlc3MgdGQsIC5ib3JkZXJsZXNzIHRoIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZGl2aWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAvL21hcmdpbi10b3A6MXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5wYXJhe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDphdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlZHVjZXRleHRmb3JpY29ue1xyXG4gIGZvbnQtc2l6ZSA6MjBweDtcclxuICBtYXJnaW4tbGVmdDo1cHg7XHJcbn1cclxuLmNvbnRhaW5lckRNeyAgICBcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjEwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MjBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcbiAgLmNvbnRhaW5lckRNeyAgICBcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MjBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MzAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OjMwMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5NjFweCkge1xyXG4gIC5jb250YWluZXJETXsgICAgXHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDoyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDo0MDBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5wcm9maWxlLWltYWdlIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAgIC5lZGl0LWljb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDo3cHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1ib3R0b206MnB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuIFxyXG4gIC5vbGRwcmVzY3JpcHRpb24taW1hZ2Utd3JhcHBlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm15LWNvbnRhaW5lciAuY3VzdG9tLWNsYXNze1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIHRvcDogNDAlO1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzFmOTRlZDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLy96LWluZGV4OiA5OTk5OTtcclxufVxyXG4ub2xkcHJlc2NyaXB0aW9uLWltYWdlIHtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG59XHJcbiAuY29uZmlybWVkIHsgICBcclxuICAgIGNvbG9yOiB3aGl0ZTsgICBcclxuICAgIGJhY2tncm91bmQ6ICMxMTdiMzA7ICAgIFxyXG4gIH1cclxuXHJcbiAgLm9yZGVycGxhY2VkIHsgICBcclxuICAgIGNvbG9yOiB3aGl0ZTsgICBcclxuICAgIGJhY2tncm91bmQ6ICM3YjZiMTE7ICAgIFxyXG4gIH1cclxuXHJcbiAgLnBhY2thZ2VkIHsgICBcclxuICAgIGNvbG9yOndoaXRlOyAgIFxyXG4gICAgYmFja2dyb3VuZDogI0IyREZFRTsgICAgXHJcbiAgfVxyXG5cclxuICAuc2hpcHBlZCB7ICAgXHJcbiAgICBjb2xvcjogI2QwZjFkNzsgICBcclxuICAgIGJhY2tncm91bmQ6ICMwMDY4OEI7ICAgIFxyXG4gIH1cclxuXHJcbiAgLnJlamVjdGVkIHsgICBcclxuICAgIGNvbG9yOiAjZDBmMWQ3OyAgIFxyXG4gICAgYmFja2dyb3VuZDogI0YwODA4MDsgICAgXHJcbiAgfVxyXG5cclxuLmxhYmVsVGl0bGVzRE17XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTg7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn1cclxuLm1hcmdpbkxlZnR7XHJcbiAgICBtYXJnaW4tbGVmdDotMjVweFxyXG59XHJcbi5wcm9maWxlLWltYWdlIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAgIC5lZGl0LWljb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDo3cHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1ib3R0b206MnB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICAucHJlc2NyaXB0aW9ubGlzdGNsYXNze1xyXG4gICAgaGVpZ2h0OiAyOTBweCAhaW1wb3J0YW50OyAgICBcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuICAuY2xlYXJmaXgge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmN1c3RvbXJhZGlve1xyXG4gICAgZm9udC1zaXplOiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4ucmVkY29sb3J7XHJcbiAgICBcclxuICAgIGNvbG9yOnJlZDtcclxufVxyXG4ucG9pbnRlciB7XHJcbiAgICBjdXJzb3IgOiBwb2ludGVyO1xyXG59XHJcbi51c2VySW5mbyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnVzZXJJbmZvOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VybW5ndGFibGUgLnVzZXJtbmd0YWJsZWluZm97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi51c2VybW5ndGFibGUgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUgdGQgaW1nIHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59ICBcclxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMDtcclxufVxyXG5oMyB7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxufVxyXG5wcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4ubm8tcmVzaXplIHtcclxuICAgIHJlc2l6ZSA6IG5vbmU7XHJcbn1cclxuLm0tMjAge1xyXG4gICAgbWFyZ2luIDogMjBweDtcclxufVxyXG4ubm8tZm9jdXMge1xyXG4gICAgb3V0bGluZSA6IG5vbmU7XHJcbn0iLCJzcGFuLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZi5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jdXN0b213aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5xdHljb2x3aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlLWltYWdlLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5ib3JkZXJsZXNzIHRkLCAuYm9yZGVybGVzcyB0aCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFyYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnJlZHVjZXRleHRmb3JpY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY29udGFpbmVyRE0ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIHtcbiAgLmNvbnRhaW5lckRNIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk2MXB4KSB7XG4gIC5jb250YWluZXJETSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNDAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogNDAwcHg7XG4gIH1cbn1cbi5wcm9maWxlLWltYWdlIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDIyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5wcm9maWxlLWltYWdlIC5lZGl0LWljb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMCU7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDdweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vbGRwcmVzY3JpcHRpb24taW1hZ2Utd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm15LWNvbnRhaW5lciAuY3VzdG9tLWNsYXNzIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRvcDogNDAlO1xuICByaWdodDogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMWY5NGVkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5vbGRwcmVzY3JpcHRpb24taW1hZ2Uge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmNvbmZpcm1lZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzExN2IzMDtcbn1cblxuLm9yZGVycGxhY2VkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjN2I2YjExO1xufVxuXG4ucGFja2FnZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNCMkRGRUU7XG59XG5cbi5zaGlwcGVkIHtcbiAgY29sb3I6ICNkMGYxZDc7XG4gIGJhY2tncm91bmQ6ICMwMDY4OEI7XG59XG5cbi5yZWplY3RlZCB7XG4gIGNvbG9yOiAjZDBmMWQ3O1xuICBiYWNrZ3JvdW5kOiAjRjA4MDgwO1xufVxuXG4ubGFiZWxUaXRsZXNETSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4O1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWFyZ2luTGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMjIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnByb2ZpbGUtaW1hZ2UgLmVkaXQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cblxuLnByZXNjcmlwdGlvbmxpc3RjbGFzcyB7XG4gIGhlaWdodDogMjkwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmNsZWFyZml4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jdXN0b21yYWRpbyB7XG4gIGZvbnQtc2l6ZTogNDhweCAhaW1wb3J0YW50O1xufVxuXG4ucmVkY29sb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVzZXJJbmZvIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi51c2VySW5mbzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbn1cblxuLnVzZXJtbmd0YWJsZSAudXNlcm1uZ3RhYmxlaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi51c2VybW5ndGFibGUgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUgdGQgaW1nIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMS4yNXJlbSAwO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5uby1yZXNpemUge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5tLTIwIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4ubm8tZm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListdigitalmaktComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-listdigitalmakt',
          templateUrl: './listdigitalmakt.component.html',
          styleUrls: ['./listdigitalmakt.component.scss'],
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
        listdigitalmaktFormModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['listdigitalmaktFormModal']
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
  "./src/app/layout/listdigitalmakt/listdigitalmakt.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/layout/listdigitalmakt/listdigitalmakt.module.ts ***!
    \******************************************************************/

  /*! exports provided: ListdigitalmaktModule */

  /***/
  function srcAppLayoutListdigitalmaktListdigitalmaktModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListdigitalmaktModule", function () {
      return ListdigitalmaktModule;
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


    var _listdigitalmakt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./listdigitalmakt.component */
    "./src/app/layout/listdigitalmakt/listdigitalmakt.component.ts");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var _listdigitalmakt_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./listdigitalmakt-routing.module */
    "./src/app/layout/listdigitalmakt/listdigitalmakt-routing.module.ts");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js"); //import { LoadingModule } from 'ngx-loading';
    //import {NgxToggleModule} from "ngx-toggle";
    //import {DataTableModule, SharedModule, InputTextModule} from 'primeng/primeng';
    //import {PaginatorModule} from 'primeng/paginator';
    //import {DropdownModule} from 'primeng/dropdown';


    var ListdigitalmaktModule = function ListdigitalmaktModule() {
      _classCallCheck(this, ListdigitalmaktModule);
    };

    ListdigitalmaktModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListdigitalmaktModule
    });
    ListdigitalmaktModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListdigitalmaktModule_Factory(t) {
        return new (t || ListdigitalmaktModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _listdigitalmakt_routing_module__WEBPACK_IMPORTED_MODULE_12__["ListdigitalmaktRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
        animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBlistdigitalmaktRadius: '4px',
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
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListdigitalmaktModule, {
        declarations: [_listdigitalmakt_component__WEBPACK_IMPORTED_MODULE_10__["ListdigitalmaktComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _listdigitalmakt_routing_module__WEBPACK_IMPORTED_MODULE_12__["ListdigitalmaktRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListdigitalmaktModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _listdigitalmakt_routing_module__WEBPACK_IMPORTED_MODULE_12__["ListdigitalmaktRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
            animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBlistdigitalmaktRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
          }), ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(), //  DropdownModule,
          //PaginatorModule,
          angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
          })],
          declarations: [_listdigitalmakt_component__WEBPACK_IMPORTED_MODULE_10__["ListdigitalmaktComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=listdigitalmakt-listdigitalmakt-module-es5.js.map