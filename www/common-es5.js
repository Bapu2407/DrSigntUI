function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/BaseComponentDM.ts":
  /*!********************************!*\
    !*** ./src/BaseComponentDM.ts ***!
    \********************************/

  /*! exports provided: BaseComponentDM, getFormValidationErrors */

  /***/
  function srcBaseComponentDMTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseComponentDM", function () {
      return BaseComponentDM;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFormValidationErrors", function () {
      return getFormValidationErrors;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app/config */
    "./src/app/config.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

    var BaseComponentDM =
    /*#__PURE__*/
    function () {
      // showSideBar:boolean = false //Config.showSideBar
      function BaseComponentDM(router) {
        _classCallCheck(this, BaseComponentDM);

        this.router = router;
        this.user = {};
        this.mode = "add";
        this.pageSize = _app_config__WEBPACK_IMPORTED_MODULE_1__["Config"].RECORDSIZE;
        this.pageNo = 1;
        this.submitAttempt = false;
      }

      _createClass(BaseComponentDM, [{
        key: "closeModal",
        value: function closeModal() {
          if (this.modalReference) this.modalReference.close();
        }
      }, {
        key: "closeCustomModal",
        value: function closeCustomModal() {
          if (this.modalReferenceImage) this.modalReferenceImage.close();
        }
      }, {
        key: "closeCustomModal2",
        value: function closeCustomModal2() {
          if (this.modalReferencePrescriptionImage) this.modalReferencePrescriptionImage.close();
        }
      }, {
        key: "convertFromddmmyyy",
        value: function convertFromddmmyyy(date) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(date, "DD-MM-YYYY");
        }
      }, {
        key: "backTONgTImeFOrmat",
        value: function backTONgTImeFOrmat(time) {
          if (time && time != "") {
            console.log("time = " + JSON.stringify(time));
            var newTIme = time.split(" ");
            var newTImeTImePart = newTIme[0];
            var newTImeAmPmPart = newTIme[1];
            console.log("newTImeTImePart = " + newTImeTImePart);
            console.log("newTImeAmPmPart = " + newTImeAmPmPart);
            var ngTIme = {};
            var hourMinValue = newTImeTImePart.split(":");
            var hour = hourMinValue[0];
            var min = hourMinValue[1];
            hour = Number(hour);
            min = Number(min);
            console.log("hour = " + hour);
            console.log("min = " + min);

            if (newTImeAmPmPart && newTImeAmPmPart.trim() == "pm") {
              hour = hour + 12;
            }

            ngTIme['hour'] = Number(hour);
            ngTIme['minute'] = Number(min);
            ngTIme['second'] = 0;
            console.log("ngTIme = " + JSON.stringify(ngTIme));
            return ngTIme; //{"hour":10,"minute":30,"second":0}
          } else {
            return time;
          }
        }
      }, {
        key: "convertTimeFormogo",
        value: function convertTimeFormogo(time) {
          //":{"hour":22,"minute":20,"second":0}
          var hour = time['hour'];
          var min = time['minute'];
          var amPm = "am";

          if (hour >= 12) {
            hour = hour - 12;
            amPm = "pm";
          }

          if (hour == 24) {
            hour = hour - 24;
            amPm = "am";
          }

          return hour + ":" + min + " " + amPm;
        }
      }, {
        key: "fromJsDateToMongoDate",
        value: function fromJsDateToMongoDate(jsDate) {
          console.log(" jsDate =" + jsDate);
          var dateParts = jsDate.split(_app_config__WEBPACK_IMPORTED_MODULE_1__["Config"].dateDelimitor);
          console.log("before 1 add dateParts[0] =" + dateParts[0]);
          console.log("dateParts[1] =" + dateParts[1]);
          console.log(" dateParts[2] =" + dateParts[2]);
          return dateParts[2] + _app_config__WEBPACK_IMPORTED_MODULE_1__["Config"].dateDelimitor + dateParts[1] + _app_config__WEBPACK_IMPORTED_MODULE_1__["Config"].dateDelimitor + dateParts[0];
          /*let utcD =   Date.UTC(dateParts[2], dateParts[1] - 1, dateParts[0],
          0, 0, 0);
              // return new Date(utcD);
                var momentDate = moment(jsDate).format('YYYY-MM-DD[T00:00:00.000Z]')
          // return momentDate;
          return new Date(momentDate);
          */
        }
      }, {
        key: "fromJsDateToLocationdateTimeFormat",
        value: function fromJsDateToLocationdateTimeFormat(jsDate) {
          console.log(" jsDate =" + jsDate);
          var dateParts = jsDate.split(_app_config__WEBPACK_IMPORTED_MODULE_1__["Config"].dateDelimitor);
          console.log("before 1 add dateParts[0] =" + dateParts[0]);
          console.log("dateParts[1] =" + dateParts[1]);
          console.log(" dateParts[2] =" + dateParts[2]);
          return dateParts[2] + _app_config__WEBPACK_IMPORTED_MODULE_1__["Config"].dateDelimitor + dateParts[1] + _app_config__WEBPACK_IMPORTED_MODULE_1__["Config"].dateDelimitor + dateParts[0];
        }
      }, {
        key: "convertToHumanDate",
        value: function convertToHumanDate(dbDate) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(dbDate).format('DD-MMM-YYYY');
        }
      }, {
        key: "validateFields",
        value: function validateFields(controls) {
          var error = getFormValidationErrors(controls).shift();

          if (error) {
            var text;
            console.log("error.control_name == " + error.control_name);
            var controlName = error.control_name; //this.getText(error.

            console.log("controlName == " + controlName);

            switch (error.error_name) {
              case 'required':
                text = controlName + " is required!";
                break;

              case 'pattern':
                text = "".concat(error.control_name, " has wrong pattern!");
                break;

              case 'email':
                text = "".concat(error.control_name, " has wrong email format!");
                break;

              case 'minlength':
                text = "".concat(error.control_name, " has wrong length! Required length: ").concat(error.error_value.requiredLength);
                break;

              case 'areEqual':
                text = "".concat(error.control_name, " must be equal!");
                break;

              default:
                text = "".concat(error.control_name, ": ").concat(error.error_name, ": ").concat(error.error_value);
            }

            this.form_fill_failure_msg = text;
          }
        }
      }]);

      return BaseComponentDM;
    }();

    function getFormValidationErrors(controls) {
      var errors = [];
      Object.keys(controls).forEach(function (key) {
        var control = controls[key];
        console.log("key :==" + key);

        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
          errors = errors.concat(getFormValidationErrors(control.controls));
        }

        var controlErrors = controls[key].errors;

        if (controlErrors !== null) {
          Object.keys(controlErrors).forEach(function (keyError) {
            errors.push({
              control_name: key,
              error_name: keyError,
              error_value: controlErrors[keyError]
            });
          });
        }
      });
      return errors;
    }
    /***/

  },

  /***/
  "./src/app/router.animations.ts":
  /*!**************************************!*\
    !*** ./src/app/router.animations.ts ***!
    \**************************************/

  /*! exports provided: routerTransition, slideToRight */

  /***/
  function srcAppRouterAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routerTransition", function () {
      return routerTransition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideToRight", function () {
      return slideToRight;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    function routerTransition() {
      return slideToRight();
    }

    function slideToRight() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(100%)'
      }))])]);
    }
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map