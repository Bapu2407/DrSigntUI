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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usercreateaccessright-usercreateaccessright-module"], {
  /***/
  "./src/app/layout/usercreateaccessright/usercreateaccessright-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/layout/usercreateaccessright/usercreateaccessright-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: UserCreateAccessRoutingModule */

  /***/
  function srcAppLayoutUsercreateaccessrightUsercreateaccessrightRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserCreateAccessRoutingModule", function () {
      return UserCreateAccessRoutingModule;
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


    var _usercreateaccessright_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./usercreateaccessright.component */
    "./src/app/layout/usercreateaccessright/usercreateaccessright.component.ts");

    var routes = [{
      path: '',
      component: _usercreateaccessright_component__WEBPACK_IMPORTED_MODULE_2__["UsercreationAccessRightComponent"]
    }];

    var UserCreateAccessRoutingModule = function UserCreateAccessRoutingModule() {
      _classCallCheck(this, UserCreateAccessRoutingModule);
    };

    UserCreateAccessRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: UserCreateAccessRoutingModule
    });
    UserCreateAccessRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function UserCreateAccessRoutingModule_Factory(t) {
        return new (t || UserCreateAccessRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UserCreateAccessRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserCreateAccessRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/usercreateaccessright/usercreateaccessright.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/layout/usercreateaccessright/usercreateaccessright.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: UsercreationAccessRightComponent */

  /***/
  function srcAppLayoutUsercreateaccessrightUsercreateaccessrightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsercreationAccessRightComponent", function () {
      return UsercreationAccessRightComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../router.animations */
    "./src/app/router.animations.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_BaseComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/BaseComponent */
    "./src/BaseComponent.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_data_access__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/data-access */
    "./src/app/services/data-access.ts");
    /* harmony import */


    var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/modules/page-header/page-header.component */
    "./src/app/shared/modules/page-header/page-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-toggle-switch */
    "./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js");

    function UsercreationAccessRightComponent_div_4_div_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsercreationAccessRightComponent_div_4_div_16_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r99);

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r98.addUser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r96.textSave, " ");
      }
    }

    function UsercreationAccessRightComponent_div_4_p_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\xA0Fix The Error : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r97.form_fill_failure_msg, " ");
      }
    }

    function UsercreationAccessRightComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_4_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r101);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r100.userObject.userName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_4_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r101);

          var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r102.userObject.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_4_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r101);

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r103.userObject.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, UsercreationAccessRightComponent_div_4_div_16_Template, 4, 1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, UsercreationAccessRightComponent_div_4_p_17_Template, 6, 1, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 9, ctx_r90.mode), " User ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r90.userGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r90.userObject.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r90.userGroup.get("email").invalid && ctx_r90.userGroup.get("email").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r90.userObject.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r90.userObject.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r90.mode == "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r90.submitAttempt);
      }
    }

    function UsercreationAccessRightComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Module ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "select", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_select_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r104.module = $event;
        })("change", function UsercreationAccessRightComponent_div_5_Template_select_change_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r106.moduleNameChange();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Doctor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r107.role.doctor.user.create = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r108.role.doctor.user.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r109.role.doctor.user.edit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Doctor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r110.role.doctor.doctor.create = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_38_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r111.role.doctor.doctor.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r112.role.doctor.doctor.edit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Appointment ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_52_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r113.role.doctor.appointment.create = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " Create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_56_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r114.role.doctor.appointment.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_60_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r115.role.doctor.appointment.edit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_64_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r116.role.doctor.appointment.statuschange = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " Status Change ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Invoice ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_73_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r117.role.doctor.invoice.create = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " Create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_77_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r118.role.doctor.invoice.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_81_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r119.role.doctor.invoice.edit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Practice Location ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_90_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r120.role.doctor.location.create = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " Create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_94_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r121.role.doctor.location.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_98_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r122.role.doctor.location.edit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Customer ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_107_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r123.role.doctor.customer.create = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " Create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_111_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r124.role.doctor.customer.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_115_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r125.role.doctor.customer.edit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Order ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_124_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r126.role.doctor.order.create = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, " Create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_128_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r127.role.doctor.order.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_132_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r128.role.doctor.order.edit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Medicine ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_141_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r129.role.doctor.medicine.create = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, " Create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_145_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r130.role.doctor.medicine.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_149_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r131.role.doctor.medicine.edit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Medicine Category");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_158_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r132.role.doctor.category.create = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, " Create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_162_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r133.role.doctor.category.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_166_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r134.role.doctor.category.edit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Shipping ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_175_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r135.role.doctor.delivery.create = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, " Create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_179_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r136.role.doctor.delivery.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_183_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r137.role.doctor.delivery.edit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Service Charges ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_192_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r138.role.doctor.charges.create = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, " Create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_196_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r139.role.doctor.charges.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_200_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r140.role.doctor.charges.edit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "Discount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_209_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r141.role.doctor.discount.create = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, " Create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_213_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r142.role.doctor.discount.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_217_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r143.role.doctor.discount.edit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "Coupon ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_226_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r144.role.doctor.coupon.create = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, " Create ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_230_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r145.role.doctor.coupon.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_234_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r146.role.doctor.coupon.edit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "Invoice CRM ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_243_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r147.role.doctor.invoicecrm.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_247_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r148.role.doctor.invoicecrm.edit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "Digital Marketing ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_div_5_Template_input_ngModelChange_256_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r149.role.doctor.listdigitalmakt.view = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, " View ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsercreationAccessRightComponent_div_5_Template_button_click_261_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r150.modifyUser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](262, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsercreationAccessRightComponent_div_5_Template_button_click_265_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r105);

          var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r151.cancelEdit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](266, " Done ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.module);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.user.create);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.user.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.user.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.doctor.create);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.doctor.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.doctor.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.appointment.create);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.appointment.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.appointment.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.appointment.statuschange);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.invoice.create);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.invoice.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.invoice.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.location.create);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.location.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.location.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.customer.create);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.customer.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.customer.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.order.create);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.order.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.order.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.medicine.create);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.medicine.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.medicine.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.category.create);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.category.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.category.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.delivery.create);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.delivery.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.delivery.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.charges.create);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.charges.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.charges.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.discount.create);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.discount.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.discount.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.coupon.create);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.coupon.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.coupon.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.invoicecrm.view);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.invoicecrm.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r91.role.doctor.listdigitalmakt.view);
      }
    }

    function UsercreationAccessRightComponent_th_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Enable/Disable");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function UsercreationAccessRightComponent_th_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function UsercreationAccessRightComponent_tbody_23_tr_1_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Enabled");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function UsercreationAccessRightComponent_tbody_23_tr_1_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Disabled");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function UsercreationAccessRightComponent_tbody_23_tr_1_td_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ui-switch", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UsercreationAccessRightComponent_tbody_23_tr_1_td_10_Template_ui_switch_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r160);

          var acc_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          return acc_r153.active = $event;
        })("change", function UsercreationAccessRightComponent_tbody_23_tr_1_td_10_Template_ui_switch_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r160);

          var acc_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r161.updateUserStatus($event, acc_r153);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var acc_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", acc_r153.active);
      }
    }

    function UsercreationAccessRightComponent_tbody_23_tr_1_td_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function UsercreationAccessRightComponent_tbody_23_tr_1_td_13_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r166);

          var acc_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r164.openForeditUser(acc_r153);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function UsercreationAccessRightComponent_tbody_23_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, UsercreationAccessRightComponent_tbody_23_tr_1_span_8_Template, 2, 0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, UsercreationAccessRightComponent_tbody_23_tr_1_span_9_Template, 2, 0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, UsercreationAccessRightComponent_tbody_23_tr_1_td_10_Template, 2, 1, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, UsercreationAccessRightComponent_tbody_23_tr_1_td_13_Template, 3, 0, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var acc_r153 = ctx.$implicit;

        var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", acc_r153 == null ? null : acc_r153.userName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](acc_r153.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](acc_r153.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", acc_r153.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !acc_r153.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r152.user.role.doctor.user.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r152.convertToHumanDate(acc_r153.createdDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r152.user.role.doctor.user.edit);
      }
    }

    var _c0 = function _c0(a1, a2, a3) {
      return {
        id: "foruser",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    function UsercreationAccessRightComponent_tbody_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UsercreationAccessRightComponent_tbody_23_tr_1_Template, 14, 8, "tr", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, ctx_r94.normalFiltereduserListArr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](4, _c0, ctx_r94.pageSize, ctx_r94.pageNo, ctx_r94.totalUserRecords)));
      }
    }

    function UsercreationAccessRightComponent_tbody_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "No record available");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var UsercreationAccessRightComponent =
    /*#__PURE__*/
    function (_src_BaseComponent__W) {
      _inherits(UsercreationAccessRightComponent, _src_BaseComponent__W);

      var _super = _createSuper(UsercreationAccessRightComponent);

      function UsercreationAccessRightComponent(router, _fb, toastr, http, dataService) {
        var _this;

        _classCallCheck(this, UsercreationAccessRightComponent);

        _this = _super.call(this, router);
        _this.router = router;
        _this._fb = _fb;
        _this.toastr = toastr;
        _this.http = http;
        _this.dataService = dataService;
        _this.user1 = false;
        _this.normalFiltereduserListArr = [];
        _this.role = {
          doctor: {
            user: {
              create: true,
              view: true,
              edit: true
            },
            doctor: {
              create: true,
              view: true,
              edit: true
            },
            appointment: {
              create: false,
              view: false,
              edit: false,
              statuschange: false
            },
            invoice: {
              create: false,
              view: false,
              edit: false
            },
            location: {
              create: false,
              view: false,
              edit: false
            },
            customer: {
              create: false,
              view: false,
              edit: false
            },
            order: {
              create: false,
              view: false,
              edit: false
            },
            medicine: {
              create: false,
              view: false,
              edit: false
            },
            category: {
              create: false,
              view: false,
              edit: false
            },
            delivery: {
              create: false,
              view: false,
              edit: false
            },
            charges: {
              create: false,
              view: false,
              edit: false
            },
            discount: {
              create: false,
              view: false,
              edit: false
            },
            coupon: {
              create: false,
              view: false,
              edit: false
            },
            invoicecrm: {
              create: false,
              view: false,
              edit: false
            },
            listdigitalmakt: {
              view: false
            }
          }
        };
        _this.module = "doctor";
        _this.textSave = "Add User";
        _this.userObject = {
          // _id:'',
          userId: 'user1',
          userName: 'user1',
          email: 'user1@gmail.com',
          password: 'password',
          role: '',
          active: true
        };

        if (!_this.user.role.doctor.user.view) {
          return _possibleConstructorReturn(_this);
        }

        _this.userGroup = _fb.group({
          userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_this.userObject.userName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_this.userObject.password, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          role: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_this.role),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_this.userObject.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
        });

        _this.fetchUsers();

        return _this;
      }

      _createClass(UsercreationAccessRightComponent, [{
        key: "cancelEdit",
        value: function cancelEdit() {
          this.mode = "add";
          this.textSave = "Add User";
        }
      }, {
        key: "moduleNameChange",
        value: function moduleNameChange() {//this.pageNo = 1
          //this.applyFilter()
        }
      }, {
        key: "editUser",
        value: function editUser(user) {
          this.userObject = Object.assign({}, user);
          this.mode = "edit";
          this.textSave = "Save";
        }
      }, {
        key: "openForeditUser",
        value: function openForeditUser(user) {
          this.userObject = Object.assign({}, user);
          this.userObject.userId = user._id;
          this.mode = "edit";

          if (user.role && user.role.doctor) {
            // this.role = Object.assign({}, user.role      ); 
            if (user.role.doctor.user) {
              this.role.doctor.user.create = user.role.doctor.user.create;
              this.role.doctor.user.view = user.role.doctor.user.view;
              this.role.doctor.user.edit = user.role.doctor.user.edit;
            } else {
              this.role.doctor.user.create = false;
              this.role.doctor.user.view = false;
              this.role.doctor.user.edit = false;
            }

            if (user.role.doctor.doctor) {
              this.role.doctor.doctor.create = user.role.doctor.doctor.create;
              this.role.doctor.doctor.view = user.role.doctor.doctor.view;
              this.role.doctor.doctor.edit = user.role.doctor.doctor.edit;
            } else {
              this.role.doctor.doctor.create = false;
              this.role.doctor.doctor.view = false;
              this.role.doctor.doctor.edit = false;
            }

            if (user.role.doctor.invoice) {
              this.role.doctor.invoice.create = user.role.doctor.invoice.create;
              this.role.doctor.invoice.view = user.role.doctor.invoice.view;
              this.role.doctor.invoice.edit = user.role.doctor.invoice.edit;
            } else {
              this.role.doctor.invoice.create = false;
              this.role.doctor.invoice.view = false;
              this.role.doctor.invoice.edit = false;
            }

            if (user.role.doctor.location) {
              this.role.doctor.location.create = user.role.doctor.location.create;
              this.role.doctor.location.view = user.role.doctor.location.view;
              this.role.doctor.location.edit = user.role.doctor.location.edit;
            } else {
              this.role.doctor.location.create = false;
              this.role.doctor.location.view = false;
              this.role.doctor.location.edit = false;
            }

            if (user.role.doctor.appointment) {
              this.role.doctor.appointment.create = user.role.doctor.appointment.create;
              this.role.doctor.appointment.view = user.role.doctor.appointment.view;
              this.role.doctor.appointment.edit = user.role.doctor.appointment.edit;
              this.role.doctor.appointment.statuschange = user.role.doctor.appointment.statuschange;
            } else {
              this.role.doctor.appointment.create = false;
              this.role.doctor.appointment.view = false;
              this.role.doctor.appointment.edit = false;
            }

            if (user.role.doctor.customer) {
              this.role.doctor.customer.create = user.role.doctor.customer.create;
              this.role.doctor.customer.view = user.role.doctor.customer.view;
              this.role.doctor.customer.edit = user.role.doctor.customer.edit;
            } else {
              this.role.doctor.customer.create = false;
              this.role.doctor.customer.view = false;
              this.role.doctor.customer.edit = false;
            }

            if (user.role.doctor.order) {
              this.role.doctor.order.create = user.role.doctor.order.create;
              this.role.doctor.order.view = user.role.doctor.order.view;
              this.role.doctor.order.edit = user.role.doctor.order.edit;
            } else {
              this.role.doctor.order.create = false;
              this.role.doctor.order.view = false;
              this.role.doctor.order.edit = false;
            }

            if (user.role.doctor.medicine) {
              this.role.doctor.medicine.create = user.role.doctor.medicine.create;
              this.role.doctor.medicine.view = user.role.doctor.medicine.view;
              this.role.doctor.medicine.edit = user.role.doctor.medicine.edit;
            } else {
              this.role.doctor.medicine.create = false;
              this.role.doctor.medicine.view = false;
              this.role.doctor.medicine.edit = false;
            }

            if (user.role.doctor.category) {
              this.role.doctor.category.create = user.role.doctor.category.create;
              this.role.doctor.category.view = user.role.doctor.category.view;
              this.role.doctor.category.edit = user.role.doctor.category.edit;
            } else {
              this.role.doctor.category.create = false;
              this.role.doctor.category.view = false;
              this.role.doctor.category.edit = false;
            }

            if (user.role.doctor.delivery) {
              this.role.doctor.delivery.create = user.role.doctor.delivery.create;
              this.role.doctor.delivery.view = user.role.doctor.delivery.view;
              this.role.doctor.delivery.edit = user.role.doctor.delivery.edit;
            } else {
              this.role.doctor.delivery.create = false;
              this.role.doctor.delivery.view = false;
              this.role.doctor.delivery.edit = false;
            }

            if (user.role.doctor.charges) {
              this.role.doctor.charges.create = user.role.doctor.charges.create;
              this.role.doctor.charges.view = user.role.doctor.charges.view;
              this.role.doctor.charges.edit = user.role.doctor.charges.edit;
            } else {
              this.role.doctor.charges.create = false;
              this.role.doctor.charges.view = false;
              this.role.doctor.charges.edit = false;
            }

            if (user.role.doctor.discount) {
              this.role.doctor.discount.create = user.role.doctor.discount.create;
              this.role.doctor.discount.view = user.role.doctor.discount.view;
              this.role.doctor.discount.edit = user.role.doctor.discount.edit;
            } else {
              this.role.doctor.discount.create = false;
              this.role.doctor.discount.view = false;
              this.role.doctor.discount.edit = false;
            }

            if (user.role.doctor.coupon) {
              this.role.doctor.coupon.create = user.role.doctor.coupon.create;
              this.role.doctor.coupon.view = user.role.doctor.coupon.view;
              this.role.doctor.coupon.edit = user.role.doctor.coupon.edit;
            } else {
              this.role.doctor.coupon.create = false;
              this.role.doctor.coupon.view = false;
              this.role.doctor.coupon.edit = false;
            }

            if (user.role.doctor.invoicecrm) {
              this.role.doctor.invoicecrm.create = user.role.doctor.invoicecrm.create;
              this.role.doctor.invoicecrm.view = user.role.doctor.invoicecrm.view;
              this.role.doctor.invoicecrm.edit = user.role.doctor.invoicecrm.edit;
            } else {
              this.role.doctor.invoicecrm.create = false;
              this.role.doctor.invoicecrm.view = false;
              this.role.doctor.invoicecrm.edit = false;
            }

            if (user.role.doctor.listdigitalmakt) {
              this.role.doctor.listdigitalmakt.view = user.role.doctor.listdigitalmakt.view;
            } else {
              this.role.doctor.listdigitalmakt.view = false;
            }
          }

          this.textSave = "Save";
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
          this.fetchUsers();
        }
      }, {
        key: "fetchUsers",
        value: function fetchUsers() {
          var _this2 = this;

          //  this.pageNo = 1
          //this.pageSize = 10
          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize
          };
          this.dataService.fetchUsers(data).then(function (result) {
            _this2.normalFiltereduserListArr = [];
            _this2.normalFiltereduserListArr = result.map(function (element) {
              return element;
            }); // console.log("****** this.normalFiltereduserListArr   ===== **"+JSON.stringify(this.normalFiltereduserListArr))
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!localStorage.getItem('isLoggedin')) {
            this.router.navigate(["/login"]);
          }

          this.fetchUsersCount();
        }
      }, {
        key: "fetchUsersCount",
        value: function fetchUsersCount() {
          var _this3 = this;

          //  this.pageNo = 1
          //  this.pageSize = 10
          this.dataService.fetchUsersCount().then(function (result) {
            //    console.log("****** fetchDoctorsCount result   ===== **"+JSON.stringify(result))
            _this3.totalUserRecords = result; //    console.log("****** this.totalUserRecords ===== **"+this.totalUserRecords)
            //this.loading = false;
          }, function (err) {
            //this.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "convertToHumanDate",
        value: function convertToHumanDate(dbDate) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(dbDate).format('DD-MMM-YYYY');
        }
      }, {
        key: "addUser",
        value: function addUser() {
          var _this4 = this;

          var email = this.userGroup.controls.email.value;

          for (var i in this.normalFiltereduserListArr) {
            if (email == this.normalFiltereduserListArr[i].email) {
              this.submitAttempt = true;
              this.form_fill_failure_msg = "This email id already used by another user";
              return;
            }
          }

          if (!this.userGroup.valid) {
            this.submitAttempt = true;
            this.validateFields(this.userGroup.controls);
            return;
          }

          this.userObject = {
            //  _id:'',
            userId: '',
            userName: this.userGroup.controls.userName.value,
            email: this.userGroup.controls.email.value,
            password: this.userGroup.controls.password.value,
            role: this.userGroup.controls.role.value,
            active: true
          };
          console.log("this.userObject == " + JSON.stringify(this.userObject));
          this.dataService.addUser(this.userObject).then(function (result) {
            console.log("result after adduser == " + JSON.stringify(result));

            _this4.fetchUsers();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "modifyUser",
        value: function modifyUser() {
          //userInfo.role = this.role
          //this.userObject.role = this.role
          this.userObject.role = Object.assign({}, this.role);
          this.updateUser(this.userObject); //console.log(" this.user._id  "+this.user._id)  

          console.log(" this.userObject  " + JSON.stringify(this.userObject.role));

          if (this.user._id == this.userObject['_id']) {
            //console.log(" this.userObject  "+JSON.stringify(this.userObject))  
            //  console.log(" user  "+JSON.stringify(this.user))  
            localStorage.setItem('user', JSON.stringify(this.userObject));
          }
        }
      }, {
        key: "updateUserStatus",
        value: function updateUserStatus(event, userInfo) {
          console.log(" userInfo  " + JSON.stringify(userInfo));
          var data = {};
          data['userId'] = userInfo._id;
          data['active'] = !userInfo.active;
          this.updateUser(data);
        }
      }, {
        key: "updateUser",
        value: function updateUser(data) {
          var _this5 = this;

          // console.log("******  data   ===== **"+JSON.stringify(data) )          
          this.dataService.editUser(data).then(function (result) {
            _this5.toastr.successToastr('User status updated successfully', 'Success', {
              toastTimeout: 3000
            });

            _this5.fetchUsers();

            var stringUser = localStorage.getItem('user');
            var user = JSON.parse(stringUser);
            var data = {
              emailPhone: user['email'],
              password: user['password']
            };
            console.log("****** loginUser data   ===== **" + JSON.stringify(data));

            _this5.dataService.loginUser(data).then(function (result) {
              localStorage.setItem('isLoggedin', 'true');
              localStorage.setItem('user', JSON.stringify(result));
            }, function (err) {
              console.log(err);
            });
          }, function (err) {
            console.log(err);
          });
        } // Removing the promocode

      }, {
        key: "removeCode",
        value: function removeCode(code, isEnable) {
          this.toastr.successToastr('Promo code status updated successfully');
        }
      }, {
        key: "restrictMinus",
        value: function restrictMinus(e) {
          var inputKeyCode = e.keyCode ? e.keyCode : e.which;

          if (inputKeyCode != null) {
            if (inputKeyCode == 45) e.preventDefault();
          }
        }
      }]);

      return UsercreationAccessRightComponent;
    }(src_BaseComponent__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]);

    UsercreationAccessRightComponent.??fac = function UsercreationAccessRightComponent_Factory(t) {
      return new (t || UsercreationAccessRightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_data_access__WEBPACK_IMPORTED_MODULE_9__["DataAccess"]));
    };

    UsercreationAccessRightComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: UsercreationAccessRightComponent,
      selectors: [["app-usercreateaccessright"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]],
      decls: 26,
      vars: 9,
      consts: [[3, "heading", "icon"], [1, "row"], [1, "col-md-12"], ["class", "card mb-3", 4, "ngIf"], ["class", "card p-3", 4, "ngIf"], [1, "card-body", "table-responsive", "m-1"], [1, "table", "table-striped", "table-bordered", "table-sm"], [4, "ngIf"], ["id", "foruser", "directionLinks", "true", "responsive", "true", "previousLabel", "Previous", "nextLabel", "Next", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", "screenReaderCurrentLabel", "You're on page", 1, "my-pagination", "mt-3", 3, "pageChange", "pageBoundsCorrection"], [1, "card", "mb-3"], [1, "card-header"], [1, "card-body", "table-responsive"], [1, "custom_timebox", "p-0", 3, "formGroup"], [1, "col-md-3"], [1, "from-group"], ["type", "text", "formControlName", "userName", "name", "username", "placeholder", "Enter User Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "formControlName", "email", "name", "email", "placeholder", "Enter Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "formControlName", "password", "name", "password", "placeholder", "Enter password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col-md-3", 4, "ngIf"], ["class", "cutomeerrortext", 4, "ngIf"], [1, "btn", "btn-dark", 3, "click"], [1, "cutomeerrortext"], [1, "redcolor", "ml-2"], [1, "fa", "fas", "fa-exclamation"], [1, "card", "p-3"], [1, "col-md-2"], ["name", "userKind", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["selected", "", "value", "doctor"], [1, "card", "col-md-2", "ml-3"], [1, "form-group"], [1, "checkbox"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "card", "col-md-2"], ["m-5", ""], [1, "col-md-6", "mt-3"], [4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange", "change"], ["colspan", "7", "align", "center"]],
      template: function UsercreationAccessRightComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-page-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, UsercreationAccessRightComponent_div_4_Template, 18, 11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, UsercreationAccessRightComponent_div_5_Template, 267, 44, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "UserName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, UsercreationAccessRightComponent_th_18_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Created Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, UsercreationAccessRightComponent_th_21_Template, 2, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, UsercreationAccessRightComponent_tbody_23_Template, 3, 8, "tbody", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "pagination-controls", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function UsercreationAccessRightComponent_Template_pagination_controls_pageChange_24_listener($event) {
            return ctx.pageChanged($event);
          })("pageBoundsCorrection", function UsercreationAccessRightComponent_Template_pagination_controls_pageBoundsCorrection_24_listener($event) {
            return ctx.pageChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, UsercreationAccessRightComponent_tbody_25_Template, 4, 0, "tbody", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@routerTransition", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("heading", "User Add & Access Rights")("icon", "fa-qrcode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user.role.doctor.user.edit || ctx.user.role.doctor.user.create);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.mode == "edit" && ctx.user.role.doctor.user.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user.role.doctor.user.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.user.role.doctor.user.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length == 0);
        }
      },
      directives: [_shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_13__["UiSwitchComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["TitleCasePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginatePipe"]],
      styles: ["input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=date][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=date][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: red;\n}\n\n.redcolor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.my-pagination[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC91c2VyY3JlYXRlYWNjZXNzcmlnaHQvdXNlcmNyZWF0ZWFjY2Vzc3JpZ2h0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvdXNlcmNyZWF0ZWFjY2Vzc3JpZ2h0L3VzZXJjcmVhdGVhY2Nlc3NyaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFLHdCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQUE7RUFFRSxVQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3VzZXJjcmVhdGVhY2Nlc3NyaWdodC91c2VyY3JlYXRlYWNjZXNzcmlnaHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24geyBcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxyXG4gIG1hcmdpbjogMDsgXHJcbn1cclxuZm9ybSBsYWJlbHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuLnJlZGNvbG9ye1xyXG4gICAgXHJcbiAgY29sb3I6cmVkO1xyXG59XHJcbi5teS1wYWdpbmF0aW9ue1xyXG4gIG1hcmdpbi10b3A6MTBweDtcclxufSIsImlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmZvcm0gbGFiZWwge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ucmVkY29sb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4ubXktcGFnaW5hdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"],
      data: {
        animation: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsercreationAccessRightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-usercreateaccessright',
          templateUrl: './usercreateaccessright.component.html',
          styleUrls: ['./usercreateaccessright.component.scss'],
          animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
          providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
        }, {
          type: src_app_services_data_access__WEBPACK_IMPORTED_MODULE_9__["DataAccess"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/usercreateaccessright/usercreateaccessright.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/layout/usercreateaccessright/usercreateaccessright.module.ts ***!
    \******************************************************************************/

  /*! exports provided: UsercreationAccessModule */

  /***/
  function srcAppLayoutUsercreateaccessrightUsercreateaccessrightModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsercreationAccessModule", function () {
      return UsercreationAccessModule;
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


    var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toggle-switch */
    "./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _usercreateaccessright_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./usercreateaccessright.component */
    "./src/app/layout/usercreateaccessright/usercreateaccessright.component.ts");
    /* harmony import */


    var _usercreateaccessright_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./usercreateaccessright-routing.module */
    "./src/app/layout/usercreateaccessright/usercreateaccessright-routing.module.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    var UsercreationAccessModule = function UsercreationAccessModule() {
      _classCallCheck(this, UsercreationAccessModule);
    };

    UsercreationAccessModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: UsercreationAccessModule
    });
    UsercreationAccessModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function UsercreationAccessModule_Factory(t) {
        return new (t || UsercreationAccessModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], _usercreateaccessright_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserCreateAccessRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](UsercreationAccessModule, {
        declarations: [_usercreateaccessright_component__WEBPACK_IMPORTED_MODULE_5__["UsercreationAccessRightComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], _usercreateaccessright_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserCreateAccessRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsercreationAccessModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["UiSwitchModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], _usercreateaccessright_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserCreateAccessRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          declarations: [_usercreateaccessright_component__WEBPACK_IMPORTED_MODULE_5__["UsercreationAccessRightComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=usercreateaccessright-usercreateaccessright-module-es5.js.map