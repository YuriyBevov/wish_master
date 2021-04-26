/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/scripts/index.js":
/*!*********************************!*\
  !*** ./source/scripts/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modernizrWebp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modernizrWebp.js */ "./source/scripts/modules/modernizrWebp.js");
/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sendForm */ "./source/scripts/modules/sendForm.js");






/***/ }),

/***/ "./source/scripts/modules/modals/modalState.js":
/*!*****************************************************!*\
  !*** ./source/scripts/modules/modals/modalState.js ***!
  \*****************************************************/
/*! exports provided: modalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalState", function() { return modalState; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./source/scripts/modules/utils.js");


const modalState = (modal) => {

  if (modal) {
    const closeBtn = modal.querySelector('.modal__close');

    const onCloseBtnClickHandler = () => {
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["addClass"])(modal,'closed');
    }

    const onEscBtnHandler = (evt) => {
      if (evt.keyCode === 27) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["addClass"])(modal,'closed');
      }
    }

    const onMousedownHandler = (evt) => {
      const modalContent = modal.querySelector('.modal__wrapper');
      const clickArea = evt.target == modalContent || modalContent.contains(evt.target);
      if(!clickArea) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["addClass"])(modal, 'closed');
      }
    }

    const openModal = () => {
      modal.classList.remove('closed');

      setTimeout(function() {
        window.addEventListener('keydown', onEscBtnHandler);
        window.addEventListener('mousedown', onMousedownHandler);
        closeBtn.addEventListener('click', onCloseBtnClickHandler);
      }, 700);
    }
    openModal();
  }
};




/***/ }),

/***/ "./source/scripts/modules/modernizrWebp.js":
/*!*************************************************!*\
  !*** ./source/scripts/modules/modernizrWebp.js ***!
  \*************************************************/
/*! exports provided: modernizrWebp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modernizrWebp", function() { return modernizrWebp; });
/* harmony import */ var _plugins_modernizr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugins/modernizr.js */ "./source/scripts/plugins/modernizr.js");
/* harmony import */ var _plugins_modernizr_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_modernizr_js__WEBPACK_IMPORTED_MODULE_0__);


const modernizrWebp = function() {
    Modernizr.on('webp', function() {
  });
}();


/***/ }),

/***/ "./source/scripts/modules/sendForm.js":
/*!********************************************!*\
  !*** ./source/scripts/modules/sendForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modals_modalState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals/modalState.js */ "./source/scripts/modules/modals/modalState.js");


function sendForm() {
  const form = document.getElementById('opinion-form')
  const submitButton = form.querySelector('button[type="submit"]')

  submitButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    console.log('send')

    const thanksModal = document.querySelector('.modal-success')
    const errorModal = document.querySelector('.modal-error')
  
    function success() {
      form.reset();
      Object(_modals_modalState_js__WEBPACK_IMPORTED_MODULE_0__["modalState"])(thanksModal);
    }
  
    function error() {
      Object(_modals_modalState_js__WEBPACK_IMPORTED_MODULE_0__["modalState"])(errorModal);
    }
  
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  
    function ajax(method, url, data, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          success(xhr.response, xhr.responseType);
        } else {
          error(xhr.status, xhr.response, xhr.responseType);
        }
      };
      xhr.send(data);
    };
  })

}

/* harmony default export */ __webpack_exports__["default"] = (sendForm());


/***/ }),

/***/ "./source/scripts/modules/utils.js":
/*!*****************************************!*\
  !*** ./source/scripts/modules/utils.js ***!
  \*****************************************/
/*! exports provided: addClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
function addClass(el,cl) {
  el.classList.add(cl);
};




/***/ }),

/***/ "./source/scripts/plugins/modernizr.js":
/*!*********************************************!*\
  !*** ./source/scripts/plugins/modernizr.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


  /*! modernizr 3.6.0 (Custom Build) | MIT *
   * https://modernizr.com/download/?-webp-setclasses !*/
  !function(e,n,A){function o(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function t(e,n){return typeof e===n}function a(){var e,n,A,o,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(o=t(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),s.push((o?"":"no-")+l.join("-"))}}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var t=e.split("."),a=Modernizr[t[0]];if(2==t.length&&(a=a[t[1]]),"undefined"!=typeof a)return Modernizr;n="function"==typeof n?n():n,1==t.length?Modernizr[t[0]]=n:(!Modernizr[t[0]]||Modernizr[t[0]]instanceof Boolean||(Modernizr[t[0]]=new Boolean(Modernizr[t[0]])),Modernizr[t[0]][t[1]]=n),o([(n&&0!=n?"":"no-")+t.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=t(e,"undefined")||t(e.call,"undefined")?function(e,n){return n in e&&t(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),a(),o(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map