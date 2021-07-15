function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"], {
  /***/
  "./src/app/layout/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var src_BaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/BaseComponent */
    "./src/BaseComponent.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var _c0 = function _c0() {
      return ["/login"];
    };

    var HeaderComponent =
    /*#__PURE__*/
    function (_src_BaseComponent__W) {
      _inherits(HeaderComponent, _src_BaseComponent__W);

      var _super = _createSuper(HeaderComponent);

      function HeaderComponent(translate, router) {
        var _this;

        _classCallCheck(this, HeaderComponent);

        _this = _super.call(this, router);
        _this.translate = translate;
        _this.router = router;
        _this.pushRightClass = 'push-right';
        _this.basePath = '/accounts';

        _this.translate.setDefaultLang('en');

        var browserLang = _this.translate.getBrowserLang();

        _this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        _this.router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && window.innerWidth <= 992 && _this.isToggled()) {
            _this.toggleSidebar();
          }
        });

        return _this;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isToggled",
        value: function isToggled() {
          var dom = document.querySelector('body');
          return dom.classList.contains(this.pushRightClass);
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          var dom = document.querySelector('body');
          dom.classList.toggle(this.pushRightClass);
        }
      }, {
        key: "rltAndLtr",
        value: function rltAndLtr() {
          var dom = document.querySelector('body');
          dom.classList.toggle('rtl');
        }
      }, {
        key: "onLoggedout",
        value: function onLoggedout() {
          try {
            this.router.navigate(["/login"]);
            localStorage.removeItem('isLoggedin');
          } catch (error) {
            console.log('Error', error);
          }
        }
      }, {
        key: "changeLang",
        value: function changeLang(language) {
          this.translate.use(language);
        }
      }]);

      return HeaderComponent;
    }(src_BaseComponent__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 16,
      vars: 3,
      consts: [[1, "navbar", "navbar-expand-lg", "fixed-top"], ["href", "#", 1, "navbar-brand"], ["type", "button", 1, "navbar-toggler", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bars", "text-muted"], [1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], ["ngbDropdown", "", 1, "nav-item", "dropdown"], ["href", "javascript:void(0)", "ngbDropdownToggle", "", 1, "nav-link"], [1, "fa", "fa-user"], [1, "caret"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right"], [1, "dropdown-item", 3, "routerLink", "click"], [1, "fa", "fa-fw", "fa-power-off"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin Portal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() {
            return ctx.toggleSidebar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "b", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_13_listener() {
            return ctx.onLoggedout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Log Out ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.userName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  background-color: #014020;\n}\n[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #fff;\n}\n[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #999;\n}\n[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%] {\n  width: 300px;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n  padding: 5px 10px;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0;\n}\n.navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu-right[_ngcontent-%COMP%] {\n  margin-left: -50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0NBQUE7QUFJSTtFQUNJLHlCQUppQjtBQ0V6QjtBREdRO0VBQ0ksV0FBQTtBQ0RaO0FER1E7RUFDSSxXQUFBO0FDRFo7QURFWTtFQUNJLFdBQUE7QUNBaEI7QURJSTtFQUNJLFlBQUE7QUNGUjtBREdRO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtBQ0RaO0FERVk7RUFDSSxtQkFBQTtBQ0FoQjtBRElZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDRmhCO0FESVk7RUFDSSxTQUFBO0FDRmhCO0FESVk7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQ0ZoQjtBRFNBO0VBQ0ksNkJBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzIyMjsqL1xyXG4kdG9wbmF2LWJhY2tncm91bmQtY29sb3I6IzAxNDAyMDtcclxuXHJcbjpob3N0IHtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtaXRlbSA+IGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZXNzYWdlcyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIC5tZWRpYSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lZGlhLWJvZHkge1xyXG4gICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhc3Qge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDdXN0b20gQ1NTXHJcbi5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51LXJpZ2h0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNTBweCAhaW1wb3J0YW50O1xyXG59IiwiLyokdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICMyMjI7Ki9cbjpob3N0IC5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE0MDIwO1xufVxuOmhvc3QgLm5hdmJhciAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6ICNmZmY7XG59XG46aG9zdCAubmF2YmFyIC5uYXYtaXRlbSA+IGEge1xuICBjb2xvcjogIzk5OTtcbn1cbjpob3N0IC5uYXZiYXIgLm5hdi1pdGVtID4gYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgLm1lc3NhZ2VzIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuOmhvc3QgLm1lc3NhZ2VzIC5tZWRpYSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbjpob3N0IC5tZXNzYWdlcyAubWVkaWE6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG46aG9zdCAubWVzc2FnZXMgLm1lZGlhLWJvZHkgaDUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCAubWVzc2FnZXMgLm1lZGlhLWJvZHkgLnNtYWxsIHtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLm1lc3NhZ2VzIC5tZWRpYS1ib2R5IC5sYXN0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51LXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IC01MHB4ICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/components/sidebar/sidebar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
    \****************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppLayoutComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
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


    var src_BaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/BaseComponent */
    "./src/BaseComponent.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/data-access */
    "./src/app/services/data-access.ts");
    /* harmony import */


    var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SidebarComponent_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " >> ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " << ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["router-link-active"];
    };

    function SidebarComponent_a_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0Doctor Management ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function SidebarComponent_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0User Management ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function SidebarComponent_a_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0Appointments ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function SidebarComponent_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0Practice Location ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function SidebarComponent_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0Invoice ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function SidebarComponent_a_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0Digital Marketing ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function SidebarComponent_li_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 Customers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function SidebarComponent_li_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 Orders");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function SidebarComponent_li_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 Medicine Categories");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function SidebarComponent_li_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 Medicine master");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function SidebarComponent_li_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 Shipping ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function SidebarComponent_li_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 Service Charges ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function SidebarComponent_li_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 Discount ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function SidebarComponent_li_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 Coupon ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function SidebarComponent_li_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0 Invoice CRM ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "customClass": a0
      };
    };

    var SidebarComponent =
    /*#__PURE__*/
    function (_src_BaseComponent__W2) {
      _inherits(SidebarComponent, _src_BaseComponent__W2);

      var _super2 = _createSuper(SidebarComponent);

      function SidebarComponent(translate, router, ngZone, dataService, parent) {
        var _this2;

        _classCallCheck(this, SidebarComponent);

        _this2 = _super2.call(this, router);
        _this2.translate = translate;
        _this2.router = router;
        _this2.ngZone = ngZone;
        _this2.dataService = dataService;
        _this2.parent = parent;
        _this2.isActive = false;
        _this2.showMenu = '';
        _this2.showSideBar = false;
        _this2.modified = {};
        _this2.pushRightClass = 'push-right';
        _this2.userData = [];

        _this2.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);

        _this2.translate.setDefaultLang('en');

        var browserLang = _this2.translate.getBrowserLang();

        _this2.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        /*
                this.router.events.subscribe(val => {
                    
                    this.expandSideBar()
                });
          */


        _this2.router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && window.innerWidth >= 992 // &&        this.isMenubeingShown()
          ) {
              console.log("the menu being sh own from LayoutComponent constructor");

              _this2.toggleSidebar();
            }

          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && window.innerWidth <= 992) {
            _this2.dontShowLeftRightArrowInSidebar();
          } else {
            _this2.showLeftRightArrowInSidebar();
          }
        });

        return _this2;
      }

      _createClass(SidebarComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var stringUser = localStorage.getItem('user');
          var user = JSON.parse(stringUser);
          var data = {
            emailPhone: user['email'],
            password: user['password']
          };
          console.log("****** loginUser data   ===== **" + JSON.stringify(data));
          this.dataService.loginUser(data).then(function (result) {
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('user', JSON.stringify(result));
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "expandSideBar",
        value: function expandSideBar() {
          var stringUser = localStorage.getItem('user');
          this.user = JSON.parse(stringUser);
          this.showSideBar = !this.showSideBar;

          if (this.showSideBar) {
            this.parent.activated[this.constructor.name] = true;
          }

          if (!this.showSideBar) {
            this.parent.activated[this.constructor.name] = false;
          }
        }
      }, {
        key: "eventCalled",
        value: function eventCalled() {
          this.isActive = !this.isActive;
        }
      }, {
        key: "dontShowLeftRightArrowInSidebar",
        value: function dontShowLeftRightArrowInSidebar() {
          var dom1 = document.querySelector('.leftrightarrowbutton');
          dom1.classList.add('leftrightarrowbutton_noshow');
        }
      }, {
        key: "showLeftRightArrowInSidebar",
        value: function showLeftRightArrowInSidebar() {
          var dom1 = document.querySelector('.leftrightarrowbutton');
          dom1.classList.remove('leftrightarrowbutton_noshow');
        }
        /*
        ngDoCheck(){
        
        if(this.modified['LayoutComponent'] == true){
            // alert("sidbar child component changed")
             this.showSideBar = true
             //this.activated['SidebarComponent'] = false
         }else{
            this.showSideBar = false
         }
        
        }
        */

      }, {
        key: "addExpandClass",
        value: function addExpandClass(element) {
          if (element === this.showMenu) {
            this.showMenu = '0';
          } else {
            this.showMenu = element;
          }
        }
      }, {
        key: "isToggled",
        value: function isToggled() {
          var dom = document.querySelector('body');
          return dom.classList.contains(this.pushRightClass);
        }
        /*
            toggleSidebar() {
                const dom: any = document.querySelector('body');
                dom.classList.toggle(this.pushRightClass);
            }
        */

      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          //this.showSideBar =  !this.showSideBar 
          this.expandSideBar();
          var dom = document.querySelector('.list-group'); //dom.classList.toggle(this.menuDivClass);

          console.log("FIRST CLASS NAME " + dom.classList[0]);
          dom.classList.add('customClass');
          console.log("CLASS  AFTER ADDING  " + dom.classList[1]);
          var dom1 = document.querySelector('.main-container'); //dom.classList.toggle(this.menuDivClass);

          dom1.classList.add('customClassMainContainer');
          dom1.classList.remove('customClassHugeMarginMainContainer');
        }
      }, {
        key: "rltAndLtr",
        value: function rltAndLtr() {
          var dom = document.querySelector('body');
          dom.classList.toggle('rtl');
        }
      }, {
        key: "changeLang",
        value: function changeLang(language) {
          this.translate.use(language);
        }
      }, {
        key: "onLoggedout",
        value: function onLoggedout() {
          //  localStorage.removeItem('isLoggedin');
          try {
            this.router.navigate(["/login"]);
            localStorage.removeItem('isLoggedin');
          } catch (error) {
            console.log('Error', error);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }(src_BaseComponent__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_access__WEBPACK_IMPORTED_MODULE_4__["DataAccess"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], 1));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 34,
      vars: 28,
      consts: [[1, "sidebar"], ["type", "button", 1, "leftrightarrowbutton", "btn", "btn-dark", 3, "click"], [4, "ngIf"], [1, "list-group", 3, "ngClass"], ["routerLink", "/dashboard", 1, "list-group-item", 3, "routerLinkActive"], [1, "fa", "fa-fw", "fa-dashboard"], ["routerLink", "/activate-deactivate", "class", "list-group-item", 3, "routerLinkActive", 4, "ngIf"], ["routerLink", "/user-create", "class", "list-group-item", 3, "routerLinkActive", 4, "ngIf"], ["routerLink", "/appointment", "class", "list-group-item", 3, "routerLinkActive", 4, "ngIf"], ["routerLink", "/location", "class", "list-group-item", 3, "routerLinkActive", 4, "ngIf"], ["routerLink", "/invoice", "class", "list-group-item", 3, "routerLinkActive", 4, "ngIf"], ["routerLink", "/listdigitalmakt", "class", "list-group-item", 3, "routerLinkActive", 4, "ngIf"], [1, "nested-menu"], [1, "list-group-item", 3, "routerLinkActive", "click"], [1, "fa", "fa-product-hunt"], [1, "caret"], [1, "nested"], [1, "submenu"], [1, "fa", "fa-fw", "fa-power-off"], ["routerLink", "/activate-deactivate", 1, "list-group-item", 3, "routerLinkActive"], [1, "fa", "fa-fw", "fa-user"], ["routerLink", "/user-create", 1, "list-group-item", 3, "routerLinkActive"], ["routerLink", "/appointment", 1, "list-group-item", 3, "routerLinkActive"], [1, "fa", "fa-fw", "fa-file-text-o"], ["routerLink", "/location", 1, "list-group-item", 3, "routerLinkActive"], [1, "fa", "fa-fw", "fa-map-marker"], ["routerLink", "/invoice", 1, "list-group-item", 3, "routerLinkActive"], [1, "fa", "fa-fw", "fa-files-o"], ["routerLink", "/listdigitalmakt", 1, "list-group-item", 3, "routerLinkActive"], [1, "fa", "fa-fw", "fa-marketing"], ["routerLink", "/customer", 3, "routerLinkActive"], [1, "fa", "fa-clock-o"], ["routerLink", "/order", 3, "routerLinkActive"], [1, "fa", "fa-road"], ["routerLink", "/category", 3, "routerLinkActive"], [1, "fa", "fa-plus-square"], ["routerLink", "/medicine", 3, "routerLinkActive"], [1, "fa", "fa-medkit"], ["routerLink", "/delivery", 3, "routerLinkActive"], [1, "fa", "fa-truck"], ["routerLink", "/charges", 3, "routerLinkActive"], [1, "fa", "fa-money"], ["routerLink", "/discount", 3, "routerLinkActive"], ["routerLink", "/coupon", 3, "routerLinkActive"], [1, "fa", "fa-gift"], ["routerLink", "/invoicecrm", 3, "routerLinkActive"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_1_listener() {
            return ctx.expandSideBar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_span_2_Template, 2, 0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_span_3_Template, 2, 0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xA0Dashboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SidebarComponent_a_8_Template, 3, 2, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SidebarComponent_a_9_Template, 3, 2, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SidebarComponent_a_10_Template, 3, 2, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SidebarComponent_a_11_Template, 3, 2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SidebarComponent_a_12_Template, 3, 2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SidebarComponent_a_13_Template, 3, 2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_15_listener() {
            return ctx.addExpandClass("yes");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\xA0 CRM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "b", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SidebarComponent_li_22_Template, 5, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SidebarComponent_li_23_Template, 5, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SidebarComponent_li_24_Template, 5, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SidebarComponent_li_25_Template, 5, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SidebarComponent_li_26_Template, 5, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SidebarComponent_li_27_Template, 5, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SidebarComponent_li_28_Template, 5, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SidebarComponent_li_29_Template, 5, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SidebarComponent_li_30_Template, 5, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_31_listener() {
            return ctx.onLoggedout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Log Out ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSideBar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSideBar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.showSideBar));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.doctor.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.user.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.appointment.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.location.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.invoice.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.listdigitalmakt.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expand", ctx.showMenu === "yes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.customer && ctx.user.role.doctor.customer.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.order && ctx.user.role.doctor.order.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.category && ctx.user.role.doctor.category.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.medicine && ctx.user.role.doctor.medicine.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.delivery && ctx.user.role.doctor.delivery.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.charges && ctx.user.role.doctor.charges.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.discount && ctx.user.role.doctor.discount.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.coupon && ctx.user.role.doctor.coupon.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.invoicecrm && ctx.user.role.doctor.invoicecrm.view);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".customClass[_ngcontent-%COMP%] {\n  width: 10px !important;\n  visibility: hidden !important;\n}\n\n.leftrightarrowbutton[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #014020;\n  font-size: 16px;\n  visibility: visible;\n}\n\n.leftrightarrowbutton_noshow[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #014020;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  transition: all 0.2s ease-in-out;\n}\n\n.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%] {\n  background: #014020;\n  border: 0;\n  border-radius: 0;\n  color: #999;\n  text-decoration: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #012713 !important;\n  color: white !important;\n  text-decoration: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%] {\n  background: white !important;\n  color: #012713 !important;\n}\n\n.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]    > .list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:focus {\n  border-radius: none;\n  border: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  height: 50px;\n  margin-bottom: 0;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #999;\n  text-decoration: none;\n  font-weight: 400;\n  background: #014020;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.5rem;\n  padding-top: 1rem;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #fff;\n  outline: none;\n  outline-offset: -2px;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover {\n  background: #012713;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  border-radius: 0;\n  background-color: #014020;\n  border: 0 solid transparent;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #999;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover {\n  background: #012713;\n}\n\n.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%] {\n  display: none;\n  height: 0;\n}\n\n.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%] {\n  display: block;\n  list-style-type: none;\n  height: auto;\n}\n\n.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 10px;\n  display: block;\n}\n\n@media screen and (max-width: 992px) {\n  .sidebar[_ngcontent-%COMP%] {\n    top: 54px;\n    left: 0px;\n  }\n}\n\n@media print {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .header-fields[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0JBQUE7RUFDQSw2QkFBQTtBQ0RKOztBREdBO0VBQ0ksdUJBQUE7RUFDQSxjQVBxQjtFQVFyQixlQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBekJxQjtFQTBCckIsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFLQSxnQ0FBQTtBQ0NKOztBREVRO0VBQ0ksbUJBckNhO0VBc0NiLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0FaOztBRENZO0VBQ0ksa0JBQUE7QUNDaEI7O0FERVE7RUFDSSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNBWjs7QURFUTtFQUNJLDRCQUFBO0VBQ0EseUJBQUE7QUNBWjs7QURFUTtFQUNJLGlCQUFBO0FDQVo7O0FERVk7RUFDSSw4Q0FBQTtBQ0FoQjs7QURLUTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0haOztBREtRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0haOztBRElZO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkE1RVM7QUMwRXpCOztBREdnQjtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNEcEI7O0FESVk7O0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ0ZoQjs7QURLUTtFQUNJLG1CQUFBO0FDSFo7O0FES1E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNIWjs7QURLZ0I7RUFDSSxnQkFBQTtFQUNBLHlCQXBHSztFQXFHTCwyQkFBQTtBQ0hwQjs7QURJb0I7RUFDSSxXQUFBO0FDRnhCOztBRElvQjtFQUNJLFdBQUE7QUNGeEI7O0FES2dCO0VBQ0ksbUJBQUE7QUNIcEI7O0FEVUk7RUFDSSxlQUFBO0FDUFI7O0FEU0k7RUFDSSxxQkFBQTtBQ1BSOztBRFNJO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUNQUjs7QURVUTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNSWjs7QURVZ0I7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNScEI7O0FEY0E7RUFDSTtJQUNJLFNBQUE7SUFDQSxTQUFBO0VDWE47QUFDRjs7QURhQTtFQUNJO0lBQ0ksd0JBQUE7RUNYTjtBQUNGOztBRGFBO0VBQ0k7SUFDSSxhQUFBO0VDWE47QUFDRjs7QURjQTtFQUNJLFVBQUE7QUNaSjs7QURlQTtFQUNJLHVDQUFBO0VBQ0Esa0JBQUE7QUNaSjs7QURlQTtFQUNJLGtCQUFBO0VBQ0EsdUNBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4kdG9wbmF2LWJhY2tncm91bmQtY29sb3I6IzAxNDAyMDtcclxuLmN1c3RvbUNsYXNze1xyXG4gICAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcbi5sZWZ0cmlnaHRhcnJvd2J1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGUgO1xyXG4gICAgY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLmxlZnRyaWdodGFycm93YnV0dG9uX25vc2hvd3tcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcbi5zaWRlYmFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgbGVmdDogMjM1cHg7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjM1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICAgIC5saXN0LWdyb3VwIHtcclxuICAgICAgICBhLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAuZmEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYS5yb3V0ZXItbGluay1hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgMTAwJSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGVyLWZpZWxkcyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgPiAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci1kcm9wZG93biB7XHJcbiAgICAgICAgKjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXIsXHJcbiAgICAgICAgICAgIGE6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLXRpdGxlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtY29sbGFwc2Uge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIC5wYW5lbC1ib2R5IHtcclxuICAgICAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yLCA1JSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm5lc3RlZC1tZW51IHtcclxuICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5uZXN0ZWQge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIH1cclxuICAgIHVsLnN1Ym1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgJiAuZXhwYW5kIHtcclxuICAgICAgICB1bC5zdWJtZW51IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgdG9wOiA1NHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5oZWFkZXItZmllbGRzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbn1cclxuIiwiLmN1c3RvbUNsYXNzIHtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0cmlnaHRhcnJvd2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzAxNDAyMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ubGVmdHJpZ2h0YXJyb3didXR0b25fbm9zaG93IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xuICB0b3A6IDU2cHg7XG4gIGxlZnQ6IDIzNXB4O1xuICBtYXJnaW4tbGVmdDogLTIzNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTQwMjA7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uc2lkZWJhciAubGlzdC1ncm91cCBhLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJhY2tncm91bmQ6ICMwMTQwMjA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgY29sb3I6ICM5OTk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zaWRlYmFyIC5saXN0LWdyb3VwIGEubGlzdC1ncm91cC1pdGVtIC5mYSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zaWRlYmFyIC5saXN0LWdyb3VwIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDEyNzEzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc2lkZWJhciAubGlzdC1ncm91cCBhLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDEyNzEzICFpbXBvcnRhbnQ7XG59XG4uc2lkZWJhciAubGlzdC1ncm91cCAuaGVhZGVyLWZpZWxkcyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnNpZGViYXIgLmxpc3QtZ3JvdXAgLmhlYWRlci1maWVsZHMgPiAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duICo6Zm9jdXMge1xuICBib3JkZXItcmFkaXVzOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG4uc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAucGFuZWwtdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC10aXRsZSBhIHtcbiAgY29sb3I6ICM5OTk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZDogIzAxNDAyMDtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC10aXRsZSBhIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG4uc2lkZWJhciAuc2lkZWJhci1kcm9wZG93biAucGFuZWwtdGl0bGUgYTpob3Zlcixcbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC10aXRsZSBhOmZvY3VzIHtcbiAgY29sb3I6ICNmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLXRpdGxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAxMjcxMztcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC1jb2xsYXBzZSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWRyb3Bkb3duIC5wYW5lbC1jb2xsYXBzZSAucGFuZWwtYm9keSAubGlzdC1ncm91cC1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNDAyMDtcbiAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLWNvbGxhcHNlIC5wYW5lbC1ib2R5IC5saXN0LWdyb3VwLWl0ZW0gYSB7XG4gIGNvbG9yOiAjOTk5O1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLWNvbGxhcHNlIC5wYW5lbC1ib2R5IC5saXN0LWdyb3VwLWl0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNpZGViYXIgLnNpZGViYXItZHJvcGRvd24gLnBhbmVsLWNvbGxhcHNlIC5wYW5lbC1ib2R5IC5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDEyNzEzO1xufVxuXG4ubmVzdGVkLW1lbnUgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uZXN0ZWQtbWVudSAubmVzdGVkIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLm5lc3RlZC1tZW51IHVsLnN1Ym1lbnUge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG4ubmVzdGVkLW1lbnUgLmV4cGFuZCB1bC5zdWJtZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLm5lc3RlZC1tZW51IC5leHBhbmQgdWwuc3VibWVudSBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2lkZWJhciB7XG4gICAgdG9wOiA1NHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgfVxufVxuQG1lZGlhIHByaW50IHtcbiAgLnNpZGViYXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5oZWFkZXItZmllbGRzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggd2hpdGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: src_app_services_data_access__WEBPACK_IMPORTED_MODULE_4__["DataAccess"]
        }, {
          type: _layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/layout/layout-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: LayoutRoutingModule */

  /***/
  function srcAppLayoutLayoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function () {
      return LayoutRoutingModule;
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


    var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layout.component */
    "./src/app/layout/layout.component.ts");

    var routes = [{
      path: '',
      component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
      children: [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix'
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-dashboard-module */
          [__webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboard/dashboard.module */
          "./src/app/layout/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: 'activate-deactivate',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./activate-deactivate/activate-deactivate.module */
          "./src/app/layout/activate-deactivate/activate-deactivate.module.ts")).then(function (m) {
            return m.ActivateDeactivateModule;
          });
        }
      }, {
        path: 'user-create',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | usercreateaccessright-usercreateaccessright-module */
          [__webpack_require__.e("common"), __webpack_require__.e("usercreateaccessright-usercreateaccessright-module")]).then(__webpack_require__.bind(null,
          /*! ./usercreateaccessright/usercreateaccessright.module */
          "./src/app/layout/usercreateaccessright/usercreateaccessright.module.ts")).then(function (m) {
            return m.UsercreationAccessModule;
          });
        }
      }, {
        path: 'appointment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | appointment-appointment-module */
          "appointment-appointment-module").then(__webpack_require__.bind(null,
          /*! ./appointment/appointment.module */
          "./src/app/layout/appointment/appointment.module.ts")).then(function (m) {
            return m.AppointmentModule;
          });
        }
      }, {
        path: 'invoice',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | invoice-invoice-module */
          "invoice-invoice-module").then(__webpack_require__.bind(null,
          /*! ./invoice/invoice.module */
          "./src/app/layout/invoice/invoice.module.ts")).then(function (m) {
            return m.InvoiceModule;
          });
        }
      }, {
        path: 'customer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | customer-customer-module */
          "customer-customer-module").then(__webpack_require__.bind(null,
          /*! ./customer/customer.module */
          "./src/app/layout/customer/customer.module.ts")).then(function (m) {
            return m.CustomerModule;
          });
        }
      }, {
        path: 'order',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | order-order-module */
          "order-order-module").then(__webpack_require__.bind(null,
          /*! ./order/order.module */
          "./src/app/layout/order/order.module.ts")).then(function (m) {
            return m.OrderModule;
          });
        }
      }, {
        path: 'location',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | location-location-module */
          "location-location-module").then(__webpack_require__.bind(null,
          /*! ./location/location.module */
          "./src/app/layout/location/location.module.ts")).then(function (m) {
            return m.LocationModule;
          });
        }
      }, {
        path: 'medicine',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | medicine-medicine-module */
          "medicine-medicine-module").then(__webpack_require__.bind(null,
          /*! ./medicine/medicine.module */
          "./src/app/layout/medicine/medicine.module.ts")).then(function (m) {
            return m.MedicineModule;
          });
        }
      }, {
        path: 'category',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | category-category-module */
          "category-category-module").then(__webpack_require__.bind(null,
          /*! ./category/category.module */
          "./src/app/layout/category/category.module.ts")).then(function (m) {
            return m.CategoryModule;
          });
        }
      }, {
        path: 'delivery',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | delivery-delivery-module */
          "delivery-delivery-module").then(__webpack_require__.bind(null,
          /*! ./delivery/delivery.module */
          "./src/app/layout/delivery/delivery.module.ts")).then(function (m) {
            return m.DeliveryModule;
          });
        }
      }, {
        path: 'charges',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | charges-charges-module */
          "charges-charges-module").then(__webpack_require__.bind(null,
          /*! ./charges/charges.module */
          "./src/app/layout/charges/charges.module.ts")).then(function (m) {
            return m.ChargesModule;
          });
        }
      }, {
        path: 'discount',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | discount-discount-module */
          "discount-discount-module").then(__webpack_require__.bind(null,
          /*! ./discount/discount.module */
          "./src/app/layout/discount/discount.module.ts")).then(function (m) {
            return m.DiscountModule;
          });
        }
      }, {
        path: 'coupon',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | coupon-coupon-module */
          "coupon-coupon-module").then(__webpack_require__.bind(null,
          /*! ./coupon/coupon.module */
          "./src/app/layout/coupon/coupon.module.ts")).then(function (m) {
            return m.CouponModule;
          });
        }
      }, {
        path: 'invoicecrm',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | invoicecrm-invoicecrm-module */
          "invoicecrm-invoicecrm-module").then(__webpack_require__.bind(null,
          /*! ./invoicecrm/invoicecrm.module */
          "./src/app/layout/invoicecrm/invoicecrm.module.ts")).then(function (m) {
            return m.InvoicecrmModule;
          });
        }
      }, {
        path: 'listdigitalmakt',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | listdigitalmakt-listdigitalmakt-module */
          [__webpack_require__.e("common"), __webpack_require__.e("listdigitalmakt-listdigitalmakt-module")]).then(__webpack_require__.bind(null,
          /*! ./listdigitalmakt/listdigitalmakt.module */
          "./src/app/layout/listdigitalmakt/listdigitalmakt.module.ts")).then(function (m) {
            return m.ListdigitalmaktModule;
          });
        }
      }]
    }];

    var LayoutRoutingModule = function LayoutRoutingModule() {
      _classCallCheck(this, LayoutRoutingModule);
    };

    LayoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LayoutRoutingModule
    });
    LayoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LayoutRoutingModule_Factory(t) {
        return new (t || LayoutRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutRoutingModule, [{
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
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "customClassMainContainer": a0,
        "customClassHugeMarginMainContainer": a1
      };
    };

    var LayoutComponent =
    /*#__PURE__*/
    function () {
      function LayoutComponent(router) {
        _classCallCheck(this, LayoutComponent);

        this.router = router;
        this.showSideBar = false;
        this.activated = {};
        this.pushRightClass = 'push-right';
        this.menuDivClass = 'list-group';
        this.activated['SidebarComponent'] == true; // this.showSideBar = false
      }

      _createClass(LayoutComponent, [{
        key: "isMenubeingShown",
        value: function isMenubeingShown() {
          var dom = document.querySelector('.list-group');
          return dom.classList.contains(this.menuDivClass);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
        /*ngOnChanges(changes: SimpleChanges) {
            //console.log(`ngOnChanges - data is ${this.data}`);
            for (let key in changes) {
              console.log(`${key} changed.
          Current: ${changes[key].currentValue}.
          Previous: ${changes[key].previousValue}`);
            }
           
          }*/

      }, {
        key: "changeOfRoutes",
        value: function changeOfRoutes() {//this.showSideBar = false
          // if(this.showSideBar){
          //  this.sideBarCom.modified[this.constructor.name] = false;
          //}
          //  if(!this.showSideBar){
          //    this.parent.activated[this.constructor.name] = false;
          //  }
        }
      }, {
        key: "onLoggedout",
        value: function onLoggedout() {
          try {
            this.router.navigate(["/login"]);
            localStorage.removeItem('isLoggedin');
          } catch (error) {
            console.log('Error', error);
          }
        }
        /*  ngAfterContentChecked(){
              this.showSideBar =  !this.showSideBar
          }
        */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          //console.log("at parent :: this.activated['SidebarComponent'] =="+this.activated['SidebarComponent'])
          if (this.activated['SidebarComponent'] == true) {
            // alert("sidbar child component changed")
            this.showSideBar = true; //this.activated['SidebarComponent'] = false
          } else {
            this.showSideBar = false;
          }
          /*
          if(this.activated['SidebarComponent'] == true){
             // alert("sidbar child component changed")
              this.showSideBar =  !this.showSideBar
              //this.activated['SidebarComponent'] = false
          }
          */

        }
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 4,
      vars: 4,
      consts: [[1, "main-container", 3, "ngClass"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.showSideBar, !ctx.showSideBar));
        }
      },
      styles: [".customClassMainContainer[_ngcontent-%COMP%] {\n  margin-left: 55px !important;\n}\n\n.customClassMainContainerRouterDependent[_ngcontent-%COMP%] {\n  margin-left: 55px !important;\n}\n\n.customClassHugeMarginMainContainer[_ngcontent-%COMP%] {\n  margin-left: 200px !important;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  margin-top: 56px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n  }\n}\n\n@media print {\n  .main-container[_ngcontent-%COMP%] {\n    margin-top: 0px !important;\n    margin-left: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKOztBRENBO0VBQ0ksNEJBQUE7QUNFSjs7QURBQTtFQUNJLDZCQUFBO0FDR0o7O0FEQUE7RUFDSSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSTtJQUNJLDJCQUFBO0VDR047QUFDRjs7QUREQTtFQUNJO0lBQ0ksMEJBQUE7SUFDQSwyQkFBQTtFQ0dOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbUNsYXNzTWFpbkNvbnRhaW5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiA1NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3RvbUNsYXNzTWFpbkNvbnRhaW5lclJvdXRlckRlcGVuZGVudHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3RvbUNsYXNzSHVnZU1hcmdpbk1haW5Db250YWluZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgICAvL21hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAtbXMtb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLmN1c3RvbUNsYXNzTWFpbkNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiA1NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b21DbGFzc01haW5Db250YWluZXJSb3V0ZXJEZXBlbmRlbnQge1xuICBtYXJnaW4tbGVmdDogNTVweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tQ2xhc3NIdWdlTWFyZ2luTWFpbkNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1NnB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICAtbXMtb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHByaW50IHtcbiAgLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/layout/layout.module.ts ***!
    \*****************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layout-routing.module */
    "./src/app/layout/layout-routing.module.ts");
    /* harmony import */


    var _layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/layout/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/layout/components/header/header.component.ts");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js"); // import { ActivateDeactivateComponent } from './activate-deactivate/activate-deactivate.component';
    //import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';


    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LayoutModule
    });
    LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LayoutModule_Factory(t) {
        return new (t || LayoutModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LayoutRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_9__["NgxLoadingModule"].forRoot({
        animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_9__["ngxLoadingAnimationTypes"].wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff',
        secondaryColour: '#ffffff',
        tertiaryColour: '#ffffff'
      })
      /* LoadingModule.forRoot({
           animationType: ANIMATION_TYPES.threeBounce,
           backdropBackgroundColour: 'rgba(255,255,255,.1)',
           fullScreenBackdrop: true,
           primaryColour: '#000',
           secondaryColour: '#000',
           tertiaryColour: '#000'
       }),*/
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, {
        declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LayoutRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_9__["NgxLoadingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LayoutRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_9__["NgxLoadingModule"].forRoot({
            animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_9__["ngxLoadingAnimationTypes"].wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
          })
          /* LoadingModule.forRoot({
               animationType: ANIMATION_TYPES.threeBounce,
               backdropBackgroundColour: 'rgba(255,255,255,.1)',
               fullScreenBackdrop: true,
               primaryColour: '#000',
               secondaryColour: '#000',
               tertiaryColour: '#000'
           }),*/
          ],
          declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_l"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownAnchor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownItem"], ngx_loading__WEBPACK_IMPORTED_MODULE_9__["NgxLoadingComponent"], _layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]]);
    /***/

  }
}]);
//# sourceMappingURL=layout-layout-module-es5.js.map