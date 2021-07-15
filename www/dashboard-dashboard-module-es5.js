function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./src/app/layout/dashboard/dashboard-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppLayoutDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
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


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/layout/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardRoutingModule
    });
    DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardRoutingModule_Factory(t) {
        return new (t || DashboardRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
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
  "./src/app/layout/dashboard/dashboard.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
    \*********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppLayoutDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../router.animations */
    "./src/app/router.animations.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var src_app_services_data_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/data-access */
    "./src/app/services/data-access.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js"); //import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    //import { Observable } from 'rxjs';


    function DashboardComponent_tr_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Address \xA0 \xA0 :\xA0 \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Area\xA0 \xA0 :\xA0 \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "City \xA0 \xA0 :\xA0 \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var appointment_r19 = ctx.$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](appointment_r19 == null ? null : appointment_r19.location == null ? null : appointment_r19.location.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](appointment_r19 == null ? null : appointment_r19.location == null ? null : appointment_r19.location.area);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](appointment_r19 == null ? null : appointment_r19.location == null ? null : appointment_r19.location.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](appointment_r19 == null ? null : appointment_r19.patient == null ? null : appointment_r19.patient.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](appointment_r19 == null ? null : appointment_r19.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r17.convertToHumanDate(appointment_r19.appointmentDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](appointment_r19 == null ? null : appointment_r19.appointmentTime);
      }
    }

    function DashboardComponent_tbody_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No record available");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(router, toastr, dataService) {
        _classCallCheck(this, DashboardComponent);

        this.router = router;
        this.toastr = toastr;
        this.dataService = dataService;
        this.loading = true;
        this.totalUser = 0;
        this.openinvoice = 0;
        this.totalDist = 0;
        this.totalinvoice = 0;
        this.distCoveredByDriver = [];
        this.currentDate = new Date().toISOString().substr(8, 2);
        this.currentMonth = new Date().toISOString(); // public currentMonth: string = new Date().toISOString().substr(6,1);

        this.currentYear = new Date().toISOString().substr(0, 4);
        this.today = new Date();
        this.last7Days = new Date(new Date().setDate(new Date().getDate() - 7));
        this.dateBeforeWeek = new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().substr(0, 10);
        this.beginningDayOfMonth = new Date(new Date().setDate(new Date().getDate() - 31)).toISOString().substr(0, 10);
        this.allDates = [];
        this.labelDays = [];
        this.monthDayslabel = [];
        this.monthDays = [];
        this.labelStatus = [];
        this.orderedByDate = [];
        this.orderedByStatus = [];
        this.appointmentList = [];
        this.arrangedOrderedByDate = [];
        this.costArrangedOrderedByDate = [];
        this.totalCost = 0;
        this.totalDataByDate = [];
        this.totalDataByStatus = [];
        this.totalStatusByDate = [];
        this.ArrangedTotalDistanceCoveredByDate = []; // invoice Chart

        this.invoiceChartType = 'line';
        this.invoiceChartLegend = false;
        this.invoiceChartLabels = [];
        this.invoiceChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true
        };
        this.invoiceChartData = [{
          data: []
        }]; //monthList:any =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
        // bar chart

        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true
        };
        this.barChartData = [{
          data: []
        }]; // lineChart

        this.lineChartData = [{
          data: []
        }];
        this.lineChartLabels = [];
        this.lineChartOptions = {
          responsive: true
        };
        this.lineChartColors = [{
          // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }];
        this.invoiceChartColors = [{
          // green
          backgroundColor: 'rgba(83, 154, 125, 1)',
          borderColor: 'rgba(85, 101, 138, 1)',
          pointBackgroundColor: 'rgba(85, 101, 138, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.4)'
        }];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        /*
                if (!localStorage.getItem('isLoggedin')) {
                    this.router.navigate(["/login"]);
                }
          */

        this.getDaysOfMonth();
        this.getDaysInMonth(this.currentMonth, this.currentYear); // setting the month if its later than september

        if (new Date().getMonth() + 1 >= 10) {
          this.currentMonth = new Date().toISOString().substr(5, 2);
        } else {
          this.currentMonth = new Date().toISOString().substr(6, 1);
        }

        this.invoiceChartLabels = this.monthDayslabel;
        this.fetchAllData();
      }

      _createClass(DashboardComponent, [{
        key: "fetchAllData",
        value: function fetchAllData() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.fetchDaysApointment();

                  case 2:
                    _context.next = 4;
                    return this.fetchMonthInvoices();

                  case 4:
                    _context.next = 6;
                    return this.fetchAllmonthsAppointment();

                  case 6:
                    this.loading = false;

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "fetchMonthInvoices",
        value: function fetchMonthInvoices() {
          var _this = this;

          try {
            var firstDayOfMonth = moment__WEBPACK_IMPORTED_MODULE_3__(this.firstDayOfMonth).format('DD-MM-YYYY');
            var lastDayOfMonth = moment__WEBPACK_IMPORTED_MODULE_3__(this.lastDayOfMonth).format('DD-MM-YYYY');
            var dateRange = {
              fromDate: firstDayOfMonth,
              toDate: lastDayOfMonth,
              allDates: this.monthDays
            }; //  console.log("****** Date range   ===== **"+JSON.stringify(dateRange))

            return new Promise(function (resolve, reject) {
              _this.dataService.fetchMonthInvoices(dateRange).then(function (result) {
                var data = result.map(function (element) {
                  return element;
                });
                _this.invoiceChartData = [{
                  data: data,
                  label: 'Monthly Invoices'
                }];
                console.log("****** invoice data   ===== **" + JSON.stringify(data));
                resolve(data);
              }, function (err) {
                //this.loading = false;
                resolve(err);
                console.log(err);
              });
            });
          } catch (error) {
            console.log('Error', error);
          }
        }
      }, {
        key: "fetchDaysApointment",
        value: function fetchDaysApointment() {
          var _this2 = this;

          try {
            return new Promise(function (resolve, reject) {
              _this2.dataService.fetchDaysApointment().then(function (result) {
                _this2.appointmentList = result.map(function (element) {
                  return element;
                }); // console.log("****** this.appointmentList   ===== **"+JSON.stringify(this.appointmentList))

                resolve(_this2.appointmentList);
              }, function (err) {
                _this2.appointmentList = []; //this.loading = false;

                resolve(err);
                console.log(err);
              });
            });
          } catch (error) {
            console.log('Error', error);
          }
        }
      }, {
        key: "fetchAllmonthsAppointment",
        value: function fetchAllmonthsAppointment() {
          var _this3 = this;

          try {
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                _this3.dataService.fetchAllmonthsAppointment().then(function (result) {
                  var data = result.map(function (element) {
                    return element;
                  });
                  _this3.barChartData = [{
                    data: data,
                    label: 'Monthly Appointments'
                  }]; // console.log("****** this.barChartData   ===== **"+JSON.stringify(this.barChartData))

                  resolve(data);
                }, function (err) {
                  //this.loading = false;
                  resolve(err);
                  console.log(err);
                });
              }, 500);
            });
          } catch (error) {
            console.log('Error', error);
          }
        }
      }, {
        key: "convertToHumanDate",
        value: function convertToHumanDate(dbDate) {
          return moment__WEBPACK_IMPORTED_MODULE_3__(dbDate).format('DD-MMM-YYYY');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getGraphValues",
        value: function getGraphValues() {}
      }, {
        key: "basePath",
        value: function basePath(_basePath) {
          throw new Error("Method not implemented.");
        } // Getting all days of the current month

      }, {
        key: "getDaysOfMonth",
        value: function getDaysOfMonth() {
          var thisday = new Date(this.beginningDayOfMonth);
          this.firstDayOfMonth = new Date(this.beginningDayOfMonth);
          this.allDates = [];
          this.labelDays = [];
          var nextDay;

          for (var i = 30; i > 0; i--) {
            nextDay = new Date(thisday.setDate(thisday.getDate() + 1)); //  console.log('nextDay.toISOString() == ', nextDay.toISOString());
            // console.log('nextDay.toISOString() .substr(0,10) == ', nextDay.toISOString().substr(0,10));
            //this.monthDayslabel.push(nextDay.toISOString().substr(0,10));

            this.monthDayslabel.push(moment__WEBPACK_IMPORTED_MODULE_3__(nextDay).format("DD-MM-YY"));
            this.monthDays.push(moment__WEBPACK_IMPORTED_MODULE_3__(nextDay).format("DD-MM-YYYY"));
            this.lastDayOfMonth = nextDay;
          }

          return this.monthDayslabel;
        }
      }, {
        key: "getDaysInMonth",
        value: function getDaysInMonth(month, year) {
          var thisday = new Date(this.dateBeforeWeek);
          this.allDates = [];
          this.labelDays = [];

          for (var i = 7; i > 0; i--) {
            var nextDay = new Date(thisday.setDate(thisday.getDate() + 1)); //  console.log('nextDay.toISOString() == ', nextDay.toISOString());
            //  console.log('nextDay.toISOString() .substr(0,10) == ', nextDay.toISOString().substr(0,10));

            this.labelDays.push(nextDay.toISOString().substr(0, 10));
            this.allDates.push({
              date: nextDay.toISOString().substr(0, 10)
            });
          }

          return this.labelDays;
        } // Reduce the array by dates

      }, {
        key: "reduceByDate",
        value: function reduceByDate(objectArray, property, val1, val2, val3) {
          var _this4 = this;

          return objectArray.reduce(function (acc, obj) {
            var key = obj[property];

            if (!acc[key]) {
              acc[key] = [];
              acc[key].push(obj);
            } else {
              obj[val1] = obj[val1] + parseFloat(acc[key][0][val1]);
              obj[val2] = obj[val2] + parseFloat(acc[key][0][val2]);
              obj[val3] = obj[val3] + parseFloat(acc[key][0][val3]);
              acc[key][0] = obj;
            }

            _this4.orderedByDate = acc; // this.distCoveredByDriver = acc;

            return acc;
          }, {});
        } // Formated data

      }, {
        key: "formatedData",
        value: function formatedData(orderedByDate) {
          var arrangedOrderedByDate = [];

          for (var property in orderedByDate) {
            arrangedOrderedByDate.push(orderedByDate[property][0]);
          }

          this.arrangedOrderedByDate = arrangedOrderedByDate;
          return arrangedOrderedByDate;
        }
      }, {
        key: "getAllDatesRecord",
        value: function getAllDatesRecord(dates, completedRidesDate) {
          this.totalDist = 0;
          this.totalCost = 0;
          this.totalinvoice = 0;

          for (var i = 0; i < dates.length; i++) {
            dates[i].distanceCovered = 0;
            dates[i].cost = 0;
            dates[i].invoice = 0;

            for (var j = 0; j < completedRidesDate.length; j++) {
              if (dates[i].date == completedRidesDate[j].date) {
                dates[i].distanceCovered = completedRidesDate[j].distanceCovered;
                dates[i].cost = completedRidesDate[j].cost;
                dates[i].invoice = completedRidesDate[j].invoice;
              }
            }

            this.totalDataByDate = dates;
            this.totalDist += dates[i].distanceCovered;
            this.totalCost += dates[i].cost;
            this.totalinvoice += dates[i].invoice;
          }

          this.totalDist = parseFloat(this.totalDist.toFixed(2));
          return dates;
        }
      }, {
        key: "getValuesForAllDates",
        value: function getValuesForAllDates(getAllDatesRecord, value) {
          var valuesForAllDates = [];

          for (var i = 0; i < getAllDatesRecord.length; i++) {
            valuesForAllDates.push(getAllDatesRecord[i][value]);
          }

          return valuesForAllDates;
        } // /////////

      }, {
        key: "reduceStatusByDate",
        value: function reduceStatusByDate(objectArray, property) {
          var _this5 = this;

          return objectArray.reduce(function (acc, obj) {
            var key = obj[property];
            var count = 1;

            if (!acc[key]) {
              acc[key] = [];
              obj.count = 1;
              acc[key].push(obj);
            } else {
              obj.count = count + 1;
              acc[key][0] = obj;
            }

            _this5.orderedByStatus = acc;
            return acc;
          }, {});
        }
      }, {
        key: "getAllStatusRecord",
        value: function getAllStatusRecord(statusList, rides) {
          for (var i = 0; i < statusList.length; i++) {
            statusList[i].count = 0;

            for (var j = 0; j < rides.length; j++) {
              if (statusList[i].status == rides[j].status) {
                statusList[i].count = rides[j].count;
              }
            }

            this.totalDataByStatus = statusList;
          }

          return statusList;
        }
      }, {
        key: "getStatusKey",
        value: function getStatusKey(value) {
          var finalVal;
          return finalVal;
        }
      }, {
        key: "convertStatusLabel",
        value: function convertStatusLabel(labelStatus) {
          var finalVal;
        }
      }, {
        key: "getTotalUsers",
        value: function getTotalUsers() {
          var count = 0;
        }
      }, {
        key: "getTodaysOpenRides",
        value: function getTodaysOpenRides() {
          var count = 0;
          var current = this.today.toISOString().substr(0, 10);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_access__WEBPACK_IMPORTED_MODULE_6__["DataAccess"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 42,
      vars: 16,
      consts: [[1, "row"], [1, "col", "col-xl-6", "col-lg-6"], ["baseChart", "", 3, "datasets", "labels", "colors", "options", "legend", "chartType"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "colors", "chartType"], [1, "col-md-12"], [1, "card", "mb-3"], [1, "card-header", "custom_text"], [1, "card-body"], [1, "col", "col-md-12"], [1, "table-responsive"], [1, "table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "my-container"], [3, "show"], ["colspan", "7", "align", "center"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Total appointments each month");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "canvas", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Invoices in a month");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "canvas", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Today's Appointments ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Patient Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Appointment Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Appointment Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Appointment Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, DashboardComponent_tr_37_Template, 21, 7, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, DashboardComponent_tbody_38_Template, 4, 0, "tbody", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "ngx-loading", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@routerTransition", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("colors", ctx.invoiceChartColors)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.invoiceChartData)("labels", ctx.invoiceChartLabels)("options", ctx.invoiceChartOptions)("legend", ctx.invoiceChartLegend)("colors", ctx.invoiceChartColors)("chartType", ctx.invoiceChartType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.appointmentList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appointmentList && ctx.appointmentList.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("show", ctx.loading);
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_7__["BaseChartDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_loading__WEBPACK_IMPORTED_MODULE_9__["NgxLoadingComponent"]],
      styles: ["canvas[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.custom_text[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uY3VzdG9tX3RleHR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSIsImNhbnZhcyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jdXN0b21fdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"],
      data: {
        animation: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss'],
          animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]
        }, {
          type: src_app_services_data_access__WEBPACK_IMPORTED_MODULE_6__["DataAccess"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/dashboard/dashboard.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
    \******************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppLayoutDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/layout/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/layout/dashboard/dashboard.component.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js"); //import { LoadingModule } from 'ngx-loading';


    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["RptModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], //  LoadingModule,
      _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_7__["NgxLoadingModule"].forRoot({
        animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_7__["ngxLoadingAnimationTypes"].wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff',
        secondaryColour: '#ffffff',
        tertiaryColour: '#ffffff'
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["RptModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], //  LoadingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_7__["NgxLoadingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["RptModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"], //  LoadingModule,
          _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_7__["NgxLoadingModule"].forRoot({
            animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_7__["ngxLoadingAnimationTypes"].wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
          })],
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map