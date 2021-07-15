(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");





const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
class LoginRoutingModule {
}
LoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _services_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-access */ "./src/app/services/data-access.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");








const _c0 = ["email"];
class LoginComponent {
    constructor(router, ngZone, toastr, dataService) {
        this.router = router;
        this.ngZone = ngZone;
        this.toastr = toastr;
        this.dataService = dataService;
        this.email = ''; //"user2@gmail.com";
        this.password = ''; // "password";   
        this.email = "admin@gmail.com";
        this.password = "password";
        //this.password = "AdminDrsignet@123"
        if (localStorage.getItem('isLoggedin')) {
            this.router.navigate(["/dashboard"]);
        }
    }
    ngOnInit() { }
    onLoggedin() {
        //this.emailValue  = this.emailRef.nativeElement.value
        console.log('this.emailValue == ' + this.email);
        console.log('this.password == ' + this.password);
        let data = { emailPhone: this.email, password: this.password };
        this.dataService.loginUser(data).then((result) => {
            console.log("****** loginUser result   ===== **" + JSON.stringify(result));
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('user', JSON.stringify(result));
            this.toastr.successToastr('Logged in successfully');
            this.router.navigate(["dashboard"]);
            this.loading = false;
        }, (err) => {
            this.toastr.errorToastr('This account is not valid');
            this.loading = false;
            console.log(err);
        });
        /*
        if(this.email == "admin" && this.password == "drSigNet#123") {
            console.log('Signed In');
            localStorage.setItem('isLoggedin', 'true');
            this.toastr.successToastr('Logged in successfully');
            this.router.navigate(["dashboard"]);
            this.loading = false;
        }
        else {
            this.toastr.errorToastr('This account is not valid');
            this.loading = false;
        }
*/
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_access__WEBPACK_IMPORTED_MODULE_4__["DataAccess"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.emailRef = _t.first);
    } }, decls: 17, vars: 4, consts: [[1, "login-page"], [1, "row", "justify-content-md-center"], [1, "col-md-4"], ["src", "assets/images/logo_signet.png", "width", "150px"], ["role", "form"], [1, "form-content"], [1, "form-group"], ["type", "text", "name", "email", "id", "email", "placeholder", "Email", 1, "form-control", "input-underline", "input-lg", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "id", "password", "placeholder", "Password", 1, "form-control", "input-underline", "input-lg", 3, "ngModel", "ngModelChange"], [1, "marginTop"], [1, "btn", "rounded-btn", 3, "click"], [1, "my-container"], [3, "show"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Admin Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_13_listener() { return ctx.onLoggedin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Log in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ngx-loading", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerTransition", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ngx_loading__WEBPACK_IMPORTED_MODULE_6__["NgxLoadingComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.marginTop[_ngcontent-%COMP%] {\n  margin-top: -10px;\n}\n\n.login-page[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #014020;\n  text-align: center;\n  color: #fff;\n  padding: 3em;\n}\n\n.login-page[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.login-page[_ngcontent-%COMP%]   .input-lg[_ngcontent-%COMP%] {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n\n.login-page[_ngcontent-%COMP%]   .input-underline[_ngcontent-%COMP%] {\n  background: 0 0;\n  border: none;\n  box-shadow: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  color: #fff;\n  border-radius: 0;\n}\n\n.login-page[_ngcontent-%COMP%]   .input-underline[_ngcontent-%COMP%]:focus {\n  border-bottom: 2px solid #fff;\n  box-shadow: none;\n}\n\n.login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  color: rgba(255, 255, 255, 0.8);\n  color: #014020;\n  background: white;\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 55px;\n  font-weight: bold;\n}\n\n.login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:hover, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:focus, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:active, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:visited {\n  background: white;\n  color: #014020;\n  border: 2px solid white;\n  outline: none;\n}\n\n.login-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 300;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 36px;\n}\n\n.login-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n\n.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%] {\n  padding: 40px 0;\n}\n\n.login-page[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n\n.login-page[_ngcontent-%COMP%]   .google.social-btn[_ngcontent-%COMP%] {\n  border: 2px solid #4285f4;\n  background: #4285f4;\n  padding: 0;\n}\n\n.login-page[_ngcontent-%COMP%]   .google.social-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 0.425rem 0.75rem;\n  background: #fff;\n  color: #ff4747;\n  font-size: 22px;\n  float: left;\n}\n\n.login-page[_ngcontent-%COMP%]   .google.social-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7QUNESjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBZHFCO0VBZXJCLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURBSTtFQUNJLFVBQUE7QUNFUjs7QURBSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDRVI7O0FEQUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNFUjs7QURBSTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7QUNFUjs7QURBSTtFQUVJLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQTVDaUI7RUE2Q2pCLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFUjs7QURBSTs7OztFQUlJLGlCQUFBO0VBQ0EsY0F6RGlCO0VBMERqQix1QkFBQTtFQUNBLGFBQUE7QUNFUjs7QURDSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDUjs7QURBUTtFQUNJLCtCQUFBO0FDRVo7O0FERUk7RUFDSSxjQUFBO0FDQVI7O0FEQ1E7RUFDSSwwQ0FBQTtBQ0NaOztBREVRO0VBQ0ksZ0JBQUE7RUFDQSwwQ0FBQTtBQ0FaOztBREdRO0VBQ0ksZ0JBQUE7RUFDQSwwQ0FBQTtBQ0RaOztBRElRO0VBQ0ksMENBQUE7QUNGWjs7QURLSTtFQUNJLGVBQUE7QUNIUjs7QURLSTtFQUVJLGtCQUFBO0VBQ0Esc0JBQUE7QUNIUjs7QURLSTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDSFI7O0FESVE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRlo7O0FESVE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNGWiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8kdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjojMDE0MDIwO1xyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubWFyZ2luVG9we1xyXG4gICAgbWFyZ2luLXRvcDotMTBweDtcclxufVxyXG4ubG9naW4tcGFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogM2VtO1xyXG4gICAgLmNvbC1sZy00IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmlucHV0LWxnIHtcclxuICAgICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtdW5kZXJsaW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gICAgLmlucHV0LXVuZGVybGluZTpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICAgIC5yb3VuZGVkLWJ0biB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICBjb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA1NXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLnJvdW5kZWQtYnRuOmhvdmVyLFxyXG4gICAgLnJvdW5kZWQtYnRuOmZvY3VzLFxyXG4gICAgLnJvdW5kZWQtYnRuOmFjdGl2ZSxcclxuICAgIC5yb3VuZGVkLWJ0bjp2aXNpdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjokdG9wbmF2LWJhY2tncm91bmQtY29sb3I7Ly8gcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICAgICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAvKiBGaXJlZm94IDE4LSAqL1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9ybS1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgICB9XHJcbiAgICAudXNlci1hdmF0YXIge1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmdvb2dsZS5zb2NpYWwtYnRuIHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNDI4NWY0O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM0Mjg1ZjQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMC40MjVyZW0gMC43NXJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZjQ3NDc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tYXJnaW5Ub3Age1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmxvZ2luLXBhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICMwMTQwMjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDNlbTtcbn1cbi5sb2dpbi1wYWdlIC5jb2wtbGctNCB7XG4gIHBhZGRpbmc6IDA7XG59XG4ubG9naW4tcGFnZSAuaW5wdXQtbGcge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmxvZ2luLXBhZ2UgLmlucHV0LXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQ6IDAgMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5sb2dpbi1wYWdlIC5pbnB1dC11bmRlcmxpbmU6Zm9jdXMge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0biB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgY29sb3I6ICMwMTQwMjA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDAgNTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubG9naW4tcGFnZSAucm91bmRlZC1idG46aG92ZXIsXG4ubG9naW4tcGFnZSAucm91bmRlZC1idG46Zm9jdXMsXG4ubG9naW4tcGFnZSAucm91bmRlZC1idG46YWN0aXZlLFxuLmxvZ2luLXBhZ2UgLnJvdW5kZWQtYnRuOnZpc2l0ZWQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMwMTQwMjA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmxvZ2luLXBhZ2UgaDEge1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDM2cHg7XG59XG4ubG9naW4tcGFnZSBoMSBzbWFsbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG4ubG9naW4tcGFnZSAuZm9ybS1ncm91cCB7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuLmxvZ2luLXBhZ2UgLmZvcm0tZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tcGFnZSAuZm9ybS1ncm91cCBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xufVxuLmxvZ2luLXBhZ2UgLmZvcm0tZ3JvdXAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tcGFnZSAuZm9ybS1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tcGFnZSAuZm9ybS1jb250ZW50IHtcbiAgcGFkZGluZzogNDBweCAwO1xufVxuLmxvZ2luLXBhZ2UgLnVzZXItYXZhdGFyIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbn1cbi5sb2dpbi1wYWdlIC5nb29nbGUuc29jaWFsLWJ0biB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Mjg1ZjQ7XG4gIGJhY2tncm91bmQ6ICM0Mjg1ZjQ7XG4gIHBhZGRpbmc6IDA7XG59XG4ubG9naW4tcGFnZSAuZ29vZ2xlLnNvY2lhbC1idG4gaSB7XG4gIHBhZGRpbmc6IDAuNDI1cmVtIDAuNzVyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjZmY0NzQ3O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmxvZ2luLXBhZ2UgLmdvb2dsZS5zb2NpYWwtYnRuIHNwYW4ge1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */"], data: { animation: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
                animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"] }, { type: _services_data_access__WEBPACK_IMPORTED_MODULE_4__["DataAccess"] }]; }, { emailRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['email']
        }] }); })();


/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");





//import { LoadingModule } from 'ngx-loading';



class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ngx_loading__WEBPACK_IMPORTED_MODULE_5__["NgxLoadingModule"].forRoot({
                animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_5__["ngxLoadingAnimationTypes"].wanderingCubes,
                backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                backdropBorderRadius: '4px',
                primaryColour: '#ffffff',
                secondaryColour: '#ffffff',
                tertiaryColour: '#ffffff'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_5__["NgxLoadingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ngx_loading__WEBPACK_IMPORTED_MODULE_5__["NgxLoadingModule"].forRoot({
                        animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_5__["ngxLoadingAnimationTypes"].wanderingCubes,
                        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                        backdropBorderRadius: '4px',
                        primaryColour: '#ffffff',
                        secondaryColour: '#ffffff',
                        tertiaryColour: '#ffffff'
                    })
                ],
                declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map