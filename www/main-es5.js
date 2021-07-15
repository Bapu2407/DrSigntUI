function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/core-js/es/reflect/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/es/reflect/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsEsReflectIndexJs(module, exports, __webpack_require__) {
    __webpack_require__(
    /*! ../../modules/es.reflect.apply */
    "./node_modules/core-js/modules/es.reflect.apply.js");

    __webpack_require__(
    /*! ../../modules/es.reflect.construct */
    "./node_modules/core-js/modules/es.reflect.construct.js");

    __webpack_require__(
    /*! ../../modules/es.reflect.define-property */
    "./node_modules/core-js/modules/es.reflect.define-property.js");

    __webpack_require__(
    /*! ../../modules/es.reflect.delete-property */
    "./node_modules/core-js/modules/es.reflect.delete-property.js");

    __webpack_require__(
    /*! ../../modules/es.reflect.get */
    "./node_modules/core-js/modules/es.reflect.get.js");

    __webpack_require__(
    /*! ../../modules/es.reflect.get-own-property-descriptor */
    "./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js");

    __webpack_require__(
    /*! ../../modules/es.reflect.get-prototype-of */
    "./node_modules/core-js/modules/es.reflect.get-prototype-of.js");

    __webpack_require__(
    /*! ../../modules/es.reflect.has */
    "./node_modules/core-js/modules/es.reflect.has.js");

    __webpack_require__(
    /*! ../../modules/es.reflect.is-extensible */
    "./node_modules/core-js/modules/es.reflect.is-extensible.js");

    __webpack_require__(
    /*! ../../modules/es.reflect.own-keys */
    "./node_modules/core-js/modules/es.reflect.own-keys.js");

    __webpack_require__(
    /*! ../../modules/es.reflect.prevent-extensions */
    "./node_modules/core-js/modules/es.reflect.prevent-extensions.js");

    __webpack_require__(
    /*! ../../modules/es.reflect.set */
    "./node_modules/core-js/modules/es.reflect.set.js");

    __webpack_require__(
    /*! ../../modules/es.reflect.set-prototype-of */
    "./node_modules/core-js/modules/es.reflect.set-prototype-of.js");

    var path = __webpack_require__(
    /*! ../../internals/path */
    "./node_modules/core-js/internals/path.js");

    module.exports = path.Reflect;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/a-function.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/a-function.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAFunctionJs(module, exports) {
    module.exports = function (it) {
      if (typeof it != 'function') {
        throw TypeError(String(it) + ' is not a function');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/a-possible-prototype.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAPossiblePrototypeJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    module.exports = function (it) {
      if (!isObject(it) && it !== null) {
        throw TypeError("Can't set " + String(it) + ' as a prototype');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/an-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/an-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAnObjectJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    module.exports = function (it) {
      if (!isObject(it)) {
        throw TypeError(String(it) + ' is not an object');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/array-includes.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/array-includes.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayIncludesJs(module, exports, __webpack_require__) {
    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var toAbsoluteIndex = __webpack_require__(
    /*! ../internals/to-absolute-index */
    "./node_modules/core-js/internals/to-absolute-index.js"); // `Array.prototype.{ indexOf, includes }` methods implementation


    var createMethod = function createMethod(IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value; // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare

        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++]; // eslint-disable-next-line no-self-compare

          if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
        } else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };

    module.exports = {
      // `Array.prototype.includes` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/classof-raw.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/classof-raw.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsClassofRawJs(module, exports) {
    var toString = {}.toString;

    module.exports = function (it) {
      return toString.call(it).slice(8, -1);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/copy-constructor-properties.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCopyConstructorPropertiesJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var ownKeys = __webpack_require__(
    /*! ../internals/own-keys */
    "./node_modules/core-js/internals/own-keys.js");

    var getOwnPropertyDescriptorModule = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    module.exports = function (target, source) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/correct-prototype-getter.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCorrectPrototypeGetterJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    module.exports = !fails(function () {
      function F() {
        /* empty */
      }

      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/create-non-enumerable-property.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreateNonEnumerablePropertyJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js/internals/create-property-descriptor.js");

    module.exports = DESCRIPTORS ? function (object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/create-property-descriptor.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreatePropertyDescriptorJs(module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/descriptors.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/descriptors.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDescriptorsJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js"); // Thank's IE8 for his funny defineProperty


    module.exports = !fails(function () {
      return Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1] != 7;
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/document-create-element.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/document-create-element.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDocumentCreateElementJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var document = global.document; // typeof document.createElement is 'object' in old IE

    var EXISTS = isObject(document) && isObject(document.createElement);

    module.exports = function (it) {
      return EXISTS ? document.createElement(it) : {};
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/enum-bug-keys.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsEnumBugKeysJs(module, exports) {
    // IE8- don't enum bug keys
    module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
    /***/
  },

  /***/
  "./node_modules/core-js/internals/export.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/export.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsExportJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var getOwnPropertyDescriptor = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js/internals/redefine.js");

    var setGlobal = __webpack_require__(
    /*! ../internals/set-global */
    "./node_modules/core-js/internals/set-global.js");

    var copyConstructorProperties = __webpack_require__(
    /*! ../internals/copy-constructor-properties */
    "./node_modules/core-js/internals/copy-constructor-properties.js");

    var isForced = __webpack_require__(
    /*! ../internals/is-forced */
    "./node_modules/core-js/internals/is-forced.js");
    /*
      options.target      - name of the target object
      options.global      - target is the global object
      options.stat        - export as static methods of target
      options.proto       - export as prototype methods of target
      options.real        - real prototype method for the `pure` version
      options.forced      - export even if the native feature is available
      options.bind        - bind methods to the target, required for the `pure` version
      options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
      options.unsafe      - use the simple assignment of property instead of delete + defineProperty
      options.sham        - add a flag to not completely full polyfills
      options.enumerable  - export as enumerable property
      options.noTargetGet - prevent calling a getter on target
    */


    module.exports = function (options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;

      if (GLOBAL) {
        target = global;
      } else if (STATIC) {
        target = global[TARGET] || setGlobal(TARGET, {});
      } else {
        target = (global[TARGET] || {}).prototype;
      }

      if (target) for (key in source) {
        sourceProperty = source[key];

        if (options.noTargetGet) {
          descriptor = getOwnPropertyDescriptor(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];

        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

        if (!FORCED && targetProperty !== undefined) {
          if (typeof sourceProperty === typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        } // add a flag to not completely full polyfills


        if (options.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(sourceProperty, 'sham', true);
        } // extend global


        redefine(target, key, sourceProperty, options);
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/fails.js":
  /*!*************************************************!*\
    !*** ./node_modules/core-js/internals/fails.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsFailsJs(module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/freezing.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/freezing.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsFreezingJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    module.exports = !fails(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/function-bind.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/function-bind.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsFunctionBindJs(module, exports, __webpack_require__) {
    "use strict";

    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js/internals/a-function.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var slice = [].slice;
    var factories = {};

    var construct = function construct(C, argsLength, args) {
      if (!(argsLength in factories)) {
        for (var list = [], i = 0; i < argsLength; i++) {
          list[i] = 'a[' + i + ']';
        } // eslint-disable-next-line no-new-func


        factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
      }

      return factories[argsLength](C, args);
    }; // `Function.prototype.bind` method implementation
    // https://tc39.github.io/ecma262/#sec-function.prototype.bind


    module.exports = Function.bind || function bind(that
    /* , ...args */
    ) {
      var fn = aFunction(this);
      var partArgs = slice.call(arguments, 1);

      var boundFunction = function bound()
      /* args... */
      {
        var args = partArgs.concat(slice.call(arguments));
        return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
      };

      if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
      return boundFunction;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/get-built-in.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/get-built-in.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsGetBuiltInJs(module, exports, __webpack_require__) {
    var path = __webpack_require__(
    /*! ../internals/path */
    "./node_modules/core-js/internals/path.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var aFunction = function aFunction(variable) {
      return typeof variable == 'function' ? variable : undefined;
    };

    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/global.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/global.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsGlobalJs(module, exports) {
    var check = function check(it) {
      return it && it.Math == Math && it;
    }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


    module.exports = // eslint-disable-next-line no-undef
    check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func
    Function('return this')();
    /***/
  },

  /***/
  "./node_modules/core-js/internals/has.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/internals/has.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHasJs(module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;

    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/hidden-keys.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/hidden-keys.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHiddenKeysJs(module, exports) {
    module.exports = {};
    /***/
  },

  /***/
  "./node_modules/core-js/internals/html.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/internals/html.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHtmlJs(module, exports, __webpack_require__) {
    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js/internals/get-built-in.js");

    module.exports = getBuiltIn('document', 'documentElement');
    /***/
  },

  /***/
  "./node_modules/core-js/internals/ie8-dom-define.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIe8DomDefineJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var createElement = __webpack_require__(
    /*! ../internals/document-create-element */
    "./node_modules/core-js/internals/document-create-element.js"); // Thank's IE8 for his funny defineProperty


    module.exports = !DESCRIPTORS && !fails(function () {
      return Object.defineProperty(createElement('div'), 'a', {
        get: function get() {
          return 7;
        }
      }).a != 7;
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/indexed-object.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/indexed-object.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIndexedObjectJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js/internals/classof-raw.js");

    var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

    module.exports = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins
      return !Object('z').propertyIsEnumerable(0);
    }) ? function (it) {
      return classof(it) == 'String' ? split.call(it, '') : Object(it);
    } : Object;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/inspect-source.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/inspect-source.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsInspectSourceJs(module, exports, __webpack_require__) {
    var store = __webpack_require__(
    /*! ../internals/shared-store */
    "./node_modules/core-js/internals/shared-store.js");

    var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

    if (typeof store.inspectSource != 'function') {
      store.inspectSource = function (it) {
        return functionToString.call(it);
      };
    }

    module.exports = store.inspectSource;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/internal-state.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/internal-state.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsInternalStateJs(module, exports, __webpack_require__) {
    var NATIVE_WEAK_MAP = __webpack_require__(
    /*! ../internals/native-weak-map */
    "./node_modules/core-js/internals/native-weak-map.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var objectHas = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js/internals/shared-key.js");

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js/internals/hidden-keys.js");

    var WeakMap = global.WeakMap;
    var set, get, has;

    var enforce = function enforce(it) {
      return has(it) ? get(it) : set(it, {});
    };

    var getterFor = function getterFor(TYPE) {
      return function (it) {
        var state;

        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        }

        return state;
      };
    };

    if (NATIVE_WEAK_MAP) {
      var store = new WeakMap();
      var wmget = store.get;
      var wmhas = store.has;
      var wmset = store.set;

      set = function set(it, metadata) {
        wmset.call(store, it, metadata);
        return metadata;
      };

      get = function get(it) {
        return wmget.call(store, it) || {};
      };

      has = function has(it) {
        return wmhas.call(store, it);
      };
    } else {
      var STATE = sharedKey('state');
      hiddenKeys[STATE] = true;

      set = function set(it, metadata) {
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };

      get = function get(it) {
        return objectHas(it, STATE) ? it[STATE] : {};
      };

      has = function has(it) {
        return objectHas(it, STATE);
      };
    }

    module.exports = {
      set: set,
      get: get,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-forced.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/is-forced.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsForcedJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var replacement = /#|\.prototype\./;

    var isForced = function isForced(feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
    };

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase();
    };

    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = 'N';
    var POLYFILL = isForced.POLYFILL = 'P';
    module.exports = isForced;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/is-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsObjectJs(module, exports) {
    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/is-pure.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/internals/is-pure.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsPureJs(module, exports) {
    module.exports = false;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/native-weak-map.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/native-weak-map.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsNativeWeakMapJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var inspectSource = __webpack_require__(
    /*! ../internals/inspect-source */
    "./node_modules/core-js/internals/inspect-source.js");

    var WeakMap = global.WeakMap;
    module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-create.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/object-create.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectCreateJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var defineProperties = __webpack_require__(
    /*! ../internals/object-define-properties */
    "./node_modules/core-js/internals/object-define-properties.js");

    var enumBugKeys = __webpack_require__(
    /*! ../internals/enum-bug-keys */
    "./node_modules/core-js/internals/enum-bug-keys.js");

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js/internals/hidden-keys.js");

    var html = __webpack_require__(
    /*! ../internals/html */
    "./node_modules/core-js/internals/html.js");

    var documentCreateElement = __webpack_require__(
    /*! ../internals/document-create-element */
    "./node_modules/core-js/internals/document-create-element.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js/internals/shared-key.js");

    var GT = '>';
    var LT = '<';
    var PROTOTYPE = 'prototype';
    var SCRIPT = 'script';
    var IE_PROTO = sharedKey('IE_PROTO');

    var EmptyConstructor = function EmptyConstructor() {
      /* empty */
    };

    var scriptTag = function scriptTag(content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
    }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


    var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
      activeXDocument.write(scriptTag(''));
      activeXDocument.close();
      var temp = activeXDocument.parentWindow.Object;
      activeXDocument = null; // avoid memory leak

      return temp;
    }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


    var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = documentCreateElement('iframe');
      var JS = 'java' + SCRIPT + ':';
      var iframeDocument;
      iframe.style.display = 'none';
      html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag('document.F=Object'));
      iframeDocument.close();
      return iframeDocument.F;
    }; // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    // avoid IE GC bug


    var activeXDocument;

    var _NullProtoObject = function NullProtoObject() {
      try {
        /* global ActiveXObject */
        activeXDocument = document.domain && new ActiveXObject('htmlfile');
      } catch (error) {
        /* ignore */
      }

      _NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
      var length = enumBugKeys.length;

      while (length--) {
        delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      }

      return _NullProtoObject();
    };

    hiddenKeys[IE_PROTO] = true; // `Object.create` method
    // https://tc39.github.io/ecma262/#sec-object.create

    module.exports = Object.create || function create(O, Properties) {
      var result;

      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

        result[IE_PROTO] = O;
      } else result = _NullProtoObject();

      return Properties === undefined ? result : defineProperties(result, Properties);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-define-properties.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/object-define-properties.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectDefinePropertiesJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var objectKeys = __webpack_require__(
    /*! ../internals/object-keys */
    "./node_modules/core-js/internals/object-keys.js"); // `Object.defineProperties` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperties


    module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;

      while (length > index) {
        definePropertyModule.f(O, key = keys[index++], Properties[key]);
      }

      return O;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-define-property.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js/internals/object-define-property.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectDefinePropertyJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var IE8_DOM_DEFINE = __webpack_require__(
    /*! ../internals/ie8-dom-define */
    "./node_modules/core-js/internals/ie8-dom-define.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js/internals/to-primitive.js");

    var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperty

    exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return nativeDefineProperty(O, P, Attributes);
      } catch (error) {
        /* empty */
      }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertyDescriptorJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var propertyIsEnumerableModule = __webpack_require__(
    /*! ../internals/object-property-is-enumerable */
    "./node_modules/core-js/internals/object-property-is-enumerable.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js/internals/create-property-descriptor.js");

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js/internals/to-primitive.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var IE8_DOM_DEFINE = __webpack_require__(
    /*! ../internals/ie8-dom-define */
    "./node_modules/core-js/internals/ie8-dom-define.js");

    var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

    exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE) try {
        return nativeGetOwnPropertyDescriptor(O, P);
      } catch (error) {
        /* empty */
      }
      if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-names.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertyNamesJs(module, exports, __webpack_require__) {
    var internalObjectKeys = __webpack_require__(
    /*! ../internals/object-keys-internal */
    "./node_modules/core-js/internals/object-keys-internal.js");

    var enumBugKeys = __webpack_require__(
    /*! ../internals/enum-bug-keys */
    "./node_modules/core-js/internals/enum-bug-keys.js");

    var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertynames

    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-symbols.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertySymbolsJs(module, exports) {
    exports.f = Object.getOwnPropertySymbols;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-prototype-of.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetPrototypeOfJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js/internals/shared-key.js");

    var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
    /*! ../internals/correct-prototype-getter */
    "./node_modules/core-js/internals/correct-prototype-getter.js");

    var IE_PROTO = sharedKey('IE_PROTO');
    var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-object.getprototypeof

    module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
      O = toObject(O);
      if (has(O, IE_PROTO)) return O[IE_PROTO];

      if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
      }

      return O instanceof Object ? ObjectPrototype : null;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-keys-internal.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectKeysInternalJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var indexOf = __webpack_require__(
    /*! ../internals/array-includes */
    "./node_modules/core-js/internals/array-includes.js").indexOf;

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js/internals/hidden-keys.js");

    module.exports = function (object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;

      for (key in O) {
        !has(hiddenKeys, key) && has(O, key) && result.push(key);
      } // Don't enum bug & hidden keys


      while (names.length > i) {
        if (has(O, key = names[i++])) {
          ~indexOf(result, key) || result.push(key);
        }
      }

      return result;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-keys.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/object-keys.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectKeysJs(module, exports, __webpack_require__) {
    var internalObjectKeys = __webpack_require__(
    /*! ../internals/object-keys-internal */
    "./node_modules/core-js/internals/object-keys-internal.js");

    var enumBugKeys = __webpack_require__(
    /*! ../internals/enum-bug-keys */
    "./node_modules/core-js/internals/enum-bug-keys.js"); // `Object.keys` method
    // https://tc39.github.io/ecma262/#sec-object.keys


    module.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-property-is-enumerable.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectPropertyIsEnumerableJs(module, exports, __webpack_require__) {
    "use strict";

    var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

    var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
      1: 2
    }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : nativePropertyIsEnumerable;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-set-prototype-of.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectSetPrototypeOfJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var aPossiblePrototype = __webpack_require__(
    /*! ../internals/a-possible-prototype */
    "./node_modules/core-js/internals/a-possible-prototype.js"); // `Object.setPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-object.setprototypeof
    // Works with __proto__ only. Old v8 can't work with null proto objects.

    /* eslint-disable no-proto */


    module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;

      try {
        setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
        setter.call(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) {
        /* empty */
      }

      return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
        return O;
      };
    }() : undefined);
    /***/
  },

  /***/
  "./node_modules/core-js/internals/own-keys.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/own-keys.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsOwnKeysJs(module, exports, __webpack_require__) {
    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js/internals/get-built-in.js");

    var getOwnPropertyNamesModule = __webpack_require__(
    /*! ../internals/object-get-own-property-names */
    "./node_modules/core-js/internals/object-get-own-property-names.js");

    var getOwnPropertySymbolsModule = __webpack_require__(
    /*! ../internals/object-get-own-property-symbols */
    "./node_modules/core-js/internals/object-get-own-property-symbols.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js"); // all object keys, includes non-enumerable and symbols


    module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/path.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/internals/path.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsPathJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    module.exports = global;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/redefine.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/redefine.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRedefineJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var setGlobal = __webpack_require__(
    /*! ../internals/set-global */
    "./node_modules/core-js/internals/set-global.js");

    var inspectSource = __webpack_require__(
    /*! ../internals/inspect-source */
    "./node_modules/core-js/internals/inspect-source.js");

    var InternalStateModule = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js/internals/internal-state.js");

    var getInternalState = InternalStateModule.get;
    var enforceInternalState = InternalStateModule.enforce;
    var TEMPLATE = String(String).split('String');
    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;

      if (typeof value == 'function') {
        if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
        enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }

      if (O === global) {
        if (simple) O[key] = value;else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }

      if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/require-object-coercible.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRequireObjectCoercibleJs(module, exports) {
    // `RequireObjectCoercible` abstract operation
    // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on " + it);
      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/set-global.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/set-global.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSetGlobalJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var createNonEnumerableProperty = __webpack_require__(
    /*! ../internals/create-non-enumerable-property */
    "./node_modules/core-js/internals/create-non-enumerable-property.js");

    module.exports = function (key, value) {
      try {
        createNonEnumerableProperty(global, key, value);
      } catch (error) {
        global[key] = value;
      }

      return value;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/shared-key.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/shared-key.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSharedKeyJs(module, exports, __webpack_require__) {
    var shared = __webpack_require__(
    /*! ../internals/shared */
    "./node_modules/core-js/internals/shared.js");

    var uid = __webpack_require__(
    /*! ../internals/uid */
    "./node_modules/core-js/internals/uid.js");

    var keys = shared('keys');

    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/shared-store.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/shared-store.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSharedStoreJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var setGlobal = __webpack_require__(
    /*! ../internals/set-global */
    "./node_modules/core-js/internals/set-global.js");

    var SHARED = '__core-js_shared__';
    var store = global[SHARED] || setGlobal(SHARED, {});
    module.exports = store;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/shared.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/shared.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSharedJs(module, exports, __webpack_require__) {
    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js/internals/is-pure.js");

    var store = __webpack_require__(
    /*! ../internals/shared-store */
    "./node_modules/core-js/internals/shared-store.js");

    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.6.5',
      mode: IS_PURE ? 'pure' : 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/to-absolute-index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToAbsoluteIndexJs(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js/internals/to-integer.js");

    var max = Math.max;
    var min = Math.min; // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

    module.exports = function (index, length) {
      var integer = toInteger(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-indexed-object.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToIndexedObjectJs(module, exports, __webpack_require__) {
    // toObject with fallback for non-array-like ES3 strings
    var IndexedObject = __webpack_require__(
    /*! ../internals/indexed-object */
    "./node_modules/core-js/internals/indexed-object.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js");

    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-integer.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/to-integer.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToIntegerJs(module, exports) {
    var ceil = Math.ceil;
    var floor = Math.floor; // `ToInteger` abstract operation
    // https://tc39.github.io/ecma262/#sec-tointeger

    module.exports = function (argument) {
      return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-length.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/to-length.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToLengthJs(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js/internals/to-integer.js");

    var min = Math.min; // `ToLength` abstract operation
    // https://tc39.github.io/ecma262/#sec-tolength

    module.exports = function (argument) {
      return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/to-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToObjectJs(module, exports, __webpack_require__) {
    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js"); // `ToObject` abstract operation
    // https://tc39.github.io/ecma262/#sec-toobject


    module.exports = function (argument) {
      return Object(requireObjectCoercible(argument));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-primitive.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/to-primitive.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToPrimitiveJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js"); // `ToPrimitive` abstract operation
    // https://tc39.github.io/ecma262/#sec-toprimitive
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string


    module.exports = function (input, PREFERRED_STRING) {
      if (!isObject(input)) return input;
      var fn, val;
      if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
      if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
      if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
      throw TypeError("Can't convert object to primitive value");
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/uid.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/internals/uid.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsUidJs(module, exports) {
    var id = 0;
    var postfix = Math.random();

    module.exports = function (key) {
      return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/es.reflect.apply.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/modules/es.reflect.apply.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsReflectApplyJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js/internals/get-built-in.js");

    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js/internals/a-function.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var nativeApply = getBuiltIn('Reflect', 'apply');
    var functionApply = Function.apply; // MS Edge argumentsList argument is optional

    var OPTIONAL_ARGUMENTS_LIST = !fails(function () {
      nativeApply(function () {
        /* empty */
      });
    }); // `Reflect.apply` method
    // https://tc39.github.io/ecma262/#sec-reflect.apply

    $({
      target: 'Reflect',
      stat: true,
      forced: OPTIONAL_ARGUMENTS_LIST
    }, {
      apply: function apply(target, thisArgument, argumentsList) {
        aFunction(target);
        anObject(argumentsList);
        return nativeApply ? nativeApply(target, thisArgument, argumentsList) : functionApply.call(target, thisArgument, argumentsList);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.reflect.construct.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/modules/es.reflect.construct.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsReflectConstructJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js/internals/get-built-in.js");

    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js/internals/a-function.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var create = __webpack_require__(
    /*! ../internals/object-create */
    "./node_modules/core-js/internals/object-create.js");

    var bind = __webpack_require__(
    /*! ../internals/function-bind */
    "./node_modules/core-js/internals/function-bind.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var nativeConstruct = getBuiltIn('Reflect', 'construct'); // `Reflect.construct` method
    // https://tc39.github.io/ecma262/#sec-reflect.construct
    // MS Edge supports only 2 arguments and argumentsList argument is optional
    // FF Nightly sets third argument as `new.target`, but does not create `this` from it

    var NEW_TARGET_BUG = fails(function () {
      function F() {
        /* empty */
      }

      return !(nativeConstruct(function () {
        /* empty */
      }, [], F) instanceof F);
    });
    var ARGS_BUG = !fails(function () {
      nativeConstruct(function () {
        /* empty */
      });
    });
    var FORCED = NEW_TARGET_BUG || ARGS_BUG;
    $({
      target: 'Reflect',
      stat: true,
      forced: FORCED,
      sham: FORCED
    }, {
      construct: function construct(Target, args
      /* , newTarget */
      ) {
        aFunction(Target);
        anObject(args);
        var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);

        if (Target == newTarget) {
          // w/o altered newTarget, optimization for 0-4 arguments
          switch (args.length) {
            case 0:
              return new Target();

            case 1:
              return new Target(args[0]);

            case 2:
              return new Target(args[0], args[1]);

            case 3:
              return new Target(args[0], args[1], args[2]);

            case 4:
              return new Target(args[0], args[1], args[2], args[3]);
          } // w/o altered newTarget, lot of arguments case


          var $args = [null];
          $args.push.apply($args, args);
          return new (bind.apply(Target, $args))();
        } // with altered newTarget, not support built-in constructors


        var proto = newTarget.prototype;
        var instance = create(isObject(proto) ? proto : Object.prototype);
        var result = Function.apply.call(Target, instance, args);
        return isObject(result) ? result : instance;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.reflect.define-property.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/modules/es.reflect.define-property.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsReflectDefinePropertyJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js/internals/to-primitive.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js"); // MS Edge has broken Reflect.defineProperty - throwing instead of returning false


    var ERROR_INSTEAD_OF_FALSE = fails(function () {
      // eslint-disable-next-line no-undef
      Reflect.defineProperty(definePropertyModule.f({}, 1, {
        value: 1
      }), 1, {
        value: 2
      });
    }); // `Reflect.defineProperty` method
    // https://tc39.github.io/ecma262/#sec-reflect.defineproperty

    $({
      target: 'Reflect',
      stat: true,
      forced: ERROR_INSTEAD_OF_FALSE,
      sham: !DESCRIPTORS
    }, {
      defineProperty: function defineProperty(target, propertyKey, attributes) {
        anObject(target);
        var key = toPrimitive(propertyKey, true);
        anObject(attributes);

        try {
          definePropertyModule.f(target, key, attributes);
          return true;
        } catch (error) {
          return false;
        }
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.reflect.delete-property.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/modules/es.reflect.delete-property.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsReflectDeletePropertyJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var getOwnPropertyDescriptor = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f; // `Reflect.deleteProperty` method
    // https://tc39.github.io/ecma262/#sec-reflect.deleteproperty


    $({
      target: 'Reflect',
      stat: true
    }, {
      deleteProperty: function deleteProperty(target, propertyKey) {
        var descriptor = getOwnPropertyDescriptor(anObject(target), propertyKey);
        return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js ***!
    \********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsReflectGetOwnPropertyDescriptorJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var getOwnPropertyDescriptorModule = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js"); // `Reflect.getOwnPropertyDescriptor` method
    // https://tc39.github.io/ecma262/#sec-reflect.getownpropertydescriptor


    $({
      target: 'Reflect',
      stat: true,
      sham: !DESCRIPTORS
    }, {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.reflect.get-prototype-of.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js/modules/es.reflect.get-prototype-of.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsReflectGetPrototypeOfJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var objectGetPrototypeOf = __webpack_require__(
    /*! ../internals/object-get-prototype-of */
    "./node_modules/core-js/internals/object-get-prototype-of.js");

    var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
    /*! ../internals/correct-prototype-getter */
    "./node_modules/core-js/internals/correct-prototype-getter.js"); // `Reflect.getPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-reflect.getprototypeof


    $({
      target: 'Reflect',
      stat: true,
      sham: !CORRECT_PROTOTYPE_GETTER
    }, {
      getPrototypeOf: function getPrototypeOf(target) {
        return objectGetPrototypeOf(anObject(target));
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.reflect.get.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/es.reflect.get.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsReflectGetJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var getOwnPropertyDescriptorModule = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js");

    var getPrototypeOf = __webpack_require__(
    /*! ../internals/object-get-prototype-of */
    "./node_modules/core-js/internals/object-get-prototype-of.js"); // `Reflect.get` method
    // https://tc39.github.io/ecma262/#sec-reflect.get


    function get(target, propertyKey
    /* , receiver */
    ) {
      var receiver = arguments.length < 3 ? target : arguments[2];
      var descriptor, prototype;
      if (anObject(target) === receiver) return target[propertyKey];
      if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) return has(descriptor, 'value') ? descriptor.value : descriptor.get === undefined ? undefined : descriptor.get.call(receiver);
      if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
    }

    $({
      target: 'Reflect',
      stat: true
    }, {
      get: get
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.reflect.has.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/es.reflect.has.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsReflectHasJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js"); // `Reflect.has` method
    // https://tc39.github.io/ecma262/#sec-reflect.has


    $({
      target: 'Reflect',
      stat: true
    }, {
      has: function has(target, propertyKey) {
        return propertyKey in target;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.reflect.is-extensible.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js/modules/es.reflect.is-extensible.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsReflectIsExtensibleJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var objectIsExtensible = Object.isExtensible; // `Reflect.isExtensible` method
    // https://tc39.github.io/ecma262/#sec-reflect.isextensible

    $({
      target: 'Reflect',
      stat: true
    }, {
      isExtensible: function isExtensible(target) {
        anObject(target);
        return objectIsExtensible ? objectIsExtensible(target) : true;
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.reflect.own-keys.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/modules/es.reflect.own-keys.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsReflectOwnKeysJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var ownKeys = __webpack_require__(
    /*! ../internals/own-keys */
    "./node_modules/core-js/internals/own-keys.js"); // `Reflect.ownKeys` method
    // https://tc39.github.io/ecma262/#sec-reflect.ownkeys


    $({
      target: 'Reflect',
      stat: true
    }, {
      ownKeys: ownKeys
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.reflect.prevent-extensions.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js/modules/es.reflect.prevent-extensions.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsReflectPreventExtensionsJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js/internals/get-built-in.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var FREEZING = __webpack_require__(
    /*! ../internals/freezing */
    "./node_modules/core-js/internals/freezing.js"); // `Reflect.preventExtensions` method
    // https://tc39.github.io/ecma262/#sec-reflect.preventextensions


    $({
      target: 'Reflect',
      stat: true,
      sham: !FREEZING
    }, {
      preventExtensions: function preventExtensions(target) {
        anObject(target);

        try {
          var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');
          if (objectPreventExtensions) objectPreventExtensions(target);
          return true;
        } catch (error) {
          return false;
        }
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.reflect.set-prototype-of.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/core-js/modules/es.reflect.set-prototype-of.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsReflectSetPrototypeOfJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var aPossiblePrototype = __webpack_require__(
    /*! ../internals/a-possible-prototype */
    "./node_modules/core-js/internals/a-possible-prototype.js");

    var objectSetPrototypeOf = __webpack_require__(
    /*! ../internals/object-set-prototype-of */
    "./node_modules/core-js/internals/object-set-prototype-of.js"); // `Reflect.setPrototypeOf` method
    // https://tc39.github.io/ecma262/#sec-reflect.setprototypeof


    if (objectSetPrototypeOf) $({
      target: 'Reflect',
      stat: true
    }, {
      setPrototypeOf: function setPrototypeOf(target, proto) {
        anObject(target);
        aPossiblePrototype(proto);

        try {
          objectSetPrototypeOf(target, proto);
          return true;
        } catch (error) {
          return false;
        }
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.reflect.set.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/modules/es.reflect.set.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsReflectSetJs(module, exports, __webpack_require__) {
    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var getOwnPropertyDescriptorModule = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js");

    var getPrototypeOf = __webpack_require__(
    /*! ../internals/object-get-prototype-of */
    "./node_modules/core-js/internals/object-get-prototype-of.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js/internals/create-property-descriptor.js"); // `Reflect.set` method
    // https://tc39.github.io/ecma262/#sec-reflect.set


    function set(target, propertyKey, V
    /* , receiver */
    ) {
      var receiver = arguments.length < 4 ? target : arguments[3];
      var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject(target), propertyKey);
      var existingDescriptor, prototype;

      if (!ownDescriptor) {
        if (isObject(prototype = getPrototypeOf(target))) {
          return set(prototype, propertyKey, V, receiver);
        }

        ownDescriptor = createPropertyDescriptor(0);
      }

      if (has(ownDescriptor, 'value')) {
        if (ownDescriptor.writable === false || !isObject(receiver)) return false;

        if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
          if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
          existingDescriptor.value = V;
          definePropertyModule.f(receiver, propertyKey, existingDescriptor);
        } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor(0, V));

        return true;
      }

      return ownDescriptor.set === undefined ? false : (ownDescriptor.set.call(receiver, V), true);
    } // MS Edge 17-18 Reflect.set allows setting the property to object
    // with non-writable property on the prototype


    var MS_EDGE_BUG = fails(function () {
      var object = definePropertyModule.f({}, 'a', {
        configurable: true
      }); // eslint-disable-next-line no-undef

      return Reflect.set(getPrototypeOf(object), 'a', 1, object) !== false;
    });
    $({
      target: 'Reflect',
      stat: true,
      forced: MS_EDGE_BUG
    }, {
      set: set
    });
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/zone.js/dist/zone-evergreen.js":
  /*!*****************************************************!*\
    !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesZoneJsDistZoneEvergreenJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /**
    * @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
    * (c) 2010-2020 Google LLC. https://angular.io/
    * License: MIT
    */


    (function (factory) {
      true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })(function () {
      'use strict';
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var Zone$1 = function (global) {
        var performance = global['performance'];

        function mark(name) {
          performance && performance['mark'] && performance['mark'](name);
        }

        function performanceMeasure(name, label) {
          performance && performance['measure'] && performance['measure'](name, label);
        }

        mark('Zone'); // Initialize before it's accessed below.
        // __Zone_symbol_prefix global can be used to override the default zone
        // symbol prefix with a custom one if needed.

        var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

        function __symbol__(name) {
          return symbolPrefix + name;
        }

        var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

        if (global['Zone']) {
          // if global['Zone'] already exists (maybe zone.js was already loaded or
          // some other lib also registered a global object named Zone), we may need
          // to throw an error, but sometimes user may not want this error.
          // For example,
          // we have two web pages, page1 includes zone.js, page2 doesn't.
          // and the 1st time user load page1 and page2, everything work fine,
          // but when user load page2 again, error occurs because global['Zone'] already exists.
          // so we add a flag to let user choose whether to throw this error or not.
          // By default, if existing Zone is from zone.js, we will not throw the error.
          if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
          } else {
            return global['Zone'];
          }
        }

        var Zone =
        /*#__PURE__*/
        function () {
          function Zone(parent, zoneSpec) {
            _classCallCheck(this, Zone);

            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
          }

          _createClass(Zone, [{
            key: "get",
            value: function get(key) {
              var zone = this.getZoneWith(key);
              if (zone) return zone._properties[key];
            }
          }, {
            key: "getZoneWith",
            value: function getZoneWith(key) {
              var current = this;

              while (current) {
                if (current._properties.hasOwnProperty(key)) {
                  return current;
                }

                current = current._parent;
              }

              return null;
            }
          }, {
            key: "fork",
            value: function fork(zoneSpec) {
              if (!zoneSpec) throw new Error('ZoneSpec required!');
              return this._zoneDelegate.fork(this, zoneSpec);
            }
          }, {
            key: "wrap",
            value: function wrap(callback, source) {
              if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
              }

              var _callback = this._zoneDelegate.intercept(this, callback, source);

              var zone = this;
              return function () {
                return zone.runGuarded(_callback, this, arguments, source);
              };
            }
          }, {
            key: "run",
            value: function run(callback, applyThis, applyArgs, source) {
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runGuarded",
            value: function runGuarded(callback) {
              var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
              var source = arguments.length > 3 ? arguments[3] : undefined;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                try {
                  return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runTask",
            value: function runTask(task, applyThis, applyArgs) {
              if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
              } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
              // will run in notScheduled(canceled) state, we should not try to
              // run such kind of task but just return


              if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
              }

              var reEntryGuard = task.state != running;
              reEntryGuard && task._transitionTo(running, scheduled);
              task.runCount++;
              var previousTask = _currentTask;
              _currentTask = task;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                  task.cancelFn = undefined;
                }

                try {
                  return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                  if (task.type == eventTask || task.data && task.data.isPeriodic) {
                    reEntryGuard && task._transitionTo(scheduled, running);
                  } else {
                    task.runCount = 0;

                    this._updateTaskCount(task, -1);

                    reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                  }
                }

                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
              }
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(task) {
              if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;

                while (newZone) {
                  if (newZone === task.zone) {
                    throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
                  }

                  newZone = newZone.parent;
                }
              }

              task._transitionTo(scheduling, notScheduled);

              var zoneDelegates = [];
              task._zoneDelegates = zoneDelegates;
              task._zone = this;

              try {
                task = this._zoneDelegate.scheduleTask(this, task);
              } catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
              }

              if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
              }

              return task;
            }
          }, {
            key: "scheduleMicroTask",
            value: function scheduleMicroTask(source, callback, data, customSchedule) {
              return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
            }
          }, {
            key: "scheduleMacroTask",
            value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "scheduleEventTask",
            value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(task) {
              if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

              task._transitionTo(canceling, scheduled, running);

              try {
                this._zoneDelegate.cancelTask(this, task);
              } catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);

                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              this._updateTaskCount(task, -1);

              task._transitionTo(notScheduled, canceling);

              task.runCount = 0;
              return task;
            }
          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(task, count) {
              var zoneDelegates = task._zoneDelegates;

              if (count == -1) {
                task._zoneDelegates = null;
              }

              for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
              }
            }
          }, {
            key: "parent",
            get: function get() {
              return this._parent;
            }
          }, {
            key: "name",
            get: function get() {
              return this._name;
            }
          }], [{
            key: "assertZonePatched",
            value: function assertZonePatched() {
              if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
              }
            }
          }, {
            key: "__load_patch",
            // tslint:disable-next-line:require-internal-with-underscore
            value: function __load_patch(name, fn) {
              if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                  throw Error('Already loaded patch: ' + name);
                }
              } else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
              }
            }
          }, {
            key: "root",
            get: function get() {
              var zone = Zone.current;

              while (zone.parent) {
                zone = zone.parent;
              }

              return zone;
            }
          }, {
            key: "current",
            get: function get() {
              return _currentZoneFrame.zone;
            }
          }, {
            key: "currentTask",
            get: function get() {
              return _currentTask;
            }
          }]);

          return Zone;
        }(); // tslint:disable-next-line:require-internal-with-underscore


        Zone.__symbol__ = __symbol__;
        var DELEGATE_ZS = {
          name: '',
          onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
          },
          onScheduleTask: function onScheduleTask(delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
          },
          onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
          },
          onCancelTask: function onCancelTask(delegate, _, target, task) {
            return delegate.cancelTask(target, task);
          }
        };

        var ZoneDelegate =
        /*#__PURE__*/
        function () {
          function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            _classCallCheck(this, ZoneDelegate);

            this._taskCounts = {
              'microTask': 0,
              'macroTask': 0,
              'eventTask': 0
            };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

            if (zoneSpecHasTask || parentHasTask) {
              // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
              // a case all task related interceptors must go through this ZD. We can't short circuit it.
              this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
              this._hasTaskDlgt = parentDelegate;
              this._hasTaskDlgtOwner = this;
              this._hasTaskCurrZone = zone;

              if (!zoneSpec.onScheduleTask) {
                this._scheduleTaskZS = DELEGATE_ZS;
                this._scheduleTaskDlgt = parentDelegate;
                this._scheduleTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onInvokeTask) {
                this._invokeTaskZS = DELEGATE_ZS;
                this._invokeTaskDlgt = parentDelegate;
                this._invokeTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onCancelTask) {
                this._cancelTaskZS = DELEGATE_ZS;
                this._cancelTaskDlgt = parentDelegate;
                this._cancelTaskCurrZone = this.zone;
              }
            }
          }

          _createClass(ZoneDelegate, [{
            key: "fork",
            value: function fork(targetZone, zoneSpec) {
              return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
            }
          }, {
            key: "intercept",
            value: function intercept(targetZone, callback, source) {
              return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
            }
          }, {
            key: "invoke",
            value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
              return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "handleError",
            value: function handleError(targetZone, error) {
              return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(targetZone, task) {
              var returnTask = task;

              if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                  returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                } // clang-format off


                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

                if (!returnTask) returnTask = task;
              } else {
                if (task.scheduleFn) {
                  task.scheduleFn(task);
                } else if (task.type == microTask) {
                  scheduleMicroTask(task);
                } else {
                  throw new Error('Task is missing scheduleFn.');
                }
              }

              return returnTask;
            }
          }, {
            key: "invokeTask",
            value: function invokeTask(targetZone, task, applyThis, applyArgs) {
              return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(targetZone, task) {
              var value;

              if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
              } else {
                if (!task.cancelFn) {
                  throw Error('Task is not cancelable');
                }

                value = task.cancelFn(task);
              }

              return value;
            }
          }, {
            key: "hasTask",
            value: function hasTask(targetZone, isEmpty) {
              // hasTask should not throw error so other ZoneDelegate
              // can still trigger hasTask callback
              try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
              } catch (err) {
                this.handleError(targetZone, err);
              }
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(type, count) {
              var counts = this._taskCounts;
              var prev = counts[type];
              var next = counts[type] = prev + count;

              if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
              }

              if (prev == 0 || next == 0) {
                var isEmpty = {
                  microTask: counts['microTask'] > 0,
                  macroTask: counts['macroTask'] > 0,
                  eventTask: counts['eventTask'] > 0,
                  change: type
                };
                this.hasTask(this.zone, isEmpty);
              }
            }
          }]);

          return ZoneDelegate;
        }();

        var ZoneTask =
        /*#__PURE__*/
        function () {
          function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            _classCallCheck(this, ZoneTask);

            // tslint:disable-next-line:require-internal-with-underscore
            this._zone = null;
            this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

            this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;

            if (!callback) {
              throw new Error('callback is not defined');
            }

            this.callback = callback;
            var self = this; // TODO: @JiaLiPassion options should have interface

            if (type === eventTask && options && options.useG) {
              this.invoke = ZoneTask.invokeTask;
            } else {
              this.invoke = function () {
                return ZoneTask.invokeTask.call(global, self, this, arguments);
              };
            }
          }

          _createClass(ZoneTask, [{
            key: "cancelScheduleRequest",
            value: function cancelScheduleRequest() {
              this._transitionTo(notScheduled, scheduling);
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_transitionTo",
            value: function _transitionTo(toState, fromState1, fromState2) {
              if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;

                if (toState == notScheduled) {
                  this._zoneDelegates = null;
                }
              } else {
                throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
              }
            }
          }, {
            key: "toString",
            value: function toString() {
              if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
              } else {
                return Object.prototype.toString.call(this);
              }
            } // add toJSON method to prevent cyclic error when
            // call JSON.stringify(zoneTask)

          }, {
            key: "toJSON",
            value: function toJSON() {
              return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
              };
            }
          }, {
            key: "zone",
            get: function get() {
              return this._zone;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state;
            }
          }], [{
            key: "invokeTask",
            value: function invokeTask(task, target, args) {
              if (!task) {
                task = this;
              }

              _numberOfNestedTaskFrames++;

              try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
              } finally {
                if (_numberOfNestedTaskFrames == 1) {
                  drainMicroTaskQueue();
                }

                _numberOfNestedTaskFrames--;
              }
            }
          }]);

          return ZoneTask;
        }(); //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  MICROTASK QUEUE
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var symbolSetTimeout = __symbol__('setTimeout');

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var _microTaskQueue = [];
        var _isDrainingMicrotaskQueue = false;
        var nativeMicroTaskQueuePromise;

        function scheduleMicroTask(task) {
          // if we are not running in any task, and there has not been anything scheduled
          // we must bootstrap the initial task creation by manually scheduling the drain
          if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
              if (global[symbolPromise]) {
                nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
              }
            }

            if (nativeMicroTaskQueuePromise) {
              var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

              if (!nativeThen) {
                // native Promise is not patchable, we need to use `then` directly
                // issue 1078
                nativeThen = nativeMicroTaskQueuePromise['then'];
              }

              nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            } else {
              global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
          }

          task && _microTaskQueue.push(task);
        }

        function drainMicroTaskQueue() {
          if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;

            while (_microTaskQueue.length) {
              var queue = _microTaskQueue;
              _microTaskQueue = [];

              for (var i = 0; i < queue.length; i++) {
                var task = queue[i];

                try {
                  task.zone.runTask(task, null, null);
                } catch (error) {
                  _api.onUnhandledError(error);
                }
              }
            }

            _api.microtaskDrainDone();

            _isDrainingMicrotaskQueue = false;
          }
        } //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  BOOTSTRAP
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var NO_ZONE = {
          name: 'NO ZONE'
        };
        var notScheduled = 'notScheduled',
            scheduling = 'scheduling',
            scheduled = 'scheduled',
            running = 'running',
            canceling = 'canceling',
            unknown = 'unknown';
        var microTask = 'microTask',
            macroTask = 'macroTask',
            eventTask = 'eventTask';
        var patches = {};
        var _api = {
          symbol: __symbol__,
          currentZoneFrame: function currentZoneFrame() {
            return _currentZoneFrame;
          },
          onUnhandledError: noop,
          microtaskDrainDone: noop,
          scheduleMicroTask: scheduleMicroTask,
          showUncaughtError: function showUncaughtError() {
            return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
          },
          patchEventTarget: function patchEventTarget() {
            return [];
          },
          patchOnProperties: noop,
          patchMethod: function patchMethod() {
            return noop;
          },
          bindArguments: function bindArguments() {
            return [];
          },
          patchThen: function patchThen() {
            return noop;
          },
          patchMacroTask: function patchMacroTask() {
            return noop;
          },
          setNativePromise: function setNativePromise(NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
              nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
          },
          patchEventPrototype: function patchEventPrototype() {
            return noop;
          },
          isIEOrEdge: function isIEOrEdge() {
            return false;
          },
          getGlobalObjects: function getGlobalObjects() {
            return undefined;
          },
          ObjectDefineProperty: function ObjectDefineProperty() {
            return noop;
          },
          ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
            return undefined;
          },
          ObjectCreate: function ObjectCreate() {
            return undefined;
          },
          ArraySlice: function ArraySlice() {
            return [];
          },
          patchClass: function patchClass() {
            return noop;
          },
          wrapWithCurrentZone: function wrapWithCurrentZone() {
            return noop;
          },
          filterProperties: function filterProperties() {
            return [];
          },
          attachOriginToPatched: function attachOriginToPatched() {
            return noop;
          },
          _redefineProperty: function _redefineProperty() {
            return noop;
          },
          patchCallbacks: function patchCallbacks() {
            return noop;
          }
        };
        var _currentZoneFrame = {
          parent: null,
          zone: new Zone(null, null)
        };
        var _currentTask = null;
        var _numberOfNestedTaskFrames = 0;

        function noop() {}

        performanceMeasure('Zone', 'Zone');
        return global['Zone'] = Zone;
      }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
        var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ObjectDefineProperty = Object.defineProperty;

        function readableObjectToString(obj) {
          if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
          }

          return obj ? obj.toString() : Object.prototype.toString.call(obj);
        }

        var __symbol__ = api.symbol;
        var _uncaughtPromiseErrors = [];
        var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var creationTrace = '__creationTrace__';

        api.onUnhandledError = function (e) {
          if (api.showUncaughtError()) {
            var rejection = e && e.rejection;

            if (rejection) {
              console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            } else {
              console.error(e);
            }
          }
        };

        api.microtaskDrainDone = function () {
          var _loop = function _loop() {
            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

            try {
              uncaughtPromiseError.zone.runGuarded(function () {
                throw uncaughtPromiseError;
              });
            } catch (error) {
              handleUnhandledRejection(error);
            }
          };

          while (_uncaughtPromiseErrors.length) {
            _loop();
          }
        };

        var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

        function handleUnhandledRejection(e) {
          api.onUnhandledError(e);

          try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

            if (typeof handler === 'function') {
              handler.call(this, e);
            }
          } catch (err) {}
        }

        function isThenable(value) {
          return value && value.then;
        }

        function forwardResolution(value) {
          return value;
        }

        function forwardRejection(rejection) {
          return ZoneAwarePromise.reject(rejection);
        }

        var symbolState = __symbol__('state');

        var symbolValue = __symbol__('value');

        var symbolFinally = __symbol__('finally');

        var symbolParentPromiseValue = __symbol__('parentPromiseValue');

        var symbolParentPromiseState = __symbol__('parentPromiseState');

        var source = 'Promise.then';
        var UNRESOLVED = null;
        var RESOLVED = true;
        var REJECTED = false;
        var REJECTED_NO_CATCH = 0;

        function makeResolver(promise, state) {
          return function (v) {
            try {
              resolvePromise(promise, state, v);
            } catch (err) {
              resolvePromise(promise, false, err);
            } // Do not return value or you will break the Promise spec.

          };
        }

        var once = function once() {
          var wasCalled = false;
          return function wrapper(wrappedFunction) {
            return function () {
              if (wasCalled) {
                return;
              }

              wasCalled = true;
              wrappedFunction.apply(null, arguments);
            };
          };
        };

        var TYPE_ERROR = 'Promise resolved with itself';

        var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


        function resolvePromise(promise, state, value) {
          var onceWrapper = once();

          if (promise === value) {
            throw new TypeError(TYPE_ERROR);
          }

          if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;

            try {
              if (typeof value === 'object' || typeof value === 'function') {
                then = value && value.then;
              }
            } catch (err) {
              onceWrapper(function () {
                resolvePromise(promise, false, err);
              })();
              return promise;
            } // if (value instanceof ZoneAwarePromise) {


            if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
              clearRejectedNoCatch(value);
              resolvePromise(promise, value[symbolState], value[symbolValue]);
            } else if (state !== REJECTED && typeof then === 'function') {
              try {
                then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
              } catch (err) {
                onceWrapper(function () {
                  resolvePromise(promise, false, err);
                })();
              }
            } else {
              promise[symbolState] = state;
              var queue = promise[symbolValue];
              promise[symbolValue] = value;

              if (promise[symbolFinally] === symbolFinally) {
                // the promise is generated by Promise.prototype.finally
                if (state === RESOLVED) {
                  // the state is resolved, should ignore the value
                  // and use parent promise value
                  promise[symbolState] = promise[symbolParentPromiseState];
                  promise[symbolValue] = promise[symbolParentPromiseValue];
                }
              } // record task information in value when error occurs, so we can
              // do some additional work such as render longStackTrace


              if (state === REJECTED && value instanceof Error) {
                // check if longStackTraceZone is here
                var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

                if (trace) {
                  // only keep the long stack trace into error when in longStackTraceZone
                  ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: trace
                  });
                }
              }

              for (var i = 0; i < queue.length;) {
                scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
              }

              if (queue.length == 0 && state == REJECTED) {
                promise[symbolState] = REJECTED_NO_CATCH;
                var uncaughtPromiseError = value;

                if (!isDisableWrappingUncaughtPromiseRejection) {
                  // If disable wrapping uncaught promise reject
                  // and the rejected value is an Error object,
                  // use the value instead of wrapping it.
                  try {
                    // Here we throws a new Error to print more readable error log
                    // and if the value is not an error, zone.js builds an `Error`
                    // Object here to attach the stack information.
                    throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
                  } catch (err) {
                    uncaughtPromiseError = err;
                  }
                }

                uncaughtPromiseError.rejection = value;
                uncaughtPromiseError.promise = promise;
                uncaughtPromiseError.zone = Zone.current;
                uncaughtPromiseError.task = Zone.currentTask;

                _uncaughtPromiseErrors.push(uncaughtPromiseError);

                api.scheduleMicroTask(); // to make sure that it is running
              }
            }
          } // Resolving an already resolved promise is a noop.


          return promise;
        }

        var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

        function clearRejectedNoCatch(promise) {
          if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
              var handler = Zone[REJECTION_HANDLED_HANDLER];

              if (handler && typeof handler === 'function') {
                handler.call(this, {
                  rejection: promise[symbolValue],
                  promise: promise
                });
              }
            } catch (err) {}

            promise[symbolState] = REJECTED;

            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
              if (promise === _uncaughtPromiseErrors[i].promise) {
                _uncaughtPromiseErrors.splice(i, 1);
              }
            }
          }
        }

        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
          clearRejectedNoCatch(promise);
          var promiseState = promise[symbolState];
          var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
          zone.scheduleMicroTask(source, function () {
            try {
              var parentPromiseValue = promise[symbolValue];
              var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

              if (isFinallyPromise) {
                // if the promise is generated from finally call, keep parent promise's state and value
                chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                chainPromise[symbolParentPromiseState] = promiseState;
              } // should not pass value to finally callback


              var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
              resolvePromise(chainPromise, true, value);
            } catch (error) {
              // if error occurs, should always return this error
              resolvePromise(chainPromise, false, error);
            }
          }, chainPromise);
        }

        var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

        var noop = function noop() {};

        var ZoneAwarePromise =
        /*#__PURE__*/
        function () {
          _createClass(ZoneAwarePromise, null, [{
            key: "toString",
            value: function toString() {
              return ZONE_AWARE_PROMISE_TO_STRING;
            }
          }, {
            key: "resolve",
            value: function resolve(value) {
              return resolvePromise(new this(null), RESOLVED, value);
            }
          }, {
            key: "reject",
            value: function reject(error) {
              return resolvePromise(new this(null), REJECTED, error);
            }
          }, {
            key: "race",
            value: function race(values) {
              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              });

              function onResolve(value) {
                resolve(value);
              }

              function onReject(error) {
                reject(error);
              }

              var _iterator = _createForOfIteratorHelper(values),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var value = _step.value;

                  if (!isThenable(value)) {
                    value = this.resolve(value);
                  }

                  value.then(onResolve, onReject);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return promise;
            }
          }, {
            key: "all",
            value: function all(values) {
              return ZoneAwarePromise.allWithCallback(values);
            }
          }, {
            key: "allSettled",
            value: function allSettled(values) {
              var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
              return P.allWithCallback(values, {
                thenCallback: function thenCallback(value) {
                  return {
                    status: 'fulfilled',
                    value: value
                  };
                },
                errorCallback: function errorCallback(err) {
                  return {
                    status: 'rejected',
                    reason: err
                  };
                }
              });
            }
          }, {
            key: "allWithCallback",
            value: function allWithCallback(values, callback) {
              var _this = this;

              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

              var unresolvedCount = 2;
              var valueIndex = 0;
              var resolvedValues = [];

              var _iterator2 = _createForOfIteratorHelper(values),
                  _step2;

              try {
                var _loop2 = function _loop2() {
                  var value = _step2.value;

                  if (!isThenable(value)) {
                    value = _this.resolve(value);
                  }

                  var curValueIndex = valueIndex;

                  try {
                    value.then(function (value) {
                      resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                      unresolvedCount--;

                      if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                      }
                    }, function (err) {
                      if (!callback) {
                        reject(err);
                      } else {
                        resolvedValues[curValueIndex] = callback.errorCallback(err);
                        unresolvedCount--;

                        if (unresolvedCount === 0) {
                          resolve(resolvedValues);
                        }
                      }
                    });
                  } catch (thenErr) {
                    reject(thenErr);
                  }

                  unresolvedCount++;
                  valueIndex++;
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop2();
                } // Make the unresolvedCount zero-based again.

              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              unresolvedCount -= 2;

              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }

              return promise;
            }
          }]);

          function ZoneAwarePromise(executor) {
            _classCallCheck(this, ZoneAwarePromise);

            var promise = this;

            if (!(promise instanceof ZoneAwarePromise)) {
              throw new Error('Must be an instanceof Promise.');
            }

            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;

            try {
              executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            } catch (error) {
              resolvePromise(promise, false, error);
            }
          }

          _createClass(ZoneAwarePromise, [{
            key: "then",
            value: function then(onFulfilled, onRejected) {
              var C = this.constructor[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = this.constructor || ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
              }

              return chainPromise;
            }
          }, {
            key: "catch",
            value: function _catch(onRejected) {
              return this.then(null, onRejected);
            }
          }, {
            key: "finally",
            value: function _finally(onFinally) {
              var C = this.constructor[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              chainPromise[symbolFinally] = symbolFinally;
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
              }

              return chainPromise;
            }
          }, {
            key: Symbol.toStringTag,
            get: function get() {
              return 'Promise';
            }
          }, {
            key: Symbol.species,
            get: function get() {
              return ZoneAwarePromise;
            }
          }]);

          return ZoneAwarePromise;
        }(); // Protect against aggressive optimizers dropping seemingly unused properties.
        // E.g. Closure Compiler in advanced mode.


        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
        var NativePromise = global[symbolPromise] = global['Promise'];

        var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');

        var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');

        if (!desc || desc.configurable) {
          desc && delete desc.writable;
          desc && delete desc.value;

          if (!desc) {
            desc = {
              configurable: true,
              enumerable: true
            };
          }

          desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
          };

          desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
              // if the NewNativePromise is ZoneAwarePromise
              // save to global
              global[ZONE_AWARE_PROMISE] = NewNativePromise;
            } else {
              // if the NewNativePromise is not ZoneAwarePromise
              // for example: after load zone.js, some library just
              // set es6-promise to global, if we set it to global
              // directly, assertZonePatched will fail and angular
              // will not loaded, so we just set the NewNativePromise
              // to global[symbolPromise], so the result is just like
              // we load ES6 Promise before zone.js
              global[symbolPromise] = NewNativePromise;

              if (!NewNativePromise.prototype[symbolThen]) {
                patchThen(NewNativePromise);
              }

              api.setNativePromise(NewNativePromise);
            }
          };

          ObjectDefineProperty(global, 'Promise', desc);
        }

        global['Promise'] = ZoneAwarePromise;

        var symbolThenPatched = __symbol__('thenPatched');

        function patchThen(Ctor) {
          var proto = Ctor.prototype;
          var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

          if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
          }

          var originalThen = proto.then; // Keep a reference to the original method.

          proto[symbolThen] = originalThen;

          Ctor.prototype.then = function (onResolve, onReject) {
            var _this2 = this;

            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
              originalThen.call(_this2, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
          };

          Ctor[symbolThenPatched] = true;
        }

        api.patchThen = patchThen;

        function zoneify(fn) {
          return function () {
            var resultPromise = fn.apply(this, arguments);

            if (resultPromise instanceof ZoneAwarePromise) {
              return resultPromise;
            }

            var ctor = resultPromise.constructor;

            if (!ctor[symbolThenPatched]) {
              patchThen(ctor);
            }

            return resultPromise;
          };
        }

        if (NativePromise) {
          patchThen(NativePromise);
          var fetch = global['fetch'];

          if (typeof fetch == 'function') {
            global[api.symbol('fetch')] = fetch;
            global['fetch'] = zoneify(fetch);
          }
        } // This is not part of public API, but it is useful for tests, so we expose it.


        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
        return ZoneAwarePromise;
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Suppress closure compiler errors about unknown 'Zone' variable
       * @fileoverview
       * @suppress {undefinedVars,globalThis,missingRequire}
       */
      /// <reference types="node"/>
      // issue #989, to reduce bundle size, use short name

      /** Object.getOwnPropertyDescriptor */


      var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      /** Object.defineProperty */

      var ObjectDefineProperty = Object.defineProperty;
      /** Object.getPrototypeOf */

      var ObjectGetPrototypeOf = Object.getPrototypeOf;
      /** Object.create */

      var ObjectCreate = Object.create;
      /** Array.prototype.slice */

      var ArraySlice = Array.prototype.slice;
      /** addEventListener string const */

      var ADD_EVENT_LISTENER_STR = 'addEventListener';
      /** removeEventListener string const */

      var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
      /** zoneSymbol addEventListener */

      var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
      /** zoneSymbol removeEventListener */


      var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
      /** true string const */


      var TRUE_STR = 'true';
      /** false string const */

      var FALSE_STR = 'false';
      /** Zone symbol prefix string const. */

      var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

      function wrapWithCurrentZone(callback, source) {
        return Zone.current.wrap(callback, source);
      }

      function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
        return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
      }

      var zoneSymbol = Zone.__symbol__;
      var isWindowExists = typeof window !== 'undefined';
      var internalWindow = isWindowExists ? window : undefined;

      var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

      var REMOVE_ATTRIBUTE = 'removeAttribute';
      var NULL_ON_PROP_VALUE = [null];

      function bindArguments(args, source) {
        for (var i = args.length - 1; i >= 0; i--) {
          if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
          }
        }

        return args;
      }

      function patchPrototype(prototype, fnNames) {
        var source = prototype.constructor['name'];

        var _loop3 = function _loop3(i) {
          var name = fnNames[i];
          var delegate = prototype[name];

          if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

            if (!isPropertyWritable(prototypeDesc)) {
              return "continue";
            }

            prototype[name] = function (delegate) {
              var patched = function patched() {
                return delegate.apply(this, bindArguments(arguments, source + '.' + name));
              };

              attachOriginToPatched(patched, delegate);
              return patched;
            }(delegate);
          }
        };

        for (var i = 0; i < fnNames.length; i++) {
          var _ret = _loop3(i);

          if (_ret === "continue") continue;
        }
      }

      function isPropertyWritable(propertyDesc) {
        if (!propertyDesc) {
          return true;
        }

        if (propertyDesc.writable === false) {
          return false;
        }

        return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
      }

      var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
      var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
      // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
      var zoneSymbolEventNames = {};

      var wrapFn = function wrapFn(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        }

        var eventNameSymbol = zoneSymbolEventNames[event.type];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
        }

        var target = this || event.target || _global;
        var listener = target[eventNameSymbol];
        var result;

        if (isBrowser && target === internalWindow && event.type === 'error') {
          // window.onerror have different signiture
          // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
          // and onerror callback will prevent default when callback return true
          var errorEvent = event;
          result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

          if (result === true) {
            event.preventDefault();
          }
        } else {
          result = listener && listener.apply(this, arguments);

          if (result != undefined && !result) {
            event.preventDefault();
          }
        }

        return result;
      };

      function patchProperty(obj, prop, prototype) {
        var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

        if (!desc && prototype) {
          // when patch window object, use prototype to check prop exist or not
          var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

          if (prototypeDesc) {
            desc = {
              enumerable: true,
              configurable: true
            };
          }
        } // if the descriptor not exists or is not configurable
        // just return


        if (!desc || !desc.configurable) {
          return;
        }

        var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

        if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
          return;
        } // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified


        delete desc.writable;
        delete desc.value;
        var originalDescGet = desc.get;
        var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

        var eventName = prop.substr(2);
        var eventNameSymbol = zoneSymbolEventNames[eventName];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
        }

        desc.set = function (newValue) {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return;
          }

          var previousValue = target[eventNameSymbol];

          if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
          } // issue #978, when onload handler was added before loading zone.js
          // we should remove it with originalDescSet


          if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
          }

          if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
          } else {
            target[eventNameSymbol] = null;
          }
        }; // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null


        desc.get = function () {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return null;
          }

          var listener = target[eventNameSymbol];

          if (listener) {
            return listener;
          } else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);

            if (value) {
              desc.set.call(this, value);

              if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                target.removeAttribute(prop);
              }

              return value;
            }
          }

          return null;
        };

        ObjectDefineProperty(obj, prop, desc);
        obj[onPropPatchedSymbol] = true;
      }

      function patchOnProperties(obj, properties, prototype) {
        if (properties) {
          for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
          }
        } else {
          var onProperties = [];

          for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
              onProperties.push(prop);
            }
          }

          for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
          }
        }
      }

      var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

      function patchClass(className) {
        var OriginalClass = _global[className];
        if (!OriginalClass) return; // keep original class in global

        _global[zoneSymbol(className)] = OriginalClass;

        _global[className] = function () {
          var a = bindArguments(arguments, className);

          switch (a.length) {
            case 0:
              this[originalInstanceKey] = new OriginalClass();
              break;

            case 1:
              this[originalInstanceKey] = new OriginalClass(a[0]);
              break;

            case 2:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
              break;

            case 3:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
              break;

            case 4:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
              break;

            default:
              throw new Error('Arg list too long.');
          }
        }; // attach original delegate to patched function


        attachOriginToPatched(_global[className], OriginalClass);
        var instance = new OriginalClass(function () {});
        var prop;

        for (prop in instance) {
          // https://bugs.webkit.org/show_bug.cgi?id=44721
          if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

          (function (prop) {
            if (typeof instance[prop] === 'function') {
              _global[className].prototype[prop] = function () {
                return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
              };
            } else {
              ObjectDefineProperty(_global[className].prototype, prop, {
                set: function set(fn) {
                  if (typeof fn === 'function') {
                    this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                    // use it in Function.prototype.toString to return
                    // the native one.

                    attachOriginToPatched(this[originalInstanceKey][prop], fn);
                  } else {
                    this[originalInstanceKey][prop] = fn;
                  }
                },
                get: function get() {
                  return this[originalInstanceKey][prop];
                }
              });
            }
          })(prop);
        }

        for (prop in OriginalClass) {
          if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
          }
        }
      }

      function copySymbolProperties(src, dest) {
        if (typeof Object.getOwnPropertySymbols !== 'function') {
          return;
        }

        var symbols = Object.getOwnPropertySymbols(src);
        symbols.forEach(function (symbol) {
          var desc = Object.getOwnPropertyDescriptor(src, symbol);
          Object.defineProperty(dest, symbol, {
            get: function get() {
              return src[symbol];
            },
            set: function set(value) {
              if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                // if src[symbol] is not writable or not have a setter, just return
                return;
              }

              src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
          });
        });
      }

      var shouldCopySymbolProperties = false;

      function patchMethod(target, name, patchFn) {
        var proto = target;

        while (proto && !proto.hasOwnProperty(name)) {
          proto = ObjectGetPrototypeOf(proto);
        }

        if (!proto && target[name]) {
          // somehow we did not find it, but we can see it. This happens on IE for Window properties.
          proto = target;
        }

        var delegateName = zoneSymbol(name);
        var delegate = null;

        if (proto && !(delegate = proto[delegateName])) {
          delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
          // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

          var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

          if (isPropertyWritable(desc)) {
            var patchDelegate = patchFn(delegate, delegateName, name);

            proto[name] = function () {
              return patchDelegate(this, arguments);
            };

            attachOriginToPatched(proto[name], delegate);

            if (shouldCopySymbolProperties) {
              copySymbolProperties(delegate, proto[name]);
            }
          }
        }

        return delegate;
      } // TODO: @JiaLiPassion, support cancel task later if necessary


      function patchMacroTask(obj, funcName, metaCreator) {
        var setNative = null;

        function scheduleTask(task) {
          var data = task.data;

          data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
          };

          setNative.apply(data.target, data.args);
          return task;
        }

        setNative = patchMethod(obj, funcName, function (delegate) {
          return function (self, args) {
            var meta = metaCreator(self, args);

            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
              return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            } else {
              // cause an error by calling it directly.
              return delegate.apply(self, args);
            }
          };
        });
      }

      function attachOriginToPatched(patched, original) {
        patched[zoneSymbol('OriginalDelegate')] = original;
      }

      var isDetectedIEOrEdge = false;
      var ieOrEdge = false;

      function isIE() {
        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
          }
        } catch (error) {}

        return false;
      }

      function isIEOrEdge() {
        if (isDetectedIEOrEdge) {
          return ieOrEdge;
        }

        isDetectedIEOrEdge = true;

        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
          }
        } catch (error) {}

        return ieOrEdge;
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // override Function.prototype.toString to make zone.js patched function
      // look like native function


      Zone.__load_patch('toString', function (global) {
        // patch Func.prototype.toString to let them look like native
        var originalFunctionToString = Function.prototype.toString;
        var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
        var PROMISE_SYMBOL = zoneSymbol('Promise');
        var ERROR_SYMBOL = zoneSymbol('Error');

        var newFunctionToString = function toString() {
          if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

            if (originalDelegate) {
              if (typeof originalDelegate === 'function') {
                return originalFunctionToString.call(originalDelegate);
              } else {
                return Object.prototype.toString.call(originalDelegate);
              }
            }

            if (this === Promise) {
              var nativePromise = global[PROMISE_SYMBOL];

              if (nativePromise) {
                return originalFunctionToString.call(nativePromise);
              }
            }

            if (this === Error) {
              var nativeError = global[ERROR_SYMBOL];

              if (nativeError) {
                return originalFunctionToString.call(nativeError);
              }
            }
          }

          return originalFunctionToString.call(this);
        };

        newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
        Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

        var originalObjectToString = Object.prototype.toString;
        var PROMISE_OBJECT_TO_STRING = '[object Promise]';

        Object.prototype.toString = function () {
          if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
          }

          return originalObjectToString.call(this);
        };
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var passiveSupported = false;

      if (typeof window !== 'undefined') {
        try {
          var options = Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
            }
          });
          window.addEventListener('test', options, options);
          window.removeEventListener('test', options, options);
        } catch (err) {
          passiveSupported = false;
        }
      } // an identifier to tell ZoneTask do not create a new invoke closure


      var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
        useG: true
      };
      var zoneSymbolEventNames$1 = {};
      var globalSources = {};
      var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
      var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

      function prepareEventNames(eventName, eventNameToString) {
        var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
        var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
      }

      function patchEventTarget(_global, apis, patchOptions) {
        var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
        var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
        var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
        var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
        var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
        var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
        var PREPEND_EVENT_LISTENER = 'prependListener';
        var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

        var invokeTask = function invokeTask(task, target, event) {
          // for better performance, check isRemoved which is set
          // by removeEventListener
          if (task.isRemoved) {
            return;
          }

          var delegate = task.callback;

          if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) {
              return delegate.handleEvent(event);
            };

            task.originalDelegate = delegate;
          } // invoke static task.invoke


          task.invoke(task, target, [event]);
          var options = task.options;

          if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

            target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
          }
        }; // global shared zoneAwareCallback to handle all event callback with capture = false


        var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = this || event.target || _global;
          var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

          if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
              invokeTask(tasks[0], target, event);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                invokeTask(copyTasks[i], target, event);
              }
            }
          }
        }; // global shared zoneAwareCallback to handle all event callback with capture = true


        var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = this || event.target || _global;
          var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

          if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
              invokeTask(tasks[0], target, event);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                invokeTask(copyTasks[i], target, event);
              }
            }
          }
        };

        function patchEventTargetMethods(obj, patchOptions) {
          if (!obj) {
            return false;
          }

          var useGlobalCallback = true;

          if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
          }

          var validateHandler = patchOptions && patchOptions.vh;
          var checkDuplicate = true;

          if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
          }

          var returnTarget = false;

          if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
          }

          var proto = obj;

          while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
          }

          if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
          }

          if (!proto) {
            return false;
          }

          if (proto[zoneSymbolAddEventListener]) {
            return false;
          }

          var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
          // so we do not need to create a new object just for pass some data

          var taskData = {};
          var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
          var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
          var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
          var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
          var nativePrependEventListener;

          if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
          }
          /**
           * This util function will build an option object with passive option
           * to handle all possible input from the user.
           */


          function buildEventListenerOptions(options, passive) {
            if (!passiveSupported && typeof options === 'object' && options) {
              // doesn't support passive but user want to pass an object as options.
              // this will not work on some old browser, so we just pass a boolean
              // as useCapture parameter
              return !!options.capture;
            }

            if (!passiveSupported || !passive) {
              return options;
            }

            if (typeof options === 'boolean') {
              return {
                capture: options,
                passive: true
              };
            }

            if (!options) {
              return {
                passive: true
              };
            }

            if (typeof options === 'object' && options.passive !== false) {
              return Object.assign(Object.assign({}, options), {
                passive: true
              });
            }

            return options;
          }

          var customScheduleGlobal = function customScheduleGlobal(task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
              return;
            }

            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
          };

          var customCancelGlobal = function customCancelGlobal(task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
              var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
              var symbolEventName;

              if (symbolEventNames) {
                symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
              }

              var existingTasks = symbolEventName && task.target[symbolEventName];

              if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                  var existingTask = existingTasks[i];

                  if (existingTask === task) {
                    existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                    task.isRemoved = true;

                    if (existingTasks.length === 0) {
                      // all tasks for the eventName + capture have gone,
                      // remove globalZoneAwareCallback and remove the task cache from target
                      task.allRemoved = true;
                      task.target[symbolEventName] = null;
                    }

                    break;
                  }
                }
              }
            } // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return


            if (!task.allRemoved) {
              return;
            }

            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
          };

          var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customSchedulePrepend = function customSchedulePrepend(task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customCancelNonGlobal = function customCancelNonGlobal(task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
          };

          var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
          var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

          var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
            var typeOfDelegate = typeof delegate;
            return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
          };

          var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
          var blackListedEvents = Zone[zoneSymbol('BLACK_LISTED_EVENTS')];

          var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];

          var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
            var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
            return function () {
              var target = this || _global;
              var eventName = arguments[0];

              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var delegate = arguments[1];

              if (!delegate) {
                return nativeListener.apply(this, arguments);
              }

              if (isNode && eventName === 'uncaughtException') {
                // don't patch uncaughtException of nodejs to prevent endless loop
                return nativeListener.apply(this, arguments);
              } // don't create the bind delegate function for handleEvent
              // case here to improve addEventListener performance
              // we will create the bind delegate when invoke


              var isHandleEvent = false;

              if (typeof delegate !== 'function') {
                if (!delegate.handleEvent) {
                  return nativeListener.apply(this, arguments);
                }

                isHandleEvent = true;
              }

              if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                return;
              }

              var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
              var options = buildEventListenerOptions(arguments[2], passive);

              if (blackListedEvents) {
                // check black list
                for (var i = 0; i < blackListedEvents.length; i++) {
                  if (eventName === blackListedEvents[i]) {
                    if (passive) {
                      return nativeListener.call(target, eventName, delegate, options);
                    } else {
                      return nativeListener.apply(this, arguments);
                    }
                  }
                }
              }

              var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
              var once = options && typeof options === 'object' ? options.once : false;
              var zone = Zone.current;
              var symbolEventNames = zoneSymbolEventNames$1[eventName];

              if (!symbolEventNames) {
                prepareEventNames(eventName, eventNameToString);
                symbolEventNames = zoneSymbolEventNames$1[eventName];
              }

              var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
              var existingTasks = target[symbolEventName];
              var isExisting = false;

              if (existingTasks) {
                // already have task registered
                isExisting = true;

                if (checkDuplicate) {
                  for (var _i = 0; _i < existingTasks.length; _i++) {
                    if (compare(existingTasks[_i], delegate)) {
                      // same callback, same capture, same event name, just return
                      return;
                    }
                  }
                }
              } else {
                existingTasks = target[symbolEventName] = [];
              }

              var source;
              var constructorName = target.constructor['name'];
              var targetSource = globalSources[constructorName];

              if (targetSource) {
                source = targetSource[eventName];
              }

              if (!source) {
                source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
              } // do not create a new object as task.data to pass those things
              // just use the global shared one


              taskData.options = options;

              if (once) {
                // if addEventListener with once options, we don't pass it to
                // native addEventListener, instead we keep the once setting
                // and handle ourselves.
                taskData.options.once = false;
              }

              taskData.target = target;
              taskData.capture = capture;
              taskData.eventName = eventName;
              taskData.isExisting = isExisting;
              var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

              if (data) {
                data.taskData = taskData;
              }

              var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
              // issue, https://github.com/angular/angular/issues/20442

              taskData.target = null; // need to clear up taskData because it is a global object

              if (data) {
                data.taskData = null;
              } // have to save those information to task in case
              // application may call task.zone.cancelTask() directly


              if (once) {
                options.once = true;
              }

              if (!(!passiveSupported && typeof task.options === 'boolean')) {
                // if not support passive, and we pass an option object
                // to addEventListener, we should save the options to task
                task.options = options;
              }

              task.target = target;
              task.capture = capture;
              task.eventName = eventName;

              if (isHandleEvent) {
                // save original delegate for compare to check duplicate
                task.originalDelegate = delegate;
              }

              if (!prepend) {
                existingTasks.push(task);
              } else {
                existingTasks.unshift(task);
              }

              if (returnTarget) {
                return target;
              }
            };
          };

          proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

          if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
          }

          proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var options = arguments[2];
            var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
            var delegate = arguments[1];

            if (!delegate) {
              return nativeRemoveEventListener.apply(this, arguments);
            }

            if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
              return;
            }

            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;

            if (symbolEventNames) {
              symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = symbolEventName && target[symbolEventName];

            if (existingTasks) {
              for (var i = 0; i < existingTasks.length; i++) {
                var existingTask = existingTasks[i];

                if (compare(existingTask, delegate)) {
                  existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                  existingTask.isRemoved = true;

                  if (existingTasks.length === 0) {
                    // all tasks for the eventName + capture have gone,
                    // remove globalZoneAwareCallback and remove the task cache from target
                    existingTask.allRemoved = true;
                    target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                    // such as target.onclick = function() {}, so we need to clear this internal
                    // property too if all delegates all removed

                    if (typeof eventName === 'string') {
                      var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                      target[onPropertySymbol] = null;
                    }
                  }

                  existingTask.zone.cancelTask(existingTask);

                  if (returnTarget) {
                    return target;
                  }

                  return;
                }
              }
            } // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.


            return nativeRemoveEventListener.apply(this, arguments);
          };

          proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

            for (var i = 0; i < tasks.length; i++) {
              var task = tasks[i];
              var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              listeners.push(delegate);
            }

            return listeners;
          };

          proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (!eventName) {
              var keys = Object.keys(target);

              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
                // used for monitoring the removeListener call,
                // so just keep removeListener eventListener until
                // all other eventListeners are removed

                if (evtName && evtName !== 'removeListener') {
                  this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                }
              } // remove removeListener listener finally


              this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            } else {
              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var symbolEventNames = zoneSymbolEventNames$1[eventName];

              if (symbolEventNames) {
                var symbolEventName = symbolEventNames[FALSE_STR];
                var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                var tasks = target[symbolEventName];
                var captureTasks = target[symbolCaptureEventName];

                if (tasks) {
                  var removeTasks = tasks.slice();

                  for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
                    var task = removeTasks[_i2];
                    var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                    this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                  }
                }

                if (captureTasks) {
                  var _removeTasks = captureTasks.slice();

                  for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
                    var _task = _removeTasks[_i3];

                    var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

                    this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                  }
                }
              }
            }

            if (returnTarget) {
              return this;
            }
          }; // for native toString patch


          attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
          attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

          if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
          }

          if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
          }

          return true;
        }

        var results = [];

        for (var i = 0; i < apis.length; i++) {
          results[i] = patchEventTargetMethods(apis[i], patchOptions);
        }

        return results;
      }

      function findEventTasks(target, eventName) {
        if (!eventName) {
          var foundTasks = [];

          for (var prop in target) {
            var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            var evtName = match && match[1];

            if (evtName && (!eventName || evtName === eventName)) {
              var tasks = target[prop];

              if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                  foundTasks.push(tasks[i]);
                }
              }
            }
          }

          return foundTasks;
        }

        var symbolEventName = zoneSymbolEventNames$1[eventName];

        if (!symbolEventName) {
          prepareEventNames(eventName);
          symbolEventName = zoneSymbolEventNames$1[eventName];
        }

        var captureFalseTasks = target[symbolEventName[FALSE_STR]];
        var captureTrueTasks = target[symbolEventName[TRUE_STR]];

        if (!captureFalseTasks) {
          return captureTrueTasks ? captureTrueTasks.slice() : [];
        } else {
          return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
        }
      }

      function patchEventPrototype(global, api) {
        var Event = global['Event'];

        if (Event && Event.prototype) {
          api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
            return function (self, args) {
              self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
              // in case in some hybrid application, some part of
              // application will be controlled by zone, some are not

              delegate && delegate.apply(self, args);
            };
          });
        }
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCallbacks(api, target, targetName, method, callbacks) {
        var symbol = Zone.__symbol__(method);

        if (target[symbol]) {
          return;
        }

        var nativeDelegate = target[symbol] = target[method];

        target[method] = function (name, opts, options) {
          if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
              var source = "".concat(targetName, ".").concat(method, "::") + callback;
              var prototype = opts.prototype;

              if (prototype.hasOwnProperty(callback)) {
                var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

                if (descriptor && descriptor.value) {
                  descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                  api._redefineProperty(opts.prototype, callback, descriptor);
                } else if (prototype[callback]) {
                  prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            });
          }

          return nativeDelegate.call(target, name, opts, options);
        };

        api.attachOriginToPatched(target[method], nativeDelegate);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
      var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
      var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
      var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
      var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
      var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
      var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
      var formEventNames = ['autocomplete', 'autocompleteerror'];
      var detailEventNames = ['toggle'];
      var frameEventNames = ['load'];
      var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
      var marqueeEventNames = ['bounce', 'finish', 'start'];
      var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
      var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
      var websocketEventNames = ['close', 'error', 'open', 'message'];
      var workerEventNames = ['error', 'message'];
      var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

      function filterProperties(target, onProperties, ignoreProperties) {
        if (!ignoreProperties || ignoreProperties.length === 0) {
          return onProperties;
        }

        var tip = ignoreProperties.filter(function (ip) {
          return ip.target === target;
        });

        if (!tip || tip.length === 0) {
          return onProperties;
        }

        var targetIgnoreProperties = tip[0].ignoreProperties;
        return onProperties.filter(function (op) {
          return targetIgnoreProperties.indexOf(op) === -1;
        });
      }

      function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
        // check whether target is available, sometimes target will be undefined
        // because different browser or some 3rd party plugin.
        if (!target) {
          return;
        }

        var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
        patchOnProperties(target, filteredProperties, prototype);
      }

      function propertyDescriptorPatch(api, _global) {
        if (isNode && !isMix) {
          return;
        }

        if (Zone[api.symbol('patchEvents')]) {
          // events are already been patched by legacy patch.
          return;
        }

        var supportsWebSocket = typeof WebSocket !== 'undefined';
        var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

        if (isBrowser) {
          var _internalWindow = window;
          var ignoreErrorProperties = isIE ? [{
            target: _internalWindow,
            ignoreProperties: ['error']
          }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
          // so we need to pass WindowPrototype to check onProp exist or not

          patchFilteredProperties(_internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
          patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

          if (typeof _internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(_internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
          }

          patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
          patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
          patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
          patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
          patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
          patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
          patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
          var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

          if (HTMLMarqueeElement) {
            patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
          }

          var Worker = _internalWindow['Worker'];

          if (Worker) {
            patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
          }
        }

        var XMLHttpRequest = _global['XMLHttpRequest'];

        if (XMLHttpRequest) {
          // XMLHttpRequest is not available in ServiceWorker, so we need to check here
          patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }

        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget) {
          patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }

        if (typeof IDBIndex !== 'undefined') {
          patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }

        if (supportsWebSocket) {
          patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('util', function (global, Zone, api) {
        api.patchOnProperties = patchOnProperties;
        api.patchMethod = patchMethod;
        api.bindArguments = bindArguments;
        api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
        // define which events will not be patched by `Zone.js`.
        // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
        // the name consistent with angular repo.
        // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
        // backwards compatibility.

        var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

        var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

        if (global[SYMBOL_UNPATCHED_EVENTS]) {
          global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
        }

        if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
          Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
        }

        api.patchEventPrototype = patchEventPrototype;
        api.patchEventTarget = patchEventTarget;
        api.isIEOrEdge = isIEOrEdge;
        api.ObjectDefineProperty = ObjectDefineProperty;
        api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
        api.ObjectCreate = ObjectCreate;
        api.ArraySlice = ArraySlice;
        api.patchClass = patchClass;
        api.wrapWithCurrentZone = wrapWithCurrentZone;
        api.filterProperties = filterProperties;
        api.attachOriginToPatched = attachOriginToPatched;
        api._redefineProperty = Object.defineProperty;
        api.patchCallbacks = patchCallbacks;

        api.getGlobalObjects = function () {
          return {
            globalSources: globalSources,
            zoneSymbolEventNames: zoneSymbolEventNames$1,
            eventNames: eventNames,
            isBrowser: isBrowser,
            isMix: isMix,
            isNode: isNode,
            TRUE_STR: TRUE_STR,
            FALSE_STR: FALSE_STR,
            ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
            ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
            REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
          };
        };
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var taskSymbol = zoneSymbol('zoneTask');

      function patchTimer(window, setName, cancelName, nameSuffix) {
        var setNative = null;
        var clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        var tasksByHandleId = {};

        function scheduleTask(task) {
          var data = task.data;

          function timer() {
            try {
              task.invoke.apply(this, arguments);
            } finally {
              // issue-934, task will be cancelled
              // even it is a periodic task such as
              // setInterval
              if (!(task.data && task.data.isPeriodic)) {
                if (typeof data.handleId === 'number') {
                  // in non-nodejs env, we remove timerId
                  // from local cache
                  delete tasksByHandleId[data.handleId];
                } else if (data.handleId) {
                  // Node returns complex objects as handleIds
                  // we remove task reference from timer object
                  data.handleId[taskSymbol] = null;
                }
              }
            }
          }

          data.args[0] = timer;
          data.handleId = setNative.apply(window, data.args);
          return task;
        }

        function clearTask(task) {
          return clearNative(task.data.handleId);
        }

        setNative = patchMethod(window, setName, function (delegate) {
          return function (self, args) {
            if (typeof args[0] === 'function') {
              var _options = {
                isPeriodic: nameSuffix === 'Interval',
                delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
                args: args
              };
              var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

              if (!task) {
                return task;
              } // Node.js must additionally support the ref and unref functions.


              var handle = task.data.handleId;

              if (typeof handle === 'number') {
                // for non nodejs env, we save handleId: task
                // mapping in local cache for clearTimeout
                tasksByHandleId[handle] = task;
              } else if (handle) {
                // for nodejs env, we save task
                // reference in timerId Object for clearTimeout
                handle[taskSymbol] = task;
              } // check whether handle is null, because some polyfill or browser
              // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


              if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
                task.ref = handle.ref.bind(handle);
                task.unref = handle.unref.bind(handle);
              }

              if (typeof handle === 'number' || handle) {
                return handle;
              }

              return task;
            } else {
              // cause an error by calling it directly.
              return delegate.apply(window, args);
            }
          };
        });
        clearNative = patchMethod(window, cancelName, function (delegate) {
          return function (self, args) {
            var id = args[0];
            var task;

            if (typeof id === 'number') {
              // non nodejs env.
              task = tasksByHandleId[id];
            } else {
              // nodejs env.
              task = id && id[taskSymbol]; // other environments.

              if (!task) {
                task = id;
              }
            }

            if (task && typeof task.type === 'string') {
              if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                if (typeof id === 'number') {
                  delete tasksByHandleId[id];
                } else if (id) {
                  id[taskSymbol] = null;
                } // Do not cancel already canceled functions


                task.zone.cancelTask(task);
              }
            } else {
              // cause an error by calling it directly.
              delegate.apply(window, args);
            }
          };
        });
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCustomElements(_global, api) {
        var _api$getGlobalObjects = api.getGlobalObjects(),
            isBrowser = _api$getGlobalObjects.isBrowser,
            isMix = _api$getGlobalObjects.isMix;

        if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
          return;
        }

        var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function eventTargetPatch(_global, api) {
        if (Zone[api.symbol('patchEventTarget')]) {
          // EventTarget is already patched.
          return;
        }

        var _api$getGlobalObjects2 = api.getGlobalObjects(),
            eventNames = _api$getGlobalObjects2.eventNames,
            zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
            TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
            FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
            ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


        for (var i = 0; i < eventNames.length; i++) {
          var eventName = eventNames[i];
          var falseEventName = eventName + FALSE_STR;
          var trueEventName = eventName + TRUE_STR;
          var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
          var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
          zoneSymbolEventNames[eventName] = {};
          zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
          zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }

        var EVENT_TARGET = _global['EventTarget'];

        if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
          return;
        }

        api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
        return true;
      }

      function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('legacy', function (global) {
        var legacyPatch = global[Zone.__symbol__('legacyPatch')];

        if (legacyPatch) {
          legacyPatch();
        }
      });

      Zone.__load_patch('timers', function (global) {
        var set = 'set';
        var clear = 'clear';
        patchTimer(global, set, clear, 'Timeout');
        patchTimer(global, set, clear, 'Interval');
        patchTimer(global, set, clear, 'Immediate');
      });

      Zone.__load_patch('requestAnimationFrame', function (global) {
        patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
      });

      Zone.__load_patch('blocking', function (global, Zone) {
        var blockingMethods = ['alert', 'prompt', 'confirm'];

        for (var i = 0; i < blockingMethods.length; i++) {
          var name = blockingMethods[i];
          patchMethod(global, name, function (delegate, symbol, name) {
            return function (s, args) {
              return Zone.current.run(delegate, global, args, name);
            };
          });
        }
      });

      Zone.__load_patch('EventTarget', function (global, Zone, api) {
        patchEvent(global, api);
        eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

        var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
          api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
        }

        patchClass('MutationObserver');
        patchClass('WebKitMutationObserver');
        patchClass('IntersectionObserver');
        patchClass('FileReader');
      });

      Zone.__load_patch('on_property', function (global, Zone, api) {
        propertyDescriptorPatch(api, global);
      });

      Zone.__load_patch('customElements', function (global, Zone, api) {
        patchCustomElements(global, api);
      });

      Zone.__load_patch('XHR', function (global, Zone) {
        // Treat XMLHttpRequest as a macrotask.
        patchXHR(global);
        var XHR_TASK = zoneSymbol('xhrTask');
        var XHR_SYNC = zoneSymbol('xhrSync');
        var XHR_LISTENER = zoneSymbol('xhrListener');
        var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
        var XHR_URL = zoneSymbol('xhrURL');
        var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

        function patchXHR(window) {
          var XMLHttpRequest = window['XMLHttpRequest'];

          if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
          }

          var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

          function findPendingTask(target) {
            return target[XHR_TASK];
          }

          var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

          if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

            if (XMLHttpRequestEventTarget) {
              var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
              oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
          }

          var READY_STATE_CHANGE = 'readystatechange';
          var SCHEDULED = 'scheduled';

          function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

            var listener = target[XHR_LISTENER];

            if (!oriAddListener) {
              oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }

            if (listener) {
              oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }

            var newListener = target[XHR_LISTENER] = function () {
              if (target.readyState === target.DONE) {
                // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                // readyState=4 multiple times, so we need to check task state here
                if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                  // check whether the xhr has registered onload listener
                  // if that is the case, the task should invoke after all
                  // onload listeners finish.
                  var loadTasks = target[Zone.__symbol__('loadfalse')];

                  if (loadTasks && loadTasks.length > 0) {
                    var oriInvoke = task.invoke;

                    task.invoke = function () {
                      // need to load the tasks again, because in other
                      // load listener, they may remove themselves
                      var loadTasks = target[Zone.__symbol__('loadfalse')];

                      for (var i = 0; i < loadTasks.length; i++) {
                        if (loadTasks[i] === task) {
                          loadTasks.splice(i, 1);
                        }
                      }

                      if (!data.aborted && task.state === SCHEDULED) {
                        oriInvoke.call(task);
                      }
                    };

                    loadTasks.push(task);
                  } else {
                    task.invoke();
                  }
                } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                  // error occurs when xhr.send()
                  target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                }
              }
            };

            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];

            if (!storedTask) {
              target[XHR_TASK] = task;
            }

            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
          }

          function placeholderCallback() {}

          function clearTask(task) {
            var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.

            data.aborted = true;
            return abortNative.apply(data.target, data.args);
          }

          var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
            return function (self, args) {
              self[XHR_SYNC] = args[2] == false;
              self[XHR_URL] = args[1];
              return openNative.apply(self, args);
            };
          });
          var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
          var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
          var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
          var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
            return function (self, args) {
              if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
              }

              if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
              } else {
                var _options2 = {
                  target: self,
                  url: self[XHR_URL],
                  isPeriodic: false,
                  args: args,
                  aborted: false
                };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
                  // xhr request throw error when send
                  // we should invoke task instead of leaving a scheduled
                  // pending macroTask
                  task.invoke();
                }
              }
            };
          });
          var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
            return function (self, args) {
              var task = findPendingTask(self);

              if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || task.data && task.data.aborted) {
                  return;
                }

                task.zone.cancelTask(task);
              } else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
              } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
              // task
              // to cancel. Do nothing.

            };
          });
        }
      });

      Zone.__load_patch('geolocation', function (global) {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
          patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
      });

      Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
          return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
              // windows has added unhandledrejection event listener
              // trigger the event listener
              var PromiseRejectionEvent = global['PromiseRejectionEvent'];

              if (PromiseRejectionEvent) {
                var evt = new PromiseRejectionEvent(evtName, {
                  promise: e.promise,
                  reason: e.rejection
                });
                eventTask.invoke(evt);
              }
            });
          };
        }

        if (global['PromiseRejectionEvent']) {
          Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
          Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
        }
      });
    });
    /***/

  },

  /***/
  "./src/BaseComponent.ts":
  /*!******************************!*\
    !*** ./src/BaseComponent.ts ***!
    \******************************/

  /*! exports provided: BaseComponent, getFormValidationErrors */

  /***/
  function srcBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
      return BaseComponent;
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

    var BaseComponent =
    /*#__PURE__*/
    function () {
      // showSideBar:boolean = false //Config.showSideBar
      function BaseComponent(router) {
        _classCallCheck(this, BaseComponent);

        this.router = router;
        this.user = {};
        this.mode = "add";
        this.pageSize = _app_config__WEBPACK_IMPORTED_MODULE_1__["Config"].RECORDSIZE;
        this.pageNo = 1;
        this.submitAttempt = false;
        var stringUser = localStorage.getItem('user');
        this.user = JSON.parse(stringUser); //console.log("this.user id =="+this.user['_id'])

        if (!localStorage.getItem('isLoggedin')) {
          this.router.navigate(["/login"]);
        }
      }

      _createClass(BaseComponent, [{
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

      return BaseComponent;
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
  "./src/app/GlobalErrorHandler.ts":
  /*!***************************************!*\
    !*** ./src/app/GlobalErrorHandler.ts ***!
    \***************************************/

  /*! exports provided: GlobalErrorHandler */

  /***/
  function srcAppGlobalErrorHandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function () {
      return GlobalErrorHandler;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GlobalErrorHandler =
    /*#__PURE__*/
    function () {
      function GlobalErrorHandler() {
        _classCallCheck(this, GlobalErrorHandler);
      }

      _createClass(GlobalErrorHandler, [{
        key: "handleError",
        value: function handleError(error) {
          var chunkFailedMessage = /Loading chunk [\d]+ failed/;

          if (chunkFailedMessage.test(error.message)) {
            window.location.reload();
          }
        }
      }]);

      return GlobalErrorHandler;
    }();

    GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) {
      return new (t || GlobalErrorHandler)();
    };

    GlobalErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GlobalErrorHandler,
      factory: GlobalErrorHandler.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared */
    "./src/app/shared/index.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | layout-layout-module */
        "layout-layout-module").then(__webpack_require__.bind(null,
        /*! ./layout/layout.module */
        "./src/app/layout/layout.module.ts")).then(function (m) {
          return m.LayoutModule;
        });
      },
      canActivate: [_shared__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'digitalmarketing',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | layout-digitalmargeting-digitalmargeting-module */
        [__webpack_require__.e("common"), __webpack_require__.e("layout-digitalmargeting-digitalmargeting-module")]).then(__webpack_require__.bind(null,
        /*! ./layout/digitalmargeting/digitalmargeting.module */
        "./src/app/layout/digitalmargeting/digitalmargeting.module.ts")).then(function (m) {
          return m.DigitalmargetingModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | login-login-module */
        [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginModule;
        });
      }
    }, {
      path: 'error',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | server-error-server-error-module */
        "server-error-server-error-module").then(__webpack_require__.bind(null,
        /*! ./server-error/server-error.module */
        "./src/app/server-error/server-error.module.ts")).then(function (m) {
          return m.ServerErrorModule;
        });
      }
    }, {
      path: 'access-denied',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | access-denied-access-denied-module */
        "access-denied-access-denied-module").then(__webpack_require__.bind(null,
        /*! ./access-denied/access-denied.module */
        "./src/app/access-denied/access-denied.module.ts")).then(function (m) {
          return m.AccessDeniedModule;
        });
      }
    }, {
      path: 'not-found',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | not-found-not-found-module */
        "not-found-not-found-module").then(__webpack_require__.bind(null,
        /*! ./not-found/not-found.module */
        "./src/app/not-found/not-found.module.ts")).then(function (m) {
          return m.NotFoundModule;
        });
      }
    }, {
      path: '**',
      redirectTo: 'login'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-alerts */
    "./node_modules/ngx-alerts/__ivy_ngcc__/fesm2015/ngx-alerts.js"); //import * as $ from 'jquery';


    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router, document) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.document = document;
        this.forwardToOdhisa = false;
        console.log("documentURL ==" + this.document.location.href);
        var documentURL = this.document.location.href;
        console.log("documentURL ==" + this.document.location.href);
        console.log("digitalmarketing ==" + documentURL.indexOf("digitalmargeting"));

        if (documentURL.indexOf("digitalmarketing") > 0) {
          this.forwardToOdhisa = true;
        }

        if (this.forwardToOdhisa) {
          this.router.navigate(["/digitalmarketing"]);
        } else {
          if (!localStorage.getItem('isLoggedin')) {
            this.router.navigate(["/login"]);
          } else {
            //this.router.navigate(["/order"]);
            //this.router.navigate(["/coupon"]);
            //this.router.navigate(["/customer"]);
            //this.router.navigate(["/invoicecrm"]);
            this.router.navigate(["/listdigitalmakt"]); //this.router.navigate(["/charges"]);
            //  this.router.navigate(["/delivery"]);
            // this.router.navigate(["/discount"]);
            //this.router.navigate(["/medicine"]);
            //this.router.navigate(["/dashboard"]);
          }
        }

        console.log("this.forwardToOdhisa == " + this.forwardToOdhisa);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          document.addEventListener("deviceready", function () {
            alert(device.platform);
          }, false);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-alerts");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["ɵb"]],
      styles: ["input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=date][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=date][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUUsd0JBQUE7RUFDQSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24geyBcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxyXG4gIG1hcmdpbjogMDsgXHJcbn0iLCJpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/esm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/__ivy_ngcc__/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! core-js/es/reflect */
    "./node_modules/core-js/es/reflect/index.js");
    /* harmony import */


    var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_15___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_reflect__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! zone.js/dist/zone */
    "./node_modules/zone.js/dist/zone-evergreen.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_16___default =
    /*#__PURE__*/
    __webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");
    /* harmony import */


    var _services_data_access__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services/data-access */
    "./src/app/services/data-access.ts");
    /* harmony import */


    var _layout_activate_deactivate_activate_deactivate_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./layout/activate-deactivate/activate-deactivate.module */
    "./src/app/layout/activate-deactivate/activate-deactivate.module.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _GlobalErrorHandler__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./GlobalErrorHandler */
    "./src/app/GlobalErrorHandler.ts");
    /* harmony import */


    var ngx_alerts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-alerts */
    "./node_modules/ngx-alerts/__ivy_ngcc__/fesm2015/ngx-alerts.js"); //import { JwPaginationComponent } from 'jw-angular-pagination';
    //import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';


    var createTranslateLoader = function createTranslateLoader(http) {
      /* for development
      return new TranslateHttpLoader(
          http,
          '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
          '.json'
      ); */
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_data_access__WEBPACK_IMPORTED_MODULE_18__["DataAccess"], _shared__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbActiveModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbDatepickerConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModal"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_0__["HashLocationStrategy"]
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
        useClass: _GlobalErrorHandler__WEBPACK_IMPORTED_MODULE_21__["GlobalErrorHandler"]
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"], _layout_activate_deactivate_activate_deactivate_module__WEBPACK_IMPORTED_MODULE_19__["ActivateDeactivateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"].forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_20__["ChartsModule"], // Specify your library as an import (set timeout to -1 for unlimited timeout, the message can only be closed by the user clicking on it)
      ngx_alerts__WEBPACK_IMPORTED_MODULE_22__["AlertModule"].forRoot({
        maxMessages: 5,
        timeout: 10000,
        position: 'right'
      }), ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
        }
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_17__["NgxLoadingModule"].forRoot({
        animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_17__["ngxLoadingAnimationTypes"].wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff',
        secondaryColour: '#ffffff',
        tertiaryColour: '#ffffff'
      }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"], _layout_activate_deactivate_activate_deactivate_module__WEBPACK_IMPORTED_MODULE_19__["ActivateDeactivateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_20__["ChartsModule"], ngx_alerts__WEBPACK_IMPORTED_MODULE_22__["AlertModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_17__["NgxLoadingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"], _layout_activate_deactivate_activate_deactivate_module__WEBPACK_IMPORTED_MODULE_19__["ActivateDeactivateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"].forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_20__["ChartsModule"], // Specify your library as an import (set timeout to -1 for unlimited timeout, the message can only be closed by the user clicking on it)
          ngx_alerts__WEBPACK_IMPORTED_MODULE_22__["AlertModule"].forRoot({
            maxMessages: 5,
            timeout: 10000,
            position: 'right'
          }), ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
              useFactory: createTranslateLoader,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }
          }), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_17__["NgxLoadingModule"].forRoot({
            animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_17__["ngxLoadingAnimationTypes"].wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
          }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]],
          //    exports: [JwPaginationComponent],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
          providers: [_services_data_access__WEBPACK_IMPORTED_MODULE_18__["DataAccess"], _shared__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbActiveModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbDatepickerConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModal"], {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_0__["HashLocationStrategy"]
          }, {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
            useClass: _GlobalErrorHandler__WEBPACK_IMPORTED_MODULE_21__["GlobalErrorHandler"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
          entryComponents: [// ModalComponent
          ],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/config.ts":
  /*!***************************!*\
    !*** ./src/app/config.ts ***!
    \***************************/

  /*! exports provided: Config */

  /***/
  function srcAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Config", function () {
      return Config;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var Config = function Config() {
      _classCallCheck(this, Config);
    };

    Config.nameRegex = "[0-9a-zA-Z -@./#&+]*"; //"^[a-zA-Z]\w{3,14}$";//"^[\w\s]*$";//""/^[-@./#&+\w\s]*$/"

    Config.host = "localhost";
    Config.RECORDSIZE = 50;
    Config.productionHost = "http://drsignet-prod-alb-957410967.ap-south-1.elb.amazonaws.com:8181"; //"15.206.60.228"

    Config.forProduction = true;
    Config.showSideBar = false;
    Config.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, DELETE,GET',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',
      'Content-Type': 'application/json'
    }); //static host:any = "127.0.0.1"
    //static host:any = "http://127.0.0.1:8078"

    Config.port = "5000";
    Config.states = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"];
    Config.xcelPredefinedHeaders = [{
      fName: "name",
      fValue: "Name"
    }, {
      fName: "mrp",
      fValue: "MRP"
    }, {
      fName: "b2bPrice",
      fValue: "B2B Price"
    }, {
      fName: "gst",
      fValue: "GST"
    }, {
      fName: "hsnCode",
      fValue: "HSN CODE"
    }, {
      fName: "otherTax",
      fValue: "Other Tax"
    }, {
      fName: "discounts",
      fValue: "Discounts"
    }, {
      fName: "medicineType",
      fValue: "Type of Commodity"
    }, {
      fName: "category",
      fValue: "Category"
    }];
    Config.dateDelimitor = "-";
    /*commenting the below 2 lines change made to the following paths on March 18 2020*/
    //public static headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-this.headers: this.headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  })
    //	static catIagePrefix:any="http://"+Config.host+":"+Config.port+"/images/cat/"
    //static proIagePrefix:any="http://"+Config.host+":"+Config.port+"/images/pro/"

    Config.imagePrefix = "http://" + Config.host + ":" + Config.port + "/public/images";

    Config.ɵfac = function Config_Factory(t) {
      return new (t || Config)();
    };

    Config.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Config,
      factory: Config.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Config, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/activate-deactivate/activate-deactivate-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/layout/activate-deactivate/activate-deactivate-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: ActivateDeactivateRoutingModule */

  /***/
  function srcAppLayoutActivateDeactivateActivateDeactivateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivateDeactivateRoutingModule", function () {
      return ActivateDeactivateRoutingModule;
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


    var _activate_deactivate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./activate-deactivate.component */
    "./src/app/layout/activate-deactivate/activate-deactivate.component.ts");

    var routes = [{
      path: '',
      component: _activate_deactivate_component__WEBPACK_IMPORTED_MODULE_2__["ActivateDeactivateComponent"]
    }];

    var ActivateDeactivateRoutingModule = function ActivateDeactivateRoutingModule() {
      _classCallCheck(this, ActivateDeactivateRoutingModule);
    };

    ActivateDeactivateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ActivateDeactivateRoutingModule
    });
    ActivateDeactivateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ActivateDeactivateRoutingModule_Factory(t) {
        return new (t || ActivateDeactivateRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ActivateDeactivateRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivateDeactivateRoutingModule, [{
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
  "./src/app/layout/activate-deactivate/activate-deactivate.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/layout/activate-deactivate/activate-deactivate.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ActivateDeactivateComponent */

  /***/
  function srcAppLayoutActivateDeactivateActivateDeactivateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivateDeactivateComponent", function () {
      return ActivateDeactivateComponent;
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


    var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-toggle-switch */
    "./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");

    var _c0 = ["fileInputDemoPhoto"];
    var _c1 = ["acc"];
    var _c2 = ["content"];
    var _c3 = ["doctorFormModal"];

    function ActivateDeactivateComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivateDeactivateComponent_div_3_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.openAddDoctorDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Doctor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActivateDeactivateComponent_table_8_th_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enable/Disable");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActivateDeactivateComponent_table_8_th_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActivateDeactivateComponent_table_8_tbody_20_tr_1_td_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ui-switch", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_table_8_tbody_20_tr_1_td_11_Template_ui_switch_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var obj_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return obj_r34.active = $event;
        })("change", function ActivateDeactivateComponent_table_8_tbody_20_tr_1_td_11_Template_ui_switch_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var obj_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r40.updateStatus($event, obj_r34);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var obj_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", obj_r34.active);
      }
    }

    function ActivateDeactivateComponent_table_8_tbody_20_tr_1_td_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivateDeactivateComponent_table_8_tbody_20_tr_1_td_16_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var obj_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r43.openForeditDoctor(obj_r34);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActivateDeactivateComponent_table_8_tbody_20_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ActivateDeactivateComponent_table_8_tbody_20_tr_1_td_11_Template, 2, 1, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ActivateDeactivateComponent_table_8_tbody_20_tr_1_td_16_Template, 3, 0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var obj_r34 = ctx.$implicit;

        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", obj_r34 == null ? null : obj_r34._id, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", obj_r34 == null ? null : obj_r34.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r34.emailId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r34.mobileNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r34.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.user.role.doctor.doctor.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](obj_r34.practiceCategory);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.convertToHumanDate(obj_r34.createdDate));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.user.role.doctor.doctor.edit);
      }
    }

    var _c4 = function _c4(a1, a2, a3) {
      return {
        id: "fordoctor",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    function ActivateDeactivateComponent_table_8_tbody_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActivateDeactivateComponent_table_8_tbody_20_tr_1_Template, 17, 9, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r30.normalFiltereduserListArr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c4, ctx_r30.pageSize, ctx_r30.pageNo, ctx_r30.totalDocRecords)));
      }
    }

    function ActivateDeactivateComponent_table_8_pagination_controls_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-controls", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ActivateDeactivateComponent_table_8_pagination_controls_22_Template_pagination_controls_pageChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r46.pageChanged($event);
        })("pageBoundsCorrection", function ActivateDeactivateComponent_table_8_pagination_controls_22_Template_pagination_controls_pageBoundsCorrection_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r48.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActivateDeactivateComponent_table_8_tbody_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No record available");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActivateDeactivateComponent_table_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Doctor ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mobile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ActivateDeactivateComponent_table_8_th_13_Template, 2, 0, "th", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Speciality");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Created Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ActivateDeactivateComponent_table_8_th_18_Template, 2, 0, "th", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ActivateDeactivateComponent_table_8_tbody_20_Template, 3, 8, "tbody", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ActivateDeactivateComponent_table_8_pagination_controls_22_Template, 1, 0, "pagination-controls", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ActivateDeactivateComponent_table_8_tbody_23_Template, 4, 0, "tbody", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.user.role.doctor.doctor.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.user.role.doctor.doctor.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.normalFiltereduserListArr && ctx_r22.normalFiltereduserListArr.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.userKind == "doctor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r22.normalFiltereduserListArr && ctx_r22.normalFiltereduserListArr.length == 0);
      }
    }

    function ActivateDeactivateComponent_table_10_th_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActivateDeactivateComponent_table_10_tbody_15_tr_1_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enabled");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActivateDeactivateComponent_table_10_tbody_15_tr_1_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disabled");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActivateDeactivateComponent_table_10_tbody_15_tr_1_td_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivateDeactivateComponent_table_10_tbody_15_tr_1_td_12_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var patientObj_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r58.openForeditDoctor(patientObj_r54);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActivateDeactivateComponent_table_10_tbody_15_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ActivateDeactivateComponent_table_10_tbody_15_tr_1_span_8_Template, 2, 0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ActivateDeactivateComponent_table_10_tbody_15_tr_1_span_9_Template, 2, 0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ui-switch", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_table_10_tbody_15_tr_1_Template_ui_switch_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var patientObj_r54 = ctx.$implicit;
          return patientObj_r54.active = $event;
        })("change", function ActivateDeactivateComponent_table_10_tbody_15_tr_1_Template_ui_switch_change_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var patientObj_r54 = ctx.$implicit;

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r63.updateStatus($event, patientObj_r54);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ActivateDeactivateComponent_table_10_tbody_15_tr_1_td_12_Template, 3, 0, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var patientObj_r54 = ctx.$implicit;

        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", patientObj_r54 == null ? null : patientObj_r54.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](patientObj_r54.emailId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](patientObj_r54.emailId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", patientObj_r54.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !patientObj_r54.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", patientObj_r54.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r53.user.role.doctor.doctor.edit);
      }
    }

    var _c5 = function _c5(a1, a2, a3) {
      return {
        id: "forpatient",
        itemsPerPage: a1,
        currentPage: a2,
        totalItems: a3
      };
    };

    function ActivateDeactivateComponent_table_10_tbody_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActivateDeactivateComponent_table_10_tbody_15_tr_1_Template, 13, 7, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r50.normalFiltereduserListArr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c5, ctx_r50.pageSize, ctx_r50.pageNo, ctx_r50.totalPatientRecords)));
      }
    }

    function ActivateDeactivateComponent_table_10_pagination_controls_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-controls", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ActivateDeactivateComponent_table_10_pagination_controls_16_Template_pagination_controls_pageChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r64.pageChanged($event);
        })("pageBoundsCorrection", function ActivateDeactivateComponent_table_10_pagination_controls_16_Template_pagination_controls_pageBoundsCorrection_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r66.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActivateDeactivateComponent_table_10_tbody_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No record available");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ActivateDeactivateComponent_table_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mobile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enable/Disable");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ActivateDeactivateComponent_table_10_th_13_Template, 2, 0, "th", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ActivateDeactivateComponent_table_10_tbody_15_Template, 3, 8, "tbody", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ActivateDeactivateComponent_table_10_pagination_controls_16_Template, 1, 0, "pagination-controls", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ActivateDeactivateComponent_table_10_tbody_17_Template, 4, 0, "tbody", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.user.role.doctor.doctor.edit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.normalFiltereduserListArr && ctx_r23.normalFiltereduserListArr.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.userKind == "patient");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.normalFiltereduserListArr && ctx_r23.normalFiltereduserListArr.length == 0);
      }
    }

    function ActivateDeactivateComponent_ng_template_11_p_125_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0Fix The Error : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r68.form_fill_failure_msg, " ");
      }
    }

    function ActivateDeactivateComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivateDeactivateComponent_ng_template_11_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r69.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_ng_template_11_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r71.doctorObject.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_ng_template_11_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72.doctorObject.emailId = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_ng_template_11_Template_input_ngModelChange_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r73.doctorObject.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Date Of Birth");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_ng_template_11_Template_input_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.doctorObject.dateOfBirth = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Demographic Photo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivateDeactivateComponent_ng_template_11_Template_span_click_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.capturePhoto(null, "demographic");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActivateDeactivateComponent_ng_template_11_Template_input_change_45_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r76.capturePhoto($event, "demographic");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Issuing Authority");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Professional Photo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivateDeactivateComponent_ng_template_11_Template_span_click_60_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.capturePhoto(null, "profesional");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActivateDeactivateComponent_ng_template_11_Template_input_change_61_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r78.capturePhoto($event, "profesional");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Issuing Date ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_ng_template_11_Template_input_ngModelChange_68_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r79.doctorObject.issueingDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Valid Till ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_ng_template_11_Template_input_ngModelChange_75_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80.doctorObject.validTill = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Registered Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "input", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_ng_template_11_Template_input_ngModelChange_82_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r81.doctorObject.registeredAddress = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Practice Category");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "input", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_ng_template_11_Template_input_ngModelChange_89_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r82.doctorObject.practiceCategory = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Degree Diploma");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_ng_template_11_Template_input_ngModelChange_95_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r83.doctorObject.degreeDiploma = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "General Practice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_ng_template_11_Template_input_ngModelChange_101_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r84.doctorObject.generalPractice = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Professional Practice Experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_ng_template_11_Template_input_ngModelChange_107_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.doctorObject.professionalPracticeExperience = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Current PracticeInformation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_ng_template_11_Template_input_ngModelChange_113_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r86.doctorObject.currentPracticeInformation = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Doctor RegistrationInformation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivateDeactivateComponent_ng_template_11_Template_input_ngModelChange_119_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r87.doctorObject.doctorRegistrationInformation = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivateDeactivateComponent_ng_template_11_Template_button_click_121_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r88.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivateDeactivateComponent_ng_template_11_Template_button_click_123_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, ActivateDeactivateComponent_ng_template_11_p_125_Template, 6, 1, "p", 56);
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r25.doctorFormGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 23, ctx_r25.mode), " Doctor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.doctorObject.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r25.doctorFormGroup.get("emailId").invalid && ctx_r25.doctorFormGroup.get("emailId").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.doctorObject.emailId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.doctorObject.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.doctorObject.dateOfBirth);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx_r25.getPhoto("demographic"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx_r25.getPhoto("profesional"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.doctorObject.issueingDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.doctorObject.validTill);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.doctorObject.registeredAddress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.doctorObject.practiceCategory);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.doctorObject.degreeDiploma);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.doctorObject.generalPractice);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.doctorObject.professionalPracticeExperience);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.doctorObject.currentPracticeInformation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.doctorObject.doctorRegistrationInformation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r25.doctorFormGroup.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.submitAttempt);
      }
    }

    var ActivateDeactivateComponent =
    /*#__PURE__*/
    function (_src_BaseComponent__W) {
      _inherits(ActivateDeactivateComponent, _src_BaseComponent__W);

      var _super = _createSuper(ActivateDeactivateComponent);

      function ActivateDeactivateComponent(datePipe, router, modal, toastr, _fb, dataService) {
        var _this3;

        _classCallCheck(this, ActivateDeactivateComponent);

        _this3 = _super.call(this, router);
        _this3.datePipe = datePipe;
        _this3.router = router;
        _this3.modal = modal;
        _this3.toastr = toastr;
        _this3._fb = _fb;
        _this3.dataService = dataService;
        _this3.loading = true;
        _this3.userKind = "doctor";
        _this3.normalFiltereduserListArr = [];
        _this3.items = [];
        _this3.pageSize = _config__WEBPACK_IMPORTED_MODULE_2__["Config"].RECORDSIZE;
        _this3.pageNo = 1;
        _this3.tempArray = [];
        _this3.doctorObject = {
          name: "",
          emailId: "",
          password: "",
          active: true,
          designation: "",
          dateOfBirth: null,
          dateOfBirth1: "",
          issueingAuthority: "",
          issueingDate: null,
          fcmId: "",
          deviceId: "",
          validTill: null,
          uploadPhotoDemographicURL: "",
          uploadPhotoProfessionalURL: "",
          registeredAddress: "",
          practiceCategory: "",
          mobileNumber: "",
          uploadPhotoDemographic: "",
          degreeDiploma: "",
          generalPractice: "",
          professionalPracticeExperience: "",
          currentPracticeInformation: "",
          doctorRegistrationInformation: "",
          uploadPhotoProfessional: "",
          otp: ""
        };
        _this3.doctorObjectBase = {
          name: "",
          emailId: "",
          password: "",
          active: true,
          designation: "",
          dateOfBirth: null,
          dateOfBirth1: "",
          issueingAuthority: "",
          issueingDate: null,
          fcmId: "",
          deviceId: "",
          validTill: null,
          uploadPhotoDemographicURL: "",
          uploadPhotoProfessionalURL: "",
          registeredAddress: "",
          practiceCategory: "",
          mobileNumber: "",
          uploadPhotoDemographic: "",
          degreeDiploma: "",
          generalPractice: "",
          professionalPracticeExperience: "",
          currentPracticeInformation: "",
          doctorRegistrationInformation: "",
          uploadPhotoProfessional: "",
          otp: ""
        };

        if (!_this3.user.role.doctor.doctor.view) {
          return _possibleConstructorReturn(_this3);
        }

        if (!localStorage.getItem('isLoggedin')) {
          _this3.router.navigate(["/login"]);
        }

        _this3.oldEmail = '';
        _this3.doctorFormGroup = _fb.group({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.designation, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.dateOfBirth),
          issueingAuthority: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.issueingAuthority),
          issueingDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.issueingDate),
          active: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.active),
          fcmId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.fcmId),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.password),
          deviceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.deviceId),
          validTill: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.validTill),
          registeredAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.registeredAddress, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          practiceCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.practiceCategory, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.mobileNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          uploadPhotoDemographic: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.uploadPhotoDemographic),
          degreeDiploma: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.degreeDiploma, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          generalPractice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.generalPractice, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          professionalPracticeExperience: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.professionalPracticeExperience, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          currentPracticeInformation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.currentPracticeInformation, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          doctorRegistrationInformation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.doctorRegistrationInformation, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          uploadPhotoProfessional: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.uploadPhotoProfessional),
          emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_this3.doctorObject.emailId, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
        }); //this.doctorFormGroup.valueChanges.subscribe(data => console.log('form changes', data));

        _this3.loading = false;

        _this3.fetchDoctors();

        return _this3;
      }

      _createClass(ActivateDeactivateComponent, [{
        key: "capturePhoto",

        /* processWebImage(event) {
           let reader = new FileReader();
           try {
             reader.onload = (readerEvent) => {
                   let imageData = (readerEvent.target as any).result;
               this.doctorObject.uploadPhotoDemographic = imageData;
             };
                 reader.readAsDataURL(event.target.files[0]);
           }
           catch(error) {
            console.log('Error', error);
           }
         }
         
         getPicture(){
           this.fileInputDemoPhoto.nativeElement.click();
         }
         */
        value: function capturePhoto(event, photoType) {
          var _this4 = this;

          //  alert("I am clicked")
          var reader = new FileReader();

          try {
            reader.onload = function (readerEvent) {
              var imageData = readerEvent.target.result;
              if (photoType == 'demographic') _this4.doctorObject.uploadPhotoDemographic = imageData;
              if (photoType == 'profesional') _this4.doctorObject.uploadPhotoProfessional = imageData;
            };

            reader.readAsDataURL(event.target.files[0]);
          } catch (error) {
            console.log('Error', error);
          }
        }
      }, {
        key: "getPhoto",
        value: function getPhoto(photoType) {
          try {
            var image = this.doctorObject.uploadPhotoDemographicURL;

            if (photoType == 'demographic') {
              image = this.doctorObject.uploadPhotoDemographicURL;

              if (this.doctorObject.uploadPhotoDemographic) {
                image = this.doctorObject.uploadPhotoDemographic;
              }
            }

            if (photoType == 'profesional') {
              image = this.doctorObject.uploadPhotoProfessionalURL;

              if (this.doctorObject.uploadPhotoProfessional) {
                image = this.doctorObject.uploadPhotoProfessional;
              }
            }

            return 'url(' + image + ')';
          } catch (error) {// //console.log('Error', error);
          }
        }
      }, {
        key: "openAddDoctorDialog",
        value: function openAddDoctorDialog() {
          this.mode = "add";
          this.doctorObject = Object.assign({}, this.doctorObjectBase);
          this.modalReference = this.modal.open(this.doctorFormModal);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!localStorage.getItem('isLoggedin')) {
            this.router.navigate(["/login"]);
          } //this.pageSize = Config.RECORDSIZE;
          //this.pageNo = 1


          this.fetchDoctorsCount();
          this.fetchPatientsCount(); //   this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})
        }
      }, {
        key: "save",
        value: function save() {
          var _this5 = this;

          //alert("mode: "+this.mode)
          if (this.oldEmail != this.doctorObject.emailId && this.doctorFormGroup.controls['emailId'].touched && this.mode == "edit" || this.mode == "add") {
            var email = this.doctorFormGroup.controls.emailId.value;

            for (var i in this.normalFiltereduserListArr) {
              if (email == this.normalFiltereduserListArr[i].emailId) {
                this.submitAttempt = true;
                this.form_fill_failure_msg = "This email id already used by another user";
                return;
              }
            }
          }

          if (!this.doctorFormGroup.valid) {
            this.submitAttempt = true;
            this.validateFields(this.doctorFormGroup.controls);
            return;
          }

          if (this.doctorObject.dateOfBirth && this.doctorObject.dateOfBirth != "") {
            //      this.doctorObject.dateOfBirth = this.fromJsDateToMongoDate(this.doctorFormGroup.controls.dateOfBirth.value)
            this.doctorObject.dateOfBirth = this.fromJsDateToMongoDate(this.doctorObject.dateOfBirth);
          }

          if (this.doctorObject.dateOfBirth == null) {
            this.doctorObject.dateOfBirth = "";
          }

          if (this.doctorObject.issueingDate && this.doctorObject.issueingDate != "") {
            this.doctorObject.issueingDate = this.fromJsDateToMongoDate(this.doctorObject.issueingDate);
          }

          if (this.doctorObject.issueingDate == null) {
            this.doctorObject.issueingDate = "";
          }

          if (this.doctorObject.validTill && this.doctorObject.validTill != "") {
            this.doctorObject.validTill = this.fromJsDateToMongoDate(this.doctorObject.validTill);
          }

          if (this.doctorObject.validTill == null) {
            this.doctorObject.validTill = "";
          }

          if (this.mode == "add") {
            console.log("this.doctorObject for add == " + JSON.stringify(this.doctorObject));
            this.dataService.addDoctor(this.doctorObject).then(function (result) {
              //  console.log("result after adduser == "+JSON.stringify(result))
              _this5.fetchDoctors();

              _this5.mode = "add";

              _this5.closeModal();

              _this5.form_fill_failure_msg = "";

              _this5.toastr.successToastr('New Doctor is added successfully');
            }, function (err) {
              console.log(err);
            });
          }

          if (this.mode == "edit") {
            this.doctorObject['doctorId'] = this.doctorObject['_id'];
            console.log("this.doctorObject for edit == " + JSON.stringify(this.doctorObject));
            this.dataService.updateDoctor(this.doctorObject).then(function (result) {
              //  console.log("****** updateDoctor result   ===== **"+JSON.stringify(result))
              //this.loading = false;
              _this5.mode = "add";

              _this5.fetchDoctors();

              _this5.closeModal();

              _this5.form_fill_failure_msg = "";

              _this5.toastr.successToastr('Doctor is updated successfully');
            }, function (err) {
              _this5.mode = "add"; //this.loading = false;

              console.log(err);
            });
          }
        }
      }, {
        key: "openForeditDoctor",
        value: function openForeditDoctor(user) {
          this.oldEmail = user['emailId'];
          this.doctorObject = Object.assign({}, user);
          console.log("this.doctorObject.dateOfBirth **" + this.doctorObject.dateOfBirth); //this.doctorObject.dateOfBirth = new Date(this.doctorObject.dateOfBirth)
          //this.doctorObject.dateOfBirth =  moment(this.doctorObject.dateOfBirth).format('DD-MMM-YYYY');

          this.doctorObject.dateOfBirth = this.datePipe.transform(this.doctorObject.dateOfBirth, 'yyyy-MM-dd');
          this.doctorObject.issueingDate = this.datePipe.transform(this.doctorObject.issueingDate, 'yyyy-MM-dd');
          this.doctorObject.validTill = this.datePipe.transform(this.doctorObject.validTill, 'yyyy-MM-dd'); //this.openAddDoctorDialog()

          this.mode = "edit";
          this.modalReference = this.modal.open(this.doctorFormModal);
          console.log("this.doctorObject.dateOfBirth **" + this.doctorObject.dateOfBirth); //this.userObject.userId = user._id
          //this.role = user.role
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          console.log("****** this.event   ===== **" + event);
          this.pageNo = event;
          this.applyFilter();
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
          if (this.userKind && this.userKind == "doctor") {
            this.fetchDoctors();
          }

          if (this.userKind && this.userKind == "patient") {
            this.fetchPatients();
          }
        }
      }, {
        key: "onChangePage",
        value: function onChangePage(pageOfItems) {
          // update current page of items
          this.pageOfItems = pageOfItems;
          this.pageNo = 1;
        }
      }, {
        key: "fetchPatients",
        value: function fetchPatients() {
          var _this6 = this;

          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize
          };
          this.dataService.fetchPatients(data).then(function (result) {
            _this6.normalFiltereduserListArr = [];
            _this6.normalFiltereduserListArr = result.map(function (element) {
              return element;
            }); // console.log("****** this.normalFiltereduserListArr   ===== **"+JSON.stringify(this.normalFiltereduserListArr))

            _this6.loading = false;
          }, function (err) {
            _this6.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "fetchDoctorsCount",
        value: function fetchDoctorsCount() {
          var _this7 = this;

          //  this.pageNo = 1
          //  this.pageSize = 10
          this.dataService.fetchDoctorsCount().then(function (result) {
            console.log("****** fetchDoctorsCount result   ===== **" + JSON.stringify(result));
            _this7.totalDocRecords = result;
            console.log("****** this.totalDocRecords ===== **" + _this7.totalDocRecords);
            _this7.loading = false;
          }, function (err) {
            _this7.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "fetchPatientsCount",
        value: function fetchPatientsCount() {
          var _this8 = this;

          //  this.pageNo = 1
          //  this.pageSize = 10
          this.dataService.fetchPatientsCount().then(function (result) {
            console.log("****** fetchDoctorsCount result   ===== **" + JSON.stringify(result));
            _this8.totalPatientRecords = result;
            console.log("****** this.totalPatientRecords ===== **" + _this8.totalPatientRecords);
            _this8.loading = false;
          }, function (err) {
            _this8.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "fetchDoctors",
        value: function fetchDoctors() {
          var _this9 = this;

          //  this.pageNo = 1
          //this.pageSize = 10
          var data = {
            pageNo: this.pageNo,
            perPage: this.pageSize
          };
          this.dataService.fetchDoctors(data).then(function (result) {
            _this9.normalFiltereduserListArr = [];
            _this9.normalFiltereduserListArr = result.map(function (element) {
              return element;
            }); // console.log("****** this.normalFiltereduserListArr   ===== **"+JSON.stringify(this.normalFiltereduserListArr))

            _this9.loading = false;
          }, function (err) {
            _this9.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(value, userInfo) {
          var _this10 = this;

          // userInfo.active = value
          //  console.log("****** userInfo   ===== **"+JSON.stringify(userInfo))
          var data = {};
          userInfo.active = !userInfo.active;
          console.log("******  userInfo.active   ===== **" + userInfo.active);

          if (this.userKind && this.userKind == "doctor") {
            userInfo.doctorId = userInfo._id;
            data['doctorId'] = userInfo._id;
            data['active'] = userInfo.active;
            console.log("****** userInfo   ===== **" + JSON.stringify(data));
            this.dataService.updateDoctor(data).then(function (result) {
              //  console.log("****** updateDoctor result   ===== **"+JSON.stringify(result))
              _this10.loading = false;
            }, function (err) {
              _this10.loading = false;
              console.log(err);
            });
          }

          if (this.userKind && this.userKind == "patient") {
            userInfo.patientId = userInfo._id;
            data['patientId'] = userInfo._id;
            data['active'] = userInfo.active;
            console.log("****** userInfo   ===== **" + JSON.stringify(data));
            this.dataService.updatePatient(data).then(function (result) {
              // this.normalFiltereduserListArr = result.map(element => element)
              //  console.log("****** updatePatient result   ===== **"+JSON.stringify(result))
              _this10.loading = false;
            }, function (err) {
              _this10.loading = false;
              console.log(err);
            });
          }

          this.toastr.successToastr('User status updated successfully');
        }
      }]);

      return ActivateDeactivateComponent;
    }(src_BaseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);

    ActivateDeactivateComponent.ɵfac = function ActivateDeactivateComponent_Factory(t) {
      return new (t || ActivateDeactivateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_access__WEBPACK_IMPORTED_MODULE_8__["DataAccess"]));
    };

    ActivateDeactivateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ActivateDeactivateComponent,
      selectors: [["app-activate-deactivate"]],
      viewQuery: function ActivateDeactivateComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInputDemoPhoto = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordionComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.doctorFormModal = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 13,
      vars: 6,
      consts: [[3, "heading", "icon"], [1, "col-md-12"], ["class", "col-md-12 text-right ", 4, "ngIf"], [1, "card-body", "table-responsive", "marginLeft"], [1, "pb-3"], ["class", "table table-striped table-bordered table-sm", 4, "ngIf"], [1, "card-body", "table-responsive"], ["doctorFormModal", ""], [1, "col-md-12", "text-right"], [1, "content"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [1, "table", "table-striped", "table-bordered", "table-sm"], [4, "ngIf"], [1, "col-md-12", "text-left", "clearfix"], ["class", "my-pagination marginLeft", "id", "fordoctor", "directionLinks", "true", "maxSize", "9", "directionLinks", "true", "autoHide", "true", "responsive", "true", "previousLabel", "Prev", "nextLabel", "Next", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", "screenReaderCurrentLabel", "You're on page", 3, "pageChange", "pageBoundsCorrection", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange", "change"], [1, "btn", "btn-dark", 3, "click"], ["id", "fordoctor", "directionLinks", "true", "maxSize", "9", "directionLinks", "true", "autoHide", "true", "responsive", "true", "previousLabel", "Prev", "nextLabel", "Next", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", "screenReaderCurrentLabel", "You're on page", 1, "my-pagination", "marginLeft", 3, "pageChange", "pageBoundsCorrection"], ["colspan", "7", "align", "center"], ["class", "my-pagination", "id", "forpatient", "directionLinks", "true", "responsive", "true", "previousLabel", "Previous", "nextLabel", "Next", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", "screenReaderCurrentLabel", "You're on page", 3, "pageChange", "pageBoundsCorrection", 4, "ngIf"], ["id", "forpatient", "directionLinks", "true", "responsive", "true", "previousLabel", "Previous", "nextLabel", "Next", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", "screenReaderCurrentLabel", "You're on page", 1, "my-pagination", 3, "pageChange", "pageBoundsCorrection"], [1, "custom_timebox", "p-0", 3, "formGroup"], [1, "modal-header", "py-1"], [1, "modal-title", "headerTitle", "mb-0"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "row"], [1, "col-md-12", "form-group"], ["for", "name", 1, "labelTitles"], [1, "col-md-12", "marginTop"], ["formControlName", "name", "placeholder", "Enter name", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], ["for", "email", 1, "labelTitles"], ["type", "email", "formControlName", "emailId", "placeholder", "Enter email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "formControlName", "password", "placeholder", "Enter password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "formControlName", "dateOfBirth", "placeholder", "Enter DOB", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "marginTop", 2, "border", "0", "padding", "10"], [1, "col-md-12", "form-group", "marginTop"], [1, "profile-image-wrapper"], [1, "profile-image"], [1, "edit-icon", 3, "click"], ["type", "file", 3, "change"], ["formControlName", "issueingAuthority", "placeholder", "Enter issueingAuthority", 1, "form-control", "labelValue"], ["type", "date", "formControlName", "issueingDate", "placeholder", "Enter issueingDate", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "formControlName", "validTill", "placeholder", "Enter validTill", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "registeredAddress", "placeholder", "Enter registeredAddress", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], ["formControlName", "practiceCategory", "placeholder", "Enter practiceCategory", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], [1, "col-md-12", "form-group", "labelTitles"], ["formControlName", "degreeDiploma", "placeholder", "Enter DegreeDiploma", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], ["formControlName", "generalPractice", "placeholder", "Enter generalPractice", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], ["formControlName", "professionalPracticeExperience", "placeholder", "Enter ProfessionalPracticeExperience", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], ["formControlName", "currentPracticeInformation", "placeholder", "Enter CurrentPracticeInformation", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], ["formControlName", "doctorRegistrationInformation", "placeholder", "Enter doctorRegistrationInformation", 1, "form-control", "labelValue", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", "m-10", 3, "click"], ["class", "cutomeerrortext", 4, "ngIf"], [1, "cutomeerrortext"], [1, "redcolor", "ml-2"], [1, "fa", "fas", "fa-exclamation"]],
      template: function ActivateDeactivateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ActivateDeactivateComponent_div_3_Template, 4, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ActivateDeactivateComponent_table_8_Template, 24, 5, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ActivateDeactivateComponent_table_10_Template, 18, 4, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ActivateDeactivateComponent_ng_template_11_Template, 126, 25, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", "Doctors")("icon", "fa-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.role.doctor.doctor.create);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" List of existing ", ctx.userKind, "s ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userKind == "doctor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userKind == "patient");
        }
      },
      directives: [_shared_modules_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_9__["PageHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_10__["UiSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationControlsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]],
      pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]],
      styles: ["span.bootstrap-switch-handle-off.bootstrap-switch-default[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.profile-image-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.labelTitles[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.marginLeft[_ngcontent-%COMP%] {\n  margin-left: -25px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-image[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: white;\n  height: 25px;\n  display: inline-block;\n  width: 25px;\n  border-radius: 20%;\n  padding: 4px;\n  margin-top: -10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding-top: 7px !important;\n  padding-bottom: 2px !important;\n}\n\n.clearfix[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 14px;\n}\n\n.redcolor[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userInfo[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n}\n\n.userInfo[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 95% !important;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .usermngtableinfo[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .table-responsive[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.usermngtable[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n\npre[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.no-resize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.m-20[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.no-focus[_ngcontent-%COMP%] {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL2xheW91dC9hY3RpdmF0ZS1kZWFjdGl2YXRlL2FjdGl2YXRlLWRlYWN0aXZhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9hY3RpdmF0ZS1kZWFjdGl2YXRlL2FjdGl2YXRlLWRlYWN0aXZhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNHSjs7QURESTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNHTjs7QURDRTtFQUNFLGtCQUFBO0VBRUEsZUFBQTtBQ0NKOztBRENBO0VBRUksVUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksZ0NBQUE7QUNHSjs7QUREQTtFQUNJLG1CQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtBQ0tKOztBREhBO0VBQ0ksbUJBQUE7QUNNSjs7QURKQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDT0o7O0FETEE7RUFDSSxXQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtBQ1NKOztBRFBBO0VBQ0UsZ0JBQUE7QUNVRjs7QURSQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ1dGOztBRFRBO0VBQ0ksWUFBQTtBQ1lKOztBRFZBO0VBQ0ksWUFBQTtBQ2FKOztBRFhBO0VBQ0ksYUFBQTtBQ2NKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FjdGl2YXRlLWRlYWN0aXZhdGUvYWN0aXZhdGUtZGVhY3RpdmF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4uYm9vdHN0cmFwLXN3aXRjaC1oYW5kbGUtb2ZmLmJvb3RzdHJhcC1zd2l0Y2gtZGVmYXVsdCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLnByb2ZpbGUtaW1hZ2Utd3JhcHBlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxhYmVsVGl0bGVze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1hcmdpbkxlZnR7XHJcbiAgICBtYXJnaW4tbGVmdDotMjVweFxyXG59XHJcbi5wcm9maWxlLWltYWdlIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAgIC5lZGl0LWljb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgbWFyZ2luLXRvcDotMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDo3cHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1ib3R0b206MnB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICAuY2xlYXJmaXgge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbi5yZWRjb2xvcntcclxuICAgIFxyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvciA6IHBvaW50ZXI7XHJcbn1cclxuLnVzZXJJbmZvIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcbi51c2VySW5mbzpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuLm1vZGFsLWRpYWxvZyB7IFxyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VybW5ndGFibGUgLnVzZXJtbmd0YWJsZWluZm97XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi51c2VybW5ndGFibGUgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUgdGQgaW1nIHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59ICBcclxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51c2VybW5ndGFibGUgLmFjY29yZGlvbiAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMDtcclxufVxyXG5oMyB7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxufVxyXG5wcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4ubm8tcmVzaXplIHtcclxuICAgIHJlc2l6ZSA6IG5vbmU7XHJcbn1cclxuLm0tMjAge1xyXG4gICAgbWFyZ2luIDogMjBweDtcclxufVxyXG4ubm8tZm9jdXMge1xyXG4gICAgb3V0bGluZSA6IG5vbmU7XHJcbn0iLCJzcGFuLmJvb3RzdHJhcC1zd2l0Y2gtaGFuZGxlLW9mZi5ib290c3RyYXAtc3dpdGNoLWRlZmF1bHQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5wcm9maWxlLWltYWdlLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5sYWJlbFRpdGxlcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFyZ2luTGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMjIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnByb2ZpbGUtaW1hZ2UgLmVkaXQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cblxuLmNsZWFyZml4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yZWRjb2xvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udXNlckluZm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLnVzZXJJbmZvOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubW9kYWwtZGlhbG9nIHtcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xufVxuXG4udXNlcm1uZ3RhYmxlIC51c2VybW5ndGFibGVpbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnVzZXJtbmd0YWJsZSAudGFibGUtcmVzcG9uc2l2ZSB0YWJsZSB0ZCBpbWcge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udXNlcm1uZ3RhYmxlIC5hY2NvcmRpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXJtbmd0YWJsZSAuYWNjb3JkaW9uIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxLjI1cmVtIDA7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cblxucHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLm5vLXJlc2l6ZSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLm0tMjAge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5uby1mb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivateDeactivateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-activate-deactivate',
          templateUrl: './activate-deactivate.component.html',
          styleUrls: ['./activate-deactivate.component.scss'],
          providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
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
        doctorFormModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['doctorFormModal']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layout/activate-deactivate/activate-deactivate.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/activate-deactivate/activate-deactivate.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ActivateDeactivateModule */

  /***/
  function srcAppLayoutActivateDeactivateActivateDeactivateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivateDeactivateModule", function () {
      return ActivateDeactivateModule;
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


    var _activate_deactivate_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./activate-deactivate-routing.module */
    "./src/app/layout/activate-deactivate/activate-deactivate-routing.module.ts");
    /* harmony import */


    var _activate_deactivate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./activate-deactivate.component */
    "./src/app/layout/activate-deactivate/activate-deactivate.component.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toggle-switch */
    "./node_modules/ngx-toggle-switch/__ivy_ngcc__/ui-switch.es2015.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angularx-flatpickr */
    "./node_modules/angularx-flatpickr/__ivy_ngcc__/fesm2015/angularx-flatpickr.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js"); //import { LoadingModule } from 'ngx-loading';
    //import {NgxToggleModule} from "ngx-toggle";
    //import {DataTableModule, SharedModule, InputTextModule} from 'primeng/primeng';
    //import {PaginatorModule} from 'primeng/paginator';
    //import {DropdownModule} from 'primeng/dropdown';


    var ActivateDeactivateModule = function ActivateDeactivateModule() {
      _classCallCheck(this, ActivateDeactivateModule);
    };

    ActivateDeactivateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ActivateDeactivateModule
    });
    ActivateDeactivateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ActivateDeactivateModule_Factory(t) {
        return new (t || ActivateDeactivateModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"], _activate_deactivate_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActivateDeactivateRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_12__["NgxLoadingModule"].forRoot({
        animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_12__["ngxLoadingAnimationTypes"].wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff',
        secondaryColour: '#ffffff',
        tertiaryColour: '#ffffff'
      }), //LoadingModule ,
      ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_6__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(), //  DropdownModule,
      //PaginatorModule,
      angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__["FlatpickrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__["adapterFactory"]
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ActivateDeactivateModule, {
        declarations: [_activate_deactivate_component__WEBPACK_IMPORTED_MODULE_4__["ActivateDeactivateComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"], _activate_deactivate_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActivateDeactivateRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_12__["NgxLoadingModule"], //LoadingModule ,
        ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_6__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__["FlatpickrModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivateDeactivateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"], _activate_deactivate_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActivateDeactivateRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_12__["NgxLoadingModule"].forRoot({
            animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_12__["ngxLoadingAnimationTypes"].wanderingCubes,
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
          }), //LoadingModule ,
          ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_6__["UiSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(), //  DropdownModule,
          //PaginatorModule,
          angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__["FlatpickrModule"].forRoot(), angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot({
            provide: angular_calendar__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
            useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__["adapterFactory"]
          })],
          declarations: [_activate_deactivate_component__WEBPACK_IMPORTED_MODULE_4__["ActivateDeactivateComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data-access.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/data-access.ts ***!
    \*****************************************/

  /*! exports provided: DataAccess */

  /***/
  function srcAppServicesDataAccessTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataAccess", function () {
      return DataAccess;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../config */
    "./src/app/config.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); //import 'rxjs/add/operator/map';


    var DataAccess =
    /*#__PURE__*/
    function () {
      function DataAccess(http) {
        _classCallCheck(this, DataAccess);

        this.http = http; //apiUrl = 'http://'+Config.productionHost//'http://'+Config.host+':'+Config.port;

        this.apiUrl = 'http://' + _config__WEBPACK_IMPORTED_MODULE_1__["Config"].host + ':' + _config__WEBPACK_IMPORTED_MODULE_1__["Config"].port;
        this.headers = {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, DELETE',
          'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
          //'Access-Control-Allow-Credentials': true ,
          'Content-Type': 'application/json'
        };

        if (_config__WEBPACK_IMPORTED_MODULE_1__["Config"].forProduction) {
          this.apiUrl = _config__WEBPACK_IMPORTED_MODULE_1__["Config"].productionHost;
        } //console.log('Hello Restapi Provider = '+this.apiUrl);

      }

      _createClass(DataAccess, [{
        key: "fetchAttendantList",
        value: function fetchAttendantList(data) {
          var _this11 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          //  var data ={"jinishKey":jinishKey}
          return new Promise(function (resolve, reject) {
            _this11.http.post(_this11.apiUrl + '/api/attendant-list', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) //.map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** patient response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data = response['data']; //console.log("inside attendant-list "+data)

                resolve(_data);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchPatients",
        value: function fetchPatients(data) {
          var _this12 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          //  var data ={"jinishKey":jinishKey}
          return new Promise(function (resolve, reject) {
            _this12.http.post(_this12.apiUrl + '/api/fetchPatients', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) //.map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** patient response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data2 = response['data']; //console.log("inside fetchPatients "+data)

                resolve(_data2);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchDoctors",
        value: function fetchDoctors(data) {
          var _this13 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this13.http.post(_this13.apiUrl + '/api/fetchDoctors', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data3 = response['data']; //console.log("inside fetchPatients "+data)

                resolve(_data3);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchUsers",
        value: function fetchUsers(data) {
          var _this14 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this14.http.post(_this14.apiUrl + '/api/fetchUsers', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data4 = response['data']; //console.log("inside fetchPatients "+data)

                resolve(_data4);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "editUser",
        value: function editUser(data) {
          var _this15 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this15.http.post(_this15.apiUrl + '/api/editUser', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              ////console.log("******  response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data5 = response['data']; //console.log("inside fetchPatients "+data)

                resolve(_data5);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addUser",
        value: function addUser(data) {
          var _this16 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this16.http.post(_this16.apiUrl + '/api/addUser', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data6 = response['data']; //console.log("inside fetchPatients "+data)

                resolve(_data6);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addDoctor",
        value: function addDoctor(data) {
          var _this17 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this17.http.post(_this17.apiUrl + '/api/signup', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data7 = response['data']; //console.log("inside fetchPatients "+data)

                resolve(_data7);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllmonthsAppointment",
        value: function fetchAllmonthsAppointment() {
          var _this18 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this18.http.post(_this18.apiUrl + '/api/fetch-allmonths-appointment', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var data = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(data);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchUsersCount",
        value: function fetchUsersCount() {
          var _this19 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this19.http.post(_this19.apiUrl + '/api/fetchUsersCount', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response) {
                var data = response['data']['recordCount']; //console.log("inside fetchUsersCount "+data)

                resolve(data);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchDoctorsCount",
        value: function fetchDoctorsCount() {
          var _this20 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this20.http.post(_this20.apiUrl + '/api/fetchDoctorsCount', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response) {
                var data = response['data']['recordCount']; //console.log("inside fetchDoctorsCount "+data)

                resolve(data);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchPatientsCount",
        value: function fetchPatientsCount() {
          var _this21 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this21.http.post(_this21.apiUrl + '/api/fetchPatientsCount', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** Patient response  ===== **"+JSON.stringify(response))
              if (response) {
                var data = response['data']['recordCount']; //console.log("inside fetchPatientsCount "+data)

                resolve(data);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchMonthInvoices",
        value: function fetchMonthInvoices(data) {
          var _this22 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          // //console.log("**data   ===== **"+JSON.stringify(data))
          return new Promise(function (resolve, reject) {
            _this22.http.post(_this22.apiUrl + '/api/fetchMonthInvoices', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }).subscribe(function (response) {
              if (response && response['status'] == true) {
                var _data8 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data8);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllPatients",
        value: function fetchAllPatients(data) {
          var _this23 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this23.http.post(_this23.apiUrl + '/api/fetch-all-patients-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data9 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data9);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllLocations",
        value: function fetchAllLocations(data) {
          var _this24 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this24.http.post(_this24.apiUrl + '/api/all-practice-locations-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data10 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data10);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllMedicines",
        value: function fetchAllMedicines(data) {
          var _this25 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this25.http.post(_this25.apiUrl + '/api/fetch-all-medicines-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              ////console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data11 = response['data']; // //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data11);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllOrdersById",
        value: function fetchAllOrdersById(data) {
          var _this26 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this26.http.post(_this26.apiUrl + '/api/fetch-all-orders-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** order response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data12 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data12);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllDoctors",
        value: function fetchAllDoctors(data) {
          var _this27 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this27.http.post(_this27.apiUrl + '/api/fetch-all-doctors-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data13 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data13);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAll",
        value: function fetchAll() {
          var _this28 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this28.http.post(_this28.apiUrl + '/api/all-practice-locations-autocom', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var data = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(data);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchDaysApointment",
        value: function fetchDaysApointment() {
          var _this29 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this29.http.post(_this29.apiUrl + '/api/view-todays-appointment', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var data = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(data);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchPatientById",
        value: function fetchPatientById(data) {
          var _this30 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this30.http.post(_this30.apiUrl + '/api/fetchPatientDetails', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))       
              if (response && response['status'] == true) {
                var _data14 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data14);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchLocationById",
        value: function fetchLocationById(data) {
          var _this31 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this31.http.post(_this31.apiUrl + '/api/practice-location-byid', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))       
              if (response && response['status'] == true) {
                var _data15 = response['data']; //console.log("inside practice-location "+data)

                resolve(_data15);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchDoctrById",
        value: function fetchDoctrById(data) {
          var _this32 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this32.http.post(_this32.apiUrl + '/api/fetchDoctorDetails', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))       
              if (response && response['status'] == true) {
                var _data16 = response['data']; //console.log("inside "+data)

                resolve(_data16);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "updatePatient",
        value: function updatePatient(data) {
          var _this33 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this33.http.post(_this33.apiUrl + '/api/updateProfile', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data17 = response['data']; //  //console.log("inside fetchPatients "+data)

                resolve(_data17);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "updateDoctor",
        value: function updateDoctor(data) {
          var _this34 = this;

          var headersVal = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, DELETE',
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
            'Content-Type': 'application/json'
          });
          return new Promise(function (resolve, reject) {
            _this34.http.post(_this34.apiUrl + '/api/updateDoctor', data, {
              headers: headersVal
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** doctor response  ===== **"+JSON.stringify(response))         
              if (response && response['status'] == true) {
                var _data18 = response['data']; //  //console.log("inside fetchPatients "+data)

                resolve(_data18);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser(data) {
          var _this35 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this35.http.post(_this35.apiUrl + '/api/login-user', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }).subscribe(function (response) {
              if (response && response['status'] == true) {
                var _data19 = response['data']; //console.log("inside loginUser "+data)

                resolve(_data19);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "validateCoupon",
        value: function validateCoupon(data) {
          var _this36 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this36.http.post(_this36.apiUrl + '/api/fetch-coupon-by-code', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }).subscribe(function (response) {
              if (response && response['status'] == true) {
                var _data20 = response['data']; //console.log("inside loginUser "+data)

                resolve(_data20);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAppointmentsCount",
        value: function fetchAppointmentsCount() {
          var _this37 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this37.http.post(_this37.apiUrl + '/api/fetchAppointmentsCount', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** appointment response  ===== **"+JSON.stringify(response))
              if (response) {
                var data = response['data']['recordCount']; //console.log("inside fetchAppointmentsCount "+data)

                resolve(data);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAppointments",
        value: function fetchAppointments(data) {
          var _this38 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this38.http.post(_this38.apiUrl + '/api/fetchAppointments', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** appointment response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data21 = response['data']; //console.log("inside fetchPatients "+data)

                resolve(_data21);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addAppointment",
        value: function addAppointment(data) {
          var _this39 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this39.http.post(_this39.apiUrl + '/api/raise-appointment-request', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data22 = response['data']; //console.log("inside fetchPatients "+data)

                resolve(_data22);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "updateAppointment",
        value: function updateAppointment(data) {
          var _this40 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this40.http.post(_this40.apiUrl + '/api/update-appointment', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data23 = response['data']; //console.log("inside fetchPatients "+data)

                resolve(_data23);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchLocationsCount",
        value: function fetchLocationsCount() {
          var _this41 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this41.http.post(_this41.apiUrl + '/api/fetchLocationsCount', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** location response  ===== **"+JSON.stringify(response))
              if (response) {
                var data = response['data']['recordCount']; //console.log("inside fetchLocationsCount "+data)

                resolve(data);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchLocations",
        value: function fetchLocations(data) {
          var _this42 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this42.http.post(_this42.apiUrl + '/api/fetchLocations', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** location response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data24 = response['data']; //console.log("inside fetchPatients "+data)

                resolve(_data24);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addLocation",
        value: function addLocation(data) {
          var _this43 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this43.http.post(_this43.apiUrl + '/api/practice-location-add', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data25 = response['data']; //console.log("inside fetchPatients "+data)

                resolve(_data25);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "updateLocation",
        value: function updateLocation(data) {
          var _this44 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this44.http.post(_this44.apiUrl + '/api/practice-location-edit', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** doctor response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data26 = response['data']; //console.log("inside fetchPatients "+data)

                resolve(_data26);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchCustomers",
        value: function fetchCustomers(data) {
          var _this45 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this45.http.post(_this45.apiUrl + '/api/fetchCustomers', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** customer response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data27 = response['data']; //console.log("inside fetchcustomers "+data)

                resolve(_data27);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addCustomer",
        value: function addCustomer(data) {
          var _this46 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this46.http.post(_this46.apiUrl + '/api/addCustomer', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** customer response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data28 = response['data']; //console.log("inside fetchcustomers "+data)

                resolve(_data28);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchCustomersCount",
        value: function fetchCustomersCount() {
          var _this47 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this47.http.post(_this47.apiUrl + '/api/fetchCustomersCount', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** customer response  ===== **"+JSON.stringify(response))
              if (response) {
                var data = response['data']['recordCount']; //console.log("inside fetchCustomersCount "+data)

                resolve(data);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllCustomers",
        value: function fetchAllCustomers(data) {
          var _this48 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this48.http.post(_this48.apiUrl + '/api/fetch-all-customers-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** customer response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data29 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data29);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllPinCode",
        value: function fetchAllPinCode(data) {
          var _this49 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this49.http.post(_this49.apiUrl + '/api/fetch-all-pincode-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              console.log("****** customer response  ===== **" + JSON.stringify(response));

              if (response && response['status'] == true) {
                var _data30 = response['data'];
                console.log("inside fetch-pincode " + JSON.stringify(_data30));
                resolve(_data30);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(data) {
          var _this50 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this50.http.post(_this50.apiUrl + '/api/updateCustomer', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** customer response  ===== **"+JSON.stringify(response))         
              if (response && response['status'] == true) {
                var _data31 = response['data']; //  //console.log("inside fetchcustomers "+data)

                resolve(_data31);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchOrders",
        value: function fetchOrders(data) {
          var _this51 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this51.http.post(_this51.apiUrl + '/api/fetchOrders', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** order response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data32 = response['data']; //console.log("inside fetchorders "+data)

                resolve(_data32);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchOrdersByFilters",
        value: function fetchOrdersByFilters(data) {
          var _this52 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this52.http.post(_this52.apiUrl + '/api/fetchOrdersByFilters', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** order response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data33 = response['data']; //console.log("inside fetchorders "+data)

                resolve(_data33);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchOrdersByFilterCount",
        value: function fetchOrdersByFilterCount(data) {
          var _this53 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this53.http.post(_this53.apiUrl + '/api/fetchOrdersByFilterCount', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** order response  ===== **"+JSON.stringify(response))
              if (response && response['data'] && response['data']['recordCount']) {
                var _data34 = response['data']['recordCount']; //console.log("inside fetchOrdersCount "+data)

                resolve(_data34);
              } else if (!response) {
                reject(response);
              }

              resolve(0);
            });
          });
        }
      }, {
        key: "addOrder",
        value: function addOrder(data) {
          var _this54 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this54.http.post(_this54.apiUrl + '/api/addOrder', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** order response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data35 = response['data']; //console.log("inside fetchorders "+data)

                resolve(_data35);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addOrderPrescription",
        value: function addOrderPrescription(data) {
          var _this55 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }  
          ////console.log("data == "+JSON.stringify(this.userGroup))  
          return new Promise(function (resolve, reject) {
            _this55.http.post(_this55.apiUrl + '/api/upload-order-prescription', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** order response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data36 = response['data']; //console.log("inside fetchorders "+data)

                resolve(_data36);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchOrdersCount",
        value: function fetchOrdersCount(data) {
          var _this56 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this56.http.post(_this56.apiUrl + '/api/fetchOrdersCount', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** order response  ===== **"+JSON.stringify(response))
              if (response) {
                var _data37 = response['data']['recordCount']; //console.log("inside fetchOrdersCount "+data)

                resolve(_data37);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllOrders",
        value: function fetchAllOrders(data) {
          var _this57 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this57.http.post(_this57.apiUrl + '/api/fetch-all-orders-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** order response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data38 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data38);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllOrderPrescriptions",
        value: function fetchAllOrderPrescriptions(data) {
          var _this58 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this58.http.post(_this58.apiUrl + '/api/fetch-all-order-prescriptions-for-orders', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** order response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data39 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data39);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllCustomersNotByName",
        value: function fetchAllCustomersNotByName() {
          var _this59 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this59.http.post(_this59.apiUrl + '/api/fetch-all-customers', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** customer response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var data = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(data);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "updateOrder",
        value: function updateOrder(data) {
          var _this60 = this;

          // var headersVal:any = this.getCustomHeaders()
          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this60.http.post(_this60.apiUrl + '/api/updateOrder', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** order response  ===== **"+JSON.stringify(response))         
              if (response && response['status'] == true) {
                var _data40 = response['data']; //  //console.log("inside fetchorders "+data)

                resolve(_data40);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addInvoice",
        value: function addInvoice(data) {
          var _this61 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this61.http.post(_this61.apiUrl + '/api/invoice-create', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** invoice response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data41 = response['data']; //console.log("inside fetchinvoices "+data)

                resolve(_data41);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "updateInvoice",
        value: function updateInvoice(data) {
          var _this62 = this;

          // var headersVal:any = this.getCustomHeaders()
          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this62.http.post(_this62.apiUrl + '/api/invoice-update', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** invoice response  ===== **"+JSON.stringify(response))         
              if (response && response['status'] == true) {
                var _data42 = response['data']; //  //console.log("inside fetchinvoices "+data)

                resolve(_data42);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchInvoicesCount",
        value: function fetchInvoicesCount() {
          var _this63 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this63.http.post(_this63.apiUrl + '/api/fetchInvoicesCount', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** invoice response  ===== **"+JSON.stringify(response))
              if (response) {
                var data = response['data']['recordCount']; //console.log("inside fetchInvoicesCount "+data)

                resolve(data);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchInvoices",
        value: function fetchInvoices(data) {
          var _this64 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this64.http.post(_this64.apiUrl + '/api/fetchInvoices', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** invoice response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data43 = response['data']; //console.log("inside fetchPatients "+data)

                resolve(_data43);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchMedicines",
        value: function fetchMedicines(data) {
          var _this65 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this65.http.post(_this65.apiUrl + '/api/fetchMedicines', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** medicine response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data44 = response['data']; //console.log("inside fetchmedicines "+data)

                resolve(_data44);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addMedicine",
        value: function addMedicine(data) {
          var _this66 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this66.http.post(_this66.apiUrl + '/api/addMedicine', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** medicine response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data45 = response['data']; //console.log("inside fetchmedicines "+data)

                resolve(_data45);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "insertBulkMedicine",
        value: function insertBulkMedicine(data) {
          var _this67 = this;

          return new Promise(function (resolve, reject) {
            _this67.http.post(_this67.apiUrl + '/api/insertBulkMedicine', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** medicine response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data46 = response['data']; //console.log("inside fetchmedicines "+data)

                resolve(_data46);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchMedicineCategory",
        value: function fetchMedicineCategory() {
          var _this68 = this;

          return new Promise(function (resolve, reject) {
            _this68.http.post(_this68.apiUrl + '/api/fetchMedicineCategory', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** medicine response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var data = response['data']; //console.log("inside fetchmedicines "+data)

                resolve(data);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchMedicinesCount",
        value: function fetchMedicinesCount() {
          var _this69 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this69.http.post(_this69.apiUrl + '/api/fetchMedicinesCount', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** medicine response  ===== **"+JSON.stringify(response))
              if (response) {
                var data = response['data']['recordCount']; //console.log("inside fetchMedicinesCount "+data)

                resolve(data);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
        /*
        
        fetchAllMedicines(data){
          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
        
        return new Promise((resolve,reject) => {
        this.http.post(this.apiUrl+'/api/fetch-all-medicines-autocom',data,{headers : Config.headers})
         // .map(res => res.json())
          .subscribe(response => {
                        
          //  //console.log("****** medicine response  ===== **"+JSON.stringify(response))
           
            if(response && response['status'] == true){
              let data = response['data']
              //console.log("inside fetch-allmonths-appointment "+data)
              resolve(data);
            }else if(response && response['status'] == false){
              reject(response)
            }
        
          });
        });
        
        }
        */

      }, {
        key: "updateMedicine",
        value: function updateMedicine(data) {
          var _this70 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this70.http.post(_this70.apiUrl + '/api/updateMedicine', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** medicine response  ===== **"+JSON.stringify(response))         
              if (response && response['status'] == true) {
                var _data47 = response['data']; //  //console.log("inside fetchmedicines "+data)

                resolve(_data47);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchCategorys",
        value: function fetchCategorys(data) {
          var _this71 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this71.http.post(_this71.apiUrl + '/api/fetchCategorys', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** category response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data48 = response['data']; //console.log("inside fetchcategorys "+data)

                resolve(_data48);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addCategory",
        value: function addCategory(data) {
          var _this72 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this72.http.post(_this72.apiUrl + '/api/addCategory', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** category response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data49 = response['data']; //console.log("inside fetchcategorys "+data)

                resolve(_data49);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchCategorysCount",
        value: function fetchCategorysCount() {
          var _this73 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this73.http.post(_this73.apiUrl + '/api/fetchCategorysCount', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** category response  ===== **"+JSON.stringify(response))
              if (response) {
                var data = response['data']['recordCount']; //console.log("inside fetchCategorysCount "+data)

                resolve(data);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllCategorys",
        value: function fetchAllCategorys(data) {
          var _this74 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this74.http.post(_this74.apiUrl + '/api/fetch-all-categorys-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** category response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data50 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data50);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(data) {
          var _this75 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this75.http.post(_this75.apiUrl + '/api/updateMedicineCategory', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** category response  ===== **"+JSON.stringify(response))         
              if (response && response['status'] == true) {
                var _data51 = response['data']; //  //console.log("inside fetchcategorys "+data)

                resolve(_data51);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchDeliverys",
        value: function fetchDeliverys(data) {
          var _this76 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this76.http.post(_this76.apiUrl + '/api/fetchDeliverys', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** delivery response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data52 = response['data']; //console.log("inside fetchdeliverys "+data)

                resolve(_data52);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addDelivery",
        value: function addDelivery(data) {
          var _this77 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this77.http.post(_this77.apiUrl + '/api/addDeliverys', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** delivery response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data53 = response['data']; //console.log("inside fetchdeliverys "+data)

                resolve(_data53);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchDeliverysCount",
        value: function fetchDeliverysCount() {
          var _this78 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this78.http.post(_this78.apiUrl + '/api/fetchDeliverysCount', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** delivery response  ===== **"+JSON.stringify(response))
              if (response) {
                var data = response['data']['recordCount']; //console.log("inside fetchDeliverysCount "+data)

                resolve(data);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllDeliverys",
        value: function fetchAllDeliverys(data) {
          var _this79 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this79.http.post(_this79.apiUrl + '/api/fetch-all-deliverys-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** delivery response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data54 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data54);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "updateDelivery",
        value: function updateDelivery(data) {
          var _this80 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this80.http.post(_this80.apiUrl + '/api/updateDeliverys', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** delivery response  ===== **"+JSON.stringify(response))         
              if (response && response['status'] == true) {
                var _data55 = response['data']; //  //console.log("inside fetchdeliverys "+data)

                resolve(_data55);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchCoupons",
        value: function fetchCoupons(data) {
          var _this81 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this81.http.post(_this81.apiUrl + '/api/fetchCoupons', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** coupon response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data56 = response['data']; //console.log("inside fetchcoupons "+data)

                resolve(_data56);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addCoupon",
        value: function addCoupon(data) {
          var _this82 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this82.http.post(_this82.apiUrl + '/api/addCoupons', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** coupon response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data57 = response['data']; //console.log("inside fetchcoupons "+data)

                resolve(_data57);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchCouponsCount",
        value: function fetchCouponsCount() {
          var _this83 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this83.http.post(_this83.apiUrl + '/api/fetchCouponsCount', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** coupon response  ===== **"+JSON.stringify(response))
              if (response) {
                var data = response['data']['recordCount']; //console.log("inside fetchCouponsCount "+data)

                resolve(data);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllCoupons",
        value: function fetchAllCoupons(data) {
          var _this84 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this84.http.post(_this84.apiUrl + '/api/fetch-all-coupons-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** coupon response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data58 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data58);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "updateCoupon",
        value: function updateCoupon(data) {
          var _this85 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this85.http.post(_this85.apiUrl + '/api/updateCoupons', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** coupon response  ===== **"+JSON.stringify(response))         
              if (response && response['status'] == true) {
                var _data59 = response['data']; //  //console.log("inside fetchcoupons "+data)

                resolve(_data59);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchChargess",
        value: function fetchChargess(data) {
          var _this86 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this86.http.post(_this86.apiUrl + '/api/fetchServiceChargess', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** charges response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data60 = response['data']; //console.log("inside fetchchargess "+data)

                resolve(_data60);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addCharges",
        value: function addCharges(data) {
          var _this87 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this87.http.post(_this87.apiUrl + '/api/addCharges', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** charges response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data61 = response['data']; //console.log("inside fetchchargess "+data)

                resolve(_data61);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchChargessCount",
        value: function fetchChargessCount() {
          var _this88 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this88.http.post(_this88.apiUrl + '/api/fetchServiceChargessCount', {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** charges response  ===== **"+JSON.stringify(response))
              if (response) {
                var data = response['data']['recordCount']; //console.log("inside fetchChargessCount "+data)

                resolve(data);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllChargess",
        value: function fetchAllChargess(data) {
          var _this89 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this89.http.post(_this89.apiUrl + '/api/fetch-all-chargess-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** charges response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data62 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data62);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "updateCharges",
        value: function updateCharges(data) {
          var _this90 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this90.http.post(_this90.apiUrl + '/api/updateMedicineCharges', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** charges response  ===== **"+JSON.stringify(response))         
              if (response && response['status'] == true) {
                var _data63 = response['data']; //  //console.log("inside fetchchargess "+data)

                resolve(_data63);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchDiscounts",
        value: function fetchDiscounts(data) {
          var _this91 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this91.http.post(_this91.apiUrl + '/api/fetchDiscounts', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** discount response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data64 = response['data']; //console.log("inside fetchdiscounts "+data)

                resolve(_data64);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchDiscountsByFilters",
        value: function fetchDiscountsByFilters(data) {
          var _this92 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this92.http.post(_this92.apiUrl + '/api/fetchDiscountsByFilters', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** discount response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data65 = response['data']; //console.log("inside fetchdiscounts "+data)

                resolve(_data65);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchDiscountsByFilterCount",
        value: function fetchDiscountsByFilterCount(data) {
          var _this93 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this93.http.post(_this93.apiUrl + '/api/fetchDiscountsByFilterCount', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** discount response  ===== **"+JSON.stringify(response))
              if (response && response['data'] && response['data']['recordCount']) {
                var _data66 = response['data']['recordCount']; //console.log("inside fetchDiscountsCount "+data)

                resolve(_data66);
              } else if (!response) {
                reject(response);
              }

              resolve(0);
            });
          });
        }
      }, {
        key: "addDiscount",
        value: function addDiscount(data) {
          var _this94 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this94.http.post(_this94.apiUrl + '/api/addDiscount', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** discount response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data67 = response['data']; //console.log("inside fetchdiscounts "+data)

                resolve(_data67);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addDiscountPrescription",
        value: function addDiscountPrescription(data) {
          var _this95 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }  
          ////console.log("data == "+JSON.stringify(this.userGroup))  
          return new Promise(function (resolve, reject) {
            _this95.http.post(_this95.apiUrl + '/api/upload-discount-prescription', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** discount response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data68 = response['data']; //console.log("inside fetchdiscounts "+data)

                resolve(_data68);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchDiscountsCount",
        value: function fetchDiscountsCount(data) {
          var _this96 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this96.http.post(_this96.apiUrl + '/api/fetchDiscountsCount', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** discount response  ===== **"+JSON.stringify(response))
              if (response) {
                var _data69 = response['data']['recordCount']; //console.log("inside fetchDiscountsCount "+data)

                resolve(_data69);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllDiscounts",
        value: function fetchAllDiscounts(data) {
          var _this97 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this97.http.post(_this97.apiUrl + '/api/fetch-all-discounts-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** discount response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data70 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data70);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "updateDiscount",
        value: function updateDiscount(data) {
          var _this98 = this;

          // var headersVal:any = this.getCustomHeaders()
          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this98.http.post(_this98.apiUrl + '/api/updateDiscount', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** discount response  ===== **"+JSON.stringify(response))         
              if (response && response['status'] == true) {
                var _data71 = response['data']; //  //console.log("inside fetchdiscounts "+data)

                resolve(_data71);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchInvoicecrms",
        value: function fetchInvoicecrms(data) {
          var _this99 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this99.http.post(_this99.apiUrl + '/api/fetchInvoicecrms', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data72 = response['data']; //console.log("inside fetchinvoicecrms "+data)

                resolve(_data72);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "sendOTP",
        value: function sendOTP(data) {
          var _this100 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this100.http.post(_this100.apiUrl + '/api/send-otp-dm', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data73 = response['data']; //console.log("inside fetchinvoicecrms "+data)

                resolve(_data73);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchInvoicecrmsByFilters",
        value: function fetchInvoicecrmsByFilters(data) {
          var _this101 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this101.http.post(_this101.apiUrl + '/api/fetchInvoicecrmsByFilters', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data74 = response['data']; //console.log("inside fetchinvoicecrms "+data)

                resolve(_data74);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchInvoicecrmsByFilterCount",
        value: function fetchInvoicecrmsByFilterCount(data) {
          var _this102 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this102.http.post(_this102.apiUrl + '/api/fetchInvoicecrmsByFilterCount', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))
              if (response && response['data'] && response['data']['recordCount']) {
                var _data75 = response['data']['recordCount']; //console.log("inside fetchInvoicecrmsCount "+data)

                resolve(_data75);
              } else if (!response) {
                reject(response);
              }

              resolve(0);
            });
          });
        }
      }, {
        key: "addInvoicecrm",
        value: function addInvoicecrm(data) {
          var _this103 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this103.http.post(_this103.apiUrl + '/api/addInvoicecrm', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data76 = response['data']; //console.log("inside fetchinvoicecrms "+data)

                resolve(_data76);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addInvoicecrmPrescription",
        value: function addInvoicecrmPrescription(data) {
          var _this104 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }  
          ////console.log("data == "+JSON.stringify(this.userGroup))  
          return new Promise(function (resolve, reject) {
            _this104.http.post(_this104.apiUrl + '/api/upload-invoicecrm-prescription', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data77 = response['data']; //console.log("inside fetchinvoicecrms "+data)

                resolve(_data77);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchInvoicecrmsCount",
        value: function fetchInvoicecrmsCount(data) {
          var _this105 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this105.http.post(_this105.apiUrl + '/api/fetchInvoicecrmsCount', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))
              if (response) {
                var _data78 = response['data']['recordCount']; //console.log("inside fetchInvoicecrmsCount "+data)

                resolve(_data78);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllInvoicecrms",
        value: function fetchAllInvoicecrms(data) {
          var _this106 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this106.http.post(_this106.apiUrl + '/api/fetch-all-invoicecrms-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data79 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data79);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllInvoicecrmPrescriptions",
        value: function fetchAllInvoicecrmPrescriptions(data) {
          var _this107 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this107.http.post(_this107.apiUrl + '/api/fetch-all-invoicecrm-prescriptions-for-invoicecrms', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data80 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data80);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "updateInvoicecrm",
        value: function updateInvoicecrm(data) {
          var _this108 = this;

          // var headersVal:any = this.getCustomHeaders()
          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this108.http.post(_this108.apiUrl + '/api/updateInvoicecrm', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** invoicecrm response  ===== **"+JSON.stringify(response))         
              if (response && response['status'] == true) {
                var _data81 = response['data']; //  //console.log("inside fetchinvoicecrms "+data)

                resolve(_data81);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchMedicinesByFilters",
        value: function fetchMedicinesByFilters(data) {
          var _this109 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this109.http.post(_this109.apiUrl + '/api/fetchMedicinesByFilters', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** order response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data82 = response['data']; //console.log("inside fetchmedicines "+data)

                resolve(_data82);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchMedicinesByFilterCount",
        value: function fetchMedicinesByFilterCount(data) {
          var _this110 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this110.http.post(_this110.apiUrl + '/api/fetchMedicinesByFilterCount', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** order response  ===== **"+JSON.stringify(response))
              if (response && response['data'] && response['data']['recordCount']) {
                var _data83 = response['data']['recordCount']; //console.log("inside fetchMedicinesCount "+data)

                resolve(_data83);
              } else if (!response) {
                reject(response);
              }

              resolve(0);
            });
          });
        }
      }, {
        key: "fetchDigitalmargetings",
        value: function fetchDigitalmargetings(data) {
          var _this111 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this111.http.post(_this111.apiUrl + '/api/fetchDigitalmargeting', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** digitalmargeting response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data84 = response['data']; //console.log("inside fetchdigitalmargetings "+data)

                resolve(_data84);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addDigitalmargeting",
        value: function addDigitalmargeting(data) {
          var _this112 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          ////console.log("data == "+JSON.stringify(this.userGroup))
          return new Promise(function (resolve, reject) {
            _this112.http.post(_this112.apiUrl + '/api/addDigitalmarketing', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** digitalmargeting response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data85 = response['data']; //console.log("inside fetchdigitalmargetings "+data)

                resolve(_data85);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "addDigitalmargetingPrescription",
        value: function addDigitalmargetingPrescription(data) {
          var _this113 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }  
          ////console.log("data == "+JSON.stringify(this.userGroup))  
          return new Promise(function (resolve, reject) {
            _this113.http.post(_this113.apiUrl + '/api/upload-digitalmargeting-prescription', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** digitalmargeting response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data86 = response['data']; //console.log("inside fetchdigitalmargetings "+data)

                resolve(_data86);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchDigitalmargetingsCount",
        value: function fetchDigitalmargetingsCount(data) {
          var _this114 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this114.http.post(_this114.apiUrl + '/api/fetchDigitalmarketingCount', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** digitalmargeting response  ===== **"+JSON.stringify(response))
              if (response) {
                var _data87 = response['data']['recordCount']; //console.log("inside fetchDigitalmargetingsCount "+data)

                resolve(_data87);
              } else if (!response) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllDigitalmargetings",
        value: function fetchAllDigitalmargetings(data) {
          var _this115 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this115.http.post(_this115.apiUrl + '/api/fetch-all-digitalmargetings-autocom', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** digitalmargeting response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data88 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data88);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "fetchAllDigitalmargetingPrescriptions",
        value: function fetchAllDigitalmargetingPrescriptions(data) {
          var _this116 = this;

          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this116.http.post(_this116.apiUrl + '/api/fetch-all-digitalmargeting-prescriptions-for-digitalmargetings', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //  //console.log("****** digitalmargeting response  ===== **"+JSON.stringify(response))
              if (response && response['status'] == true) {
                var _data89 = response['data']; //console.log("inside fetch-allmonths-appointment "+data)

                resolve(_data89);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }, {
        key: "updateDigitalmargeting",
        value: function updateDigitalmargeting(data) {
          var _this117 = this;

          // var headersVal:any = this.getCustomHeaders()
          //const headers = { 'Access-Control-Allow-Origin': '*',   'Access-Control-Allow-Methods': 'POST, DELETE,GET',    'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',       'Content-Type': 'application/json'  }
          return new Promise(function (resolve, reject) {
            _this117.http.post(_this117.apiUrl + '/api/updateDigitalmargeting', data, {
              headers: _config__WEBPACK_IMPORTED_MODULE_1__["Config"].headers
            }) // .map(res => res.json()) 
            .subscribe(function (response) {
              //console.log("****** digitalmargeting response  ===== **"+JSON.stringify(response))         
              if (response && response['status'] == true) {
                var _data90 = response['data']; //  //console.log("inside fetchdigitalmargetings "+data)

                resolve(_data90);
              } else if (response && response['status'] == false) {
                reject(response);
              }
            });
          });
        }
      }]);

      return DataAccess;
    }();

    DataAccess.ɵfac = function DataAccess_Factory(t) {
      return new (t || DataAccess)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    DataAccess.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataAccess,
      factory: DataAccess.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataAccess, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/guard/auth.guard.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/guard/auth.guard.ts ***!
    \********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (localStorage.getItem('isLoggedin')) {
            return true;
          }

          this.router.navigate(['/login']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/guard/index.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/guard/index.ts ***!
    \***************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSharedGuardIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/shared/guard/auth.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
    });
    /***/

  },

  /***/
  "./src/app/shared/index.ts":
  /*!*********************************!*\
    !*** ./src/app/shared/index.ts ***!
    \*********************************/

  /*! exports provided: PageHeaderModule, StatModule, RptModule, AuthGuard */

  /***/
  function srcAppSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./modules */
    "./src/app/shared/modules/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function () {
      return _modules__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StatModule", function () {
      return _modules__WEBPACK_IMPORTED_MODULE_0__["StatModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RptModule", function () {
      return _modules__WEBPACK_IMPORTED_MODULE_0__["RptModule"];
    });
    /* harmony import */


    var _guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./guard */
    "./src/app/shared/guard/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"];
    }); //export * from './pipes/shared-pipes.module';
    // export * from './common-methods/common-methods';

    /***/

  },

  /***/
  "./src/app/shared/modules/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/modules/index.ts ***!
    \*****************************************/

  /*! exports provided: PageHeaderModule, StatModule, RptModule */

  /***/
  function srcAppSharedModulesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./page-header/page-header.module */
    "./src/app/shared/modules/page-header/page-header.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function () {
      return _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"];
    });
    /* harmony import */


    var _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./stat/stat.module */
    "./src/app/shared/modules/stat/stat.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StatModule", function () {
      return _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__["StatModule"];
    });
    /* harmony import */


    var _rpt_rpt_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./rpt/rpt.module */
    "./src/app/shared/modules/rpt/rpt.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RptModule", function () {
      return _rpt_rpt_module__WEBPACK_IMPORTED_MODULE_2__["RptModule"];
    });
    /***/

  },

  /***/
  "./src/app/shared/modules/page-header/page-header.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/modules/page-header/page-header.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PageHeaderComponent */

  /***/
  function srcAppSharedModulesPageHeaderPageHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function () {
      return PageHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageHeaderComponent =
    /*#__PURE__*/
    function () {
      function PageHeaderComponent() {
        _classCallCheck(this, PageHeaderComponent);
      }

      _createClass(PageHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageHeaderComponent;
    }();

    PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) {
      return new (t || PageHeaderComponent)();
    };

    PageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageHeaderComponent,
      selectors: [["app-page-header"]],
      inputs: {
        heading: "heading",
        icon: "icon"
      },
      decls: 4,
      vars: 1,
      consts: [[1, "row"], [1, "col-xl-12"], [1, "page-header"]],
      template: function PageHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.heading, " ");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-header',
          templateUrl: './page-header.component.html',
          styleUrls: ['./page-header.component.scss']
        }]
      }], function () {
        return [];
      }, {
        heading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/page-header/page-header.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/modules/page-header/page-header.module.ts ***!
    \******************************************************************/

  /*! exports provided: PageHeaderModule */

  /***/
  function srcAppSharedModulesPageHeaderPageHeaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function () {
      return PageHeaderModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-header.component */
    "./src/app/shared/modules/page-header/page-header.component.ts");

    var PageHeaderModule = function PageHeaderModule() {
      _classCallCheck(this, PageHeaderModule);
    };

    PageHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PageHeaderModule
    });
    PageHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PageHeaderModule_Factory(t) {
        return new (t || PageHeaderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageHeaderModule, {
        declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageHeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]],
          exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/rpt/rpt.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/modules/rpt/rpt.component.ts ***!
    \*****************************************************/

  /*! exports provided: RptComponent */

  /***/
  function srcAppSharedModulesRptRptComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RptComponent", function () {
      return RptComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RptComponent =
    /*#__PURE__*/
    function () {
      function RptComponent() {
        _classCallCheck(this, RptComponent);

        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(RptComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RptComponent;
    }();

    RptComponent.ɵfac = function RptComponent_Factory(t) {
      return new (t || RptComponent)();
    };

    RptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RptComponent,
      selectors: [["app-rpt"]],
      inputs: {
        bgClass: "bgClass",
        icon: "icon",
        count: "count",
        label: "label",
        data: "data"
      },
      outputs: {
        event: "event"
      },
      decls: 10,
      vars: 8,
      consts: [[1, "card-header"], [1, "row"], [1, "col", "col-xs-3", "col-md-4", "col-lg-3"], [1, "col", "col-xs-9", "col-md-8", "col-lg-9"], [1, "huge"], [1, "d-block"]],
      template: function RptComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card bg-", ctx.bgClass, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa ", ctx.icon, " fa-3x opacity-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        }
      },
      styles: [".opacity-5[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.opacity-3[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n.no-margin[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.d-block[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvdXJhdi9BbmRyb2lkL01QUk9KRUNUL29mZmljZS9hbmd1bGFyUHJvamVjdC9hbmd1bGFyYmFzZS9zcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3JwdC9ycHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3JwdC9ycHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxTQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZHVsZXMvcnB0L3JwdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcGFjaXR5LTUge1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuLm9wYWNpdHktMyB7XHJcbiAgICBvcGFjaXR5OiAuMztcclxufVxyXG4ubm8tbWFyZ2luIHtcclxuICAgIG1hcmdpbjogMFxyXG59XHJcbi5kLWJsb2NrIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbi8vIC5jb2wtbWQtNCB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICByaWdodDogMDtcclxuLy8gICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjMpO1xyXG4vLyAgICAgdG9wOiAxMyU7XHJcbi8vICAgICBib3R0b206IC0yNCU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICBwYWRkaW5nOiAxNXB4IDQwcHg7XHJcbi8vICAgICByaWdodDogLTE5JTtcclxuLy8gICAgIGhlaWdodDogMTUwcHg7XHJcbi8vICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4vLyAgICAgd2lkdGg6IDE1MHB4O1xyXG4vLyB9IiwiLm9wYWNpdHktNSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm9wYWNpdHktMyB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLm5vLW1hcmdpbiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmQtYmxvY2sge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RptComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rpt',
          templateUrl: './rpt.component.html',
          styleUrls: ['./rpt.component.scss']
        }]
      }], function () {
        return [];
      }, {
        bgClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/rpt/rpt.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/modules/rpt/rpt.module.ts ***!
    \**************************************************/

  /*! exports provided: RptModule */

  /***/
  function srcAppSharedModulesRptRptModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RptModule", function () {
      return RptModule;
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


    var _rpt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./rpt.component */
    "./src/app/shared/modules/rpt/rpt.component.ts");

    var RptModule = function RptModule() {
      _classCallCheck(this, RptModule);
    };

    RptModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RptModule
    });
    RptModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RptModule_Factory(t) {
        return new (t || RptModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RptModule, {
        declarations: [_rpt_component__WEBPACK_IMPORTED_MODULE_2__["RptComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_rpt_component__WEBPACK_IMPORTED_MODULE_2__["RptComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RptModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_rpt_component__WEBPACK_IMPORTED_MODULE_2__["RptComponent"]],
          exports: [_rpt_component__WEBPACK_IMPORTED_MODULE_2__["RptComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/stat/stat.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/modules/stat/stat.component.ts ***!
    \*******************************************************/

  /*! exports provided: StatComponent */

  /***/
  function srcAppSharedModulesStatStatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatComponent", function () {
      return StatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StatComponent =
    /*#__PURE__*/
    function () {
      function StatComponent() {
        _classCallCheck(this, StatComponent);

        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(StatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StatComponent;
    }();

    StatComponent.ɵfac = function StatComponent_Factory(t) {
      return new (t || StatComponent)();
    };

    StatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatComponent,
      selectors: [["app-stat"]],
      inputs: {
        bgClass: "bgClass",
        icon: "icon",
        count: "count",
        label: "label",
        data: "data"
      },
      outputs: {
        event: "event"
      },
      decls: 16,
      vars: 9,
      consts: [[1, "card-header"], [1, "row"], [1, "col", "col-xs-3"], [1, "col", "col-xs-9", "text-right"], [1, "d-block", "huge"], [1, "d-block"], [1, "card-footer"], [1, "float-left"], ["href", "javascript:void(0)", 1, "float-right"], [1, "fa", "fa-arrow-circle-right"]],
      template: function StatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card text-white bg-", ctx.bgClass, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa ", ctx.icon, " fa-5x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("View Details ", ctx.data, "");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3N0YXQvc3RhdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-stat',
          templateUrl: './stat.component.html',
          styleUrls: ['./stat.component.scss']
        }]
      }], function () {
        return [];
      }, {
        bgClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/modules/stat/stat.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/modules/stat/stat.module.ts ***!
    \****************************************************/

  /*! exports provided: StatModule */

  /***/
  function srcAppSharedModulesStatStatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatModule", function () {
      return StatModule;
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


    var _stat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./stat.component */
    "./src/app/shared/modules/stat/stat.component.ts");

    var StatModule = function StatModule() {
      _classCallCheck(this, StatModule);
    };

    StatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StatModule
    });
    StatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function StatModule_Factory(t) {
        return new (t || StatModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StatModule, {
        declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_2__["StatComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_stat_component__WEBPACK_IMPORTED_MODULE_2__["StatComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_2__["StatComponent"]],
          exports: [_stat_component__WEBPACK_IMPORTED_MODULE_2__["StatComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/sourav/Android/MPROJECT/office/angularProject/angularbase/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map