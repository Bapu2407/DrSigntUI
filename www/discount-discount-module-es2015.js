(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discount-discount-module"],{

/***/ "./src/app/layout/discount/discount-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/discount/discount-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DiscountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountRoutingModule", function() { return DiscountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _discount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./discount.component */ "./src/app/layout/discount/discount.component.ts");





const routes = [
    {
        path: '', component: _discount_component__WEBPACK_IMPORTED_MODULE_2__["DiscountComponent"]
    }
];
class DiscountRoutingModule {
}
DiscountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DiscountRoutingModule });
DiscountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DiscountRoutingModule_Factory(t) { return new (t || DiscountRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DiscountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscountRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/discount/discount.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/discount/discount.component.ts ***!
  \*******************************************************/
/*! exports provided: DiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountComponent", function() { return DiscountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var src_BaseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/BaseComponent */ "./src/BaseComponent.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var src_app_services_data_access__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data-access */ "./src/app/services/data-access.ts");
/* harmony import */ var _shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/modules/page-header/page-header.component */ "./src/app/shared/modules/page-header/page-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js");
















const _c0 = ["fileInputDemoPhoto"];
const _c1 = ["acc"];
const _c2 = ["content"];
const _c3 = ["discountFormModal"];
const _c4 = ["searFiltersModal"];
const _c5 = ["enlargedImageModal"];
const _c6 = ["enlargedPrescriptionModal"];
function DiscountComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r766 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscountComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r766); const ctx_r765 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r765.openforAddDiscountDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiscountComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r768 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscountComponent_div_4_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r768); const ctx_r767 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r767.openSearchFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscountComponent_div_4_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r768); const ctx_r769 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r769.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiscountComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enable/Disable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiscountComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiscountComponent_tbody_29_tr_1_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiscountComponent_tbody_29_tr_1_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rupees");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiscountComponent_tbody_29_tr_1_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r778 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ui-switch", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DiscountComponent_tbody_29_tr_1_td_16_Template_ui_switch_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r778); const obj_r771 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return obj_r771.active = $event; })("change", function DiscountComponent_tbody_29_tr_1_td_16_Template_ui_switch_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r778); const obj_r771 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r779 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r779.updateStatus($event, obj_r771); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r771 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", obj_r771.active);
} }
function DiscountComponent_tbody_29_tr_1_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r784 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscountComponent_tbody_29_tr_1_td_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r784); const obj_r771 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r782 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r782.openForeditDiscount(obj_r771); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiscountComponent_tbody_29_tr_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DiscountComponent_tbody_29_tr_1_span_14_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DiscountComponent_tbody_29_tr_1_span_15_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DiscountComponent_tbody_29_tr_1_td_16_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DiscountComponent_tbody_29_tr_1_td_19_Template, 3, 0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r771 = ctx.$implicit;
    const ctx_r770 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 14, obj_r771.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r770.convertToHumanDiscountTypeDesc(obj_r771.discountType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", obj_r771 == null ? null : obj_r771.logicType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", obj_r771 == null ? null : obj_r771.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", obj_r771 == null ? null : obj_r771.lower_value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", obj_r771 == null ? null : obj_r771.upper_value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", obj_r771 == null ? null : obj_r771.discount_amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", obj_r771 && obj_r771.discount_amount && obj_r771.byPercentAmount == "by_percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", obj_r771 && obj_r771.discount_amount && obj_r771.byPercentAmount == "by_value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r770.user.role.doctor.discount.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r770.convertToHumanDate(obj_r771.createdDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r770.user.role.doctor.discount.edit);
} }
const _c7 = function (a1, a2, a3) { return { id: "fordiscount1", itemsPerPage: a1, currentPage: a2, totalItems: a3 }; };
function DiscountComponent_tbody_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiscountComponent_tbody_29_tr_1_Template, 20, 16, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r759 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r759.normalFiltereduserListArr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c7, ctx_r759.pageSize, ctx_r759.pageNo, ctx_r759.totalDocRecords)));
} }
function DiscountComponent_tbody_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No record available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiscountComponent_ng_template_33_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const discountType_r794 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", discountType_r794.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](discountType_r794.name);
} }
function DiscountComponent_ng_template_33_div_15_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const logicType_r796 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", logicType_r796.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](logicType_r796.name);
} }
function DiscountComponent_ng_template_33_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r798 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logic Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DiscountComponent_ng_template_33_div_15_Template_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r798); const ctx_r797 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r797.discountObject.logicType = $event; })("change", function DiscountComponent_ng_template_33_div_15_Template_select_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r798); const ctx_r799 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r799.changeLogicType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DiscountComponent_ng_template_33_div_15_option_6_Template, 2, 2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r787 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r787.discountObject.logicType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r787.logicTypes);
} }
function DiscountComponent_ng_template_33_div_16_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const byPercentAmount_r801 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", byPercentAmount_r801.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](byPercentAmount_r801.name);
} }
function DiscountComponent_ng_template_33_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r803 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "By Percent Or Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DiscountComponent_ng_template_33_div_16_Template_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r803); const ctx_r802 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r802.discountObject.byPercentAmount = $event; })("change", function DiscountComponent_ng_template_33_div_16_Template_select_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r803); const ctx_r804 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r804.changePercentAmount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DiscountComponent_ng_template_33_div_16_option_6_Template, 2, 2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r788 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r788.discountObject.byPercentAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r788.byPercentAmounts);
} }
function DiscountComponent_ng_template_33_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r806 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Order Lower Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DiscountComponent_ng_template_33_div_17_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r806); const ctx_r805 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r805.discountObject.lower_value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r789 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r789.discountObject.lower_value);
} }
function DiscountComponent_ng_template_33_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r808 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Order Upper Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DiscountComponent_ng_template_33_div_18_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r808); const ctx_r807 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r807.discountObject.upper_value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r790 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r790.discountObject.upper_value);
} }
function DiscountComponent_ng_template_33_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r810 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Order Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DiscountComponent_ng_template_33_div_19_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r810); const ctx_r809 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r809.discountObject.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r791 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r791.discountObject.value);
} }
function DiscountComponent_ng_template_33_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiscountComponent_ng_template_33_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0Fix The Error : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r793 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r793.form_fill_failure_msg, " ");
} }
function DiscountComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    const _r812 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscountComponent_ng_template_33_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r812); const ctx_r811 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r811.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Discount Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DiscountComponent_ng_template_33_Template_select_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r812); const ctx_r813 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r813.discountObject.discountType = $event; })("change", function DiscountComponent_ng_template_33_Template_select_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r812); const ctx_r814 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r814.changeDiscountType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DiscountComponent_ng_template_33_option_14_Template, 2, 2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DiscountComponent_ng_template_33_div_15_Template, 7, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DiscountComponent_ng_template_33_div_16_Template, 7, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DiscountComponent_ng_template_33_div_17_Template, 7, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DiscountComponent_ng_template_33_div_18_Template, 7, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DiscountComponent_ng_template_33_div_19_Template, 7, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DiscountComponent_ng_template_33_span_24_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Discount Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DiscountComponent_ng_template_33_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r812); const ctx_r815 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r815.discountObject.discount_amount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscountComponent_ng_template_33_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r812); const ctx_r816 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r816.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscountComponent_ng_template_33_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r812); const ctx_r817 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r817.closeMainModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DiscountComponent_ng_template_33_p_33_Template, 6, 1, "p", 41);
} if (rf & 2) {
    const ctx_r762 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r762.discountFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 13, ctx_r762.mode), " Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r762.discountObject.discountType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r762.discountTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r762.discountObject.discountType == "order_volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r762.discountObject.discountType != "coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r762.subLogicType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r762.subLogicType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r762.subLogicType && ctx_r762.discountObject.discountType == "order_volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r762.discountObject.byPercentAmount == "by_percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r762.discountObject.discount_amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r762.discountFormGroup.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r762.submitAttempt);
} }
function DiscountComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Please wait..fetching data ");
} }
const _c8 = function () { return { primaryColour: "blue", secondaryColour: "red", fullScreenBackdrop: false }; };
class DiscountComponent extends src_BaseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(router, route, modal, toastr, _fb, dataService) {
        super(router);
        this.router = router;
        this.route = route;
        this.modal = modal;
        this.toastr = toastr;
        this._fb = _fb;
        this.dataService = dataService;
        this.loadingCustomeMsg = "Loading...";
        this.loading = true;
        this.discountType = { delivery_discount: [] };
        this.isPrescriptionUploaded = false;
        this.showOldPrescription = '';
        this.discountTypes = [
            { 'name': 'Direct Discounts', 'value': 'delivery_discount' },
            { 'name': 'Discounts ON Order Volume', 'value': 'order_volume' },
            { 'name': 'Coupon', 'value': 'coupon' }
        ];
        this.logicTypes = [
            { 'name': 'Order Value Greater Than(>)', 'value': 'greater_than' },
            //{'name':'Less Than(<)','value':'less_than'},
            { 'name': 'Order Value IN Between((> <)', 'value': 'in_between' },
            { 'name': 'Order Value Greater Than Equal To(>=)', 'value': 'greater_than_equal_to' },
            //{'name':'Less Than Equal To(<=)','value':'less_than_equal_to'},
            { 'name': 'Order Value Equal To(=)', 'value': 'equal_to' }
        ];
        this.byPercentAmounts = [
            { 'name': 'By Percentage', 'value': 'by_percent' },
            { 'name': 'By Amount', 'value': 'by_value' },
        ];
        this.allDynaFilter = null;
        this.patientList = [];
        this.customerList = [];
        this.states = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].states;
        this.keywordCustomer = "name";
        this.fetchDiscountByCustomer = false;
        this.discountList = [];
        this.fromCustomerPage = false;
        this.userKind = "discount";
        this.normalFiltereduserListArr = [];
        this.customerOldPrescriptionListArr = [];
        this.items = [];
        this.pageSize = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].RECORDSIZE;
        this.pageNo = 1;
        this.tempArray = [];
        this.subLogicType = false;
        this.keywordMedicine = "name";
        this.discountObject = {
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
        this.medicineArray = [[{
                    medicineId: '',
                    medicineName: "",
                    quantity: "",
                    mg: ''
                }]];
        this.attendantList = [];
        this.discountObjectBase = {
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
        this.openingMeridian = true;
        //  this.customDiscounttime.hour = 9
        // this.customDiscounttime.minute = 10
        if (!this.user.role.doctor.discount.view) {
            return;
        }
        this.customerName = this.route.snapshot.paramMap.get('name');
        this.fromCustomerPage = this.route.snapshot.paramMap.get('fromCustomerPage') == 'fromCustomerPage';
        console.log("this.customerName  **" + this.customerName);
        //this.customerId =  "5ee8ea1158ea514eec6f6e18"//this.route.snapshot.paramMap.get('customerId');
        this.discountFormGroup = this.buildForm();
    }
    ;
    buildForm() {
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
    changeDiscountType() {
        if (this.discountObject.discountType == "as_is_basis") {
            this.discountObject.byPercentAmount = "by_value";
        }
        else {
            this.discountObject.byPercentAmount = "by_percent";
        }
        this.discountFormGroup.get('byPercentAmount').patchValue(this.discountObject.byPercentAmount);
    }
    changePercentAmount() {
    }
    convertToHumanDiscountTypeDesc(discountType) {
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
    changeLogicType() {
        if (this.discountObject.logicType == 'in_between') {
            this.subLogicType = true;
            this.discountObject.subLogicType = true;
        }
        else {
            this.discountObject.lower_value = '0';
            this.discountObject.upper_value = '0';
            this.discountObject.subLogicType = false;
            this.subLogicType = false;
        }
    }
    getControls() {
        return this.discountFormGroup.get('medicineListItems').controls;
    }
    gotoCustomerPage() {
        this.router.navigate(["/customer", { fromDiscountPage: 'fromDiscountPage' }]);
    }
    openCustomerPage() {
        this.router.navigate(["/customer"]);
    }
    createMedicineItem() {
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
    getDiscount() {
    }
    addItem() {
        this.medicineListItems = this.discountFormGroup.get('medicineListItems');
        this.medicineListItems.push(this.createMedicineItem());
    }
    removeItem(i) {
        this.medicineListItems = this.discountFormGroup.get('medicineListItems');
        this.medicineListItems.removeAt(i);
    }
    medicineSelectEvent(item, i) {
        if (item) {
            //this.discountFormGroup.get('medicineID').patchValue(item['_id']);
            // this.discountObject.medicineList[i].medicineId = item['_id']
            this.medicineListItems.at(i).get('medicineId').patchValue(item['_id']);
            this.medicineListItems.at(i).get('medicineName').patchValue(item['name']);
            // this.discountObject.medicineList[i].medicineName = item['medicineName']
            //console.log(" inside discountSelectEvent "+JSON.stringify(item))
        }
        // do something with selected item
    }
    doctorMedcineSearch(val, i) {
        console.log(" inside onChangePatientSearch val " + val);
        console.log(" component count " + i);
        // if(val && val.length >2 ){
        let data = { name: val };
        //let medicineArray = []
        this.dataService.fetchAllMedicines(data).then((result) => {
            this.medicineArray = result.map(element => element);
            //this.medicineArray[i] = medicineArray
            //this.medicineArray = medicineArray.map(element => element)
            // console.log("this.medicineArray=="+JSON.stringify(this.medicineArray[i]))
        }, (err) => {
            //console.log(err);
        });
        // }
    }
    openSearchFilter() {
        //this.reset()
        this.reinitialise();
        this.modalSearchFilerReference = this.modal.open(this.searFiltersModal);
    }
    closeSearchModal() {
        //if(this.modalSearchFilerReference)
        //this.modalSearchFilerReference.close();
        if (this.modalSearchFilerReference)
            this.modalSearchFilerReference.dismiss();
    }
    openforAddDiscountDialog() {
        this.customerOldPrescriptionListArr = [];
        this.customerId = '';
        /*
        if(this.customerId == undefined || !this.customerId || this.customerId == ''){
         alert("Please select a customer first, from the dropdown")
         return
        }
        */
        this.mode = "add";
        this.discountFormGroup = this.buildForm();
        // 
        //this.medicineListItems.push({})
        this.discountObject = Object.assign({}, this.discountObjectBase);
        this.modalReferenceDiscountForm = this.modal.open(this.discountFormModal);
    }
    getPatient() {
    }
    closeModal() {
        if (this.modalReferenceDiscountForm)
            this.modalReferenceDiscountForm.close();
    }
    ngOnInit() {
        if (!localStorage.getItem('isLoggedin')) {
            this.router.navigate(["/login"]);
        }
        this.fetchDiscountsCount();
        this.fetchDiscounts();
        //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
    }
    ;
    fetchCustomers() {
        //  this.pageNo = 1
        //this.pageSize = 10
        this.dataService.fetchAllCustomersNotByName().then((result) => {
            //this.customerList = [];      
            this.customerList = result.map(element => element);
            // if(!this.fromCustomerPage){
            // this.customerId = this.customerList[0]
            // }
        }, (err) => {
            this.loading = false;
            console.log(err);
        });
    }
    save() {
        if (!this.discountFormGroup.valid) {
            this.submitAttempt = true;
            this.validateFields(this.discountFormGroup.controls);
            return;
        }
        console.log("this.discountObject for add == " + JSON.stringify(this.discountObject));
        if (this.discountObject.upper_value && this.discountObject.upper_value) {
            let valueUpper = parseFloat(this.discountObject.upper_value);
            let valueLower = parseFloat(this.discountObject.upper_value);
            if (this.subLogicType && valueUpper < valueLower) {
                alert('The upper value should be greater than lower value');
                return;
            }
        }
        if (this.mode == "add") {
            delete this.discountObject['customer'];
            this.dataService.addDiscount(this.discountObject).then((result) => {
                //  console.log("result after adduser == "+JSON.stringify(result))
                this.commonAfterSaveCode();
                this.reinitialise();
                this.form_fill_failure_msg = "";
                this.toastr.successToastr('New discount is added successfully');
            }, (err) => {
                console.log(err);
            });
        }
        if (this.mode == "edit") {
            this.loading = true;
            //delete this.discountObject['patient']
            delete this.discountObject['customer'];
            this.discountObject['discountId'] = this.discountObject['_id'];
            //  console.log("this.discountObject for edit == "+JSON.stringify(this.discountObject))
            this.dataService.updateDiscount(this.discountObject).then((result) => {
                //  console.log("****** updatediscount result   ===== **"+JSON.stringify(result))
                this.commonAfterSaveCode();
                if (this.isPrescriptionUploaded) {
                    this.isPrescriptionUploaded = false;
                }
                this.form_fill_failure_msg = "";
                this.toastr.successToastr('discount is updated successfully');
            }, (err) => {
                //this.mode = "add"
                this.loading = false;
                console.log(err);
            });
        }
    }
    commonAfterSaveCode() {
        this.customerId = '';
        this.loading = true;
        // this.normalFiltereduserListArr = []; 
        this.closeMainModal();
        setTimeout(() => {
            this.loading = false;
            this.mode = "add";
            this.fetchDiscounts();
        }, 2000);
    }
    enlargePrescription(obj) {
        //this.closeCustomModal()
        //this.enlargedPic = ''
        let image = obj.uploadPhotoDiscountPrescriptionURL;
        this.enlargedPrescPic = image;
        this.modalReferencePrescriptionImage = this.modal.open(this.enlargedPrescriptionModal);
    }
    selectPrescription(obj) {
        // let image  = obj.uploadPhotoDiscountPrescriptionURL    
        //  this.enlargedPrescPic = image
        //this.modalReferenceImage = this.modal.open(this.enlargedPrescriptionModal); 
        obj.selectValue = true;
        for (var i in this.customerOldPrescriptionListArr) {
            let oldPresc = this.customerOldPrescriptionListArr[i];
            if (oldPresc._id == obj._id) {
                continue;
            }
            else {
                //this.customerOldPrescriptionListArr.splice(i, 1);
                oldPresc.selectValue = false;
                //this.customerOldPrescriptionListArr.splice(i, 1,oldPresc);
            }
        }
        console.log("obj ==" + JSON.stringify(obj));
        //this.getPhotoOLDPrescription(obj.uploadPhotoDiscountPrescriptionURL)
        //this.showOldPrescription  = 'url(' + obj.uploadPhotoDiscountPrescriptionURL + ')'
    }
    getPhotoOLDPrescription(image) {
        try {
            return 'url(' + image + ')';
        }
        catch (error) {
            console.log('Error', error);
        }
    }
    getPhotoOldPrescription(obj) {
        try {
            let image = obj.uploadPhotoDiscountPrescriptionURL;
            image = obj.uploadPhotoDiscountPrescriptionURL;
            /*if(obj && obj.uploadPhotoDiscountPrescription){
              image = obj.uploadPhotoDiscountPrescription
            }
          */
            //  this.enlargedPic = image
            return 'url(' + image + ')';
        }
        catch (error) {
            // //console.log('Error', error);
        }
    }
    commonCodeDuringEdit() {
        this.discountFormGroup = this.buildForm();
        console.log("this.medicineListItems **" + this.medicineListItems.length);
    }
    openForeditDiscount(user) {
        //this.modalReferenceDiscountForm = this.modal.open(this.discountFormModal);
        //this.loading = true
        this.loadingCustomeMsg == "Fetching old prescriptions, please wait..";
        this.mode = "edit";
        this.modalReferenceDiscountForm = this.modal.open(this.discountFormModal);
        this.customerId = user['customerId'];
        this.discountObject = Object.assign({}, user);
        this.changeLogicType();
        console.log("this.customerId == " + this.customerId);
        //if(this.customerId)
        //this.fetchAllDiscountPrescriptions()  
        let data = { customerId: this.customerId };
        console.log(" fetch old prescription for " + JSON.stringify(data));
        this.commonCodeDuringEdit();
    }
    reinitialise() {
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
    reset() {
        this.reinitialise();
        this.toastr.successToastr('Filters reset, discount list refreshed');
    }
    pageChanged(event) {
        console.log("****** this.event   ===== **" + event);
        this.pageNo = event;
        this.applyFilter();
    }
    closeMainModal() {
        if (this.modalReferenceDiscountForm)
            this.modalReferenceDiscountForm.close();
    }
    userKindChange() {
        this.pageNo = 1;
        this.applyFilter();
    }
    applyFilter() {
        if (this.customerId != undefined && this.customerId && this.customerId != '') {
            this.fetchDiscountByCustomer = true;
        }
        else {
            this.fetchDiscountByCustomer = false;
        }
        console.log("this.customerId " + this.customerId);
        this.fetchDiscountsCount();
        this.fetchDiscounts();
    }
    onChangePage(pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
        this.pageNo = 1;
    }
    customerSelectEvent(item) {
        if (item) {
            this.discountFormGroup.get('customerId').patchValue(item['_id']);
            this.customerId = item['_id'];
            if (this.customerId) {
                this.loading = true;
                this.loadingCustomeMsg == "Fetching old prescriptions, please wait..";
                this.fetchAllDiscountPrescriptions();
            }
            //console.log(" inside customerSelectEvent "+JSON.stringify(item))
        }
        // do something with selected item
    }
    onChangeCustomerSearch(val) {
        //console.log(" inside onChangePatientSearch val "+val)
        // if(val && val.length >2 ){
        let data = { name: val };
        this.dataService.fetchAllCustomers(data).then((result) => {
            this.customerList = result.map(element => element);
        }, (err) => {
            //console.log(err);
        });
        // }
    }
    fetchDiscountsCount() {
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
        let data = { pageNo: this.pageNo, perPage: this.pageSize, filter: this.allDynaFilter };
        // this.fetchDiscountsCount({filter : allDynaFilter})  
        //this.fetchDiscountsByFilters({filter : allDynaFilter})   
        console.log(" inside data " + JSON.stringify(data));
        this.dataService.fetchDiscountsByFilterCount(data).then((result) => {
            console.log("****** fetchdiscountsCount result   ===== **" + JSON.stringify(result));
            this.totalDocRecords = result;
            this.loading = false;
            console.log("****** this.totalDocRecords ===== **" + this.totalDocRecords);
        }, (err) => {
            this.loading = false;
            console.log(err);
        });
    }
    fetchAllDiscountPrescriptions() {
        let data = { customerId: this.customerId };
        console.log(" fetch old prescription for " + JSON.stringify(data));
    }
    fetchDiscounts() {
        //  this.pageNo = 1
        //this.pageSize = 10
        // let data = {pageNo:this.pageNo,perPage:this.pageSize}
        //data['customerId'] = this.customerId
        // console.log("this.customerId   ===== **"+this.customerId)
        let data = { pageNo: this.pageNo, perPage: this.pageSize, filter: this.allDynaFilter };
        // this.fetchDiscountsCount({filter : allDynaFilter})  
        //this.fetchDiscountsByFilters({filter : allDynaFilter})   
        //console.log(" inside data "+JSON.stringify(data))
        this.dataService.fetchDiscounts(data).then((result) => {
            this.normalFiltereduserListArr = [];
            this.normalFiltereduserListArr = result.map(element => {
                return element;
            });
            //  console.log("****** this.fetchDiscountsByFilters   ===== **"+JSON.stringify(this.normalFiltereduserListArr))      
            this.loading = false;
        }, (err) => {
            this.normalFiltereduserListArr = [];
            this.loading = false;
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
    updateStatus(value, userInfo) {
        // userInfo.active = value
        //  console.log("****** userInfo   ===== **"+JSON.stringify(userInfo))
        let data = {};
        userInfo.active = !userInfo.active;
        console.log("******  userInfo.active   ===== **" + userInfo.active);
        userInfo.discountId = userInfo._id;
        data['discountId'] = userInfo._id;
        data['active'] = userInfo.active;
        console.log("****** userInfo   ===== **" + JSON.stringify(data));
        this.dataService.updateDiscount(data).then((result) => {
            //  console.log("****** updatediscount result   ===== **"+JSON.stringify(result))
            this.fetchDiscounts();
            this.loading = false;
        }, (err) => {
            this.loading = false;
            console.log(err);
        });
        this.toastr.successToastr('Discount record updated successfully');
    }
}
DiscountComponent.ɵfac = function DiscountComponent_Factory(t) { return new (t || DiscountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_access__WEBPACK_IMPORTED_MODULE_7__["DataAccess"])); };
DiscountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscountComponent, selectors: [["app-discount"]], viewQuery: function DiscountComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInputDemoPhoto = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordionComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.discountFormModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searFiltersModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.enlargedImageModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.enlargedPrescriptionModal = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 39, vars: 13, consts: [[3, "heading", "icon"], [1, "row"], ["class", "col-md-12", 4, "ngIf"], ["class", "col-md-12 text-right", 4, "ngIf"], [1, "card-body", "table-responsive", "marginLeft"], [1, "pb-3"], [1, "table", "table-bdiscounted", "table-sm"], [4, "ngIf"], [1, "col-md-12", "text-left", "clearfix"], ["id", "fordiscount1", "directionLinks", "true", "maxSize", "9", "directionLinks", "true", "autoHide", "true", "responsive", "true", "previousLabel", "Prev", "nextLabel", "Next", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", "screenReaderCurrentLabel", "You're on page", 1, "my-pagination", "marginLeft", 3, "pageChange", "pageBoundsCorrection"], ["discountFormModal", ""], [1, "my-container"], ["customLoadingTemplate", ""], [3, "show", "config", "template"], [1, "col-md-12"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [1, "col-md-12", "text-right"], ["aria-hidden", "true", 1, "fa", "fa-filter", "customfiltericon", "m-10", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh", "customfiltericon", "m-10", 3, "click"], [3, "class", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange", "change"], [1, "btn", "btn-dark", 3, "click"], ["colspan", "7", "align", "center"], [1, "custom_timebox", "p-0", 3, "formGroup"], [1, "modal-header", "py-1"], [1, "modal-title", "headerTitle", "mb-0"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "form-group"], [1, "labelTitles"], ["formControlName", "discountType", "name", "discountType", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["class", "labelValue", 3, "value", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], ["class", "row ", 4, "ngIf"], [1, "col-md-12", "form-group"], ["for", "email", 1, "labelTitles"], [1, "col-md-12", "marginTop"], ["formControlName", "discount_amount", "placeholder", "Enter discount amount", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "click"], ["class", "cutomeerrortext", 4, "ngIf"], [1, "labelValue", 3, "value"], ["formControlName", "logicType", "name", "logicType", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["formControlName", "byPercentAmount", "name", "byPercentAmount", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["formControlName", "lower_value", "placeholder", "Enter Lower Value", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "upper_value", "placeholder", "Enter Upper Value", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "value", "placeholder", "Enter Order Value", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "cutomeerrortext"], [1, "redcolor", "ml-2"], [1, "fa", "fas", "fa-exclamation"]], template: function DiscountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DiscountComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DiscountComponent_div_4_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Discount Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Logic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Order Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Order value Lower Limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Order value Upper Limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Discount Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DiscountComponent_th_24_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Created Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DiscountComponent_th_27_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DiscountComponent_tbody_29_Template, 3, 8, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "pagination-controls", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function DiscountComponent_Template_pagination_controls_pageChange_31_listener($event) { return ctx.pageChanged($event); })("pageBoundsCorrection", function DiscountComponent_Template_pagination_controls_pageBoundsCorrection_31_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DiscountComponent_tbody_32_Template, 4, 0, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DiscountComponent_ng_template_33_Template, 34, 15, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DiscountComponent_ng_template_36_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "ngx-loading", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r763 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", "Discount")("icon", "fa-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.discount.create);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.discount.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" List of existing ", ctx.userKind, "s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.discount.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.discount.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.normalFiltereduserListArr && ctx.normalFiltereduserListArr.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loading)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c8))("template", _r763);
    } }, directives: [_shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"], ngx_loading__WEBPACK_IMPORTED_MODULE_11__["NgxLoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_12__["UiSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["TitleCasePipe"]], styles: ["span.bootstrap-switch-handle-off.bootstrap-switch-default[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.customwidth[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.qtycolwidth[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.profile-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.bdiscountless[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .bdiscountless[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  bdiscount: none;\n}\n\n.divider[_ngcontent-%COMP%] {\n  bdiscount-bottom: 1px solid black;\n  width: 100%;\n}\n\n.para[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto !important;\n}\n\n.reducetextforicon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-left: 5px;\n}\n\n.customfiltericon[_ngcontent-%COMP%] {\n  font-size: 25px;\n  margin-right: 50px;\n  font-weight: bold;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  bdiscount-radius: 50%;\n  bdiscount: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  bdiscount-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.oldprescription-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.my-container[_ngcontent-%COMP%]   .custom-class[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  color: black;\n  top: 40%;\n  right: 50%;\n  bdiscount: 2px solid #1f94ed;\n  bdiscount-radius: 50%;\n}\n\n.oldprescription-image[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 70px;\n  bdiscount-radius: 10%;\n  bdiscount: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.confirmed[_ngcontent-%COMP%] {\n  color: white;\n  background: #117b30;\n}\n\n.discountplaced[_ngcontent-%COMP%] {\n  color: white;\n  background: #7b6b11;\n}\n\n.packaged[_ngcontent-%COMP%] {\n  color: white;\n  background: #B2DFEE;\n}\n\n.shipped[_ngcontent-%COMP%] {\n  color: #d0f1d7;\n  background: #00688B;\n}\n\n.rejected[_ngcontent-%COMP%] {\n  color: #d0f1d7;\n  background: #F08080;\n}\n\n.labelTitles[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.marginLeft[_ngcontent-%COMP%] {\n  margin-left: -25px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  bdiscount-radius: 50%;\n  bdiscount: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  bdiscount-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.prescriptionlistclass[_ngcontent-%COMP%] {\n  height: 290px !important;\n  width: auto;\n  overflow-y: scroll;\n}\n\n.clearfix[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n}\n\n.customradio[_ngcontent-%COMP%] {\n  font-size: 48px !important;\n}\n\n.redcolor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userInfo[_ngcontent-%COMP%] {\n  bdiscount-bottom: 1px solid #dee2e6;\n}\n\n.margincustom[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n\n.customwid[_ngcontent-%COMP%] {\n  width: 80% !important;\n  min-width: 50% !important;\n}\n\n.userInfo[_ngcontent-%COMP%]:last-child {\n  bdiscount-bottom: none;\n}\n\n.custombuttondiv[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 40px !important;\n  margin-top: 30px;\n  margin-bottom: 20px;\n  bdiscount: 1px solid #ccc;\n  background-color: black;\n  color: white;\n  padding: 5px 5px;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 95% !important;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .usermngtableinfo[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.no-resize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.m-20[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.no-focus[_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC9kaXNjb3VudC9kaXNjb3VudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2Rpc2NvdW50L2Rpc2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0Usc0JBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO0FDR0Y7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLGlDQUFBO0VBRUEsV0FBQTtBQ0tKOztBREhFO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FDTUo7O0FESkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUUY7O0FESkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ01KOztBREpJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ01OOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSUo7O0FEREE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUNJRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDR0Y7O0FEQUM7RUFDRyxZQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFBO0VBQ0ksaUJBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0lKOztBREZJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0lOOztBREFFO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURERTtFQUNFLGtCQUFBO0VBRUEsZUFBQTtBQ0dKOztBRERFO0VBQ0UsMEJBQUE7QUNJSjs7QURGQTtFQUVJLFVBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7QUNLSjs7QURIQTtFQUNJLG1DQUFBO0FDTUo7O0FESkE7RUFDRSxnQkFBQTtBQ09GOztBRExBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQ1FGOztBRE5BO0VBQ0ksc0JBQUE7QUNTSjs7QURQQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1VGOztBRFJBO0VBQ0kscUJBQUE7QUNXSjs7QURUQTtFQUNJLG1CQUFBO0FDWUo7O0FEVkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2FKOztBRFhBO0VBQ0ksV0FBQTtBQ2NKOztBRFpBO0VBQ0ksa0JBQUE7QUNlSjs7QURiQTtFQUNFLGdCQUFBO0FDZ0JGOztBRGRBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FDaUJGOztBRGZBO0VBQ0ksWUFBQTtBQ2tCSjs7QURoQkE7RUFDSSxZQUFBO0FDbUJKOztBRGpCQTtFQUNJLGFBQUE7QUNvQkoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGlzY291bnQvZGlzY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZi5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5jdXN0b213aWR0aHtcclxuICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnF0eWNvbHdpZHRoe1xyXG4gIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxufVxyXG4ucHJvZmlsZS1pbWFnZS13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5iZGlzY291bnRsZXNzIHRkLCAuYmRpc2NvdW50bGVzcyB0aCB7XHJcbiAgICBiZGlzY291bnQ6IG5vbmU7XHJcbn1cclxuLmRpdmlkZXIge1xyXG4gICAgYmRpc2NvdW50LWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgLy9tYXJnaW4tdG9wOjFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAucGFyYXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi5yZWR1Y2V0ZXh0Zm9yaWNvbntcclxuICBmb250LXNpemUgOjIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6NXB4O1xyXG59XHJcbi5jdXN0b21maWx0ZXJpY29ue1xyXG4gIGZvbnQtc2l6ZSA6MjVweDtcclxuICBtYXJnaW4tcmlnaHQ6NTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbiAgLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIGJkaXNjb3VudC1yYWRpdXM6IDUwJTtcclxuICAgIGJkaXNjb3VudDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gICAgLmVkaXQtaWNvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIGJkaXNjb3VudC1yYWRpdXM6IDIwJTtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOjdweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbToycHggIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gXHJcbiAgLm9sZHByZXNjcmlwdGlvbi1pbWFnZS13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubXktY29udGFpbmVyIC5jdXN0b20tY2xhc3N7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgdG9wOiA0MCU7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICBiZGlzY291bnQ6IDJweCBzb2xpZCAjMWY5NGVkO1xyXG4gIGJkaXNjb3VudC1yYWRpdXM6IDUwJTtcclxuICAvL3otaW5kZXg6IDk5OTk5O1xyXG59XHJcbi5vbGRwcmVzY3JpcHRpb24taW1hZ2Uge1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBiZGlzY291bnQtcmFkaXVzOiAxMCU7XHJcbiAgYmRpc2NvdW50OiAxcHggc29saWQgI2NjYztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbn1cclxuIC5jb25maXJtZWQgeyAgIFxyXG4gICAgY29sb3I6IHdoaXRlOyAgIFxyXG4gICAgYmFja2dyb3VuZDogIzExN2IzMDsgICAgXHJcbiAgfVxyXG5cclxuICAuZGlzY291bnRwbGFjZWQgeyAgIFxyXG4gICAgY29sb3I6IHdoaXRlOyAgIFxyXG4gICAgYmFja2dyb3VuZDogIzdiNmIxMTsgICAgXHJcbiAgfVxyXG5cclxuICAucGFja2FnZWQgeyAgIFxyXG4gICAgY29sb3I6d2hpdGU7ICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjQjJERkVFOyAgICBcclxuICB9XHJcblxyXG4gIC5zaGlwcGVkIHsgICBcclxuICAgIGNvbG9yOiAjZDBmMWQ3OyAgIFxyXG4gICAgYmFja2dyb3VuZDogIzAwNjg4QjsgICAgXHJcbiAgfVxyXG5cclxuICAucmVqZWN0ZWQgeyAgIFxyXG4gICAgY29sb3I6ICNkMGYxZDc7ICAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjRjA4MDgwOyAgICBcclxuICB9XHJcblxyXG4ubGFiZWxUaXRsZXN7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubWFyZ2luTGVmdHtcclxuICAgIG1hcmdpbi1sZWZ0Oi0yNXB4XHJcbn1cclxuLnByb2ZpbGUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIGJkaXNjb3VudC1yYWRpdXM6IDUwJTtcclxuICAgIGJkaXNjb3VudDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gICAgLmVkaXQtaWNvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIGJkaXNjb3VudC1yYWRpdXM6IDIwJTtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOi0xMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOjdweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbToycHggIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcmVzY3JpcHRpb25saXN0Y2xhc3N7XHJcbiAgICBoZWlnaHQ6IDI5MHB4ICFpbXBvcnRhbnQ7ICAgIFxyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG4gIC5jbGVhcmZpeCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAuY3VzdG9tcmFkaW97XHJcbiAgICBmb250LXNpemU6IDQ4cHggIWltcG9ydGFudDtcclxuICB9XHJcbi5yZWRjb2xvcntcclxuICAgIFxyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvciA6IHBvaW50ZXI7XHJcbn1cclxuLnVzZXJJbmZvIHtcclxuICAgIGJkaXNjb3VudC1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbi5tYXJnaW5jdXN0b217XHJcbiAgbWFyZ2luLWxlZnQ6MTAlO1xyXG59XHJcbi5jdXN0b213aWR7XHJcbiAgd2lkdGg6ODAlICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOjUwJSAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VySW5mbzpsYXN0LWNoaWxkIHtcclxuICAgIGJkaXNjb3VudC1ib3R0b206IG5vbmU7XHJcbn1cclxuLmN1c3RvbWJ1dHRvbmRpdntcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6MzBweDtcclxuICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgYmRpc2NvdW50OiAxcHggc29saWQgI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjp3aGl0ZTtcclxuICBwYWRkaW5nOjVweCA1cHg7XHJcbn1cclxuLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VybW5ndGFibGUgLnVzZXJtbmd0YWJsZWluZm97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi51c2VybW5ndGFibGUgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUgdGQgaW1nIHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59ICBcclxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMDtcclxufVxyXG5oMyB7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxufVxyXG5wcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4ubm8tcmVzaXplIHtcclxuICAgIHJlc2l6ZSA6IG5vbmU7XHJcbn1cclxuLm0tMjAge1xyXG4gICAgbWFyZ2luIDogMjBweDtcclxufVxyXG4ubm8tZm9jdXMge1xyXG4gICAgb3V0bGluZSA6IG5vbmU7XHJcbn0iLCJzcGFuLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZi5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jdXN0b213aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5xdHljb2x3aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlLWltYWdlLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5iZGlzY291bnRsZXNzIHRkLCAuYmRpc2NvdW50bGVzcyB0aCB7XG4gIGJkaXNjb3VudDogbm9uZTtcbn1cblxuLmRpdmlkZXIge1xuICBiZGlzY291bnQtYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFyYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnJlZHVjZXRleHRmb3JpY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY3VzdG9tZmlsdGVyaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMjIwcHg7XG4gIGJkaXNjb3VudC1yYWRpdXM6IDUwJTtcbiAgYmRpc2NvdW50OiAxcHggc29saWQgI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnByb2ZpbGUtaW1hZ2UgLmVkaXQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIGJkaXNjb3VudC1yYWRpdXM6IDIwJTtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cblxuLm9sZHByZXNjcmlwdGlvbi1pbWFnZS13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubXktY29udGFpbmVyIC5jdXN0b20tY2xhc3Mge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdG9wOiA0MCU7XG4gIHJpZ2h0OiA1MCU7XG4gIGJkaXNjb3VudDogMnB4IHNvbGlkICMxZjk0ZWQ7XG4gIGJkaXNjb3VudC1yYWRpdXM6IDUwJTtcbn1cblxuLm9sZHByZXNjcmlwdGlvbi1pbWFnZSB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJkaXNjb3VudC1yYWRpdXM6IDEwJTtcbiAgYmRpc2NvdW50OiAxcHggc29saWQgI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uY29uZmlybWVkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMTE3YjMwO1xufVxuXG4uZGlzY291bnRwbGFjZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM3YjZiMTE7XG59XG5cbi5wYWNrYWdlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI0IyREZFRTtcbn1cblxuLnNoaXBwZWQge1xuICBjb2xvcjogI2QwZjFkNztcbiAgYmFja2dyb3VuZDogIzAwNjg4Qjtcbn1cblxuLnJlamVjdGVkIHtcbiAgY29sb3I6ICNkMGYxZDc7XG4gIGJhY2tncm91bmQ6ICNGMDgwODA7XG59XG5cbi5sYWJlbFRpdGxlcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFyZ2luTGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMjIwcHg7XG4gIGJkaXNjb3VudC1yYWRpdXM6IDUwJTtcbiAgYmRpc2NvdW50OiAxcHggc29saWQgI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnByb2ZpbGUtaW1hZ2UgLmVkaXQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIGJkaXNjb3VudC1yYWRpdXM6IDIwJTtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cblxuLnByZXNjcmlwdGlvbmxpc3RjbGFzcyB7XG4gIGhlaWdodDogMjkwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmNsZWFyZml4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jdXN0b21yYWRpbyB7XG4gIGZvbnQtc2l6ZTogNDhweCAhaW1wb3J0YW50O1xufVxuXG4ucmVkY29sb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVzZXJJbmZvIHtcbiAgYmRpc2NvdW50LWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5tYXJnaW5jdXN0b20ge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uY3VzdG9td2lkIHtcbiAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4udXNlckluZm86bGFzdC1jaGlsZCB7XG4gIGJkaXNjb3VudC1ib3R0b206IG5vbmU7XG59XG5cbi5jdXN0b21idXR0b25kaXYge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmRpc2NvdW50OiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDVweDtcbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbn1cblxuLnVzZXJtbmd0YWJsZSAudXNlcm1uZ3RhYmxlaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi51c2VybW5ndGFibGUgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUgdGQgaW1nIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMS4yNXJlbSAwO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5uby1yZXNpemUge1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5tLTIwIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4ubm8tZm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-discount',
                templateUrl: './discount.component.html',
                styleUrls: ['./discount.component.scss'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_services_data_access__WEBPACK_IMPORTED_MODULE_7__["DataAccess"] }]; }, { fileInputDemoPhoto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileInputDemoPhoto']
        }], accordionComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['acc']
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content']
        }], discountFormModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['discountFormModal']
        }], searFiltersModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searFiltersModal']
        }], enlargedImageModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['enlargedImageModal']
        }], enlargedPrescriptionModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['enlargedPrescriptionModal']
        }] }); })();


/***/ }),

/***/ "./src/app/layout/discount/discount.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/discount/discount.module.ts ***!
  \****************************************************/
/*! exports provided: DiscountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountModule", function() { return DiscountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/__ivy_ngcc__/fesm2015/angularx-flatpickr.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _discount_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./discount.component */ "./src/app/layout/discount/discount.component.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
/* harmony import */ var _discount_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./discount-routing.module */ "./src/app/layout/discount/discount-routing.module.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");




//import { LoadingModule } from 'ngx-loading';
//import {NgxToggleModule} from "ngx-toggle";









//import {DataTableModule, SharedModule, InputTextModule} from 'primeng/primeng';
//import {PaginatorModule} from 'primeng/paginator';
//import {DropdownModule} from 'primeng/dropdown';






class DiscountModule {
}
DiscountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DiscountModule });
DiscountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DiscountModule_Factory(t) { return new (t || DiscountModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
            _discount_routing_module__WEBPACK_IMPORTED_MODULE_12__["DiscountRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
            ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
                animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].wanderingCubes,
                backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                backdropBdiscountRadius: '4px',
                primaryColour: '#ffffff',
                secondaryColour: '#ffffff',
                tertiaryColour: '#ffffff'
            }),
            ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
            //  DropdownModule,
            //PaginatorModule,
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"].forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DiscountModule, { declarations: [_discount_component__WEBPACK_IMPORTED_MODULE_10__["DiscountComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
        _discount_routing_module__WEBPACK_IMPORTED_MODULE_12__["DiscountRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                    _discount_routing_module__WEBPACK_IMPORTED_MODULE_12__["DiscountRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                    ngx_loading__WEBPACK_IMPORTED_MODULE_13__["NgxLoadingModule"].forRoot({
                        animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_13__["ngxLoadingAnimationTypes"].wanderingCubes,
                        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                        backdropBdiscountRadius: '4px',
                        primaryColour: '#ffffff',
                        secondaryColour: '#ffffff',
                        tertiaryColour: '#ffffff'
                    }),
                    ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_4__["UiSwitchModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                    //  DropdownModule,
                    //PaginatorModule,
                    angularx_flatpickr__WEBPACK_IMPORTED_MODULE_6__["FlatpickrModule"].forRoot(),
                    angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
                        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
                        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
                    }),
                ],
                declarations: [_discount_component__WEBPACK_IMPORTED_MODULE_10__["DiscountComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=discount-discount-module-es2015.js.map